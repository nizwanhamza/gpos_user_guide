---
title: Stock levels සහ movements
description: Store අනුව තියෙන stock බලන්න, low සහ negative stock හොයන්න, සහ stock ledger එක කියවන්න.
sidebar:
  order: 1
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Stock control** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu එකේ පෙනෙන්නේ නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Inventory** හි මේ tabs තියෙනවා: **Stock**, **Movements**, **Adjust / write off**, **Opening stock**, **Counts**, **Transfers** සහ **Expiry**.

Stock තියාගන්නේ **store අනුව** (branch එකක warehouse එක). හැම sale, return, adjustment, delivery සහ transfer එකකින්ම stock වෙනස්
වෙනවා, හැම වෙනසක්ම **stock ledger** එකේ ලියවෙනවා.

## Stock tab එක

**Store** එකක් තෝරන්න (හෝ *All stores*), **name හෝ SKU** අනුව search කරන්න. හැම item එකකටම පෙනෙනවා:

- **On hand** — දැන් තියෙන quantity එක;
- **Reorder level** — product එකේ set කරපු;
- **Value (avg. cost)** — costs බලන්න අවසර තියෙන අයට පෙන්නනවා.

ප්‍රශ්න හොයන්න **Show** භාවිතා කරන්න:

- **At or below reorder level** — order කරන්න වෙලාව (*Low* ලෙස mark කරලා);
- **Negative stock** — GPOS හිතපු ප්‍රමාණයට වඩා විකුණලා (*Negative* ලෙස mark කරලා). සාමාන්‍යයෙන් opening stock එක දාලා නැහැ, නැත්නම්
  delivery එකක් GPOS හි receive කරලා නැහැ.

Stock track නොකරන products list කරන්නේ නැහැ.

## Movements tab එක

Stock ledger එක, අලුත්ම ඒවා මුලින්. Store සහ **Type** අනුව filter කරන්න:

| Type | එන්නේ |
|------|-------|
| Opening stock | [Opening stock](/si/inventory/opening-stock/) |
| Sale / Return | Tills වලින් |
| Sold online / Online order cancelled | [Gocart.lk orders](/si/sales/sell-online/) |
| Goods received / Returned to supplier | [Purchasing](/si/purchasing/receiving-goods/) |
| Transfer out / Transfer in | [Transfers](/si/inventory/transfers/) |
| Adjustment / Write-off | [Adjustments](/si/inventory/adjustments/) සහ [stock counts](/si/inventory/counts/) |

හැම row එකකම **When**, item එක, **Change** එක සහ ඒක වුණේ **Because of** මොකද්ද කියලා පෙන්නනවා. Movements කවදාවත් වෙනස් කරන්නේ
නැහැ; නිවැරදි කිරීම් අලුත් movements ලෙස එනවා.

## Average cost

Receive කරපු goods ඒවායේ cost එකට stock එකට එනවා, GPOS item සහ store අනුව running **average cost** එකක් තියාගන්නවා. Reports වල
stock value, margins සහ write-off values වලට මේක භාවිතා කරනවා.
