// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Validate credit card using Luhn Algorithm
function validateCred(array) {
    let sum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      let currentValue = array[i];
  
      // Double every other digit starting from second-to-last
      if ((array.length - 1 - i) % 2 === 1) {
        currentValue *= 2;
        if (currentValue > 9) {
          currentValue -= 9;
        }
      }
  
      sum += currentValue;
    }
    return sum % 10 === 0; // Valid if divisible by 10
  }
  
  // Find all invalid cards in a batch
  function findInvalidCards(nestedArray) {
    const invalidCards = [];
    for (let i = 0; i < nestedArray.length; i++) {
      const card = nestedArray[i];
      if (!validateCred(card)) {
        invalidCards.push(card); // Add invalid card to the array
      }
    }
    return invalidCards;
  }
  
  // Identify companies issuing invalid cards
  function idInvalidCardCompanies(invalidNums) {
    const companies = [];
    for (let i = 0; i < invalidNums.length; i++) {
      const card = invalidNums[i];
      const firstDigit = card[0];
  
      // Match first digit to company
      if (firstDigit === 3 && !companies.includes('Amex')) {
        companies.push('Amex');
      } else if (firstDigit === 4 && !companies.includes('Visa')) {
        companies.push('Visa');
      } else if (firstDigit === 5 && !companies.includes('Mastercard')) {
        companies.push('Mastercard');
      } else if (firstDigit === 6 && !companies.includes('Discover')) {
        companies.push('Discover');
      } else {
        console.log('Company not found'); // Handles unknown digits
      }
    }
    return companies;
  }
  
  // Simple test function
  function testMyCode() {
    console.log("Testing validateCred():");
    console.log("Should return true:", validateCred([4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8])); // Valid card
    console.log("Should return false:", validateCred([4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5])); // Invalid card
  
    console.log("\nTesting findInvalidCards():");
    const invalidCards = findInvalidCards(batch);
    console.log("Invalid cards found:", invalidCards.length, invalidCards); // Should show invalid cards
  
    console.log("\nTesting idInvalidCardCompanies():");
    const companies = idInvalidCardCompanies(invalidCards);
    console.log("Companies issuing faulty cards:", companies); // Should show company names
  }
  
  // Run the test function
  testMyCode();
  

  

    
