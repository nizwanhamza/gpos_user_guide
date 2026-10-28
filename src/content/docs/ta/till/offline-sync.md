---
title: Offline மற்றும் sync
description: Internet இல்லாமல் till தொடர்ந்து விற்பது எப்படி, sync status ஐப் படிப்பது எப்படி, ஏதாவது கவனம் தேவைப்படும்போது என்ன செய்வது.
sidebar:
  order: 10
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Selling at the counter (POS), cash shifts and tills** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu
இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

Till உங்கள் products, prices, staff PINs, customers, settings இன் copy ஐ **device இலேயே** வைத்திருக்கும். Internet இல்லாதபோது அது
தொடர்ந்து விற்று sales ஐ save செய்யும். Connection திரும்பியதும் தானாக அனுப்பும். Till இன் browser data delete ஆகாத வரை **எதுவும் இழக்கப்படாது**.

## Status bar

| காட்டுவது | அர்த்தம் |
|-----------|-----------|
| **Online · All synced** | எல்லாம் back office ஐ அடைந்துவிட்டது. |
| **Syncing…** | இப்போது அனுப்புகிறது. |
| **Offline · {n} waiting** | Internet இல்லை. {n} sales அல்லது operations till இல் save ஆகியுள்ளன. தொடர்ந்து விற்கவும். |
| **Sync error · {n} need attention** | ஏதோ அனுப்ப முடியவில்லை — கீழே பாருங்கள். |
| **Last sync …** | Till கடைசியாக back office உடன் எப்போது தொடர்பு கொண்டது. |

## Offline இல் வேலை செய்பவை / internet தேவையானவை

| Offline இல் வேலை செய்யும் | Internet தேவை |
|----------------------------|----------------|
| Selling, payments, discounts, approvals | Till ஐ setup அல்லது re-authorise செய்தல் |
| Shifts ஐ open மற்றும் close செய்தல், cash in/out | **வேறு till இல்** செய்த sale ஐக் கண்டுபிடித்தல் |
| **இந்த** till இன் sales இன் returns | புதிய prices, products, PINs பெறுதல் (அடுத்த sync இல்) |
| Customers ஐ add செய்தல் | |

## Sync panel

**Sync and this till** ஐ open செய்ய status bar ஐத் தேர்ந்தெடுங்கள்:

- <span class="ui">Sync now</span> — உடனே அனுப்ப முயலும்.
- **Waiting and problem operations** — ஒவ்வொன்றும் status உடன்: *Waiting*, *Sending*, *Needs attention*, *Waiting for a manager*.
- <span class="ui">Try again</span> — fail ஆனதை மீண்டும் அனுப்பும்.
- <span class="ui">Export (JSON)</span> — backup ஆக waiting operations ஐ file இல் save செய்யும். POS devices ஐ manage செய்யக்கூடியவர்களுக்கு
  (owners, administrators) காட்டப்படும். Connect ஆக முடியாத till ஐ மாற்றும் முன் பயன்படுத்துங்கள். File ஐ வைத்து உங்கள் service provider
  இடம் கொடுங்கள்: இன்னும் அதை மீண்டும் load செய்ய முடியாது, ஆனால் அவர்கள் அதன் மூலம் sales ஐக் கையால் reconcile செய்யலாம்.
- <span class="ui">Download everything again</span> — till இல் உள்ள catalog தவறாகத் தெரிந்தால். **Waiting operations அப்படியே இருக்கும்.**
- **This till** விவரங்கள்: register, branch, app version, storage, screen status.

## "Waiting for a manager"

Record ஆனபடியே back office ஏதோ ஒன்றை ஏற்க முடியவில்லை — உதா. offline ஆக இருந்தபோது cashier இன் permission நீக்கப்பட்டது. அது
**drop ஆகாது**: administrator [POS devices](/ta/business/pos-devices/) இல் *Sync issues* இன் கீழ் முடிவு செய்வார்.

## புதிய version ready

Till *A new version is ready* எனக் காட்டும்போது, customers இடையே <span class="ui">Update now</span> ஐத் தேர்ந்தெடுங்கள்.

:::danger[Till இன் browser data ஐ ஒருபோதும் clear செய்யாதீர்கள்]
Site data ஐ clear செய்வது, incognito mode ஐப் பயன்படுத்துவது அல்லது browser ஐ reset செய்வது இன்னும் waiting உள்ள அனைத்தையும் delete செய்யும்.
Till ஐ மாற்றியே ஆக வேண்டுமானால், முதலில் அதை decommission செய்து **All synced** வரை காத்திருங்கள்.
:::
