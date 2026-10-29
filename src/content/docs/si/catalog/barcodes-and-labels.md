---
title: Barcodes සහ labels
description: Barcode එකක් නැති items වලට ඔබේම in-store barcode එකක් දෙන්න, label printer එකකින් හෝ A4 sticker sheets වල barcode labels print කරන්න — back office එකේ සහ till එකේ.
sidebar:
  order: 3.5
  badge:
    text: අලුත්
    variant: tip
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
**Generate in-store barcodes** සහ **Print barcode labels** කියන්නේ වෙන වෙනම plan features දෙකක්. පළමු එක නැත්නම්
<span class="ui">Generate</span> button එක නැහැ; දෙවෙනි එක නැත්නම් <span class="ui">Print labels</span> buttons නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

සමහර items වලට manufacturer ගේ barcode එකක් නැහැ — ඔබේම packs, ඔබ bag කරන loose බඩු, ඇඳුම්, hardware. GPOS එකට ඒවාට
**ඔබේම barcodes** දීලා, ඒවායේ අලවන්න **labels print කරන්න** පුළුවන්. එතකොට till එකේ අනිත් ඕනම දෙයක් වගේ ඒවා scan කරන්න
පුළුවන්. දැනටමත් barcode එකක් තියෙන items වලටත් labels print කරන්න පුළුවන්, උදා. shelf එකේ හෝ item එකේ price එක පෙන්නන්න.

## Barcodes දාන විදිහ

**Products** හි variant එකක **Barcodes** box එකට codes එකක් හෝ කිහිපයක් දාන්න පුළුවන්:

- **එකම item එකට barcodes එකකට වඩා** (පරණ සහ අලුත් packaging, නැත්නම් වෙන supplier කෙනෙක්)? ඒවා අතරට `;` දාන්න.
- **Pack එකක හෝ carton එකක barcode එකක්ද?** `:` සහ ඒකේ තියෙන items ගණන එකතු කරන්න — 24ක carton එකකට `:24`. ඒක scan කළාම
  මුළු pack එකම add වෙනවා.

උදාහරණය: `4791234567890; 4791234567999:24`

## In-store barcodes generate කරන්න

GPOS හදන්නේ **`20` වලින් පටන් ගන්න EAN-13 barcodes**, උදා. `2000000000428`. 20–29 වලින් පටන් ගන්න codes shop එකක් ඇතුළේ
භාවිතයට වෙන් කරලා තියෙන නිසා ඒවා **කවදාවත් manufacturer කෙනෙකුගේ barcode එකක් එක්ක ගැටෙන්නේ නැහැ**, සහ ඕනම scanner
එකකට කියවන්න පුළුවන්. හැම business එකකටම තමන්ගේම numbers; ඔබ කලින් අතින් type කරපු code එකක් skip කරනවා.

### එක item එකකට

**Barcodes** box එක ඇතුළේ තියෙන <span class="ui">Generate</span> තෝරන්න — product එකක් හදනකොට, නැත්නම් variant එකක්
<span class="ui">Edit</span> කරනකොට. ඒක ඊළඟ number එක පුරවනවා, නැත්නම් item එකට දැනටමත් barcode එකක් තියෙනවා නම් `;` එකට
පස්සේ එකතු කරනවා. ඊට පස්සේ සාමාන්‍ය විදිහට save කරන්න.

### Barcode නැති හැම item එකකටම

**Products** list එකේ <span class="ui">Generate missing barcodes</span> තෝරලා confirm කරන්න. Barcode නැති හැම active item
එකකටම එකක් ලැබෙනවා, GPOS *… items got a new barcode.* පෙන්නනවා. මේකට *Update products* permission එක ඕන.

:::note
**බරට විකුණන items වලට කවදාවත් generate කරපු barcode එකක් ලැබෙන්නේ නැහැ** — ඒවායේ barcodes එන්නේ scale එකෙන්.
:::

## Barcode labels print කරන්න

### කොහෙන්ද print කරන්නේ

| කොහෙන්ද | කවදාද | පුරවන labels ගණන |
|---------|-------|------------------|
| **New product** | හැදුව ගමන්: *Product saved. Print barcode labels for it?* → <span class="ui">Print labels</span> (හෝ <span class="ui">Not now</span>) | Variant එකකට 1 |
| **Product page** | Variants වලට උඩින් තියෙන <span class="ui">Print labels</span> button එක | Variant එකකට 1 |
| **Products list** | Products tick කරලා (හෝ **Select all shown**) → <span class="ui">Print labels (…)</span> | Variant එකකට 1 |
| **Receiving goods** | Delivery එක post කළාට පස්සේ: <span class="ui">Print labels for these items</span> | Receive කරපු quantity එක |
| **Till** | පහළ **Till එකේ** කොටස බලන්න | 1 |

