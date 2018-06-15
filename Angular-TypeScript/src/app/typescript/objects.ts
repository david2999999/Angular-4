class Point2 {
  constructor(private x: number, private y: number) {}

  // making the constructor parameters optional
  // constructor(x?: number, y?: number) {
  //   this.x = x;
  //   this.y = y;
  // }

  draw() {
    // ...
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let point = new Point2(1, 2);
point.draw();
