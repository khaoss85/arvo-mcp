import { describe, it, expect } from 'vitest'
import { TOOLS, getToolByName, isReadOnlyTool } from '../src/tools/definitions'

describe('TOOLS', () => {
  it('should have 29 tools defined', () => {
    expect(TOOLS).toHaveLength(29)
  })

  it('should have all required tool properties', () => {
    for (const tool of TOOLS) {
      expect(tool).toHaveProperty('name')
      expect(tool).toHaveProperty('description')
      expect(tool).toHaveProperty('inputSchema')
      expect(tool.inputSchema).toHaveProperty('type', 'object')
      expect(tool.inputSchema).toHaveProperty('properties')
      expect(tool.inputSchema).toHaveProperty('required')
    }
  })

  it('should have unique tool names', () => {
    const names = TOOLS.map((t) => t.name)
    const uniqueNames = new Set(names)
    expect(uniqueNames.size).toBe(names.length)
  })
})

describe('getToolByName', () => {
  it('should return tool when found', () => {
    const tool = getToolByName('get_user_profile')
    expect(tool).toBeDefined()
    expect(tool?.name).toBe('get_user_profile')
  })

  it('should return undefined for unknown tool', () => {
    const tool = getToolByName('unknown_tool')
    expect(tool).toBeUndefined()
  })
})

describe('isReadOnlyTool', () => {
  it('should return true for read-only tools', () => {
    expect(isReadOnlyTool('get_user_profile')).toBe(true)
    expect(isReadOnlyTool('get_active_split')).toBe(true)
    expect(isReadOnlyTool('get_recent_workouts')).toBe(true)
  })

  it('should return false for write tools', () => {
    expect(isReadOnlyTool('save_memory')).toBe(false)
    expect(isReadOnlyTool('update_caloric_phase')).toBe(false)
    expect(isReadOnlyTool('generate_workout')).toBe(false)
  })

  it('should return false for unknown tools', () => {
    expect(isReadOnlyTool('unknown_tool')).toBe(false)
  })
})
