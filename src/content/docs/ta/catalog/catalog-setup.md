---
title: Categories, brands மற்றும் units
description: Products ஐ categories மற்றும் brands ஆக ஒழுங்கமையுங்கள், உங்கள் சொந்த units of measure ஐ add செய்யுங்கள்.
sidebar:
  order: 1
---

**Catalog setup** இல் நான்கு tabs உள்ளன: **Categories**, **Brands**, **Units**, **Taxes**. பல products ஐ add செய்யும் முன்
இவற்றை setup செய்யுங்கள் — அல்லது [import](/ta/catalog/import-export/) categories மற்றும் brands ஐ உருவாக்கட்டும்.

## Categories

Categories reports மற்றும் stock counts இல் products ஐக் குழுவாக்கும். அவை **3 levels வரை** செல்லலாம், உதா.
*Beverages › Soft drinks › Carbonated*.

1. <span class="ui">New category</span> ஐத் தேர்ந்தெடுங்கள்.
2. **Name** ஐ உள்ளிடுங்கள்.
3. **Parent category** ஐத் தேர்ந்தெடுங்கள், அல்லது *None (top level)*.
4. **Sort order** ஐ set செய்யுங்கள் — குறைந்த எண்கள் முதலில் காட்டப்படும்.
5. Save செய்யுங்கள்.

ஒரு category இன் கீழ் இன்னொன்றைச் சேர்க்க அதற்கு அருகில் <span class="ui">Add subcategory</span> ஐத் தேர்ந்தெடுங்கள்.
Category ஐ deactivate செய்ய, முதலில் அதன் subcategories ஐ deactivate செய்யுங்கள்.

## Brands

Brands products இலும் *Sales by brand* report இலும் தெரியும். <span class="ui">New brand</span> ஐத் தேர்ந்தெடுத்து, பெயரை
உள்ளிட்டு save செய்யுங்கள்.

## Units

Product இன் **unit** அது எப்படி price செய்யப்படும், எண்ணப்படும் என்பதைத் தீர்மானிக்கும். ஒவ்வொரு business க்கும் standard
units வழங்கப்படும்:

| Unit | Code | அளப்பது |
|------|------|----------|
| Piece | `pcs` | Count |
| Pack | `pack` | Count |
| Kilogram | `kg` | Weight |
| Gram | `g` | Weight |
| Litre | `l` | Volume |
| Millilitre | `ml` | Volume |
| Metre | `m` | Length |

உங்கள் சொந்த unit ஐ add செய்ய — உதா. *dozen* அல்லது *bundle*:

1. <span class="ui">New unit</span> ஐத் தேர்ந்தெடுங்கள்.
2. சுருக்கமான, சிறிய எழுத்து **Code** (உதா. `doz`) — பின்னர் மாற்ற முடியாது — மற்றும் **Name** ஐ உள்ளிடுங்கள்.
3. அது அளப்பதை **Measures** இல் தேர்ந்தெடுங்கள்: Count, Weight, Volume அல்லது Length.
4. **Decimals** ஐ set செய்யுங்கள் — quantities இல் எத்தனை தசம இடங்கள் இருக்கலாம், உதா. 1.250 kg க்கு `3`.
5. Save செய்யுங்கள்.

## Taxes

[Taxes](/ta/catalog/taxes/) ஐப் பாருங்கள்.
