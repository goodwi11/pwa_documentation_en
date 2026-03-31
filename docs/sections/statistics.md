# Statistics

This section is designed to analyze the performance of your PWA applications. Here you can track key funnel metrics, apply filters, view trends on the chart, and generate a report with CSV export.

## Top Metrics Block {#indicators}

At the top of the section, you can see the main aggregated metrics for the selected period and applied filters:

- **Clicks** — the number of link clicks.
- **Content** — the number of users who moved from the pre-landing page to the offer.
- **Installs** — the number of PWA installs.
- **Opens** — the number of app opens.
- **Quality** — the ratio between users who reached the offer and users who completed the target action.
- **Conversions** — the number of recorded target actions.
- **Leads** — the number of leads.
- **Sales** — the number of sales.
- **Expenses** — expenses for the selected data.
- **Income** — income for the selected data.
- **Profit** — the difference between income and expenses.
- **ROI** — return on investment.

All values in this block are recalculated according to the selected report parameters.

## Filters {#filters}

Below the metrics block, there is a set of filters that allows you to narrow down the data and build the required report.

### Select PWA {#pwa}

The **Select PWA** filter is used to choose a specific application for analysis.

### Select Countries {#countries}

The **Select Countries** filter allows you to limit the report to selected GEOs.

### Select OS {#os}

The **Select OS** filter allows you to analyze data by platform. The list may include both mobile and desktop operating systems, for example:

- Android
- iOS
- Windows
- macOS
- Linux
- Other

### Select Browsers {#browsers}

The **Select Browsers** filter allows you to narrow data by browser. Available values include:

- Google Chrome
- Safari
- Firefox
- Microsoft Edge
- Opera
- Samsung Internet
- Other

### Select Pushes {#pushes}

The **Select Pushes** filter applies to the whole report and allows you to work with data based on the selected push event type, including:

- **Sent**
- **Delivered**
- **Clicked**
- **All**

### Timezone Selector {#time}

The **timezone selector** is used to display time-based data correctly. This is useful when analyzing hourly dynamics and comparing activity across different regions.

### Period Selector {#period}

The **period selector** defines the time range used for the chart and the report.

### Breakdown {#breakdown}

The **Breakdown** field is used to group data. Available options:

- **Date**
- **Month**
- **Country**
- **OS**
- **Browser**
- **Language**

Breakdown updates the chart in real time. To apply the selected breakdown and other filters to the report table, click **Report**.

### Clear {#clear}

The **Clear** button resets the selected filters.

### Report {#report}

The **Report** button applies the selected filters to the table below the chart and generates the report, which can then be exported as CSV.

If you do not click **Report**, the table may remain empty even if the chart has already been updated.

## Chart {#chart}

Below the filters, there is a chart showing the dynamics of the main metrics for the selected period.

You can enable or disable the following series on the chart:

- **Uniques**
- **Installs**
- **Openings**
- **Leads**
- **Sales**

When you hover over a point on the chart, the interface displays the values for a specific time or selected data group.

## Report Table {#report_table}

Below the chart, there is a report table with data based on the selected parameters. The table supports:

- selecting the number of rows per page;
- searching through the data;
- horizontal scrolling;
- pagination;
- CSV export.

The table may include the following columns:

- **PWA**
- **Records**
- **Visits**
- **Uniques**
- **Money Hits**
- **Money Uniques**
- **Safe Hits**
- **Quality**
- **Clicks**
- **Installs**
- **Openings**
- **Conversions**
- **CR**
- **Leads**
- **CR Lead**
- **Sales**
- **CR Sale**
- **Push Subs**
- **Push Clicks**
- **Expenses**
- **Revenue**
- **Profit**
- **ROI**
- **CPC**
- **CPM**
- **CPA**
- **EPL**
- **eCPC**
- **eCPM**

Some of these metrics help evaluate both traffic volume and performance across different funnel stages.

### Key Differences Between Several Metrics {#difference}

- **Visits** — all visits.
- **Uniques** — unique visits only.
- **Clicks** — a link click that does not necessarily mean the user reached the offer.
- **Content** — a user transition from the pre-landing page to the offer.
- **Conversions** — counted when a user completes the target action.

## CSV Export {#csv_export}

Below the report table, there is a **Download CSV** button.

Export allows you to save the generated report as a CSV file for further analysis, sharing with a team, or uploading into third-party tools.

## Raw Events {#events}

Below the main table, an additional raw events block may be displayed.

It may include the following fields:

- **Name**
- **Date**
- **Time**
- **IP**
- **Language**
- **Install**
- **Open**
- **Reg**
- **Revenue**

This block also supports:

- search;
- pagination;
- rows per page selection;
- CSV export.

If the data in this block is temporarily unavailable, the interface may show a corresponding system message.