### Print dialog එක

1. හැම item එකකටම **Barcode** එක (barcodes කිහිපයක් තියෙන item එකකට, pack barcodes එක්ක, එකක් තෝරන්න පුළුවන්) සහ
   **Labels** ගණන check කරන්න. Item එකක් අත්හරින්න `0` දාන්න.
2. **Label size** එක තෝරන්න:
   - **Label roll 38 × 25 mm**, **50 × 25 mm** හෝ **50 × 30 mm** — label printer එකකට;
   - **A4 sticker sheet, 3 × 8 (70 × 37 mm)** — page එකකට labels 24ක්, සාමාන්‍ය printer එකකට.
3. **Show the price** සහ **Show the shop name** tick කරන්න හෝ අයින් කරන්න (මුලින් දෙකම on). Pack barcode එකක මුළු pack
   එකේම price එක පෙන්නනවා.
4. **Preview** එක බලලා <span class="ui">Print labels (…)</span> තෝරන්න.
5. Browser එකේ print window එකේ:
   - **Label roll** — **label printer** එක තෝරන්න. ඒකේ paper size එක label size එකමයි විය යුත්තේ.
   - **A4 sheet** — ඔබේ printer එක, **A4** paper සහ **Actual size** (scaling නැතිව) තෝරන්න.

හැම label එකකම product නම (සහ size හෝ colour), barcode එක සහ ඒකට යටින් number එක, ඔබ තෝරලා නම් price එක සහ ඔබේ shop
නම පෙන්නනවා.

**ඔබේ තේරීම් මතක තියාගන්නේ මේ computer එකේ** (හෝ till එකේ), මුළු business එකටම නෙවෙයි — මොකද label printer එක අයිති
computer එකට.

දැනගන්න හොඳ දේ:

- එක වරකට උපරිම **labels 1,000ක්**.
- *This barcode is long for this label size and may not scan* — 38 mm label එකක දිග code එකක් (උදා. අකුරු සහ ඉලක්කම්).
  **50 mm** label එකක් තෝරන්න. Generate කරපු barcodes හැම size එකකටම ගැළපෙනවා.
- *Nothing to print* — කිසිම item එකකට තවම barcode එකක් නැහැ. මුලින්ම barcode එකක් දෙන්න.

## Till එකේ

ඔබේ plan එකේ තියෙනවා නම් till එකට මේ දෙකම කරන්න පුළුවන්, **offline වුණත්**:

- **අලුත් item එකකට barcode එකක් generate කරන්න.** [Till එකේ product එකක් add කරන්න](/si/till/add-product-at-till/) හි
  **Barcode** box එකේ <span class="ui">Generate</span> තෝරන්න. හැම till එකක්ම අලුත් numbers කිහිපයක් ලෑස්තියෙන් තියාගන්නවා,
  online වෙන හැම වෙලාවකම ඒවා පුරවනවා. Offline ඉන්නකොට ඒවා ඉවර වුණොත් till එක *This till has no new barcodes left*
  කියනවා — ටිකකට internet එකට connect කරලා ආයෙත් try කරන්න.
- **අලුත් item එකකට label එකක් print කරන්න.** Barcode එක generate කළා නම් **Print a label for it** tick වෙලා තියෙනවා —
  අලුත් barcode එක තවම item එකේ නැහැ, ඒක item එකට දාන්න තියෙන විදිහ label එකක්.
- **හොයාගත්ත item එකකට label එකක් print කරන්න.** Scan කරපු item එකට යටින් <span class="ui">Print label</span>, නැත්නම්
  search result එකක් ළඟ තියෙන tag button එක තෝරන්න.

Cashier ට **label printer** එක තෝරන්න පුළුවන් වෙන්න till එක browser එකේ print window එක පෙන්නනවා.

:::caution[අහන්නේ නැතුව receipts print කරන tills]
Till එකේ browser එක නිහඬව print කරන්න (*kiosk printing*) set කරලා නම්, labels ත් කෙළින්ම default printer එකට — receipt
printer එකට — යනවා. Labels වලට වෙනම browser profile එකක් භාවිතා කරන්න, නැත්නම් back office එකෙන් labels print කරන්න.
:::

## කාටද කරන්න පුළුවන්

| මොකක්ද | Permission |
|--------|------------|
| Barcode එකක් generate කරන්න | *Create products* / *Update products* එකේම කොටසක් (till එකේ: [product add කිරීමේ නීති](/si/till/add-product-at-till/)). |
| Generate missing barcodes | *Update products*. |
| Labels print කරන්න | **Print barcode labels** — default විදිහට Owner, Administrator, Manager සහ Inventory manager. Cashiers ට [Roles](/si/business/roles/) හි role එකක් හරහා දෙන්න. |
