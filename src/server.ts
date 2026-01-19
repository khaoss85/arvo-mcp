import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { TOOLS, getToolByName } from './tools/index.js'
import { createClient, ArvoApiClient } from './api/client.js'

/**
 * Arvo MCP Server
 *
 * Provides access to Arvo's workout tracking and AI coaching functionality
 * through the Model Context Protocol (MCP).
 *
 * Usage:
 *   ARVO_API_KEY=arvo_xxx npx arvo-mcp
 *
 * Or configure in Claude Desktop/Cursor MCP settings.
 */

const SERVER_NAME = 'arvo-mcp'
const SERVER_VERSION = '1.0.0'

let apiClient: ArvoApiClient | null = null

function getClient(): ArvoApiClient {
  if (!apiClient) {
    apiClient = createClient()
  }
  return apiClient
}

export async function runServer() {
  // Validate API key on startup
  const client = getClient()

  try {
    const validation = await client.validateKey()
    if (!validation.valid) {
      console.error(`[${SERVER_NAME}] Invalid API key: ${validation.error}`)
      console.error(`[${SERVER_NAME}] Get your API key from https://arvo.guru/settings#api-keys`)
      process.exit(1)
    }
    console.error(`[${SERVER_NAME}] API key validated successfully`)
  } catch (error) {
    console.error(`[${SERVER_NAME}] Failed to validate API key:`, error)
    console.error(`[${SERVER_NAME}] Make sure ARVO_API_KEY is set and you have internet connectivity`)
    process.exit(1)
  }

  // Create MCP server
  const server = new Server(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
      },
    }
  )

  // Handle list_tools request
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return { tools: TOOLS }
  })

  // Handle call_tool request
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params

    // Validate tool exists
    const tool = getToolByName(name)
    if (!tool) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ error: `Unknown tool: ${name}` }),
          },
        ],
        isError: true,
      }
    }

    try {
      // Execute tool via API
      const result = await getClient().executeTool(
        name,
        (args as Record<string, unknown>) || {}
      )

      // Format result
      const resultText =
        typeof result === 'string' ? result : JSON.stringify(result, null, 2)

      return {
        content: [
          {
            type: 'text',
            text: resultText,
          },
        ],
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred'

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ error: errorMessage }),
          },
        ],
        isError: true,
      }
    }
  })

  // Connect to stdio transport
  const transport = new StdioServerTransport()
  await server.connect(transport)

  console.error(`[${SERVER_NAME}] Server started on stdio`)
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.error(`[${SERVER_NAME}] Shutting down...`)
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.error(`[${SERVER_NAME}] Shutting down...`)
  process.exit(0)
})
