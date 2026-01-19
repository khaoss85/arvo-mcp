import type { Tool } from '@modelcontextprotocol/sdk/types.js'

/**
 * All 29 tools available in the Arvo MCP server
 *
 * These tools provide access to workout tracking, fitness insights,
 * and AI coaching functionality through the Arvo platform.
 */
export const TOOLS: Tool[] = [
  // ═══════════════════════════════════════════════════════════════════
  // READ-ONLY TOOLS (19)
  // ═══════════════════════════════════════════════════════════════════

  {
    name: 'get_user_profile',
    description:
      "Get the user's fitness profile including name, age, experience level, training approach, weak points, equipment, caloric phase, and preferences.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_active_split',
    description:
      "Get the user's active training split plan including session types, frequency, current cycle day, and volume distribution.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_recent_workouts',
    description:
      'Get the most recent completed workouts with stats including duration, volume, sets, mental readiness, and exercises.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of recent workouts to retrieve (default: 5, max: 10)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_workout_for_day',
    description:
      "Get the workout for a specific cycle day with all exercise details: exercises, target weights, reps, RIR. If cycle_day is omitted, returns today's workout.",
    inputSchema: {
      type: 'object',
      properties: {
        cycle_day: {
          type: 'number',
          description:
            'Day of the cycle (1 to N). If omitted, returns current day workout.',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_workout_stats',
    description:
      'Get aggregated workout statistics: total workouts completed, total volume, total sets, average duration, average mental readiness, weekly frequency.',
    inputSchema: {
      type: 'object',
      properties: {
        days: {
          type: 'number',
          description: 'Number of days to consider for stats (default: 30, max: 90)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_active_insights',
    description:
      "Get the user's active insights: reported pain, technical issues, recovery notes, equipment observations.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_personal_records',
    description:
      "Get the user's Personal Records (PRs) for each exercise: max weight, reps, estimated 1RM.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of PRs to retrieve (default: 10, max: 20)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_exercise_progress',
    description:
      'Get the progression trend for a specific exercise: estimated 1RM over time, weight, reps.',
    inputSchema: {
      type: 'object',
      properties: {
        exercise_name: {
          type: 'string',
          description: "Name of the exercise (e.g., 'squat', 'bench press', 'deadlift')",
        },
        days: {
          type: 'number',
          description: 'Number of days to consider (default: 60, max: 90)',
        },
      },
      required: ['exercise_name'],
    },
  },

  {
    name: 'get_exercise_video',
    description:
      'Get a demonstration video for an exercise from MuscleWiki. Use when the user asks how to perform an exercise.',
    inputSchema: {
      type: 'object',
      properties: {
        exercise_name: {
          type: 'string',
          description:
            "Name of the exercise in English (e.g., 'bench press', 'squat', 'hip thrust')",
        },
      },
      required: ['exercise_name'],
    },
  },

  {
    name: 'get_volume_by_muscle',
    description:
      'Get the volume distribution (sets) by muscle group in the current training cycle.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_coach_info',
    description:
      "Get information about the user's assigned coach: name, bio, specializations, certifications, years of experience.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_coach_notes',
    description:
      "Get notes from the user's coach including training advice and personalized recommendations.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of notes to retrieve (default: 5)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_approach_details',
    description:
      "Get details about the user's training methodology: approach name, description, principles, progression scheme.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_body_progress',
    description:
      "Get the user's body composition progress: weight changes, measurements over time.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of progress checks to retrieve (default: 10)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_cycle_history',
    description:
      "Get the user's training cycle history: completed cycles, PRs achieved, volume milestones.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of cycles to retrieve (default: 5)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_booking_info',
    description:
      "Get the user's booking information for personal training sessions with their coach.",
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },

  {
    name: 'get_ai_memory',
    description:
      "Get the AI coach's memory about the user: saved notes, preferences, and important context.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of memories to retrieve (default: 10)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_caloric_history',
    description:
      "Get the user's caloric phase history: bulk, cut, maintenance periods over time.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of history entries to retrieve (default: 10)',
        },
      },
      required: [],
    },
  },

  {
    name: 'get_approach_history',
    description:
      "Get the user's training approach history: methodology changes over time.",
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of history entries to retrieve (default: 5)',
        },
      },
      required: [],
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // WRITE TOOLS (10)
  // ═══════════════════════════════════════════════════════════════════

  {
    name: 'save_memory',
    description:
      'Save a note to AI memory for future reference. Use to remember important user preferences, goals, or context.',
    inputSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: 'Short title for the memory',
        },
        description: {
          type: 'string',
          description: 'Detailed content of the memory',
        },
        category: {
          type: 'string',
          description:
            "Category for organization (e.g., 'preference', 'goal', 'limitation')",
        },
      },
      required: ['title', 'description', 'category'],
    },
  },

  {
    name: 'update_caloric_phase',
    description:
      "Update the user's current caloric phase (bulk, cut, maintain, or recomp).",
    inputSchema: {
      type: 'object',
      properties: {
        phase: {
          type: 'string',
          enum: ['bulk', 'cut', 'maintain', 'recomp'],
          description: 'The new caloric phase',
        },
      },
      required: ['phase'],
    },
  },

  {
    name: 'update_weak_points',
    description:
      "Update the user's weak points (muscle groups to prioritize). Can set, add, or remove muscles.",
    inputSchema: {
      type: 'object',
      properties: {
        muscles: {
          type: 'array',
          items: { type: 'string' },
          description:
            "List of muscle groups (e.g., ['chest', 'shoulders', 'back'])",
        },
        action: {
          type: 'string',
          enum: ['set', 'add', 'remove'],
          description:
            'Action to perform: set replaces all, add appends, remove deletes',
        },
      },
      required: ['muscles', 'action'],
    },
  },

  {
    name: 'report_physical_issue',
    description:
      'Report a physical issue or pain that should be considered for workout adjustments.',
    inputSchema: {
      type: 'object',
      properties: {
        body_part: {
          type: 'string',
          description: "Body part affected (e.g., 'shoulder', 'lower back', 'knee')",
        },
        side: {
          type: 'string',
          description: "'left', 'right', or 'both'",
        },
        severity: {
          type: 'string',
          description: "'mild', 'moderate', or 'severe'",
        },
        description: {
          type: 'string',
          description: 'Detailed description of the issue',
        },
      },
      required: ['body_part', 'side', 'severity', 'description'],
    },
  },

  {
    name: 'skip_exercise',
    description:
      "Skip an exercise in today's workout due to equipment issues, injury, or other reasons.",
    inputSchema: {
      type: 'object',
      properties: {
        exercise_name: {
          type: 'string',
          description: 'Name of the exercise to skip',
        },
        reason: {
          type: 'string',
          description: 'Reason for skipping (optional)',
        },
      },
      required: ['exercise_name'],
    },
  },

  {
    name: 'generate_workout',
    description:
      'Generate a new workout for a specific cycle day. Creates exercises based on training approach.',
    inputSchema: {
      type: 'object',
      properties: {
        cycle_day: {
          type: 'number',
          description: 'Day of the cycle to generate workout for (default: today)',
        },
      },
      required: [],
    },
  },

  {
    name: 'update_equipment',
    description:
      "Update the user's available equipment list. Can add, remove, or set equipment.",
    inputSchema: {
      type: 'object',
      properties: {
        equipment: {
          type: 'array',
          items: { type: 'string' },
          description:
            "List of equipment (e.g., ['barbell', 'dumbbells', 'pull_up_bar'])",
        },
        action: {
          type: 'string',
          enum: ['add', 'remove', 'set'],
          description: 'Action to perform on equipment list',
        },
      },
      required: ['equipment', 'action'],
    },
  },

  {
    name: 'add_exercise',
    description:
      "Add a new exercise to today's workout.",
    inputSchema: {
      type: 'object',
      properties: {
        exercise_name: {
          type: 'string',
          description: 'Name of the exercise to add',
        },
        sets: {
          type: 'number',
          description: 'Number of sets (default: 3)',
        },
        reps: {
          type: 'number',
          description: 'Target reps per set (default: based on approach)',
        },
      },
      required: ['exercise_name'],
    },
  },

  {
    name: 'swap_exercise',
    description:
      'Request an alternative exercise due to equipment or preference. Returns suggestions for swaps.',
    inputSchema: {
      type: 'object',
      properties: {
        exercise_name: {
          type: 'string',
          description: 'Name of the exercise to swap out',
        },
        reason: {
          type: 'string',
          description:
            "Reason for swap (e.g., 'equipment', 'injury', 'preference')",
        },
        custom_reason: {
          type: 'string',
          description: 'Custom reason if not in predefined list',
        },
      },
      required: ['exercise_name'],
    },
  },

  {
    name: 'apply_swap',
    description:
      'Apply a previously suggested exercise swap to the workout.',
    inputSchema: {
      type: 'object',
      properties: {
        old_exercise_name: {
          type: 'string',
          description: 'Name of the exercise being replaced',
        },
        new_exercise_name: {
          type: 'string',
          description: 'Name of the new exercise',
        },
        sets: {
          type: 'number',
          description: 'Number of sets for new exercise (optional)',
        },
        reps: {
          type: 'number',
          description: 'Target reps for new exercise (optional)',
        },
        reason: {
          type: 'string',
          description: 'Reason for the swap (optional)',
        },
      },
      required: ['old_exercise_name', 'new_exercise_name'],
    },
  },
]

/**
 * Get a tool by name
 */
export function getToolByName(name: string): Tool | undefined {
  return TOOLS.find((tool) => tool.name === name)
}

/**
 * Check if a tool is read-only
 */
export function isReadOnlyTool(name: string): boolean {
  const readOnlyTools = new Set([
    'get_user_profile',
    'get_active_split',
    'get_recent_workouts',
    'get_workout_for_day',
    'get_workout_stats',
    'get_active_insights',
    'get_personal_records',
    'get_exercise_progress',
    'get_exercise_video',
    'get_volume_by_muscle',
    'get_coach_info',
    'get_coach_notes',
    'get_approach_details',
    'get_body_progress',
    'get_cycle_history',
    'get_booking_info',
    'get_ai_memory',
    'get_caloric_history',
    'get_approach_history',
  ])

  return readOnlyTools.has(name)
}
