---
title: Plans and features
description: What your GPOS plan decides, how to see which plan you are on, and what happens when a feature is not included.
sidebar:
  order: 6
  badge:
    text: Important
    variant: caution
---

:::caution[Features depend on your plan]
GPOS is offered in different **plans** — for example **Basic**, **Standard** or a **Custom** plan
agreed for your business. **Not every feature in this guide is included in every plan.** If you
cannot find something described here, it is probably not part of your plan.
:::

## What a plan decides

### Features that can be switched on or off

Your plan is built from the features below. Many are **add-ons to a main feature** (marked ↳):
they work only when the main feature is in your plan too. The names are the ones on your
dashboard's **Plan** card.

#### Selling at the counter (POS)

| Feature | What it covers | Guide pages |
|---------|----------------|-------------|
| **Selling at the counter (POS), cash shifts and tills** | The till, cash sales, cash shifts with X and Z reports, POS devices, sales history | [Using the till](/till/making-a-sale/), [Cash shifts](/till/shifts/), [POS devices](/business/pos-devices/) |
| ↳ **Returns** | Taking goods back from a past sale | [Returns and voids](/till/returns-voids/) |
| ↳ **Voids** | Cancelling a completed sale | [Returns and voids](/till/returns-voids/) |
| ↳ **Discounts at the till** | Line and sale discounts given by the cashier | [Discounts](/till/discounts/) |
| ↳ **Hold a bill** | Putting a sale on hold | [Held sales](/till/held-sales/) |
| ↳ **Split payment** | More than one payment for one sale | [Payments](/till/payments/) |
| ↳ **Card, QR and bank payments** | Payment methods other than cash | [Payments](/till/payments/), [Payment methods](/business/payment-methods/) |
| ↳ **Cash in / cash out** | Money put in or taken out of the drawer during a shift | [Cash shifts](/till/shifts/#cash-in-and-cash-out) |
| ↳ **Sell by weight** | Products sold by kg or g | [Products](/catalog/products/) |
| ↳ **Quick buttons** | Quick-pick buttons on the till | [Quick picks](/catalog/quick-picks/) |
| ↳ **A4 printing** | A4 invoices and A4 X reports from the till | [Returns and voids](/till/returns-voids/) |
| ↳ **Add a new item at the till** | Adding an unknown barcode as a product | [Add a product at the till](/till/add-product-at-till/) |
| ↳ **Sales analysis reports** | Sales by hour, product, category, brand, cashier, branch and till | [Reports](/reports/reports/) |

#### Branches, products and customers

| Feature | What it covers | Guide pages |
|---------|----------------|-------------|
| **More than one branch** | Running several shops | [Branches](/business/branches/) |
| ↳ **Different branch prices** | A different price in one branch | [Products](/catalog/products/) |
| **Warehouses** | Stores that are not a branch's own store | [Branches](/business/branches/) |
| **Sizes and colours (variants)** | Products with sizes, colours and other options | [Products](/catalog/products/) |
| **Product photos** | Pictures on products | [Products](/catalog/products/) |
| **Excel / CSV upload and download** | Importing and exporting products | [Import and export](/catalog/import-export/) |
| **Customer list** | Customer profiles in the back office and at the till, including PDPA export and erase | [Customers](/sales/customers/) |
| ↳ **Customer discounts** | A customer's own discount, applied at the till | [Customers at the till](/till/customers/) |

#### Stock and purchasing

| Feature | What it covers | Guide pages |
|---------|----------------|-------------|
| **Stock control** | Stock levels, opening stock, adjustments | [Inventory](/inventory/stock-and-movements/) |
| ↳ **Stock transfers** | Moving stock between stores | [Transfers](/inventory/transfers/) |
| ↳ **Stock counts** | Count sheets | [Stock counts](/inventory/counts/) |
| ↳ **Batches and expiry dates** | Batch numbers and expiry dates | [Batches and expiry](/inventory/batches-expiry/) |
| **Suppliers and goods received** | Suppliers and receiving deliveries | [Suppliers](/purchasing/suppliers/), [Receiving goods](/purchasing/receiving-goods/) |
| ↳ **Purchase orders** | Ordering from suppliers | [Purchase orders](/purchasing/purchase-orders/) |
| ↳ **Supplier returns** | Sending goods back to a supplier | [Supplier returns](/purchasing/supplier-returns/) |

#### Selling online

| Feature | What it covers | Guide pages |
|---------|----------------|-------------|
| **Sell on Gocart.lk** | Your own shop on the Gocart.lk marketplace; prices and stock follow GPOS | [Sell on Gocart.lk](/sales/sell-online/) |

#### Reports and your team

| Feature | What it covers | Guide pages |
|---------|----------------|-------------|
| **Profit and margin in reports** | Cost, margin and stock value in reports | [Reports](/reports/reports/) |
| **Download reports to Excel** | The CSV export of reports | [Reports](/reports/reports/) |
| **Your own roles** | Creating and changing roles | [Roles](/business/roles/) |
| **Activity history (audit log)** | The **Audit log** screen | [Audit log](/reports/audit-log/) |

Pages about these features carry a **Depends on your plan** note.

### Limits

A plan can also set **how many** you may have of:

- **Active branches**
- **Active registers** (checkout counters, one till each)
- **Active employees**
- **Products** (archived products do not count)
- **Warehouses** (a branch's own store does not count)
- **Customer profiles** (erased customers do not count; inactive ones do)

### Always included

Signing in (including two-step sign-in), the dashboard, business settings, employees, the
ready-made roles, products and the catalog (categories, brands, units, taxes), **cash sales**,
**cash shifts with X and Z reports**, receipts for 58 mm and 80 mm printers, **offline selling**,
the everyday reports (daily sales, payments, refunds and voids, discounts, tax summary and cash
differences), PDPA tools for customer data, and recording of important actions.

## See your plan

Open the **Dashboard**. The **Plan** card shows:

- the **name** of your plan (*Plan: Standard*, for example);
- **every feature included** in your plan, each with **✓** (features that are not listed are
  available on another plan);
- each **limit** — how many you use and how many are allowed (or *unlimited*), and *limit reached*
  when you are at the maximum.

## When a feature is not in your plan

- Its **menu items, tabs and buttons do not appear** — for example, without **Stock control**
  there is no **Inventory** in the menu, without **Purchase orders** there is no *Purchase orders*
  tab, and without **Hold a bill** the till has no **Hold** button.
- Related **setup checklist steps are left out** — for example *Pair the first till* when the plan
  has no POS.
- If you try anyway, GPOS shows **"This feature is not included in your plan"**.
- At a limit — for example adding one more branch or employee — GPOS shows **"Your plan limit has
  been reached"**. Deactivating a branch or disabling an employee frees up a place.

### Tills that were offline

A till keeps the plan it last received, so it can keep working offline. If your plan changes
while a till is offline, it may still use a feature for a while — for example take a card payment.
GPOS **never refuses** such a sale: it saves it and marks it *(not in plan)* in
[Sales](/sales/sales-history/#review-flags) or in the shift, so you can see what happened. Let the
till go online and it picks up the new plan.

## Change your plan

*To change your plan, contact your service provider.* Once your plan is changed, the new features
appear the next time you open or reload the back office — nothing needs to be reinstalled. Data
you entered before stays as it is.
