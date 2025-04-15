import { useEffect, useRef } from "react";
import Phaser from "phaser";

const Game = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 800 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image("background", "/assets/background.png");
      this.load.image("platform", "/assets/platform.png");
      this.load.spritesheet("player", "/assets/sprite sheet.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
      this.load.audio("jump", "/assets/retro-jump-3-236683.mp3");
    }

    let player: Phaser.Physics.Arcade.Sprite;
    let cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, "background").setScale(1.5);

      const platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, "platform").setScale(2).refreshBody();
      platforms.create(600, 425, "platform");
      platforms.create(50, 250, "platform");
      platforms.create(750, 220, "platform");

      player = this.physics.add.sprite(100, 450, "player");
      player.setBounce(0.18);
      player.setCollideWorldBounds(true);

      this.physics.add.collider(player, platforms);

      this.anims.create({
        key: "idle",
        frames: [{ key: "player", frame: 0 }],
        frameRate: 10,
      });

      this.anims.create({
        key: "walk-right",
        frames: this.anims.generateFrameNumbers("player", { start: 1, end: 2 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: "walk-left",
        frames: this.anims.generateFrameNumbers("player", { start: 3, end: 4 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: "jump-right",
        frames: [{ key: "player", frame: 5 }],
        frameRate: 10,
      });

      this.anims.create({
        key: "jump-left",
        frames: [{ key: "player", frame: 6 }],
        frameRate: 10,
      });

      cursors = this.input?.keyboard?.createCursorKeys();
    }

    function update(this: Phaser.Scene) {
      if (!cursors || !player || !player.body) return;

      if (cursors.left.isDown) {
        player.setVelocityX(-160);
      
        if (player.body.blocked.down) {
          player.anims.play("walk-left", true);
        }
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
      
        if (player.body.blocked.down) {
          player.anims.play("walk-right", true);
        }
      } else {
        player.setVelocityX(0);
      
        if (player.body.blocked.down) {
          player.anims.play("idle");
        }
      }

      if (!player.body.blocked.down) {
        player.anims.play(player.body.velocity.x >= 0 ? "jump-right" : "jump-left", true);
      }
      
      if (cursors.up.isDown && player.body.blocked.down) {
        this.sound.play("jump");
        player.setVelocityY(-500);
      }
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default Game;
