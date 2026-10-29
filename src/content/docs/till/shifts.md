---
title: Cash shifts on the till
description: Open a shift with a float, put cash in or take it out, print an X report and close the shift with a count.
sidebar:
  order: 9
---

:::note[Depends on your plan]
Cash shifts are part of **Selling at the counter (POS)**. **Cash in / cash out** is a separate plan feature: without it, those buttons do not appear in the shift window. See [Plans and features](/getting-started/plans/).
:::

A **shift** is one period of selling on one till — usually one cashier's day or half-day. Every
sale and cash movement belongs to the shift until it is closed. Press **F10** or select the shift
name at the top to manage it.

Each shift is named after **who opened it and when**, for example
`Shift-Chamari-20261027-8.00am`. The same name is used on the till, in the back office and in
reports.

## Open a shift

When no shift is open the till shows a yellow banner **No shift open: sales are off**. Until a
shift is opened the till only **checks prices**: scan an item or type its name to see its price
(the search box says *Price check: …*), but nothing can be sold. A cashier without permission to
open a shift sees *Ask a cashier or manager to open a shift*.

1. Select <span class="ui">Open a shift</span> in the banner.
2. Count the cash in the drawer — the **opening float**. Either:
   - <span class="ui">Count notes and coins</span> — enter how many of each note and coin, and the
     till adds them up; or
   - <span class="ui">Enter the total</span> — type the total.
3. Select <span class="ui">Open shift with {amount}</span>.

## Cash in and cash out

Money put in or taken out of the drawer **other than sales** must be recorded, or the count will
not match.

1. In the shift, select <span class="ui">Cash in</span> or <span class="ui">Cash out</span>.
2. Enter the **Amount** and choose the **Reason** (for example *Paid out* or *To the safe*).
3. Add a **Note** if required.
4. Select <span class="ui">Put in {amount}</span> / <span class="ui">Take out {amount}</span>.

Cash outs above the business limit need a [manager's approval](/till/discounts/#manager-approval).
By default **every** cash out needs one.

## X report (during the shift)

Select <span class="ui">X report</span> (print it on the receipt printer or on **A4**) for a snapshot of the shift so far: sales, tax, cash sales,
cash in and out, refunds and the **expected cash**. Select <span class="ui">Print</span> to print
it. The shift stays open.

## Close the shift

1. Select <span class="ui">Close shift</span>.
2. Count **all** the cash in the drawer (notes and coins, or the total).
3. Select <span class="ui">Close with {amount} counted</span>.

The till prints or shows the **Z report** with the expected cash, what you counted and the
**Difference**. With **blind close** on, you only see the expected amount after closing.

- Sales still waiting to sync? *You can close now; they are sent first.*
- **Held sales are discarded** when the shift closes — finish them first.

The back office then **reconciles** the shift once every sale and cash movement has arrived. See
[Cash shifts](/sales/cash-shifts/).

## Earlier shifts

Select <span class="ui">Shifts</span> to see **Earlier shifts on this till** with what was counted.

## "Shift … was closed by a manager"

A manager can close a shift from the back office (for example if the till broke). The till then
asks you to open a new shift.
