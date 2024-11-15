{
    //

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    
    const result = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(result, ["name", "age"]));

    //
}