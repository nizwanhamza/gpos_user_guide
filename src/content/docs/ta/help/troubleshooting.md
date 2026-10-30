---
title: Troubleshooting
description: Back office மற்றும் till இல் அடிக்கடி வரும் பிரச்சினைகளுக்கு விரைவான தீர்வுகள்.
sidebar:
  order: 1
---

## Sign in செய்தல்

**"Incorrect business code, email or password"**
முதலில் **business code** ஐச் சரிபாருங்கள் — business இன் எல்லா employees உம் ஒரே code ஐப் பயன்படுத்துவார்கள். பிறகு email மற்றும்
password ஐச் சரிபாருங்கள் (passwords இல் capital மற்றும் சிறிய எழுத்துகள் வேறுபடும்).

**"Too many attempts. Please wait a minute and try again"**
ஒரு நிமிடம் காத்திருந்து கவனமாக மீண்டும் முயலுங்கள். தேவையெனில் [Forgot password?](/ta/getting-started/signing-in/) ஐப் பயன்படுத்துங்கள்.

**"This link is invalid, was already used or has expired"**
Password reset links ஒரு முறை, 30 நிமிடங்களுக்கு மட்டுமே வேலை செய்யும். புதியதைக் கேளுங்கள்.

**"The robot check failed; please try again"**
Sign-in, password, application pages நீங்கள் robot அல்ல என்று நிரூபிக்கக் கேட்கலாம். Check முடியும் வரை காத்திருங்கள் (அல்லது tick
செய்யுங்கள்), பிறகு மீண்டும் முயலுங்கள். தொடர்ந்து fail ஆனால் VPNs அல்லது ad blockers ஐ off செய்யுங்கள்.

**Approve ஆன பிறகு password ஐத் தேர்ந்தெடுக்கும் link expire ஆகிவிட்டது**
அது 7 நாட்கள் valid. புதியதற்கு GPOS Support ஐத் தொடர்பு கொள்ளுங்கள்.

**"We are not taking new applications online at the moment"**
தற்போது online applications மூடப்பட்டுள்ளன. உங்கள் business ஐ register செய்ய GPOS Support ஐத் தொடர்பு கொள்ளுங்கள்.

**"The code is not correct"** (two-step sign-in)
Authenticator app இன் தற்போதைய code ஐப் பயன்படுத்துங்கள், phone இன் date மற்றும் time automatic ஆக set ஆகியுள்ளதா என்று பாருங்கள்.
Recovery code ஐயும் பயன்படுத்தலாம். [Two-step sign-in](/ta/getting-started/two-step-sign-in/) ஐப் பாருங்கள்.

**Authenticator app உள்ள phone தொலைந்துவிட்டது**
Recovery code மூலம் sign in செய்யுங்கள், அல்லது Employees இல் **Reset two-step sign-in** செய்ய owner அல்லது administrator இடம் கேளுங்கள்.
Owners: [Two-step sign-in](/ta/getting-started/two-step-sign-in/) ஐப் பாருங்கள்.

**"Set up two-step sign-in first"**
உங்கள் business க்கு (owners க்கு உங்கள் service provider க்கு) two-step sign-in கட்டாயம். **Set up two-step sign-in** screen ஐப் பின்பற்றுங்கள்.

**"Accept the terms first"**
அடுத்த sign in இல் owner update செய்த terms of service ஐ accept செய்ய வேண்டும்.

**"This business account is suspended"**
உங்கள் service provider ஐத் தொடர்பு கொள்ளுங்கள்.

**"You do not have permission to do this"**
உங்கள் role அதை அனுமதிக்கவில்லை. Owner அல்லது administrator இடம் கேளுங்கள் — [Roles and permissions](/ta/business/roles/) ஐப் பாருங்கள்.

**"This feature is not included in your plan" / "Your plan limit has been reached"**
உதா. உங்கள் plan க்கு மேல் இன்னொரு branch அல்லது employee ஐ add செய்யும்போது. Plan ஐ மாற்ற உங்கள் service provider ஐத் தொடர்பு
கொள்ளுங்கள். Disable செய்த employees மற்றும் inactive branches கணக்கிடப்படாது. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.

**இந்த guide இல் உள்ள menu item காணவில்லை**
ஒன்று feature உங்கள் plan இல் இல்லை, அல்லது உங்கள் role இல் அது இல்லை. Dashboard இல் **Plan** card ஐப் பாருங்கள் (உங்களிடம் உள்ள
features ஐ அது பட்டியலிடும்), உங்கள் role பற்றி owner இடம் கேளுங்கள்.

## Till ஐ pair செய்தல்

**"This code has expired"** — codes 15 நிமிடங்கள் மட்டுமே. <span class="ui">New code</span> ஐத் தேர்ந்தெடுங்கள்.

**"Add a register to a branch first"** — **Branches** க்குச் சென்று register ஐ add செய்யுங்கள்.

**"This till needs a secure connection"** — till ஐ `https://` உடன் **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** இல் open
செய்யுங்கள். இன்னும் தெரிந்தால் உங்கள் service provider ஐத் தொடர்பு கொள்ளுங்கள்.

**"Setting up needs an internet connection"** — device ஐ connect செய்து மீண்டும் முயலுங்கள்.

## Till இல்

**"Who is using the till?" இல் என் பெயர் இல்லை**
உங்களுக்கு **POS PIN** மற்றும் **இந்த branch இல்** விற்கக்கூடிய role தேவை. [My account](/ta/getting-started/my-account/) இல் PIN ஐ set
செய்யுங்கள் அல்லது administrator இடம் கேளுங்கள், பிறகு till sync ஆகும் வரை காத்திருங்கள் (அல்லது <span class="ui">Sync now</span> ஐத் தேர்ந்தெடுங்கள்).

