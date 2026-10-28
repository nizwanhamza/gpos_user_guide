---
title: Opening stock
description: GPOS ஐப் பயன்படுத்தத் தொடங்கும்போது shelves இல் உள்ளதை, rows ஐ paste செய்து அல்லது CSV ஐ upload செய்து உள்ளிடுங்கள்.
sidebar:
  order: 2
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
இந்த page **Stock control** feature இன் பகுதி. அது உங்கள் plan இல் இல்லாவிட்டால் menu இல் தெரியாது.
[Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Opening stock** உங்கள் தொடக்க quantities ஐ set செய்யும், அப்போது முதல் நாளிலிருந்தே stock levels சரியாக இருக்கும். முடிந்தால் products
உருவான பிறகு, விற்பனையைத் தொடங்கும் முன் இதைச் செய்யுங்கள்.

## Opening stock ஐ உள்ளிடுங்கள்

1. Shelves இல் உள்ளதை எண்ணுங்கள்.
2. **Inventory → Opening stock** க்குச் சென்று **Choose a store**.
3. ஒன்று:
   - Spreadsheet இலிருந்து **Rows** இல் **rows ஐ paste செய்யுங்கள்** — ஒரு line க்கு ஒரு item: **SKU அல்லது barcode**, **quantity**,
     விரும்பினால் **unit cost**, tabs மூலம் பிரித்து (Excel இலிருந்து copy செய்தபடி), உதா. `TEA-100	24	62.50`; அல்லது
   - <span class="ui">Download template (CSV)</span>, அதை நிரப்பி <span class="ui">Upload CSV</span>.
4. <span class="ui">Check</span> ஐத் தேர்ந்தெடுங்கள். பிரச்சினைகள் row வாரியாகக் காட்டப்படும் (*Row 7: …*) — உதா. இல்லாத SKU. அவற்றைச்
   சரிசெய்து மீண்டும் check செய்யுங்கள்.
5. *… rows are fine. Post them now.* எனக் காட்டியதும் <span class="ui">Post opening stock</span> ஐத் தேர்ந்தெடுங்கள்.

எல்லாம் ஒன்றாக post ஆகும், அல்லது எதுவும் இல்லை. **Pack barcode** அதன் pack quantity ஐக் கணக்கிடும் (24 இன் pack barcode, quantity 2
என்றால் 48 சேரும்).

:::tip
**Unit cost** தெரிந்தால் உள்ளிடுங்கள் — அப்போது தொடக்கத்திலிருந்தே சரியான stock values மற்றும் margins கிடைக்கும்.
:::

ஏற்கனவே விற்கிறீர்களா? பின்னர் quantities ஐச் சரிசெய்ய அதற்குப் பதிலாக [stock count](/ta/inventory/counts/) ஐப் பயன்படுத்துங்கள்.
