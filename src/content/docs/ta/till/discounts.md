---
title: Discounts மற்றும் approvals
description: ஒரு line அல்லது முழு sale க்கு discount கொடுங்கள், உங்கள் limit க்கு மேல் இருந்தால் manager இன் approval ஐப் பெறுங்கள்.
sidebar:
  order: 5
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**Discounts at the till** ஒரு plan feature. அது இல்லாவிட்டால் till இல் <span class="ui">Discount on the whole sale</span> button (F8)
மற்றும் **Edit** (F1) இல் discount இருக்காது. Customer இன் சொந்த discount **Customer discounts** என்ற தனி feature.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

## Discount கொடுங்கள்

- **ஒரு line க்கு:** line இல் <span class="ui">Edit</span> ஐத் தேர்ந்தெடுத்து (கடைசி item க்கு **F1**) பிறகு <span class="ui">Add a discount</span>.
- **முழு sale க்கு:** <span class="ui">Discount on the whole sale</span> ஐத் தேர்ந்தெடுங்கள் (அல்லது **F8** ஐ அழுத்துங்கள்).

பிறகு:

1. **Percentage** (உதா. `10` %) அல்லது **Amount** (உதா. `100.00` குறைப்பு) ஐத் தேர்ந்தெடுங்கள்.
2. **Reason** ஐத் தேர்ந்தெடுங்கள் அல்லது type செய்யுங்கள் — *Damaged*, *Regular customer*, *Price match*, அல்லது உங்கள் சொந்த
   வார்த்தைகள். Reason எப்போதும் கட்டாயம்.
3. எவ்வளவு குறையும் என்று preview காட்டும். <span class="ui">Apply discount</span> ஐத் தேர்ந்தெடுங்கள்.

மாற்ற அல்லது அகற்ற, மீண்டும் open செய்து <span class="ui">Remove discount</span> ஐத் தேர்ந்தெடுங்கள்.

## Limits

உங்கள் business [Settings](/ta/business/settings/) இல் இரண்டு limits ஐ set செய்யும்:

- **உங்கள் சொந்த limit** — நீங்கள் தானாகக் கொடுக்கக்கூடியது. தொடக்கத்தில் cashiers க்கு **0 %**, எனவே ஒவ்வொரு cashier discount
  க்கும் manager தேவை.
- **Business limit** — யாரும் கொடுக்கக்கூடிய அதிகபட்சம். அதற்கு மேல் till *Above the business limit of … % — not possible.* எனக் காட்டும்.

**Customer discount** (customer இன் profile இலிருந்து) தானாக apply ஆகும், approval தேவையில்லை.

## Manager approval

Discounts உங்கள் limit க்கு மேல் இருந்தால், sale *The discounts are above your limit: a manager must approve them.* எனக் காட்டும்.

1. <span class="ui">Manager approval</span> ஐத் தேர்ந்தெடுங்கள்.
2. யார் approve செய்வார் என்று தேர்ந்தெடுங்கள் — list POS PIN உள்ள, இந்த branch க்கு access உள்ள managers ஐக் காட்டும்.
3. Manager till இல் **தன் PIN** ஐ type செய்வார்.

Sale *Approved by {name}* எனக் காட்டும். பெரிய cash outs, returns, voids க்கும் அதே approval screen பயன்படும்.

Till *No manager can approve on this till* எனக் காட்டினால், manager க்கு POS PIN மற்றும் இந்த branch க்கு access தேவை.

## Discounts எங்கே தெரியும்

Discounts receipt இல் print ஆகும் (*You saved …*), **Sales** இல் sale இல் தெரியும், யார் கொடுத்தார், யார் approve செய்தார் என்று
**Discounts** report இல் பட்டியலிடப்படும்.
