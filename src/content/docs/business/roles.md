---
title: Roles and permissions
description: The ready-made roles, what each one may do, and how to create your own roles.
sidebar:
  order: 4
---

:::note[Depends on your plan]
The ready-made roles are in every plan. Creating and changing **your own roles** is the plan
feature **Your own roles**. See [Plans and features](/getting-started/plans/).
:::

A **role** is a set of **permissions**. You give employees roles in [Employees](/business/employees/),
for one branch, one register or the whole business.

## Ready-made roles

Every business gets these roles. They are marked **system** and cannot be edited.

| Role | For | In short |
|------|-----|----------|
| **Owner** | The business owner | Full control of the business. Also the only one who accepts the terms of service and decides whether staff must use two-step sign-in. |
| **Administrator** | Office administrator | Full administrative access. |
| **Manager** | Shop manager | Runs a branch day to day: products and prices, stock, purchasing, customers, sales, discounts, returns, voids, cash shifts, reports and audit log. Cannot manage employees, roles, devices or settings. |
| **Cashier** | Till staff | Sells at the till, opens and closes their own cash shift, looks up and adds customers. |
| **Inventory manager** | Store keeper | Products and catalog, stock adjustments, transfers, purchasing and reports. |
| **Accountant** | Your accountant | Read access to sales, cash shifts and reports **including cost and margin**, plus the audit log. |

## All permissions

| Area | Permission | What it allows |
|------|------------|----------------|
| Business | View business profile | See the dashboard and settings. |
| Settings | Manage business settings | Change Settings, payment methods and reasons. |
| Branches | View branches, warehouses and registers | See the branch structure. |
| Branches | Create and update branches, warehouses and registers | Change the branch structure. |
| Devices | Register and revoke POS devices | Pair and remove tills, resolve sync issues. |
| Employees | View employees | See the employee list. |
| Employees | Create, update and disable employees and their roles | Manage staff. |
| Roles | Create and update roles | Build custom roles. |
| Products | View products and catalogue | See products. |
| Products | Create products · Update products · Archive products | Manage the catalog. |
| Products | Add a new product at the till when a barcode is not found | Owner, Administrator and Manager by default; others need a manager's PIN. Plan feature. |
| Barcode labels | Print barcode labels | Print labels in the back office and at the till. Owner, Administrator, Manager and Inventory manager by default. Plan feature. |
| Prices | Change selling prices | Set and schedule prices. |
| Inventory | View inventory | See stock levels and movements. |
| Inventory | Post inventory adjustments | Opening stock, adjustments, write-offs, stock counts. |
| Inventory | Transfer stock between locations | Send and receive transfers. |
| Purchasing | Manage suppliers and purchase orders | Suppliers, orders, receiving, supplier returns. |
| Customers | View customers · Create and update customers | Customer profiles. |
| Customers | Export and erase customer data (PDPA requests) | Download or erase a customer's personal data. Owner and Administrator only, by default. |
| Sales | View sales | See sales in the back office. |
| Sales | Create sales at the POS | Sell on the till. |
| Sales | Apply manual discounts | Give discounts up to the higher limit and approve cashiers' discounts. |
| Sales | Process returns · Void sales | Without a manager's approval. |
| Cash | Open and close own cash shift, cash in/out | Run a shift on the till. |
| Cash | View and reconcile all cash shifts | See all shifts, close them without a count, approve cash outs. |
| Expenses | Record expenses | Reserved for expense features. |
| Reports | View reports | Open Reports. |
| Reports | See cost, margin and stock value in reports | Show cost figures. |
| Audit | View the business audit log | Open the Audit log. |
| Online marketplace | View online marketplace selling (connection and listings) | See Sell online. Owner, Administrator and Manager by default. Plan feature. |
| Online marketplace | Connect to an online marketplace and choose what is sold there | Apply to Gocart.lk, choose the store and items, stop selling. Owner and Administrator by default. |

Some permissions only work if the matching feature is part of your plan (for example inventory or
purchasing).

## Create your own role

1. Go to **Roles** → <span class="ui">New role</span>.
2. Enter a **Code** (for example `STOCK_CLERK`, cannot be changed later), a **Name** and a
   **Description**.
3. Tick the permissions, grouped by area.
4. Select <span class="ui">Create role</span>.

You can only give permissions that **you hold yourself** — others are shown as *You do not hold
this permission*.

To change a custom role, select <span class="ui">Edit</span> and <span class="ui">Save role</span>.
Select <span class="ui">Archive</span> when you no longer need it.

:::tip[Start from a ready-made role]
Need a cashier who may also give discounts? Create *Senior cashier* with the Cashier permissions
plus **Apply manual discounts** and **Process returns**.
:::
