---
title: Reports
description: GPOS හි හැම report එකක්ම — sales, money, stock සහ purchasing — filters, CSV export සහ printing එක්ක.
sidebar:
  order: 1
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
ඔබට පෙනෙන්නේ ඔබේ plan එකේ තියෙන features වල reports — උදා. stock reports වලට **Stock control** ඕන, purchasing reports වලට
purchasing ඕන. Plan එක අනුව තවත්: **Sales analysis reports** (පැය, product, category, brand, cashier, branch සහ till අනුව sales),
**Profit and margin in reports** (cost, margin සහ stock value — plan එකේ නැත්නම් owners ඇතුළු කාටවත් පෙනෙන්නේ නැහැ) සහ **Download
reports to Excel** (CSV export button එක). [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Reports** හි reports **Sales**, **Money**, **Stock** සහ **Purchasing** ලෙස group කරලා තියෙනවා. *View reports* permission එක ඕන.
Cost, margin සහ stock value පෙන්නන්නේ costs බලන්න අවසර තියෙන අයට විතරයි (උදා. *Accountant* role එක).

## Report එකක් භාවිතා කිරීම

1. Report එක open කරන්න.
2. Filters set කරන්න — සාමාන්‍යයෙන් **Period** එකක් (*Today*, *Yesterday*, *This week*, *Last week*, *This month*, *Last month* හෝ
   **From / To**) සහ අවශ්‍ය නම් **Branch**, **Till**, **Cashier**, **Store**, **Category**, **Brand**, **Payment method** හෝ **Supplier**.
3. සමහර reports වල rows **Show** කරන විදිහ තෝරන්න පුළුවන් — *Per day* / *Per month*, *Per supplier* / *Per product*.
4. Excel වල data open කරන්න <span class="ui">Export CSV</span>, නැත්නම් <span class="ui">Print / PDF</span> තෝරන්න.

**Print / PDF** එකෙන් A4 එකේ print වෙන්නේ report එක විතරයි: ඔබේ **letterhead** එක (logo, business නම සහ address),
report නම, **Period** එක (stock reports වලට **Stock on** දිනය), ඔබ තෝරපු **Filters**, සහ පහළින් print කළේ කවුද කවදාද කියලා.
Figures තවම වෙනස් වෙන්න පුළුවන් නම් printout එකේත් ඒක කියනවා. File එකක් තියාගන්න print window එකේ **Save as PDF** තෝරන්න.

Screen එකේ rows 2,000ක් දක්වා පෙන්නනවා — ඔක්කොම ඕන නම් CSV එක export කරන්න.

:::caution[මේ figures තවම වෙනස් වෙන්න පුළුවන්]
Till එකක් තවම හැම sale එකක්ම යවලා නැත්නම්, නැත්නම් **Sync issues** හි records බලාගෙන ඉන්නවා නම්, report එක warn කරනවා — උදා.
*Front counter has 12 records not yet on the server*. Tills sync වුණාට පස්සේ ආයෙත් බලන්න.
:::

## Sales reports

| Report | පෙන්නන දේ |
|--------|-----------|
| **Daily sales** | දවස හෝ මාසය අනුව sales, discounts, returns, voids, net sales සහ tax; cost access තියෙනවා නම් margin. |
| **Sales by hour** | දවසේ පැය සහ සතියේ දවස අනුව net sales — staff plan කරන්න. |
| **Sales by product** | Item එකක් අනුව විකුණපු සහ return කරපු quantity, සහ net sales; best sellers මුලින්. |
| **Sales by category** | Category අනුව net sales; sub-categories ඒවායේ parents වලට ඇතුළත්. |
| **Sales by brand** | Brand අනුව net sales. |
| **Sales by cashier** | හැම කෙනෙක්ම කරපු sales, දුන්න discounts, සහ returns සහ voids. |
| **Sales by branch** | Branch අනුව sales, returns, net sales, tax සහ average sale. |
| **Sales by till** | Till අනුව net sales සහ sales ගණන. |
| **Sales by customer** | Spend සහ visits අනුව top customers. |

## Money reports

| Report | පෙන්නන දේ |
|--------|-----------|
| **Payments by method** | Payment method අනුව collected, refunded සහ net — cash drawer එක සහ bank එක එක්ක සසඳන්න. |
| **Refunds & voids** | හැම refund සහ void එකක්ම original sale එක, කළේ කවුද, approve කළේ කවුද සහ reason එක එක්ක. |
| **Discounts** | Discount එකක් තියෙන sales: දුන්නේ කවුද, approve කළේ කවුද, කොච්චරද. |
| **Tax summary** | Rate අනුව taxable amount සහ tax, sales වලින් returns අඩු කරලා — VAT return එකට. |
| **Cash over / short** | Close කරපු shift එකක් අනුව: drawer එකේ තියෙන්න ඕන ගණන, ගණන් කරපු ගණන සහ difference එක. |

## Stock reports

| Report | පෙන්නන දේ |
|--------|-----------|
| **Stock on hand** | Store සහ item අනුව quantity සහ value, **දැන් හෝ පරණ දවසක අවසානයේ**. |
| **Low & negative stock** | Reorder level එකට හෝ ඊට අඩු, out of stock හෝ zero ට අඩු items. |
| **Slow movers** | ටික කාලයක් ඒ store එකෙන් විකිණිලා නැති stock තියෙන items (*Not sold for … days* තෝරන්න), value එකත් එක්ක. |
| **Stock movement summary** | Item සහ store අනුව: opening, received, transferred, sold, returned, written off, adjusted සහ closing. |
| **Adjustments & write-offs** | Store සහ reason අනුව adjust හෝ write off කරපු stock, value එකත් එක්ක. |

## Purchasing reports

| Report | පෙන්නන දේ |
|--------|-----------|
| **Purchases** | Supplier, product හෝ මාසය අනුව, suppliers ලට returns අඩු කරපු receive කළ goods. |
| **Open purchase orders** | තවම එන්න තියෙන order කරපු goods, ඉතුරු ප්‍රමාණය එක්ක. |

## නිතර අහන ප්‍රශ්න

**Net sales** = sales − returns − voids, discounts වලින් පස්සේ.

**Margin** = net sales (tax නැතුව) − cost. Cost එකක් නැති items වල sales *Sales without cost* යටතේ ගණන් කරනවා. නිවැරදි margins වලට
products වල හෝ goods receive කරනකොට costs දාන්න.

**Sale එකක් අයිති කුමන දවසටද?** ඔබේ business (හෝ branch) time zone එකේ business day එකට.

**මාසික VAT:** *Last month* සඳහා **Tax summary** run කරලා CSV එක accountant ට දෙන්න.
