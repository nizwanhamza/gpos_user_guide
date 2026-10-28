---
title: Sign in වීම
description: GPOS back office එකට sign in වෙන විදිහ, පළමු password එක වෙනස් කරන විදිහ සහ අමතක වූ password එකක් reset කරන විදිහ.
sidebar:
  order: 1
---

**Back office** එක ඔබේ business එකේ web admin එකයි. Owners, managers, inventory staff සහ accountants
අලුත් browser එකක් (Chrome, Edge, Firefox හෝ Safari) තියෙන ඕනෑම computer එකකින් එය භාවිතා කරනවා.

:::note[Back office ද till ද?]
Cashiers ට සාමාන්‍යයෙන් back office එකට sign in වෙන්න ඕන **නැහැ**. ඔවුන් ඉලක්කම් 6ක **POS PIN** එකකින්
till එක unlock කරනවා — [Unlocking the till](/si/till/unlock-and-users/) බලන්න.
:::

## Sign in වෙන්න

1. Browser එකේ **[app.gpos.lk](https://app.gpos.lk)** open කරන්න.
2. පුරවන්න:
   - **Business code** — ඔබේ business එකේ කෙටි code එක, උදා. `kandy-mart`. එය dashboard එකේ සහ menu එකේ
     business නම යට පෙන්නනවා. Business එකේ හැම employee කෙනෙක්ම එකම code එක භාවිතා කරනවා.
   - **Email** — ඔබේම email address එක.
   - **Password** — ඔබේම password එක.
3. **Robot check** එකක් පෙන්නුවොත් එය complete කර <span class="ui">Sign in</span> තෝරන්න.
4. ඔබට **two-step sign-in** on කරලා නම්, authenticator app එකේ ඉලක්කම් 6ක **Code** එක (හෝ recovery code
   එකක්) type කර <span class="ui">Continue</span> තෝරන්න. [Two-step sign-in](/si/getting-started/two-step-sign-in/) බලන්න.

**Incorrect business code, email or password** පෙන්නුවොත් තුනම check කරන්න — වැඩිපුරම වැරදෙන්නේ business code එක.

තවම GPOS customer කෙනෙක් නෙවෙයිද? Sign-in page එකේ **New business? Apply for an account** සහ **Check my
application** තියෙනවා — [GPOS සඳහා apply කරන්න](/si/getting-started/apply/) බලන්න.

## පළමු sign in එක

:::note[Online apply කළාද?]
ඔබට temporary password එකක් ලැබෙන්නේ නැහැ. මුලින්ම approval email එකේ link එක open කර password එක තෝරා
ඊට පස්සේ sign in වෙන්න.
:::

Administrator කෙනෙක් ඔබේ account එක හැදුවාම (හෝ password එක reset කළාම) ඔබට **temporary password** එකක්
ලැබෙනවා. පළමු sign in එකේදී GPOS **අලුත් password එකක් set කරන්න** කියලා අහනවා:

1. **Temporary password** එක type කරන්න.
2. **New password** එකක් type කරන්න — අවම **අකුරු 12**. `blue-tea-at-four-pm` වගේ මතක තියාගන්න ලේසි
   වාක්‍යයක් හොඳයි.
3. එයම **Confirm new password** හි ආයෙත් type කර <span class="ui">Change password</span> තෝරන්න.

මේක කරනකම් back office එක භාවිතා කරන්න බැහැ. කැමති නම් <span class="ui">Sign out instead</span> තෝරන්න.

## Sign in වුණාට පස්සේ පෙනෙන්න පුළුවන් screens

### Terms of service (owners)

පළමු sign in එකේදී සහ අලුත් version එකක් ආව හැම වෙලාවකම, **owner** ගෙන් **Terms of service**, **Privacy
policy** සහ **Data processing terms** accept කරන්න කියලා අහනවා.

1. හැම document එකක්ම open කර කියවන්න (links වල version එක පෙන්නනවා).
2. **I have read and accept these documents on behalf of the business** tick කරන්න.
3. <span class="ui">Accept and continue</span> තෝරන්න.

Owner accept කරනකම් owner ට back office එක භාවිතා කරන්න බැහැ (*Accept the terms first*). අනිත් employees ගෙන්
අහන්නේ නැහැ, ඔවුන්ට දිගටම වැඩ කරන්න පුළුවන්, tills දිගටම විකුණනවා.

### Two-step sign-in setup කිරීම

ඔබේ account එකට two-step sign-in **අනිවාර්ය** නම් සහ තවම setup කරලා නැත්නම්, GPOS හැම දේටම කලින් **Set up
two-step sign-in** පෙන්නනවා. Screen එකේ පියවර අනුගමනය කරන්න — [Two-step sign-in](/si/getting-started/two-step-sign-in/)
බලන්න. <span class="ui">Sign out</span> කර පස්සේ කරන්නත් පුළුවන්, නමුත් ඉවර කරනකම් back office එක භාවිතා කරන්න බැහැ.

## Password එක අමතක වුණාද?

1. Sign-in page එකේ <span class="ui">Forgot password?</span> තෝරන්න.
2. ඔබේ **Business code** සහ **Email** type කර <span class="ui">Send link</span> තෝරන්න.
3. Email එක open කර link එකට යන්න (**විනාඩි 30ක්** valid, එක පාරයි වැඩ කරන්නේ). ආවේ නැත්නම් spam folder එක බලන්න.
4. අලුත් password එකක් තෝරා <span class="ui">Save new password</span> තෝරන්න.

ඊට පස්සේ හැම තැනකින්ම sign out වෙනවා, අලුත් password එකෙන් ආයෙත් sign in වෙන්න.

:::note
Password එක reset කළාට two-step sign-in off වෙන්නේ නැහැ. Phone එකත් නැති වුණාද?
[Two-step sign-in](/si/getting-started/two-step-sign-in/) හි *Phone එක නැති වුණොත් හෝ මාරු කළොත්* බලන්න.
:::

:::tip[Email එකට access නැද්ද?]
**Employees** හි ඔබේ **password එක reset කරන්න** කියලා owner ගෙන් හෝ administrator ගෙන් ඉල්ලන්න. ඔවුන්ට ඔබට දෙන්න
temporary password එකක් ලැබෙනවා; sign in වෙනකොට ඔබේම එකක් තෝරන්න.
:::

## Attempts වැඩි වුණාම

පිළිවෙළින් වැරදි passwords කිහිපයක් දැම්මාම, ආයෙත් try කරන්න කලින් **විනාඩියක් ඉන්න** කියලා GPOS කියනවා.
Passwords අනුමාන කරන අයගෙන් ඔබේ business එක ආරක්ෂා කරන්නයි මේ.

## Sign out වීම

Menu එකේ පහළ <span class="ui">Sign out</span> තෝරන්න. Shared computers වල හැම විටම sign out වෙන්න.
