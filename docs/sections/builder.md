# Builder

The builder is the main tool for creating and editing PWA applications. It consists of five tabs that are completed sequentially:<br>
1. *Basic*<br>
2. *Domain*<br>
3. *Content*<br>
4. *Push*<br>
5. *Cloaking*<br>

## Basic {#main}

At this stage, the basic app parameters are configured.

**Step 1.** **Name**

Enter your PWA name. This name will be displayed on the user's home screen and within the app itself.

**Step 2.** **Language**

Select the app interface language from the dropdown.

**Step 3.** **Offer Link**

Specify your offer URL — this is the address users will land on from the PWA, enter the full link. (e.g.: <https://exampleoffer.com>)

**Step 4.** **Creation Method**

Two options are available:

**Create from app** — Google Play data parsing. Choose this option if you want to create a PWA based on an existing store app. The system will automatically pull:<br>
- Name and icon<br>
- Screenshots<br>
- Description<br>
- Rating and download count<br>
- Developer information

Paste the full Google Play app link in format:<br>
<https://play.google.com/store/apps/details?id=org.telegram.messenger>

**Create from custom design** — manual setup. Choose this if you want to upload your own creatives and fully customize the app.

## Domain {#domain}

A domain is required for PWA operation. Binding is done through Cloudflare NS servers.

**Step 1. Bind Domain**

In the **"Domain"** field, enter your domain name without protocol and www (e.g.: *example.com*)<br>
Click **"Get NS Records"** — the system will generate unique NS servers for your domain.

**Step 2. Set NS Servers**

You'll receive two NS servers like:

- NS1: **example.ns.cloudflare.com**<br>
- NS2: **example.ns.cloudflare.com**

Go to your domain registrar's control panel and replace the current NS servers with the ones provided.

**Step 3. Verify Binding**

!!! important "Important"
     DNS changes can take from a few minutes to 48 hours. This depends on your registrar and current record TTL.

After DNS records update, click **"Verify Domain Binding"**. If everything is configured correctly, you can proceed to the next step.

**Common Errors:**<br>
- Domain entered with www or protocol — enter only **domain.com**<br>
- NS servers haven't propagated yet — wait and retry verification<br>
- Changes weren't saved at registrar — check DNS settings

## Content {#content}

At this stage, all content that users will see in your PWA is configured. A real-time app preview is displayed on the right.

!!! note "Note"
    Instead of manual data entry, you can generate content using the corresponding button (✨) next to the input field.

### App Header

| Field | Description |
|-------|-------------|
| Icon | Upload app icon |
| Name | Specify app name to display in header |
| Author | Specify developer/publisher name |
| Rating | Specify average app rating |
| Size | Specify app size in MB |
| Age | Specify age restriction |
| Version | Specify version number |
| Downloads | Specify number of installs |
| Reviews | Specify number of reviews |

### Screenshots

Upload app screenshots — they'll be displayed in a carousel on the installation page.

- Supported formats: JPEG, PNG
- Recommended aspect ratio: 9:16 (portrait) or 16:9 (landscape)
- Use at least 4 screenshots

Click **"Add Screenshots +"** to upload additional images.

### Video

Optionally, you can add a YouTube video link with an app overview or trailer. Paste the full link in format: <https://www.youtube.com/watch?v=XXXXXX>


### Description and Tags

**Step 1. Description**<br>
Specify the text description of the app. Supports multiple paragraphs. Describe the functionality and benefits — this affects install conversion and overall PWA perception.

**Step 2. Tags**<br>
Specify keywords separated by commas, e.g.: *game*, *football*, *basketball*.<br>
Tags are displayed as labels under the description.

### Ratings Distribution

Configure the star rating distribution. Use sliders to specify the number of reviews for each rating.<br>
The **"Link ratings to review count"** option automatically recalculates the distribution so the sum matches the specified total number of reviews.

### Reviews and Responses

Create realistic reviews to build trust:

| Field | Description |
|-------|-------------|
| Photo | Reviewer's avatar |
| Author | Username/nickname |
| Rating | Rating from 1 to 5 stars |
| Review | User's review text |
| Response | Developer's response text |

Click **"Add Review +"** to add multiple reviews.

### Developer Contacts

Specify contact details for the "About Developer" section:<br>
- **Address** — legal or physical address<br>
- **Email** — contact email

After filling all fields, click **"Save"** to save the specified content.


## Push {#push}

At this stage, you select which push notifications will be linked to the PWA being created.

!!! warning "Warning"
     The list will be empty when creating your first PWA. You need to create push notifications in the **"Push"** section of the side menu (see more in the [Push Notifications] section)

**How It Works:**

- Create the needed push notifications in the **"Push"** section
- Then, when creating or editing a PWA, select the needed pushes from the list
- Selected pushes will be sent to users of this specific app

**Adding Pushes:**

**Step 1.** Click **"+ Add Push"** to add a slot<br>
**Step 2.** Select the needed push from the dropdown (e.g., "Push 1", "Push 2")<br>
**Step 3.** Add multiple pushes if needed<br>
**Step 4.** Click the trash icon (🗑️) next to a push to remove it

!!! note "Note"
    The preview on the right shows how the push will appear on the user's device.

## Cloaking {#cloaking}

Cloaking is a traffic filtering system that allows showing different content to different users. Ad network moderators see the safe page, while the target audience sees your PWA.

### Filtering Parameters Settings

**Step 1. Ad Network**

Select the traffic source to optimize filtering for.<br>
Each network has its own verification specifics — the system will account for this when filtering.

**Step 2. Cloaking Mode**

Select the filter operation mode:

| Mode | Description |
|------|-------------|
| Flexible Mode | Optimal balance between pass rate and protection. Recommended for most cases |
| Strict Mode | Maximum filtering. Use when facing increased moderation attention |
| Manual Mode | Full control over all filtering parameters |

**Step 3. Countries**

Specify your traffic geography:<br>
- **Allow** — only selected countries will see the PWA<br>
- **Block** — selected countries will see the safe page

!!! note "Note"
     An empty field means no filtering by this parameter.

**Step 4. Operating Systems**

Specify which device OS will be directed to PWA.<br>
Works similarly to countries — you can allow or block.

!!! note "Note"
     An empty field means no filtering by this parameter.

**Step 5. Browsers**

Specify which browsers will be directed to PWA.<br>
Works similarly to countries — you can allow or block.

!!! note "Note"
     An empty field means no filtering by this parameter.

### Safe Page Settings

Safe page is a page with neutral content that is shown to moderators instead of your PWA.<br>
Two methods are available for creation:

- **From app** — the system will automatically generate a safe page based on the Google Play app link
- **From custom design** — select safe page settings yourself

After configuring all parameters, click **"Complete Creation"** — your PWA will be created and become available at the specified domain.