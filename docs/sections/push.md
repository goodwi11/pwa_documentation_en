# Push Notifications

Push notifications are a powerful tool for bringing users back and increasing retention. Comsign PWA has a built-in full-featured push creation and management system.

## Section Overview {#push_overview}

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

Filters:<br>
**All** — all created pushes<br>
**Active** — pushes being sent<br>
**Sent** — already sent notifications<br>
**Drafts** — saved but not active<br>
**Paused** — temporarily stopped pushes

## Creating a Push {#push_creation}

To create a new push notification, click **"Create Push"**. A settings form will open.

**Step 1. Basic Settings**

**Name**<br>
Internal push name for your convenience. Users don't see it.

**Type**<br>
Select delivery type and configure sending parameters:

- **Scheduled** — push is sent at a specified time
- **Event-based** — push is sent when a trigger fires

<!-- **Step 2. Sending Configuration**

**Event-based**

When selecting this type, specify:

**Event for Sending**

Select a trigger from the list:
**Install** — push will be sent immediately after PWA installation

**Delay**

Specify the delay before sending after the event triggers:<br>
- Days: 0-30<br>
- Hours: 0-23<br>
- Minutes: 0-59<br>
- Seconds: 0-59

For example, a delay of "0 days, 1 hour, 0 minutes, 0 seconds" means the push will be sent one hour after installation. -->

<!-- ### Scheduled

When selecting this type, the push will be sent to all users at the specified time. Configure the send date and time in the corresponding fields. -->

**Step 2.** Content and Design Settings

!!! note "Note"
    A preview is displayed to the right of the form — this is how your push will look on the user's device.

**Title**<br>
The main notification text visible in the notification shade.<br>
Recommended length — up to 50 characters.

**Icon**<br>
Upload the push icon (displayed to the left of the text).<br>
Format: JPEG/PNG, recommended size: 192x192 px.

**Image**<br>
Large image displayed in the expanded notification.<br>
Format: JPEG/PNG.

**Text**<br>
Additional text under the title.<br>
You can provide more information or a call-to-action.

**Link**<br>
URL the user will go to when clicking the push.<br>
If left empty, the offer from PWA settings will open.

**Subscriber Languages**<br>
Select which language settings users should receive this push.<br>
This allows creating different push versions for different GEOs and showing relevant content.

After filling all fields, click **"Save"**. The created push will appear in the list and become available for selection in the PWA builder.