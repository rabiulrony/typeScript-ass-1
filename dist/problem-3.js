"use strict";
{
    //
    const countWordOccurrences = (loveTsc, tsc) => {
        const singleWords = loveTsc.toLowerCase().split(" ");
        const words = tsc.toLowerCase();
        const result = singleWords.filter(word => word === words).length;
        return result;
    };
    const output = countWordOccurrences("I love typescript", "typescript");
    console.log(output);
    //
}
