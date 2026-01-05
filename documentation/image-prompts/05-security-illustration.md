# Security Illustration

## Specifications
- **Ratio**: 1:1 (square)
- **Purpose**: Visual for the "Security First" section on homepage
- **Output File**: `security-illustration.png`

## Prompt

```
Create an illustration representing end-to-end encryption and zero-knowledge security for a developer tools app.

CONCEPT:
A visual metaphor showing secure data transmission between devices where the middle relay cannot see the content.

ELEMENTS:
- Left side: A smartphone icon
- Right side: A laptop/desktop icon
- Center: A server/cloud icon (representing relay)
- Connection lines between phone↔server↔laptop
- The data traveling between phone and laptop shown as LOCKED (padlock icons or encrypted symbols)
- The server in the middle shown with "blind" imagery (like X eyes or a blindfold) - it routes but cannot see
- Shield or lock motifs around the devices
- Small key icons near the phone and laptop (they have the keys)
- The server has NO key (zero-knowledge)

STYLE:
- Clean, flat illustration style
- Isometric or 2.5D perspective
- Color palette:
  - Orange: #E07A00, #F5921B (for locks, keys, secure elements)
  - Brown: #5C3D2E (for outlines, devices)
  - Cream/White: #FFF8F0, #FFFFFF (backgrounds, highlights)
  - Light green accents for "secure/good" indicators
- Modern, friendly, not scary
- Professional infographic style

MOOD:
- Trustworthy
- Secure but approachable
- Technical but understandable

Square format, 1:1 aspect ratio
```

## Visual Reference (ASCII)

```
┌─────────────────────────────────────┐
│                                     │
│                 🔒                  │
│               ╱    ╲                │
│         🔒  ╱        ╲  🔒         │
│           ╱            ╲            │
│    ┌────┐    ┌──────┐    ┌────┐    │
│    │ 📱 │════│ 🖥️☁️  │════│ 💻 │    │
│    │    │    │  ✖✖  │    │    │    │
│    │ 🔑 │    │(blind)│    │ 🔑 │    │
│    └────┘    └──────┘    └────┘    │
│   Phone      Relay       Desktop   │
│  (has key)  (no key)   (has key)   │
│                                     │
│   ════ = encrypted data flow        │
│   🔒 = data is locked              │
│   ✖✖ = cannot see content          │
│                                     │
└─────────────────────────────────────┘
```

## Key Message to Convey
"Your devices have the encryption keys. The relay server routes encrypted data but can never decrypt it. Zero-knowledge architecture."
