---
title: Cash shifts
description: හැම till එකකම shifts follow කරන්න, expected සහ counted cash සසඳන්න, count එකක් නැතුව shift එකක් close කරන්න, සහ daily summary එක කියවන්න.
sidebar:
  order: 2
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Selling at the counter (POS), cash shifts and tills** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu
එකේ පෙනෙන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Cash shifts** හි ඔබේ tills වල හැම shift එකක්ම පෙන්නනවා. හැම till එකක්ම float එකක් එක්ක shift එකක් open කරලා count එකක් එක්ක
close කරනවා. Back office එකට ලැබුණු sales සහ cash movements වලින් **expected cash** එක ගණනය කරලා **difference** එක පෙන්නනවා.

## Shifts tab එක

Shifts වලට නම දෙන්නේ open කළේ කවුද සහ කවදාද අනුව, උදා. `Shift-Chamari-20261027-8.00am`. Cashier හෝ till අනුව **Search** කරන්න,
**Branch** සහ **Status** අනුව filter කරන්න. හැම row එකකම shift එක, **Branch · till**, **Opened**, **Sales** ගණන, **Expected cash**,
**Counted** සහ **Difference** පෙන්නනවා.

### Shift statuses

| Status | තේරුම |
|--------|-------|
| **Open** | Till එක මේ shift එක භාවිතා කරනවා. |
| **Closed — waiting for records** | Till එකේ ගණන් කළා; සමහර sales හෝ cash movements තවම back office එකට ඇවිත් නැහැ. |
| **Reconciled** | Till එක report කරපු හැම sale එකක්ම සහ cash movement එකක්ම back office එකේ තියෙනවා. Difference එක final. |
| **Closed without count** | Back office එකේ close කළා, නැත්නම් till එකේ අලුත් shift එකකින් replace වුණා, count එකක් නැතුව. |

### Shift details

Shift එකක් තේරුවාම open සහ close කළේ කවුද, **Opening float** එක, payment method අනුව sales (*Sales — cash*, *Sales — card*…),
**Cash in**, **Cash out**, **Cash refunds**, **Counted notes and coins**, කවුද කළේ සහ *approved by …* එක්ක හැම cash movement එකක්ම,
සහ sales list එක පෙනෙනවා.

Cash movements flag වෙන්න පුළුවන්: **No approval**, **Approver not allowed**, **After the shift closed**, **Reason switched off**,
**Reason not for this** හෝ **Cash in/out (not in plan)** (plan වෙනසක් තවම ලැබිලා නැති till එකක කරපු).

## Count එකක් නැතුව shift එකක් close කරන්න

Till එකක් **නැති වුණාම හෝ කැඩුණාම**, නැත්නම් shift එකක් කවදාවත් close නොකළා නම් මේක භාවිතා කරන්න:

1. Shift එක open කර <span class="ui">Close without count</span> තෝරන්න.
2. **Reason** එකක් දාලා confirm කරන්න.

ඊළඟ sync එකේදී till එක shift එක භාවිතය නවත්වනවා. පස්සේ till එකේ කරන count එකකුත් record වෙනවා. *View and reconcile all cash
shifts* permission එක ඕන.

## Daily summary tab එක

ඔබ තෝරන dates (**From** / **To**) සඳහා **branch** සහ **business day** (හැම shift එකක්ම open කළ දවස) අනුව: shifts ගණන (සහ තවම
*still open* කීයද), sales, tax, cash (*sales · in · out*), refunds සහ මුළු **difference** එක. Difference එකට එකතු වෙන්නේ ගණන් කරපු
shifts විතරයි.

:::tip[දවස අවසානයේ routine එක]
1. හැම cashier කෙනෙක්ම till එකේ shift එක close කරලා drawer එක ගණන් කරනවා.
2. Manager **Cash shifts** check කරනවා — හැම shift එකක්ම **Reconciled**, differences පැහැදිලි කරලා.
3. **Daily summary** එක සහ **Cash over / short** report එක බලන්න.
:::
