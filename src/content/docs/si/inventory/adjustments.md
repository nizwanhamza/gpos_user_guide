---
title: Adjustments සහ write-offs
description: Stock levels හදන්න හෝ losses record කරන්න (damaged, expired, theft), සහ stock adjustment reasons manage කරන්න.
sidebar:
  order: 3
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
මේ page එක **Stock control** feature එකට අයිතියි. ඒක ඔබේ plan එකේ නැත්නම් menu එකේ පෙනෙන්නේ නැහැ.
[Plans and features](/si/getting-started/plans/) බලන්න.
:::

Reason එකක් එක්ක correction එකක් හෝ loss එකක් record කරන්න **Inventory → Adjust / write off** භාවිතා කරන්න. හැම entry එකක්ම
ledger එකටයි audit log එකටයි එකතු වෙනවා.

## වර්ග දෙකක්

- **Write-off (stock leaves)** — loss එකක්: damaged, expired, හොරකම් කළ, shop එකේ පාවිච්චි කළ. නැති වුණු ප්‍රමාණය දාන්න; ඒවා stock
  එකෙන් අයින් වෙනවා.
- **Adjustment (up or down)** — correction එකක්. වෙනස දාන්න: `3` නම් තුනක් එකතු වෙනවා, `-2` නම් දෙකක් අඩු වෙනවා.

## Adjustment එකක් හෝ write-off එකක් post කරන්න

1. **Choose a store**.
2. **Choose a reason**. Write-off එකක්ද adjustment එකක්ද කියලා තීරණය වෙන්නේ reason එකෙන්.
3. **Add an item**: name හෝ SKU search කරලා quantity එක දාන්න. ඕන තරම් items add කරන්න.
4. **Note (optional)** එකක් add කරන්න.
5. <span class="ui">Post write-off</span> හෝ <span class="ui">Post adjustment</span> තෝරන්න.

Shelf එකක් හෝ store එකක් සම්පූර්ණයෙන් ආයෙත් ගණන් කරන්න ඒ වෙනුවට [stock count](/si/inventory/counts/) එකක් භාවිතා කරන්න.

## Stock adjustment reasons

Reasons manage කරන්නේ **Settings → Stock adjustment reasons** හි. Ready-made:

| Reason | Kind |
|--------|------|
| Count correction | Adjustment |
| Found | Adjustment |
| Damaged | Write-off |
| Expired | Write-off |
| Theft / missing | Write-off |
| Own use | Write-off |

ඔබේම එකක් add කරන්න <span class="ui">Add stock reason</span> තෝරන්න: නම දාලා **Kind** එක තෝරලා save කරන්න. භාවිතා නොකරන reasons
switch off කරන්න.

**Adjustments & write-offs** report එකේ adjust හෝ write off කරපු දේ store සහ reason අනුව, value එකත් එක්ක පෙන්නනවා.
