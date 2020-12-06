import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import PreloaderScene from '../scenes/preloaderScene';
import TitleScene from '../scenes/titleScene';
import GameScene from '../scenes/gameScene';
import settings from './gameConfig';

const config = {
  type: Phaser.AUTO,
  width: settings.gameWidth,
  height: settings.gameHeight,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: settings.playerGravity,
      },
      debug: false,
    },
  },

  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    GameScene,
  ],
};

export default config;