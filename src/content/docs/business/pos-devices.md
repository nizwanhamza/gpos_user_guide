---
title: POS devices
description: Pair tills to registers, watch their sync status, re-authorise, decommission or revoke them, and resolve sync issues.
sidebar:
  order: 5
---

:::note[Depends on your plan]
This page is part of the **Selling at the counter (POS), cash shifts and tills** feature. If it is not in your plan, you will not see it in the menu. See [Plans and features](/getting-started/plans/).
:::

A **till** is a browser on a counter computer, laptop or tablet that is registered to one
**register**. It keeps working offline and sends its sales when back online. **POS devices** lists
your registers per branch and the till on each.

## Pair a till

You need a [register](/business/branches/#add-registers) first.

1. Next to the register, select <span class="ui">Set up a till</span>.
2. GPOS shows a **code** and a **QR code**, valid for **15 minutes** and usable once.
3. On the till device, open **[app.gpos.lk/pos](https://app.gpos.lk/pos/)** in **Chrome or Edge**.
4. Enter the code, or scan the QR code with the till's camera.
5. Wait until the till has downloaded the catalog. It then works offline.

Code expired? Select <span class="ui">New code</span>. The step-by-step on the till side is in
[Set up a till](/till/set-up-a-till/).

## Watch your tills

For each till you see:

- **Last sync** — when it last talked to the back office.
- **Waiting** — sales and other work not yet sent. *{n} need attention* means something failed.
- **Clock off by … min** — the till's clock is wrong. Fix the date and time on the device.
- **Status** — *Active*, *Finishing* (being decommissioned), *Revoked* or *Needs re-authorising*.

A till that has had **no contact for 90 days** shows *Needs re-authorising* — its sign-in has
expired. Select <span class="ui">Re-authorise</span> and enter the new code on the till; its waiting
sales are kept.

## Rename, re-authorise, decommission, revoke

| Action | When to use it |
|--------|----------------|
| <span class="ui">Rename</span> | Give the till a clearer name. |
| <span class="ui">Re-authorise</span> | The till shows *This till is not registered* or *Needs re-authorising*. You get a new code to enter on the same till; its waiting work is kept. |
| <span class="ui">Decommission</span> | You are **replacing** a till. It can still send what it has waiting, but cannot start new sales. |
| <span class="ui">Revoke</span> | The till is **lost or stolen**. It is locked out immediately. Any work still waiting stays on the device and cannot be sent. Afterwards, **change the POS PINs** of the cashiers who used it (Employees → each person → Set POS PIN). |

## Replacing a till step by step

1. **On the old till**, open the sync panel and select <span class="ui">Sync now</span> until
   **nothing is waiting**. If it cannot connect, select <span class="ui">Export (JSON)</span> and keep
   the file safe (see [Offline and sync](/till/offline-sync/#the-sync-panel)).
2. **Here**, select <span class="ui">Decommission</span> on the old till.
3. Select <span class="ui">Set up a till</span> on the **same register** and register the new device.
   Its receipt numbers get a suffix (for example `CMB-R01.2-…`).

If the old device **does not start at all**, the sales it had not sent yet are lost unless they
were exported earlier; everything already synced is safe. Compare the last receipt numbers in
**Sales** with your paper receipts to see what is missing.

## Sync issues

Sometimes a till records something the back office cannot accept as it is — for example, the
cashier lost a permission while the till was offline. **Nothing is dropped.** These items appear
under **Sync issues**.

1. Select <span class="ui">Show open</span> to see what is waiting for a decision.
2. Select <span class="ui">Review</span> to see **what the till recorded**.
3. Choose:
   - <span class="ui">Accept</span> — apply it exactly as recorded on the till.
   - <span class="ui">Dismiss</span> — keep it on record without applying it.
4. Add a **Note** explaining your decision.

Reports warn you while records are waiting for review.
