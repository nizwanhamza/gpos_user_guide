---
title: Sales
description: See every sale from your tills, open its details, and understand the review flags.
sidebar:
  order: 1
---

**Sales** lists the sales made on your tills as they arrive in the back office — newest first.
Sales made offline appear once the till has synced.

## The list

Each row shows the **Receipt** number, **Time**, **Branch · till**, **Cashier**, **Total** and status
(*Voided*, *Returned*, *Partly returned*). Use **Show** to filter: *All sales*, *Voided*,
*Returned*, *Partly returned* or *Flagged for review*.

## Sale details

Select a sale to see:

- who made it, on which till and when — and when the back office **received** it;
- every **Item** with **Qty**, **Price** and **Amount**;
- **Discounts** with the reason and *Approved by …*;
- **Subtotal**, **Tax**, **Total** and the **payments** (cash received and change, card reference…);
- the **Customer**, if one was attached;
- **Voids and returns** made against it, with their reason.

Voids and returns are done **on the till** — see [Returns and voids](/till/returns-voids/).

## Review flags

GPOS never rejects a sale the till made — but it flags anything unusual for you to check:

| Flag | Meaning | What to do |
|------|---------|------------|
| **Price differs** | The till sold at a price different from the catalog at that time (for example it had not synced a new price). The detail shows *Price in the catalog then*. | Make sure tills sync regularly. |
| **Tax differs** | The tax worked out on the till differs from the back office. | Check tax groups and rate dates. |
| **No shift** | The sale was made without an open shift. | Check with the cashier. |
| **After shift closed** | The sale arrived for a shift that was already closed. | Check the shift's count. |
| **Method switched off** | A payment method was used after it was switched off. | Usually a till that had not synced yet. |
| **No reference** | A payment that needs a reference had none. | Check against the bank terminal. |
