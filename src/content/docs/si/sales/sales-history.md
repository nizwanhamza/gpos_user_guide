---
title: Sales
description: ඔබේ tills වලින් එන හැම sale එකක්ම බලන්න, ඒකේ details open කරන්න, සහ review flags තේරුම් ගන්න.
sidebar:
  order: 1
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Sales** හි ඔබේ tills වල කරපු sales back office එකට එන විදිහටම list කරනවා — අලුත්ම ඒවා මුලින්. Offline කරපු sales පෙනෙන්නේ
till එක sync වුණාට පස්සේ.

## List එක

හැම row එකකම **Receipt** number එක, **Time**, **Branch · till**, **Cashier**, **Total** සහ status එක (*Voided*, *Returned*,
*Partly returned*) පෙන්නනවා. Receipt, customer හෝ cashier අනුව **Search** කරන්න, **Branch** සහ dates අනුව filter කරන්න, සහ
**Show** එකෙන් filter කරන්න: *All sales*, *Voided*, *Returned*, *Partly returned* හෝ *Flagged for review*.

## Receipt numbers

හැම till එකක්ම තමන්ගේම receipts number කරනවා, ඒ නිසා numbers කවදාවත් ගැටෙන්නේ නැහැ — offline වුණත්:

```text
CMB-R01-000123
│   │   └── ඒ till එකේ running number එක
│   └────── register code එක
└────────── branch code එක
```

එකම register එකේ **replacement** till එකක් suffix එකක් එකතු කරනවා — `CMB-R01.2-000001` — ඒ නිසා ඒකේ receipts පරණ till එකේ
ඒවා එක්ක ගැටෙන්නේ නැහැ. Till එකේ (**F9**) හෝ මේ list එකේ receipt number එකෙන් search කරන්න.

## Sale details

Sale එකක් තේරුවාම පෙනෙනවා:

- ඒක කළේ කවුද, කුමන till එකේද, කවදාද — සහ back office එකට **ලැබුණේ** කවදාද;
- හැම **Item** එකක්ම **Qty**, **Price** සහ **Amount** එක්ක;
- reason එක සහ *Approved by …* එක්ක **Discounts**;
- **Subtotal**, **Tax**, **Total** සහ **payments** (ලැබුණු cash සහ change, card reference…);
- attach කරලා නම් **Customer**;
- ඒකට එරෙහිව කරපු **Voids and returns**, reason එකත් එක්ක.

Voids සහ returns කරන්නේ **till එකේ** — [Returns and voids](/si/till/returns-voids/) බලන්න.

## Review flags

Till එක කරපු sale එකක් GPOS කවදාවත් reject කරන්නේ නැහැ — නමුත් අමුතු දෙයක් තියෙනවා නම් ඔබට check කරන්න flag කරනවා:

| Flag | තේරුම | කරන්න ඕන දේ |
|------|-------|-------------|
| **Price differs** | Till එක ඒ වෙලාවේ catalog එකේ තිබුණු price එකට වෙනස් price එකකට විකුණුවා (උදා. අලුත් price එකක් තවම sync වෙලා තිබුණේ නැහැ). Detail එකේ *Price in the catalog then* පෙන්නනවා. | Tills නිතර sync වෙනවාද බලන්න. |
| **Tax differs** | Till එකේ ගණනය කරපු tax එක back office එකට වෙනස්. | Tax groups සහ rate dates check කරන්න. |
| **No shift** | Open shift එකක් නැතුව sale එක කළා. | Cashier එක්ක check කරන්න. |
| **After shift closed** | දැනටමත් close කරපු shift එකකට sale එක ආවා. | Shift එකේ count එක check කරන්න. |
| **Method switched off** | Switch off කළාට පස්සේ payment method එකක් භාවිතා කළා. | සාමාන්‍යයෙන් තවම sync නොවුණු till එකක්. |
| **No reference** | Reference එකක් ඕන payment එකකට reference එකක් තිබුණේ නැහැ. | Bank terminal එක එක්ක සසඳන්න. |
| **… (not in plan)** | ඔබේ plan එකේ නැති feature එකක් till එක භාවිතා කළා: *Sold by weight*, *Split payment*, *Card/QR/bank payment*, *Discount* හෝ *Customer discount*. Till එකක් offline වැඩ කරද්දී plan වෙනසක් තවම ලැබිලා නැති වුණාම මේක වෙනවා. | Plan එක ලැබෙන්න till එක online කරන්න. |
