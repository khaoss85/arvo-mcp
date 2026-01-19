#!/usr/bin/env node

import { runServer } from '../dist/server.js'

runServer().catch((error) => {
  console.error('Failed to start arvo-mcp server:', error)
  process.exit(1)
})
