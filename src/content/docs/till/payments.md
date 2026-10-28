---
title: Payments
description: Cash, card, QR and bank transfer payments, references, and splitting a payment across methods.
sidebar:
  order: 4
---

:::note[Depends on your plan]
**Card, QR and bank payments** and **Split payment** are plan features. Without the first, the till offers **cash only**; without the second, each sale is paid with **one** payment. See [Plans and features](/getting-started/plans/).
:::

Select <span class="ui">Pay</span> (**F4**) and choose a **Payment method**. The methods are set
up in [Payment methods](/business/payment-methods/).

## Cash

Enter **Cash received** — or select <span class="ui">Exact</span> — and the till shows the
**Change**. Select <span class="ui">Complete sale</span>.

## Card, QR and bank transfer

GPOS **does not charge the card itself**. Take the payment on your bank's terminal or app first,
then record it:

1. Choose the method (for example *Card*).
2. Type the **Approval code / reference** shown by the terminal or app. If the method requires a
   reference, the till will not continue without it.
3. For cards you can add the **Card last 4 digits (optional)**. Full card numbers are never stored.
4. Select <span class="ui">Complete sale</span>.

## Split payments

A customer pays part in cash and part by card:

1. Choose the first method and change the **Amount** to the part they pay that way.
2. Select <span class="ui">Take {amount}, then the rest</span>.
3. **Still to pay** shows what is left. Choose the next method and finish.

Made a mistake? <span class="ui">Remove this payment</span> next to it. Only cash can be more than
what is still to pay (to give change).

## In the back office

Payments appear on the sale in **Sales**, on the cash **shift** (*Sales — card*, *Sales — QR*…),
and in the **Payments by method** report — use that to check against your bank.
