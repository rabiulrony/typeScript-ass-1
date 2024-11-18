"use strict";
{
    //
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const years = currentYear - this.year;
            return years;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
    //
}
