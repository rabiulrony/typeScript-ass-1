"use strict";
{
    //
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const personName = { name: "Alice", age: 30 };
    console.log(getProperty(personName, "name"));
    //
}
