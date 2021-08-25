import { Shape } from "../base-interface/Shape.interface";

export class Circle implements Shape {

    draw(): void {
        console.log("Inside Circle::draw() method.");
    }
}