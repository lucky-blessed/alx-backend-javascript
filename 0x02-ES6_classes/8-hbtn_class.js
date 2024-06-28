class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // Override the behavior when cast to a Number
  valueOf() {
    return this._size;
  }

  // Override the behavior when cast to a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
