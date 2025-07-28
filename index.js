function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person = {
  name: "Ankesh",
  age: 25
};

personInfo.call(person);
