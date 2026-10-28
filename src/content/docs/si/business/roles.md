---
title: Roles and permissions
description: Ready-made roles, එක් එක් role එකට කරන්න පුළුවන් දේ, සහ ඔබේම roles හදන විදිහ.
sidebar:
  order: 4
---

:::note[ඔබේ plan එක අනුව වෙනස් වේ]
Ready-made roles හැම plan එකකම තියෙනවා. **ඔබේම roles** හදන එක සහ වෙනස් කරන එක **Your own roles** කියන plan
feature එකයි. [Plans and features](/si/getting-started/plans/) බලන්න.
:::

**Role** එකක් කියන්නේ **permissions** set එකක්. [Employees](/si/business/employees/) හි employees ට roles දෙන්න
පුළුවන් — එක branch එකකට, එක register එකකට හෝ මුළු business එකටම.

## Ready-made roles

හැම business එකකටම මේ roles ලැබෙනවා. ඒවා **system** ලෙස mark කරලා තියෙන්නේ, edit කරන්න බැහැ.

| Role | කාටද | කෙටියෙන් |
|------|------|---------|
| **Owner** | Business owner | Business එකේ සම්පූර්ණ පාලනය. Terms of service accept කරන්නේ සහ staff two-step sign-in භාවිතා කරන්න ඕනද කියලා තීරණය කරන්නේත් owner විතරයි. |
| **Administrator** | Office administrator | සම්පූර්ණ administrative access. |
| **Manager** | Shop manager | Branch එක දිනපතා පවත්වාගෙන යනවා: products සහ prices, stock, purchasing, customers, sales, discounts, returns, voids, cash shifts, reports සහ audit log. Employees, roles, devices හෝ settings manage කරන්න බැහැ. |
| **Cashier** | Till staff | Till එකේ විකුණනවා, තමන්ගේ cash shift එක open සහ close කරනවා, customers හොයනවා සහ add කරනවා. |
| **Inventory manager** | Store keeper | Products සහ catalog, stock adjustments, transfers, purchasing සහ reports. |
| **Accountant** | ඔබේ accountant | Sales, cash shifts සහ reports (**cost සහ margin ඇතුළුව**) බලන්න, audit log එකත්. |

## හැම permission එකක්ම

| Area | Permission | ඉඩ දෙන දේ |
|------|------------|-----------|
| Business | View business profile | Dashboard සහ settings බලන්න. |
| Settings | Manage business settings | Settings, payment methods සහ reasons වෙනස් කරන්න. |
| Branches | View branches, warehouses and registers | Branch structure එක බලන්න. |
| Branches | Create and update branches, warehouses and registers | Branch structure එක වෙනස් කරන්න. |
| Devices | Register and revoke POS devices | Tills pair කරන්න සහ අයින් කරන්න, sync issues විසඳන්න. |
| Employees | View employees | Employee list එක බලන්න. |
| Employees | Create, update and disable employees and their roles | Staff manage කරන්න. |
| Roles | Create and update roles | Custom roles හදන්න. |
| Products | View products and catalogue | Products බලන්න. |
| Products | Create products · Update products · Archive products | Catalog එක manage කරන්න. |
| Products | Add a new product at the till when a barcode is not found | Default විදිහට Owner, Administrator සහ Manager; අනිත් අයට manager ගේ PIN එක ඕන. Plan feature එකක්. |
| Prices | Change selling prices | Prices set කරන්න සහ schedule කරන්න. |
| Inventory | View inventory | Stock levels සහ movements බලන්න. |
| Inventory | Post inventory adjustments | Opening stock, adjustments, write-offs, stock counts. |
| Inventory | Transfer stock between locations | Transfers යවන්න සහ receive කරන්න. |
| Purchasing | Manage suppliers and purchase orders | Suppliers, orders, receiving, supplier returns. |
| Customers | View customers · Create and update customers | Customer profiles. |
| Customers | Export and erase customer data (PDPA requests) | Customer කෙනෙකුගේ personal data download හෝ erase කරන්න. Default විදිහට Owner සහ Administrator විතරයි. |
| Sales | View sales | Back office එකේ sales බලන්න. |
| Sales | Create sales at the POS | Till එකේ විකුණන්න. |
| Sales | Apply manual discounts | වැඩි limit එක දක්වා discounts දෙන්න සහ cashiers ගේ discounts approve කරන්න. |
| Sales | Process returns · Void sales | Manager ගේ approval නැතුව. |
| Cash | Open and close own cash shift, cash in/out | Till එකේ shift එකක් පවත්වාගෙන යන්න. |
| Cash | View and reconcile all cash shifts | හැම shift එකක්ම බලන්න, count එකක් නැතුව close කරන්න, cash outs approve කරන්න. |
| Expenses | Record expenses | Expense features සඳහා වෙන් කරලා. |
| Reports | View reports | Reports open කරන්න. |
| Reports | See cost, margin and stock value in reports | Cost figures පෙන්නන්න. |
| Audit | View the business audit log | Audit log එක open කරන්න. |

සමහර permissions වැඩ කරන්නේ අදාළ feature එක ඔබේ plan එකේ තියෙනවා නම් විතරයි (උදා. inventory හෝ purchasing).

## ඔබේම role එකක් හදන්න

1. **Roles** → <span class="ui">New role</span> වෙත යන්න.
2. **Code** එකක් (උදා. `STOCK_CLERK`, පස්සේ වෙනස් කරන්න බැහැ), **Name** එකක් සහ **Description** එකක් දාන්න.
3. Area අනුව group කරපු permissions tick කරන්න.
4. <span class="ui">Create role</span> තෝරන්න.

ඔබට දෙන්න පුළුවන් **ඔබ ළඟම තියෙන** permissions විතරයි — අනිත් ඒවා *You do not hold this permission* ලෙස පෙන්නනවා.

Custom role එකක් වෙනස් කරන්න <span class="ui">Edit</span> සහ <span class="ui">Save role</span> තෝරන්න. තවදුරටත් ඕන
නැත්නම් <span class="ui">Archive</span> තෝරන්න.

:::tip[Ready-made role එකකින් පටන් ගන්න]
Discounts දෙන්නත් පුළුවන් cashier කෙනෙක් ඕනද? Cashier permissions වලට **Apply manual discounts** සහ **Process
returns** එකතු කරලා *Senior cashier* role එකක් හදන්න.
:::
