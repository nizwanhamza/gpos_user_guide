---
title: Cash shifts
description: Follow every till's shifts, check expected vs counted cash, close a shift without a count, and read the daily summary.
sidebar:
  order: 2
---

:::note[Depends on your plan]
This page is part of the **POS checkout, cash shifts and POS devices** feature. If it is not in your plan, you will not see it in the menu. See [Plans and features](/getting-started/plans/).
:::

**Cash shifts** shows every shift from your tills. Each till opens a shift with a float and closes
it with a count. The back office works out the **expected cash** from the sales and cash movements
it received and shows the **difference**.

## Shifts tab

Shifts are named after who opened them and when, for example `Shift-Chamari-20261027-8.00am`.
**Search** by cashier or till, and filter by **Branch** and **Status**. Each row shows the shift, **Branch · till**, **Opened**, number of
**Sales**, **Expected cash**, **Counted** and **Difference**.

### Shift statuses

| Status | Meaning |
|--------|---------|
| **Open** | The till is using this shift. |
| **Closed — waiting for records** | Counted on the till; some sales or cash movements have not reached the back office yet. |
| **Reconciled** | The back office holds every sale and cash movement the till reported. The difference is final. |
| **Closed without count** | Closed in the back office, or replaced by a newer shift on the till, without a count. |

### Shift details

Select a shift to see who opened and closed it, the **Opening float**, sales per payment method
(*Sales — cash*, *Sales — card*…), **Cash in**, **Cash out**, **Cash refunds**, the **Counted notes
and coins**, every cash movement with who did it and *approved by …*, and the list of sales.

Cash movements can be flagged: **No approval**, **Approver not allowed**, **After the shift
closed**, **Reason switched off** or **Reason not for this**.

## Close a shift without a count

Use this when a till is **lost or broken**, or a shift was never closed:

1. Open the shift and select <span class="ui">Close without count</span>.
2. Enter a **Reason** and confirm.

The till stops using the shift when it next syncs. A count made on the till later is still
recorded. You need the *View and reconcile all cash shifts* permission.

## Daily summary tab

Per **branch** and **business day** (the day each shift was opened) for the dates you choose
(**From** / **To**): number of shifts (and how many are *still open*), sales, tax, cash
(*sales · in · out*), refunds and the total **difference**. Only counted shifts add to the
difference.

:::tip[End-of-day routine]
1. Each cashier closes their shift on the till and counts the drawer.
2. The manager checks **Cash shifts** — all shifts **Reconciled**, differences explained.
3. Look at the **Daily summary** and the **Cash over / short** report.
:::
