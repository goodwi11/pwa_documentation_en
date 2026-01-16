# PWA Builder

The constructor is the main tool for creating and editing PWA applications. It consists of five tabs that are completed sequentially.

## Basic Tab {#main}

This tab sets the basic app parameters.

**Name**
Enter your PWA name. This name will be displayed on the user's home screen and within the app itself.

**Language**
Select the app interface language from the dropdown (e.g., English, Russian).

**Offer Link**
Specify your offer URL — this is the address users will land on from the PWA. Enter the full link with https://.

**Creation Method**

Two options are available:

**Create from app** — Google Play data parsing. Choose this option if you want to create a PWA based on an existing store app. 

The system will automatically pull:
   - Name and icon
   - Screenshots
   - Description
   - Rating and download count
   - Developer information

**Create from custom design** — manual setup. Choose this if you want to upload your own creatives and fully customize the app.

**App Link** (when parsing is selected)
Paste the full Google Play app link in format:
```
https://play.google.com/store/apps/details?id=com.example.app
```

After filling all fields, click **"Next"** to proceed to domain setup.

## Domain Tab {#domain}

A domain is required for PWA operation. Binding is done through Cloudflare NS servers.

**Step 1: Bind Domain**

In the **"Domain"** field, enter your domain name without protocol and www:
```
example.com
```

Click **"Get NS Records"** — the system will generate unique NS servers for your domain.

**Step 2: Set NS Servers**

You'll receive two NS servers like:

- `NS1: piotr.ns.cloudflare.com`<dr>
- `NS2: riya.ns.cloudflare.com`

Go to your domain registrar's control panel and replace the current NS servers with the ones provided.

**Step 3: Verify Binding**

!!! important
 DNS changes can take from a few minutes to 48 hours. This depends on your registrar and current record TTL.

After DNS records update, click **"Verify Domain Binding"**. If everything is configured correctly, you can proceed to the next step.

**Common Errors:**
- Domain entered with www or protocol — enter only `domain.com`
- NS servers haven't propagated yet — wait and retry verification
- Changes weren't saved at registrar — check DNS settings again

## Content Tab {#content}

This tab configures all content that users will see in your PWA. A real-time app preview is displayed on the right.

### App Header

| Field | Description |
|-------|-------------|
| Icon | Upload app icon (recommended 512x512 px) |
| Name | App name in header |
| Author | Developer/publisher name |
| Rating | Average rating (e.g., 4.7) |
| Size | App size in MB |
| Age | Age restriction (0+, 12+, 18+, etc.) |
| Version | Version number (e.g., 1.0.0) |
| Downloads | Number of installs (e.g., 10000) |
| Reviews | Number of reviews |

### Screenshots

Upload app screenshots — they'll be displayed in a carousel on the installation page.

- Supported formats: JPEG, PNG
- Recommended aspect ratio: 9:16 (portrait) or 16:9 (landscape)
- Minimum 2 screenshots for quality display

Click **"Add Screenshots +"** to upload additional images.

### Video

Optionally, you can add a YouTube video link with an app overview or trailer. Paste the full link in format:
```
https://www.youtube.com/watch?v=XXXXXXXXXXX
```

### Description and Tags

**Description**
Text description of the app. Supports multiple paragraphs. Describe the functionality and benefits — this affects install conversion.

**Tags**
Keywords separated by commas, for example:
```
game, football, basketball
```

Tags are displayed as labels under the description and help users understand the app's theme.

### Ratings Distribution

Configure the star rating distribution. Use sliders to specify the number of reviews for each rating (1 to 5 stars).

The **"Link ratings to review count"** option automatically recalculates the distribution so the sum matches the specified total number of reviews.

### Reviews and Responses

Create realistic reviews to build trust:

| Field | Description |
|-------|-------------|
| Photo | Reviewer's avatar |
| Author | Username |
| Rating | Rating from 1 to 5 stars |
| Review | User's review text |
| Response | Developer's response (optional) |

Click **"Add Review +"** to add multiple reviews.

### Developer Contacts

Specify contact details for the "About Developer" section:
- **Address** — legal or physical address
- **Email** — contact email

After filling all fields, click **"Save"** to save the content.

## Push Tab {#push}

On this tab, you select which push notifications will be linked to the PWA being created.

!!! important
 Before using this tab, you need to create push notifications in the **"Push"** section of the main menu. The list will be empty when creating your first PWA.

**How It Works:**

1. First, create the needed push notifications in the "Push" section (see Section 5)
2. Then, when creating or editing a PWA, select the needed pushes from the catalog
3. Selected pushes will be sent to users of this specific app

**Adding Pushes:**

- Click **"+ Add Push"** to add a slot
- Select the needed push from the dropdown (e.g., "Boost package", "Royal comeback")
- Add multiple pushes if needed
- Click the trash icon next to a push to remove it

The preview on the right shows how the push will appear on the user's device.

## Cloaking Tab {#cloaking}

Cloaking is a traffic filtering system that allows showing different content to different users. Ad network moderators see a safe page (white page), while the target audience sees your PWA.

### Cloaking Settings 

**Ad Network**
Select the traffic source to optimize filtering for:
- Facebook Ads
- Google Ads
- Taboola
- Propeller

Each network has its own verification specifics — the system will account for this when filtering.

**Cloaking Mode**
Select the filter operation mode:

| Mode | Description |
|------|-------------|
| Flexible Mode | Optimal balance between pass rate and protection. Recommended for most cases |
| Strict Mode | Maximum filtering. Use when facing increased moderation attention |
| Manual Mode | Full control over all filtering parameters |

**Countries**
Specify your traffic geography:
- **Allow** — only selected countries will see the PWA
- **Block** — selected countries will see the white page

Available geos: Russia, Ukraine, Belarus, Kazakhstan, Germany, USA, and others.

!!! tip
 An empty field means "allow all".

**Operating Systems**

Filter by device OS:
- Windows
- Android
- iOS
- macOS
- Linux

Works similarly to countries — you can allow or block.

**Browsers**

Filter by user's browser:
- Chrome
- Safari
- Opera
- Firefox
- Edge

### Safe Page

**Safe Page Generation Method**

Safe page is a page shown to moderators instead of your PWA.

Two methods are available:
- **From app** — the system will automatically generate a white page based on the selected Google Play app
- **From custom design** — upload your own safe page

After configuring all parameters, click **"Complete Creation"** — your PWA will be created and become available at the specified domain.
