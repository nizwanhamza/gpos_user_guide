---
title: Two-step sign-in
description: Authenticator app එකක code එකකින් back-office accounts ආරක්ෂා කරන්න, recovery codes ආරක්ෂිතව තබාගන්න, phone එක නැති වුණොත් කරන්න ඕන දේ.
sidebar:
  order: 5
---

**Two-step sign-in** on කළාම, password එකට පස්සේ ඔබේ phone එකේ **authenticator app** එකේ ඉලක්කම් 6ක code එකක්
ඉල්ලනවා. එතකොට කවුරුහරි password එක අනුමාන කළත් හෝ leak වුණත් ඔබේ business එකට ඇතුළු වෙන්න බැහැ.

මේක අදාළ වෙන්නේ [app.gpos.lk](https://app.gpos.lk) හි **back office** එකට විතරයි. **Till එකට බලපාන්නේ නැහැ** —
cashiers දිගටම ඔවුන්ගේ [POS PIN](/si/till/unlock-and-users/) එකෙන් till එක unlock කරනවා.

:::tip[කුමන app එකද?]
ඕනෑම authenticator app එකක් වැඩ කරනවා, උදා. **Microsoft Authenticator** හෝ **Google Authenticator** (Android සහ
iPhone වලට free). පටන් ගන්න කලින් install කරගන්න.
:::

## Setup කරන්න

1. **My account** → **Two-step sign-in** වෙත ගිහින් <span class="ui">Set up two-step sign-in</span> තෝරන්න.
2. Authenticator app එකේ account එකක් add කර screen එකේ **QR code එක scan කරන්න**.
   - Scan කරන්න බැරිද? QR code එක යට තියෙන **key** එක app එකේ type කරන්න.
   - එකම phone එකේ setup කරනවාද? **Open in the authenticator app (on this phone)** තෝරන්න.
3. App එකේ තත්පර 30න් 30ට මාරු වෙන ඉලක්කම් 6ක code එකක් පෙන්නනවා. එය type කර <span class="ui">Turn on</span> තෝරන්න.
4. GPOS **recovery codes 10ක් — මේ එක පාරට විතරයි** පෙන්නන්නේ. ඒවා ලියාගන්න හෝ print කරගෙන ආරක්ෂිත තැනක
   තියාගන්න, **phone එකේ නෙවෙයි**. ඊට පස්සේ <span class="ui">I have saved them</span> තෝරන්න.

දැන් My account හි *Two-step sign-in is on (10 recovery codes left)* කියලා පෙන්නනවා.

## Two-step sign-in එක්ක sign in වීම

1. සාමාන්‍ය විදිහට business code, email සහ password එකෙන් sign in වෙන්න.
2. **Two-step sign-in** screen එකේදී authenticator app එක open කර දැනට තියෙන **ඉලක්කම් 6ක code** එක type කරන්න.
3. <span class="ui">Continue</span> තෝරන්න.

Phone එක ළඟ නැද්ද? ඒ වෙනුවට ඔබේ **recovery codes** වලින් එකක් type කරන්න. හැම recovery code එකක්ම වැඩ කරන්නේ
**එක පාරයි**; කීයක් ඉතුරුද කියලා My account හි පෙන්නනවා.

## අනිවාර්ය වෙන්නේ කවදාද?

- **Staff අයට — owner තීරණය කරනවා.** **Settings → Two-step sign-in** හි owner ට **Require two-step sign-in for
  all other users of the business** tick කරන්න පුළුවන්. Setup කරලා නැති අයට ඊළඟ sign in එකේදී, අනිත් හැම දේටම
  කලින් එය කරන්න කියලා අහනවා (*Set up two-step sign-in* screen එක). මේ setting එක වෙනස් කරන්න පුළුවන් business
  owner ට විතරයි.
- **Owner ට — ඔබේ service provider අනිවාර්ය කරන්න පුළුවන්.** Settings හි *For you as the owner, GPOS requires it*
  හෝ *For you as the owner it is optional: turn it on in My account* කියලා පෙන්නනවා.

අනිවාර්ය නැති වුණත් **owners සහ administrators හැම විටම එය භාවිතා කරන්න** කියලා අපි නිර්දේශ කරනවා.

## Off කරන්න

**My account → Two-step sign-in** හි **Code from the app** එකක් (හෝ recovery code එකක්) type කර
<span class="ui">Turn off</span> තෝරන්න. ඔබට එය අනිවාර්ය නම්, ඊළඟ sign in එකේදී ආයෙත් setup කරන්න කියලා අහනවා.

## Phone එක නැති වුණොත් හෝ මාරු කළොත්

| කවුද | කරන්න ඕන දේ |
|------|-------------|
| **Employee කෙනෙක්** (cashier, manager…) | **Recovery code** එකකින් sign in වී, two-step sign-in off කර අලුත් phone එකේ ආයෙත් setup කරන්න. Recovery codes ඉතුරු නැද්ද? **Employees → (ඔබේ නම) → Reset two-step sign-in** open කරන්න කියලා owner ගෙන් හෝ administrator කෙනෙකුගෙන් ඉල්ලන්න. ඊට පස්සේ password එකෙන් sign in වී ආයෙත් setup කරන්න. |
| **Owner** | 1. **Recovery code** එකකින් sign in වෙන්න. 2. නැත්නම් ඔබේ business එකේ **වෙනත් administrator කෙනෙකුට** **Employees** හි ඔබේ two-step sign-in reset කරන්න කියන්න. 3. ඒ දෙකම බැරි නම් විතරක් ඔබේ **service provider** අමතන්න. |

:::caution[Owner account එකක් recover කරන්න කාලය යනවා — හිතාමතාම]
Business එකක් හොරකම් කරන්න වැඩියෙන්ම භාවිතා කරන ක්‍රමය owner ගේ account එක අල්ලාගැනීමයි. උදව් කරන්න කලින්
ඔබමද කියලා service provider check කරනවා — උදා. ඔවුන් ළඟ තියෙන phone number එකට ආපසු call කරලා, හෝ business
registration සහ NIC එක check කරලා. ඔවුන් කවදාවත් ඔබේ password එක අහන්නේ නැහැ. හැම recovery එකකින්ම ඔබ හැම
device එකකින්ම sign out වෙනවා, එය ඔබේ [audit log](/si/reports/audit-log/) එකේ record වෙනවා, ඔබට email එකක් එනවා.
ඔබ ඉල්ලන්නේ නැතුව එවැනි email එකක් ආවොත්, වහාම ඔබේ service provider අමතන්න.

**Tip:** විශ්වාසවන්ත දෙවැනි කෙනෙකුට *Administrator* role එක දෙන්න, එතකොට ආයෙත් ඇතුළු වෙන්න support එක
මත රඳා පවතින්න ඕන නැහැ.
:::

## දැනගන්න හොඳ දේ

- *"The code is not correct"* — phone එකේ **date සහ time automatic ලෙස set වෙලාද** බලන්න; codes clock එක මත
  රඳා පවතිනවා. ඊළඟ code එක එනකම් ඉඳලා ආයෙත් try කරන්න. එකම code එක දෙපාරක් භාවිතා කරන්න බැහැ.
- අලුත් phone එකක්ද? අලුත් phone එකේ two-step sign-in ආයෙත් setup කරන්න — පරණ app entry එක තනියම මාරු වෙන්නේ නැහැ.
- [Forgot password?](/si/getting-started/signing-in/) වෙනස් කරන්නේ password එක විතරයි. Two-step sign-in on
  විදිහටම තියෙනවා.
