var Player = function () {

    this.sprite = new Sprite("hero.png");
    this.sprite.buildAnimation(1, 1, 32, 32, 0.05,
        [0]);

    this.position = new Vector2();
    this.position.set(28 * TILE, 42 * TILE);

    this.width = 32;
    this.height = 32;


};




Player.prototype.update = function (deltaTime) {

    this.sprite.update(deltaTime);


    
    // collision detection
    // Our collision detection logic is greatly simplified by the fact that the
    // player is a rectangle and is exactly the same size as a single tile.
    // So we know that the player can only ever occupy 1, 2 or 4 cells.
    // This means we can short-circuit and avoid building a general purpose
    // collision detection
    // engine by simply looking at the 1 to 4 cells that the player occupies:
    var tx = pixelToTile(this.position.x);
    var ty = pixelToTile(this.position.y);
    var nx = (this.position.x) % TILE; // true if player overlaps right
    var ny = (this.position.y) % TILE; // true if player overlaps below
    var cell = cellAtTileCoord(LAYER_WALLS, tx, ty);

    // If the player has vertical velocity, then check to see if they have hit a platform
    // below or above, in which case, stop their vertical velocity, and clamp their
    // y position:

}

Player.prototype.draw = function () {
    this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y - worldOffsetY);
}