---
title: Goods ஐ receive செய்தல்
description: Deliveries ஐ அவற்றின் cost இல் stock இல் சேருங்கள் — purchase order க்கு எதிராக அல்லது order இல்லாமல்.
sidebar:
  order: 3
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Suppliers and goods received** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu இல் தெரியாது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

Receive செய்த goods store இன் stock இல் **அவற்றின் cost இல்** சேரும், average cost உம் update ஆகும்.

## Purchase order க்கு எதிராக receive செய்யுங்கள்

1. **Purchasing → Purchase orders** க்குச் சென்று order ஐ open செய்து <span class="ui">Receive goods</span> ஐத் தேர்ந்தெடுங்கள்.
2. Order செய்ததை GPOS நிரப்பும். **உண்மையில் வந்ததற்கு ஏற்ப quantities மற்றும் costs ஐ மாற்றுங்கள்.**
3. **Supplier invoice no.** மற்றும் **Invoice date** ஐ உள்ளிடுங்கள்.
4. Batch tracking உள்ள products க்கு **Batch number** மற்றும் **Expiry date** ஐ உள்ளிடுங்கள்.
5. இனி எதுவும் வராது என்றால் **Nothing more will come for this order (close it)** ஐ tick செய்யுங்கள்.
6. <span class="ui">Post goods received</span> ஐத் தேர்ந்தெடுங்கள்.

GPOS *Received as GRN-…* எனக் காட்டும் — goods stock இல் உள்ளன.

உங்கள் plan இல் **Print barcode labels** இருந்தால், receive செய்த ஒவ்வொரு item க்கும் label ஐ print செய்ய
<span class="ui">Print labels for these items</span> ஐத் தேர்ந்தெடுங்கள் (தேவையெனில் எண்ணிக்கைகளை மாற்றுங்கள்).
[Barcodes மற்றும் labels](/ta/catalog/barcodes-and-labels/) ஐப் பாருங்கள்.

## Order இல்லாமல் receive செய்யுங்கள்

1. **Purchasing → Receive goods** → <span class="ui">Receive without an order</span> க்குச் செல்லுங்கள்.
2. **Supplier** மற்றும் **Store** ஐத் தேர்ந்தெடுங்கள்.
3. **Unit** (அல்லது pack), **Quantity**, **Cost per unit** உடன் items ஐ add செய்யுங்கள்.
4. Invoice details ஐ உள்ளிட்டு <span class="ui">Post goods received</span> ஐத் தேர்ந்தெடுங்கள். இங்கும் items க்கு labels ஐ print செய்யலாம்.

## Packs மற்றும் cases

Cases ஆக வாங்கி pieces ஆக விற்றால், **Unit** ஆக pack ஐத் தேர்ந்தெடுத்து **pack size** (*pieces per pack*) மற்றும் **cost per pack** ஐ
உள்ளிடுங்கள். GPOS அதை stock இல் pieces ஆக மாற்றும்.

**Purchases** report returns ஐக் கழித்த receive செய்த goods ஐ supplier, product அல்லது மாதம் வாரியாகக் காட்டும்.
