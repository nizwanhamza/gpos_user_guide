---
title: Employees
description: Staff ஐ add செய்யுங்கள், branch அல்லது register க்கு roles கொடுங்கள், POS PINs ஐ set செய்யுங்கள், passwords ஐ reset செய்யுங்கள், accounts ஐ disable செய்யுங்கள்.
sidebar:
  order: 3
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
உங்கள் plan **active employees** எண்ணிக்கையை வரம்பிடலாம். Disable செய்த employees கணக்கிடப்படமாட்டார்கள்.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

GPOS ஐப் பயன்படுத்தும் ஒவ்வொருவருக்கும் — back office இலோ till இலோ — அவரவர் சொந்த **employee** account உண்டு.
Accounts ஐ ஒருபோதும் share செய்யாதீர்கள்: யார் என்ன செய்தார்கள் என்று GPOS record செய்யும்.

## Employee ஐ add செய்யுங்கள்

1. **Employees** → <span class="ui">Add employee</span> க்குச் செல்லுங்கள்.
2. **Full name**, **Email**, **Initial password** (குறைந்தது 12 எழுத்துகள்) ஐ type செய்யுங்கள்.
3. **Role** ஐயும் அது பொருந்தும் இடத்தையும் தேர்ந்தெடுங்கள்:
   - **Branch** — அவர்கள் வேலை செய்யும் branch, அல்லது *All branches*.
   - **Register** — பொதுவாக *Whole branch*; ஒரு counter க்கு மட்டும் வரம்பிட register ஐத் தேர்ந்தெடுங்கள்.
4. மேலும் தேவையா? <span class="ui">+ Add another role</span> ஐத் தேர்ந்தெடுங்கள் — உதா. Kandy இல் *Cashier*, Colombo இல் *Manager*.
5. <span class="ui">Create employee</span> ஐத் தேர்ந்தெடுங்கள்.

Employee க்கு business code, email, initial password ஐக் கொடுங்கள். முதல் sign in இல் அவர்கள் தங்கள் சொந்த password ஐத்
தேர்ந்தெடுப்பார்கள். எத்தனை employees இருக்கலாம் என்பது உங்கள் plan ஐப் பொறுத்தது.

## Employee க்கு POS PIN ஐ set செய்யுங்கள்

Cashiers **6 இலக்க PIN** மூலம் till ஐ unlock செய்வார்கள். அவர்களுக்கு set செய்ய:

1. Employee ஐத் தேர்ந்தெடுத்து **Manage {name}** ஐ open செய்யுங்கள்.
2. <span class="ui">Set POS PIN</span> ஐத் தேர்ந்தெடுத்து, PIN ஐ இரண்டு முறை type செய்து save செய்யுங்கள்.
3. PIN ஐ அவர்களிடம் **நேரில்** சொல்லுங்கள்.

Tills க்கு PIN அடுத்த sync இல் கிடைக்கும். Employees [My account](/ta/getting-started/my-account/) இல் தங்கள் PIN ஐ set
செய்யவோ மாற்றவோ முடியும். POS PIN உள்ள, அந்த branch இல் விற்க அனுமதி உள்ளவர்கள் மட்டுமே அந்த branch இன் till இல் தெரிவார்கள்.

## Roles ஐ மாற்றுங்கள்

Employee ஐ open செய்து roles, branches அல்லது registers ஐ மாற்றி <span class="ui">Save roles</span> ஐத் தேர்ந்தெடுங்கள்.
மாற்றங்கள் employee இன் அடுத்த action இல் apply ஆகும் — sign out செய்ய வேண்டியதில்லை.

## Details மற்றும் language ஐ edit செய்யுங்கள்

பெயர், email அல்லது **Language** (*Business default*, English, Sinhala அல்லது Tamil) ஐ மாற்ற <span class="ui">Edit</span> ஐத் தேர்ந்தெடுங்கள்.

## Password ஐ reset செய்யுங்கள்

ஒருவர் password ஐ மறந்து email link ஐப் பயன்படுத்த முடியாவிட்டால்:

1. Employee ஐ open செய்து <span class="ui">Reset password</span> ஐத் தேர்ந்தெடுங்கள்.
2. GPOS **temporary password — ஒரு முறை மட்டும்** காட்டும். அதை employee க்குக் கொடுங்கள்.
3. அவர்கள் எல்லா இடங்களிலிருந்தும் sign out ஆவார்கள், அடுத்த sign in இல் புதிய password ஐத் தேர்ந்தெடுக்க வேண்டும்.

## Two-step sign-in ஐ reset செய்யுங்கள்

Employee இன் **phone தொலைந்துவிட்டால்** (recovery codes உடன்), employee ஐ open செய்து <span class="ui">Reset two-step sign-in</span>
ஐத் தேர்ந்தெடுத்து confirm செய்யுங்கள். அவர்களின் two-step sign-in off ஆகும் (*Two-step sign-in was turned off*). அவர்கள்
password மூலம் sign in செய்து புதிய phone இல் மீண்டும் setup செய்வார்கள் — உங்கள் business க்குக் கட்டாயம் என்றால் உடனே.

கேட்பது உண்மையில் அவர்கள்தானா என்று சரிபார்த்த பிறகே இதைச் செய்யுங்கள். *Create, update and disable employees and
their roles* permission தேவை.

## Disable அல்லது enable செய்யுங்கள்

ஒருவர் விலகும்போது <span class="ui">Disable</span> ஐத் தேர்ந்தெடுங்கள். அவர்கள் **உடனே sign out ஆவார்கள்**, இனி back office
அல்லது tills ஐப் பயன்படுத்த முடியாது. அவர்களின் history இருக்கும். Account ஐ மீண்டும் கொண்டுவர <span class="ui">Enable</span> ஐத் தேர்ந்தெடுங்கள்.

:::tip
Dashboard இல் உள்ள *Active employees* count உங்கள் plan limit க்கு எவ்வளவு அருகில் உள்ளீர்கள் என்று காட்டும். Disable செய்த
employees கணக்கிடப்படமாட்டார்கள்.
:::
