---
title: Troubleshooting
description: Back office එකේ සහ till එකේ නිතර එන ප්‍රශ්න වලට ඉක්මන් විසඳුම්.
sidebar:
  order: 1
---

## Sign in වීම

**"Incorrect business code, email or password"**
මුලින්ම **business code** එක check කරන්න — business එකේ හැම employee කෙනෙක්ම එකම එක භාවිතා කරනවා. ඊට පස්සේ email සහ password එක
check කරන්න (passwords වල capital සහ simple අකුරු වෙනස්).

**"Too many attempts. Please wait a minute and try again"**
විනාඩියක් ඉඳලා ආයෙත් පරිස්සමෙන් try කරන්න. ඕන නම් [Forgot password?](/si/getting-started/signing-in/) භාවිතා කරන්න.

**"This link is invalid, was already used or has expired"**
Password reset links වැඩ කරන්නේ එක පාරයි, විනාඩි 30ක් විතරයි. අලුත් එකක් ඉල්ලන්න.

**"The robot check failed; please try again"**
Sign-in, password සහ application pages වල ඔබ robot කෙනෙක් නෙවෙයි කියලා ඔප්පු කරන්න කියන්න පුළුවන්. Check එක ඉවර වෙනකම් ඉන්න (හෝ tick
කරන්න), ඊට පස්සේ ආයෙත් try කරන්න. දිගටම fail වෙනවා නම් VPNs හෝ ad blockers off කරන්න.

**Approve වුණාට පස්සේ password එක තෝරන link එක expire වෙලා**
ඒක දින 7ක් valid. අලුත් එකක් ඉල්ලන්න GPOS Support අමතන්න.

**"We are not taking new applications online at the moment"**
දැනට online applications වහලා. ඔබේ business එක register කරන්න GPOS Support අමතන්න.

**"The code is not correct"** (two-step sign-in)
Authenticator app එකේ දැනට තියෙන code එක භාවිතා කරන්න, phone එකේ date සහ time automatic set වෙලාද බලන්න. Recovery code එකකුත් භාවිතා
කරන්න පුළුවන්. [Two-step sign-in](/si/getting-started/two-step-sign-in/) බලන්න.

**Authenticator app එක තියෙන phone එක නැති වුණා**
Recovery code එකකින් sign in වෙන්න, නැත්නම් Employees හි **Reset two-step sign-in** කරන්න කියලා owner ගෙන් හෝ administrator කෙනෙකුගෙන්
ඉල්ලන්න. Owners: [Two-step sign-in](/si/getting-started/two-step-sign-in/) බලන්න.

**"Set up two-step sign-in first"**
ඔබේ business එකට (owners නම් ඔබේ service provider ට) two-step sign-in අනිවාර්යයි. **Set up two-step sign-in** screen එක අනුගමනය කරන්න.

**"Accept the terms first"**
ඊළඟ sign in එකේදී owner update කරපු terms of service accept කරන්න ඕන.

**"This business account is suspended"**
ඔබේ service provider අමතන්න.

**"You do not have permission to do this"**
ඔබේ role එකෙන් ඒකට ඉඩ නැහැ. Owner ගෙන් හෝ administrator ගෙන් අහන්න — [Roles and permissions](/si/business/roles/) බලන්න.

**"This feature is not included in your plan" / "Your plan limit has been reached"**
උදා. ඔබේ plan එකට වඩා තව branch එකක් හෝ employee කෙනෙක් add කරනකොට. Plan එක වෙනස් කරන්න ඔබේ service provider අමතන්න. Disable කළ
employees සහ inactive branches ගණන් කරන්නේ නැහැ. [Plans and features](/si/getting-started/plans/) බලන්න.

**මේ guide එකේ තියෙන menu item එකක් නැහැ**
එක්කෝ feature එක ඔබේ plan එකේ නැහැ, නැත්නම් ඔබේ role එකේ ඒක නැහැ. Dashboard එකේ **Plan** card එක බලන්න (ඔබට තියෙන features එහි
list කරනවා) සහ ඔබේ role එක ගැන owner ගෙන් අහන්න.

## Till එකක් pair කිරීම

**"This code has expired"** — codes විනාඩි 15යි. <span class="ui">New code</span> තෝරන්න.

**"Add a register to a branch first"** — **Branches** වෙත ගිහින් register එකක් add කරන්න.

**"This till needs a secure connection"** — till එක `https://` එක්ක **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** හි open
කරන්න. තවම පෙන්නනවා නම් ඔබේ service provider අමතන්න.

**"Setting up needs an internet connection"** — device එක connect කරලා ආයෙත් try කරන්න.

## Till එකේ

**"Who is using the till?" හි මගේ නම නැහැ**
ඔබට **POS PIN** එකක් සහ **මේ branch එකේ** විකුණන්න පුළුවන් role එකක් ඕන. [My account](/si/getting-started/my-account/) හි PIN එක set
කරන්න හෝ administrator ගෙන් ඉල්ලන්න, ඊට පස්සේ till එක sync වෙනකම් ඉන්න (හෝ <span class="ui">Sync now</span> තෝරන්න).

