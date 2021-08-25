import { SingleObject } from "./SingleObject";

class SingletonPatternDemo {

    object: SingleObject
    
    public main(): void {

        //Illegal construct/Wrong way
        //Compile Time Error: The constructor SingleObject() is not visible
        //SingleObject object = new SingleObject();

        //Get the only object available
        this.object = SingleObject.getInstance();

        //show the message
        this.object.showMessage();
    }
}