---
title: Billing மற்றும் subscription
description: உங்கள் வருடாந்த subscription — plan, தேதிகள், invoices மற்றும் செலுத்தும் முறை, plan மாற்றம், promotion codes, cancel செய்தல், கட்டணம் தாமதமானால் என்ன நடக்கும்.
sidebar:
  order: 6.5
  badge:
    text: புதியது
    variant: tip
---

GPOS ஒரு **வருடாந்த subscription**. Back office இல் உள்ள **Billing** page உங்கள் plan, செலுத்திய தேதிகள், செலுத்த
வேண்டியது, உங்கள் invoices, செலுத்தும் முறை ஆகியவற்றைக் காட்டும்.

நீங்கள் **நேரடியாக GPOS உடன்**, அல்லது **GPOS partner மூலம்** subscribe செய்யலாம் — partner என்பது தன் சொந்த customers க்கு
GPOS ஐ விற்று அவர்களின் billing ஐக் கவனிக்கும் company. எப்படியிருந்தாலும் back office உம் tills உம் ஒரே மாதிரி வேலை செய்யும்;
யார் bill செய்கிறார் என்பது மட்டுமே வேறுபடும் (கீழே **Partner மூலம் subscribe செய்தீர்களா?** ஐப் பாருங்கள்).

## யார் பார்க்கலாம்

| Permission | Default ஆக யாருக்கு | அனுமதிப்பது |
|------------|---------------------|---------------|
| **See the plan, subscription dates and billing** | Owner, Administrator | Menu இல் **Billing** ஐ open செய்ய. |
| **Change the plan, cancel the subscription and use promotion codes** | Owner, Administrator | Billing இல் plan, promotion, cancel buttons. |

## உங்கள் subscription

**Billing** க்குச் செல்லுங்கள். **Subscription** card காட்டும்:

- உங்கள் **Plan**;
- **Paid period**, **Valid until** (அல்லது **Free trial until**), **Days left** — அல்லது *… days overdue*;
- **Yearly price** — அல்லது GPOS உடன் ஏற்பாடு செய்த accounts க்கு *Complimentary*;
- **Billed by** — GPOS அல்லது உங்கள் partner;
- ஒரு status:

| Status | அர்த்தம் |
|--------|-----------|
| **Free trial** | Trial முடியும் வரை முழு plan ஐயும் இலவசமாகப் பயன்படுத்துவீர்கள். |
| **Active** | செலுத்தப்பட்டது. வருடம் முடிவதற்கு **30, 7, 1 நாட்கள்** முன் e-mail மூலம் நினைவூட்டப்படும். |
| **Payment due** | செலுத்திய வருடம் முடிந்துவிட்டது. இப்போதைக்கு எல்லாம் வேலை செய்யும் — தயவுசெய்து renew செய்யுங்கள். |
| **Payment overdue: read-only** | இன்னும் செலுத்தவில்லை: back office இல் மாற்றங்கள் நிறுத்தப்பட்டுள்ளன (கீழே **கட்டணம் தாமதமானால்** ஐப் பாருங்கள்). |
| **Suspended** | கட்டணம் செலுத்தாததால் account suspend செய்யப்பட்டது. செலுத்த GPOS ஐத் தொடர்பு கொள்ளுங்கள். |
| **Cancelled** | நீங்கள் cancel செய்தீர்கள். வருடத்தின் கடைசி நாள் வரை எல்லாம் வேலை செய்யும், பிறகு முடியும். |
| **Ended** | Subscription முடிந்துவிட்டது. மீண்டும் தொடங்க GPOS ஐத் தொடர்பு கொள்ளுங்கள். |

அதன் கீழ் உங்கள் plan இன் features மற்றும் ஒவ்வொரு limit இலும் எவ்வளவு பயன்படுத்துகிறீர்கள் என்பதும் தெரியும் —
[dashboard](/ta/getting-started/dashboard/) இல் உள்ள **Plan** card போலவே.

:::note[End date இல்லையா?]
சில accounts க்கு — உதா. billing தொடங்கும் முன் சேர்ந்த businesses — **No end date** மற்றும் *Complimentary*. அவற்றின் plan
GPOS உடன் ஏற்பாடு செய்யப்பட்டது: மாற்ற GPOS ஐத் தொடர்பு கொள்ளுங்கள்.
:::

