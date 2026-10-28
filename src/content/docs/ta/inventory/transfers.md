---
title: Stores இடையே transfers
description: ஒரு store அல்லது branch இலிருந்து இன்னொன்றுக்கு stock ஐ அனுப்புங்கள், வந்ததை record செய்யுங்கள்.
sidebar:
  order: 5
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
**Stock transfers** ஒரு plan feature (அதற்கு **Stock control** தேவை). அது இல்லாவிட்டால் **Transfers** tab இருக்காது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Transfer** இரண்டு stores இடையே stock ஐ நகர்த்தும் — உதா. central warehouse இலிருந்து branch க்கு. **Send** செய்தால் முதல் store
இலிருந்து stock எடுக்கப்படும் (அது *in transit*); பெறும் store **வந்ததை** உள்ளிடும். குறைந்தவை reason உடன் record ஆகும்.

## உருவாக்கி அனுப்புங்கள்

1. **Inventory → Transfers** → <span class="ui">New transfer</span> க்குச் செல்லுங்கள்.
2. **From store** மற்றும் **To store** ஐத் தேர்ந்தெடுங்கள்.
3. Items மற்றும் quantities ஐ add செய்யுங்கள்.
4. பின்னர் முடிக்க <span class="ui">Save draft</span>, அல்லது அதை open செய்து <span class="ui">Send (take out of stock)</span> ஐத் தேர்ந்தெடுங்கள்.

## Receive செய்யுங்கள்

பெறும் store இல்:

1. Transfer ஐ open செய்யுங்கள் (status **In transit**).
2. ஒவ்வொரு item க்கும் **Arrived** அளவை உள்ளிடுங்கள். குறைவாக வந்தால் **Why less arrived** ஐ உள்ளிடுங்கள்.
3. <span class="ui">Receive into stock</span> ஐத் தேர்ந்தெடுங்கள்.

Transfer அதை யார் உருவாக்கினார், அனுப்பினார், receive செய்தார், எப்போது என்று காட்டும். Draft ஐ <span class="ui">Cancel transfer</span>
மூலம் cancel செய்யலாம்.

Statuses: *Draft* → *In transit* → *Received* (அல்லது *Cancelled*).

*Transfer stock between locations* permission தேவை.
