function validateCreditCard(cardNumber) {
    // Define regex patterns for different card types
    const cardPatterns = {
        Visa: /^4\d{12}(\d{3})?$/,
        Mastercard: /^5[1-5]\d{14}$/,
        Amex: /^3[47]\d{13}$/,
        Discover: /^6(?:011|5\d{2})\d{12}$/
    };

    // Remove spaces or dashes from the input
    cardNumber = cardNumber.replace(/[\s-]/g, '');

    // Check against each pattern using .test()
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return `Valid ${cardType} card number`;
        }
    }

    return "Invalid card number";
}

// Test cases
console.log(validateCreditCard("4111 1111 1111 1111")); // Valid Visa card number
console.log(validateCreditCard("5500 0000 0000 0004")); // Valid Mastercard card number
console.log(validateCreditCard("3400 0000 0000 009"));  // Valid Amex card number
console.log(validateCreditCard("6011 0000 0000 0004")); // Valid Discover card number
console.log(validateCreditCard("1234 5678 9101 1121")); // Invalid card number
