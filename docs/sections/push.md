# Push Notifications

Push notifications are a powerful tool for bringing users back and increasing retention. Comsign PWA has a built-in full-featured push creation and management system.

## Section Overview

The **"Push"** section in the left menu opens the management page for all your push notifications.

**Section Structure:**

Above the table are filters:
- **All** — all created pushes
- **Active** — pushes being sent
- **Sent** — already sent notifications
- **Drafts** — saved but not active
- **Paused** — temporarily stopped pushes

In the top right corner — the **"Create Push"** button.

**Push Table:**

| Column | Description |
|--------|-------------|
| Name | Push notification name |
| Type | Scheduled / Event-based |
| Event | Send trigger |
| Created | Creation date |
| Modified | Last modification date |
| Status | Current status |
| Action | Edit, copy, delete |

## Creating a Push

To create a new push notification, click **"Create Push"**. A settings form will open.

### Basic Settings

**Name**
Internal push name for your convenience. Users don't see it.

**Type**
Select delivery type:
- **Scheduled** — push is sent at a specified time
- **Event-based** — push is sent when a trigger fires

## Delivery Types

### Event-Based

When selecting this type, specify:

**Event for Sending**
Select a trigger from the list:
- **Install** — push will be sent immediately after PWA installation

**Delay**
Specify the delay before sending after the event triggers:

- Days: 0-30
- Hours: 0-23
- Minutes: 0-59
- Seconds: 0-59

For example, a delay of "0 days, 1 hour, 0 minutes, 0 seconds" means the push will be sent one hour after installation.

### Scheduled

When selecting this type, the push will be sent to all users at the specified time. Configure the send date and time in the corresponding fields.

## Content and Design Settings

### Content and Design

**Title**
The main notification text visible in the notification shade. Recommended length — up to 50 characters.

**Icon**
Upload the push icon (displayed to the left of the text). Format: JPEG/PNG, recommended size: 192x192 px.

**Image**
Large image displayed in the expanded notification. Format: JPEG/PNG.

**Text**
Additional text under the title. Here you can provide more information or a call-to-action.

**Link**
URL the user will go to when clicking the push. If left empty, the offer from PWA settings will open.

### Subscriber Languages

Select which language settings users should receive this push:
- RU — Russia
- UA — Ukraine
- And other available localizations

This allows creating different push versions for different geos and showing relevant content.

### Preview

To the right of the form is a preview — this is how your push will look on the user's device. Use it to check layout and readability.

After filling all fields, click **"Save"**. The created push will appear in the list and become available for selection in the PWA constructor.
