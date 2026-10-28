---
title: Discounts and approvals
description: Give a discount on a line or on the whole sale, and get a manager's approval when it is above your limit.
sidebar:
  order: 5
---

:::note[Depends on your plan]
**Discounts at the till** is a plan feature. Without it, the till has no <span class="ui">Discount on the whole sale</span> button (F8) and no discount in **Edit** (F1). A customer's own discount is the separate feature **Customer discounts**. See [Plans and features](/getting-started/plans/).
:::

## Give a discount

- **On one line:** select <span class="ui">Edit</span> on the line (**F1** for the last item) and
  then <span class="ui">Add a discount</span>.
- **On the whole sale:** select <span class="ui">Discount on the whole sale</span> (or press **F8**).

Then:

1. Choose **Percentage** (for example `10` %) or **Amount** (for example `100.00` off).
2. Pick or type a **Reason** — *Damaged*, *Regular customer*, *Price match*, or your own words. A
   reason is always required.
3. The preview shows how much comes off. Select <span class="ui">Apply discount</span>.

To change or remove it, open it again and select <span class="ui">Remove discount</span>.

## Limits

Your business sets two limits in [Settings](/business/settings/#discount-limits):

- **Your own limit** — what you may give alone. Out of the box it is **0 %** for cashiers, so
  every cashier discount needs a manager.
- **The business limit** — the most anyone may give. Above it the till says *Above the business
  limit of … % — not possible.*

A **customer discount** (from the customer's profile) is applied automatically and does not need
approval.

## Manager approval

When the discounts are above your limit, the sale shows *The discounts are above your limit: a
manager must approve them.*

1. Select <span class="ui">Manager approval</span>.
2. Choose who approves — the list shows managers who have a POS PIN and access to this branch.
3. The manager enters **their PIN** on the till.

The sale shows *Approved by {name}*. The same approval screen is used for large cash outs, returns
and voids.

If the till says *No manager can approve on this till*, a manager needs a POS PIN and access to
this branch.

## Where discounts show up

Discounts are printed on the receipt (*You saved …*), shown on the sale in **Sales**, and listed in
the **Discounts** report with who gave and who approved them.
