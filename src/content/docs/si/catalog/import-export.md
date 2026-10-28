---
title: Import සහ export
description: Excel හෝ CSV වලින් products ගොඩක් එකවර හදන්න සහ update කරන්න, සහ ඔබේ catalog එක export කරන්න.
sidebar:
  order: 4
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
**Excel / CSV upload and download** plan feature එකක්. ඒක නැත්නම් **Products** හි <span class="ui">Import / export</span>
button එක නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Products** → <span class="ui">Import / export</span> වෙත යන්න.

## Spreadsheet එකකින් import කරන්න

1. **Template එකක් download කරන්න** — <span class="ui">Excel template</span> හෝ <span class="ui">CSV template</span>.
   **Variant එකකට එක row එකක්** පුරවන්න. Example rows (`handle` එක `#` වලින් පටන් ගන්න ඒවා) format එක පෙන්නනවා, කවදාවත්
   import වෙන්නේ නැහැ — ඒවා delete කරන්න, නැත්නම් එකක් import කරන්න `#` එක අයින් කරන්න. ඔබේ catalog එකේ **export**
   එකකින් පටන් ගන්නත් පුළුවන්.
2. <span class="ui">Upload file…</span> එකෙන් **upload කරන්න**. **තවම කිසිම දෙයක් වෙනස් වෙන්නේ නැහැ.** හදන හෝ update
   වෙන දේවල් GPOS පෙන්නනවා — new products, updated products, new variants, price changes, new categories සහ brands —
   සහ **row සහ column අනුව problems**.
3. **හදලා ආයෙත් කරන්න.** Problems තියෙනවා නම් file එකේ හදලා ආයෙත් upload කරන්න.
4. **Import කරන්න.** **Ready to import** කියලා පෙන්නුවාම <span class="ui">Import now</span> තෝරන්න. හැම row එකක්ම එකට import
   වෙනවා, නැත්නම් එකක්වත් නැහැ.

Limits: `.xlsx` හෝ `.csv` (UTF-8), **5 MB** සහ **rows 10,000** දක්වා. Check කරපු file එකක් **පැය 24ක්** ඇතුළත import කරන්න පුළුවන්.

## Columns

| Column | ලියන්න ඕන දේ |
|--------|-------------|
| `handle` | එකම handle එක තියෙන rows **එක product එකක variants**. හිස් නම්: row එක තනි product එකක්. `#` වලින් පටන් ගන්නවා නම්: example row එකක්, skip කරනවා. |
| `name` | Product නම (new products වලට අනිවාර්යයි). |
| `name_si`, `name_ta` | සිංහල සහ දෙමළ නම් (අනිවාර්ය නැහැ). |
| `description` | අනිවාර්ය නැහැ. |
| `category` | Category path එක, උදා. `Beverages > Tea`. නැති categories හදනවා. |
| `brand` | Brand නම. නැති brands හදනවා. |
| `tax_group` | Tax group **code** එක, උදා. `VAT18` (තියෙන්නම ඕන). හිස් නම්: tax නැහැ. |
| `unit` | Unit code එක, උදා. `pcs` හෝ `kg` (new products වලට අනිවාර්යයි). |
| `sold_by` | `QUANTITY` හෝ `WEIGHT` (default `QUANTITY`). |
| `track_stock` | `yes` හෝ `no` (default `yes`). |
| `option1_name`, `option1_value` … `option3_name`, `option3_value` | Options, උදා. `Size` / `Large`. Product එකක හැම row එකකම option names එකම වෙන්න ඕන. |
| `sku` | Variant SKU. **තියෙන SKU එකක් නම් ඒ variant එක update කරනවා**; නැත්නම් new variant එකක් හදනවා. |
| `barcodes` | `;` එකෙන් වෙන් කරන්න. Pack barcodes `code:quantity` විදිහට, උදා. `4790001000043:24`. List කරපු barcodes add වෙනවා; තියෙන ඒවා එහෙමම තියෙනවා. |
| `cost` | Cost price, උදා. `950.00`. |
| `price` | මුළු business එකටම selling price, උදා. `1250.00`. වෙනසක් **වහාම apply වෙනවා**. |
| `reorder_level` | Base units වලින් low-stock level එක (අනිවාර්ය නැහැ). |
| `status` | `ACTIVE` හෝ `INACTIVE` (default `ACTIVE`). |

**හිස් cells** තියෙන values වෙනස් කරන්නේ නැහැ, new products වලට defaults ගන්නවා. Money `1250`, `1,250.50` හෝ `Rs. 1250.5`
විදිහට ලියන්න පුළුවන්.

### උදාහරණය

| handle | name | category | unit | option1_name | option1_value | sku | barcodes | cost | price |
|--------|------|----------|------|--------------|---------------|-----|----------|------|-------|
| tshirt | Cotton T-shirt | Clothing > T-shirts | pcs | Size | S | TSH-S | 4790001000012 | 900.00 | 1500.00 |
| tshirt | | | | Size | M | TSH-M | 4790001000029 | 900.00 | 1500.00 |
| | Samba rice | Groceries > Rice | kg | | | RICE-SAMBA | | 240.00 | 280.00 |
| | Ceylon black tea 100g | Beverages > Tea | pcs | | | TEA-100 | 4790001000036; 4790001000043:24 | 380.00 | 450.00 |

හාල් වලට `sold_by` හි `WEIGHT` ත් දාන්න, එතකොට till එක බර අහනවා.

## Prices එකවර update කරන්න

1. ඔබේ catalog එක **export** කරන්න (පහත බලන්න).
2. `price` column එක (සහ ඕන අනිත් දේ) වෙනස් කරන්න. අනිත් columns එහෙමම තියන්න.
3. File එක import කරන්න. Confirm කරන්න කලින් **Price changes** කීයක් වෙනවාද කියලා check එකේ පෙන්නනවා.

## Catalog එක export කරන්න

<span class="ui">Download Excel</span> හෝ <span class="ui">Download CSV</span> තෝරන්න. Import format එකෙන්ම variant එකකට
row එකක් ලැබෙනවා — edit කර ආයෙත් import කළාම products ගොඩක් එකවර update වෙනවා.

:::tip[Opening stock වෙනමයි]
Product import එකෙන් stock quantities set වෙන්නේ නැහැ. Import කළාට පස්සේ ඔබේ [opening stock](/si/inventory/opening-stock/) දාන්න.
:::
