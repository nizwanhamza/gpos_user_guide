---
title: Barcodes and labels
description: Give items without a barcode your own in-store barcode, and print barcode labels on a label printer or A4 sticker sheets — in the back office and at the till.
sidebar:
  order: 3.5
  badge:
    text: New
    variant: tip
---

:::note[Depends on your plan]
**Generate in-store barcodes** and **Print barcode labels** are two separate plan features. Without
the first, there is no <span class="ui">Generate</span> button; without the second, there are no
<span class="ui">Print labels</span> buttons. See [Plans and features](/getting-started/plans/).
:::

Some items have no manufacturer's barcode — your own packs, loose goods you bag, clothing,
hardware. GPOS can give them **their own barcodes** and **print labels** to stick on them, so the
till can scan them like everything else. You can also print labels for items that already have a
barcode, for example to show the price on the shelf or on the item.

## Entering barcodes

In **Products**, the **Barcodes** box of a variant takes one or more codes:

- **Same item with more than one barcode** (old and new packaging, or another supplier)? Put `;`
  between them.
- **Barcode on a pack or carton?** Add `:` and how many items are in it — `:24` for a carton of 24.
  Scanning it adds the whole pack.

Example: `4791234567890; 4791234567999:24`

## Generate in-store barcodes

GPOS makes **EAN-13 barcodes starting with `20`**, for example `2000000000428`. Codes starting with
20–29 are kept for use inside a shop, so they **never clash with a manufacturer's barcode**, and
every scanner reads them. Each business has its own numbers; a code you already typed in by hand is
skipped.

### For one item

Select <span class="ui">Generate</span> inside the **Barcodes** box — when you create a product, or
when you <span class="ui">Edit</span> a variant. It fills in the next number, or adds it after `;`
if the item already has a barcode. Then save as usual.

### For every item that has none

On the **Products** list, select <span class="ui">Generate missing barcodes</span> and confirm. Every
active item without a barcode gets one, and GPOS shows *… items got a new barcode.* This needs the
*Update products* permission.

:::note
**Items sold by weight never get a generated barcode** — their barcodes come from the scale.
:::

## Print barcode labels

### Where to print from

| Where | When | Labels filled in |
|-------|------|------------------|
| **New product** | Right after you create it: *Product saved. Print barcode labels for it?* → <span class="ui">Print labels</span> (or <span class="ui">Not now</span>) | 1 per variant |
| **Product page** | <span class="ui">Print labels</span> button above the variants | 1 per variant |
| **Products list** | Tick products (or **Select all shown**) → <span class="ui">Print labels (…)</span> | 1 per variant |
| **Receiving goods** | After the delivery is posted: <span class="ui">Print labels for these items</span> | The quantity received |
| **Till** | See [At the till](#at-the-till) below | 1 |

### The print dialog

1. For each item, check the **Barcode** (an item with several barcodes, including pack barcodes,
   lets you choose one) and the number of **Labels**. Set it to `0` to leave an item out.
2. Choose the **Label size**:
   - **Label roll 38 × 25 mm**, **50 × 25 mm** or **50 × 30 mm** — for a label printer;
   - **A4 sticker sheet, 3 × 8 (70 × 37 mm)** — 24 labels per page, for an ordinary printer.
3. Tick or untick **Show the price** and **Show the shop name** (both on to start with). A pack
   barcode shows the price of the whole pack.
4. Check the **Preview**, then select <span class="ui">Print labels (…)</span>.
5. In the browser's print window:
   - **Label roll** — choose the **label printer**. Its paper size must be the same label size.
   - **A4 sheet** — choose your printer, **A4** paper and **Actual size** (no scaling).

Each label shows the product name (and size or colour), the barcode with its number underneath and,
if you chose them, the price and your shop's name.

**Your choices are remembered on this computer** (or till), not for the whole business — because
the label printer belongs to the computer.

Good to know:

- At most **1,000 labels** at a time.
- *This barcode is long for this label size and may not scan* — a long code (for example letters and
  digits) on a 38 mm label. Choose a **50 mm** label. Generated barcodes fit every size.
- *Nothing to print* — none of the items has a barcode yet. Give them one first.

## At the till

If your plan includes it, the till can do both, **also offline**:

- **Generate a barcode for a new item.** In [Add a product at the till](/till/add-product-at-till/),
  select <span class="ui">Generate</span> in the **Barcode** box. Each till keeps a few new numbers
  ready, topped up whenever it is online. If they run out offline, the till says *This till has no
  new barcodes left* — connect to the internet for a moment and try again.
- **Print a label for a new item.** **Print a label for it** is ticked when the barcode was
  generated — the new barcode is not on the item yet, so a label is the way to put it there.
- **Print a label for an item you find.** Select <span class="ui">Print label</span> under the
  scanned item, or the tag button beside a search result.

The till shows the browser's print window so the cashier can choose the **label printer**.

:::caution[Tills that print receipts without asking]
If the till's browser is set to print silently (*kiosk printing*), labels also go straight to the
default printer — the receipt printer. Use a separate browser profile for labels, or print labels
from the back office.
:::

## Who can do it

| What | Permission |
|------|------------|
| Generate a barcode | Part of *Create products* / *Update products* (at the till: the [add-a-product rules](/till/add-product-at-till/)). |
| Generate missing barcodes | *Update products*. |
| Print labels | **Print barcode labels** — Owner, Administrator, Manager and Inventory manager by default. Give it to cashiers through a role in [Roles](/business/roles/). |
