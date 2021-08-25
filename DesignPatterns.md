## Design Pattern:

**Design patterns** are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

---

## SOLID Principles:
* **S** = **Sigle Responsibility Principle**: ```A class should have only single responsibilty and should have one and only one reason for change```
* **O** = **Open/Close principle**: ```A class should be open for extension, but close for modification```
* **L** = **Listov of subsitution principle**: ```Objects in a program should be replaceable with instance of their subtype without altering the correctness of program```
* **I** = **Interface segregation principle**: ```Segregation interface as per the requirements of program, rather than one general purpose implementation.```
* **D** = **Dependency Injection principle**: ```Should depend on abstrations rather than concrete implementations.```

---

# Factory Pattern: 

* Factory pattern is one of the most used design patterns.
* This type of design pattern comes under **creational pattern** as this pattern provides one of the best ways to create an object
* we create object without exposing the creation logic to the client and refer to newly created object using a common interface.
* **_Example:_** we are creating object only one time but, we are able to get objects of different shapes using a common function getShape.
* **Problem:** 
    Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the Truck class.

    After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

    Adding a new transportation class to the program causes an issue
    Adding a new class to the program isn’t that simple if the rest of the code is already coupled to existing classes.

    Great news, right? But how about the code? At present, most of your code is coupled to the Truck class. Adding Ships into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.

    As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behavior depending on the class of transportation objects.
* **Solution** 
    **_Factory Pattern_**

---
# Singleton Pattern: 
* Singleton pattern is one of the simplest design patterns
* This type of design pattern comes under **creational pattern** as this pattern provides one of the best ways to create an object
* This pattern involves a **single class** which is responsible to create an object while making sure that **only single object** gets created. This class provides a way to access its only object which can be **accessed directly without need to instantiate the object** of the class.