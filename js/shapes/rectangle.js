import {dist2D} from '../helper-functions.js';

export class NonRotatableRectangle {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    setTopLeftCorner(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx, colour) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    isCollisionWithPoint(point) {
        return (
            point.x >= this.x && 
            point.x <= this.x + this.width &&
            point.y >= this.y &&
            point.y <= this.y + this.height
        )
    }

    isCollisionWithCircle(circle) {
        
        let testX = null;
        let testY = null;

        if (circle.centre.x < this.x) {
            testX = this.x;
        }   
        else if (circle.centre.x > this.x + this.width) {
            testX = this.x + this.width;
        }
        else {testX = circle.centre.x} // In this else branch the circle x coord must be inside the rectangle's left and right sides

        if (circle.centre.y < this.y) {
            testY = this.y;
        }   
        else if (circle.centre.y > this.y + this.height) {
            testY = this.y + this.height;
        }
        else {testY = circle.centre.y} // In this else branch the circle y coord must be inside the rectangle's top and bottom sides
        
        let dist = dist2D(
            {x : testX, y : testY},
            circle.centre
        );

        return dist <= circle.radius;
    }

    isCollisionWithNonRotatableRectangle(rect) {
        return (
            rect.x <= this.x + this.width &&
            rect.x + rect.width >= this.x &&
            rect.y <= this.y + this.height &&
            rect.y + rect.height >= this.y
        )
    }

}