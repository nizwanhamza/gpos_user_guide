---
title: Troubleshooting
description: Quick fixes for the most common problems in the back office and on the till.
sidebar:
  order: 1
---

## Signing in

**"Incorrect business code, email or password"**
Check the **business code** first — every employee of the business uses the same one. Then check
your e-mail and password (passwords are case-sensitive).

**"Too many attempts. Please wait a minute and try again"**
Wait a minute, then try again carefully. Use [Forgot password?](/getting-started/signing-in/#forgot-your-password)
if needed.

**"This link is invalid, was already used or has expired"**
Password reset links work once and for 30 minutes. Ask for a new one.

**"The code is not correct"** (two-step sign-in)
Use the current code from the authenticator app and check that the phone's date and time are set
automatically. You can also use a recovery code. See [Two-step sign-in](/getting-started/two-step-sign-in/).

**Lost the phone with the authenticator app**
Sign in with a recovery code, or ask your owner or an administrator to
**Reset two-step sign-in** in Employees. Owners: see
[Lost or replaced phone](/getting-started/two-step-sign-in/#lost-or-replaced-phone).

**"Set up two-step sign-in first"**
Your business (or your service provider, for owners) requires two-step sign-in. Follow the
**Set up two-step sign-in** screen.

**"Accept the terms first"**
The owner must accept the updated terms of service at the next sign-in.

**"This business account is suspended"**
Contact your service provider.

**"You do not have permission to do this"**
Your role does not allow it. Ask your owner or administrator — see
[Roles and permissions](/business/roles/).

**"This feature is not included in your plan" / "Your plan limit has been reached"**
For example, adding another branch or employee beyond your plan. Contact your service provider to
change your plan. Disabled employees and inactive branches do not count. See
[Plans and features](/getting-started/plans/).

**A menu item described in this guide is missing**
Either the feature is not in your plan, or your role does not include it. Check the **Plan** card
on the dashboard (✓ / ✕) and ask your owner about your role.

## Pairing a till

**"This code has expired"** — codes last 15 minutes. Select <span class="ui">New code</span>.

**"Add a register to a branch first"** — go to **Branches** and add a register.

**"This till needs a secure connection"** — open the till at
**[https://app.gpos.lk/pos/](https://app.gpos.lk/pos/)**, with `https://`. If it still appears, contact
your service provider.

**"Setting up needs an internet connection"** — connect the device, then try again.

## On the till

**My name is not on "Who is using the till?"**
You need a **POS PIN** and a role that may sell at **this branch**. Set the PIN in
[My account](/getting-started/my-account/) or ask an administrator, then wait for the till to sync
(or select <span class="ui">Sync now</span>).

**"Too many wrong PINs. Try again in …"**
Wait the time shown. Ask an administrator to set a new PIN if you have forgotten it.

**I can't sell — "No shift is open"**
Open a shift first: see [Cash shifts on the till](/till/shifts/).

**A scanned item is "Nothing found"**
The barcode is not on any product. Add it to the product's **Barcodes** in the back office, then
sync the till. Meanwhile, search by name.

**"No price" or "Not for sale"**
The product has no price yet, or is inactive/archived. Fix it in **Products**.

**"Prices may be out of date"**
The till has not synced for a while. Check the internet connection and select
<span class="ui">Sync now</span>.

**"No reasons are set up for this" on cash in/out**
Add or switch on [cash in/out reasons](/business/cash-reasons/).

**"No manager can approve on this till"**
A manager needs a POS PIN and access to this branch.

**The receipt is too wide, too small, or has a header and URL**
Set **Receipt paper** to 58 or 80 mm in [Till settings](/till/shortcuts-and-settings/#receipt-printing),
and turn off *Headers and footers* in the browser's print dialog.

## Sync

**"Sync error · … need attention"**
Open the sync panel and select <span class="ui">Try again</span>. If it stays, an administrator
checks [Sync issues](/business/pos-devices/#sync-issues).

**"Needs re-authorising" in POS devices**
The till has had no contact for 90 days. Select <span class="ui">Re-authorise</span> and enter the
new code on the till. Waiting sales are kept.

**A till broke with sales still waiting**
If it still starts, connect it and select <span class="ui">Sync now</span>, or
<span class="ui">Export (JSON)</span> the waiting work. Then follow
[Replacing a till step by step](/business/pos-devices/#replacing-a-till-step-by-step).

**"This till is not registered"**
The till was revoked or its authorisation expired. An administrator selects
<span class="ui">Re-authorise</span> in **POS devices** and you enter the new code. Waiting work is
kept.

**The catalog on the till looks wrong**
Sync panel → <span class="ui">Download everything again</span>. Waiting operations are kept.

**"Clock off by … min" in POS devices**
Set the correct date, time and time zone on the till device (turn on automatic time).

## Data and reports

**Stock is negative**
Usually opening stock was not entered or a delivery was not received in GPOS. Post the missing
[goods received](/purchasing/receiving-goods/) or do a [stock count](/inventory/counts/).

**A report says "These figures may still change"**
A till still has sales to send, or something waits in Sync issues. Check again later.

**"Someone else's change" / "This conflicts with existing data"**
Another person saved the same record. Select <span class="ui">Reload latest</span> and make your
change again.
