import { Shape } from "./base-interface/Shape.interface";
import { Rectangle } from "./classes/Rectangle";
import { Circle } from "./classes/Circle";
import { Square } from "./classes/Square";

export class ShapeFactory {

    //use getShape method to get object of type shape 
    getShape(shapeType): Shape {

        if (shapeType == null) {
            return null;
        }
        if (shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();

        } else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();

        } else if (shapeType.equalsIgnoreCase("SQUARE")) {
            return new Square();
        }

        return null;
    }
}
