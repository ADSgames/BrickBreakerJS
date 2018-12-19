// Powerup class
export default class Powerup extends Phaser.GameObjects.Sprite {
  // Init
  constructor (scene, x, y, type) {
    // Create sprite
    super(scene, x, y, '');
    scene.add.existing(this);
    
    // Physics
    scene.physics.world.enable(this);
    
    this.body.setSize(40, 20);
    this.body.setOffset(0, 0);
    
    this.body.onCollide = true;
    
    // Select texture
    this.type = type;
    super.setTexture(this.selectImage(this.type));
  }
  
  // Select image
  selectImage(type) {
    switch (type) {
      case 0:
        return 'img_powerup_ball_slow';
      case 1:
        return 'img_powerup_ball_fast';
      case 2:
        return 'img_powerup_ball_multi';
      case 3:
        return 'img_powerup_bar_big';
      case 4:
        return 'img_powerup_bar_small';
    }
    
    return 'img_powerup_error';
  }
  
  // Get powerup type
  getType() {
    return this.type;
  }
}