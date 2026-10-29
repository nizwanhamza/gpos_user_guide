---
title: Glossary
description: GPOS மற்றும் இந்த guide இல் பயன்படும் வார்த்தைகள்.
sidebar:
  order: 3
---

| Word | அர்த்தம் |
|------|-----------|
| **Added at till** | தெரியாத barcode க்கு cashier till இல் add செய்த product; Products இல் அதன் விவரங்களை complete செய்யுங்கள். |
| **Application** | உங்கள் business க்கு GPOS account ஐத் திறக்க app.gpos.lk/register இல் செய்யும் request, GPOS review செய்யும். |
| **Back office** | Owners மற்றும் managers க்கான GPOS web admin. |
| **Business code** | Sign in செய்ய email உடன் பயன்படுத்தும் உங்கள் business இன் சுருக்க code. |
| **Branch** | ஒரு shop அல்லது outlet. |
| **Register** | Branch இல் உள்ள checkout counter. ஒவ்வொன்றுக்கும் ஒரு till. |
| **Till** | விற்கப் பயன்படும் device மற்றும் screen, register க்கு pair செய்யப்பட்டது. POS என்றும் அழைக்கப்படும். |
| **Store / warehouse** | Stock வைக்கும் இடம். ஒவ்வொரு branch க்கும் ஒரு default உண்டு. |
| **Shift** | ஒரு till இல் விற்பனை செய்யும் காலம், open செய்வது (float உடன்) முதல் close செய்வது (count உடன்) வரை. யார் எப்போது open செய்தார் என்பதன்படி பெயர், உதா. `Shift-Chamari-20261027-8.00am`. |
| **Float** | Change கொடுக்க, shift open ஆகும்போது drawer இல் உள்ள cash. |
| **Cash in / cash out** | Sale அல்லது refund அல்லாத, drawer இல் போடும் அல்லது எடுக்கும் பணம். |
| **Blind close** | எதிர்பார்க்கும் அளவைப் பார்க்கும் முன் drawer ஐ எண்ணுதல். |
| **X report** | Shift இன் நடுவில் summary; shift open ஆகவே இருக்கும். |
| **Z report** | Close செய்த பிறகு shift இன் இறுதி summary. |
| **Reconciled** | Till இன் ஒவ்வொரு record உம் back office க்குக் கிடைத்த close ஆன shift. |
| **POS PIN** | Till ஐ unlock செய்யும் 6 இலக்க எண். |
| **Two-step sign-in** | Password மற்றும் authenticator app code உடன் back office இல் sign in செய்தல். |
| **Authenticator app** | ஒவ்வொரு 30 விநாடிக்கும் புதிய 6 இலக்க code ஐக் காட்டும் phone app (Microsoft Authenticator, Google Authenticator…). |
| **Recovery code** | Phone கையில் இல்லாதபோது two-step sign-in க்கான 10 ஒருமுறை codes இல் ஒன்று. |
| **PDPA** | இலங்கையின் Personal Data Protection Act. Customers தங்கள் data இன் copy அல்லது அதை erase செய்யக் கேட்கலாம். |
| **Receipt number** | `BRANCH-REGISTER-000123`, till வாரியாக எண் இடப்படும்; replacement till `.2`, `.3`… ஐச் சேர்க்கும். ஒவ்வொரு receipt இன் கீழும் barcode ஆகவும் print ஆகும். |
| **SKU** | Product variant க்கான உங்கள் சொந்த code. |
| **Variant** | Product இன் விற்கக்கூடிய ஒரு version (size, colour). |
| **Pack barcode** | பல units க்கு ஒரே barcode, `code:quantity` என எழுதப்படும். |
| **In-store barcode** | Barcode இல்லாத item க்கு GPOS உருவாக்கும் barcode: `20` இல் தொடங்கும் EAN-13, எனவே manufacturer இன் barcode உடன் ஒருபோதும் மோதாது. |
| **Barcode label** | Item இன் பெயர், barcode, (விரும்பினால்) price மற்றும் shop பெயர் உள்ள sticker, label printer அல்லது A4 sheet இல் print செய்யப்படும். |
| **Tax group** | Product க்குக் கொடுப்பது; ஒன்று அல்லது பல tax rates ஐ இணைக்கும். |
| **Quick-pick** | Barcodes இல்லாத items க்கு till இல் உள்ள product button. |
| **Opening stock** | நீங்கள் தொடங்கும் quantities. |
| **Adjustment / write-off** | Reason உடன் stock correction / stock loss. |
| **Stock count** | Shelves ஐ எண்ணி differences ஐ post செய்தல். |
| **Transfer** | ஒரு store இலிருந்து இன்னொன்றுக்கு stock ஐ நகர்த்துதல். |
| **Batch / expiry** | Expiry date உடன் receive செய்த item இன் lot. |
| **Reorder level** | Item low stock ஆகக் கணக்கிடப்படும் quantity. |
| **Average cost** | Store இல் item இன் running average purchase cost. |
| **PO** | Purchase order (`PO-…` என எண் இடப்படும்). |
| **Go Green** | Receipt ஐ print செய்யாமல் sale ஐ முடித்தல். |
| **GRN** | Goods received note — book செய்த delivery (`GRN-…` என எண் இடப்படும்). |
| **Void** | அதே shift இல் முழு sale ஐயும் cancel செய்தல். |
| **Return** | Refund உடன் sale இன் சில அல்லது எல்லா items ஐயும் திரும்பப் பெறுதல். |
| **Sync** | Till தன் வேலையை back office க்கு அனுப்பி updates ஐப் பெறுதல். |
| **Sync issue** | Record ஆனபடியே back office ஏற்க முடியாத till இன் ஒன்று; administrator முடிவு செய்வார். |
| **Robot check** | Public pages இல் (sign-in, passwords, applications) நீங்கள் bot அல்ல, மனிதர் என்று சரிபார்க்கும் விரைவான check. |
| **Support session** | உங்கள் service provider உங்கள் account க்குள் உதவுதல்; எப்போதும் காட்டப்படும், record ஆகும். |
| **Gocart.lk** | GPOS இலிருந்தே உங்கள் சொந்த shop ஐத் திறக்கக்கூடிய online marketplace (**Sell online**). |
| **Sold online** | Gocart.lk இல் order செய்யப்பட்ட item க்கான stock movement. |
