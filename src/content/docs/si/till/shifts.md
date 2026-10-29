---
title: Till එකේ cash shifts
description: Opening float එකක් එක්ක shift එකක් open කරන්න, cash in හෝ cash out කරන්න, X report එක print කරන්න සහ count එකක් එක්ක shift එක close කරන්න.
sidebar:
  order: 9
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
Cash shifts **Selling at the counter (POS)** එකේ කොටසක්. **Cash in / cash out** වෙනම plan feature එකක්: ඒක නැත්නම් shift window
එකේ ඒ buttons පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Shift** එකක් කියන්නේ එක till එකක විකුණන එක කාල පරිච්ඡේදයක් — සාමාන්‍යයෙන් cashier කෙනෙකුගේ දවසක් හෝ භාගයක්. Shift එක
close කරනකම් හැම sale එකක්ම සහ cash movement එකක්ම ඒකට අයිතියි. Manage කරන්න **F10** ඔබන්න හෝ උඩ තියෙන shift නම තෝරන්න.

හැම shift එකකටම නම දෙන්නේ **open කළේ කවුද සහ කවදාද** අනුව, උදා. `Shift-Chamari-20261027-8.00am`. Till එකේ, back office එකේ සහ
reports වල එකම නම භාවිතා වෙනවා.

## Shift එකක් open කරන්න

Shift එකක් open නැත්නම් till එකේ කහ පාට banner එකක් **No shift open: sales are off** පෙන්නනවා. Shift එකක් open කරනකම්
till එකෙන් **prices check කරන්න විතරයි** පුළුවන්: item එකක් scan කරලා හෝ නම type කරලා price එක බලන්න (search box එකේ
*Price check: …* කියනවා), නමුත් කිසිම දෙයක් විකුණන්න බැහැ. Shift එකක් open කරන්න permission නැති cashier කෙනෙකුට
*Ask a cashier or manager to open a shift* පෙනෙනවා.

1. Banner එකේ <span class="ui">Open a shift</span> තෝරන්න.
2. Drawer එකේ තියෙන cash — **opening float** එක — ගණන් කරන්න. එක්කෝ:
   - <span class="ui">Count notes and coins</span> — හැම note එකක්ම සහ coin එකක්ම කීයද කියලා දාන්න, till එක එකතු කරනවා; නැත්නම්
   - <span class="ui">Enter the total</span> — මුළු ගණන type කරන්න.
3. <span class="ui">Open shift with {amount}</span> තෝරන්න.

## Cash in සහ cash out

**Sales හැර** drawer එකට දාන හෝ ගන්න cash record කරන්න ඕන, නැත්නම් count එක ගැලපෙන්නේ නැහැ.

1. Shift එකේ <span class="ui">Cash in</span> හෝ <span class="ui">Cash out</span> තෝරන්න.
2. **Amount** එක දාලා **Reason** එක තෝරන්න (උදා. *Paid out* හෝ *To the safe*).
3. ඕන නම් **Note** එකක් add කරන්න.
4. <span class="ui">Put in {amount}</span> / <span class="ui">Take out {amount}</span> තෝරන්න.

Business limit එකට වඩා වැඩි cash outs වලට manager ගේ approval ඕන — [Discounts](/si/till/discounts/) බලන්න. Default විදිහට **හැම**
cash out එකකටම ඕන.

## X report (shift එක අතරතුර)

මේ වෙනකම් shift එකේ snapshot එකක් බලන්න <span class="ui">X report</span> තෝරන්න (receipt printer එකේ හෝ **A4** වල print කරන්න
පුළුවන්): sales, tax, cash sales, cash in සහ out, refunds සහ **expected cash**. Print කරන්න <span class="ui">Print</span> තෝරන්න.
Shift එක open විදිහටම තියෙනවා.

## Shift එක close කරන්න

1. <span class="ui">Close shift</span> තෝරන්න.
2. Drawer එකේ තියෙන **හැම** cash එකක්ම ගණන් කරන්න (notes සහ coins, හෝ මුළු ගණන).
3. <span class="ui">Close with {amount} counted</span> තෝරන්න.

Till එක expected cash, ඔබ ගණන් කරපු ගණන සහ **Difference** එක එක්ක **Z report** එක print කරනවා හෝ පෙන්නනවා. **Blind close** on
නම්, expected amount එක පෙනෙන්නේ close කළාට පස්සේ විතරයි.

- Sales තවම sync වෙන්න බලාගෙනද? *You can close now; they are sent first.*
- Shift එක close කරනකොට **held sales discard වෙනවා** — මුලින් ඒවා ඉවර කරන්න.

හැම sale එකක්ම සහ cash movement එකක්ම ආවාට පස්සේ back office එක shift එක **reconcile** කරනවා. [Cash shifts](/si/sales/cash-shifts/) බලන්න.

## කලින් shifts

**Earlier shifts on this till** සහ ගණන් කරපු දේ බලන්න <span class="ui">Shifts</span> තෝරන්න.

## "Shift … was closed by a manager"

Manager කෙනෙකුට back office එකෙන් shift එකක් close කරන්න පුළුවන් (උදා. till එක කැඩුණොත්). එතකොට අලුත් shift එකක් open කරන්න කියලා till එක අහනවා.
