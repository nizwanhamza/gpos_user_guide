---
title: Taxes
description: VAT போன்ற tax rates ஐ setup செய்யுங்கள், அவற்றை tax groups ஆக இணையுங்கள், rate மாற்றங்களை schedule செய்யுங்கள்.
sidebar:
  order: 2
---

Taxes **Catalog setup → Taxes** இல் இரண்டு பகுதிகளாக setup செய்யப்படும்:

- **Tax rates** — percentage உள்ள ஒரு tax, உதா. *VAT 18%*.
- **Tax groups** — product க்குக் கொடுப்பது இதுதான். ஒரு group **ஒன்று அல்லது பல rates** ஐ இணைக்கும். **காலியான** group
  என்றால் *tax இல்லை* (exempt அல்லது zero-rated items க்கு).

:::caution
விற்பனையைத் தொடங்கும் முன் உங்கள் rates ஐ accountant உடன் உறுதிசெய்யுங்கள்.
:::

## எளிய வழி: Add VAT 18%

Dashboard இன் setup checklist இல் **Tax** படியில் <span class="ui">Add VAT 18%</span> button உள்ளது. அது **VAT** (18%) rate
மற்றும் **VAT 18%** group (code `VAT18`) ஐ ஒரே முறையில் உருவாக்கும்.

## Tax rate ஐ add செய்யுங்கள்

1. **Tax rates** இன் கீழ் <span class="ui">New tax rate</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Code** (உதா. `VAT` அல்லது `SSCL` — பின்னர் மாற்ற முடியாது) மற்றும் **Name** ஐ உள்ளிடுங்கள்.
3. **Rate (%)** ஐ உள்ளிடுங்கள் — 4 தசமங்கள் வரை, உதா. `18` அல்லது `2.5`.
4. **Applies from** ஐத் தேர்ந்தெடுங்கள் — இன்று அல்லது எதிர்காலத் தேதி.
5. Save செய்யுங்கள்.

## Rate ஐ மாற்றுங்கள் (உதா. ஜனவரி 1 முதல் புதிய VAT rate)

1. Rate க்கு அருகில் <span class="ui">Change rate</span> ஐத் தேர்ந்தெடுங்கள்.
2. புதிய **Rate (%)** மற்றும் அது **Applies from** தேதியை உள்ளிடுங்கள்.
3. Save செய்யுங்கள்.

புதிய rate தேர்ந்தெடுத்த தேதியிலிருந்து apply ஆகும். **பழைய rates பழைய sales மற்றும் reports க்காக வைக்கப்படும்.** எல்லா
rates ஐயும் அவற்றின் dates ஐயும் பார்க்க <span class="ui">History</span> ஐத் தேர்ந்தெடுங்கள்.

## Tax group ஐ add செய்யுங்கள்

1. **Tax groups** இன் கீழ் <span class="ui">New tax group</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Code** (உதா. `STANDARD` அல்லது `EXEMPT` — பின்னர் மாற்ற முடியாது) மற்றும் **Name** ஐ உள்ளிடுங்கள்.
3. **Rates included** ஐ tick செய்யுங்கள். Tax-exempt அல்லது zero-rated items க்கு எதையும் tick செய்யாதீர்கள்.
4. Save செய்யுங்கள். **Combined today** மொத்த rate ஐக் காட்டும்.

பிறகு ஒவ்வொரு product இலும் **Tax group** ஐத் தேர்ந்தெடுங்கள், அல்லது import file இன் `tax_group` column இல் group code ஐப் போடுங்கள்.

## Prices include tax ஆ?

Default ஆக **prices include tax**: shelf price தான் customer செலுத்துவது, tax அதற்குள்ளேயே கணக்கிடப்படும். இதை **Settings
→ Products and prices → Prices include tax** இல் மாற்றுங்கள். அதன்படி till இல் prices அருகே *incl. tax* அல்லது *plus tax* தெரியும்.

## Rate ஐ deactivate செய்தல்

Rate ஐ deactivate செய்யும் முன் அதை எல்லா active tax groups இலிருந்தும் அகற்றுங்கள்.
