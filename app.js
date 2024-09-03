const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // First, convert Dollar to Euro
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Then, convert Euro to Yen
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // return the yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // First, convert Yen to Euro
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Then, convert Euro to Pound
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // return the pound value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };