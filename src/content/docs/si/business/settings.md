---
title: Business settings
description: Business profile, address, regional settings, prices සහ tax, checkout සහ cash rules, discount limits, return window සහ receipts.
sidebar:
  order: 1
---

**Settings** හි මුළු business එකටම අදාළ විස්තර සහ rules තියෙනවා. ඒවා වෙනස් කරන්න *Manage business settings*
permission එක ඕන (owners සහ administrators); access තියෙන අනිත් අයට බලන්න විතරක් පුළුවන්.

ඕන දේ වෙනස් කර පහළින් <span class="ui">Save settings</span> තෝරන්න.

:::note[වෙන කෙනෙක් කලින් save කළාද?]
ඔබ edit කරන අතරතුර වෙන කෙනෙක් settings වෙනස් කළොත්, GPOS ඔවුන්ගේ වැඩේ overwrite කරන්නේ නැහැ.
<span class="ui">Reload latest</span> තෝරා, ඔබේ වෙනස ආයෙත් කර save කරන්න.
:::

## Logo

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේක **Own logo** plan feature එකයි. ඒක නැත්නම් **Logo** card එක නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

Settings එකේ උඩම තියෙන **Logo** card එකේ ඔබේ logo එක එක පාරක් upload කරන්න. ඊට පස්සේ ඒක පෙනෙනවා:

- **back office** එකේ — menu එකේ උඩ, ඔබේ business නමට උඩින්;
- **tills** වල — header එකේ, සහ **Who is using the till?** සහ lock screens වල ලොකුවට. Tills ඒක තියාගන්න නිසා **offline**
  වුණත් පෙනෙනවා;
- **A4 prints** වල — till invoices සහ shift reports, සහ back office එකෙන් print කරන purchase orders සහ reports වල,
  letterhead එකක් විදිහට;
- **receipts** වල — **Print the logo on receipts** on කළොත් විතරයි (පහළ **Receipts** බලන්න).

1. <span class="ui">Upload logo</span> තෝරලා **5 MB** දක්වා **PNG, JPEG හෝ WebP** file එකක් තෝරන්න. **පළල** logo එකක්
   හොඳටම ගැළපෙනවා; square එකකුත් කමක් නැහැ. (SVG ගන්නේ නැහැ.)
2. Previews තුන බලන්න: **In the admin and on A4**, **On the till** (අඳුරු header එක) සහ **On a receipt (black and white)**.

වෙනස් කරන්න <span class="ui">Replace logo</span> තෝරන්න. <span class="ui">Remove logo</span> කළාම ආයෙත් business නම
විතරක් පෙන්නනවා. Tills ඊළඟ sync එකේදී වෙනස ගන්නවා.

:::tip[Receipt preview එක බලන්න]
Receipt printers print කරන්නේ කළු පාට විතරයි. GPOS receipts වලට ඔබේ logo එකේ පැහැදිලි කළු-සුදු copy එකක් හදනවා —
receipt printing on කරන්න කලින් **On a receipt** preview එක බලන්න. ලා පාට හෝ ගොඩක් details තියෙන logo එකක් හොඳට print
නොවෙන්න පුළුවන්.
:::

## Business profile

| Field | මොකටද |
|-------|-------|
| **Business name** | App එකේ සහ default විදිහට receipts වල පෙන්නනවා. |
| **Legal name** | Register කළ company නම (අනිවාර්ය නැහැ). |
| **Business registration no.** | ඔබේ BR number එක (අනිවාර්ය නැහැ). |
| **Tax registration no.** | ඔබේ VAT/TIN number එක. Receipts වල print කරන්න පුළුවන්. |
| **Phone** | ඔබේ රටට check කර international format එකෙන් save කරනවා. |
| **Contact email** | Customers ට හෝ service provider ට ඔබව contact කරන්න පුළුවන් email එක. |

## Address

**Address line 1**, **Address line 2**, **City**, **District** සහ **Postal code**.

## Regional settings

- **Currency** — හැම price එකක්ම සහ report එකක්ම භාවිතා කරන currency එක (උදා. `LKR`).
- **Time zone** — reports සහ daily summary එකේ business day එක පටන් ගන්නේ සහ ඉවර වෙන්නේ කවදාද කියලා තීරණය
  කරනවා (උදා. `Asia/Colombo`). ඕන නම් හැම branch එකකටම වෙනම time zone එකක් දෙන්න පුළුවන්.
- **Default language** — තමන්ගේම භාෂාවක් තෝරලා නැති employees ට භාවිතා වෙන භාෂාව.

## Products and prices

- **Prices include tax** *(default on)* — shelf එකේ selling price එකේ tax දැනටමත් ඇතුළත්; GPOS ඒකෙන් tax එක
  ගණනය කරනවා. Checkout එකේදී tax එක **උඩින් එකතු කරන්න** ඕන නම් untick කරන්න.
- **Use Sinhala/Tamil product names** — till එකට සහ receipts වලට products වල සිංහල සහ දෙමළ නම් add කරන්න ඉඩ
  දෙනවා. [Languages](/si/getting-started/languages/) බලන්න.

## Checkout and cash

මේ rules හැම till එකකටම අදාළයි. මුලින් ඒවා strict — හැම cashier discount එකකටම සහ හැම cash out එකකටම manager
approve කරන්න ඕන — ඒ නිසා shop එක open කරන්න කලින් බලන්න:

| Setting | මුලින් තියෙන්නේ |
|---------|----------------|
| Blind close | Off |
| Cash out without a manager up to | `0` (හැම cash out එකකටම manager ඕන) |
| Discount limit with sales.discount | `100` % |
| Discount limit for everyone else | `0` % (හැම cashier discount එකකටම manager ඕන) |
| Return window | දින `30` |

