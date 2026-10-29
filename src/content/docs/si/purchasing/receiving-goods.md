---
title: Goods receive කිරීම
description: Deliveries ඒවායේ cost එකට stock එකට දාන්න — purchase order එකකට එරෙහිව හෝ order එකක් නැතුව.
sidebar:
  order: 3
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Suppliers and goods received** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu එකේ පෙනෙන්නේ නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

Receive කරපු goods store එකේ stock එකට එන්නේ **ඒවායේ cost එකට**, average cost එකත් update වෙනවා.

## Purchase order එකකට එරෙහිව receive කරන්න

1. **Purchasing → Purchase orders** වෙත ගිහින් order එක open කරලා <span class="ui">Receive goods</span> තෝරන්න.
2. Order කරපු දේ GPOS පුරවනවා. **ඇත්තටම ආපු ප්‍රමාණයට quantities සහ costs වෙනස් කරන්න.**
3. **Supplier invoice no.** සහ **Invoice date** දාන්න.
4. Batch tracking තියෙන products වලට **Batch number** සහ **Expiry date** දාන්න.
5. තව මොකුත් එන්නේ නැත්නම් **Nothing more will come for this order (close it)** tick කරන්න.
6. <span class="ui">Post goods received</span> තෝරන්න.

GPOS *Received as GRN-…* පෙන්නනවා — goods stock එකට ඇවිත්.

ඔබේ plan එකේ **Print barcode labels** තියෙනවා නම්, receive කරපු හැම item එකකටම label එකක් print කරන්න
<span class="ui">Print labels for these items</span> තෝරන්න (ඕන නම් ගණන් වෙනස් කරන්න).
[Barcodes සහ labels](/si/catalog/barcodes-and-labels/) බලන්න.

## Order එකක් නැතුව receive කරන්න

1. **Purchasing → Receive goods** → <span class="ui">Receive without an order</span> වෙත යන්න.
2. **Supplier** සහ **Store** තෝරන්න.
3. **Unit** (හෝ pack), **Quantity** සහ **Cost per unit** එක්ක items add කරන්න.
4. Invoice details දාලා <span class="ui">Post goods received</span> තෝරන්න. මෙතනත් items වලට labels print කරන්න පුළුවන්.

## Packs සහ cases

Cases වලින් අරගෙන pieces වලින් විකුණනවා නම්, **Unit** එක ලෙස pack එක තෝරලා **pack size** (*pieces per pack*) සහ **cost per pack**
දාන්න. GPOS ඒක stock එකේ pieces වලට හරවනවා.

**Purchases** report එකේ returns අඩු කරපු receive කළ goods supplier, product හෝ මාසය අනුව පෙන්නනවා.
