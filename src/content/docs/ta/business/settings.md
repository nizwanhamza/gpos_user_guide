---
title: Business settings
description: Business profile, address, regional settings, prices மற்றும் tax, checkout மற்றும் cash rules, discount limits, return window, receipts.
sidebar:
  order: 1
---

**Settings** இல் முழு business க்குமான விவரங்களும் rules உம் உள்ளன. அவற்றை மாற்ற *Manage business settings* permission
தேவை (owners மற்றும் administrators); access உள்ள மற்றவர்கள் பார்க்க மட்டுமே முடியும்.

தேவையானதை மாற்றி கீழே <span class="ui">Save settings</span> ஐத் தேர்ந்தெடுங்கள்.

:::note[வேறொருவர் முதலில் save செய்தாரா?]
நீங்கள் edit செய்யும்போது வேறொருவர் settings ஐ மாற்றினால், GPOS அவர்களின் வேலையை overwrite செய்யாது.
<span class="ui">Reload latest</span> ஐத் தேர்ந்தெடுத்து, உங்கள் மாற்றத்தை மீண்டும் செய்து save செய்யுங்கள்.
:::

## Logo

:::note[உங்கள் plan ஐப் பொறுத்தது]
இது **Own logo** plan feature. அது இல்லாவிட்டால் **Logo** card இருக்காது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

Settings இன் மேலே உள்ள **Logo** card இல் உங்கள் logo ஐ ஒருமுறை upload செய்யுங்கள். பிறகு அது தெரியும்:

- **back office** இல் — menu இன் மேலே, உங்கள் business பெயருக்கு மேலே;
- **tills** இல் — header இல், மேலும் **Who is using the till?** மற்றும் lock screens இல் பெரிதாக. Tills அதை வைத்திருப்பதால்
  **offline** இலும் தெரியும்;
- **A4 prints** இல் — till invoices, shift reports, back office இலிருந்து print செய்யும் purchase orders மற்றும் reports இல்,
  letterhead ஆக;
- **receipts** இல் — **Print the logo on receipts** ஐ on செய்தால் மட்டும் (கீழே **Receipts** ஐப் பாருங்கள்).

1. <span class="ui">Upload logo</span> ஐத் தேர்ந்தெடுத்து **5 MB** வரையிலான **PNG, JPEG அல்லது WebP** file ஐத் தேர்ந்தெடுங்கள்.
   **அகலமான** logo சிறப்பாகப் பொருந்தும்; square உம் பரவாயில்லை. (SVG ஏற்கப்படாது.)
2. மூன்று previews ஐயும் பாருங்கள்: **In the admin and on A4**, **On the till** (இருண்ட header), **On a receipt (black and white)**.

மாற்ற <span class="ui">Replace logo</span> ஐத் தேர்ந்தெடுங்கள். <span class="ui">Remove logo</span> செய்தால் மீண்டும் business
பெயர் மட்டும் காட்டப்படும். Tills அடுத்த sync இல் மாற்றத்தைப் பெறும்.

:::tip[Receipt preview ஐப் பாருங்கள்]
Receipt printers கருப்பு மட்டுமே print செய்யும். GPOS receipts க்கு உங்கள் logo இன் தெளிவான கருப்பு-வெள்ளை copy ஐ உருவாக்கும்
— receipt printing ஐ on செய்யும் முன் **On a receipt** preview ஐப் பாருங்கள். வெளிர் நிற அல்லது அதிக விவரங்கள் உள்ள logo
சரியாக print ஆகாமல் போகலாம்.
:::

## Business profile

| Field | எதற்கு |
|-------|--------|
| **Business name** | App இலும் default ஆக receipts இலும் காட்டப்படும். |
| **Legal name** | Register செய்த company பெயர் (கட்டாயமில்லை). |
| **Business registration no.** | உங்கள் BR number (கட்டாயமில்லை). |
| **Tax registration no.** | உங்கள் VAT/TIN number. Receipts இல் print செய்யலாம். |
| **Phone** | உங்கள் நாட்டுக்குச் சரிபார்த்து international format இல் save செய்யப்படும். |
| **Contact email** | Customers அல்லது service provider உங்களைத் தொடர்பு கொள்ளும் email. |

