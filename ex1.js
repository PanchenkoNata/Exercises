function User(name) {
    this.name = name;
    this.sayHello = () => {
        console.log("Hello ", this.name);
    };
}

let jhon = new User('Jhon');
jhon.sayHello();