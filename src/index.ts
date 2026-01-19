/**
 * Arvo MCP Server
 *
 * Official Model Context Protocol (MCP) server for Arvo - AI workout coach.
 * Access your training data through Claude Desktop, Cursor, and other MCP clients.
 *
 * @example
 * ```json
 * {
 *   "mcpServers": {
 *     "arvo": {
 *       "command": "npx",
 *       "args": ["arvo-mcp"],
 *       "env": {
 *         "ARVO_API_KEY": "arvo_your_api_key_here"
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * @see https://arvo.guru
 * @see https://github.com/arvo-health/arvo-mcp
 */

export { runServer, createServer, createSandboxServer } from './server.js'
export { TOOLS, getToolByName, isReadOnlyTool } from './tools/index.js'
export { ArvoApiClient, createClient } from './api/client.js'
