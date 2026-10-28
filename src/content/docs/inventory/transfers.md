---
title: Transfers between stores
description: Move stock from one store or branch to another, and record what arrived.
sidebar:
  order: 5
---

:::note[Depends on your plan]
**Stock transfers** is a plan feature (it needs **Stock control**). Without it, there is no **Transfers** tab. See [Plans and features](/getting-started/plans/).
:::

A **transfer** moves stock between two stores — for example from your central warehouse to a
branch. **Sending** takes the stock out of the first store (it is *in transit*); the receiving
store enters **what arrived**. Anything short is recorded with a reason.

## Create and send

1. Go to **Inventory → Transfers** → <span class="ui">New transfer</span>.
2. Choose **From store** and **To store**.
3. Add items and quantities.
4. <span class="ui">Save draft</span> to finish later, or open it and select
   <span class="ui">Send (take out of stock)</span>.

## Receive

At the receiving store:

1. Open the transfer (status **In transit**).
2. For each item enter what **Arrived**. If less arrived, enter **Why less arrived**.
3. Select <span class="ui">Receive into stock</span>.

The transfer shows who created, sent and received it, and when. A draft can be cancelled with
<span class="ui">Cancel transfer</span>.

Statuses: *Draft* → *In transit* → *Received* (or *Cancelled*).

You need the *Transfer stock between locations* permission.
