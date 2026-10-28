---
title: Offline සහ sync
description: Internet නැතුව till එක දිගටම විකුණන හැටි, sync status එක කියවන හැටි, සහ යමකට අවධානය ඕන වුණාම කරන්න ඕන දේ.
sidebar:
  order: 10
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

Till එක ඔබේ products, prices, staff PINs, customers සහ settings වල copy එකක් **device එකේම** තියාගන්නවා. Internet නැති වුණාම
ඒක දිගටම විකුණනවා, sales save කරගන්නවා. Connection එක ආපු ගමන් automatic යවනවා. Till එකේ browser data delete නොකරනකම්
**කිසිම දෙයක් නැති වෙන්නේ නැහැ**.

## Status bar එක

| පෙන්නන දේ | තේරුම |
|-----------|-------|
| **Online · All synced** | හැම දෙයක්ම back office එකට ගිහින්. |
| **Syncing…** | දැන් යවමින්. |
| **Offline · {n} waiting** | Internet නැහැ. Sales හෝ operations {n}ක් till එකේ save කරලා. දිගටම විකුණන්න. |
| **Sync error · {n} need attention** | යමක් යවන්න බැරි වුණා — පහත බලන්න. |
| **Last sync …** | Till එක අන්තිමට back office එක එක්ක කතා කළේ කවදාද. |

## Offline වැඩ කරන දේ / internet ඕන දේ

| Offline වැඩ කරනවා | Internet ඕන |
|-------------------|-------------|
| Selling, payments, discounts, approvals | Till එක setup කිරීම හෝ re-authorise කිරීම |
| Shifts open සහ close කිරීම, cash in/out | **වෙනත් till එකක** කරපු sale එකක් හෙවීම |
| **මේ** till එකේ sales වල returns | අලුත් prices, products, PINs ලබාගැනීම (ඊළඟ sync එකේදී) |
| Customers add කිරීම | |

## Sync panel එක

**Sync and this till** open කරන්න status bar එක තෝරන්න:

- <span class="ui">Sync now</span> — වහාම යවන්න try කරන්න.
- **Waiting and problem operations** — හැම එකක්ම status එක එක්ක: *Waiting*, *Sending*, *Needs attention*, *Waiting for a manager*.
- <span class="ui">Try again</span> — fail වුණු එකක් ආයෙත් යවන්න.
- <span class="ui">Export (JSON)</span> — backup එකක් ලෙස waiting operations file එකකට save කරන්න. පෙන්නන්නේ POS devices manage
  කරන්න පුළුවන් අයට (owners සහ administrators). Connect වෙන්න බැරි till එකක් මාරු කරන්න කලින් භාවිතා කරන්න. File එක තියාගෙන
  ඔබේ service provider ට දෙන්න: තවම ඒක ආයෙත් load කරන්න බැහැ, නමුත් ඔවුන්ට ඒකෙන් sales අතින් reconcile කරන්න පුළුවන්.
- <span class="ui">Download everything again</span> — till එකේ catalog එක වැරදි වගේ නම්. **Waiting operations එහෙමම තියෙනවා.**
- **This till** විස්තර: register, branch, app version, storage සහ screen status.

## "Waiting for a manager"

Record කළ විදිහටම back office එකට යමක් accept කරන්න බැරි වුණා — උදා. offline ඉන්නකොට cashier ගේ permission එකක් අයින් වුණා.
ඒක **drop වෙන්නේ නැහැ**: administrator කෙනෙක් [POS devices](/si/business/pos-devices/) හි *Sync issues* යටතේ තීරණය කරනවා.

## අලුත් version එකක් ready

Till එකේ *A new version is ready* පෙන්නුවාම, customers දෙන්නෙක් අතර <span class="ui">Update now</span> තෝරන්න.

:::danger[Till එකක browser data කවදාවත් clear කරන්න එපා]
Site data clear කිරීම, incognito mode භාවිතය හෝ browser එක reset කිරීම තවම waiting තියෙන හැම දෙයක්ම delete කරනවා. Till එකක් මාරු
කරන්නම ඕන නම්, මුලින් ඒක decommission කරලා **All synced** වෙනකම් ඉන්න.
:::
