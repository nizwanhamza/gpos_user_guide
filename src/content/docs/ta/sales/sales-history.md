---
title: Sales
description: உங்கள் tills இலிருந்து வரும் ஒவ்வொரு sale ஐயும் பாருங்கள், அதன் details ஐ open செய்யுங்கள், review flags ஐப் புரிந்துகொள்ளுங்கள்.
sidebar:
  order: 1
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Selling at the counter (POS), cash shifts and tills** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu
இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Sales** உங்கள் tills இல் செய்த sales ஐ back office ஐ அடையும்போதே பட்டியலிடும் — புதியவை முதலில். Offline ஆகச் செய்த sales
till sync ஆன பிறகு தெரியும்.

## List

ஒவ்வொரு row உம் **Receipt** number, **Time**, **Branch · till**, **Cashier**, **Total**, status (*Voided*, *Returned*, *Partly returned*)
ஐக் காட்டும். Receipt, customer அல்லது cashier மூலம் **Search** செய்யுங்கள், **Branch** மற்றும் dates மூலம் filter செய்யுங்கள், **Show**
மூலம் filter செய்யுங்கள்: *All sales*, *Voided*, *Returned*, *Partly returned* அல்லது *Flagged for review*.

## Receipt numbers

ஒவ்வொரு till உம் தன் சொந்த receipts க்கு எண் இடும், எனவே numbers ஒருபோதும் மோதாது — offline ஆக இருந்தாலும்:

```text
CMB-R01-000123
│   │   └── அந்த till இன் running number
│   └────── register code
└────────── branch code
```

அதே register இல் உள்ள **replacement** till ஒரு suffix ஐச் சேர்க்கும் — `CMB-R01.2-000001` — எனவே அதன் receipts பழைய till இன்
receipts உடன் மோதாது. Till இல் (**F9**) அல்லது இந்த list இல் receipt number மூலம் search செய்யுங்கள்.

## Sale details

Sale ஐத் தேர்ந்தெடுத்தால் தெரியும்:

- யார் செய்தார், எந்த till இல், எப்போது — back office க்கு எப்போது **கிடைத்தது**;
- ஒவ்வொரு **Item** உம் **Qty**, **Price**, **Amount** உடன்;
- reason மற்றும் *Approved by …* உடன் **Discounts**;
- **Subtotal**, **Tax**, **Total**, **payments** (பெற்ற cash மற்றும் change, card reference…);
- இணைக்கப்பட்டிருந்தால் **Customer**;
- அதற்கு எதிராகச் செய்த **Voids and returns**, reason உடன்.

Voids மற்றும் returns **till இல்** செய்யப்படும் — [Returns and voids](/ta/till/returns-voids/) ஐப் பாருங்கள்.

## Review flags

Till செய்த sale ஐ GPOS ஒருபோதும் reject செய்யாது — ஆனால் அசாதாரணமான எதையும் நீங்கள் சரிபார்க்க flag செய்யும்:

| Flag | அர்த்தம் | என்ன செய்வது |
|------|-----------|---------------|
| **Price differs** | அப்போது catalog இல் இருந்த price ஐ விட வேறு price இல் till விற்றது (உதா. புதிய price இன்னும் sync ஆகவில்லை). Detail *Price in the catalog then* ஐக் காட்டும். | Tills தொடர்ந்து sync ஆகின்றனவா என்று உறுதிசெய்யுங்கள். |
| **Tax differs** | Till இல் கணக்கிட்ட tax back office இலிருந்து வேறுபடுகிறது. | Tax groups மற்றும் rate dates ஐச் சரிபாருங்கள். |
| **No shift** | Open shift இல்லாமல் sale செய்யப்பட்டது. | Cashier உடன் சரிபாருங்கள். |
| **After shift closed** | ஏற்கனவே close ஆன shift க்கு sale வந்தது. | Shift இன் count ஐச் சரிபாருங்கள். |
| **Method switched off** | Switch off செய்த பிறகு payment method பயன்படுத்தப்பட்டது. | பொதுவாக இன்னும் sync ஆகாத till. |
| **No reference** | Reference தேவையான payment க்கு reference இல்லை. | Bank terminal உடன் ஒப்பிடுங்கள். |
| **… (not in plan)** | உங்கள் plan இல் இல்லாத feature ஐ till பயன்படுத்தியது: *Sold by weight*, *Split payment*, *Card/QR/bank payment*, *Discount* அல்லது *Customer discount*. Till offline ஆக வேலை செய்து plan மாற்றத்தை இன்னும் பெறாதபோது இது நடக்கும். | Plan ஐப் பெற till ஐ online ஆக்குங்கள். |
