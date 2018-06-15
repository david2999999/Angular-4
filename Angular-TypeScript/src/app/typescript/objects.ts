class Point2 {
  private x: number;
  private y: number;

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
}

let point = new Point2(1, 2);
point.draw();
