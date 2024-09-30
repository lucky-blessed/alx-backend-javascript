class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const ClonedCar = this.constructor[Symbol.species] || this.constructor;
    return new ClonedCar(this._brand, this._motor, this._color);
  }
}

// Example usage:
const myCar = new Car('Tesla', 'Electric', 'Red');
const clonedCar = myCar.cloneCar();

console.log(myCar);  // Car { _brand: 'Tesla', _motor: 'Electric', _color: 'Red' }
console.log(clonedCar);  // Car { _brand: 'Tesla', _motor: 'Electric', _color: 'Red' }
console.log(myCar === clonedCar);
