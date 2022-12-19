class Point2D {
    public x: number;
    public y: number;
    
    public constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    public toString(): string {
      return "" + this.x.toFixed(2) + ", " + this.y.toFixed(2);
    }
}
  
class Calc {
    public static distance(a: Point2D, b: Point2D): number {
        let dis = Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
        return dis;
    }
}
  
abstract class Shape {
    public name: string;
  
    public constructor(name: string) {
        this.name = name;
    }
  
    public getName(): string {
        return this.name;
    }
  
    abstract inside(point: Point2D): boolean {}
  
    abstract getArea(): number {}
  
    abstract getPerimeter(): number {}
  
    public toString(): string {
        return this.name;
    }
}
  
class Circle extends Shape {
    public center: Point2D;
    public radius: number;
  
    constructor(center: Point2D, radius: number) {
        super("Circ");
        this.center = center;
        this.radius = radius;
    }
  
    public inside(point: Point2D) {
        return true;
    }
  
    public getPerimeter(): number {
        let p = Math.pow(this.radius, 2) * Math.PI;
        return p;
    }
  
    public getArea(): number {
        let a: number = 2 * Math.PI * this.radius;
        return a;
    }
  
    public toString(): string {
        return "Circ: C=(" + this.center + "), R=" + this.radius.toFixed(2);
    }
}
  
class Rectangle extends Shape {
    p1: Point2D;
    p2: Point2D;

    public constructor(p1: Point2D, p2: Point2D) {
        super("Rect");
        this.p1 = p1;
        this.p2 = p2;
    }

    public inside(point: Point2D) {
        return true;
    }

    public getArea(): number {
        let l1 = this.p2.x - this.p1.x;
        let l2 = this.p2.y - this.p1.y;
        let a = Math.abs(l1) * Math.abs(l2);
        return a;
    }

    public getPerimeter(): number {
        let l1 = this.p2.x - this.p1.x;
        let l2 = this.p2.y - this.p1.y;
        let p = (Math.abs(l1) + Math.abs(l2)) * 2;
        return -p;
    }

    public toString(): string {
        return `Rect: P1=(${this.p1}) P2=(${this.p2})`;
    }
}