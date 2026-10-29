---
title: Barcodes மற்றும் labels
description: Barcode இல்லாத items க்கு உங்கள் சொந்த in-store barcode ஐக் கொடுங்கள், label printer அல்லது A4 sticker sheets இல் barcode labels ஐ print செய்யுங்கள் — back office இலும் till இலும்.
sidebar:
  order: 3.5
  badge:
    text: புதியது
    variant: tip
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**Generate in-store barcodes** மற்றும் **Print barcode labels** இரண்டு தனித்தனி plan features. முதலாவது இல்லாவிட்டால்
<span class="ui">Generate</span> button இருக்காது; இரண்டாவது இல்லாவிட்டால் <span class="ui">Print labels</span> buttons இருக்காது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

சில items க்கு manufacturer இன் barcode இல்லை — உங்கள் சொந்த packs, நீங்கள் bag செய்யும் loose பொருட்கள், ஆடைகள், hardware.
GPOS அவற்றுக்கு **உங்கள் சொந்த barcodes** ஐக் கொடுத்து, அவற்றில் ஒட்ட **labels ஐ print செய்யும்**. அப்போது till இல் மற்ற
எதையும் போல அவற்றையும் scan செய்யலாம். ஏற்கனவே barcode உள்ள items க்கும் labels ஐ print செய்யலாம், உதா. shelf இல் அல்லது
item இல் price ஐக் காட்ட.

## Barcodes ஐ உள்ளிடுதல்

**Products** இல் variant இன் **Barcodes** box ஒன்று அல்லது பல codes ஐ ஏற்கும்:

- **ஒரே item க்கு ஒன்றுக்கு மேற்பட்ட barcodes** (பழைய மற்றும் புதிய packaging, அல்லது வேறு supplier)? அவற்றுக்கு இடையே `;`
  போடுங்கள்.
- **Pack அல்லது carton இல் barcode ஆ?** `:` மற்றும் அதில் உள்ள items எண்ணிக்கையைச் சேருங்கள் — 24 கொண்ட carton க்கு `:24`.
  அதை scan செய்தால் முழு pack உம் சேரும்.

உதாரணம்: `4791234567890; 4791234567999:24`

## In-store barcodes ஐ generate செய்யுங்கள்

GPOS **`20` இல் தொடங்கும் EAN-13 barcodes** ஐ உருவாக்கும், உதா. `2000000000428`. 20–29 இல் தொடங்கும் codes shop க்குள்
பயன்படுத்த ஒதுக்கப்பட்டவை, எனவே அவை **ஒருபோதும் manufacturer இன் barcode உடன் மோதாது**, எந்த scanner உம் அவற்றைப் படிக்கும்.
ஒவ்வொரு business க்கும் தனி numbers; நீங்கள் ஏற்கனவே கையால் type செய்த code skip செய்யப்படும்.

### ஒரு item க்கு

**Barcodes** box க்குள் உள்ள <span class="ui">Generate</span> ஐத் தேர்ந்தெடுங்கள் — product ஐ உருவாக்கும்போது, அல்லது
variant ஐ <span class="ui">Edit</span> செய்யும்போது. அது அடுத்த number ஐ நிரப்பும், அல்லது item க்கு ஏற்கனவே barcode
இருந்தால் `;` க்குப் பின் சேர்க்கும். பிறகு வழக்கம்போல் save செய்யுங்கள்.

### Barcode இல்லாத எல்லா items க்கும்

**Products** list இல் <span class="ui">Generate missing barcodes</span> ஐத் தேர்ந்தெடுத்து confirm செய்யுங்கள். Barcode இல்லாத
ஒவ்வொரு active item க்கும் ஒன்று கிடைக்கும், GPOS *… items got a new barcode.* எனக் காட்டும். இதற்கு *Update products*
permission தேவை.

:::note
**எடைக்கு விற்கப்படும் items க்கு ஒருபோதும் generate செய்த barcode கிடைக்காது** — அவற்றின் barcodes scale இலிருந்து வரும்.
:::

## Barcode labels ஐ print செய்யுங்கள்

### எங்கிருந்து print செய்வது

| எங்கே | எப்போது | நிரப்பப்படும் labels |
|-------|---------|----------------------|
| **New product** | உருவாக்கியவுடன்: *Product saved. Print barcode labels for it?* → <span class="ui">Print labels</span> (அல்லது <span class="ui">Not now</span>) | Variant க்கு 1 |
| **Product page** | Variants க்கு மேலே உள்ள <span class="ui">Print labels</span> button | Variant க்கு 1 |
| **Products list** | Products ஐ tick செய்து (அல்லது **Select all shown**) → <span class="ui">Print labels (…)</span> | Variant க்கு 1 |
| **Receiving goods** | Delivery ஐ post செய்த பின்: <span class="ui">Print labels for these items</span> | Receive செய்த quantity |
| **Till** | கீழே **Till இல்** பகுதியைப் பாருங்கள் | 1 |

### Print dialog

