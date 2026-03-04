test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Un dollar debe ser Yenes)", function() {
   const { fromDollarToYen } = require('./app.js')
   const yen = fromDollarToYen(1);
   const expected = 1.07 * 156.5;
   expect(fromDollarToYen(1.07)).toBe(167.455);

})

test("Un Yen debe ser Pound)", function() {
   const { fromYenToPound } = require('./app.js')
   const pound = fromYenToPound(1);
   const expected = 156.5 * 0.87;
   expect(fromYenToPound(156.5)).toBe(136.155);

})