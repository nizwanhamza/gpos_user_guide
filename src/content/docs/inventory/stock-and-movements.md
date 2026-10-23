---
title: Stock levels and movements
description: See stock on hand per store, find low and negative stock, and read the stock ledger.
sidebar:
  order: 1
---

**Inventory** has these tabs: **Stock**, **Movements**, **Adjust / write off**, **Opening stock**,
**Counts**, **Transfers** and **Expiry**.

Stock is kept **per store** (a branch's warehouse). Every sale, return, adjustment, delivery and
transfer moves it, and every move is written in the **stock ledger**.

## Stock tab

Choose a **Store** (or *All stores*) and search by **name or SKU**. For each item you see:

- **On hand** — the quantity now;
- **Reorder level** — set on the product;
- **Value (avg. cost)** — shown to people allowed to see costs.

Use **Show** to find problems:

- **At or below reorder level** — time to order (marked *Low*);
- **Negative stock** — more was sold than GPOS thought you had (marked *Negative*). Usually the
  opening stock was missing or a delivery was not received in GPOS.

Products that do not track stock are not listed.

## Movements tab

The stock ledger, newest first. Filter by store and **Type**:

| Type | Comes from |
|------|------------|
| Opening stock | [Opening stock](/inventory/opening-stock/) |
| Sale / Return | The tills |
| Goods received / Returned to supplier | [Purchasing](/purchasing/receiving-goods/) |
| Transfer out / Transfer in | [Transfers](/inventory/transfers/) |
| Adjustment / Write-off | [Adjustments](/inventory/adjustments/) and [stock counts](/inventory/counts/) |

Each row shows **When**, the item, the **Change** and what it was **Because of**. Movements are
never changed; corrections are new movements.

## Average cost

Goods received go into stock at their cost, and GPOS keeps a running **average cost** per item and
store. This is used for stock value, margins and write-off values in reports.
