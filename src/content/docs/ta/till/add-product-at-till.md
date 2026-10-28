---
title: Till இல் product ஐ add செய்தல்
description: Scan செய்த barcode கிடைக்காதபோது, அதை till இலிருந்தே புதிய product ஆக add செய்யுங்கள் — offline ஆகவும் — பின்னர் back office இல் complete செய்யுங்கள்.
sidebar:
  order: 3.5
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இது **Add a new item at the till** plan feature. அது உங்கள் plan இல் இல்லாவிட்டால் till *Nothing found* என்று மட்டுமே காட்டும்.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

GPOS க்கு இன்னும் தெரியாத barcode உள்ள item ஐ customer கொண்டுவந்தாரா? அவர்களைத் திருப்பி அனுப்புவதற்குப் பதிலாக, அங்கேயே அதை
product ஆக add செய்து விற்கவும். இது **offline** ஆகவும் வேலை செய்யும்: புதிய product அதை விற்ற sale க்கு முன்பே அனுப்பப்படும்.

## Add செய்து விற்கவும்

1. Barcode ஐ scan செய்யுங்கள். Till *Nothing found for …* மற்றும் <span class="ui">Add as a new product</span> button ஐக் காட்டும்.
   அதைத் தேர்ந்தெடுங்கள்.
2. **New product** இல் **Barcode** ஐச் சரிபார்த்து இவற்றை உள்ளிடுங்கள்:
   - **Product name** — receipt இல் தெரிய வேண்டியபடி;
   - **Selling price**;
   - **Tax** — tax group, அல்லது *Not taxed*.
3. <span class="ui">Add and sell at {price}</span> ஐத் தேர்ந்தெடுங்கள். Item sale இல் சேரும்.

Barcode 3–32 எழுத்துகள், இலக்கங்கள், `-` அல்லது `.` ஆக இருக்க வேண்டும்; EAN/UPC barcodes இல் check digit சரியாக இருக்க வேண்டும்.

### யார் products ஐ add செய்யலாம்

| யார் | என்ன நடக்கும் |
|------|----------------|
| **Owner, Administrator, Manager** | நேரடியாக product ஐ add செய்வார்கள். |
| **Cashier** | Till *A manager approves new products with their PIN* எனக் காட்டும். <span class="ui">Ask a manager</span> ஐத் தேர்ந்தெடுங்கள்; manager till இல் தன் பெயரைத் தேர்ந்தெடுத்து PIN ஐ type செய்வார். |

இந்த permission **Add a new product at the till when a barcode is not found** — [Roles](/ta/business/roles/) இல் மற்ற roles க்கும் கொடுக்கலாம்.

## Back office இல் complete செய்யுங்கள்

Till இல் add செய்த product வேண்டுமென்றே simple: **piece ஆக** விற்கப்படும், **stock track செய்யப்படாது**, category இல்லை. யாராவது
அதை முடிக்க **Added at till** என mark செய்யப்படும்:

1. **Products** க்குச் சென்று **Added at till** மூலம் filter செய்யுங்கள் (அவற்றுக்கு amber நிற *Added at till* badge உம் உண்டு).
2. ஒவ்வொன்றையும் open செய்யுங்கள். Page நினைவூட்டும்: *check the name and price, then add the category, other names and stock tracking.*
3. தேவையெனில் பெயர் மற்றும் price ஐச் சரிசெய்யுங்கள், category, brand, சிங்களம்/தமிழ் பெயர்களை add செய்யுங்கள், எண்ணினால்
   **Track stock for this product** ஐ tick செய்யுங்கள். Save செய்யுங்கள்.

:::tip
**Added at till** filter ஐச் சரிபார்ப்பதைப் பழக்கமாக்குங்கள் — உதா. ஒவ்வொரு மாலையும் — அப்போது உங்கள் catalog, reports, stock முழுமையாக இருக்கும்.
:::

உங்கள் plan இன் **product limit** till இல் add செய்த products க்கும் பொருந்தும்.
