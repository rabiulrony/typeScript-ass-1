{
    //

    interface Details {
        name: string;
        age: number;
        email: string;
    }
    
    function updateProfile(main: Details, updates: Partial<Details>): Details {
        const upMain = main;
        const upMainDetails = updates;
        const allUpdated = {...upMain, ...upMainDetails}
        return allUpdated;
    }

    const myDetails = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myDetails, { age: 26 }));

    //
}