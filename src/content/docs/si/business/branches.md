---
title: Branches, registers සහ warehouses
description: Shops (branches), ඒවායේ registers (checkout counters), සහ අමතර stock locations (warehouses) add කරන්න.
sidebar:
  order: 2
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
**More than one branch** සහ **Warehouses** plan features. ඔබේ plan එකට **active branches**, **registers** සහ
**warehouses** ගණන සීමා කරන්නත් පුළුවන් (branch එකක තමන්ගේම store එක warehouse එකක් ලෙස ගණන් කරන්නේ නැහැ).
**Warehouses** නැත්නම් හැම branch එකකම තමන්ගේම store එකට අමතරව stores add කරන්න බැහැ. ඔබේ limits dashboard එකේ
පෙන්නනවා. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

GPOS ඔබේ business එක සකස් කරන්නේ මෙහෙමයි:

```text
Business
└── Branch            shop එකක් හෝ outlet එකක්, උදා. "Kandy" (KDY)
    ├── Registers     ඒ shop එකේ checkout counters — හැම එකකටම till device එකක්
    └── Warehouses    stock තියාගන්න තැන් — හැම branch එකකටම default එකක් තියෙනවා (එහි "store" එක)
```

ඔබේ business එක පටන් ගන්නේ **MAIN** කියන branch එකකින් සහ එහි default warehouse එකෙන්. **තවම register එකක්
නැහැ** — පළමු till එක pair කරන්න කලින් එකක් add කරන්න. ඒවා බලන්න සහ වෙනස් කරන්න **Branches** open කරන්න.

:::tip
MAIN branch එකේ නම <span class="ui">Edit</span> එකෙන් වෙනස් කරන්න පුළුවන් (උදා. ඔබේ shop එකේ නමට). එහි code එක
`MAIN` විදිහටම තියෙනවා.
:::

## Branch එකක් add කරන්න

1. <span class="ui">New branch</span> තෝරන්න.
2. **Code** එකක් දාන්න — කෙටි, receipts වල print වෙනවා, උදා. `KDY`. **Codes පස්සේ වෙනස් කරන්න බැහැ**, ඒ නිසා
   හිතලා තෝරන්න.
3. **Name** එක, සහ අවශ්‍ය නම් **Phone** සහ **Time zone** දාන්න (business time zone එක ගන්න නම් හිස්ව තියන්න).
4. <span class="ui">Create branch</span> තෝරන්න.

අලුත් branch එකකට තමන්ගේම default warehouse එකක් එනවා. Branches කීයක් තියාගන්න පුළුවන්ද කියන්නේ ඔබේ plan එක
අනුවයි; limits dashboard එකේ පෙන්නනවා.

## Registers add කරන්න

**Register** එකක් කියන්නේ checkout counter එකක්. හැම till device එකක්ම එක register එකකට pair කරනවා.

Branch card එකේ **Registers** යටතේ <span class="ui">Add</span> තෝරා, **Code** එකක් සහ **Name** එකක් (උදා. `R2` —
*Counter 2*) දී save කරන්න. ඊට පස්සේ [POS devices](/si/business/pos-devices/) හි ඒකට till එකක් pair කරන්න.

## Warehouses add කරන්න

පිටිපස්සේ store room එකකට හෝ central warehouse එකකට අමතර **warehouses** භාවිතා කරන්න. Stock තියෙන්නේ warehouse
අනුව, ඒවා අතර [transfer](/si/inventory/transfers/) කරන්න පුළුවන්. Inventory සහ purchasing screens වල warehouses
වලට කියන්නේ **stores** කියලා.

**Warehouses** යටතේ <span class="ui">Add</span> තෝරා, **Code** එකක් සහ **Name** එකක් දී save කරන්න.

## Edit, deactivate සහ activate

- නම, phone හෝ time zone වෙනස් කරන්න <span class="ui">Edit</span> තෝරන්න.
- Branch, register හෝ warehouse එකක් භාවිතය නවත්වන්න <span class="ui">Deactivate</span> තෝරන්න. History එක
  තියෙනවා. ආයෙත් ගේන්න <span class="ui">Activate</span> තෝරන්න.
- Branch එකක **default** warehouse එක deactivate කරන්න බැහැ.

## Quick-pick buttons

හැම branch එකකටම till එක සඳහා තමන්ගේම **Quick-pick buttons** set එකක් තියෙනවා —
[Quick-pick buttons](/si/catalog/quick-picks/) බලන්න.
