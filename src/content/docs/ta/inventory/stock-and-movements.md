---
title: Stock levels மற்றும் movements
description: Store வாரியாக கையிருப்பு stock ஐப் பாருங்கள், low மற்றும் negative stock ஐக் கண்டுபிடியுங்கள், stock ledger ஐப் படியுங்கள்.
sidebar:
  order: 1
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Stock control** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu இல் தெரியாது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Inventory** இல் இந்த tabs உள்ளன: **Stock**, **Movements**, **Adjust / write off**, **Opening stock**, **Counts**, **Transfers**, **Expiry**.

Stock **store வாரியாக** வைக்கப்படும் (branch இன் warehouse). ஒவ்வொரு sale, return, adjustment, delivery, transfer உம் அதை மாற்றும்,
ஒவ்வொரு மாற்றமும் **stock ledger** இல் எழுதப்படும்.

## Stock tab

**Store** ஐத் தேர்ந்தெடுங்கள் (அல்லது *All stores*), **name அல்லது SKU** மூலம் search செய்யுங்கள். ஒவ்வொரு item க்கும் தெரிவது:

- **On hand** — இப்போதைய quantity;
- **Reorder level** — product இல் set செய்தது;
- **Value (avg. cost)** — costs ஐப் பார்க்க அனுமதி உள்ளவர்களுக்குக் காட்டப்படும்.

பிரச்சினைகளைக் கண்டுபிடிக்க **Show** ஐப் பயன்படுத்துங்கள்:

- **At or below reorder level** — order செய்யும் நேரம் (*Low* என mark ஆகும்);
- **Negative stock** — GPOS நினைத்ததை விட அதிகம் விற்கப்பட்டது (*Negative* என mark ஆகும்). பொதுவாக opening stock இல்லை, அல்லது
  delivery GPOS இல் receive செய்யப்படவில்லை.

Stock track செய்யாத products பட்டியலிடப்படாது.

## Movements tab

Stock ledger, புதியவை முதலில். Store மற்றும் **Type** மூலம் filter செய்யுங்கள்:

| Type | எங்கிருந்து வருகிறது |
|------|------------------------|
| Opening stock | [Opening stock](/ta/inventory/opening-stock/) |
| Sale / Return | Tills |
| Sold online / Online order cancelled | [Gocart.lk orders](/ta/sales/sell-online/) |
| Goods received / Returned to supplier | [Purchasing](/ta/purchasing/receiving-goods/) |
| Transfer out / Transfer in | [Transfers](/ta/inventory/transfers/) |
| Adjustment / Write-off | [Adjustments](/ta/inventory/adjustments/) மற்றும் [stock counts](/ta/inventory/counts/) |

ஒவ்வொரு row உம் **When**, item, **Change**, அது **Because of** என்ன என்பதைக் காட்டும். Movements ஒருபோதும் மாற்றப்படாது; திருத்தங்கள்
புதிய movements ஆக வரும்.

## Average cost

Receive செய்த goods அவற்றின் cost இல் stock இல் சேரும், GPOS item மற்றும் store வாரியாக running **average cost** ஐ வைத்திருக்கும்.
Reports இல் stock value, margins, write-off values க்கு இது பயன்படும்.
