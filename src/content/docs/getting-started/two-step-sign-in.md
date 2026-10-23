---
title: Two-step sign-in
description: Protect back-office accounts with a code from an authenticator app, keep recovery codes safe, and what to do if a phone is lost.
sidebar:
  order: 5
---

**Two-step sign-in** asks for a 6-digit code from an **authenticator app** on your phone after
your password. A guessed or leaked password is then not enough to get into your business.

It applies to the **back office** at [app.gpos.lk](https://app.gpos.lk) only. **The till is not
affected** — cashiers keep unlocking it with their [POS PIN](/till/unlock-and-users/).

:::tip[Which app?]
Any authenticator app works, for example **Microsoft Authenticator** or **Google Authenticator**
(free on Android and iPhone). Install it before you start.
:::

## Set it up

1. Go to **My account** → **Two-step sign-in** and select
   <span class="ui">Set up two-step sign-in</span>.
2. In the authenticator app, add an account and **scan the QR code** on the screen.
   - Cannot scan? Type the **key** shown under the QR code into the app instead.
   - Setting it up on the same phone? Select **Open in the authenticator app (on this phone)**.
3. The app shows a 6-digit code that changes every 30 seconds. Enter it and select
   <span class="ui">Turn on</span>.
4. GPOS shows **10 recovery codes — only this once**. Write them down or print them and keep them
   somewhere safe, **not on the phone**. Then select <span class="ui">I have saved them</span>.

My account now says *Two-step sign-in is on (10 recovery codes left)*.

## Signing in with two-step sign-in

1. Sign in with your business code, e-mail and password as usual.
2. On **Two-step sign-in**, open the authenticator app and enter the current **6-digit code**.
3. Select <span class="ui">Continue</span>.

No phone with you? Enter one of your **recovery codes** instead. Each recovery code works
**once**; My account shows how many are left.

## When it is required

- **For staff — the owner decides.** In **Settings → Two-step sign-in**, the owner can tick
  **Require two-step sign-in for all other users of the business**. Anyone who has not set it up
  is asked to do so at their next sign-in, before anything else (the screen *Set up two-step
  sign-in*). Only the business owner can change this setting.
- **For the owner — your service provider may require it.** Settings shows either *For you as
  the owner, GPOS requires it* or *For you as the owner it is optional: turn it on in My account*.

We recommend that **owners and administrators always use it**, even when it is optional.

## Turn it off

In **My account → Two-step sign-in**, enter a **Code from the app** (or a recovery code) and
select <span class="ui">Turn off</span>. If it is required for you, you will be asked to set it up again
at the next sign-in.

## Lost or replaced phone

| Who | What to do |
|-----|------------|
| **An employee** (cashier, manager…) | Sign in with a **recovery code**, then turn two-step sign-in off and set it up again on the new phone. No recovery codes left? Ask your owner or an administrator to open **Employees → (your name) → Reset two-step sign-in**. You then sign in with your password and set it up again. |
| **The owner** | 1. Sign in with a **recovery code**. 2. Or ask **another administrator** of your business to reset your two-step sign-in in **Employees**. 3. Only if neither works, contact your **service provider**. |

:::caution[Recovering an owner's account takes time — on purpose]
Taking over the owner's account is the most common way to steal a business. Before helping, your
service provider checks that it is really you — for example by calling back the phone number they
have on file, or checking your business registration and NIC. They never ask for your password.
Every recovery signs you out on all devices, is written to your [audit log](/reports/audit-log/)
and is e-mailed to you. If you get such an e-mail and did not ask for it, contact your service
provider immediately.

**Tip:** give a second trusted person the *Administrator* role, so that you never depend on
support to get back in.
:::

## Good to know

- *"The code is not correct"* — check that the phone's **date and time are set automatically**;
  codes depend on the clock. Wait for the next code and try again. A code cannot be used twice.
- A new phone? Set two-step sign-in up again on the new phone — the old app entry does not move
  over by itself.
- [Forgot password?](/getting-started/signing-in/#forgot-your-password) changes only your password.
  Two-step sign-in stays on.
