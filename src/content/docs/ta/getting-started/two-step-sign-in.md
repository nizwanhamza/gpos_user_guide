---
title: Two-step sign-in
description: Authenticator app code மூலம் back-office accounts ஐப் பாதுகாக்கவும், recovery codes ஐப் பாதுகாப்பாக வைக்கவும், phone தொலைந்தால் என்ன செய்வது.
sidebar:
  order: 5
---

**Two-step sign-in** on ஆக இருந்தால், password க்குப் பிறகு உங்கள் phone இல் உள்ள **authenticator app** இன் 6 இலக்க
code கேட்கப்படும். அப்போது யாராவது password ஐ ஊகித்தாலும் அல்லது leak ஆனாலும் உங்கள் business க்குள் நுழைய முடியாது.

இது [app.gpos.lk](https://app.gpos.lk) இல் உள்ள **back office** க்கு மட்டுமே பொருந்தும். **Till க்குப் பாதிப்பில்லை** —
cashiers தொடர்ந்து தங்கள் [POS PIN](/ta/till/unlock-and-users/) மூலம் till ஐ unlock செய்வார்கள்.

:::tip[எந்த app?]
எந்த authenticator app உம் வேலை செய்யும், உதா. **Microsoft Authenticator** அல்லது **Google Authenticator** (Android மற்றும்
iPhone இல் free). தொடங்கும் முன் install செய்யுங்கள்.
:::

## Setup செய்யுங்கள்

1. **My account** → **Two-step sign-in** க்குச் சென்று <span class="ui">Set up two-step sign-in</span> ஐத் தேர்ந்தெடுங்கள்.
2. Authenticator app இல் account ஐ add செய்து screen இல் உள்ள **QR code ஐ scan செய்யுங்கள்**.
   - Scan செய்ய முடியவில்லையா? QR code இன் கீழ் உள்ள **key** ஐ app இல் type செய்யுங்கள்.
   - அதே phone இல் setup செய்கிறீர்களா? **Open in the authenticator app (on this phone)** ஐத் தேர்ந்தெடுங்கள்.
3. App ஒவ்வொரு 30 விநாடிக்கும் மாறும் 6 இலக்க code ஐக் காட்டும். அதை type செய்து <span class="ui">Turn on</span> ஐத் தேர்ந்தெடுங்கள்.
4. GPOS **10 recovery codes — இந்த ஒரு முறை மட்டும்** காட்டும். அவற்றை எழுதி அல்லது print செய்து பாதுகாப்பான
   இடத்தில் வையுங்கள், **phone இல் அல்ல**. பிறகு <span class="ui">I have saved them</span> ஐத் தேர்ந்தெடுங்கள்.

இப்போது My account இல் *Two-step sign-in is on (10 recovery codes left)* எனக் காட்டும்.

## Two-step sign-in உடன் sign in செய்தல்

1. வழக்கம்போல் business code, email, password மூலம் sign in செய்யுங்கள்.
2. **Two-step sign-in** screen இல் authenticator app ஐ open செய்து தற்போதைய **6 இலக்க code** ஐ type செய்யுங்கள்.
3. <span class="ui">Continue</span> ஐத் தேர்ந்தெடுங்கள்.

Phone கையில் இல்லையா? அதற்குப் பதிலாக உங்கள் **recovery codes** இல் ஒன்றை type செய்யுங்கள். ஒவ்வொரு recovery code உம்
**ஒரு முறை** மட்டுமே வேலை செய்யும்; எத்தனை மீதம் என்று My account காட்டும்.

## எப்போது கட்டாயம்?

- **Staff க்கு — owner முடிவு செய்வார்.** **Settings → Two-step sign-in** இல் owner **Require two-step sign-in for all
  other users of the business** ஐ tick செய்யலாம். Setup செய்யாதவர்களிடம் அடுத்த sign in இல், எல்லாவற்றுக்கும் முன்
  அதைச் செய்யக் கேட்கப்படும் (*Set up two-step sign-in* screen). இந்த setting ஐ business owner மட்டுமே மாற்ற முடியும்.
- **Owner க்கு — உங்கள் service provider கட்டாயமாக்கலாம்.** Settings இல் *For you as the owner, GPOS requires it* அல்லது
  *For you as the owner it is optional: turn it on in My account* எனக் காட்டும்.

கட்டாயமில்லாவிட்டாலும் **owners மற்றும் administrators எப்போதும் இதைப் பயன்படுத்த** பரிந்துரைக்கிறோம்.

## Off செய்யுங்கள்

**My account → Two-step sign-in** இல் **Code from the app** (அல்லது recovery code) ஐ type செய்து <span class="ui">Turn off</span>
ஐத் தேர்ந்தெடுங்கள். உங்களுக்குக் கட்டாயம் என்றால், அடுத்த sign in இல் மீண்டும் setup செய்யக் கேட்கப்படும்.

## Phone தொலைந்தால் அல்லது மாற்றினால்

| யார் | என்ன செய்ய வேண்டும் |
|------|----------------------|
| **ஒரு employee** (cashier, manager…) | **Recovery code** மூலம் sign in செய்து, two-step sign-in ஐ off செய்து புதிய phone இல் மீண்டும் setup செய்யுங்கள். Recovery codes மீதம் இல்லையா? **Employees → (உங்கள் பெயர்) → Reset two-step sign-in** ஐ open செய்ய owner அல்லது administrator இடம் கேளுங்கள். பிறகு password மூலம் sign in செய்து மீண்டும் setup செய்யுங்கள். |
| **Owner** | 1. **Recovery code** மூலம் sign in செய்யுங்கள். 2. அல்லது உங்கள் business இன் **வேறு administrator** இடம் **Employees** இல் உங்கள் two-step sign-in ஐ reset செய்யச் சொல்லுங்கள். 3. இரண்டும் முடியாவிட்டால் மட்டுமே உங்கள் **service provider** ஐத் தொடர்பு கொள்ளுங்கள். |

:::caution[Owner account ஐ recover செய்ய நேரம் ஆகும் — வேண்டுமென்றே]
Business ஐத் திருட அதிகம் பயன்படும் வழி owner இன் account ஐக் கைப்பற்றுவதே. உதவும் முன் நீங்கள்தானா என்று service
provider சரிபார்ப்பார் — உதா. அவர்களிடம் உள்ள phone number க்குத் திரும்ப அழைத்து, அல்லது business registration மற்றும்
NIC ஐச் சரிபார்த்து. அவர்கள் ஒருபோதும் உங்கள் password ஐக் கேட்கமாட்டார்கள். ஒவ்வொரு recovery யும் எல்லா devices
இலிருந்தும் உங்களை sign out செய்யும், உங்கள் [audit log](/ta/reports/audit-log/) இல் record ஆகும், உங்களுக்கு email
அனுப்பப்படும். நீங்கள் கேட்காமல் அத்தகைய email வந்தால், உடனே உங்கள் service provider ஐத் தொடர்பு கொள்ளுங்கள்.

**Tip:** நம்பகமான இரண்டாவது நபருக்கு *Administrator* role ஐக் கொடுங்கள், அப்போது மீண்டும் நுழைய support ஐச்
சார்ந்திருக்க வேண்டியதில்லை.
:::

## தெரிந்துகொள்ள வேண்டியவை

- *"The code is not correct"* — phone இன் **date மற்றும் time automatic ஆக set ஆகியுள்ளதா** என்று பாருங்கள்; codes
  clock ஐச் சார்ந்தவை. அடுத்த code வரும் வரை காத்திருந்து மீண்டும் முயலுங்கள். ஒரே code ஐ இரண்டு முறை பயன்படுத்த முடியாது.
- புதிய phone ஆ? புதிய phone இல் two-step sign-in ஐ மீண்டும் setup செய்யுங்கள் — பழைய app entry தானாக மாறாது.
- [Forgot password?](/ta/getting-started/signing-in/) password ஐ மட்டுமே மாற்றும். Two-step sign-in on ஆகவே இருக்கும்.
