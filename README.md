# Arvo MCP Server - Fitness & Workout Tracker for Claude

> **Fitness tracking MCP server** - Log gym sessions, track personal records (PRs), analyze body progress, and manage training splits through Claude Desktop, Cursor, and other MCP clients.

[![npm version](https://img.shields.io/npm/v/arvo-mcp.svg)](https://www.npmjs.com/package/arvo-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io)

**arvo-mcp** is a Model Context Protocol (MCP) server that connects your AI assistant to [Arvo](https://arvo.guru), an AI-powered fitness coach. Access your **workout history**, **personal records**, **body composition**, and **training plans** directly from Claude Desktop, Cursor, or any MCP-compatible client.

Perfect for fitness enthusiasts who want to:
- 🏋️ Ask "What's my workout today?" and get your personalized training plan
- 📊 Track gym progress with AI-powered insights
- 💪 Monitor PRs, volume, and muscle group distribution
- 📈 Analyze body composition trends over time

## Features

- **29 fitness tools** - Profile, workouts, splits, PRs, body progress, and more
- **Read & Write access** - View your data and make changes through natural conversation
- **Secure API key authentication** - Your data stays private
- **Works with any MCP client** - Claude Desktop, Cursor, Windsurf, and more

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/khaoss85-arvo-mcp).

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

For security vulnerability reports, see [SECURITY.md](SECURITY.md).

## FAQ

### What is the Model Context Protocol (MCP)?

MCP is an open protocol that enables AI assistants like Claude to securely access external data sources. arvo-mcp lets Claude access your workout data, training history, and fitness metrics through natural conversation.

### How is my data protected?

- API keys are hashed with SHA-256 (never stored in plaintext)
- All communication uses HTTPS encryption
- Keys can be revoked instantly from your dashboard
- Scoped permissions (read-only or read-write)
- Your API key is stored only on your local machine

### Can I use this offline?

No, arvo-mcp requires an internet connection to communicate with arvo.guru servers. The MCP server runs locally but fetches your data from the cloud.

### What AI clients are supported?

Claude Desktop, Cursor, Windsurf, and any MCP-compatible client. The server uses the standard MCP stdio transport, making it compatible with any client that supports the protocol.

### How do I report security issues?

Email security@arvo.guru with details. See [SECURITY.md](SECURITY.md) for our full security policy and responsible disclosure process.

### What data can the AI access?

The AI can access your workout plans, exercise history, personal records, body composition tracking, and coach notes. Write tools allow saving memories, updating preferences, and modifying workouts. You control access through API key scopes.

### Does this work without an Arvo account?

No, you need an Arvo account to generate an API key. Sign up free at [arvo.guru](https://arvo.guru).

### How do I update to a new version?

If you use `npx -y arvo-mcp`, it automatically fetches the latest version. For global installations, run `npm update -g arvo-mcp`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ARVO_API_KEY` | Yes | Your Arvo API key |
| `ARVO_BASE_URL` | No | API base URL (default: `https://arvo.guru`) |

## Requirements

- Node.js 18+
- An Arvo account ([sign up free](https://arvo.guru))

## Links

- **Arvo - AI Personal Trainer**: [arvo.guru](https://arvo.guru)
- **Documentation**: [arvo.guru/docs](https://arvo.guru/docs)
- **Report Issues**: [GitHub Issues](https://github.com/khaoss85/arvo-mcp/issues)
- **MCP Protocol**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **npm Package**: [npmjs.com/package/arvo-mcp](https://www.npmjs.com/package/arvo-mcp)

## Related

Looking for fitness tracking with AI? Check out:
- [Arvo](https://arvo.guru) - AI workout coach that creates personalized training programs
- [Model Context Protocol](https://modelcontextprotocol.io) - The open protocol powering this integration

## License

MIT - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>🏋️ Track your gym workouts with AI</strong><br>
  <a href="https://arvo.guru">Get started with Arvo →</a>
</p>
