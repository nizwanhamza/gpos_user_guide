---
title: Customers
description: Customer profiles, customer discounts, purchase history மற்றும் marketing consent.
sidebar:
  order: 3
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Customer list** feature இன் பகுதி; **Customer discounts** ஒரு தனி feature. உங்கள் plan **customer profiles** எண்ணிக்கையையும்
வரம்பிடலாம் (erase செய்த customers கணக்கிடப்படமாட்டார்கள்). [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Customers** இல் உங்கள் customer profiles உள்ளன. Tills **phone அல்லது பெயர்** மூலம் customers ஐக் கண்டுபிடிக்கும், புதியவர்களை add
செய்யும் (offline ஆகவும்), அவர்களின் **discount** ஐத் தானாக apply செய்யும். Tills இல் பெயர், phone, discount மட்டுமே இருக்கும்.

## Customer ஐ add அல்லது edit செய்யுங்கள்

1. <span class="ui">Add customer</span> ஐத் தேர்ந்தெடுங்கள் (அல்லது edit செய்ய ஒரு customer).
2. நிரப்புங்கள்:
   - **Name** மற்றும் **Mobile phone** — ஒரு number க்கு ஒரு customer, உதா. `077 123 4567`.
   - **Email (optional)**.
   - **Customer discount (%)** — till இல் தானாக apply ஆகும்; manager approval தேவையில்லை.
   - **Notes** — back office க்கு மட்டும்; tills க்கு அனுப்பப்படாது.
   - **Marketing consent** — customer ஒப்புக்கொண்டால் மட்டுமே *SMS*, *WhatsApp* அல்லது *Email* ஐ tick செய்யுங்கள்.
   - **Active** — inactive customers tills இலிருந்து அகற்றப்படுவார்கள்.
3. Save செய்யுங்கள்.

## Customer details

ஒவ்வொரு customer உம் purchases எண்ணிக்கை, அவர்கள் **Spent** செய்தது (returns க்குப் பிறகு), profile எப்போது எங்கே உருவானது (*at a till*
அல்லது *in the admin*), receipts உடன் **Purchase history**, **Consent history** ஐக் காட்டும்.

## Personal data (PDPA)

இலங்கையின் **Personal Data Protection Act (PDPA)** இன் படி, customer தன்னைப் பற்றி நீங்கள் வைத்திருப்பதைக் கேட்கலாம், அல்லது அதை delete
செய்யக் கேட்கலாம். Customer ஐ open செய்து **Personal data (PDPA)** ஐப் பயன்படுத்துங்கள். *Export and erase customer data (PDPA
requests)* permission தேவை — default ஆக owners மற்றும் administrators க்கு உண்டு.

### Customer இன் data ஐ export செய்யுங்கள்

<span class="ui">Export data</span> ஐத் தேர்ந்தெடுங்கள். Customer க்குக் கொடுக்க, அவர்களைப் பற்றிய அனைத்தும் — profile, purchases,
consent history — உள்ள file ஐ GPOS download செய்யும்.

### Customer ஐ erase செய்யுங்கள்

1. <span class="ui">Erase customer</span> ஐத் தேர்ந்தெடுங்கள்.
2. என்ன நடக்கும் என்று படியுங்கள்: அவர்களின் **பெயர், phone, email, notes நிரந்தரமாக அகற்றப்படும்**, எல்லா marketing consent உம்
   முடிவடையும். **Sales இருக்கும்** (உங்கள் கணக்குகளுக்காக) ஆனால் யார் வாங்கினார் என்று இனி காட்டாது.
3. Confirm செய்ய **customer இன் பெயரை type செய்து** <span class="ui">Erase for good</span> ஐத் தேர்ந்தெடுங்கள்.

பிறகு profile *This customer's personal data was erased on request* எனக் காட்டும், inactive ஆகும், tills இல் அடுத்த sync இல் மறையும்.
அவர்களின் personal details [audit log](/ta/reports/audit-log/) இலிருந்தும் clear ஆகும். **இதை undo செய்ய முடியாது.**

:::caution
Data ஐ export அல்லது erase செய்யும் முன், request உண்மையில் customer இடமிருந்துதான் வருகிறதா என்று சரிபாருங்கள்.
:::

## Marketing consent

Consent **channel வாரியாக** record ஆகும், **default ஆக no**. ஒவ்வொரு மாற்றமும் தேதி மற்றும் யார் record செய்தார் என்பதுடன் வைக்கப்படும்,
எனவே customer எப்போது ஒப்புக்கொண்டார் அல்லது withdraw செய்தார் என்று காட்டலாம்.

**Name அல்லது phone** மூலம் search செய்யுங்கள், **Status** அல்லது **With a discount / Without a discount** மூலம் filter செய்யுங்கள், column
மூலம் sort செய்யுங்கள். *Sales by customer* report spend மற்றும் visits வாரியாக உங்கள் top customers ஐப் பட்டியலிடும்.