## Invoices மற்றும் செலுத்துதல்

உங்கள் வருடம் (அல்லது free trial) முடிவதற்கு **சுமார் 7 நாட்கள் முன்**, GPOS **அடுத்த வருடத்துக்கான invoice** ஐ வழங்கும்,
கடைசி நாளில் செலுத்த வேண்டும். அது e-mail மூலம் வரும்.

- செலுத்த ஏதாவது இருக்கும்போது Billing **To pay: …** மற்றும் **bank details** ஐக் காட்டும். செலுத்தும்போது **invoice number ஐக்
  குறிப்பிடுங்கள்** (உதா. `INV-2026-000123`).
- **Invoices** ஒவ்வொரு invoice ஐயும் **Issued**, **Due**, **Total**, **Left to pay** உடன் பட்டியலிடும். Print செய்ய அல்லது PDF
  ஆக save செய்ய <span class="ui">Print / PDF</span> ஐத் தேர்ந்தெடுங்கள்.
- GPOS உங்கள் கட்டணத்தை record செய்ததும் confirmation e-mail வரும், invoice **Paid** எனக் காட்டும். அடுத்த வருட invoice முழுமையாகச்
  செலுத்தப்பட்டதும் உங்கள் subscription புதிய வருடத்துக்குச் செல்லும்.

Invoice திருத்தம் **credit note** மூலம் செய்யப்படும், அது invoice இல் காட்டப்படும்.

## Plan ஐ மாற்றுங்கள்

**Plans** இன் கீழ் plans ஐயும் அவற்றின் வருடாந்த prices ஐயும் ஒப்பிட்டு <span class="ui">Choose this plan</span> ஐத் தேர்ந்தெடுங்கள்:

| எப்போது | என்ன நடக்கும் |
|---------|----------------|
| **Free trial இன் போது** | புதிய plan உடனே தொடங்கும்; உங்கள் trial தொடரும். |
| **Upgrade** (விலை அதிகமான plan) | உங்கள் வருடத்தில் **மீதமுள்ள நாட்களுக்கு** invoice வரும். அந்த invoice செலுத்தப்பட்டவுடன் புதிய plan தொடங்கும். |
| **Downgrade** (விலை குறைந்த plan) | புதிய plan உங்கள் **அடுத்த வருடம்** தொடங்கும்போது தொடங்கும்; அதுவரை எதுவும் மாறாது. மனம் மாறினீர்களா? Renewal invoice வழங்கப்படும் முன் <span class="ui">Keep my current plan</span> ஐத் தேர்ந்தெடுங்கள். |

புதிய plan அனுமதிப்பதை விட ஏற்கனவே அதிகம் இருந்தால் (உதா. அதிக branches), GPOS முதலில் எச்சரிக்கும். **எதுவும் நீக்கப்படாது** —
உள்ளதை வைத்திருக்கலாம், ஆனால் மேலும் add செய்ய முடியாது. வருடத்தின் நடுவில் downgrade செய்தால் refund இல்லை.

புதிய plan அமலுக்கு வந்ததும், அடுத்த முறை back office ஐ open அல்லது reload செய்யும்போது அதன் features தெரியும்.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.

## Promotion codes

**Promotion code** உள்ளதா? **Promotions and cancellation** இன் கீழ் அதை **Promotion code** இல் உள்ளிட்டு
<span class="ui">Apply</span> ஐத் தேர்ந்தெடுங்கள். பிறகு page promotion ஐக் காட்டும் — உதா. அடுத்த renewal, பல renewals அல்லது
ஒவ்வொரு renewal க்கும் discount, அல்லது கூடுதல் இலவச மாதங்கள். ஒரு நேரத்தில் ஒரு promotion மட்டுமே.
[GPOS க்கு apply செய்யும்போதும்](/ta/getting-started/apply/) code ஐ உள்ளிடலாம்.

## Subscription ஐ cancel செய்யுங்கள்

1. **Promotions and cancellation** இன் கீழ் <span class="ui">Cancel subscription</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Why are you leaving?** என்று சொல்லுங்கள் (நாங்கள் மேம்பட உதவும்).
3. <span class="ui">Cancel at the end of the year</span> ஐத் தேர்ந்தெடுங்கள்.

