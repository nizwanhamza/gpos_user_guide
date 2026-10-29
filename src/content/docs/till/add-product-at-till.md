---
title: Add a product at the till
description: When a scanned barcode is not found, add it as a new product straight from the till — also offline — and complete it later in the back office.
sidebar:
  order: 3.5
---

:::note[Depends on your plan]
This is the plan feature **Add a new item at the till**. If it is not in your plan, the till
only says *Nothing found*. See [Plans and features](/getting-started/plans/).
:::

A customer brings an item whose barcode GPOS does not know yet? Instead of sending them away, add
it as a product right there and sell it. It works **offline** too: the new product is sent to the
back office before the sale that sells it.

## Add and sell it

1. Scan the barcode. The till shows *Nothing found for …* and a button
   <span class="ui">Add as a new product</span>. Select it.
2. In **New product**, check the **Barcode** — or, if the item has none, select
   <span class="ui">Generate</span> to give it an in-store barcode (see
   [Barcodes and labels](/catalog/barcodes-and-labels/#at-the-till)). Then enter:
   - **Product name** — as it should appear on the receipt;
   - **Selling price**;
   - **Tax** — the tax group, or *Not taxed*.
3. If your plan includes **Print barcode labels**, tick **Print a label for it** to print a
   barcode label for the item (ticked already when you generated the barcode).
4. Select <span class="ui">Add and sell at {price}</span>. The item is added to the sale.

The barcode must be 3–32 letters, digits, `-` or `.`; for EAN/UPC barcodes the check digit must be
right.

### Who may add products

| Who | What happens |
|-----|--------------|
| **Owner, Administrator, Manager** | Add the product directly. |
| **Cashier** | The till says *A manager approves new products with their PIN*. Select <span class="ui">Ask a manager</span>; a manager chooses their name and enters their PIN on the till. |

This is the permission **Add a new product at the till when a barcode is not found** — you can
give it to other roles in [Roles](/business/roles/).

## Complete it in the back office

A product added at the till is deliberately simple: sold **by the piece**, **stock not tracked**,
no category. It is marked **Added at till** so someone can finish it:

1. Go to **Products** and filter by **Added at till** (they also carry an amber *Added at till*
   badge).
2. Open each one. The page reminds you: *check the name and price, then add the category, other
   names and stock tracking.*
3. Correct the name and price if needed, add the category, brand, Sinhala/Tamil names, and tick
   **Track stock for this product** if you count it. Save.

:::tip
Make it a habit — for example every evening — to check the **Added at till** filter, so your
catalog, reports and stock stay complete.
:::

Your plan's **product limit** also applies to products added at the till.
