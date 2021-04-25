import React, {Component} from 'react';
/*
class Car extends React.Component {
    constructor (){
        //Super();
        //this.brand=name;
        this.state = {color: "red"}
    };
    
    render() {
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod){
        super(name);
        this.model=mod;
    }
    
    show(){
        return this.present() + ', It is ' + this.model;
    }
}

mycar = new Model("Ford", "Harris");
mycar.show();
*/
class App extends React.Component {
   render() {
      return (
         <div className="App">
            <h1 class="header">Hello World!!!</h1>
            <h2>Content</h2>
            <p>This is the content</p>
            <label for="test">Name: </label>
            <input name="test" type="text" />
         </div>
      );
   }
}
export default App;