உங்கள் வருடத்தின் கடைசி நாள் வரை எல்லாம் வேலை செய்யும்; பிறகு subscription முடியும். அதுவரை
<span class="ui">Take back the cancellation</span> ஐத் தேர்ந்தெடுக்கலாம். முடிவதற்கு முன் வைத்திருக்க வேண்டியவற்றை export
செய்யுங்கள் (உதா. [products](/ta/catalog/import-export/) மற்றும் [reports](/ta/reports/reports/)).

## நினைவூட்டல்கள் மற்றும் banners

- Owner க்கு **e-mails**: trial முடிகிறது (7 மற்றும் 1 நாள் முன்), renewal due (30, 7, 1 நாட்கள் முன்), invoice வழங்கப்பட்டது,
  கட்டணம் பெறப்பட்டது, வருடம் செலுத்தாமல் முடிந்தது, plan மாற்றங்கள், price மாற்றங்கள்.
- Trial அல்லது செலுத்திய வருடம் 30 நாட்களுக்குள் முடியும்போது, கட்டணம் due ஆக இருக்கும்போது, அல்லது subscription cancel
  செய்யப்பட்டிருக்கும்போது **back office இன் மேலே banner** (Billing ஐப் பார்க்கக்கூடியவர்களுக்கு). <span class="ui">Open Billing</span> ஐத் தேர்ந்தெடுங்கள்.

## கட்டணம் தாமதமானால்

Billing காரணமாக shop customers க்குச் சேவை செய்வது ஒருபோதும் நிறுத்தப்படாது. கட்டணம் இல்லாமல் வருடம் முடிந்தால், உங்கள்
service provider இன் settings ஐப் பொறுத்து:

1. **Payment due** — நினைவூட்டல்களுடன் சில நாட்கள் (default 7) எல்லாம் வேலை செய்யும்.
2. **Payment overdue: read-only** — back office **read-only** ஆகும்: எல்லாவற்றையும் பார்க்கலாம், reports ஐ run செய்யலாம், export
   செய்யலாம், **Billing** மற்றும் **My account** ஐப் பயன்படுத்தலாம், ஆனால் மாற்றங்கள் *The subscription is unpaid: changes
   are paused until it is renewed* என மறுக்கப்படும். **Tills தொடர்ந்து விற்பனை செய்யும், sync ஆகும்.**
3. **Suspended** — மேலும் சில நாட்களுக்குப் பின் (default 7) account suspend ஆகும்: யாரும் sign in செய்ய முடியாது, tills sync
   ஆகாது (offline இல் செய்த sales வைத்திருக்கப்பட்டு, account மீண்டும் active ஆனதும் அனுப்பப்படும்).

**உங்கள் கட்டணம் record செய்யப்பட்டவுடன் எல்லாம் மீண்டும் வேலை செய்யும்.** கட்டணம் due ஆக அல்லது back office read-only ஆக
இருக்கும்போது, tills cashier சொல்ல வேண்டிய ஒரு line ஐக் காட்டும், உதா. *The business's subscription is waiting for payment.
Please tell the owner. Selling continues as usual.*

## Partner மூலம் subscribe செய்தீர்களா?

GPOS partner மூலம் subscribe செய்திருந்தால், Billing *Your plan and payments are handled by your partner …* என partner இன்
phone மற்றும் e-mail உடன் காட்டும்.

- Partner உங்களுக்கு **தங்கள் சொந்த முறையில்** bill செய்வார் — GPOS உங்களுக்கு invoices அனுப்பாது.
- **Plan ஐ மாற்ற அல்லது renew செய்ய** உங்கள் partner ஐத் தொடர்பு கொள்ளுங்கள்; plans மற்றும் promotion codes காட்டப்படாது.
  வருட இறுதியில் cancel செய்யலாம் — partner க்கும் சொல்லுங்கள்.
- உங்கள் partner உங்கள் **plan மற்றும் subscription தேதிகளை மட்டுமே** பார்ப்பார் — உங்கள் sales, products, customers அல்லது
  வேறு business data ஐ ஒருபோதும் பார்க்க மாட்டார்.

Partner கொடுக்கும் registration link மூலம் partner வழியாக sign up செய்யலாம் — [GPOS க்கு apply செய்யுங்கள்](/ta/getting-started/apply/) ஐப் பாருங்கள்.
