---
title: Opening stock
description: Enter what is on your shelves when you start using GPOS, by pasting rows or uploading a CSV.
sidebar:
  order: 2
---

**Opening stock** sets your starting quantities so stock levels are right from day one. Do it after
your products exist and before you start selling, if possible.

## Enter opening stock

1. Count what is on your shelves.
2. Go to **Inventory → Opening stock** and **Choose a store**.
3. Either:
   - **Paste rows** from a spreadsheet into **Rows** — one item per line: **SKU or barcode**,
     **quantity**, optional **unit cost**, separated by tabs (as copied from Excel), for example
     `TEA-100	24	62.50`; or
   - <span class="ui">Download template (CSV)</span>, fill it in and
     <span class="ui">Upload CSV</span>.
4. Select <span class="ui">Check</span>. Problems are shown per row (*Row 7: …*) — for example a SKU
   that does not exist. Fix them and check again.
5. When it says *… rows are fine. Post them now.*, select
   <span class="ui">Post opening stock</span>.

Everything is posted together, or nothing. A **pack barcode** counts its pack quantity (a pack
barcode for 24 with quantity 2 adds 48).

:::tip
Enter the **unit cost** if you know it — it gives you correct stock values and margins from the
start.
:::

Already selling? Use a [stock count](/inventory/counts/) instead to correct quantities later.
