# How It Works - Step 1: Desktop Agent

## Specifications
- **Ratio**: 1:1 (square)
- **Purpose**: Illustration for "Install Desktop Agent" step
- **Output File**: `step-1-desktop.png`

## Prompt

```
Create an illustration showing a desktop computer running a background agent alongside coding software.

CONCEPT:
A developer's desktop setup with the DaudAI agent running in the background, connecting Claude Code sessions to the cloud.

ELEMENTS:
- A desktop monitor or laptop screen showing:
  - A code editor / terminal window (representing Claude Code)
  - A small system tray icon or floating widget (the DaudAI agent)
- Visual indicator of the agent "watching" the session (like subtle scan lines or glow)
- An upward arrow or connection line going to a cloud/server icon
- The connection should look secure (maybe a small lock on the line)
- Subtle "1" badge or step indicator

STYLE:
- Clean, flat illustration
- Isometric or front-view perspective
- Color palette:
  - Orange: #E07A00, #F5921B (for agent icon, connection lines)
  - Brown: #5C3D2E (for device outlines)
  - Dark background on screen: #1A1210
  - Cream: #FFF8F0 (light elements)
- Friendly and approachable
- Not too complex - single clear concept

MOOD:
- "Easy to set up"
- Background process, non-intrusive
- Secure connection

Square format, 1:1 aspect ratio
```

## Visual Reference (ASCII)

```
┌─────────────────────────────────────┐
│                  ☁️                  │
│                  ▲                  │
│                  │                  │
│                  │ 🔒               │
│            ┌─────┴─────┐            │
│            │           │            │
│      ┌─────┴───────────┴─────┐      │
│      │ ┌─────────────────┐   │      │
│      │ │ $ claude        │ 🟠│      │
│      │ │ > Working on... │   │      │
│      │ │ █               │   │      │
│      │ └─────────────────┘   │      │
│      │      Terminal    Agent│      │
│      └───────────────────────┘      │
│           ═══════════════           │
│              [Desktop]              │
│                                     │
│   🟠 = DaudAI Agent (system tray)   │
└─────────────────────────────────────┘
```

## Key Message
"Install once, runs in background. The agent securely exposes your Claude Code sessions."