**"Too many wrong PINs. Try again in …"**
காட்டப்படும் நேரம் காத்திருங்கள். PIN மறந்துவிட்டால் புதியதை set செய்ய administrator இடம் கேளுங்கள்.

**விற்க முடியவில்லை — "No shift open: sales are off"**
Shift open ஆகும் வரை till prices ஐச் சரிபார்க்க மட்டுமே முடியும். முதலில் shift ஐ open செய்யுங்கள் (அல்லது அனுமதி உள்ளவரைக்
கேளுங்கள்): [Cash shifts on the till](/ta/till/shifts/) ஐப் பாருங்கள்.

**Scan செய்த item க்கு "Nothing found"**
Barcode எந்த product இலும் இல்லை. Back office இல் product இன் **Barcodes** இல் அதைச் சேர்த்து till ஐ sync செய்யுங்கள். அதுவரை பெயர்
மூலம் search செய்யுங்கள் — அல்லது உங்கள் plan இல் இருந்தால் [till இலேயே add செய்யுங்கள்](/ta/till/add-product-at-till/).

**"No price" அல்லது "Not for sale"**
Product க்கு இன்னும் price இல்லை, அல்லது inactive/archived. **Products** இல் சரிசெய்யுங்கள்.

**"Prices may be out of date"**
Till சிறிது காலமாக sync ஆகவில்லை. Internet connection ஐச் சரிபார்த்து <span class="ui">Sync now</span> ஐத் தேர்ந்தெடுங்கள்.

**Cash in/out இல் "No reasons are set up for this"**
[Cash in/out reasons](/ta/business/cash-reasons/) ஐ add அல்லது switch on செய்யுங்கள்.

**"No manager can approve on this till"**
Manager க்கு POS PIN மற்றும் இந்த branch க்கு access தேவை.

**Receipt அகலமாக, சிறியதாக, அல்லது header மற்றும் URL உடன் உள்ளது**
[Till settings](/ta/till/shortcuts-and-settings/) இல் **Receipt paper** ஐ 58 அல்லது 80 mm க்கு set செய்யுங்கள், browser இன் print dialog
இல் *Headers and footers* ஐ off செய்யுங்கள்.

## Sync

**"Sync error · … need attention"**
Sync panel ஐ open செய்து <span class="ui">Try again</span> ஐத் தேர்ந்தெடுங்கள். தொடர்ந்தால் administrator [POS devices](/ta/business/pos-devices/)
இல் *Sync issues* ஐச் சரிபார்ப்பார்.

**POS devices இல் "Needs re-authorising"**
Till க்கு 90 நாட்களாகத் தொடர்பு இல்லை. <span class="ui">Re-authorise</span> ஐத் தேர்ந்தெடுத்து புதிய code ஐ till இல் type செய்யுங்கள்.
Waiting sales அப்படியே இருக்கும்.

**Sales இன்னும் waiting ஆக இருக்கும்போது till உடைந்தது**
இன்னும் start ஆனால் connect செய்து <span class="ui">Sync now</span> ஐத் தேர்ந்தெடுங்கள், அல்லது waiting வேலைகளை <span class="ui">Export (JSON)</span>
செய்யுங்கள். பிறகு [POS devices](/ta/business/pos-devices/) இல் *Till ஐ மாற்றுதல் படிப்படியாக* ஐப் பின்பற்றுங்கள்.

**"This till is not registered"**
Till revoke செய்யப்பட்டது, அல்லது அதன் authorisation expire ஆனது. Administrator **POS devices** இல் <span class="ui">Re-authorise</span> ஐத்
தேர்ந்தெடுப்பார், நீங்கள் புதிய code ஐ உள்ளிடுவீர்கள். Waiting வேலைகள் அப்படியே இருக்கும்.

**Till இல் உள்ள catalog தவறாகத் தெரிகிறது**
Sync panel → <span class="ui">Download everything again</span>. Waiting operations அப்படியே இருக்கும்.

**POS devices இல் "Clock off by … min"**
Till device இல் சரியான date, time, time zone ஐ set செய்யுங்கள் (automatic time ஐ on செய்யுங்கள்).

## Data மற்றும் reports

**Stock negative ஆக உள்ளது**
பொதுவாக opening stock உள்ளிடப்படவில்லை, அல்லது delivery GPOS இல் receive செய்யப்படவில்லை. காணாத [goods received](/ta/purchasing/receiving-goods/)
ஐ post செய்யுங்கள் அல்லது [stock count](/ta/inventory/counts/) செய்யுங்கள்.

**Report இல் "These figures may still change"**
Till இன்னும் அனுப்ப வேண்டிய sales உள்ளன, அல்லது Sync issues இல் ஏதோ காத்திருக்கிறது. பின்னர் மீண்டும் பாருங்கள்.

**"Someone else's change" / "This conflicts with existing data"**
வேறொருவர் அதே record ஐ save செய்தார். <span class="ui">Reload latest</span> ஐத் தேர்ந்தெடுத்து உங்கள் மாற்றத்தை மீண்டும் செய்யுங்கள்.

## உதவி கேட்கும்போது

உங்கள் service provider ஐத் தொடர்பு கொள்ளும்போது இவற்றைச் சொல்லுங்கள்:

- உங்கள் **Business code**;
- **version** — back office menu இன் கீழே (*Version …*), அல்லது till இல் sync panel இல் **This till** இன் கீழ்
  ([Offline and sync](/ta/till/offline-sync/));
- நீங்கள் என்ன செய்தீர்கள், என்ன எதிர்பார்த்தீர்கள், screen இல் இருந்த message சரியாக.
