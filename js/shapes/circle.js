import {dist2D} from '../helper-functions.js'

export class Circle {
    
    constructor(xPos, yPos, radius) {
        this.centre = {x : xPos, y : yPos};
        this.radius = radius;
    }

    setCentre(xPos, yPos) {
        this.centre = {x : xPos, y : yPos};
    }

    draw(ctx, colour) {
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(this.centre.x, this.centre.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    isCollisionWithPoint(point) {
        return dist2D(point, this.centre) <= this.radius;
    }

    isCollisionWithCircle(circle) {
        return dist2D(circle.centre, this.centre) <= (circle.radius + this.radius);
    }

    isCollisionWithNonRotatableRectangle(rect) {
        
        let testX = null;
        let testY = null;

        if (this.centre.x < rect.x) {
            testX = rect.x;
        }   
        else if (this.centre.x > rect.x + rect.width) {
            testX = rect.x + rect.width;
        }
        else {testX = this.centre.x} // In this else branch the circle x coord must be inside the rectangle's left and right sides

        if (this.centre.y < rect.y) {
            testY = rect.y;
        }   
        else if (this.centre.y > rect.y + rect.height) {
            testY = rect.y + rect.height;
        }
        else {testY = this.centre.y} // In this else branch the circle y coord must be inside the rectangle's top and bottom sides
        
        let dist = dist2D(
            {x : testX, y : testY},
            this.centre
        );

        return dist <= this.radius;
    }

}

