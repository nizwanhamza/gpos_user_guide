---
title: Business settings
description: Business profile, address, regional settings, prices and tax, checkout and cash rules, discount limits, return window and receipts.
sidebar:
  order: 1
---

**Settings** holds the details and rules for the whole business. You need the *Manage business
settings* permission (owners and administrators) to change them; others with access can view them.

Change what you need and select <span class="ui">Save settings</span> at the bottom.

:::note[Someone else saved first?]
If another person changed the settings while you were editing, GPOS will not overwrite their work.
Select <span class="ui">Reload latest</span>, make your change again and save.
:::

## Business profile

| Field | What it is for |
|-------|----------------|
| **Business name** | Shown in the app and, by default, on receipts. |
| **Legal name** | Your registered company name (optional). |
| **Business registration no.** | Your BR number (optional). |
| **Tax registration no.** | Your VAT/TIN number. Can be printed on receipts. |
| **Phone** | Checked for your country and stored in international format. |
| **Contact email** | Where customers or your service provider can reach you. |

## Address

**Address line 1**, **Address line 2**, **City**, **District** and **Postal code**.

## Regional settings

- **Currency** — the currency all prices and reports use (for example `LKR`).
- **Time zone** — decides when a business day starts and ends in reports and the daily summary
  (for example `Asia/Colombo`). Each branch can use its own time zone if needed.
- **Default language** — the language for employees who have not chosen their own.

## Products and prices

- **Prices include tax** *(on by default)* — the selling price on the shelf already contains tax;
  GPOS works the tax out of it. Untick it if you want tax **added on top** at checkout.
- **Use Sinhala/Tamil product names** — adds optional Sinhala and Tamil names to products for the
  till and receipts. See [Languages](/getting-started/languages/).

## Checkout and cash

These rules apply on every till. Out of the box they are strict — a manager approves every cashier
discount and every cash out — so review them before you open:

| Setting | Starts as |
|---------|-----------|
| Blind close | Off |
| Cash out without a manager up to | `0` (every cash out needs a manager) |
| Discount limit with sales.discount | `100` % |
| Discount limit for everyone else | `0` % (every cashier discount needs a manager) |
| Return window | `30` days |

### Blind close

When ticked, cashiers **count the drawer before** the till shows how much cash it expected. This
gives an honest count. The expected amount and the difference are shown after closing.

### Cash out without a manager up to

The largest **cash out** (cash taken out of the drawer, for example to pay a supplier) a cashier may
do on their own. Larger amounts need a **manager's PIN** on the till.

- `0` means **every** cash out needs a manager.
- Managers (people with *View and reconcile all cash shifts*) are not limited.

### Discount limits

Two percentages control discounts at the till:

| Setting | Who it applies to | Meaning |
|---------|-------------------|---------|
| **Discount limit with sales.discount (%)** | People allowed to apply manual discounts — by default owners, administrators and managers | The **most anyone** may give or approve. Never exceeded. |
| **Discount limit for everyone else (%)** | Cashiers | What a cashier may give **alone**, on a line or on the whole sale. Above this, a manager approves with their PIN on the till. `0` = every discount needs approval. |

Both are percentages from 0 to 100 (up to 2 decimals). The limit for everyone else cannot be higher
than the first one.

Example: with limits of **20%** and **5%**, a cashier can give 5% alone, up to 20% with a manager's
approval, and never more than 20%.

Customer discounts (set on the customer's profile) are applied automatically and need no approval.
See [Customers](/sales/customers/).

### Return window (days)

How many days after a sale it can be **returned at the till**. `0` = no limit. Cashiers need a
manager's PIN for returns and voids unless their role allows them. See
[Returns and voids](/till/returns-voids/).

## Receipts

| Field | What it is for |
|-------|----------------|
| **Name printed on receipts** | Defaults to the business name. Use it for a trading name. |
| **Invoice title** | A title printed at the top, for example *TAX INVOICE*. Check the wording with your accountant. |
| **Header lines** | Up to **4 lines** under the name — address, hotline, website. |
| **Footer text** | Printed at the bottom — return policy, thank-you note. |
| **Print tax registration number** | Adds your tax registration no. to every receipt. |

Receipts are printed from the till; see [Till settings](/till/shortcuts-and-settings/#receipt-printing).

## Two-step sign-in

Tick **Require two-step sign-in for all other users of the business** to make every employee use
a code from an authenticator app when signing in to the back office. Those who have not set it
up are asked to do so at their next sign-in, before anything else. The till is not affected —
cashiers keep using their PIN.

- **Only the business owner** can change this setting (others see *Only the business owner can
  change this*).
- Below it, Settings shows whether two-step sign-in is **required for you as the owner** (decided
  by your service provider) or optional.

See [Two-step sign-in](/getting-started/two-step-sign-in/).

## Payment methods, cash reasons and stock reasons

Lower down the Settings page you also manage:

- [Payment methods](/business/payment-methods/)
- [Cash in/out reasons](/business/cash-reasons/)
- [Stock adjustment reasons](/inventory/adjustments/#stock-adjustment-reasons)

## Show the setup checklist again

If you hid the setup checklist, a link at the top of Settings brings it back to the dashboard.
