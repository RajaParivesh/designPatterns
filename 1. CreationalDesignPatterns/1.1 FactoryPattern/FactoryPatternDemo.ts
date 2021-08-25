import { ShapeFactory } from "./ShapeFactory";
import { Shape } from "./base-interface/Shape.interface";

class FactoryPatternDemo {

    shapeFactory: ShapeFactory;
    shape1: Shape;
    shape2: Shape;
    shape3: Shape;

    main() {

        /*
         * Here, we are creating object only one time but, 
         * we are able to get objects of different shapes using a common function getShape.
         * 
         * we create object without exposing the creation logic to the client 
         * and refer to newly created object using a common interface.
         */
        this.shapeFactory = new ShapeFactory();

        //call draw method of Circle
        this.shape1 = this.shapeFactory.getShape("CIRCLE");
        this.shape1.draw();

        //get an object of Rectangle and call its draw method.
        this.shape2 = this.shapeFactory.getShape("RECTANGLE");

        //call draw method of Rectangle
        this.shape2.draw();

        //get an object of Square and call its draw method.
        this.shape3 = this.shapeFactory.getShape("SQUARE");

        //call draw method of square
        this.shape3.draw();
    }

}

// Inside Circle::draw() method.
// Inside Rectangle::draw() method.
// Inside Square::draw() method.