### Blind close

Tick කළාම, till එක බලාපොරොත්තු වුණු cash ප්‍රමාණය පෙන්නන්න **කලින්** cashiers drawer එක ගණන් කරනවා. එතකොට
අවංක count එකක් ලැබෙනවා. බලාපොරොත්තු වූ ප්‍රමාණය සහ වෙනස close කළාට පස්සේ පෙන්නනවා.

### Cash out without a manager up to

Cashier කෙනෙකුට තනියම කරන්න පුළුවන් ලොකුම **cash out** එක (drawer එකෙන් ගන්න cash, උදා. supplier කෙනෙකුට
ගෙවන්න). ඊට වඩා වැඩි ප්‍රමාණ වලට till එකේ **manager ගේ PIN** එක ඕන.

- `0` කියන්නේ **හැම** cash out එකකටම manager ඕන කියන එක.
- Managers ට (*View and reconcile all cash shifts* තියෙන අයට) limit එකක් නැහැ.

### Discount limits

Till එකේ discounts පාලනය කරන්නේ percentages දෙකකින්:

| Setting | අදාළ වෙන්නේ | තේරුම |
|---------|-------------|-------|
| **Discount limit with sales.discount (%)** | Manual discounts දෙන්න අවසර තියෙන අයට — default විදිහට owners, administrators සහ managers | **ඕනෑම කෙනෙකුට** දෙන්න හෝ approve කරන්න පුළුවන් උපරිමය. කවදාවත් ඉක්මවන්නේ නැහැ. |
| **Discount limit for everyone else (%)** | Cashiers | Cashier කෙනෙකුට line එකකට හෝ මුළු sale එකටම **තනියම** දෙන්න පුළුවන් ප්‍රමාණය. ඊට වැඩි නම් manager till එකේ PIN එකෙන් approve කරනවා. `0` = හැම discount එකකටම approval ඕන. |

දෙකම 0 සිට 100 දක්වා percentages (දශම 2ක් දක්වා). අනිත් අයගේ limit එක පළමු එකට වඩා වැඩි වෙන්න බැහැ.

උදාහරණය: limits **20%** සහ **5%** නම්, cashier කෙනෙකුට 5% තනියම, manager ගේ approval එකෙන් 20% දක්වා දෙන්න
පුළුවන්, කවදාවත් 20%ට වඩා නැහැ.

Customer discounts (customer ගේ profile එකේ set කරපු) automatic apply වෙනවා, approval ඕන නැහැ.
[Customers](/si/sales/customers/) බලන්න.

### Return window (days)

Sale එකකට පස්සේ දින කීයක් ඇතුළත **till එකේ return කරන්න** පුළුවන්ද. `0` = limit නැහැ. Role එකෙන් ඉඩ නැත්නම්
returns සහ voids වලට cashiers ට manager ගේ PIN එක ඕන. [Returns and voids](/si/till/returns-voids/) බලන්න.

## Receipts

| Field | මොකටද |
|-------|-------|
| **Name printed on receipts** | Default විදිහට business නම. Trading name එකක් තියෙනවා නම් මෙතැන දාන්න. |
| **Invoice title** | උඩින් print වෙන title එකක්, උදා. *TAX INVOICE*. වචන accountant එක්ක check කරගන්න. |
| **Header lines** | නම යටින් **lines 4ක්** දක්වා — address, hotline, website. |
| **Footer text** | පහළින් print වෙනවා — return policy, ස්තූති පණිවිඩයක්. |
| **Print tax registration number** | හැම receipt එකකටම ඔබේ tax registration no. එක එකතු කරනවා. |
| **Print the logo on receipts** | හැම receipt එකකම උඩින් ඔබේ logo එක කළු-සුදු විදිහට print කරනවා. මුලින් **off**. ඔබේ plan එකේ **Own logo** තියෙනවා නම් විතරයි පෙනෙන්නේ. |

Receipts print වෙන්නේ till එකෙන්; [Till settings](/si/till/shortcuts-and-settings/) බලන්න.

## Two-step sign-in

Back office එකට sign in වෙනකොට හැම employee කෙනෙක්ම authenticator app code එකක් භාවිතා කරන්න ඕන නම්
**Require two-step sign-in for all other users of the business** tick කරන්න. Setup කරලා නැති අයට ඊළඟ sign in
එකේදී, අනිත් හැම දේටම කලින් එය කරන්න කියලා අහනවා. Till එකට බලපාන්නේ නැහැ — cashiers දිගටම PIN එක භාවිතා කරනවා.

- මේ setting එක වෙනස් කරන්න පුළුවන් **business owner ට විතරයි** (අනිත් අයට *Only the business owner can change
  this* පෙනෙනවා).
- ඒ යටින්, two-step sign-in **owner ලෙස ඔබට අනිවාර්යද** (ඔබේ service provider තීරණය කරන) නැත්නම් optional ද කියලා
  Settings පෙන්නනවා.

[Two-step sign-in](/si/getting-started/two-step-sign-in/) බලන්න.

## Payment methods, cash reasons සහ stock reasons

Settings page එකේ පහළින් මේවාත් manage කරන්න පුළුවන්:

- [Payment methods](/si/business/payment-methods/)
- [Cash in/out reasons](/si/business/cash-reasons/)
- [Stock adjustment reasons](/si/inventory/adjustments/)

## Setup checklist එක ආයෙත් පෙන්නන්න

Setup checklist එක hide කළා නම්, Settings එකේ උඩ තියෙන link එකකින් එය ආයෙත් dashboard එකට ගේන්න පුළුවන්.
