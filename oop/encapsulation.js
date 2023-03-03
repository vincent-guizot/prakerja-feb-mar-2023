// Encapsulation : access level public, protected, private

// Setter dan Getter
// Setter untuk memasukan value ke dalam key
// Getter untuk mengambil value dari key

class Vehicle {
  constructor(id, name, type, brand, price) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._brand = brand;
    this._price = price;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
  get brand() {
    return this._brand;
  }
  get price() {
    return this._price;
  }

  set setId(id) {
    this._id = id;
  }
  set setName(name) {
    this._name = name;
  }
  set setType(type) {
    this._type = type;
  }
  set setBrand(brand) {
    this._brand = brand;
  }
  set setPrice(price) {
    this._price = price;
  }
}

const vehicle = new Vehicle(1, "Civic all new", "sedan", "Honda", 350);
console.log(vehicle.id);
console.log(vehicle.name);
console.log(vehicle.type);
console.log(vehicle.price);
console.log(vehicle.brand);

vehicle.setId = 10;
vehicle.setName = "All New Civic";
vehicle.setType = "sedan";
vehicle.setBrand = "Honda";
vehicle.setPrice = 5000;

console.log(vehicle);
