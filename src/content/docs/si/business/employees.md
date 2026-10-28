---
title: Employees
description: Staff add කරන්න, branch එකකට හෝ register එකකට roles දෙන්න, POS PINs set කරන්න, passwords reset කරන්න සහ accounts disable කරන්න.
sidebar:
  order: 3
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
ඔබේ plan එකට **active employees** ගණන සීමා කරන්න පුළුවන්. Disable කළ employees ගණන් කරන්නේ නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

GPOS භාවිතා කරන හැමෝටම — back office එකේ හෝ till එකේ — තමන්ගේම **employee** account එකක් තියෙනවා. Accounts
කවදාවත් share කරන්න එපා: කවුද මොකද කළේ කියලා GPOS record කරනවා.

## Employee කෙනෙක් add කරන්න

1. **Employees** → <span class="ui">Add employee</span> වෙත යන්න.
2. **Full name**, **Email** සහ **Initial password** එකක් (අවම අකුරු 12) type කරන්න.
3. **Role** එකක් සහ එය අදාළ වෙන තැන තෝරන්න:
   - **Branch** — ඔවුන් වැඩ කරන branch එක, නැත්නම් *All branches*.
   - **Register** — සාමාන්‍යයෙන් *Whole branch*; එක counter එකකට සීමා කරන්න register එකක් තෝරන්න.
4. තව ඕනද? <span class="ui">+ Add another role</span> තෝරන්න — උදා. Kandy වල *Cashier* සහ Colombo වල *Manager*.
5. <span class="ui">Create employee</span> තෝරන්න.

Employee ට business code එක, email එක සහ initial password එක දෙන්න. පළමු sign in එකේදී ඔවුන් තමන්ගේම password
එකක් තෝරනවා. Employees කීදෙනෙක් ඉන්න පුළුවන්ද කියන්නේ ඔබේ plan එක අනුවයි.

## Employee කෙනෙකුට POS PIN එකක් set කරන්න

Cashiers till එක unlock කරන්නේ **ඉලක්කම් 6ක PIN** එකකින්. ඔවුන්ට එය set කරන්න:

1. Employee තෝරා **Manage {name}** open කරන්න.
2. <span class="ui">Set POS PIN</span> තෝරා, PIN එක දෙපාරක් type කර save කරන්න.
3. PIN එක ඔවුන්ට **කෙලින්ම** කියන්න.

Tills වලට PIN එක ලැබෙන්නේ ඊළඟ sync එකේදී. Employees ට [My account](/si/getting-started/my-account/) හි තමන්ගේම PIN
එක set කරන්න හෝ වෙනස් කරන්නත් පුළුවන්. Branch එකක till එකේ පෙනෙන්නේ POS PIN එකක් තියෙන, ඒ branch එකේ විකුණන්න
අවසර තියෙන අය විතරයි.

## Roles වෙනස් කරන්න

Employee open කර roles, branches හෝ registers වෙනස් කර <span class="ui">Save roles</span> තෝරන්න. වෙනස්කම් apply
වෙන්නේ employee ගේ ඊළඟ action එකේදී — sign out වෙන්න ඕන නැහැ.

## Details සහ language edit කරන්න

නම, email හෝ **Language** (*Business default*, English, Sinhala හෝ Tamil) වෙනස් කරන්න <span class="ui">Edit</span> තෝරන්න.

## Password එකක් reset කරන්න

කෙනෙකුට password එක අමතක වෙලා email link එක භාවිතා කරන්න බැරි නම්:

1. Employee open කර <span class="ui">Reset password</span> තෝරන්න.
2. GPOS **temporary password එකක් — එක පාරක් විතරයි** පෙන්නනවා. එය employee ට දෙන්න.
3. ඔවුන් හැම තැනකින්ම sign out වෙනවා, ඊළඟ sign in එකේදී අලුත් password එකක් තෝරන්න ඕන.

## Two-step sign-in reset කරන්න

Employee කෙනෙකුගේ **phone එක නැති වුණා නම්** (recovery codes එක්කම), employee open කර
<span class="ui">Reset two-step sign-in</span> තෝරා confirm කරන්න. ඔවුන්ගේ two-step sign-in off වෙනවා (*Two-step
sign-in was turned off*). ඔවුන් password එකෙන් sign in වී අලුත් phone එකේ ආයෙත් setup කරනවා — ඔබේ business එකට
අනිවාර්ය නම් වහාම.

ඉල්ලන්නේ ඇත්තටම ඔවුන්මද කියලා check කළාට පස්සේ විතරක් මේක කරන්න. *Create, update and disable employees and their
roles* permission එක ඕන.

## Disable හෝ enable කරන්න

කෙනෙක් අස් වුණාම <span class="ui">Disable</span> තෝරන්න. ඔවුන් **වහාම sign out වෙනවා**, ආයෙත් back office එක හෝ
tills භාවිතා කරන්න බැහැ. ඔවුන්ගේ history එක තියෙනවා. Account එක ආයෙත් ගේන්න <span class="ui">Enable</span> තෝරන්න.

:::tip
Dashboard එකේ *Active employees* count එකෙන් ඔබේ plan limit එකට කොච්චර ළඟද කියලා පෙන්නනවා. Disable කළ employees
ගණන් කරන්නේ නැහැ.
:::
