---
title: POS devices
description: Tills registers වලට pair කරන්න, sync status එක බලන්න, re-authorise, decommission හෝ revoke කරන්න, සහ sync issues විසඳන්න.
sidebar:
  order: 5
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Till** එකක් කියන්නේ එක **register** එකකට register කරපු counter computer, laptop හෝ tablet එකක තියෙන browser එකක්.
ඒක offline වැඩ කරනවා, ආයෙත් online වුණාම sales යවනවා. **POS devices** හි branch අනුව ඔබේ registers සහ ඒ හැම එකකම
till එක list කරනවා.

## Till එකක් pair කරන්න

මුලින්ම [register](/si/business/branches/) එකක් ඕන.

1. Register එක ළඟ <span class="ui">Set up a till</span> තෝරන්න.
2. GPOS **code** එකක් සහ **QR code** එකක් පෙන්නනවා — **විනාඩි 15ක්** valid, එක පාරයි භාවිතා කරන්න පුළුවන්.
3. Till device එකේ **Chrome හෝ Edge** වලින් **[app.gpos.lk/pos](https://app.gpos.lk/pos/)** open කරන්න.
4. Code එක type කරන්න, නැත්නම් till එකේ camera එකෙන් QR code එක scan කරන්න.
5. Till එක catalog එක download කරනකම් ඉන්න. ඊට පස්සේ offline වැඩ කරනවා.

Code එක expire වුණාද? <span class="ui">New code</span> තෝරන්න. Till පැත්තේ පියවරෙන් පියවර
[Set up a till](/si/till/set-up-a-till/) හි තියෙනවා.

## ඔබේ tills බලන්න

හැම till එකකටම පෙනෙනවා:

- **Last sync** — අන්තිමට back office එක එක්ක කතා කළේ කවදාද.
- **Waiting** — තවම යවලා නැති sales සහ අනිත් වැඩ. *{n} need attention* කියන්නේ මොකක් හරි fail වුණා කියන එක.
- **Clock off by … min** — till එකේ clock එක වැරදියි. Device එකේ date සහ time හදන්න.
- **Status** — *Active*, *Finishing* (decommission කරමින්), *Revoked* හෝ *Needs re-authorising*.

**දින 90ක් contact එකක් නැති** till එකක *Needs re-authorising* පෙන්නනවා — එහි sign-in එක expire වෙලා. <span class="ui">Re-authorise</span>
තෝරා අලුත් code එක till එකේ type කරන්න; waiting sales එහෙමම තියෙනවා.

## Rename, re-authorise, decommission, revoke

| Action | භාවිතා කරන්නේ කවදාද |
|--------|---------------------|
| <span class="ui">Rename</span> | Till එකට පැහැදිලි නමක් දෙන්න. |
| <span class="ui">Re-authorise</span> | Till එකේ *This till is not registered* හෝ *Needs re-authorising* පෙන්නනකොට. එකම till එකේ type කරන්න අලුත් code එකක් ලැබෙනවා; waiting වැඩ එහෙමම තියෙනවා. |
| <span class="ui">Decommission</span> | ඔබ till එකක් **මාරු කරනකොට**. ඒකට තියෙන waiting දේවල් තවමත් යවන්න පුළුවන්, නමුත් අලුත් sales පටන් ගන්න බැහැ. |
| <span class="ui">Revoke</span> | Till එක **නැති වුණාම හෝ හොරකම් කළාම**. වහාම lock out වෙනවා. තවම waiting තියෙන වැඩ device එකේම තියෙනවා, යවන්න බැහැ. ඊට පස්සේ ඒක භාවිතා කළ cashiers ගේ **POS PINs වෙනස් කරන්න** (Employees → එක් එක් කෙනා → Set POS PIN). |

## Till එකක් මාරු කිරීම පියවරෙන් පියවර

1. **පරණ till එකේ** sync panel එක open කර **කිසිම දෙයක් waiting නැති වෙනකම්** <span class="ui">Sync now</span> තෝරන්න.
   Connect වෙන්න බැරි නම් <span class="ui">Export (JSON)</span> තෝරා file එක ආරක්ෂිතව තියාගන්න
   ([Offline and sync](/si/till/offline-sync/) බලන්න).
2. **මෙතැන**, පරණ till එකේ <span class="ui">Decommission</span> තෝරන්න.
3. **එකම register එකේ** <span class="ui">Set up a till</span> තෝරා අලුත් device එක register කරන්න. ඒකේ receipt numbers
   වලට suffix එකක් එනවා (උදා. `CMB-R01.2-…`).

පරණ device එක **කොහෙත්ම start වෙන්නේ නැත්නම්**, කලින් export කරලා නැත්නම් ඒක තවම යවපු නැති sales නැති වෙනවා; දැනටමත්
sync වූ හැම දෙයක්ම ආරක්ෂිතයි. මොනවද නැති කියලා බලන්න **Sales** හි අන්තිම receipt numbers ඔබේ paper receipts එක්ක සසඳන්න.

## Sync issues

සමහර වෙලාවට till එකක් record කරන දෙයක් back office එකට ඒ විදිහටම accept කරන්න බැහැ — උදා. till එක offline තියෙද්දී
cashier ගේ permission එකක් අයින් වුණා. **කිසිම දෙයක් drop වෙන්නේ නැහැ.** මේ items **Sync issues** යටතේ පෙනෙනවා.

1. තීරණයක් බලාපොරොත්තුවෙන් තියෙන දේ බලන්න <span class="ui">Show open</span> තෝරන්න.
2. **Till එක record කළ දේ** බලන්න <span class="ui">Review</span> තෝරන්න.
3. තෝරන්න:
   - <span class="ui">Accept</span> — till එකේ record කළ විදිහටම apply කරන්න.
   - <span class="ui">Dismiss</span> — apply නොකර record එකේ තියාගන්න.
4. ඔබේ තීරණය පැහැදිලි කරන **Note** එකක් add කරන්න.

Records review එකට බලාගෙන ඉන්නකොට reports ඔබට warn කරනවා.
