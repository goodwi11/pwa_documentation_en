# Dashboard

## Interface Overview

After logging in, you'll land on your dashboard. The interface consists of:

**Left Menu:**
- **Create PWA** — button for creating a new app
- **Home** — list of all your PWAs
- **Constructor** — editor for creating and modifying PWAs
- **Statistics** — analytics for your apps
- **Push** — push notification management

**Top Menu:**
- Dashboard
- Pricing
- FAQ
- Documentation
- Language switcher
- Clients Area — login/logout

## PWA Applications List

The main page displays a table with all your PWA applications. Each application shows:

| Column | Description |
|--------|-------------|
| Name | Your PWA name |
| ID | Unique app identifier |
| Domain | Linked domain |
| Language | App interface language |
| Created | Creation date |
| Modified | Last modification date |
| Status | Current status |
| Action | Edit and delete buttons |

Above the table are filters for quick navigation:
- **All** — all applications
- **Active** — published and working PWAs
- **Wait** — apps awaiting something (e.g., domain verification)
- **Content** — apps with incomplete content
- **Draft** — saved but unpublished apps

## Application Statuses

Each PWA can have one of these statuses:

- **Active** (green) — app is published and available at the specified domain
- **Waiting** (yellow) — app is awaiting completion of some process (domain binding, moderation)
- **Draft** (blue) — app is saved but not published
- **Content** (red) — 

## Managing Applications

Each application in the table has available actions:

- **Edit** (pencil icon) — opens the constructor for modifying PWA settings
- **Delete** (trash icon) — deletes the app without recovery option

!!! warning 
 App deletion is irreversible. All data, including statistics and domain binding, will be lost.