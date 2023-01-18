let carSeller1 = {

    firstName: "Kanat",
    lastName: "Karamesov",
    regYear: 2006,
    family: false,
    discountCalculation: function(year) {
        let discount;
        let numberOfYears = (2023-year)
        if((numberOfYears) <= 3) {
            discount = 0;
        } else if(((2023-year) > 3) &&
        ((2023-year) <= 5)) {
            discount = 30;
            } else if((2023-year) > 15) {
                discount = 80;
            }
            return discount;

        
                                        }
         
                }


console.log(carSeller1.discountCalculation(2006))
console.log(carSeller1.discountCalculation(2020))



