const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1000,
    height: 585,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: true,
      },
      pixelArt: true,
      roundPixels: false,
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  let tiles = []
  let player;
  let enemyBall;


  function preload(){
    this.load.image("block", "./Game/Legacy-Fantasy - High Forest 2.3/Assets/battleground.png" )
    this.load.image("sprite", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Attack-01/Attack-01.gif")
    this.load.image("ball", "./Game/Legacy-Fantasy - High Forest 2.3/Assets/ballgif.gif" )
    this.load.spritesheet("attack", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Attack-01/Attack-01-Sheet.png", {frameWidth: 96, frameHeight: 80, frames: 8})
    this.load.spritesheet("dead", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Dead/Dead-Sheet.png", {frameWidth: 80, frameHeight: 80, frames: 9})
    this.load.spritesheet("idle", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Idle/Idle-Sheet.png", {frameWidth: 64, frameHeight: 80, frames: 4});
    this.load.spritesheet("jump", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Jumlp-All/Jump-All-Sheet.png", {frameWidth: 64, frameHeight: 64, frames: 15})
    this.load.spritesheet("run", "./Game/Legacy-Fantasy - High Forest 2.3/Character/Run/Run-Sheet.png", {frameWidth: 80, frameHeight: 80, frames: 8})  
}



  function create(){
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    
  //   this.anims.create({
  //     key: "enemyBall",
  //     frames: this.anims.generateFrameNumbers("ball", { start: 0, end: 3 }),
  //     frameRate: 10,
  //     repeat: -1
  // });
  
  

  enemyBall = this.physics.add.sprite(500, 100, "ball");
  enemyBall.anims.play("enemyBall");
  enemyBall.setCollideWorldBounds(true);
  enemyBall.setVelocity(200, 200); // Initial velocity for bouncing
  enemyBall.setBounce(1, 1); // Enable bouncing

    this.anims.create({
      key: "playerIdle",
      frames: this.anims.generateFrameNumbers("idle", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "playerRun",
      frames: this.anims.generateFrameNumbers("run", { start: 1, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "playerJump",
      frames: this.anims.generateFrameNumbers("jump", { start: 1, end: 14 }),
      frameRate: 15,
      repeat: -1,
    })

    this.add.tileSprite(0,0,1000,1000,"block").setOrigin(0,0);
    player = this.physics.add.sprite(50,310,"sprite");
    player.anims.play("playerIdle");
    
    // this.add.tileSprite(0,0,1000,1000,"ball").setOrigin(500,100);
    // slime = this.physics.add.sprite(50,310,"ball")
    // player.anims.play("enemyBall")
    
    player.setCollideWorldBounds(true);
    player.setSize(45,50)
  }
  
  function update(){
    if (player.body.velocity.x == 0) {
      player.anims.play("playerIdle", true);
    }
  
    if (keyD.isDown) {
      player.setVelocityX(100);
      player.anims.play("playerRun", true);
      player.flipX = false;
    } else {
      player.setVelocityX(0);
    }
    if (keyA.isDown) {
      player.setVelocityX(-100);
      player.anims.play("playerRun", true);
      player.flipX = true;
    }
    if (keyW.isDown) {
      player.setVelocityY(-100);
      player.anims.play("playerJump", true);
    }
  }

const game = new Phaser.Game(config);




