# Android App Screenshot

## Specifications
- **Ratio**: 9:19.5 (portrait phone screen)
- **Purpose**: Show what the Android app looks like in the "Available on Mobile" section
- **Output File**: `screenshot-android.png`

## Prompt

```
Create a UI mockup screenshot for an Android mobile app called "DaudAI" - an app that lets developers monitor and control their Claude AI coding sessions remotely.

SCREEN CONTENT - Show a session monitoring view:
- Status bar at top (Android style)
- App header with "daud.ai" logo and hamburger menu
- "My Sessions" title
- List of 2-3 Claude Code sessions showing:
  - Session name (like "Project: DaudAI" or "Fix login bug")
  - Status indicator (green dot = active, gray = idle)
  - Last message preview
  - Timestamp
- One session card expanded showing:
  - Recent message from Claude
  - "Approve" and "Deny" buttons (for permission request)
  - Message input field at bottom
- Bottom navigation: Home, Sessions, Devices, Settings

STYLE:
- Material Design 3 / Android native look
- Dark theme with warm accents
- Background: Dark brown (#1A1210)
- Cards: Slightly lighter (#241C18)
- Accent color: Orange (#F5921B)
- Text: Cream/white (#F5EDE8)
- Clean, modern UI with rounded corners
- Subtle shadows

DETAILS:
- Show a permission approval popup in one of the sessions: "Claude wants to run: git push origin main" with Approve/Deny buttons
- Show real-looking code snippets in message previews
- Include status indicators and timestamps

Portrait orientation, phone screen ratio (9:19.5)
```

## Visual Reference (ASCII)

```
┌─────────────────────────┐
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │  ← Status bar
│  ☰  daud.ai      🔔 ⚙️  │  ← Header
│─────────────────────────│
│  My Sessions            │
│                         │
│ ┌─────────────────────┐ │
│ │ 🟢 Project: DaudAI  │ │
│ │ Claude: "I've fixed │ │
│ │ the auth bug..."    │ │
│ │            2m ago   │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ ⚠️ Permission Request│ │
│ │ ─────────────────── │ │
│ │ Claude wants to run:│ │
│ │ `git push origin`   │ │
│ │                     │ │
│ │ [Deny]    [Approve] │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ ⚫ Old Project      │ │
│ │ Session ended       │ │
│ │           Yesterday │ │
│ └─────────────────────┘ │
│                         │
│─────────────────────────│
│  🏠    📋    📱    ⚙️   │  ← Bottom nav
└─────────────────────────┘
```

## Attached Reference Images
- Attach: `c:\code\daudai\marketing-website\public\images\logo.png` (for in-app logo)
