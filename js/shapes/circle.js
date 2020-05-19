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

}

