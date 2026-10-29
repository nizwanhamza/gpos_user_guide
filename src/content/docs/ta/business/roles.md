---
title: Roles and permissions
description: Ready-made roles, ஒவ்வொன்றும் என்ன செய்யலாம், உங்கள் சொந்த roles ஐ உருவாக்குவது எப்படி.
sidebar:
  order: 4
---

:::note[உங்கள் plan ஐப் பொறுத்தது]
Ready-made roles ஒவ்வொரு plan இலும் உள்ளன. **உங்கள் சொந்த roles** ஐ உருவாக்குவதும் மாற்றுவதும் **Your own roles**
என்ற plan feature. [Plans and features](/ta/getting-started/plans/) ஐப் பாருங்கள்.
:::

**Role** என்பது **permissions** இன் தொகுப்பு. [Employees](/ta/business/employees/) இல் employees க்கு roles ஐக்
கொடுக்கலாம் — ஒரு branch, ஒரு register அல்லது முழு business க்கு.

## Ready-made roles

ஒவ்வொரு business க்கும் இந்த roles கிடைக்கும். அவை **system** என mark செய்யப்பட்டுள்ளன, edit செய்ய முடியாது.

| Role | யாருக்கு | சுருக்கமாக |
|------|----------|-------------|
| **Owner** | Business owner | Business இன் முழுக் கட்டுப்பாடு. Terms of service ஐ accept செய்வதும், staff two-step sign-in ஐப் பயன்படுத்த வேண்டுமா என்று தீர்மானிப்பதும் owner மட்டுமே. |
| **Administrator** | Office administrator | முழு administrative access. |
| **Manager** | Shop manager | Branch ஐ தினசரி நடத்துவார்: products மற்றும் prices, stock, purchasing, customers, sales, discounts, returns, voids, cash shifts, reports, audit log. Employees, roles, devices அல்லது settings ஐ manage செய்ய முடியாது. |
| **Cashier** | Till staff | Till இல் விற்பனை செய்வார், தன் cash shift ஐ open மற்றும் close செய்வார், customers ஐத் தேடி add செய்வார். |
| **Inventory manager** | Store keeper | Products மற்றும் catalog, stock adjustments, transfers, purchasing, reports. |
| **Accountant** | உங்கள் accountant | Sales, cash shifts, reports (**cost மற்றும் margin உட்பட**) ஐப் பார்க்கலாம், audit log உம். |

## எல்லா permissions உம்

| Area | Permission | என்ன அனுமதிக்கும் |
|------|------------|---------------------|
| Business | View business profile | Dashboard மற்றும் settings ஐப் பார்க்க. |
| Settings | Manage business settings | Settings, payment methods, reasons ஐ மாற்ற. |
| Branches | View branches, warehouses and registers | Branch structure ஐப் பார்க்க. |
| Branches | Create and update branches, warehouses and registers | Branch structure ஐ மாற்ற. |
| Devices | Register and revoke POS devices | Tills ஐ pair செய்ய, அகற்ற, sync issues ஐத் தீர்க்க. |
| Employees | View employees | Employee list ஐப் பார்க்க. |
| Employees | Create, update and disable employees and their roles | Staff ஐ manage செய்ய. |
| Roles | Create and update roles | Custom roles ஐ உருவாக்க. |
| Products | View products and catalogue | Products ஐப் பார்க்க. |
| Products | Create products · Update products · Archive products | Catalog ஐ manage செய்ய. |
| Products | Add a new product at the till when a barcode is not found | Default ஆக Owner, Administrator, Manager; மற்றவர்களுக்கு manager இன் PIN தேவை. Plan feature. |
| Barcode labels | Print barcode labels | Back office இலும் till இலும் labels ஐ print செய்ய. Default ஆக Owner, Administrator, Manager, Inventory manager. Plan feature. |
| Prices | Change selling prices | Prices ஐ set மற்றும் schedule செய்ய. |
| Inventory | View inventory | Stock levels மற்றும் movements ஐப் பார்க்க. |
| Inventory | Post inventory adjustments | Opening stock, adjustments, write-offs, stock counts. |
| Inventory | Transfer stock between locations | Transfers ஐ அனுப்ப மற்றும் receive செய்ய. |
| Purchasing | Manage suppliers and purchase orders | Suppliers, orders, receiving, supplier returns. |
| Customers | View customers · Create and update customers | Customer profiles. |
| Customers | Export and erase customer data (PDPA requests) | Customer இன் personal data ஐ download அல்லது erase செய்ய. Default ஆக Owner மற்றும் Administrator மட்டும். |
| Sales | View sales | Back office இல் sales ஐப் பார்க்க. |
| Sales | Create sales at the POS | Till இல் விற்பனை செய்ய. |
| Sales | Apply manual discounts | அதிக limit வரை discounts கொடுக்க, cashiers இன் discounts ஐ approve செய்ய. |
| Sales | Process returns · Void sales | Manager இன் approval இல்லாமல். |
| Cash | Open and close own cash shift, cash in/out | Till இல் shift ஐ நடத்த. |
| Cash | View and reconcile all cash shifts | எல்லா shifts ஐயும் பார்க்க, count இல்லாமல் close செய்ய, cash outs ஐ approve செய்ய. |
| Expenses | Record expenses | Expense features க்கு ஒதுக்கப்பட்டது. |
| Reports | View reports | Reports ஐ open செய்ய. |
| Reports | See cost, margin and stock value in reports | Cost figures ஐக் காட்ட. |
| Audit | View the business audit log | Audit log ஐ open செய்ய. |
| Online marketplace | View online marketplace selling (connection and listings) | Sell online ஐப் பார்க்க. Default ஆக Owner, Administrator, Manager. Plan feature. |
| Online marketplace | Connect to an online marketplace and choose what is sold there | Gocart.lk க்கு apply செய்ய, store மற்றும் items ஐத் தேர்ந்தெடுக்க, விற்பனையை நிறுத்த. Default ஆக Owner மற்றும் Administrator. |

சில permissions தொடர்புடைய feature உங்கள் plan இல் இருந்தால் மட்டுமே வேலை செய்யும் (உதா. inventory அல்லது purchasing).

## உங்கள் சொந்த role ஐ உருவாக்குங்கள்

1. **Roles** → <span class="ui">New role</span> க்குச் செல்லுங்கள்.
2. **Code** (உதா. `STOCK_CLERK`, பின்னர் மாற்ற முடியாது), **Name**, **Description** ஐ உள்ளிடுங்கள்.
3. Area வாரியாகப் பிரிக்கப்பட்ட permissions ஐ tick செய்யுங்கள்.
4. <span class="ui">Create role</span> ஐத் தேர்ந்தெடுங்கள்.

**உங்களிடமே உள்ள** permissions ஐ மட்டுமே கொடுக்க முடியும் — மற்றவை *You do not hold this permission* எனக் காட்டப்படும்.

Custom role ஐ மாற்ற <span class="ui">Edit</span> மற்றும் <span class="ui">Save role</span> ஐத் தேர்ந்தெடுங்கள். இனி தேவையில்லையெனில்
<span class="ui">Archive</span> ஐத் தேர்ந்தெடுங்கள்.

:::tip[Ready-made role இலிருந்து தொடங்குங்கள்]
Discounts கொடுக்கவும் முடிந்த cashier தேவையா? Cashier permissions உடன் **Apply manual discounts** மற்றும் **Process
returns** ஐச் சேர்த்து *Senior cashier* role ஐ உருவாக்குங்கள்.
:::
