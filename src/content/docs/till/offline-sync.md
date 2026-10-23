---
title: Offline and sync
description: How the till keeps selling without internet, how to read the sync status, and what to do when something needs attention.
sidebar:
  order: 10
---

:::note[Depends on your plan]
This page is part of the **POS checkout, cash shifts and POS devices** feature. If it is not in your plan, you will not see it in the menu. See [Plans and features](/getting-started/plans/).
:::

The till keeps a copy of your products, prices, staff PINs, customers and settings **on the
device**. When the internet is down it carries on selling and stores the sales. When the
connection is back it sends them automatically. **Nothing is lost**, as long as the till's browser
data is not deleted.

## The status bar

| Shows | Meaning |
|-------|---------|
| **Online · All synced** | Everything has reached the back office. |
| **Syncing…** | Sending now. |
| **Offline · {n} waiting** | No internet. {n} sales or other operations are stored on the till. Keep selling. |
| **Sync error · {n} need attention** | Something could not be sent — see below. |
| **Last sync …** | When the till last talked to the back office. |

## Works offline / needs internet

| Works offline | Needs internet |
|---------------|----------------|
| Selling, payments, discounts, approvals | Setting up or re-authorising the till |
| Opening and closing shifts, cash in/out | Finding a sale made on **another till** |
| Returns of sales from **this** till | Getting new prices, products, PINs (on the next sync) |
| Adding customers | |

## The sync panel

Select the status bar to open **Sync and this till**:

- <span class="ui">Sync now</span> — try sending immediately.
- **Waiting and problem operations** — each one with its status: *Waiting*, *Sending*, *Needs
  attention*, *Waiting for a manager*.
- <span class="ui">Try again</span> — resend one that failed.
- <span class="ui">Export (JSON)</span> — save the waiting operations to a file as a backup (for
  your service provider if asked).
- <span class="ui">Download everything again</span> — if the catalog on the till looks wrong.
  **Waiting operations are kept.**
- Details of **This till**: register, branch, app version, storage and screen status.

## "Waiting for a manager"

The back office could not accept something exactly as recorded — for example the cashier lost a
permission while offline. It is **not dropped**: an administrator decides in
[POS devices → Sync issues](/business/pos-devices/#sync-issues).

## A new version is ready

When the till shows *A new version is ready*, select <span class="ui">Update now</span> between
customers.

:::danger[Never clear a till's browser data]
Clearing site data, using incognito mode or resetting the browser deletes anything still waiting.
If you must replace a till, decommission it first and wait for **All synced**.
:::
