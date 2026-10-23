---
title: Products, variants and prices
description: Create products, add sizes and colours as variants, set and schedule prices per branch, add images and archive products.
sidebar:
  order: 3
---

**Products** lists everything you sell. Search by **name, SKU or barcode**, and filter by
**Category**, **Brand** or status.

## Key ideas

- A **product** is what you sell, for example *Cotton T-shirt*.
- A **variant** is one sellable version with its own **SKU**, **barcodes** and **price** — for
  example *Size M, White*. A simple product has exactly one variant.
- **Options** are what variants differ in — up to 3, for example *Size* and *Colour*.
- The **unit** says what one quantity means: one piece, one kilogram…

## Create a product

1. Go to **Products** → <span class="ui">New product</span>.
2. **Details**:
   - **Name** (and the **Sinhala name** / **Tamil name** if you use them).
   - **Category** and **Brand** (optional).
   - **Tax group** — or *Not taxed*.
   - **Unit** — prices and stock are per this unit.
   - **Sold by** — *Quantity* (pieces) or *Weight* (the till asks for the weight on the scale).
   - **Status** — *Active* or *Inactive*. Inactive products are kept but not sold.
   - **Description** (optional).
   - **Track stock for this product** — untick for services or items you do not count.
   - **Track batches and expiry dates** — if you need expiry tracking (asked when receiving goods).
     See [Batches and expiry](/inventory/batches-expiry/).
3. **Options** — leave empty for a simple product. For sizes or colours, select
   <span class="ui">+ Add option</span> and name it (for example *Size*).
4. **Codes and price** — for each variant (<span class="ui">+ Add variant</span> for more rows):
   - **SKU** — your own product code, unique per variant.
   - **Barcodes** — separate several with `;`. For a **pack barcode** write `code:quantity`, for
     example `4791234567890:24` — scanning it adds 24 units.
   - **Cost** — what you pay, for margin reports.
   - **Selling price** — for example `1250.00` (at most 2 decimals).
5. Select <span class="ui">Create product</span>.

:::note
The **number** of options is fixed once the product exists (you can still rename them). Plan your
options before creating a product with variants.
:::

## Edit a product

Open the product, change the details and select <span class="ui">Save details</span>.

To add another size or colour later, select <span class="ui">Add variant</span>. To change a
variant's SKU, barcodes, cost or reorder level, select <span class="ui">Edit</span> on its row.

**Reorder level** is the quantity at which an item counts as *low stock* in inventory and
reports.

## Prices

Each variant has a **business price** and can have **branch prices**. Select
<span class="ui">Prices</span> on a variant:

1. Select <span class="ui">New price</span>.
2. Enter the price.
3. **Applies to** — *Whole business* or *{branch} branch only*.
4. **From** — *Now*, or *A later date and time* (for example a price rise from Monday 6:00).
5. Select <span class="ui">Set price</span>.

Scheduled prices are shown as *Rs 1,350.00 from 1 Nov*. To remove a branch price, select
<span class="ui">Use business price</span>. **Price history** shows every price, when it applied
and who set it.

Tills receive new prices on their next sync. Changing prices needs the *Change selling prices*
permission.

## Images

Add **up to 5 images** per product (JPEG, PNG, WebP, GIF or AVIF, up to 5 MB each).

- <span class="ui">Add image</span> to upload.
- <span class="ui">Move left</span> / <span class="ui">Move right</span> to reorder; the first is
  the **Main image**.
- <span class="ui">Remove</span> to delete one.

Images are resized to at most 1200 px and location and camera data are removed.

## Archive and restore

Select <span class="ui">Archive</span> to retire a product. It disappears from the till and the
lists, but **keeps its history, barcodes and prices**. Archived products are read-only.

To bring it back, filter the list to archived products, open it and select
<span class="ui">Restore</span>. It comes back **inactive**, so you can check it before selling
again.

## Many products at once

Use [Import and export](/catalog/import-export/) to create or update products from a spreadsheet.
