---
title: Set up a till
description: What you need for a till and how to register a computer or tablet as a GPOS till.
sidebar:
  order: 1
---

:::note[Depends on your plan]
This page is part of the **POS checkout, cash shifts and POS devices** feature. If it is not in your plan, you will not see it in the menu. See [Plans and features](/getting-started/plans/).
:::

The **till** is the checkout screen. It runs in the browser of a counter computer, laptop or tablet
and **keeps working without internet**.

## What you need

- A computer, laptop or tablet (Windows, Android or iPad) with **Chrome or Edge** (recommended).
- An **internet connection for the setup** — afterwards it also works offline.
- Optional: a **barcode scanner** (USB or Bluetooth, set to "keyboard" mode), a **receipt
  printer** (58 mm or 80 mm) installed on the device, and a cash drawer.
- A **register** in the back office (see [Branches](/business/branches/#add-registers)).

## Register the till


1. **In the back office**, go to **POS devices** and select <span class="ui">Set up a till</span>
   next to the register. Keep that screen open; it shows a **code** and a **QR code** valid for
   15 minutes.
2. **On the till device**, open **[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** in Chrome or
   Edge. (Signed in to the back office on the same device? Select
   **POS till ↗** in the menu.)
3. The till shows **Set up this till**. Enter the **Setup code**, or scan the QR code with the
   device's camera.
4. Enter a **Name of this till**, for example *Front counter*.
5. Select <span class="ui">Register this till</span>.
6. The till shows **Downloading the catalog…** — wait until it finishes.


The till then shows **Who is using the till?** — it is ready. Continue with
[Unlocking the till](/till/unlock-and-users/).

## Install it as an app (recommended)

In Chrome or Edge, use **Install** in the address bar (or the browser menu → *Install app*; on
Android *Add to Home screen*). The till then appears as an app with the **GPOS** name and icon,
opens in its own window, starts faster, and the browser is much less likely to clear its offline
data.

:::caution[Keep the till's data safe]
The till stores waiting sales on the device until they are sent. Do **not** clear the browser
data, use a private/incognito window, or uninstall the browser on a till. If the panel
**Sync and this till** says storage *may be cleared by the browser*, install the till as an app
and keep using it regularly.
:::

## "This till needs a secure connection"

The till must be opened with an **https://** address. Check that the address bar shows exactly
**[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)** — not `http://`. If the message stays,
contact your service provider.

## Replacing or moving a till

- **New device:** sync the old till until nothing is waiting, [decommission](/business/pos-devices/#rename-re-authorise-decommission-revoke)
  it, then set up the new one on the same register — see
  [Replacing a till step by step](/business/pos-devices/#replacing-a-till-step-by-step).
- **"This till is not registered":** an administrator chooses <span class="ui">Re-authorise</span>
  for it in POS devices and you enter the new code on the till. Waiting work is kept.
