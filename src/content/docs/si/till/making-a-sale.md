---
title: Sale එකක් කිරීම
description: Barcode, search හෝ quick-pick එකෙන් items add කරන්න, quantities වෙනස් කරන්න, බරට විකුණන්න, payment ගන්න සහ receipt එක print කරන්න.
sidebar:
  order: 3
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

දවසේ පළමු sale එකට කලින් till එකේ **shift එකක් open කරලා තියෙන්න ඕන** — [Cash shifts on the till](/si/till/shifts/) බලන්න.
ඒ වෙනකම් till එකෙන් prices check කරන්න විතරයි පුළුවන්.

## 1. Items add කරන්න

මේ ඕනෑම එකකින් දකුණු පැත්තේ **Sale** එකට item එකක් add වෙනවා:

- **Barcode එකක් scan කරන්න.** මුලින් කොහේවත් click කරන්න ඕන නැහැ — scan box එක ඒක අල්ලගන්නවා. Pack barcode එකකින්
  මුළු pack එකම add වෙනවා (උදා. *Pack of 24*).
- **Scan a barcode or type a name or SKU** හි නමක් හෝ SKU එකක් **type කරන්න**, ඊට පස්සේ item එක තෝරන්න — mouse එකෙන්,
  නැත්නම් **↑ ↓** සහ **Enter** එකෙන්.
- Barcodes නැති items වලට **quick-pick button එකක් tap කරන්න**.

Barcode එක හම්බ වුණේ නැද්ද? ඔබේ plan එකේ තියෙනවා නම් <span class="ui">Add as a new product</span> තෝරා වහාම විකුණන්න —
[Add a product at the till](/si/till/add-product-at-till/) බලන්න.

හැම result එකකම price එක (*incl. tax* හෝ *plus tax*), tax group එක සහ stock track කරනවා නම් *In stock here: …* පෙන්නනවා.
ඔබේ plan එකයි role එකයි ඉඩ දෙනවා නම්, <span class="ui">Print label</span> (result එකක් ළඟ තියෙන tag button එක) item එකට
barcode label එකක් print කරනවා — [Barcodes සහ labels](/si/catalog/barcodes-and-labels/) බලන්න.

**Receipt එකක පහළ තියෙන barcode එක** scan කළොත් ඒ වෙනුවට ඒ sale එක open වෙනවා — reprint කරන්න, items return කරන්න හෝ void
කරන්න. [Returns සහ voids](/si/till/returns-voids/) බලන්න.

### බරට විකුණන items

බරට විකුණන products වලට till එක **Weight on the scale (kg)** අහනවා. බර type කරන්න, උදා. `1.250`, සහ
<span class="ui">Add to sale</span> තෝරන්න.

## 2. Sale එක check කරන්න

හැම line එකකටම <span class="ui">One more</span> / <span class="ui">One less</span> භාවිතා කරන්න, නැත්නම් line එකේ
<span class="ui">Edit</span> තෝරා (**F1** එකෙන් අන්තිමට add කළ item එක edit වෙනවා) මේවා වෙනස් කරන්න:

- **Quantity** එක;
- **Variant** එක — එකම product එකේ වෙනත් size එකක් හෝ colour එකක්;
- මේ line එකේ **Discount** එක — [Discounts](/si/till/discounts/) බලන්න;
- නැත්නම් <span class="ui">Remove item</span>.

<span class="ui">Save</span> තෝරන්න. Keyboard එකේ **Num +** සහ **Num −** වලින් අන්තිම item එකෙන් එකක් එකතු කරනවා හෝ අඩු කරනවා.

පහළින් **Subtotal**, **Tax** (හෝ *Tax included*) සහ **Total** පෙන්නනවා.

මුල ඉඳන් පටන් ගන්න ඕනද? <span class="ui">Clear</span> (හෝ **Ctrl + Delete**) එකෙන් හැම line එකක්ම අයින් වෙනවා (confirm කරන්න අහනවා).

## 3. Customer කෙනෙක් add කරන්න (අනිවාර්ය නැහැ)

Customer කෙනෙක් attach කරලා ඔවුන්ගේ discount එක automatic apply කරන්න <span class="ui">Customer</span> (**F3**) තෝරන්න.
Customer කෙනෙක් add කරලා නැත්නම්, pay කරනකොට till එක **Customer for this sale?** කියලා අහනවා:
<span class="ui">Add customer</span> (**F3** හෝ **Enter**), නැත්නම් <span class="ui">Skip — pay now</span> (ආයෙත් **F4**).
[Customers at the till](/si/till/customers/) බලන්න.

## 4. Payment ගන්න

1. <span class="ui">Pay</span> තෝරන්න හෝ **F4** ඔබන්න.
2. **Payment method** එක තෝරන්න. **Cash** නම් **Cash received** type කරන්න (හෝ <span class="ui">Exact</span> තෝරන්න);
   till එක **Change** පෙන්නනවා.
3. <span class="ui">Complete sale</span> තෝරන්න (හෝ **F4** / **Enter** ඔබන්න).

Card, QR, bank transfer සහ split payments [Payments](/si/till/payments/) හි තියෙනවා.

## 5. Change සහ receipt

Till එකේ **Sale complete · Receipt …** සහ දෙන්න ඕන **Change** එක ලොකු අකුරින් පෙන්නලා **Print a receipt for the customer?**
කියලා අහනවා:

- <span class="ui">Print receipt (80 mm)</span> — **Enter** හෝ **F5**; නැත්නම්
- <span class="ui">Go Green — no receipt</span> — **Esc**. කොළ පාවිච්චි වෙන්නේ නැහැ.

Till එක **Print after each sale** ට set කරලා නම් ([Till settings](/si/till/shortcuts-and-settings/)), අහන්නේ නැතුව වහාම print කරනවා.

Customer ට පස්සේ receipt එක ඕනද? අන්තිම receipt එක ආයෙත් print කරන්න **F5** ඔබන්න. පරණ sales: **F9** (*Sales*) → sale එක →
reprint, නැත්නම් full-page **invoice** එකකට <span class="ui">Print A4</span>. Reprints වල **COPY** කියලා mark වෙනවා.

හැම receipt එකක්ම (සහ A4 invoice එකක්ම) ඉවර වෙන්නේ ඒකේ **receipt number එක barcode එකක් විදිහට**. ඒ sale එක open කරන්න till
එකේ ඒක scan කරන්න.

## Offline වැඩ කරනවා

මේ හැම දෙයක්ම **internet නැතුවත්** වැඩ කරනවා. Sale එක till එකේ save වෙලා connection එක ආපු ගමන් back office එකට යනවා.
[Offline and sync](/si/till/offline-sync/) බලන්න.

:::note[Prices පරණ වෙන්න පුළුවන්]
Till එක ගොඩක් වෙලා offline තිබුණා නම් *Prices may be out of date: last update …* පෙන්නනවා. Sync වෙන්න ඒක internet එකට connect කරන්න.
:::
