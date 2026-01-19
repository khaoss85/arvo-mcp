# Arvo MCP Server

> **AI Workout Coach MCP Server** - Access your training data through Claude Desktop, Cursor, and other MCP-compatible AI clients.

[![npm version](https://img.shields.io/npm/v/arvo-mcp.svg)](https://www.npmjs.com/package/arvo-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[Arvo](https://arvo.guru)** is an AI-powered fitness coach that creates personalized workout plans, tracks your progress, and adapts to your goals. This MCP server lets you access your workout data from AI assistants like Claude.

## Features

- **29 fitness tools** - Profile, workouts, splits, PRs, body progress, and more
- **Read & Write access** - View your data and make changes through natural conversation
- **Secure API key authentication** - Your data stays private
- **Works with any MCP client** - Claude Desktop, Cursor, Windsurf, and more

## Quick Start

### 1. Get your API key

1. Sign up or log in at [arvo.guru](https://arvo.guru)
2. Go to **Settings** → **API Keys**
3. Click **Create Key** and copy your API key

### 2. Configure your MCP client

#### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "arvo": {
      "command": "npx",
      "args": ["-y", "arvo-mcp"],
      "env": {
        "ARVO_API_KEY": "arvo_your_api_key_here"
      }
    }
  }
}
```

**Config file location:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

#### Cursor

Add to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "arvo": {
      "command": "npx",
      "args": ["-y", "arvo-mcp"],
      "env": {
        "ARVO_API_KEY": "arvo_your_api_key_here"
      }
    }
  }
}
```

### 3. Start chatting!

After restarting your AI client, try asking:

- *"What's my workout for today?"*
- *"Show me my recent PRs"*
- *"How's my progress on bench press?"*
- *"What muscle groups am I training this week?"*

## Available Tools

### Read-Only Tools (19)

| Tool | Description |
|------|-------------|
| `get_user_profile` | Get your fitness profile, experience level, and preferences |
| `get_active_split` | Get your current training split and schedule |
| `get_recent_workouts` | View your most recent completed workouts |
| `get_workout_for_day` | Get the workout for any cycle day |
| `get_workout_stats` | Get aggregated training statistics |
| `get_active_insights` | View AI-generated training insights |
| `get_personal_records` | See your PRs for each exercise |
| `get_exercise_progress` | Track progression for specific exercises |
| `get_exercise_video` | Get demonstration videos for exercises |
| `get_volume_by_muscle` | View volume distribution by muscle group |
| `get_coach_info` | Get your coach's information |
| `get_coach_notes` | View notes from your coach |
| `get_approach_details` | Learn about your training methodology |
| `get_body_progress` | Track body composition changes |
| `get_cycle_history` | View training cycle history |
| `get_booking_info` | See your PT session bookings |
| `get_ai_memory` | Access saved AI context about you |
| `get_caloric_history` | View caloric phase history |
| `get_approach_history` | See methodology changes over time |

### Write Tools (10)

| Tool | Description |
|------|-------------|
| `save_memory` | Save notes for the AI to remember |
| `update_caloric_phase` | Change your current bulk/cut/maintain phase |
| `update_weak_points` | Update priority muscle groups |
| `report_physical_issue` | Log pain or injuries |
| `skip_exercise` | Skip an exercise in today's workout |
| `generate_workout` | Generate a new workout |
| `update_equipment` | Update your available equipment |
| `add_exercise` | Add an exercise to your workout |
| `swap_exercise` | Request exercise alternatives |
| `apply_swap` | Apply an exercise swap |

## Security

- Your API key is stored locally and never sent to third parties
- All communication uses HTTPS
- API keys can be revoked anytime from your Arvo dashboard
- Each key has configurable scopes (read/write)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ARVO_API_KEY` | Yes | Your Arvo API key |
| `ARVO_BASE_URL` | No | API base URL (default: `https://arvo.guru`) |

## Requirements

- Node.js 18+
- An Arvo account ([sign up free](https://arvo.guru))

## Links

- **Website**: [arvo.guru](https://arvo.guru)
- **Documentation**: [arvo.guru/docs](https://arvo.guru/docs)
- **Issues**: [GitHub Issues](https://github.com/arvo-health/arvo-mcp/issues)
- **MCP Protocol**: [modelcontextprotocol.io](https://modelcontextprotocol.io)

## License

MIT - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <a href="https://arvo.guru">
    <strong>Start training smarter with Arvo</strong>
  </a>
</p>
