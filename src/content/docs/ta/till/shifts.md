---
title: Till இல் cash shifts
description: Opening float உடன் shift ஐ open செய்யுங்கள், cash in அல்லது cash out செய்யுங்கள், X report ஐ print செய்யுங்கள், count உடன் shift ஐ close செய்யுங்கள்.
sidebar:
  order: 9
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
Cash shifts **Selling at the counter (POS)** இன் பகுதி. **Cash in / cash out** ஒரு தனி plan feature: அது இல்லாவிட்டால் shift
window இல் அந்த buttons தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Shift** என்பது ஒரு till இல் விற்பனை செய்யும் ஒரு காலப்பகுதி — பொதுவாக ஒரு cashier இன் நாள் அல்லது அரை நாள். Shift close ஆகும்
வரை ஒவ்வொரு sale உம் cash movement உம் அதைச் சேர்ந்தவை. Manage செய்ய **F10** ஐ அழுத்துங்கள் அல்லது மேலே உள்ள shift பெயரைத் தேர்ந்தெடுங்கள்.

ஒவ்வொரு shift க்கும் **யார் எப்போது open செய்தார்** என்பதன்படி பெயர் இடப்படும், உதா. `Shift-Chamari-20261027-8.00am`. Till இலும்,
back office இலும், reports இலும் அதே பெயர் பயன்படும்.

## Shift ஐ open செய்யுங்கள்

Shift open ஆக இல்லாதபோது till *No shift is open* எனக் காட்டும்.

1. **Open a shift** ஐத் தேர்ந்தெடுங்கள்.
2. Drawer இல் உள்ள cash ஐ — **opening float** — எண்ணுங்கள். ஒன்று:
   - <span class="ui">Count notes and coins</span> — ஒவ்வொரு note மற்றும் coin எத்தனை என்று உள்ளிடுங்கள், till கூட்டும்; அல்லது
   - <span class="ui">Enter the total</span> — மொத்தத்தை type செய்யுங்கள்.
3. <span class="ui">Open shift with {amount}</span> ஐத் தேர்ந்தெடுங்கள்.

## Cash in மற்றும் cash out

**Sales தவிர** drawer இல் போடும் அல்லது எடுக்கும் cash ஐ record செய்ய வேண்டும், இல்லையெனில் count பொருந்தாது.

1. Shift இல் <span class="ui">Cash in</span> அல்லது <span class="ui">Cash out</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Amount** ஐ உள்ளிட்டு **Reason** ஐத் தேர்ந்தெடுங்கள் (உதா. *Paid out* அல்லது *To the safe*).
3. தேவையெனில் **Note** ஐ add செய்யுங்கள்.
4. <span class="ui">Put in {amount}</span> / <span class="ui">Take out {amount}</span> ஐத் தேர்ந்தெடுங்கள்.

Business limit க்கு மேலான cash outs க்கு manager இன் approval தேவை — [Discounts](/ta/till/discounts/) ஐப் பாருங்கள். Default ஆக **ஒவ்வொரு**
cash out க்கும் தேவை.

## X report (shift இன்போது)

இதுவரையான shift இன் snapshot க்கு <span class="ui">X report</span> ஐத் தேர்ந்தெடுங்கள் (receipt printer அல்லது **A4** இல் print செய்யலாம்):
sales, tax, cash sales, cash in மற்றும் out, refunds, **expected cash**. Print செய்ய <span class="ui">Print</span> ஐத் தேர்ந்தெடுங்கள்.
Shift open ஆகவே இருக்கும்.

## Shift ஐ close செய்யுங்கள்

1. <span class="ui">Close shift</span> ஐத் தேர்ந்தெடுங்கள்.
2. Drawer இல் உள்ள **எல்லா** cash ஐயும் எண்ணுங்கள் (notes மற்றும் coins, அல்லது மொத்தம்).
3. <span class="ui">Close with {amount} counted</span> ஐத் தேர்ந்தெடுங்கள்.

Till expected cash, நீங்கள் எண்ணியது, **Difference** உடன் **Z report** ஐ print செய்யும் அல்லது காட்டும். **Blind close** on ஆக
இருந்தால், expected amount close செய்த பிறகே தெரியும்.

- Sales இன்னும் sync ஆகக் காத்திருக்கின்றனவா? *You can close now; they are sent first.*
- Shift close ஆகும்போது **held sales discard ஆகும்** — முதலில் அவற்றை முடியுங்கள்.

ஒவ்வொரு sale உம் cash movement உம் வந்த பிறகு back office shift ஐ **reconcile** செய்யும். [Cash shifts](/ta/sales/cash-shifts/) ஐப் பாருங்கள்.

## முந்தைய shifts

**Earlier shifts on this till** மற்றும் எண்ணியதைப் பார்க்க <span class="ui">Shifts</span> ஐத் தேர்ந்தெடுங்கள்.

## "Shift … was closed by a manager"

Manager back office இலிருந்து shift ஐ close செய்யலாம் (உதா. till உடைந்தால்). அப்போது புதிய shift ஐ open செய்ய till கேட்கும்.
