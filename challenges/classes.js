// 1. Copy and paste your prototype in here and refactor into class syntax.

class CbdMkr {
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume = function() {
    return this.length * this.width * this.height; 
  }
  surfaceArea = function() {
    return (this.length * this.width + this.length * this.height + this.width * this.height)*2;
  }
}
class CubeMaker extends CbdMkr {
    constructor(sides){
        super(sides);
        this.length = sides;
        this.height = sides;
        this.height = sides;
        this.side = sides;
    }
    volume = function() {
        return this.side * this.side * this.side; 
      }
    surfaceArea = function() {
       return 6*(this.side * this.side);
    }
}

let cuboid2 = new CbdMkr(4,5,5);
let cube = new CubeMaker(5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume());
console.log(cube.surfaceArea());