"use strict";
{
    //
    const sumArray = (numbers) => {
        let sum = 0;
        for (let num of numbers) {
            sum = sum + num;
        }
        return sum;
    };
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
    //
}
