---
title: Glossary
description: GPOS සහ මේ guide එකේ භාවිතා වෙන වචන.
sidebar:
  order: 3
---

| Word | තේරුම |
|------|-------|
| **Added at till** | නොදන්නා barcode එකක් සඳහා cashier කෙනෙක් till එකේ add කරපු product එකක්; Products හි ඒකේ විස්තර complete කරන්න. |
| **Application** | ඔබේ business එකට GPOS account එකක් open කරන්න app.gpos.lk/register හි කරන request එකක්, GPOS review කරනවා. |
| **Back office** | Owners සහ managers ලට GPOS web admin එක. |
| **Business code** | Sign in වෙන්න email එකත් එක්ක භාවිතා කරන ඔබේ business එකේ කෙටි code එක. |
| **Branch** | Shop එකක් හෝ outlet එකක්. |
| **Register** | Branch එකක checkout counter එකක්. හැම එකකටම till එකයි. |
| **Till** | විකුණන්න භාවිතා කරන device එක සහ screen එක, register එකකට pair කරලා. POS කියලත් කියනවා. |
| **Store / warehouse** | Stock තියාගන්න තැනක්. හැම branch එකකටම default එකක් තියෙනවා. |
| **Shift** | එක till එකක විකුණන කාලයක්, open කරන (float එකක් එක්ක) වෙලාවේ සිට close කරන (count එකක් එක්ක) වෙලාව දක්වා. Open කළේ කවුද, කවදාද අනුව නම් කරනවා, උදා. `Shift-Chamari-20261027-8.00am`. |
| **Float** | Change දෙන්න, shift එක open කරනකොට drawer එකේ තියෙන cash. |
| **Cash in / cash out** | Sale එකක් හෝ refund එකක් නොවන, drawer එකට දාන හෝ ගන්න සල්ලි. |
| **Blind close** | බලාපොරොත්තු වෙන ගණන බලන්න කලින් drawer එක ගණන් කිරීම. |
| **X report** | Shift එක අතරතුර summary එකක්; shift එක open විදිහටම තියෙනවා. |
| **Z report** | Close කළාට පස්සේ shift එකේ අවසාන summary එක. |
| **Reconciled** | Till එකේ හැම record එකක්ම back office එකට ලැබිලා තියෙන close කරපු shift එකක්. |
| **POS PIN** | Till එක unlock කරන ඉලක්කම් 6ක number එකක්. |
| **Two-step sign-in** | Password එක සහ authenticator app එකක code එකක් එක්ක back office එකට sign in වීම. |
| **Authenticator app** | තත්පර 30න් 30ට අලුත් ඉලක්කම් 6ක code එකක් පෙන්නන phone app එකක් (Microsoft Authenticator, Google Authenticator…). |
| **Recovery code** | Phone එක ළඟ නැති වෙලාවට two-step sign-in සඳහා එක පාරක් භාවිතා කරන codes 10න් එකක්. |
| **PDPA** | ශ්‍රී ලංකාවේ Personal Data Protection Act. Customers ට ඔවුන්ගේ data copy එකක් හෝ ඒක erase කරන්න ඉල්ලන්න පුළුවන්. |
| **Receipt number** | `BRANCH-REGISTER-000123`, till අනුව number කරනවා; replacement till එකක් `.2`, `.3`… එකතු කරනවා. හැම receipt එකකම පහළ barcode එකක් විදිහටත් print වෙනවා. |
| **SKU** | Product variant එකකට ඔබේම code එක. |
| **Variant** | Product එකක විකුණන්න පුළුවන් එක version එකක් (size, colour). |
| **Pack barcode** | Units කිහිපයකට එකවර barcode එකක්, `code:quantity` විදිහට ලියනවා. |
| **In-store barcode** | Barcode නැති item එකකට GPOS හදන barcode එකක්: `20` වලින් පටන් ගන්න EAN-13, ඒ නිසා manufacturer කෙනෙකුගේ barcode එකක් එක්ක කවදාවත් ගැටෙන්නේ නැහැ. |
| **Barcode label** | Item එකේ නම, barcode එක සහ (ඕන නම්) price එක සහ shop නම තියෙන sticker එකක්, label printer එකක හෝ A4 sheet එකක print කරනවා. |
| **Tax group** | Product එකකට දෙන දේ; tax rates එකක් හෝ කිහිපයක් එකතු කරනවා. |
| **Quick-pick** | Barcodes නැති items සඳහා till එකේ product button එකක්. |
| **Opening stock** | ඔබ පටන් ගන්න quantities. |
| **Adjustment / write-off** | Reason එකක් එක්ක stock correction එකක් / stock loss එකක්. |
| **Stock count** | Shelves ගණන් කරලා differences post කිරීම. |
| **Transfer** | එක store එකකින් තවත් එකකට stock යැවීම. |
| **Batch / expiry** | Expiry date එකත් එක්ක receive කරපු item එකක lot එකක්. |
| **Reorder level** | Item එකක් low stock ලෙස ගණන් වෙන quantity එක. |
| **Average cost** | Store එකක item එකක running average purchase cost එක. |
| **PO** | Purchase order (`PO-…` ලෙස number කරලා). |
| **Go Green** | Receipt එකක් print නොකර sale එකක් ඉවර කිරීම. |
| **GRN** | Goods received note — book කරපු delivery එකක් (`GRN-…` ලෙස number කරලා). |
| **Void** | එකම shift එකේ මුළු sale එකක්ම cancel කිරීම. |
| **Return** | Refund එකක් එක්ක sale එකක items සමහරක් හෝ ඔක්කොම ආපසු ගැනීම. |
| **Sync** | Till එක තමන්ගේ වැඩ back office එකට යවලා updates ලබාගැනීම. |
| **Sync issue** | Record කළ විදිහටම back office එකට accept කරන්න බැරි වුණු till එකක යමක්; administrator කෙනෙක් තීරණය කරනවා. |
| **Robot check** | Public pages වල (sign-in, passwords, applications) ඔබ bot කෙනෙක් නෙවෙයි, මනුස්සයෙක් කියලා බලන ඉක්මන් check එකක්. |
| **Support session** | ඔබේ service provider ඔබේ account එක ඇතුළේ උදව් කිරීම; හැම විටම පෙන්නනවා, record කරනවා. |
| **Gocart.lk** | GPOS එකෙන්ම ඔබේම shop එකක් open කරන්න පුළුවන් online marketplace එකක් (**Sell online**). |
| **Sold online** | Gocart.lk හි order කරපු item එකකට stock movement එකක්. |
