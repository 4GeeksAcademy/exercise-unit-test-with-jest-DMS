const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 dollar is 146.26 yen (1 / 1.07 * 156.5)
    const expected = (1 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); // Allowing a small margin of error due to floating point arithmetic
})

test("1000 yen should be 5.56 pounds", function() {
    // Use the function like its supposed to be used
    const pounds = fromYenToPound(1000);

    // If 1000 yen is 5.56 pounds (1000 / 156.5 * 0.87)
    const expected = (1000 / 156.5) * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2); // Allowing a small margin of error due to floating point arithmetic
})