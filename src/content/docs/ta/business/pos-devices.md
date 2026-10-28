---
title: POS devices
description: Tills ஐ registers க்கு pair செய்யுங்கள், sync status ஐப் பாருங்கள், re-authorise, decommission அல்லது revoke செய்யுங்கள், sync issues ஐத் தீர்க்கவும்.
sidebar:
  order: 5
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Selling at the counter (POS), cash shifts and tills** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால்
menu இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Till** என்பது ஒரு **register** க்கு register செய்யப்பட்ட counter computer, laptop அல்லது tablet இல் உள்ள browser.
அது offline ஆக வேலை செய்யும், மீண்டும் online ஆனதும் sales ஐ அனுப்பும். **POS devices** branch வாரியாக உங்கள் registers
மற்றும் ஒவ்வொன்றின் till ஐயும் பட்டியலிடும்.

## Till ஐ pair செய்யுங்கள்

முதலில் ஒரு [register](/ta/business/branches/) தேவை.

1. Register க்கு அருகில் <span class="ui">Set up a till</span> ஐத் தேர்ந்தெடுங்கள்.
2. GPOS **code** மற்றும் **QR code** ஐக் காட்டும் — **15 நிமிடங்கள்** valid, ஒரு முறை மட்டுமே பயன்படுத்தலாம்.
3. Till device இல் **Chrome அல்லது Edge** இல் **[app.gpos.lk/pos](https://app.gpos.lk/pos/)** ஐ open செய்யுங்கள்.
4. Code ஐ type செய்யுங்கள், அல்லது till இன் camera மூலம் QR code ஐ scan செய்யுங்கள்.
5. Till catalog ஐ download செய்யும் வரை காத்திருங்கள். பிறகு offline ஆக வேலை செய்யும்.

Code expire ஆகிவிட்டதா? <span class="ui">New code</span> ஐத் தேர்ந்தெடுங்கள். Till பக்கப் படிகள் [Set up a till](/ta/till/set-up-a-till/) இல் உள்ளன.

## உங்கள் tills ஐக் கண்காணியுங்கள்

ஒவ்வொரு till க்கும் தெரிவது:

- **Last sync** — கடைசியாக back office உடன் எப்போது தொடர்பு கொண்டது.
- **Waiting** — இன்னும் அனுப்பாத sales மற்றும் பிற வேலைகள். *{n} need attention* என்றால் ஏதோ fail ஆனது.
- **Clock off by … min** — till இன் clock தவறு. Device இல் date மற்றும் time ஐச் சரிசெய்யுங்கள்.
- **Status** — *Active*, *Finishing* (decommission ஆகிறது), *Revoked* அல்லது *Needs re-authorising*.

**90 நாட்களாகத் தொடர்பு இல்லாத** till இல் *Needs re-authorising* தெரியும் — அதன் sign-in expire ஆகிவிட்டது. <span class="ui">Re-authorise</span>
ஐத் தேர்ந்தெடுத்து புதிய code ஐ till இல் type செய்யுங்கள்; waiting sales அப்படியே இருக்கும்.

## Rename, re-authorise, decommission, revoke

| Action | எப்போது பயன்படுத்துவது |
|--------|--------------------------|
| <span class="ui">Rename</span> | Till க்குத் தெளிவான பெயர் கொடுக்க. |
| <span class="ui">Re-authorise</span> | Till இல் *This till is not registered* அல்லது *Needs re-authorising* தெரியும்போது. அதே till இல் type செய்ய புதிய code கிடைக்கும்; waiting வேலைகள் அப்படியே இருக்கும். |
| <span class="ui">Decommission</span> | Till ஐ **மாற்றும்போது**. Waiting உள்ளவற்றை இன்னும் அனுப்பலாம், ஆனால் புதிய sales ஐத் தொடங்க முடியாது. |
| <span class="ui">Revoke</span> | Till **தொலைந்தால் அல்லது திருடப்பட்டால்**. உடனே lock out ஆகும். இன்னும் waiting உள்ள வேலைகள் device இலேயே இருக்கும், அனுப்ப முடியாது. பிறகு அதைப் பயன்படுத்திய cashiers இன் **POS PINs ஐ மாற்றுங்கள்** (Employees → ஒவ்வொருவரும் → Set POS PIN). |

## Till ஐ மாற்றுதல் படிப்படியாக

1. **பழைய till இல்** sync panel ஐ open செய்து **எதுவும் waiting இல்லாத வரை** <span class="ui">Sync now</span> ஐத் தேர்ந்தெடுங்கள்.
   Connect ஆக முடியாவிட்டால் <span class="ui">Export (JSON)</span> ஐத் தேர்ந்தெடுத்து file ஐப் பாதுகாப்பாக வையுங்கள்
   ([Offline and sync](/ta/till/offline-sync/) ஐப் பாருங்கள்).
2. **இங்கே**, பழைய till இல் <span class="ui">Decommission</span> ஐத் தேர்ந்தெடுங்கள்.
3. **அதே register இல்** <span class="ui">Set up a till</span> ஐத் தேர்ந்தெடுத்து புதிய device ஐ register செய்யுங்கள். அதன்
   receipt numbers க்கு suffix வரும் (உதா. `CMB-R01.2-…`).

பழைய device **start ஆகவே இல்லையெனில்**, முன்பே export செய்யாவிட்டால் அது இன்னும் அனுப்பாத sales இழக்கப்படும்; ஏற்கனவே
sync ஆனவை அனைத்தும் பாதுகாப்பானவை. எது காணவில்லை என்று பார்க்க **Sales** இல் உள்ள கடைசி receipt numbers ஐ உங்கள்
paper receipts உடன் ஒப்பிடுங்கள்.

## Sync issues

சில நேரங்களில் till record செய்வதை back office அப்படியே ஏற்க முடியாது — உதா. till offline ஆக இருந்தபோது cashier இன்
permission நீக்கப்பட்டது. **எதுவும் drop ஆகாது.** இவை **Sync issues** இன் கீழ் தெரியும்.

1. முடிவுக்காகக் காத்திருப்பதைப் பார்க்க <span class="ui">Show open</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Till என்ன record செய்தது** என்று பார்க்க <span class="ui">Review</span> ஐத் தேர்ந்தெடுங்கள்.
3. தேர்ந்தெடுங்கள்:
   - <span class="ui">Accept</span> — till இல் record ஆனபடியே apply செய்யும்.
   - <span class="ui">Dismiss</span> — apply செய்யாமல் record இல் வைத்திருக்கும்.
4. உங்கள் முடிவை விளக்கும் **Note** ஐ add செய்யுங்கள்.

Records review க்காகக் காத்திருக்கும்போது reports உங்களை எச்சரிக்கும்.
