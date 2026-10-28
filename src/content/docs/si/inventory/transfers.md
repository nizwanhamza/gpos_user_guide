---
title: Stores අතර transfers
description: එක store එකකින් හෝ branch එකකින් තවත් එකකට stock යවන්න, සහ ලැබුණු දේ record කරන්න.
sidebar:
  order: 5
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
**Stock transfers** plan feature එකක් (ඒකට **Stock control** ඕන). ඒක නැත්නම් **Transfers** tab එක නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Transfer** එකකින් stores දෙකක් අතර stock යවනවා — උදා. central warehouse එකේ සිට branch එකකට. **Send** කළාම පළමු store එකෙන්
stock අයින් වෙනවා (ඒක *in transit*); ලැබෙන store එක **ලැබුණු දේ** දානවා. අඩු වුණු දේ reason එකක් එක්ක record වෙනවා.

## හදලා යවන්න

1. **Inventory → Transfers** → <span class="ui">New transfer</span> වෙත යන්න.
2. **From store** සහ **To store** තෝරන්න.
3. Items සහ quantities add කරන්න.
4. පස්සේ ඉවර කරන්න <span class="ui">Save draft</span>, නැත්නම් ඒක open කරලා <span class="ui">Send (take out of stock)</span> තෝරන්න.

## Receive කරන්න

ලැබෙන store එකේදී:

1. Transfer එක open කරන්න (status **In transit**).
2. හැම item එකකටම **Arrived** ප්‍රමාණය දාන්න. අඩුවෙන් ආවා නම් **Why less arrived** දාන්න.
3. <span class="ui">Receive into stock</span> තෝරන්න.

Transfer එකේ ඒක හැදුවේ, යැව්වේ සහ receive කළේ කවුද, කවදාද කියලා පෙන්නනවා. Draft එකක් <span class="ui">Cancel transfer</span> එකෙන්
cancel කරන්න පුළුවන්.

Statuses: *Draft* → *In transit* → *Received* (හෝ *Cancelled*).

*Transfer stock between locations* permission එක ඕන.
