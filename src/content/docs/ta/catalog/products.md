---
title: Products, variants மற்றும் prices
description: Products ஐ உருவாக்குங்கள், sizes மற்றும் colours ஐ variants ஆக add செய்யுங்கள், branch வாரியாக prices ஐ set மற்றும் schedule செய்யுங்கள், images ஐ add செய்யுங்கள், products ஐ archive செய்யுங்கள்.
sidebar:
  order: 3
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
உங்கள் plan **products** எண்ணிக்கையை வரம்பிடலாம் (archive செய்த products கணக்கிடப்படாது). **Sizes and colours
(variants)**, **Product photos**, **Sell by weight**, **Different branch prices**, **Batches and expiry dates** தனி plan
features — ஒன்று இல்லாவிட்டால் அதன் option product page இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Products** நீங்கள் விற்கும் அனைத்தையும் பட்டியலிடும். **Name, SKU அல்லது barcode** மூலம் search செய்யுங்கள்,
**Category**, **Brand**, status அல்லது **Added at till** மூலம் filter செய்யுங்கள், column மூலம் sort செய்யுங்கள்.

## முக்கிய யோசனைகள்

- **Product** என்பது நீங்கள் விற்பது, உதா. *Cotton T-shirt*.
- **Variant** என்பது தனக்கென **SKU**, **barcodes**, **price** உள்ள விற்கக்கூடிய ஒரு version — உதா. *Size M, White*.
  Simple product க்கு ஒரே ஒரு variant.
- **Options** என்பவை variants வேறுபடும் விஷயங்கள் — 3 வரை, உதா. *Size* மற்றும் *Colour*.
- **Unit** ஒரு quantity என்றால் என்ன என்று சொல்லும்: ஒரு piece, ஒரு kilogram…

## Product ஐ உருவாக்குங்கள்

1. **Products** → <span class="ui">New product</span> க்குச் செல்லுங்கள்.
2. **Details**:
   - **Name** (பயன்படுத்தினால் **Sinhala name** / **Tamil name** உம்).
   - **Category** மற்றும் **Brand** (கட்டாயமில்லை).
   - **Tax group** — அல்லது *Not taxed*.
   - **Unit** — prices மற்றும் stock இந்த unit க்கு.
   - **Sold by** — *Quantity* (pieces) அல்லது *Weight* (till scale இல் எடையைக் கேட்கும்).
   - **Status** — *Active* அல்லது *Inactive*. Inactive products வைக்கப்படும், ஆனால் விற்கப்படாது.
   - **Description** (கட்டாயமில்லை).
   - **Track stock for this product** — services அல்லது எண்ணாத items க்கு untick செய்யுங்கள்.
   - **Track batches and expiry dates** — expiry tracking தேவையெனில் (goods ஐ receive செய்யும்போது கேட்கப்படும்).
     [Batches and expiry](/ta/inventory/batches-expiry/) ஐப் பாருங்கள்.
3. **Options** — simple product க்குக் காலியாக விடுங்கள். Sizes அல்லது colours க்கு <span class="ui">+ Add option</span> ஐத்
   தேர்ந்தெடுத்துப் பெயர் கொடுங்கள் (உதா. *Size*).
4. **Codes and price** — ஒவ்வொரு variant க்கும் (மேலும் rows க்கு <span class="ui">+ Add variant</span>):
   - **SKU** — உங்கள் சொந்த product code, ஒவ்வொரு variant க்கும் தனித்துவமானது.
   - **Barcodes** — பல இருந்தால் `;` மூலம் பிரியுங்கள். **Pack barcode** க்கு `code:quantity` என எழுதுங்கள், உதா.
     `4791234567890:24` — அதை scan செய்தால் 24 units சேரும்.
   - **Cost** — நீங்கள் செலுத்துவது, margin reports க்கு.
   - **Selling price** — உதா. `1250.00` (அதிகபட்சம் 2 தசமங்கள்).
5. <span class="ui">Create product</span> ஐத் தேர்ந்தெடுங்கள்.

:::note
Product உருவானதும் options இன் **எண்ணிக்கை** மாற்ற முடியாது (பெயர்களை மாற்றலாம்). Variants உள்ள product ஐ உருவாக்கும் முன்
options ஐத் திட்டமிடுங்கள்.
:::

