---
title: Payments
description: Cash, card, QR, bank transfer payments, references, ஒரு payment ஐ பல methods ஆகப் பிரித்தல்.
sidebar:
  order: 4
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**Card, QR and bank payments** மற்றும் **Split payment** plan features. முதலாவது இல்லாவிட்டால் till இல் **cash மட்டுமே**;
இரண்டாவது இல்லாவிட்டால் ஒவ்வொரு sale உம் **ஒரு** payment மூலம் செலுத்தப்படும். [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

<span class="ui">Pay</span> (**F4**) ஐத் தேர்ந்தெடுத்து **Payment method** ஐத் தேர்ந்தெடுங்கள். Methods
[Payment methods](/ta/business/payment-methods/) இல் setup செய்யப்படும்.

## Cash

**Cash received** ஐ type செய்யுங்கள் — அல்லது <span class="ui">Exact</span> ஐத் தேர்ந்தெடுங்கள் — till **Change** ஐக் காட்டும்.
<span class="ui">Complete sale</span> ஐத் தேர்ந்தெடுங்கள்.

## Card, QR மற்றும் bank transfer

GPOS **card இலிருந்து தானே charge செய்யாது**. முதலில் உங்கள் bank இன் terminal அல்லது app இல் payment ஐ எடுங்கள், பிறகு record செய்யுங்கள்:

1. Method ஐத் தேர்ந்தெடுங்கள் (உதா. *Card*).
2. Terminal அல்லது app காட்டும் **Approval code / reference** ஐ type செய்யுங்கள். Method க்கு reference கட்டாயம் என்றால், அது
   இல்லாமல் till தொடராது.
3. Cards க்கு **Card last 4 digits (optional)** ஐச் சேர்க்கலாம். முழு card numbers ஒருபோதும் save செய்யப்படாது.
4. <span class="ui">Complete sale</span> ஐத் தேர்ந்தெடுங்கள்.

## Split payments

Customer ஒரு பகுதியை cash ஆகவும் ஒரு பகுதியை card மூலமும் செலுத்துகிறார்:

1. முதல் method ஐத் தேர்ந்தெடுத்து **Amount** ஐ அந்த வழியில் செலுத்தும் பகுதிக்கு மாற்றுங்கள்.
2. <span class="ui">Take {amount}, then the rest</span> ஐத் தேர்ந்தெடுங்கள்.
3. **Still to pay** மீதத்தைக் காட்டும். அடுத்த method ஐத் தேர்ந்தெடுத்து முடியுங்கள்.

தவறு நடந்ததா? அதற்கு அருகில் <span class="ui">Remove this payment</span> ஐத் தேர்ந்தெடுங்கள். இன்னும் செலுத்த வேண்டியதை விட
அதிகமாக இருக்கக்கூடியது cash மட்டுமே (change கொடுக்க).

## Back office இல்

Payments **Sales** இல் sale இலும், cash **shift** இலும் (*Sales — card*, *Sales — QR*…), **Payments by method** report இலும்
தெரியும் — bank உடன் ஒப்பிட அதைப் பயன்படுத்துங்கள்.
