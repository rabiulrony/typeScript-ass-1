{
    //

    const removeDuplicates = (arrNum : number []) : number [] => {
        const allNumbers = [...new Set(arrNum)];
          return allNumbers;
        }
        const numbers = [1, 2, 2, 3, 4, 4, 5];
        const singleNumbers = removeDuplicates(numbers);
        console.log(singleNumbers);

    //
}
