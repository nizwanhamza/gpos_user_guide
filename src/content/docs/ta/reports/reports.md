---
title: Reports
description: GPOS இன் எல்லா reports உம் — sales, money, stock, purchasing — filters, CSV export, printing உடன்.
sidebar:
  order: 1
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
உங்கள் plan இல் உள்ள features இன் reports மட்டுமே தெரியும் — உதா. stock reports க்கு **Stock control** தேவை, purchasing reports க்கு
purchasing தேவை. Plan வாரியாக மேலும்: **Sales analysis reports** (மணி, product, category, brand, cashier, branch, till வாரியாக sales),
**Profit and margin in reports** (cost, margin, stock value — plan இல் இல்லாவிட்டால் owners உட்பட யாருக்கும் தெரியாது), **Download
reports to Excel** (CSV export button). [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Reports** reports ஐ **Sales**, **Money**, **Stock**, **Purchasing** எனக் குழுவாக்கும். *View reports* permission தேவை. Cost, margin,
stock value ஆகியவை costs ஐப் பார்க்க அனுமதி உள்ளவர்களுக்கு மட்டுமே காட்டப்படும் (உதா. *Accountant* role).

## Report ஐப் பயன்படுத்துதல்

1. Report ஐ open செய்யுங்கள்.
2. Filters ஐ set செய்யுங்கள் — பொதுவாக **Period** (*Today*, *Yesterday*, *This week*, *Last week*, *This month*, *Last month* அல்லது
   **From / To**) மற்றும் விரும்பினால் **Branch**, **Till**, **Cashier**, **Store**, **Category**, **Brand**, **Payment method** அல்லது **Supplier**.
3. சில reports இல் rows ஐ எப்படி **Show** செய்வது என்று தேர்ந்தெடுக்கலாம் — *Per day* / *Per month*, *Per supplier* / *Per product*.
4. Excel இல் data ஐ open செய்ய <span class="ui">Export CSV</span>, அல்லது <span class="ui">Print / PDF</span> ஐத் தேர்ந்தெடுங்கள்.

**Print / PDF** A4 இல் report ஐ மட்டுமே print செய்யும்: உங்கள் **letterhead** (logo, business பெயர், address), report பெயர்,
**Period** (stock reports க்கு **Stock on** தேதி), நீங்கள் தேர்ந்தெடுத்த **Filters**, கீழே யார் எப்போது print செய்தார் என்பது.
Figures இன்னும் மாறக்கூடுமெனில் printout இலும் அது சொல்லப்படும். File ஆக வைத்திருக்க print window இல் **Save as PDF** ஐத்
தேர்ந்தெடுங்கள்.

Screen 2,000 rows வரை காட்டும் — அனைத்தும் வேண்டுமானால் CSV ஐ export செய்யுங்கள்.

:::caution[இந்த figures இன்னும் மாறலாம்]
Till இன்னும் எல்லா sales ஐயும் அனுப்பவில்லையெனில், அல்லது **Sync issues** இல் records காத்திருந்தால், report எச்சரிக்கும் — உதா.
*Front counter has 12 records not yet on the server*. Tills sync ஆன பிறகு மீண்டும் பாருங்கள்.
:::

## Sales reports

| Report | காட்டுவது |
|--------|------------|
| **Daily sales** | நாள் அல்லது மாதம் வாரியாக sales, discounts, returns, voids, net sales, tax; cost access இருந்தால் margin. |
| **Sales by hour** | நாளின் மணி மற்றும் வாரநாள் வாரியாக net sales — staff ஐத் திட்டமிட. |
| **Sales by product** | Item வாரியாக விற்ற மற்றும் return ஆன quantity, net sales; best sellers முதலில். |
| **Sales by category** | Category வாரியாக net sales; sub-categories அவற்றின் parents இல் சேர்க்கப்படும். |
| **Sales by brand** | Brand வாரியாக net sales. |
| **Sales by cashier** | ஒவ்வொருவரும் செய்த sales, கொடுத்த discounts, returns மற்றும் voids. |
| **Sales by branch** | Branch வாரியாக sales, returns, net sales, tax, average sale. |
| **Sales by till** | Till வாரியாக net sales மற்றும் sales எண்ணிக்கை. |
| **Sales by customer** | Spend மற்றும் visits வாரியாக top customers. |

## Money reports

| Report | காட்டுவது |
|--------|------------|
| **Payments by method** | Payment method வாரியாக collected, refunded, net — cash drawer மற்றும் bank உடன் ஒப்பிட. |
| **Refunds & voids** | ஒவ்வொரு refund மற்றும் void உம் original sale, யார் செய்தார், யார் approve செய்தார், reason உடன். |
| **Discounts** | Discount உள்ள sales: யார் கொடுத்தார், யார் approve செய்தார், எவ்வளவு. |
| **Tax summary** | Rate வாரியாக taxable amount மற்றும் tax, sales இலிருந்து returns கழித்து — VAT return க்கு. |
| **Cash over / short** | Close ஆன shift வாரியாக: drawer இல் இருக்க வேண்டியது, எண்ணியது, difference. |

## Stock reports

| Report | காட்டுவது |
|--------|------------|
| **Stock on hand** | Store மற்றும் item வாரியாக quantity மற்றும் value, **இப்போது அல்லது கடந்த நாளின் முடிவில்**. |
| **Low & negative stock** | Reorder level அல்லது அதற்குக் கீழ், out of stock அல்லது zero க்குக் கீழ் உள்ள items. |
| **Slow movers** | சிறிது காலமாக அந்த store இலிருந்து விற்காத stock உள்ள items (*Not sold for … days* ஐத் தேர்ந்தெடுங்கள்), value உடன். |
| **Stock movement summary** | Item மற்றும் store வாரியாக: opening, received, transferred, sold, returned, written off, adjusted, closing. |
| **Adjustments & write-offs** | Store மற்றும் reason வாரியாக adjust அல்லது write off செய்த stock, value உடன். |

## Purchasing reports

| Report | காட்டுவது |
|--------|------------|
| **Purchases** | Supplier, product அல்லது மாதம் வாரியாக, suppliers க்கான returns ஐக் கழித்த receive செய்த goods. |
| **Open purchase orders** | இன்னும் வர வேண்டிய order செய்த goods, மீதமுள்ளதுடன். |

## பொதுவான கேள்விகள்

**Net sales** = sales − returns − voids, discounts க்குப் பிறகு.

**Margin** = net sales (tax இல்லாமல்) − cost. Cost இல்லாத items இன் sales *Sales without cost* இன் கீழ் கணக்கிடப்படும். சரியான margins க்கு
products இல் அல்லது goods ஐ receive செய்யும்போது costs ஐ உள்ளிடுங்கள்.

**Sale எந்த நாளைச் சேர்ந்தது?** உங்கள் business (அல்லது branch) time zone இன் business day.

**மாதாந்திர VAT:** *Last month* க்கு **Tax summary** ஐ run செய்து CSV ஐ accountant இடம் கொடுங்கள்.
