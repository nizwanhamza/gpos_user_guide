---
title: Cash shifts
description: ஒவ்வொரு till இன் shifts ஐப் பின்தொடருங்கள், expected மற்றும் counted cash ஐ ஒப்பிடுங்கள், count இல்லாமல் shift ஐ close செய்யுங்கள், daily summary ஐப் படியுங்கள்.
sidebar:
  order: 2
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Selling at the counter (POS), cash shifts and tills** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu
இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Cash shifts** உங்கள் tills இன் ஒவ்வொரு shift ஐயும் காட்டும். ஒவ்வொரு till உம் float உடன் shift ஐ open செய்து count உடன் close
செய்யும். Back office தனக்குக் கிடைத்த sales மற்றும் cash movements இலிருந்து **expected cash** ஐக் கணக்கிட்டு **difference** ஐக் காட்டும்.

## Shifts tab

Shifts க்கு யார் எப்போது open செய்தார் என்பதன்படி பெயர் இடப்படும், உதா. `Shift-Chamari-20261027-8.00am`. Cashier அல்லது till
மூலம் **Search** செய்யுங்கள், **Branch** மற்றும் **Status** மூலம் filter செய்யுங்கள். ஒவ்வொரு row உம் shift, **Branch · till**,
**Opened**, **Sales** எண்ணிக்கை, **Expected cash**, **Counted**, **Difference** ஐக் காட்டும்.

### Shift statuses

| Status | அர்த்தம் |
|--------|-----------|
| **Open** | Till இந்த shift ஐப் பயன்படுத்துகிறது. |
| **Closed — waiting for records** | Till இல் எண்ணப்பட்டது; சில sales அல்லது cash movements இன்னும் back office ஐ அடையவில்லை. |
| **Reconciled** | Till report செய்த ஒவ்வொரு sale உம் cash movement உம் back office இல் உள்ளன. Difference இறுதியானது. |
| **Closed without count** | Back office இல் close செய்யப்பட்டது, அல்லது till இல் புதிய shift ஆல் மாற்றப்பட்டது, count இல்லாமல். |

### Shift details

Shift ஐத் தேர்ந்தெடுத்தால் யார் open மற்றும் close செய்தார், **Opening float**, payment method வாரியாக sales (*Sales — cash*,
*Sales — card*…), **Cash in**, **Cash out**, **Cash refunds**, **Counted notes and coins**, யார் செய்தார் மற்றும் *approved by …* உடன்
ஒவ்வொரு cash movement உம், sales list உம் தெரியும்.

Cash movements flag செய்யப்படலாம்: **No approval**, **Approver not allowed**, **After the shift closed**, **Reason switched off**,
**Reason not for this** அல்லது **Cash in/out (not in plan)** (plan மாற்றத்தை இன்னும் பெறாத till இல் செய்தது).

## Count இல்லாமல் shift ஐ close செய்யுங்கள்

Till **தொலைந்தால் அல்லது உடைந்தால்**, அல்லது shift ஒருபோதும் close செய்யப்படவில்லையெனில் இதைப் பயன்படுத்துங்கள்:

1. Shift ஐ open செய்து <span class="ui">Close without count</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Reason** ஐ உள்ளிட்டு confirm செய்யுங்கள்.

அடுத்த sync இல் till shift ஐப் பயன்படுத்துவதை நிறுத்தும். பின்னர் till இல் செய்யும் count உம் record ஆகும். *View and reconcile all
cash shifts* permission தேவை.

## Daily summary tab

நீங்கள் தேர்ந்தெடுக்கும் dates க்கு (**From** / **To**) **branch** மற்றும் **business day** (ஒவ்வொரு shift உம் open ஆன நாள்) வாரியாக:
shifts எண்ணிக்கை (மற்றும் எத்தனை *still open*), sales, tax, cash (*sales · in · out*), refunds, மொத்த **difference**. எண்ணப்பட்ட shifts
மட்டுமே difference இல் சேரும்.

:::tip[நாள் முடிவு routine]
1. ஒவ்வொரு cashier உம் till இல் shift ஐ close செய்து drawer ஐ எண்ணுவார்.
2. Manager **Cash shifts** ஐச் சரிபார்ப்பார் — எல்லா shifts உம் **Reconciled**, differences விளக்கப்பட்டவை.
3. **Daily summary** மற்றும் **Cash over / short** report ஐப் பாருங்கள்.
:::
