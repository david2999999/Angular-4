class Point2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // making the constructor parameters optional
  // constructor(x?: number, y?: number) {
  //   this.x = x;
  //   this.y = y;
  // }

  draw() {
    // ...
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance(another: Point2) {
    // ...
  }
}

let point = new Point2(1, 2);
point.draw();
