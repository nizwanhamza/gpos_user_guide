---
title: Till එකේ product එකක් add කිරීම
description: Scan කරපු barcode එකක් හම්බ නොවුණාම, ඒක till එකෙන්ම අලුත් product එකක් ලෙස add කරන්න — offline වුණත් — සහ පස්සේ back office එකේ complete කරන්න.
sidebar:
  order: 3.5
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේක **Add a new item at the till** plan feature එකයි. ඒක ඔබේ plan එකේ නැත්නම් till එකේ *Nothing found* කියලා විතරයි
පෙන්නන්නේ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

GPOS තවම නොදන්නා barcode එකක් තියෙන item එකක් customer කෙනෙක් ගෙනාවද? ඔවුන්ව ආපසු යවනවා වෙනුවට, එතැනම ඒක product
එකක් ලෙස add කරලා විකුණන්න. මේක **offline** ත් වැඩ කරනවා: අලුත් product එක යවන්නේ ඒක විකුණපු sale එකට කලින්.

## Add කරලා විකුණන්න

1. Barcode එක scan කරන්න. Till එකේ *Nothing found for …* සහ <span class="ui">Add as a new product</span> button එකක්
   පෙන්නනවා. ඒක තෝරන්න.
2. **New product** හි **Barcode** එක check කර මේවා දාන්න:
   - **Product name** — receipt එකේ පෙනෙන්න ඕන විදිහට;
   - **Selling price**;
   - **Tax** — tax group එක, නැත්නම් *Not taxed*.
3. <span class="ui">Add and sell at {price}</span> තෝරන්න. Item එක sale එකට add වෙනවා.

Barcode එක අකුරු, ඉලක්කම්, `-` හෝ `.` 3–32ක් විය යුතුයි; EAN/UPC barcodes වල check digit එක හරි වෙන්න ඕන.

### Products add කරන්න පුළුවන් කාටද

| කවුද | වෙන දේ |
|------|--------|
| **Owner, Administrator, Manager** | කෙලින්ම product එක add කරනවා. |
| **Cashier** | Till එකේ *A manager approves new products with their PIN* කියලා පෙන්නනවා. <span class="ui">Ask a manager</span> තෝරන්න; manager කෙනෙක් till එකේ තමන්ගේ නම තෝරා PIN එක type කරනවා. |

මේ permission එක **Add a new product at the till when a barcode is not found** — [Roles](/si/business/roles/) හි වෙනත් roles
වලටත් දෙන්න පුළුවන්.

## Back office එකේ complete කරන්න

Till එකේ add කරපු product එකක් හිතාමතාම simple: **piece එකට** විකුණනවා, **stock track කරන්නේ නැහැ**, category නැහැ. කෙනෙකුට
ඒක ඉවර කරන්න පුළුවන් වෙන්න **Added at till** කියලා mark කරනවා:

1. **Products** වෙත ගිහින් **Added at till** අනුව filter කරන්න (ඒවාට amber පාට *Added at till* badge එකකුත් තියෙනවා).
2. හැම එකක්ම open කරන්න. Page එකේ මතක් කරනවා: *check the name and price, then add the category, other names and stock tracking.*
3. ඕන නම් නම සහ price හදන්න, category, brand, සිංහල/දෙමළ නම් add කරන්න, ගණන් කරනවා නම් **Track stock for this product**
   tick කරන්න. Save කරන්න.

:::tip
**Added at till** filter එක check කරන එක පුරුද්දක් කරගන්න — උදා. හැම හවසකම — එතකොට ඔබේ catalog, reports සහ stock සම්පූර්ණව තියෙනවා.
:::

ඔබේ plan එකේ **product limit** එක till එකේ add කරපු products වලටත් අදාළයි.
