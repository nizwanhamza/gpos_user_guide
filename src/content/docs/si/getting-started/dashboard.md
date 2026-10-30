---
title: Dashboard එක සහ setup checklist එක
description: Dashboard එකේ පෙන්නන දේ, setup checklist එක වැඩ කරන විදිහ, සහ hide කළාට පස්සේ ආයෙත් ගේන විදිහ.
sidebar:
  order: 2
  label: Dashboard & checklist
---

Sign in වුණාම මුලින්ම පෙනෙන page එක **Dashboard** එකයි.

## පෙනෙන දේ

- **Today** — අද මේ වෙනකම් net sales, sales ගණන, average sale සහ returns, සහ <span class="ui">All reports</span> link එක.
- **Best sellers today** — අද වැඩියෙන්ම විකිණෙන products.
- **Business** — business නම, **Business code** එක, currency, time zone, contact විස්තර සහ join වූ දිනය.
- **Your access** — ඔබට තියෙන roles සහ permissions, සහ ඒවා කුමන branches වලටද කියලා.
- **Plan** — plan එකේ නම, ඔබේ plan එකේ තියෙන හැම feature එකක්ම (✓ සමඟ), සහ limits: active branches,
  registers, employees, products, සහ plan එකේ තියෙනවා නම් warehouses සහ customer profiles. *Plan එක වෙනස්
  කරන්න ඔබේ service provider අමතන්න.* [Plans and features](/si/getting-started/plans/) බලන්න.

පෙනෙන දේ ඔබේ permissions අනුව වෙනස් වෙනවා. උදාහරණයක් ලෙස cashier කෙනෙකුට sales figures පෙනෙන්නේ නැහැ.

වම් පැත්තේ **menu** එකේ ඔබේ business නම පෙන්නනවා (ඔබ upload කළා නම් [logo](/si/business/settings/) එකත් එක්ක). පහළින් ඔබ
භාවිතා කරන GPOS **version** එක පෙන්නනවා, උදා. *Version 2026.10.29-1*. ප්‍රශ්නයක් report කරනකොට මේ number එක ඔබේ service
provider ට කියන්න.

## Lists එක්ක වැඩ කිරීම

Back office එකේ හැම list එකක්ම — sales, shifts, products, customers, stock movements, purchase orders,
suppliers, transfers, employees, POS devices, audit log සහ තවත් — එකම විදිහට වැඩ කරනවා:

- උඩින් **Search** box එකක් (මොනවද search කරන්න පුළුවන් කියලා list එකේම කියනවා, උදා. *Search receipt,
  customer or cashier*);
- branch, status හෝ **From / To** dates වගේ **filters**;
- **column heading** එකක් තේරුවාම ඒ අනුව sort වෙනවා;
- පෙන්නන ගණන count එකේ තියෙනවා, උදා. *25 of 1,240*; ඊළඟ ඒවාට <span class="ui">Load more</span> තෝරන්න.

## Setup checklist එක

අලුත් businesses වලට dashboard එකේ උඩින්ම **Get your business ready** කියන card එකක් පෙනෙනවා. එහි progress
එක — උදා. *3 of 8 done* — සහ මේ පියවර පෙන්නනවා:

| # | පියවර | යන තැන | තනියම tick වෙන්නේ… | අතින් mark කරන්න |
|---|-------|--------|---------------------|------------------|
| 1 | Business details සහ receipt header | Settings | phone, address හෝ receipt header lines පුරවලා තියෙනකොට | <span class="ui">Done</span> |
| 2 | Tax | Catalog setup → Taxes | active tax rate එකක් තියෙනකොට | <span class="ui">We do not charge VAT</span> |
| 3 | Payment methods | Settings | payment method එකක් වෙනස් කළාම හෝ add කළාම | <span class="ui">These are fine</span> |
| 4 | Products | Products | අඩුම තරමේ product එකක් තියෙනකොට | — |
| 5 | Opening stock | Inventory → Opening stock | stock post කරලා තියෙනකොට | <span class="ui">Skip for now</span> |
| 6 | පළමු till එක pair කිරීම | POS devices | till එකක් register කරලා තියෙනකොට | — |
| 7 | Staff add කිරීම | Employees | active employees එක්කෙනෙකුට වඩා ඉන්නකොට | <span class="ui">I work alone</span> |
| 8 | පළමු sale එක | till එක open කරනවා | පළමු sale එක back office එකට ආවාම | — |

Tips:

- හැම පියවරකම <span class="ui">Open</span> button එකක් තියෙනවා, එයින් හරි screen එකට යනවා.
- **Tax** පියවරේදී <span class="ui">Add VAT 18%</span> තේරුවාම standard VAT rate එකයි *VAT 18%* tax group එකයි
  එක click එකකින් හැදෙනවා.
- වැරදිලා පියවරක් mark කළාද? Undo කරන්න <span class="ui">Not done</span> තෝරන්න.
- ඔබේ plan එකේ නැති features වල පියවර checklist එකේ නැහැ — ඒ නිසා පියවර අටට වඩා අඩු වෙන්න පුළුවන්.
  [Plans and features](/si/getting-started/plans/) බලන්න.
- Checklist එක පෙනෙන්නේ business settings manage කරන්න පුළුවන් අයට විතරයි (owners සහ administrators).

හැම දේම ඉවර වුණාම card එකේ **Your business is ready** කියලා පෙන්නනවා. එය අයින් කරන්න
<span class="ui">Hide checklist</span> තෝරන්න.

### Checklist එක ආයෙත් ගේන්න

ඉක්මනට hide කළාද? **Settings** වෙත ගිහින් **Show the setup checklist on the dashboard again** තෝරන්න.

Checklist එකේ පියවරෙන් පියවර version එක [Quick start](/si/quick-start/) එකයි.
