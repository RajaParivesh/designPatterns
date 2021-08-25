export class SingleObject {

    //create an object of SingleObject
    private static  instance : SingleObject = new SingleObject();
 
    //make the constructor private so that this class cannot be
    //instantiated
    private constructor(){}
 
    //Get the only object available
    public static  getInstance():SingleObject{
       return this.instance;
    }
 
    showMessage():void{
       console.log("Hello World!");
    }
 }

