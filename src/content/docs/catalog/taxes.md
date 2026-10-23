---
title: Taxes
description: Set up tax rates such as VAT, combine them into tax groups, and schedule rate changes.
sidebar:
  order: 2
---

Taxes are set up in **Catalog setup → Taxes** in two parts:

- **Tax rates** — a single tax with a percentage, for example *VAT 18%*.
- **Tax groups** — what you give a product. A group combines **one or more rates**. An **empty**
  group means *no tax* (for exempt or zero-rated items).

:::caution
Confirm your rates with your accountant before you start selling.
:::

## The quick way: Add VAT 18%

On the dashboard's setup checklist, the **Tax** step has a button <span class="ui">Add VAT 18%</span>.
It creates the rate **VAT** (18%) and the group **VAT 18%** (code `VAT18`) in one go.

## Add a tax rate

1. Under **Tax rates**, select <span class="ui">New tax rate</span>.
2. Enter a **Code** (for example `VAT` or `SSCL` — cannot be changed later) and a **Name**.
3. Enter the **Rate (%)** — up to 4 decimals, for example `18` or `2.5`.
4. Choose **Applies from** — today or a future date.
5. Save.

## Change a rate (for example a new VAT rate from 1 January)

1. Select <span class="ui">Change rate</span> next to the rate.
2. Enter the new **Rate (%)** and the date it **Applies from**.
3. Save.

The new rate applies from the chosen date. **Earlier rates are kept** for past sales and reports.
Select <span class="ui">History</span> to see all rates and their dates.

## Add a tax group

1. Under **Tax groups**, select <span class="ui">New tax group</span>.
2. Enter a **Code** (for example `STANDARD` or `EXEMPT` — cannot be changed later) and a **Name**.
3. Tick the **Rates included**. Leave all unticked for tax-exempt or zero-rated items.
4. Save. **Combined today** shows the total rate.

Then choose the **Tax group** on each product, or put the group code in the `tax_group` column of
your import file.

## Prices include tax?

By default, **prices include tax**: the shelf price is what the customer pays and the tax is worked
out of it. Change this in **Settings → Products and prices → Prices include tax**. The till shows
*incl. tax* or *plus tax* next to prices accordingly.

## Deactivating a rate

Remove a rate from all active tax groups before deactivating it.
