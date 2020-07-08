var startgame = {
  preload: function() {
      game.load.crossOrigin = 'anonymous';
      game.load.image('open', 'immagini/inizio.png');
      game.load.image('tastoo', 'immagini/next.png');
      game.load.image('tastoob', 'immagini/start.png');
      game.load.image('tastoo1', 'immagini/traspi.png');
      game.load.image('autori', 'immagini/autori.png');
      game.load.image('schermata1', 'immagini/schermata1.png');
      game.load.image('schermata2', 'immagini/schermata2.png');
  },

  create: function() {
      image1 = game.add.sprite(0, 0, 'open');
      jump = 480;

      image2 = game.add.sprite(270, 575, 'tastoo1');
      image2.scale.setTo(0.16, 0.2);
      image2.inputEnabled = true;
      image2.events.onInputDown.add(this.image2Click, this);

      image3 = game.add.sprite(20, 575, 'tastoo1');
      image3.scale.setTo(0.16, 0.2);
      image3.inputEnabled = true;
      image3.events.onInputDown.add(this.imageClick, this);

      image4 = game.add.sprite(950, 50, 'tastoo');
      image4.scale.setTo(0.2, 0.2);
      image4.inputEnabled = true;
      image4.events.onInputDown.add(this.image3Click, this);

      image8 = game.add.sprite(950, 150, 'tastoob');
      image8.scale.setTo(0.2, 0.2);
      image8.inputEnabled = true;
      image8.events.onInputDown.add(this.image6Click, this);

  },

  imageClick: function(pointer) {
      var image5 = game.add.sprite(-20, 0, 'autori');
      //image5.scale.setTo(0.8, 0.8);
  },

  image2Click: function(pointer) {
    var image6 = game.add.sprite(100, 0, 'schermata1');
    image6.scale.setTo(0.8, 0.8);
    image6.events.onInputDown.add(this.image3Click, this);
  },

  image3Click: function(pointer) {
    var image7 = game.add.sprite(100, 0, 'schermata2');
    image7.scale.setTo(0.8, 0.8);
    image7.events.onInputDown.add(this.image4Click, this);
  },

  image6Click: function(pointer) {
    this.game.state.start('Game1');
  }
};

var game = new Phaser.Game(1024, 768, Phaser.AUTO);

game.state.add('startgame', startgame);
game.state.start('startgame');
