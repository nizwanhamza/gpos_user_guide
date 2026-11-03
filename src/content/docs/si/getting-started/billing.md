---
title: Billing සහ subscription
description: ඔබේ අවුරුදු subscription එක — plan එක, දින, invoices සහ ගෙවන හැටි, plan එක වෙනස් කිරීම, promotion codes, cancel කිරීම, සහ ගෙවීම පරක්කු වුණොත් වෙන දේ.
sidebar:
  order: 6.5
  badge:
    text: අලුත්
    variant: tip
---

GPOS කියන්නේ **අවුරුදු subscription** එකක්. Back office එකේ **Billing** page එකේ ඔබේ plan එක, ගෙවලා තියෙන දින, ගෙවන්න
තියෙන ගණන, ඔබේ invoices සහ ගෙවන හැටි පෙන්නනවා.

ඔබට **කෙලින්ම GPOS එක්ක**, නැත්නම් **GPOS partner කෙනෙක් හරහා** subscribe කරන්න පුළුවන් — partner කෙනෙක් කියන්නේ
තමන්ගේම customers ට GPOS විකුණලා ඔවුන්ගේ billing බලාගන්න company එකක්. කොයි විදිහට වුණත් back office එකයි tills ඔක්කොමයි
එක වගේම වැඩ කරනවා; වෙනස bill කරන්නේ කවුද කියන එක විතරයි (පහළ **Partner කෙනෙක් හරහා subscribe කළාද?** බලන්න).

## කාටද බලන්න පුළුවන්

| Permission | Default විදිහට | ඉඩ දෙන දේ |
|------------|----------------|-----------|
| **See the plan, subscription dates and billing** | Owner, Administrator | Menu එකේ **Billing** open කරන්න. |
| **Change the plan, cancel the subscription and use promotion codes** | Owner, Administrator | Billing හි plan, promotion සහ cancel buttons. |

## ඔබේ subscription එක

**Billing** වෙත යන්න. **Subscription** card එකේ පෙන්නනවා:

- ඔබේ **Plan** එක;
- **Paid period**, **Valid until** (හෝ **Free trial until**) සහ **Days left** — නැත්නම් *… days overdue*;
- **Yearly price** — නැත්නම් GPOS එක්ක arrange කරපු accounts වලට *Complimentary*;
- **Billed by** — GPOS හෝ ඔබේ partner;
- status එක:

| Status | තේරුම |
|--------|-------|
| **Free trial** | Trial එක ඉවර වෙනකම් මුළු plan එකම නොමිලේ භාවිතා කරනවා. |
| **Active** | ගෙවලා. අවුරුද්ද ඉවර වෙන්න **දින 30, 7 සහ 1** කලින් e-mail එකෙන් මතක් කරනවා. |
| **Payment due** | ගෙවපු අවුරුද්ද ඉවරයි. දැනට ඔක්කොම වැඩ කරනවා — කරුණාකර renew කරන්න. |
| **Payment overdue: read-only** | තවම ගෙවලා නැහැ: back office එකේ වෙනස්කම් නවත්තලා (පහළ **ගෙවීම පරක්කු වුණොත්** බලන්න). |
| **Suspended** | නොගෙවීම නිසා account එක suspend කරලා. ගෙවන්න GPOS අමතන්න. |
| **Cancelled** | ඔබ cancel කළා. අවුරුද්දේ අන්තිම දවස වෙනකම් ඔක්කොම වැඩ කරනවා, ඊට පස්සේ ඉවර වෙනවා. |
| **Ended** | Subscription එක ඉවරයි. ආයෙත් පටන් ගන්න GPOS අමතන්න. |

ඊට පහළින් ඔබේ plan එකේ features සහ හැම limit එකකින්ම කොච්චර භාවිතා කරනවද කියලත් පෙන්නනවා — [dashboard](/si/getting-started/dashboard/)
එකේ **Plan** card එක වගේම.

:::note[End date එකක් නැද්ද?]
සමහර accounts වලට — උදා. billing පටන් ගන්න කලින් එකතු වුණු businesses — **No end date** සහ *Complimentary*. ඒවායේ plan
එක GPOS එක්ක arrange කරලා: වෙනස් කරන්න GPOS අමතන්න.
:::