**"Too many wrong PINs. Try again in …"**
පෙන්නන කාලය ඉන්න. PIN එක අමතක නම් අලුත් එකක් set කරන්න කියලා administrator ගෙන් ඉල්ලන්න.

**විකුණන්න බැහැ — "No shift open: sales are off"**
Shift එකක් open කරනකම් till එකෙන් prices check කරන්න විතරයි පුළුවන්. මුලින් shift එකක් open කරන්න (නැත්නම් ඉඩ තියෙන
කෙනෙකුගෙන් ඉල්ලන්න): [Cash shifts on the till](/si/till/shifts/) බලන්න.

**Scan කරපු item එකකට "Nothing found"**
Barcode එක කිසිම product එකක නැහැ. Back office එකේ product එකේ **Barcodes** වලට ඒක add කරලා till එක sync කරන්න. ඒ අතරේ නමින් search
කරන්න — නැත්නම් ඔබේ plan එකේ තියෙනවා නම් [till එකේම add කරන්න](/si/till/add-product-at-till/).

**"No price" හෝ "Not for sale"**
Product එකට තවම price එකක් නැහැ, නැත්නම් inactive/archived. **Products** හි හදන්න.

**"Prices may be out of date"**
Till එක ටික කාලයක් sync වෙලා නැහැ. Internet connection එක check කරලා <span class="ui">Sync now</span> තෝරන්න.

**Cash in/out වලදී "No reasons are set up for this"**
[Cash in/out reasons](/si/business/cash-reasons/) add කරන්න හෝ switch on කරන්න.

**"No manager can approve on this till"**
Manager කෙනෙකුට POS PIN එකක් සහ මේ branch එකට access ඕන.

**Receipt එක පළල වැඩියි, පොඩි වැඩියි, නැත්නම් header එකක් සහ URL එකක් තියෙනවා**
[Till settings](/si/till/shortcuts-and-settings/) හි **Receipt paper** එක 58 හෝ 80 mm ට set කරන්න, browser එකේ print dialog එකේ
*Headers and footers* off කරන්න.

## Sync

**"Sync error · … need attention"**
Sync panel එක open කරලා <span class="ui">Try again</span> තෝරන්න. දිගටම තියෙනවා නම් administrator කෙනෙක් [POS devices](/si/business/pos-devices/)
හි *Sync issues* check කරනවා.

**POS devices හි "Needs re-authorising"**
Till එකට දින 90ක් contact එකක් නැහැ. <span class="ui">Re-authorise</span> තෝරලා අලුත් code එක till එකේ type කරන්න. Waiting sales එහෙමම තියෙනවා.

**Sales තවම waiting තියෙද්දී till එකක් කැඩුණා**
තවම start වෙනවා නම් connect කරලා <span class="ui">Sync now</span> තෝරන්න, නැත්නම් waiting වැඩ <span class="ui">Export (JSON)</span> කරන්න.
ඊට පස්සේ [POS devices](/si/business/pos-devices/) හි *Till එකක් මාරු කිරීම පියවරෙන් පියවර* අනුගමනය කරන්න.

**"This till is not registered"**
Till එක revoke කරලා, නැත්නම් authorisation එක expire වෙලා. Administrator කෙනෙක් **POS devices** හි <span class="ui">Re-authorise</span> තෝරනවා,
ඔබ අලුත් code එක දානවා. Waiting වැඩ එහෙමම තියෙනවා.

**Till එකේ catalog එක වැරදි වගේ**
Sync panel → <span class="ui">Download everything again</span>. Waiting operations එහෙමම තියෙනවා.

**POS devices හි "Clock off by … min"**
Till device එකේ හරි date, time සහ time zone set කරන්න (automatic time on කරන්න).

## Data සහ reports

**Stock negative**
සාමාන්‍යයෙන් opening stock දාලා නැහැ, නැත්නම් delivery එකක් GPOS හි receive කරලා නැහැ. නැති [goods received](/si/purchasing/receiving-goods/)
post කරන්න හෝ [stock count](/si/inventory/counts/) එකක් කරන්න.

**Report එකක "These figures may still change"**
Till එකකට තවම යවන්න sales තියෙනවා, නැත්නම් Sync issues හි යමක් බලාගෙන ඉන්නවා. පස්සේ ආයෙත් බලන්න.

**"Someone else's change" / "This conflicts with existing data"**
වෙන කෙනෙක් එකම record එක save කළා. <span class="ui">Reload latest</span> තෝරලා ඔබේ වෙනස ආයෙත් කරන්න.

## උදව් ඉල්ලනකොට

ඔබේ service provider අමතනකොට මේවා කියන්න:

- ඔබේ **Business code** එක;
- **version** එක — back office menu එකේ පහළින් (*Version …*), නැත්නම් till එකේ sync panel එකේ **This till** යටතේ
  ([Offline and sync](/si/till/offline-sync/));
- ඔබ කළේ මොකක්ද, බලාපොරොත්තු වුණේ මොකක්ද, සහ screen එකේ තිබුණු message එක හරියටම.
