---
title: Import மற்றும் export
description: Excel அல்லது CSV மூலம் products ஐ மொத்தமாக உருவாக்கவும் update செய்யவும், உங்கள் catalog ஐ export செய்யவும்.
sidebar:
  order: 4
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**Excel / CSV upload and download** ஒரு plan feature. அது இல்லாவிட்டால் **Products** இல் <span class="ui">Import / export</span>
button இருக்காது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Products** → <span class="ui">Import / export</span> க்குச் செல்லுங்கள்.

## Spreadsheet இலிருந்து import செய்யுங்கள்

1. **Template ஐ download செய்யுங்கள்** — <span class="ui">Excel template</span> அல்லது <span class="ui">CSV template</span>.
   **ஒரு variant க்கு ஒரு row** நிரப்புங்கள். Example rows (`handle` `#` இல் தொடங்குபவை) format ஐக் காட்டும், ஒருபோதும் import
   ஆகாது — அவற்றை delete செய்யுங்கள், அல்லது ஒன்றை import செய்ய `#` ஐ அகற்றுங்கள். உங்கள் catalog இன் **export** இலிருந்தும் தொடங்கலாம்.
2. <span class="ui">Upload file…</span> மூலம் **upload செய்யுங்கள்**. **இன்னும் எதுவும் மாறாது.** என்ன உருவாகும் அல்லது update
   ஆகும் என்று GPOS காட்டும் — new products, updated products, new variants, price changes, new categories மற்றும் brands —
   மற்றும் **row மற்றும் column வாரியாக problems**.
3. **சரிசெய்து மீண்டும் செய்யுங்கள்.** Problems இருந்தால் file இல் சரிசெய்து மீண்டும் upload செய்யுங்கள்.
4. **Import செய்யுங்கள்.** **Ready to import** எனக் காட்டியதும் <span class="ui">Import now</span> ஐத் தேர்ந்தெடுங்கள். எல்லா rows உம்
   ஒன்றாக import ஆகும், அல்லது எதுவும் ஆகாது.

Limits: `.xlsx` அல்லது `.csv` (UTF-8), **5 MB** மற்றும் **10,000 rows** வரை. Check செய்த file ஐ **24 மணி நேரத்துக்குள்** import செய்யலாம்.

## Columns

| Column | என்ன எழுத வேண்டும் |
|--------|---------------------|
| `handle` | ஒரே handle உள்ள rows **ஒரு product இன் variants**. காலியாக இருந்தால்: row தனி product. `#` இல் தொடங்கினால்: example row, skip ஆகும். |
| `name` | Product பெயர் (new products க்குக் கட்டாயம்). |
| `name_si`, `name_ta` | சிங்களம் மற்றும் தமிழ் பெயர்கள் (கட்டாயமில்லை). |
| `description` | கட்டாயமில்லை. |
| `category` | Category path, உதா. `Beverages > Tea`. இல்லாத categories உருவாக்கப்படும். |
| `brand` | Brand பெயர். இல்லாத brands உருவாக்கப்படும். |
| `tax_group` | Tax group **code**, உதா. `VAT18` (இருக்க வேண்டும்). காலியாக இருந்தால்: tax இல்லை. |
| `unit` | Unit code, உதா. `pcs` அல்லது `kg` (new products க்குக் கட்டாயம்). |
| `sold_by` | `QUANTITY` அல்லது `WEIGHT` (default `QUANTITY`). |
| `track_stock` | `yes` அல்லது `no` (default `yes`). |
| `option1_name`, `option1_value` … `option3_name`, `option3_value` | Options, உதா. `Size` / `Large`. ஒரு product இன் ஒவ்வொரு row இலும் option names ஒன்றாக இருக்க வேண்டும். |
| `sku` | Variant SKU. **இருக்கும் SKU என்றால் அந்த variant update ஆகும்**; இல்லையெனில் new variant உருவாகும். |
| `barcodes` | `;` மூலம் பிரியுங்கள். Pack barcodes `code:quantity` ஆக, உதா. `4790001000043:24`. பட்டியலிட்ட barcodes சேரும்; இருப்பவை அப்படியே இருக்கும். |
| `cost` | Cost price, உதா. `950.00`. |
| `price` | முழு business க்கான selling price, உதா. `1250.00`. மாற்றம் **உடனே apply ஆகும்**. |
| `reorder_level` | Base units இல் low-stock level (கட்டாயமில்லை). |
| `status` | `ACTIVE` அல்லது `INACTIVE` (default `ACTIVE`). |

**காலியான cells** இருக்கும் values ஐ மாற்றாது, new products க்கு defaults ஐப் பயன்படுத்தும். Money ஐ `1250`, `1,250.50` அல்லது
`Rs. 1250.5` என எழுதலாம்.

### உதாரணம்

| handle | name | category | unit | option1_name | option1_value | sku | barcodes | cost | price |
|--------|------|----------|------|--------------|---------------|-----|----------|------|-------|
| tshirt | Cotton T-shirt | Clothing > T-shirts | pcs | Size | S | TSH-S | 4790001000012 | 900.00 | 1500.00 |
| tshirt | | | | Size | M | TSH-M | 4790001000029 | 900.00 | 1500.00 |
| | Samba rice | Groceries > Rice | kg | | | RICE-SAMBA | | 240.00 | 280.00 |
| | Ceylon black tea 100g | Beverages > Tea | pcs | | | TEA-100 | 4790001000036; 4790001000043:24 | 380.00 | 450.00 |

அரிசிக்கு `sold_by` இல் `WEIGHT` ஐயும் போடுங்கள், அப்போது till எடையைக் கேட்கும்.

## Prices ஐ மொத்தமாக update செய்யுங்கள்

1. உங்கள் catalog ஐ **export** செய்யுங்கள் (கீழே பாருங்கள்).
2. `price` column ஐ (மற்றும் தேவையான மற்றவற்றை) மாற்றுங்கள். மற்ற columns ஐ அப்படியே விடுங்கள்.
3. File ஐ import செய்யுங்கள். Confirm செய்யும் முன் எத்தனை **Price changes** இருக்கும் என்று check காட்டும்.

## Catalog ஐ export செய்யுங்கள்

<span class="ui">Download Excel</span> அல்லது <span class="ui">Download CSV</span> ஐத் தேர்ந்தெடுங்கள். Import format இலேயே ஒரு
variant க்கு ஒரு row கிடைக்கும் — edit செய்து மீண்டும் import செய்தால் products மொத்தமாக update ஆகும்.

:::tip[Opening stock தனியானது]
Product import stock quantities ஐ set செய்யாது. Import செய்த பிறகு உங்கள் [opening stock](/ta/inventory/opening-stock/) ஐ உள்ளிடுங்கள்.
:::
