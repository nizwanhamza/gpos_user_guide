---
title: Customers
description: Customer profiles, customer discounts, purchase history and marketing consent.
sidebar:
  order: 3
---

:::note[Depends on your plan]
This page is part of the **Customer list** feature; **Customer discounts** is a separate feature. Your plan can also limit the number of **customer profiles** (erased customers do not count). See [Plans and features](/getting-started/plans/).
:::

**Customers** holds your customer profiles. Tills find customers by **phone or name**, can add new
ones (also offline) and apply their **discount** automatically. Tills only hold the name, phone
and discount.

## Add or edit a customer

1. Select <span class="ui">Add customer</span> (or a customer to edit).
2. Fill in:
   - **Name** and **Mobile phone** — one customer per number, for example `077 123 4567`.
   - **Email (optional)**.
   - **Customer discount (%)** — applied automatically at the till; needs no manager approval.
   - **Notes** — for the back office only; not sent to tills.
   - **Marketing consent** — tick *SMS*, *WhatsApp* or *Email* only if the customer agreed.
   - **Active** — inactive customers are removed from tills.
3. Save.

## Customer details

Each customer shows the number of purchases, how much they **Spent** (after returns), when and
where the profile was created (*at a till* or *in the admin*), the **Purchase history** with
receipts, and the **Consent history**.

## Personal data (PDPA)

Under Sri Lanka's **Personal Data Protection Act (PDPA)**, a customer can ask what you hold about
them, or ask you to delete it. Open the customer and use **Personal data (PDPA)**. You need the
*Export and erase customer data (PDPA requests)* permission — owners and administrators have it
by default.

### Export a customer's data

Select <span class="ui">Export data</span>. GPOS downloads a file with everything held about the
customer — profile, purchases and consent history — to give to them.

### Erase a customer

1. Select <span class="ui">Erase customer</span>.
2. Read what happens: their **name, phone, e-mail and notes are removed for good**, and all
   marketing consent ends. **Sales stay** (for your books) but no longer show who bought.
3. **Type the customer's name** to confirm and select <span class="ui">Erase for good</span>.

The profile then shows *This customer's personal data was erased on request*, is set inactive,
and disappears from the tills on their next sync. Their personal details are also cleared from
the [audit log](/reports/audit-log/). **This cannot be undone.**

:::caution
Check that the request really comes from the customer before you export or erase their data.
:::

## Marketing consent

Consent is recorded **per channel** and is **no by default**. Every change is kept with the date
and who recorded it, so you can show when a customer agreed or withdrew.

Search by **name or phone**, filter by **Status** or **With a discount / Without a discount**, and
sort by a column. The *Sales by customer* report lists your
top customers by spend and visits.
