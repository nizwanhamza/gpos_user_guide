---
title: Branches, registers மற்றும் warehouses
description: Shops (branches), அவற்றில் உள்ள registers (checkout counters), கூடுதல் stock locations (warehouses) ஐ add செய்யுங்கள்.
sidebar:
  order: 2
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**More than one branch** மற்றும் **Warehouses** plan features. உங்கள் plan **active branches**, **registers**,
**warehouses** எண்ணிக்கையையும் வரம்பிடலாம் (branch இன் சொந்த store warehouse ஆகக் கணக்கிடப்படாது). **Warehouses**
இல்லாவிட்டால் ஒவ்வொரு branch இன் சொந்த store க்கு மேல் stores ஐ add செய்ய முடியாது. உங்கள் limits dashboard இல்
தெரியும். [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

GPOS உங்கள் business ஐ இப்படி ஒழுங்கமைக்கும்:

```text
Business
└── Branch            ஒரு shop அல்லது outlet, உதா. "Kandy" (KDY)
    ├── Registers     அந்த shop இன் checkout counters — ஒவ்வொன்றுக்கும் ஒரு till device
    └── Warehouses    stock வைக்கும் இடங்கள் — ஒவ்வொரு branch க்கும் ஒரு default உண்டு (அதன் "store")
```

உங்கள் business **MAIN** என்ற branch மற்றும் அதன் default warehouse உடன் தொடங்கும். **இன்னும் register இல்லை** —
முதல் till ஐ pair செய்யும் முன் ஒன்றை add செய்யுங்கள். அவற்றைப் பார்க்கவும் மாற்றவும் **Branches** ஐ open செய்யுங்கள்.

:::tip
MAIN branch இன் பெயரை <span class="ui">Edit</span> மூலம் மாற்றலாம் (உதா. உங்கள் shop இன் பெயருக்கு). அதன் code
`MAIN` ஆகவே இருக்கும்.
:::

## Branch ஐ add செய்யுங்கள்

1. <span class="ui">New branch</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Code** ஐ உள்ளிடுங்கள் — சுருக்கமானது, receipts இல் print ஆகும், உதா. `KDY`. **Codes ஐப் பின்னர் மாற்ற முடியாது**,
   எனவே கவனமாகத் தேர்ந்தெடுங்கள்.
3. **Name**, விரும்பினால் **Phone** மற்றும் **Time zone** ஐ உள்ளிடுங்கள் (business time zone ஐப் பயன்படுத்த காலியாக விடுங்கள்).
4. <span class="ui">Create branch</span> ஐத் தேர்ந்தெடுங்கள்.

புதிய branch க்கு அதன் சொந்த default warehouse வரும். எத்தனை branches வைத்திருக்கலாம் என்பது உங்கள் plan ஐப்
பொறுத்தது; limits dashboard இல் தெரியும்.

## Registers ஐ add செய்யுங்கள்

**Register** என்பது checkout counter. ஒவ்வொரு till device உம் ஒரு register க்கு pair செய்யப்படும்.

Branch card இல் **Registers** இன் கீழ் <span class="ui">Add</span> ஐத் தேர்ந்தெடுத்து, **Code** மற்றும் **Name** (உதா.
`R2` — *Counter 2*) கொடுத்து save செய்யுங்கள். பிறகு [POS devices](/ta/business/pos-devices/) இல் அதற்கு till ஐ pair செய்யுங்கள்.

## Warehouses ஐ add செய்யுங்கள்

பின்புற store room அல்லது central warehouse க்குக் கூடுதல் **warehouses** ஐப் பயன்படுத்துங்கள். Stock warehouse
வாரியாக வைக்கப்படும், அவற்றுக்கிடையே [transfer](/ta/inventory/transfers/) செய்யலாம். Inventory மற்றும் purchasing
screens இல் warehouses **stores** என அழைக்கப்படும்.

**Warehouses** இன் கீழ் <span class="ui">Add</span> ஐத் தேர்ந்தெடுத்து, **Code** மற்றும் **Name** கொடுத்து save செய்யுங்கள்.

## Edit, deactivate மற்றும் activate

- பெயர், phone அல்லது time zone ஐ மாற்ற <span class="ui">Edit</span> ஐத் தேர்ந்தெடுங்கள்.
- Branch, register அல்லது warehouse ஐப் பயன்படுத்துவதை நிறுத்த <span class="ui">Deactivate</span> ஐத் தேர்ந்தெடுங்கள்.
  History இருக்கும். மீண்டும் கொண்டுவர <span class="ui">Activate</span> ஐத் தேர்ந்தெடுங்கள்.
- Branch இன் **default** warehouse ஐ deactivate செய்ய முடியாது.

## Quick-pick buttons

ஒவ்வொரு branch க்கும் till க்கான அதன் சொந்த **Quick-pick buttons** உண்டு — [Quick-pick buttons](/ta/catalog/quick-picks/) ஐப் பாருங்கள்.
