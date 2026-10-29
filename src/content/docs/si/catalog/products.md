---
title: Products, variants සහ prices
description: Products හදන්න, sizes සහ colours variants ලෙස add කරන්න, branch අනුව prices set සහ schedule කරන්න, images add කරන්න සහ products archive කරන්න.
sidebar:
  order: 3
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
ඔබේ plan එකට **products** ගණන සීමා කරන්න පුළුවන් (archive කළ products ගණන් කරන්නේ නැහැ). **Sizes and colours
(variants)**, **Product photos**, **Sell by weight**, **Different branch prices** සහ **Batches and expiry dates** වෙනම plan
features — එකක් නැත්නම් ඒකේ option එක product page එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Products** හි ඔබ විකුණන හැම දෙයක්ම list කරනවා. **Name, SKU හෝ barcode** එකෙන් search කරන්න, **Category**, **Brand**,
status හෝ **Added at till** අනුව filter කරන්න, column එකකින් sort කරන්න.

## ප්‍රධාන අදහස්

- **Product** එකක් කියන්නේ ඔබ විකුණන දෙයක්, උදා. *Cotton T-shirt*.
- **Variant** එකක් කියන්නේ තමන්ගේම **SKU**, **barcodes** සහ **price** එකක් තියෙන විකුණන්න පුළුවන් version එකක් — උදා.
  *Size M, White*. Simple product එකකට variant එකයි.
- **Options** කියන්නේ variants වෙනස් වෙන දේවල් — 3ක් දක්වා, උදා. *Size* සහ *Colour*.
- **Unit** එකෙන් කියන්නේ quantity එකක් කියන්නේ මොකද්ද කියලා: piece එකක්, kilogram එකක්…

## Product එකක් හදන්න

1. **Products** → <span class="ui">New product</span> වෙත යන්න.
2. **Details**:
   - **Name** (භාවිතා කරනවා නම් **Sinhala name** / **Tamil name** ත්).
   - **Category** සහ **Brand** (අනිවාර්ය නැහැ).
   - **Tax group** — නැත්නම් *Not taxed*.
   - **Unit** — prices සහ stock තියෙන්නේ මේ unit එකට.
   - **Sold by** — *Quantity* (pieces) හෝ *Weight* (till එක scale එකේ බර අහනවා).
   - **Status** — *Active* හෝ *Inactive*. Inactive products තියාගන්නවා, නමුත් විකුණන්නේ නැහැ.
   - **Description** (අනිවාර්ය නැහැ).
   - **Track stock for this product** — services හෝ ගණන් නොකරන items වලට untick කරන්න.
   - **Track batches and expiry dates** — expiry tracking ඕන නම් (goods receive කරනකොට අහනවා).
     [Batches and expiry](/si/inventory/batches-expiry/) බලන්න.
3. **Options** — simple product එකකට හිස්ව තියන්න. Sizes හෝ colours වලට <span class="ui">+ Add option</span> තෝරා
   නමක් දෙන්න (උදා. *Size*).
4. **Codes and price** — හැම variant එකකටම (තව rows වලට <span class="ui">+ Add variant</span>):
   - **SKU** — ඔබේම product code එක, හැම variant එකකටම වෙනස්.
   - **Barcodes** — කිහිපයක් නම් `;` එකෙන් වෙන් කරන්න. **Pack barcode** එකකට `code:quantity` ලියන්න, උදා.
     `4791234567890:24` — ඒක scan කළාම units 24ක් add වෙනවා. Barcode එකක් නැද්ද? ඔබේ plan එකේ තියෙනවා නම්
     item එකට in-store barcode එකක් දෙන්න <span class="ui">Generate</span> තෝරන්න — [Barcodes සහ labels](/si/catalog/barcodes-and-labels/) බලන්න.
   - **Cost** — ඔබ ගෙවන ගණන, margin reports සඳහා.
   - **Selling price** — උදා. `1250.00` (උපරිම දශම 2).
5. <span class="ui">Create product</span> තෝරන්න.

ඔබේ plan එකේ **Print barcode labels** තියෙනවා නම් GPOS ඊට පස්සේ *Product saved. Print barcode labels for it?* අහනවා —
[Barcodes සහ labels](/si/catalog/barcodes-and-labels/) බලන්න.

