{
    //
    
    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key];
    }
    
    const personName = { name: "Alice", age: 30 };
    console.log(getProperty(personName, "name"))

    //


}