---
title: Payments
description: Cash, card, QR සහ bank transfer payments, references, සහ payment එකක් methods කිහිපයකට බෙදීම.
sidebar:
  order: 4
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
**Card, QR and bank payments** සහ **Split payment** plan features. පළමු එක නැත්නම් till එකේ **cash විතරයි**; දෙවැනි එක
නැත්නම් හැම sale එකක්ම ගෙවන්නේ **එක** payment එකකින්. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

<span class="ui">Pay</span> (**F4**) තෝරා **Payment method** එකක් තෝරන්න. Methods setup කරන්නේ
[Payment methods](/si/business/payment-methods/) හි.

## Cash

**Cash received** type කරන්න — හෝ <span class="ui">Exact</span> තෝරන්න — till එක **Change** පෙන්නනවා.
<span class="ui">Complete sale</span> තෝරන්න.

## Card, QR සහ bank transfer

GPOS **card එකෙන් තනියම charge කරන්නේ නැහැ**. මුලින් ඔබේ bank එකේ terminal එකෙන් හෝ app එකෙන් payment එක ගන්න, ඊට
පස්සේ record කරන්න:

1. Method එක තෝරන්න (උදා. *Card*).
2. Terminal එකේ හෝ app එකේ පෙන්නන **Approval code / reference** එක type කරන්න. Method එකට reference එකක් අනිවාර්ය නම්,
   ඒක නැතුව till එක ඉස්සරහට යන්නේ නැහැ.
3. Cards වලට **Card last 4 digits (optional)** add කරන්න පුළුවන්. සම්පූර්ණ card numbers කවදාවත් save කරන්නේ නැහැ.
4. <span class="ui">Complete sale</span> තෝරන්න.

## Split payments

Customer කෙනෙක් කොටසක් cash වලින් සහ කොටසක් card එකෙන් ගෙවනවා:

1. පළමු method එක තෝරා **Amount** එක ඒ විදිහට ගෙවන කොටසට වෙනස් කරන්න.
2. <span class="ui">Take {amount}, then the rest</span> තෝරන්න.
3. **Still to pay** එකේ ඉතුරු ගණන පෙන්නනවා. ඊළඟ method එක තෝරා ඉවර කරන්න.

වැරැද්දක් වුණාද? ඒක ළඟ <span class="ui">Remove this payment</span> තෝරන්න. තව ගෙවන්න තියෙන ගණනට වඩා වැඩි වෙන්න පුළුවන්
cash විතරයි (change දෙන්න).

## Back office එකේ

Payments **Sales** හි sale එකේ, cash **shift** එකේ (*Sales — card*, *Sales — QR*…), සහ **Payments by method** report එකේ
පෙනෙනවා — bank එක එක්ක සසඳන්න ඒක භාවිතා කරන්න.
