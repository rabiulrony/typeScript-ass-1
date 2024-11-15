{
    //

    type Circle = {
        shape: "circle";
        radius: number;
    };
    
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    
    type ShapeName = Circle | Rectangle;
    
    const calculateShapeArea = (shape: ShapeName): number => {
        if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        } else {
            return Math.PI * shape.radius * shape.radius;
        }
    }
    
    const circleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
    console.log(circleArea); 

    //
}