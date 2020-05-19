import {dist2D} from '../js/helper-functions.js';

describe('test pythagrean 2D distance', function () {
    test('positive x and y distances', function () {
        
        let p1 = {x : 1, y : 2};
        let p2 = {x : 4, y : 6};
        
        expect(dist2D(p1, p2)).toBe(5);
    })
})

