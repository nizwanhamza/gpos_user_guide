---
title: Till ஐ setup செய்யுங்கள்
description: Till க்கு என்ன தேவை, computer அல்லது tablet ஐ GPOS till ஆக register செய்வது எப்படி.
sidebar:
  order: 1
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Selling at the counter (POS), cash shifts and tills** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu
இல் தெரியாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Till** என்பது checkout screen. அது counter computer, laptop அல்லது tablet இன் browser இல் run ஆகும், **internet இல்லாமலும்
தொடர்ந்து வேலை செய்யும்**.

## என்ன தேவை

- **Chrome அல்லது Edge** (பரிந்துரைக்கப்படுகிறது) உள்ள computer, laptop அல்லது tablet (Windows, Android அல்லது iPad).
- **Setup க்கு internet connection** — பிறகு offline ஆகவும் வேலை செய்யும்.
- கட்டாயமில்லை: **barcode scanner** (USB அல்லது Bluetooth, "keyboard" mode இல் set செய்தது), device இல் install செய்த
  **receipt printer** (58 mm அல்லது 80 mm), மற்றும் cash drawer.
- Back office இல் ஒரு **register** ([Branches](/ta/business/branches/) ஐப் பாருங்கள்).

## Till ஐ register செய்யுங்கள்

1. **Back office இல்** **POS devices** க்குச் சென்று register க்கு அருகில் <span class="ui">Set up a till</span> ஐத் தேர்ந்தெடுங்கள்.
   அந்த screen ஐ open ஆக வையுங்கள்; அது 15 நிமிடங்கள் valid ஆன **code** மற்றும் **QR code** ஐக் காட்டும்.
2. **Till device இல்** Chrome அல்லது Edge இல் **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** ஐ open செய்யுங்கள். (அதே
   device இல் back office இல் sign in ஆகியுள்ளீர்களா? Menu இல் **POS till ↗** ஐத் தேர்ந்தெடுங்கள்.)
3. Till **Set up this till** ஐக் காட்டும். **Setup code** ஐ type செய்யுங்கள், அல்லது device இன் camera மூலம் QR code ஐ scan செய்யுங்கள்.
4. **Name of this till** ஐ உள்ளிடுங்கள், உதா. *Front counter*.
5. <span class="ui">Register this till</span> ஐத் தேர்ந்தெடுங்கள்.
6. Till **Downloading the catalog…** ஐக் காட்டும் — முடியும் வரை காத்திருங்கள்.

பிறகு till **Who is using the till?** ஐக் காட்டும் — அது ready. [Unlocking the till](/ta/till/unlock-and-users/) உடன் தொடருங்கள்.

## App ஆக install செய்யுங்கள் (பரிந்துரைக்கப்படுகிறது)

Chrome அல்லது Edge இன் address bar இல் **Install** ஐப் பயன்படுத்துங்கள் (அல்லது browser menu → *Install app*; Android இல் *Add to
Home screen*). அப்போது till **GPOS** பெயர் மற்றும் icon உடன் app ஆகத் தெரியும், தனி window இல் open ஆகும், வேகமாக start ஆகும்,
browser offline data ஐ clear செய்வதற்கான வாய்ப்பும் மிகக் குறைவு.

:::caution[Till இன் data ஐப் பாதுகாப்பாக வையுங்கள்]
அனுப்பும் வரை till waiting sales ஐ device இல் save செய்யும். Till இல் browser data ஐ clear செய்யாதீர்கள், private/incognito
window ஐப் பயன்படுத்தாதீர்கள், browser ஐ uninstall செய்யாதீர்கள். **Sync and this till** panel இல் storage *may be cleared by
the browser* எனக் காட்டினால், till ஐ app ஆக install செய்து தொடர்ந்து பயன்படுத்துங்கள்.
:::

## "This till needs a secure connection"

Till ஐ **https://** address மூலம் open செய்ய வேண்டும். Address bar இல் சரியாக **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)**
உள்ளதா என்று பாருங்கள் — `http://` அல்ல. Message தொடர்ந்தால் உங்கள் service provider ஐத் தொடர்பு கொள்ளுங்கள்.

## Till ஐ மாற்றுதல் அல்லது நகர்த்துதல்

- **புதிய device:** எதுவும் waiting இல்லாத வரை பழைய till ஐ sync செய்யுங்கள், அதை decommission செய்யுங்கள், பிறகு அதே register இல்
  புதியதை setup செய்யுங்கள் — [POS devices](/ta/business/pos-devices/) இல் *Till ஐ மாற்றுதல் படிப்படியாக* ஐப் பாருங்கள்.
- **"This till is not registered":** administrator POS devices இல் அதற்கு <span class="ui">Re-authorise</span> ஐத் தேர்ந்தெடுப்பார், நீங்கள்
  புதிய code ஐ till இல் type செய்வீர்கள். Waiting வேலைகள் அப்படியே இருக்கும்.