1. ஒவ்வொரு item க்கும் **Barcode** (பல barcodes உள்ள item இல், pack barcodes உட்பட, ஒன்றைத் தேர்ந்தெடுக்கலாம்) மற்றும்
   **Labels** எண்ணிக்கையைச் சரிபாருங்கள். ஒரு item ஐ விட்டுவிட `0` ஐ உள்ளிடுங்கள்.
2. **Label size** ஐத் தேர்ந்தெடுங்கள்:
   - **Label roll 38 × 25 mm**, **50 × 25 mm** அல்லது **50 × 30 mm** — label printer க்கு;
   - **A4 sticker sheet, 3 × 8 (70 × 37 mm)** — ஒரு page இல் 24 labels, சாதாரண printer க்கு.
3. **Show the price** மற்றும் **Show the shop name** ஐ tick செய்யுங்கள் அல்லது நீக்குங்கள் (தொடக்கத்தில் இரண்டும் on). Pack
   barcode முழு pack இன் price ஐக் காட்டும்.
4. **Preview** ஐப் பார்த்து <span class="ui">Print labels (…)</span> ஐத் தேர்ந்தெடுங்கள்.
5. Browser இன் print window இல்:
   - **Label roll** — **label printer** ஐத் தேர்ந்தெடுங்கள். அதன் paper size label size ஆகவே இருக்க வேண்டும்.
   - **A4 sheet** — உங்கள் printer, **A4** paper, **Actual size** (scaling இல்லாமல்) ஐத் தேர்ந்தெடுங்கள்.

ஒவ்வொரு label உம் product பெயர் (மற்றும் size அல்லது colour), barcode மற்றும் அதன் கீழ் number, நீங்கள் தேர்ந்தெடுத்திருந்தால்
price மற்றும் உங்கள் shop பெயரைக் காட்டும்.

**உங்கள் தேர்வுகள் இந்த computer இல்** (அல்லது till இல்) நினைவில் வைக்கப்படும், முழு business க்கும் அல்ல — ஏனெனில் label
printer computer க்குச் சொந்தமானது.

தெரிந்துகொள்ள வேண்டியவை:

- ஒரே நேரத்தில் அதிகபட்சம் **1,000 labels**.
- *This barcode is long for this label size and may not scan* — 38 mm label இல் நீளமான code (உதா. எழுத்துகளும் இலக்கங்களும்).
  **50 mm** label ஐத் தேர்ந்தெடுங்கள். Generate செய்த barcodes எல்லா size களுக்கும் பொருந்தும்.
- *Nothing to print* — எந்த item க்கும் இன்னும் barcode இல்லை. முதலில் barcode கொடுங்கள்.

## Till இல்

உங்கள் plan இல் இருந்தால் till இரண்டையும் செய்யும், **offline ஆகவும்**:

- **புதிய item க்கு barcode ஐ generate செய்யுங்கள்.** [Till இல் product ஐ add செய்யுங்கள்](/ta/till/add-product-at-till/) இல்
  **Barcode** box இல் <span class="ui">Generate</span> ஐத் தேர்ந்தெடுங்கள். ஒவ்வொரு till உம் சில புதிய numbers ஐத் தயாராக
  வைத்திருக்கும், online ஆகும் ஒவ்வொரு முறையும் நிரப்பும். Offline இல் அவை தீர்ந்தால் till *This till has no new barcodes
  left* எனச் சொல்லும் — சிறிது நேரம் internet உடன் connect செய்து மீண்டும் try செய்யுங்கள்.
- **புதிய item க்கு label ஐ print செய்யுங்கள்.** Barcode generate செய்யப்பட்டிருந்தால் **Print a label for it** tick ஆகியிருக்கும்
  — புதிய barcode இன்னும் item இல் இல்லை, அதை item இல் வைக்கும் வழி label தான்.
- **கண்டுபிடித்த item க்கு label ஐ print செய்யுங்கள்.** Scan செய்த item இன் கீழ் <span class="ui">Print label</span>, அல்லது
  search result அருகே உள்ள tag button ஐத் தேர்ந்தெடுங்கள்.

Cashier **label printer** ஐத் தேர்ந்தெடுக்க till browser இன் print window ஐக் காட்டும்.

:::caution[கேட்காமல் receipts ஐ print செய்யும் tills]
Till இன் browser அமைதியாக print செய்ய (*kiosk printing*) set செய்யப்பட்டிருந்தால், labels உம் நேரடியாக default printer க்கு —
receipt printer க்கு — செல்லும். Labels க்குத் தனி browser profile ஐப் பயன்படுத்துங்கள், அல்லது back office இலிருந்து labels ஐ
print செய்யுங்கள்.
:::

## யார் செய்யலாம்

| என்ன | Permission |
|------|------------|
| Barcode ஐ generate செய்தல் | *Create products* / *Update products* இன் பகுதி (till இல்: [product add செய்யும் விதிகள்](/ta/till/add-product-at-till/)). |
| Generate missing barcodes | *Update products*. |
| Labels ஐ print செய்தல் | **Print barcode labels** — default ஆக Owner, Administrator, Manager, Inventory manager. Cashiers க்கு [Roles](/ta/business/roles/) இல் role மூலம் கொடுங்கள். |
