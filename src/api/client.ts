/**
 * HTTP Client for Arvo API
 *
 * Handles communication with arvo.guru/api/v1/mcp/tools
 */

const DEFAULT_BASE_URL = 'https://arvo.guru'

export interface ApiResponse<T> {
  result?: T
  error?: string
}

export interface ToolExecutionResult {
  result: unknown
}

export class ArvoApiClient {
  private apiKey: string
  private baseUrl: string

  constructor(apiKey: string, baseUrl?: string) {
    this.apiKey = apiKey
    this.baseUrl = (baseUrl || DEFAULT_BASE_URL).replace(/\/$/, '')
  }

  /**
   * Execute a tool on the Arvo API
   */
  async executeTool(
    toolName: string,
    args: Record<string, unknown> = {}
  ): Promise<unknown> {
    const response = await fetch(`${this.baseUrl}/api/v1/mcp/tools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        tool: toolName,
        arguments: args,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.error || `API request failed with status ${response.status}`
      )
    }

    const data: ToolExecutionResult = await response.json()
    return data.result
  }

  /**
   * Get list of available tools from the API
   */
  async listTools(): Promise<Array<{
    name: string
    description: string
    inputSchema: {
      type: 'object'
      properties: Record<string, unknown>
      required: string[]
    }
    readOnly: boolean
  }>> {
    const response = await fetch(`${this.baseUrl}/api/v1/mcp/tools`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch tools list: ${response.status}`)
    }

    const data = await response.json()
    return data.tools || []
  }

  /**
   * Validate the API key
   */
  async validateKey(): Promise<{
    valid: boolean
    userId?: string
    scopes?: string[]
    error?: string
  }> {
    const response = await fetch(`${this.baseUrl}/api/v1/auth/validate-key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    })

    return response.json()
  }
}

export function createClient(apiKey?: string, baseUrl?: string): ArvoApiClient {
  const key = apiKey || process.env.ARVO_API_KEY

  if (!key) {
    throw new Error(
      'ARVO_API_KEY environment variable is required. ' +
        'Get your API key from https://arvo.guru/settings#api-keys'
    )
  }

  return new ArvoApiClient(key, baseUrl)
}
