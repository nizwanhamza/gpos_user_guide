---
title: Categories, brands සහ units
description: Products categories සහ brands වලට සංවිධානය කරන්න, සහ ඔබේම units of measure add කරන්න.
sidebar:
  order: 1
---

**Catalog setup** හි tabs හතරක් තියෙනවා: **Categories**, **Brands**, **Units** සහ **Taxes**. Products ගොඩක් add කරන්න
කලින් මේවා setup කරන්න — නැත්නම් [import](/si/catalog/import-export/) එකට categories සහ brands හදන්න ඉඩ දෙන්න.

## Categories

Categories වලින් reports සහ stock counts වල products group කරනවා. ඒවා **levels 3ක් දක්වා** යන්න පුළුවන්, උදා.
*Beverages › Soft drinks › Carbonated*.

1. <span class="ui">New category</span> තෝරන්න.
2. **Name** එක දාන්න.
3. **Parent category** එකක් තෝරන්න, නැත්නම් *None (top level)*.
4. **Sort order** එක set කරන්න — අඩු numbers මුලින් පෙන්නනවා.
5. Save කරන්න.

Category එකක් යටතේ තව එකක් add කරන්න ඒක ළඟ <span class="ui">Add subcategory</span> තෝරන්න. Category එකක්
deactivate කරන්න කලින් ඒකේ subcategories deactivate කරන්න.

## Brands

Brands products වල සහ *Sales by brand* report එකේ පෙනෙනවා. <span class="ui">New brand</span> තෝරා නම දාලා save කරන්න.

## Units

Product එකක **unit** එකෙන් තීරණය වෙන්නේ ඒක price කරන්නේ සහ ගණන් කරන්නේ කොහොමද කියලා. හැම business එකකටම standard
units දීලා තියෙනවා:

| Unit | Code | මනින්නේ |
|------|------|---------|
| Piece | `pcs` | Count |
| Pack | `pack` | Count |
| Kilogram | `kg` | Weight |
| Gram | `g` | Weight |
| Litre | `l` | Volume |
| Millilitre | `ml` | Volume |
| Metre | `m` | Length |

ඔබේම එකක් add කරන්න — උදා. *dozen* හෝ *bundle*:

1. <span class="ui">New unit</span> තෝරන්න.
2. කෙටි, simple අකුරු වලින් **Code** එකක් (උදා. `doz`) — පස්සේ වෙනස් කරන්න බැහැ — සහ **Name** එකක් දාන්න.
3. ඒකෙන් මනින දේ **Measures** තෝරන්න: Count, Weight, Volume හෝ Length.
4. **Decimals** set කරන්න — quantities වල දශම ස්ථාන කීයක් තියෙන්න පුළුවන්ද, උදා. 1.250 kg සඳහා `3`.
5. Save කරන්න.

## Taxes

[Taxes](/si/catalog/taxes/) බලන්න.
