import { Shape } from "../base-interface/Shape.interface";

export class Square implements Shape {

   draw(): void{
      console.log("Inside Square::draw() method.");
   }
}