## Invoices සහ ගෙවීම

ඔබේ අවුරුද්ද (හෝ free trial එක) ඉවර වෙන්න **දින 7කට විතර කලින්**, GPOS **ඊළඟ අවුරුද්දේ invoice එක** නිකුත් කරනවා, අන්තිම
දවසට ගෙවන්න ඕන. ඒක e-mail එකෙන් ලැබෙනවා.

- ගෙවන්න දෙයක් තියෙනකොට Billing හි **To pay: …** සහ **bank details** පෙන්නනවා. ගෙවනකොට **invoice number එක සඳහන් කරන්න**
  (උදා. `INV-2026-000123`).
- **Invoices** හි හැම invoice එකක්ම **Issued**, **Due**, **Total** සහ **Left to pay** එක්ක list කරනවා. Print කරන්න හෝ PDF
  එකක් විදිහට save කරන්න <span class="ui">Print / PDF</span> තෝරන්න.
- GPOS ඔබේ ගෙවීම record කළාම confirmation e-mail එකක් එනවා, invoice එකේ **Paid** පෙන්නනවා. ඊළඟ අවුරුද්දේ invoice එක
  සම්පූර්ණයෙන් ගෙව්වාම, ඔබේ subscription එක අලුත් අවුරුද්දට යනවා.

Invoice එකක නිවැරදි කිරීමක් කරන්නේ **credit note** එකකින්, ඒක invoice එකේ පෙන්නනවා.

## Plan එක වෙනස් කරන්න

**Plans** යටතේ plans සහ ඒවායේ අවුරුදු prices සසඳලා <span class="ui">Choose this plan</span> තෝරන්න:

| කවදාද | වෙන දේ |
|-------|--------|
| **Free trial එක අතරතුර** | අලුත් plan එක වහාම පටන් ගන්නවා; ඔබේ trial එක දිගටම යනවා. |
| **Upgrade** (මිල වැඩි plan එකක්) | ඔබේ අවුරුද්දේ **ඉතුරු දින** වලට invoice එකක් එනවා. ඒ invoice එක ගෙව්ව ගමන් අලුත් plan එක පටන් ගන්නවා. |
| **Downgrade** (මිල අඩු plan එකක්) | අලුත් plan එක පටන් ගන්නේ ඔබේ **ඊළඟ අවුරුද්ද** පටන් ගන්නකොට; ඒ වෙනකම් කිසිම දෙයක් වෙනස් වෙන්නේ නැහැ. අදහස වෙනස් වුණාද? Renewal invoice එක නිකුත් කරන්න කලින් <span class="ui">Keep my current plan</span> තෝරන්න. |

අලුත් plan එක ඉඩ දෙන ප්‍රමාණයට වඩා දැනටමත් තියෙනවා නම් (උදා. branches වැඩියි), GPOS මුලින්ම warn කරනවා. **කිසිම දෙයක් අයින්
කරන්නේ නැහැ** — තියෙන දේ තියාගන්න පුළුවන්, නමුත් තවත් add කරන්න බැහැ. අවුරුද්ද මැද downgrade කළාට refund එකක් නැහැ.

අලුත් plan එක ක්‍රියාත්මක වුණාම, ඊළඟ පාර back office එක open හෝ reload කරනකොට ඒකේ features පෙනෙනවා.
[Plans and features](/si/getting-started/plans/) බලන්න.

## Promotion codes

**Promotion code** එකක් තියෙනවද? **Promotions and cancellation** යටතේ ඒක **Promotion code** එකට දාලා
<span class="ui">Apply</span> තෝරන්න. එතකොට page එකේ promotion එක පෙන්නනවා — උදා. ඊළඟ renewal එකට, renewals කිහිපයකට හෝ හැම
renewal එකකටම discount එකක්, නැත්නම් අමතර නොමිලේ මාස. එක වරකට එක promotion එකක් විතරයි. [GPOS සඳහා apply කරනකොටත්](/si/getting-started/apply/)
code එකක් දාන්න පුළුවන්.

## Subscription එක cancel කරන්න

1. **Promotions and cancellation** යටතේ <span class="ui">Cancel subscription</span> තෝරන්න.
2. **Why are you leaving?** කියන්න (අපිට දියුණු වෙන්න උදව් වෙනවා).
3. <span class="ui">Cancel at the end of the year</span> තෝරන්න.

