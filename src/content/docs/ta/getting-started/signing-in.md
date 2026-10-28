---
title: Sign in செய்தல்
description: GPOS back office இல் sign in செய்வது, முதல் password ஐ மாற்றுவது, மறந்த password ஐ reset செய்வது எப்படி.
sidebar:
  order: 1
---

**Back office** என்பது உங்கள் business இன் web admin. Owners, managers, inventory staff, accountants புதிய
browser (Chrome, Edge, Firefox அல்லது Safari) உள்ள எந்த computer இலிருந்தும் இதைப் பயன்படுத்துவார்கள்.

:::note[Back office ஆ till ஆ?]
Cashiers பொதுவாக back office இல் sign in செய்ய **வேண்டியதில்லை**. அவர்கள் 6 இலக்க **POS PIN** மூலம் till ஐ
unlock செய்வார்கள் — [Unlocking the till](/ta/till/unlock-and-users/) ஐப் பாருங்கள்.
:::

## Sign in செய்யுங்கள்

1. Browser இல் **[app.gpos.lk](https://app.gpos.lk)** ஐ open செய்யுங்கள்.
2. நிரப்புங்கள்:
   - **Business code** — உங்கள் business இன் சுருக்க code, உதா. `kandy-mart`. இது dashboard இலும் menu இல்
     business பெயரின் கீழும் காட்டப்படும். Business இன் எல்லா employees உம் ஒரே code ஐப் பயன்படுத்துவார்கள்.
   - **Email** — உங்கள் சொந்த email address.
   - **Password** — உங்கள் சொந்த password.
3. **Robot check** காட்டப்பட்டால் அதை complete செய்து <span class="ui">Sign in</span> ஐத் தேர்ந்தெடுங்கள்.
4. உங்களுக்கு **two-step sign-in** on ஆக இருந்தால், authenticator app இல் உள்ள 6 இலக்க **Code** (அல்லது recovery
   code) ஐ type செய்து <span class="ui">Continue</span> ஐத் தேர்ந்தெடுங்கள். [Two-step sign-in](/ta/getting-started/two-step-sign-in/) ஐப் பாருங்கள்.

**Incorrect business code, email or password** எனக் காட்டினால் மூன்றையும் சரிபாருங்கள் — அதிகமாகத் தவறுவது
business code தான்.

இன்னும் GPOS customer இல்லையா? Sign-in page இல் **New business? Apply for an account** மற்றும் **Check my
application** உள்ளன — [GPOS க்கு apply செய்யுங்கள்](/ta/getting-started/apply/) ஐப் பாருங்கள்.

## முதல் sign in

:::note[Online ஆக apply செய்தீர்களா?]
உங்களுக்கு temporary password கிடைக்காது. முதலில் approval email இல் உள்ள link ஐ open செய்து password ஐத்
தேர்ந்தெடுங்கள், பிறகு sign in செய்யுங்கள்.
:::

Administrator உங்கள் account ஐ உருவாக்கும்போது (அல்லது password ஐ reset செய்யும்போது) உங்களுக்கு **temporary
password** கிடைக்கும். முதல் sign in இல் GPOS **புதிய password ஐ set செய்ய** கேட்கும்:

1. **Temporary password** ஐ type செய்யுங்கள்.
2. **New password** ஐ type செய்யுங்கள் — குறைந்தது **12 எழுத்துகள்**. `blue-tea-at-four-pm` போன்ற நினைவில்
   வைக்க எளிதான வாக்கியம் நல்லது.
3. அதையே **Confirm new password** இல் மீண்டும் type செய்து <span class="ui">Change password</span> ஐத் தேர்ந்தெடுங்கள்.

இதைச் செய்யும் வரை back office ஐப் பயன்படுத்த முடியாது. விரும்பினால் <span class="ui">Sign out instead</span> ஐத் தேர்ந்தெடுங்கள்.

## Sign in செய்த பிறகு தெரியக்கூடிய screens

### Terms of service (owners)

முதல் sign in இலும், புதிய version வெளியாகும் ஒவ்வொரு முறையும், **owner** இடம் **Terms of service**, **Privacy
policy**, **Data processing terms** ஐ accept செய்யக் கேட்கப்படும்.

1. ஒவ்வொரு document ஐயும் open செய்து படியுங்கள் (links version ஐக் காட்டும்).
2. **I have read and accept these documents on behalf of the business** ஐ tick செய்யுங்கள்.
3. <span class="ui">Accept and continue</span> ஐத் தேர்ந்தெடுங்கள்.

Owner accept செய்யும் வரை owner back office ஐப் பயன்படுத்த முடியாது (*Accept the terms first*). மற்ற employees
இடம் கேட்கப்படாது, அவர்கள் தொடர்ந்து வேலை செய்யலாம், tills தொடர்ந்து விற்பனை செய்யும்.

### Two-step sign-in ஐ setup செய்தல்

உங்கள் account க்கு two-step sign-in **கட்டாயம்** ஆகவும் இன்னும் setup செய்யாமலும் இருந்தால், GPOS எல்லாவற்றுக்கும்
முன் **Set up two-step sign-in** ஐக் காட்டும். Screen இல் உள்ள படிகளைப் பின்பற்றுங்கள் —
[Two-step sign-in](/ta/getting-started/two-step-sign-in/) ஐப் பாருங்கள். <span class="ui">Sign out</span> செய்து பிறகும்
செய்யலாம், ஆனால் முடிக்கும் வரை back office ஐப் பயன்படுத்த முடியாது.

## Password மறந்துவிட்டதா?

1. Sign-in page இல் <span class="ui">Forgot password?</span> ஐத் தேர்ந்தெடுங்கள்.
2. உங்கள் **Business code** மற்றும் **Email** ஐ type செய்து <span class="ui">Send link</span> ஐத் தேர்ந்தெடுங்கள்.
3. Email ஐ open செய்து link ஐப் பின்பற்றுங்கள் (**30 நிமிடங்கள்** valid, ஒரு முறை மட்டுமே வேலை செய்யும்). வரவில்லையெனில்
   spam folder ஐப் பாருங்கள்.
4. புதிய password ஐத் தேர்ந்தெடுத்து <span class="ui">Save new password</span> ஐத் தேர்ந்தெடுங்கள்.

பிறகு எல்லா இடங்களிலிருந்தும் sign out ஆகும், புதிய password மூலம் மீண்டும் sign in செய்யுங்கள்.

:::note
Password ஐ reset செய்வதால் two-step sign-in off ஆகாது. Phone உம் தொலைந்துவிட்டதா?
[Two-step sign-in](/ta/getting-started/two-step-sign-in/) இல் *Phone தொலைந்தால் அல்லது மாற்றினால்* ஐப் பாருங்கள்.
:::

:::tip[Email access இல்லையா?]
**Employees** இல் உங்கள் **password ஐ reset செய்ய** owner அல்லது administrator இடம் கேளுங்கள். உங்களுக்குக் கொடுக்க
அவர்களுக்கு temporary password கிடைக்கும்; sign in செய்யும்போது உங்கள் சொந்த password ஐத் தேர்ந்தெடுங்கள்.
:::

## அதிக முயற்சிகள்

தொடர்ந்து பல தவறான passwords போட்டால், மீண்டும் முயலும் முன் **ஒரு நிமிடம் காத்திருக்க** GPOS கேட்கும். Passwords
ஐ ஊகிப்பவர்களிடமிருந்து உங்கள் business ஐப் பாதுகாக்கவே இது.

## Sign out செய்தல்

Menu இன் கீழே <span class="ui">Sign out</span> ஐத் தேர்ந்தெடுங்கள். Shared computers இல் எப்போதும் sign out செய்யுங்கள்.
