---
title: Taxes
description: VAT වගේ tax rates setup කරන්න, ඒවා tax groups වලට එකතු කරන්න, සහ rate වෙනස්කම් schedule කරන්න.
sidebar:
  order: 2
---

Taxes setup කරන්නේ **Catalog setup → Taxes** හි, කොටස් දෙකකින්:

- **Tax rates** — percentage එකක් තියෙන එක tax එකක්, උදා. *VAT 18%*.
- **Tax groups** — product එකකට දෙන්නේ මේක. Group එකක **rates එකක් හෝ කිහිපයක්** එකතු වෙනවා. **හිස්** group එකක්
  කියන්නේ *tax නැහැ* (exempt හෝ zero-rated items සඳහා).

:::caution
විකුණන්න පටන් ගන්න කලින් ඔබේ rates accountant එක්ක confirm කරගන්න.
:::

## ලේසිම විදිහ: Add VAT 18%

Dashboard එකේ setup checklist එකේ **Tax** පියවරේ <span class="ui">Add VAT 18%</span> button එකක් තියෙනවා. ඒකෙන් **VAT**
(18%) rate එකයි **VAT 18%** group එකයි (code `VAT18`) එක පාරටම හැදෙනවා.

## Tax rate එකක් add කරන්න

1. **Tax rates** යටතේ <span class="ui">New tax rate</span> තෝරන්න.
2. **Code** එකක් (උදා. `VAT` හෝ `SSCL` — පස්සේ වෙනස් කරන්න බැහැ) සහ **Name** එකක් දාන්න.
3. **Rate (%)** දාන්න — දශම 4ක් දක්වා, උදා. `18` හෝ `2.5`.
4. **Applies from** තෝරන්න — අද හෝ ඉදිරි දිනයක්.
5. Save කරන්න.

## Rate එකක් වෙනස් කරන්න (උදා. ජනවාරි 1 සිට අලුත් VAT rate එකක්)

1. Rate එක ළඟ <span class="ui">Change rate</span> තෝරන්න.
2. අලුත් **Rate (%)** සහ ඒක **Applies from** දිනය දාන්න.
3. Save කරන්න.

අලුත් rate එක apply වෙන්නේ තෝරපු දිනයේ සිට. **පරණ rates පරණ sales සහ reports සඳහා තියෙනවා.** හැම rate එකක්ම සහ ඒවායේ
dates බලන්න <span class="ui">History</span> තෝරන්න.

## Tax group එකක් add කරන්න

1. **Tax groups** යටතේ <span class="ui">New tax group</span> තෝරන්න.
2. **Code** එකක් (උදා. `STANDARD` හෝ `EXEMPT` — පස්සේ වෙනස් කරන්න බැහැ) සහ **Name** එකක් දාන්න.
3. **Rates included** tick කරන්න. Tax-exempt හෝ zero-rated items වලට කිසිවක් tick කරන්න එපා.
4. Save කරන්න. **Combined today** එකේ මුළු rate එක පෙන්නනවා.

ඊට පස්සේ හැම product එකකම **Tax group** එක තෝරන්න, නැත්නම් import file එකේ `tax_group` column එකේ group code එක දාන්න.

## Prices include tax ද?

Default විදිහට **prices include tax**: shelf price එක තමයි customer ගෙවන්නේ, tax එක ඒ ඇතුළෙන් ගණනය වෙනවා. මේක
**Settings → Products and prices → Prices include tax** හි වෙනස් කරන්න. ඒ අනුව till එකේ prices ළඟ *incl. tax* හෝ *plus
tax* පෙන්නනවා.

## Rate එකක් deactivate කිරීම

Rate එකක් deactivate කරන්න කලින් ඒක හැම active tax group එකකින්ම අයින් කරන්න.