## Product ஐ edit செய்யுங்கள்

Product ஐ open செய்து, details ஐ மாற்றி <span class="ui">Save details</span> ஐத் தேர்ந்தெடுங்கள்.

பின்னர் இன்னொரு size அல்லது colour ஐச் சேர்க்க <span class="ui">Add variant</span> ஐத் தேர்ந்தெடுங்கள். Variant இன் SKU, barcodes,
cost அல்லது reorder level ஐ மாற்ற அதன் row இல் <span class="ui">Edit</span> ஐத் தேர்ந்தெடுங்கள்.

**Reorder level** என்பது inventory மற்றும் reports இல் item *low stock* ஆகக் கணக்கிடப்படும் quantity.

## Prices

ஒவ்வொரு variant க்கும் **business price** உண்டு, **branch prices** உம் இருக்கலாம். Variant இல் <span class="ui">Prices</span> ஐத் தேர்ந்தெடுங்கள்:

1. <span class="ui">New price</span> ஐத் தேர்ந்தெடுங்கள்.
2. Price ஐ உள்ளிடுங்கள்.
3. **Applies to** — *Whole business* அல்லது *{branch} branch only*.
4. **From** — *Now*, அல்லது *A later date and time* (உதா. திங்கள் 6:00 முதல் price உயர்வு).
5. <span class="ui">Set price</span> ஐத் தேர்ந்தெடுங்கள்.

Schedule செய்த prices *Rs 1,350.00 from 1 Nov* எனக் காட்டப்படும். Branch price ஐ அகற்ற <span class="ui">Use business price</span>
ஐத் தேர்ந்தெடுங்கள். **Price history** ஒவ்வொரு price ஐயும், அது எப்போது apply ஆனது, யார் set செய்தார் என்பதையும் காட்டும்.

Tills க்கு புதிய prices அடுத்த sync இல் கிடைக்கும். Prices ஐ மாற்ற *Change selling prices* permission தேவை.

## Images

ஒரு product க்கு **5 images வரை** add செய்யுங்கள் (JPEG, PNG, WebP, GIF அல்லது AVIF, ஒவ்வொன்றும் 5 MB வரை).

- Upload செய்ய <span class="ui">Add image</span>.
- வரிசையை மாற்ற <span class="ui">Move left</span> / <span class="ui">Move right</span>; முதலாவது **Main image**.
- ஒன்றை delete செய்ய <span class="ui">Remove</span>.

Images அதிகபட்சம் 1200 px க்கு resize செய்யப்படும், location மற்றும் camera data அகற்றப்படும்.

## Archive மற்றும் restore

Product ஐ ஓய்வுபெறச் செய்ய <span class="ui">Archive</span> ஐத் தேர்ந்தெடுங்கள். அது till மற்றும் lists இலிருந்து மறையும்,
ஆனால் **history, barcodes, prices இருக்கும்**. Archive செய்த products read-only.

மீண்டும் கொண்டுவர, list ஐ archived products க்கு filter செய்து, அதை open செய்து <span class="ui">Restore</span> ஐத் தேர்ந்தெடுங்கள்.
அது **inactive** ஆக வரும், மீண்டும் விற்கும் முன் சரிபார்க்கலாம்.

## Till இல் add செய்த products

உங்கள் plan இல் இருந்தால், barcode கிடைக்காதபோது cashiers [till இல் product ஐ add செய்யலாம்](/ta/till/add-product-at-till/).
இந்த products piece ஆக விற்கப்படும், stock tracking இல்லை, **Added at till** என mark செய்யப்படும். List ஐ **Added at till**
மூலம் filter செய்து, ஒவ்வொன்றையும் open செய்து, பெயர் மற்றும் price ஐச் சரிபார்த்து, category, மற்ற பெயர்கள், stock tracking ஐ add செய்யுங்கள்.

## பல products ஒரே நேரத்தில்

Spreadsheet மூலம் products ஐ உருவாக்க அல்லது update செய்ய [Import and export](/ta/catalog/import-export/) ஐப் பயன்படுத்துங்கள்.
