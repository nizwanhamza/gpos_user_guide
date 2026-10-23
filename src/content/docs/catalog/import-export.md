---
title: Import and export
description: Create and update products in bulk from Excel or CSV, and export your catalog.
sidebar:
  order: 4
---

Go to **Products** → <span class="ui">Import / export</span>.

## Import from a spreadsheet

1. **Download a template** — <span class="ui">Excel template</span> or
   <span class="ui">CSV template</span>. Fill in **one row per variant**. The example rows (their
   `handle` starts with `#`) show the format and are never imported — delete them, or remove the
   `#` to import one. You can also start from an **export** of your catalog.
2. **Upload it** with <span class="ui">Upload file…</span>. **Nothing changes yet.** GPOS shows
   what would be created or updated — new products, updated products, new variants, price changes,
   new categories and brands — and any **problems by row and column**.
3. **Fix and repeat.** If there are problems, fix them in the file and upload again.
4. **Import.** When it says **Ready to import**, select <span class="ui">Import now</span>. All rows
   are imported together, or none.

Limits: `.xlsx` or `.csv` (UTF-8), up to **5 MB** and **10,000 rows**. A checked file can be
imported within **24 hours**.

## The columns

| Column | What to write |
|--------|---------------|
| `handle` | Rows with the same handle are **variants of one product**. Blank: the row is its own product. Starts with `#`: example row, skipped. |
| `name` | Product name (required for new products). |
| `name_si`, `name_ta` | Sinhala and Tamil names (optional). |
| `description` | Optional. |
| `category` | Category path, for example `Beverages > Tea`. Missing categories are created. |
| `brand` | Brand name. Missing brands are created. |
| `tax_group` | Tax group **code**, for example `VAT18` (must exist). Blank: not taxed. |
| `unit` | Unit code, for example `pcs` or `kg` (required for new products). |
| `sold_by` | `QUANTITY` or `WEIGHT` (default `QUANTITY`). |
| `track_stock` | `yes` or `no` (default `yes`). |
| `option1_name`, `option1_value` … `option3_name`, `option3_value` | Options, for example `Size` / `Large`. Option names must be the same on every row of a product. |
| `sku` | Variant SKU. An **existing SKU updates** that variant; otherwise a new variant is created. |
| `barcodes` | Separated by `;`. Pack barcodes as `code:quantity`, e.g. `4790001000043:24`. Listed barcodes are added; existing ones are kept. |
| `cost` | Cost price, e.g. `950.00`. |
| `price` | Selling price for the whole business, e.g. `1250.00`. A change **takes effect immediately**. |
| `reorder_level` | Low-stock level in base units (optional). |
| `status` | `ACTIVE` or `INACTIVE` (default `ACTIVE`). |

**Blank cells** leave existing values unchanged, and use defaults for new products. Money may be
written as `1250`, `1,250.50` or `Rs. 1250.5`.

### Example

| handle | name | category | unit | option1_name | option1_value | sku | barcodes | cost | price |
|--------|------|----------|------|--------------|---------------|-----|----------|------|-------|
| tshirt | Cotton T-shirt | Clothing > T-shirts | pcs | Size | S | TSH-S | 4790001000012 | 900.00 | 1500.00 |
| tshirt | | | | Size | M | TSH-M | 4790001000029 | 900.00 | 1500.00 |
| | Samba rice | Groceries > Rice | kg | | | RICE-SAMBA | | 240.00 | 280.00 |
| | Ceylon black tea 100g | Beverages > Tea | pcs | | | TEA-100 | 4790001000036; 4790001000043:24 | 380.00 | 450.00 |

For rice, also put `WEIGHT` in `sold_by` so the till asks for the weight.

## Update prices in bulk

1. **Export** your catalog (see below).
2. Change the `price` column (and anything else). Leave other columns as they are.
3. Import the file. The check shows how many **Price changes** there will be before you confirm.

## Export the catalog

Select <span class="ui">Download Excel</span> or <span class="ui">Download CSV</span>. You get one
row per variant, in the import format — edit it and import it back to update products in bulk.

:::tip[Opening stock is separate]
The product import does not set stock quantities. After importing, enter your
[opening stock](/inventory/opening-stock/).
:::
