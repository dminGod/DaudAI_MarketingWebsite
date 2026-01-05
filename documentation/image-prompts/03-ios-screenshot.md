# iOS App Screenshot

## Specifications
- **Ratio**: 9:19.5 (portrait phone screen)
- **Purpose**: Show what the iOS app looks like in the "Available on Mobile" section
- **Output File**: `screenshot-ios.png`

## Prompt

```
Create a UI mockup screenshot for an iOS mobile app called "DaudAI" - an app that lets developers monitor and control their Claude AI coding sessions remotely.

SCREEN CONTENT - Show a live session chat view:
- iOS status bar with notch/dynamic island at top
- Navigation bar with back arrow, session title "Project: DaudAI", and status dot (green)
- Chat-style message thread showing conversation:
  - Messages from Claude (left-aligned, darker bubbles)
  - Messages from User (right-aligned, orange bubbles)
  - Show code blocks within messages
  - Timestamps between message groups
- A permission request card inline in the chat
- Message input bar at bottom with send button

STYLE:
- iOS native look (SF Pro font style)
- Dark theme with warm accents
- Background: Dark brown (#1A1210)
- Claude messages: Dark card (#241C18)
- User messages: Orange (#E07A00)
- Accent color: Orange (#F5921B)
- Text: Cream/white (#F5EDE8)
- iOS-style rounded corners and blur effects
- Smooth, premium feel

SAMPLE CONVERSATION TO SHOW:
1. Claude: "I've analyzed the codebase and found 3 potential issues with the authentication flow."
2. Claude: [Code block showing a fix]
3. User: "Looks good, please apply the fix"
4. Claude: "I need permission to modify src/auth/login.ts"
5. [Permission card with file icon and Approve/Deny buttons]

Portrait orientation, iPhone screen ratio (9:19.5)
```

## Visual Reference (ASCII)

```
┌─────────────────────────┐
│      ▔▔▔▔▔▔▔▔▔▔        │  ← Dynamic Island
│  ←  Project: DaudAI  🟢 │  ← Nav bar
│─────────────────────────│
│                         │
│ ┌──────────────────┐    │
│ │ I've analyzed    │    │  ← Claude message
│ │ the codebase...  │    │
│ └──────────────────┘    │
│                         │
│ ┌──────────────────┐    │
│ │ ```typescript    │    │  ← Code block
│ │ const auth =     │    │
│ │   await login()  │    │
│ │ ```              │    │
│ └──────────────────┘    │
│                         │
│    ┌──────────────────┐ │
│    │ Looks good,     │ │  ← User message
│    │ apply the fix   │ │
│    └──────────────────┘ │
│                         │
│ ┌──────────────────┐    │
│ │ 📄 Permission    │    │
│ │ Modify login.ts  │    │
│ │ [Deny] [Approve] │    │
│ └──────────────────┘    │
│                         │
│─────────────────────────│
│ [Message input...]  ➤  │  ← Input bar
└─────────────────────────┘
```

## Attached Reference Images
- Attach: `c:\code\daudai\marketing-website\public\images\logo.png` (for style reference)
