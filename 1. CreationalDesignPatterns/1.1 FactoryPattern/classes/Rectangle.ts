import { Shape } from "../base-interface/Shape.interface";

export class Rectangle implements Shape {

    draw(): void {
       console.log("Inside Rectangle::draw() method.");
    }
 }