:::note
Product එක හැදුවාට පස්සේ options **ගණන** වෙනස් කරන්න බැහැ (නම් වෙනස් කරන්න පුළුවන්). Variants තියෙන product එකක්
හදන්න කලින් options ගැන හිතලා බලන්න.
:::

## Product එකක් edit කරන්න

Product එක open කර details වෙනස් කර <span class="ui">Save details</span> තෝරන්න.

පස්සේ තව size එකක් හෝ colour එකක් add කරන්න <span class="ui">Add variant</span> තෝරන්න. Variant එකක SKU, barcodes,
cost හෝ reorder level වෙනස් කරන්න ඒකේ row එකේ <span class="ui">Edit</span> තෝරන්න.

Product එකට barcode labels print කරන්න <span class="ui">Print labels</span> තෝරන්න —
[Barcodes සහ labels](/si/catalog/barcodes-and-labels/) බලන්න.

**Reorder level** කියන්නේ inventory සහ reports වල item එකක් *low stock* ලෙස ගණන් වෙන quantity එක.

## Prices

හැම variant එකකටම **business price** එකක් තියෙනවා, **branch prices** ත් තියෙන්න පුළුවන්. Variant එකක
<span class="ui">Prices</span> තෝරන්න:

1. <span class="ui">New price</span> තෝරන්න.
2. Price එක දාන්න.
3. **Applies to** — *Whole business* හෝ *{branch} branch only*.
4. **From** — *Now*, නැත්නම් *A later date and time* (උදා. සඳුදා 6:00 සිට price වැඩි කිරීමක්).
5. <span class="ui">Set price</span> තෝරන්න.

Schedule කරපු prices *Rs 1,350.00 from 1 Nov* විදිහට පෙන්නනවා. Branch price එකක් අයින් කරන්න
<span class="ui">Use business price</span> තෝරන්න. **Price history** එකේ හැම price එකක්ම, ඒක apply වුණේ කවදාද සහ කවුද
set කළේ කියලා පෙන්නනවා.

Tills වලට අලුත් prices ලැබෙන්නේ ඊළඟ sync එකේදී. Prices වෙනස් කරන්න *Change selling prices* permission එක ඕන.

## Images

Product එකකට **images 5ක් දක්වා** add කරන්න (JPEG, PNG, WebP, GIF හෝ AVIF, එකක් 5 MB දක්වා).

- Upload කරන්න <span class="ui">Add image</span>.
- පිළිවෙළ වෙනස් කරන්න <span class="ui">Move left</span> / <span class="ui">Move right</span>; පළමු එක **Main image** එකයි.
- එකක් delete කරන්න <span class="ui">Remove</span>.

Images උපරිම 1200 px දක්වා resize කරනවා, location සහ camera data අයින් කරනවා.

## Archive සහ restore

Product එකක් අයින් කරන්න <span class="ui">Archive</span> තෝරන්න. ඒක till එකෙන් සහ lists වලින් අතුරුදහන් වෙනවා,
නමුත් **history, barcodes සහ prices තියෙනවා**. Archive කළ products read-only.

ආයෙත් ගේන්න, list එක archived products වලට filter කර, ඒක open කර <span class="ui">Restore</span> තෝරන්න. ඒක එන්නේ
**inactive** විදිහට, ආයෙත් විකුණන්න කලින් check කරන්න පුළුවන්.

## Till එකේ add කළ products

ඔබේ plan එකේ තියෙනවා නම්, barcode එකක් හම්බ නොවුණාම cashiers ට [till එකේ product එකක් add කරන්න](/si/till/add-product-at-till/)
පුළුවන්. මේ products piece එකට විකුණනවා, stock tracking නැහැ, **Added at till** ලෙස mark කරනවා. List එක **Added at till**
අනුව filter කර, හැම එකක්ම open කර, නම සහ price check කර, category, අනිත් නම් සහ stock tracking add කරන්න.

## Products ගොඩක් එකවර

Spreadsheet එකකින් products හදන්න හෝ update කරන්න [Import and export](/si/catalog/import-export/) භාවිතා කරන්න.
