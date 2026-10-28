---
title: Till එකක් setup කරන්න
description: Till එකකට ඕන දේ, සහ computer එකක් හෝ tablet එකක් GPOS till එකක් ලෙස register කරන විදිහ.
sidebar:
  order: 1
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Till** එක කියන්නේ checkout screen එක. ඒක counter computer, laptop හෝ tablet එකක browser එකේ run වෙනවා, **internet
නැතුවත් දිගටම වැඩ කරනවා**.

## ඕන දේ

- **Chrome හෝ Edge** (නිර්දේශිත) තියෙන computer, laptop හෝ tablet එකක් (Windows, Android හෝ iPad).
- **Setup කරන්න internet connection එකක්** — ඊට පස්සේ offline ත් වැඩ කරනවා.
- අනිවාර්ය නැහැ: **barcode scanner** එකක් (USB හෝ Bluetooth, "keyboard" mode එකට set කරපු), device එකේ install කරපු
  **receipt printer** එකක් (58 mm හෝ 80 mm), සහ cash drawer එකක්.
- Back office එකේ **register** එකක් ([Branches](/si/business/branches/) බලන්න).

## Till එක register කරන්න

1. **Back office එකේ** **POS devices** වෙත ගිහින් register එක ළඟ <span class="ui">Set up a till</span> තෝරන්න. ඒ screen එක
   open කරලා තියන්න; එහි විනාඩි 15ක් valid **code** එකක් සහ **QR code** එකක් පෙන්නනවා.
2. **Till device එකේ** Chrome හෝ Edge වලින් **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** open කරන්න. (එකම device
   එකේ back office එකට sign in වෙලාද? Menu එකේ **POS till ↗** තෝරන්න.)
3. Till එකේ **Set up this till** පෙන්නනවා. **Setup code** එක type කරන්න, නැත්නම් device එකේ camera එකෙන් QR code එක scan කරන්න.
4. **Name of this till** එකක් දාන්න, උදා. *Front counter*.
5. <span class="ui">Register this till</span> තෝරන්න.
6. Till එකේ **Downloading the catalog…** පෙන්නනවා — ඉවර වෙනකම් ඉන්න.

ඊට පස්සේ till එකේ **Who is using the till?** පෙන්නනවා — ඒක ready. [Unlocking the till](/si/till/unlock-and-users/) එකෙන් දිගටම යන්න.

## App එකක් ලෙස install කරන්න (නිර්දේශිත)

Chrome හෝ Edge වල address bar එකේ **Install** භාවිතා කරන්න (නැත්නම් browser menu → *Install app*; Android වල *Add to
Home screen*). එතකොට till එක **GPOS** නම සහ icon එක එක්ක app එකක් ලෙස පෙනෙනවා, වෙනම window එකක open වෙනවා, ඉක්මනට
start වෙනවා, browser එක offline data clear කරන්නත් ගොඩක් අඩුයි.

:::caution[Till එකේ data ආරක්ෂිතව තියාගන්න]
යවනකම් till එක waiting sales device එකේ save කරනවා. Till එකක browser data clear කරන්න, private/incognito window එකක්
භාවිතා කරන්න, හෝ browser එක uninstall කරන්න **එපා**. **Sync and this till** panel එකේ storage *may be cleared by the
browser* කියලා තියෙනවා නම්, till එක app එකක් ලෙස install කර නිතර භාවිතා කරන්න.
:::

## "This till needs a secure connection"

Till එක open කරන්න ඕන **https://** address එකකින්. Address bar එකේ හරියටම **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)**
තියෙනවාද බලන්න — `http://` නෙවෙයි. Message එක දිගටම පෙන්නනවා නම් ඔබේ service provider අමතන්න.

## Till එකක් මාරු කිරීම හෝ ගෙනයාම

- **අලුත් device එකක්:** කිසිම දෙයක් waiting නැති වෙනකම් පරණ till එක sync කරන්න, ඒක decommission කරන්න, ඊට පස්සේ එකම
  register එකේ අලුත් එක setup කරන්න — [POS devices](/si/business/pos-devices/) හි *Till එකක් මාරු කිරීම පියවරෙන් පියවර* බලන්න.
- **"This till is not registered":** administrator කෙනෙක් POS devices හි ඒකට <span class="ui">Re-authorise</span> තෝරනවා, ඔබ
  අලුත් code එක till එකේ type කරනවා. Waiting වැඩ එහෙමම තියෙනවා.
