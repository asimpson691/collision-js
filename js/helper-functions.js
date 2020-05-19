export function dist2D(p1, p2) {
    
    let distX = p2.x - p1.x;
    let distY = p2.y - p1.y;
    
    return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2))
}