## Address

**Address line 1**, **Address line 2**, **City**, **District**, **Postal code**.

## Regional settings

- **Currency** — எல்லா prices மற்றும் reports உம் பயன்படுத்தும் currency (உதா. `LKR`).
- **Time zone** — reports மற்றும் daily summary இல் business day எப்போது தொடங்கி முடியும் என்பதைத் தீர்மானிக்கும்
  (உதா. `Asia/Colombo`). தேவையெனில் ஒவ்வொரு branch க்கும் தனி time zone கொடுக்கலாம்.
- **Default language** — தங்கள் சொந்த மொழியைத் தேர்ந்தெடுக்காத employees க்கான மொழி.

## Products and prices

- **Prices include tax** *(default ஆக on)* — shelf இல் உள்ள selling price இல் tax ஏற்கனவே உள்ளது; GPOS அதிலிருந்து
  tax ஐக் கணக்கிடும். Checkout இல் tax ஐ **மேலே சேர்க்க** வேண்டுமானால் untick செய்யுங்கள்.
- **Use Sinhala/Tamil product names** — till மற்றும் receipts க்காக products இல் சிங்களம் மற்றும் தமிழ் பெயர்களைச்
  சேர்க்க அனுமதிக்கும். [Languages](/ta/getting-started/languages/) ஐப் பாருங்கள்.

## Checkout and cash

இந்த rules ஒவ்வொரு till க்கும் பொருந்தும். தொடக்கத்தில் அவை strict — ஒவ்வொரு cashier discount க்கும் ஒவ்வொரு cash
out க்கும் manager approve செய்ய வேண்டும் — எனவே shop ஐத் திறக்கும் முன் பாருங்கள்:

| Setting | தொடக்க மதிப்பு |
|---------|-----------------|
| Blind close | Off |
| Cash out without a manager up to | `0` (ஒவ்வொரு cash out க்கும் manager தேவை) |
| Discount limit with sales.discount | `100` % |
| Discount limit for everyone else | `0` % (ஒவ்வொரு cashier discount க்கும் manager தேவை) |
| Return window | `30` நாட்கள் |

### Blind close

Tick செய்தால், till எதிர்பார்த்த cash அளவைக் காட்டும் **முன்பே** cashiers drawer ஐ எண்ணுவார்கள். இது நேர்மையான
count ஐத் தரும். எதிர்பார்த்த அளவும் வேறுபாடும் close செய்த பிறகு காட்டப்படும்.

### Cash out without a manager up to

Cashier தானாகச் செய்யக்கூடிய மிகப்பெரிய **cash out** (drawer இலிருந்து எடுக்கும் cash, உதா. supplier க்குச் செலுத்த).
அதைவிடப் பெரிய தொகைகளுக்கு till இல் **manager இன் PIN** தேவை.

- `0` என்றால் **ஒவ்வொரு** cash out க்கும் manager தேவை.
- Managers க்கு (*View and reconcile all cash shifts* உள்ளவர்களுக்கு) limit இல்லை.

### Discount limits

Till இல் discounts ஐ இரண்டு percentages கட்டுப்படுத்தும்:

| Setting | யாருக்குப் பொருந்தும் | அர்த்தம் |
|---------|------------------------|-----------|
| **Discount limit with sales.discount (%)** | Manual discounts கொடுக்க அனுமதி உள்ளவர்கள் — default ஆக owners, administrators, managers | **யாரும்** கொடுக்க அல்லது approve செய்யக்கூடிய அதிகபட்சம். ஒருபோதும் மீறப்படாது. |
| **Discount limit for everyone else (%)** | Cashiers | Cashier ஒரு line க்கு அல்லது முழு sale க்கு **தானாக** கொடுக்கக்கூடியது. இதற்கு மேல், manager till இல் PIN மூலம் approve செய்வார். `0` = ஒவ்வொரு discount க்கும் approval தேவை. |

