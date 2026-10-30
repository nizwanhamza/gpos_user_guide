---
title: Dashboard மற்றும் setup checklist
description: Dashboard இல் என்ன தெரியும், setup checklist எப்படி வேலை செய்கிறது, hide செய்த பின் மீண்டும் கொண்டுவருவது எப்படி.
sidebar:
  order: 2
  label: Dashboard & checklist
---

Sign in செய்ததும் முதலில் தெரியும் page **Dashboard** ஆகும்.

## என்ன தெரியும்

- **Today** — இன்று இதுவரையான net sales, sales எண்ணிக்கை, average sale, returns, மற்றும் <span class="ui">All reports</span> link.
- **Best sellers today** — இன்று அதிகம் விற்பனையாகும் products.
- **Business** — business பெயர், **Business code**, currency, time zone, contact விவரங்கள், join செய்த தேதி.
- **Your access** — உங்களுக்கு உள்ள roles மற்றும் permissions, அவை எந்த branches க்கு என்பது.
- **Plan** — plan இன் பெயர், உங்கள் plan இல் உள்ள ஒவ்வொரு feature உம் (✓ உடன்), மற்றும் limits: active branches,
  registers, employees, products, plan இல் இருந்தால் warehouses மற்றும் customer profiles. *Plan ஐ மாற்ற உங்கள்
  service provider ஐத் தொடர்பு கொள்ளுங்கள்.* [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.

என்ன தெரியும் என்பது உங்கள் permissions ஐப் பொறுத்தது. உதாரணமாக cashier க்கு sales figures தெரியாது.

இடது பக்க **menu** உங்கள் business பெயரைக் காட்டும் (upload செய்திருந்தால் [logo](/ta/business/settings/) உடன்). கீழே நீங்கள்
பயன்படுத்தும் GPOS **version** ஐக் காட்டும், உதா. *Version 2026.10.29-1*. பிரச்சினையை report செய்யும்போது இந்த number ஐ
உங்கள் service provider க்குச் சொல்லுங்கள்.

## Lists உடன் வேலை செய்தல்

Back office இல் உள்ள ஒவ்வொரு list உம் — sales, shifts, products, customers, stock movements, purchase orders,
suppliers, transfers, employees, POS devices, audit log மற்றும் பல — ஒரே மாதிரி வேலை செய்யும்:

- மேலே **Search** box (என்ன search செய்யலாம் என்று list இலேயே சொல்லும், உதா. *Search receipt, customer or cashier*);
- branch, status அல்லது **From / To** dates போன்ற **filters**;
- **column heading** ஐத் தேர்ந்தெடுத்தால் அதன்படி sort ஆகும்;
- எத்தனை காட்டப்படுகிறது என்று count சொல்லும், உதா. *25 of 1,240*; அடுத்தவற்றுக்கு <span class="ui">Load more</span> ஐத் தேர்ந்தெடுங்கள்.

## Setup checklist

புதிய businesses க்கு dashboard இன் மேலே **Get your business ready** என்ற card தெரியும். அது progress ஐக் காட்டும்
— உதா. *3 of 8 done* — மற்றும் இந்தப் படிகளை:

| # | படி | எங்கே கொண்டு செல்லும் | தானாக tick ஆவது… | கையால் mark செய்ய |
|---|-----|------------------------|-------------------|--------------------|
| 1 | Business details மற்றும் receipt header | Settings | phone, address அல்லது receipt header lines நிரப்பப்பட்டால் | <span class="ui">Done</span> |
| 2 | Tax | Catalog setup → Taxes | active tax rate இருந்தால் | <span class="ui">We do not charge VAT</span> |
| 3 | Payment methods | Settings | payment method மாற்றப்பட்டால் அல்லது add செய்யப்பட்டால் | <span class="ui">These are fine</span> |
| 4 | Products | Products | குறைந்தது ஒரு product இருந்தால் | — |
| 5 | Opening stock | Inventory → Opening stock | stock post செய்யப்பட்டால் | <span class="ui">Skip for now</span> |
| 6 | முதல் till ஐ pair செய்தல் | POS devices | till register செய்யப்பட்டால் | — |
| 7 | Staff ஐ add செய்தல் | Employees | ஒருவருக்கு மேல் active employees இருந்தால் | <span class="ui">I work alone</span> |
| 8 | முதல் sale | till ஐ open செய்யும் | முதல் sale back office ஐ அடைந்தால் | — |

Tips:

- ஒவ்வொரு படியிலும் <span class="ui">Open</span> button உள்ளது, அது சரியான screen க்குக் கொண்டு செல்லும்.
- **Tax** படியில் <span class="ui">Add VAT 18%</span> ஒரே click இல் standard VAT rate மற்றும் *VAT 18%* tax group ஐ உருவாக்கும்.
- தவறுதலாக படியை mark செய்தீர்களா? Undo செய்ய <span class="ui">Not done</span> ஐத் தேர்ந்தெடுங்கள்.
- உங்கள் plan இல் இல்லாத features இன் படிகள் checklist இல் இருக்காது — அதனால் எட்டை விடக் குறைவான படிகள் இருக்கலாம்.
  [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
- Business settings ஐ manage செய்யக்கூடியவர்களுக்கு (owners, administrators) மட்டுமே checklist தெரியும்.

எல்லாம் முடிந்ததும் card **Your business is ready** எனக் காட்டும். அதை அகற்ற <span class="ui">Hide checklist</span> ஐத் தேர்ந்தெடுங்கள்.

### Checklist ஐ மீண்டும் கொண்டுவருதல்

சீக்கிரமாக hide செய்துவிட்டீர்களா? **Settings** க்குச் சென்று **Show the setup checklist on the dashboard again** ஐத் தேர்ந்தெடுங்கள்.

Checklist இன் படிப்படியான version [Quick start](/ta/quick-start/) ஆகும்.
