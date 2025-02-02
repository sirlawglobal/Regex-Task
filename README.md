# Credit Card Validation - Brief Explanation of RegEx Patterns

## Overview
This document explains the regular expressions used to validate different credit card numbers based on their issuer (Visa, Mastercard, American Express, Discover). Each card provider follows a unique numbering format, which is captured using regex patterns.

## Regular Expression Patterns Explained

### 1. **Visa** (`/^4\d{12}(\d{3})?$/`)
   - **Starts with:** `4`
   - **Length:** 13 or 16 digits
   - **Pattern Breakdown:**
     - `^4` → Ensures the card number starts with `4`
     - `\d{12}` → Matches 12 digits after the initial `4`
     - `(\d{3})?` → Optionally matches an additional 3 digits (for 16-digit cards)
     - `$` → End of the string

### 2. **Mastercard** (`/^5[1-5]\d{14}$/`)
   - **Starts with:** `51-55`
   - **Length:** 16 digits
   - **Pattern Breakdown:**
     - `^5[1-5]` → Ensures the number starts with `51-55`
     - `\d{14}` → Matches 14 additional digits
     - `$` → End of the string

### 3. **American Express (Amex)** (`/^3[47]\d{13}$/`)
   - **Starts with:** `34` or `37`
   - **Length:** 15 digits
   - **Pattern Breakdown:**
     - `^3[47]` → Ensures the number starts with `34` or `37`
     - `\d{13}` → Matches 13 additional digits
     - `$` → End of the string

### 4. **Discover** (`/^6(?:011|5\d{2})\d{12}$/`)
   - **Starts with:** `6011` or `65XX`
   - **Length:** 16 digits
   - **Pattern Breakdown:**
     - `^6` → Ensures the number starts with `6`
     - `(?:011|5\d{2})` → Matches either `011` or `5XX`
     - `\d{12}` → Matches 12 additional digits
     - `$` → End of the string