இரண்டும் 0 முதல் 100 வரையான percentages (2 தசமங்கள் வரை). மற்றவர்களுக்கான limit முதலாவதை விட அதிகமாக இருக்க முடியாது.

உதாரணம்: limits **20%** மற்றும் **5%** என்றால், cashier தானாக 5%, manager இன் approval உடன் 20% வரை கொடுக்கலாம், ஒருபோதும் 20% க்கு மேல் இல்லை.

Customer discounts (customer இன் profile இல் set செய்தவை) தானாக apply ஆகும், approval தேவையில்லை.
[Customers](/ta/sales/customers/) ஐப் பாருங்கள்.

### Return window (days)

Sale க்குப் பிறகு எத்தனை நாட்களுக்குள் **till இல் return செய்யலாம்**. `0` = limit இல்லை. Role அனுமதிக்காவிட்டால்
returns மற்றும் voids க்கு cashiers க்கு manager இன் PIN தேவை. [Returns and voids](/ta/till/returns-voids/) ஐப் பாருங்கள்.

## Receipts

| Field | எதற்கு |
|-------|--------|
| **Name printed on receipts** | Default ஆக business பெயர். Trading name இருந்தால் இங்கே போடுங்கள். |
| **Invoice title** | மேலே print ஆகும் title, உதா. *TAX INVOICE*. வார்த்தைகளை accountant உடன் சரிபாருங்கள். |
| **Header lines** | பெயரின் கீழ் **4 lines** வரை — address, hotline, website. |
| **Footer text** | கீழே print ஆகும் — return policy, நன்றிக் குறிப்பு. |
| **Print tax registration number** | ஒவ்வொரு receipt இலும் உங்கள் tax registration no. ஐச் சேர்க்கும். |
| **Print the logo on receipts** | ஒவ்வொரு receipt இன் மேலேயும் உங்கள் logo ஐக் கருப்பு-வெள்ளையில் print செய்யும். தொடக்கத்தில் **off**. உங்கள் plan இல் **Own logo** இருந்தால் மட்டுமே தெரியும். |

Receipts till இலிருந்து print ஆகும்; [Till settings](/ta/till/shortcuts-and-settings/) ஐப் பாருங்கள்.

## Two-step sign-in

Back office இல் sign in செய்யும்போது ஒவ்வொரு employee உம் authenticator app code ஐப் பயன்படுத்த வேண்டுமானால்
**Require two-step sign-in for all other users of the business** ஐ tick செய்யுங்கள். Setup செய்யாதவர்களிடம் அடுத்த
sign in இல், எல்லாவற்றுக்கும் முன் அதைச் செய்யக் கேட்கப்படும். Till க்குப் பாதிப்பில்லை — cashiers தொடர்ந்து PIN ஐப் பயன்படுத்துவார்கள்.

- இந்த setting ஐ **business owner மட்டுமே** மாற்ற முடியும் (மற்றவர்களுக்கு *Only the business owner can change this* தெரியும்).
- அதன் கீழ், two-step sign-in **owner ஆக உங்களுக்குக் கட்டாயமா** (உங்கள் service provider தீர்மானிப்பது) அல்லது optional ஆ
  என்று Settings காட்டும்.

[Two-step sign-in](/ta/getting-started/two-step-sign-in/) ஐப் பாருங்கள்.

## Payment methods, cash reasons மற்றும் stock reasons

Settings page இன் கீழே இவற்றையும் manage செய்யலாம்:

- [Payment methods](/ta/business/payment-methods/)
- [Cash in/out reasons](/ta/business/cash-reasons/)
- [Stock adjustment reasons](/ta/inventory/adjustments/)

## Setup checklist ஐ மீண்டும் காட்டுதல்

Setup checklist ஐ hide செய்திருந்தால், Settings இன் மேலே உள்ள link அதை மீண்டும் dashboard க்குக் கொண்டுவரும்.
