import {Circle} from '../js/shapes/circle.js';

describe('test point circle collision detection', function () {
    
    test('point inside circle', function () {
        
        let p = {x : 7, y : 6};
        let circle = new Circle(10, 10, 6);
        
        expect(circle.isCollisionWithPoint(p)).toBe(true);
    })

    test('point on circle circumference', function () {
        
        let p = {x : 7, y : 6};
        let circle = new Circle(10, 10, 5);
        
        expect(circle.isCollisionWithPoint(p)).toBe(true);
    })

    test('point outside circle', function () {
        
        let p = {x : 7, y : 6};
        let circle = new Circle(10, 10, 4.9);
        
        expect(circle.isCollisionWithPoint(p)).toBe(false);
    })

})
