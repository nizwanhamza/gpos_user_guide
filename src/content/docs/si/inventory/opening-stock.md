---
title: Opening stock
description: GPOS භාවිතා කරන්න පටන් ගන්නකොට shelves වල තියෙන දේ, rows paste කරලා හෝ CSV එකක් upload කරලා දාන්න.
sidebar:
  order: 2
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Stock control** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu එකේ පෙනෙන්නේ නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Opening stock** එකෙන් ඔබේ මුල් quantities set කරනවා, එතකොට පළමු දවසේ සිටම stock levels හරි. පුළුවන් නම් products හැදුවාට පස්සේ,
විකුණන්න පටන් ගන්න කලින් මේක කරන්න.

## Opening stock දාන්න

1. Shelves වල තියෙන දේ ගණන් කරන්න.
2. **Inventory → Opening stock** වෙත ගිහින් **Choose a store**.
3. එක්කෝ:
   - Spreadsheet එකකින් **Rows** වලට **rows paste කරන්න** — line එකකට එක item එකක්: **SKU හෝ barcode**, **quantity**, අවශ්‍ය
     නම් **unit cost**, tabs වලින් වෙන් කරලා (Excel වලින් copy කරන විදිහට), උදා. `TEA-100	24	62.50`; නැත්නම්
   - <span class="ui">Download template (CSV)</span>, ඒක පුරවලා <span class="ui">Upload CSV</span>.
4. <span class="ui">Check</span> තෝරන්න. ප්‍රශ්න row අනුව පෙන්නනවා (*Row 7: …*) — උදා. නැති SKU එකක්. ඒවා හදලා ආයෙත් check කරන්න.
5. *… rows are fine. Post them now.* කියලා පෙන්නුවාම <span class="ui">Post opening stock</span> තෝරන්න.

හැම දෙයක්ම එකට post වෙනවා, නැත්නම් කිසිවක් නැහැ. **Pack barcode** එකක් ඒකේ pack quantity එක ගණන් කරනවා (24ක pack barcode එකක්
quantity 2 නම් 48ක් add වෙනවා).

:::tip
**Unit cost** එක දන්නවා නම් දාන්න — එතකොට මුල ඉඳන්ම හරි stock values සහ margins ලැබෙනවා.
:::

දැනටමත් විකුණනවාද? පස්සේ quantities හදන්න ඒ වෙනුවට [stock count](/si/inventory/counts/) එකක් භාවිතා කරන්න.
