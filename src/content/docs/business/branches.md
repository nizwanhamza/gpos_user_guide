---
title: Branches, registers and warehouses
description: Add shops (branches), the registers (checkout counters) in them, and extra stock locations (warehouses).
sidebar:
  order: 2
---

:::note[Depends on your plan]
**More than one branch** and **Warehouses** are plan features, and your plan can limit the
number of **active branches**, **registers** and **warehouses** (a branch's own store does not
count as a warehouse). Without **Warehouses**, you cannot add stores beyond each branch's own. The dashboard shows your limits. See
[Plans and features](/getting-started/plans/).
:::

GPOS organises your business like this:

```text
Business
└── Branch            a shop or outlet, e.g. "Kandy" (KDY)
    ├── Registers     the checkout counters in that shop — each one gets a till device
    └── Warehouses    places where stock is kept — every branch has a default one (its "store")
```

Your business starts with one branch called **MAIN** and its default warehouse. **There is no
register yet** — add one before you pair your first till. Open **Branches** to see and change them.

:::tip
You can rename the MAIN branch (for example to your shop's name) with <span class="ui">Edit</span>.
Its code stays `MAIN`.
:::

## Add a branch

1. Select <span class="ui">New branch</span>.
2. Enter a **Code** — short, printed on receipts, for example `KDY`. **Codes cannot be changed**
   later, so choose carefully.
3. Enter the **Name**, and optionally the **Phone** and **Time zone** (leave it empty to use the
   business time zone).
4. Select <span class="ui">Create branch</span>.

A new branch comes with its own default warehouse. How many branches you can have depends on your
plan; the dashboard shows your limits.

## Add registers

A **register** is a checkout counter. Each till device is paired to one register.

In the branch card, under **Registers**, select <span class="ui">Add</span>, enter a **Code** and
**Name** (for example `R2` — *Counter 2*) and save. Then pair a till to it in
[POS devices](/business/pos-devices/).

## Add warehouses

Use extra **warehouses** for a back store room or a central warehouse. Stock is kept per warehouse,
and you can [transfer](/inventory/transfers/) between them. In the inventory and purchasing screens
warehouses are called **stores**.

Under **Warehouses**, select <span class="ui">Add</span>, enter a **Code** and **Name** and save.

## Edit, deactivate and activate

- Select <span class="ui">Edit</span> to change a name, phone or time zone.
- Select <span class="ui">Deactivate</span> to stop using a branch, register or warehouse. History is
  kept. Select <span class="ui">Activate</span> to bring it back.
- A branch's **default** warehouse cannot be deactivated.

## Quick-pick buttons

Each branch has its own set of **Quick-pick buttons** for the till — see
[Quick-pick buttons](/catalog/quick-picks/).
