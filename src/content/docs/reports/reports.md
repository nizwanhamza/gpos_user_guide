---
title: Reports
description: All GPOS reports — sales, money, stock and purchasing — with filters, CSV export and printing.
sidebar:
  order: 1
---

:::note[Depends on your plan]
You see the reports for the features in your plan — for example, stock reports need the inventory
feature and purchasing reports need purchasing. See [Plans and features](/getting-started/plans/).
:::

**Reports** groups its reports into **Sales**, **Money**, **Stock** and **Purchasing**. You need
the *View reports* permission. Cost, margin and stock value are only shown to people allowed to see
costs (for example the *Accountant* role).

## Using a report

1. Open the report.
2. Set the filters — usually a **Period** (*Today*, *Yesterday*, *This week*, *Last week*, *This
   month*, *Last month* or **From / To**) and optionally **Branch**, **Till**, **Cashier**,
   **Store**, **Category**, **Brand**, **Payment method** or **Supplier**.
3. Some reports let you choose how to **Show** the rows — *Per day* / *Per month*, *Per supplier* /
   *Per product*.
4. Select <span class="ui">Export CSV</span> to open the data in Excel, or
   <span class="ui">Print / PDF</span>.

The screen shows up to 2,000 rows — export the CSV for all of them.

:::caution[These figures may still change]
If a till has not sent all its sales yet, or records are waiting in **Sync issues**, the report
warns you — for example *Front counter has 12 records not yet on the server*. Check again after
the tills have synced.
:::

## Sales reports

| Report | What it shows |
|--------|---------------|
| **Daily sales** | Sales, discounts, returns, voids, net sales and tax per day or month; margin with cost access. |
| **Sales by hour** | Net sales by hour of the day and weekday — for planning staff. |
| **Sales by product** | Quantity sold and returned, and net sales per item; best sellers first. |
| **Sales by category** | Net sales per category; sub-categories are included in their parents. |
| **Sales by brand** | Net sales per brand. |
| **Sales by cashier** | Sales, discounts given, and returns and voids each person processed. |
| **Sales by branch** | Sales, returns, net sales, tax and average sale per branch. |
| **Sales by till** | Net sales and number of sales per till. |
| **Sales by customer** | Top customers by spend and visits. |

## Money reports

| Report | What it shows |
|--------|---------------|
| **Payments by method** | Collected, refunded and net per payment method — to check against the cash drawer and the bank. |
| **Refunds & voids** | Every refund and void with the original sale, who did it, who approved it, and the reason. |
| **Discounts** | Sales with a discount: who gave it, who approved it, and how much. |
| **Tax summary** | Taxable amount and tax per rate, sales less returns — for the VAT return. |
| **Cash over / short** | Per closed shift: what the drawer should hold, what was counted and the difference. |

## Stock reports

| Report | What it shows |
|--------|---------------|
| **Stock on hand** | Quantity and value per store and item, **now or at the end of a past day**. |
| **Low & negative stock** | Items at or below their reorder level, out of stock or below zero. |
| **Slow movers** | Items in stock that have not sold from that store for a while (choose *Not sold for … days*), with their value. |
| **Stock movement summary** | Per item and store: opening, received, transferred, sold, returned, written off, adjusted and closing. |
| **Adjustments & write-offs** | Stock adjusted or written off, by store and reason, with its value. |

## Purchasing reports

| Report | What it shows |
|--------|---------------|
| **Purchases** | Goods received less returns to suppliers, by supplier, product or month. |
| **Open purchase orders** | Ordered goods still to arrive, with what is still due. |

## Common questions

**Net sales** = sales − returns − voids, after discounts.

**Margin** = net sales (excl. tax) − cost. Sales of items without a cost are counted under *Sales
without cost*. Enter costs on products or when receiving goods for accurate margins.

**Which day does a sale belong to?** The business day in your business (or branch) time zone.

**Monthly VAT:** run **Tax summary** for *Last month* and give the CSV to your accountant.
