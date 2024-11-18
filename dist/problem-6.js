"use strict";
{
    function updateProfile(main, updates) {
        const upMain = main;
        const upMainDetails = updates;
        const allUpdated = Object.assign(Object.assign({}, upMain), upMainDetails);
        return allUpdated;
    }
    const myDetails = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myDetails, { age: 26 }));
    //
}