ඔබේ අවුරුද්දේ අන්තිම දවස වෙනකම් ඔක්කොම වැඩ කරනවා; ඊට පස්සේ subscription එක ඉවර වෙනවා. ඒ වෙනකම්
<span class="ui">Take back the cancellation</span> තෝරන්න පුළුවන්. ඉවර වෙන්න කලින් තියාගන්න ඕන දේවල් export කරන්න (උදා.
[products](/si/catalog/import-export/) සහ [reports](/si/reports/reports/)).

## මතක් කිරීම් සහ banners

- Owner ට **e-mails**: trial එක ඉවර වෙනවා (දින 7 සහ 1 කලින්), renewal due (දින 30, 7 සහ 1 කලින්), invoice නිකුත් කළා, ගෙවීම
  ලැබුණා, අවුරුද්ද නොගෙවා ඉවර වුණා, plan වෙනස්කම් සහ price වෙනස්කම්.
- Trial එක හෝ ගෙවපු අවුරුද්ද දින 30ක් ඇතුළත ඉවර වෙනකොට, ගෙවීමක් due වෙලා තියෙනකොට, හෝ subscription එක cancel කරලා තියෙනකොට
  **back office එකේ උඩින් banner එකක්** (Billing බලන්න පුළුවන් අයට). <span class="ui">Open Billing</span> තෝරන්න.

## ගෙවීම පරක්කු වුණොත්

Billing නිසා shop එකට customers ට සේවය කරන එක කවදාවත් නවත්වන්නේ නැහැ. ගෙවීමක් නැතුව අවුරුද්ද ඉවර වුණොත්, ඔබේ service
provider ගේ settings අනුව:

1. **Payment due** — මතක් කිරීම් එක්ක දින කිහිපයක් (default 7) ඔක්කොම වැඩ කරනවා.
2. **Payment overdue: read-only** — back office එක **read-only** වෙනවා: ඔක්කොම බලන්න, reports run කරන්න සහ export කරන්න,
   **Billing** සහ **My account** භාවිතා කරන්න පුළුවන්, නමුත් වෙනස්කම් *The subscription is unpaid: changes are paused until
   it is renewed* කියලා refuse කරනවා. **Tills දිගටම විකුණනවා සහ sync වෙනවා.**
3. **Suspended** — තව දින කිහිපයකට (default 7) පස්සේ account එක suspend වෙනවා: කාටවත් sign in වෙන්න බැහැ, tills sync වෙන්නේ
   නැහැ (offline කරපු sales තියාගෙන, account එක ආයෙත් active වුණාම යවනවා).

**ඔබේ ගෙවීම record කරපු ගමන් ඔක්කොම ආයෙත් වැඩ කරනවා.** ගෙවීම due වෙලා හෝ back office එක read-only වෙලා තියෙනකොට, tills වල
cashier ට කියන්න line එකක් පෙන්නනවා, උදා. *The business's subscription is waiting for payment. Please tell the owner.
Selling continues as usual.*

## Partner කෙනෙක් හරහා subscribe කළාද?

GPOS partner කෙනෙක් හරහා subscribe කළා නම්, Billing හි *Your plan and payments are handled by your partner …* කියලා partner ගේ
phone සහ e-mail එක්ක පෙන්නනවා.

- Partner ඔබට bill කරන්නේ **තමන්ගේම විදිහට** — GPOS ඔබට invoices යවන්නේ නැහැ.
- **Plan එක වෙනස් කරන්න හෝ renew කරන්න** ඔබේ partner අමතන්න; plans සහ promotion codes පෙන්නන්නේ නැහැ. අවුරුද්ද අවසානයේ
  cancel කරන්න තවමත් පුළුවන් — partner ටත් කියන්න.
- ඔබේ partner ට පෙනෙන්නේ ඔබේ **plan එක සහ subscription දින විතරයි** — ඔබේ sales, products, customers හෝ වෙනත් business data
  කවදාවත් නැහැ.

Partner දෙන registration link එකෙන් partner හරහා sign up වෙන්න පුළුවන් — [GPOS සඳහා apply කරන්න](/si/getting-started/apply/) බලන්න.
