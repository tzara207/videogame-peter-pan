var open;
var arte;
var fine;
var enemi;
var nuvola;
var nuvola2;
var nuvola3;
var nuvola4;
var nuvola5;
var nuvola6;
var nuvola7;
var nuvola8;
var nuvola9;
var nuvola10;
var nuvola11;
var nuvola12;
var nuvola13;
var nuvola14;
var nuvScompare;
var ground;
var uncini;
var stelle;
var oggetti;
var rettangolo;
var oggetto1;
var oggetto2;
var oggetto3;
var oggetto4;
var enemies;
var enemy;
var scoreuncini = 5;
var scoreoggetti = 4;
var scorestelle = 0;
var scorestelleText;
var jump = 400;
var stellina;
var layer;
var nemicOOO;
var nemicOOO2;
var colpito = false;
var alberoColpito = false;
var stellaColpita = false;
var movingNuvola=false;
var enemyyy;
var friction=false;
var scatolaSpinta=false;
var time;
var bandiera;
var bandiera1;
var enemyfermo;
var enemyfermo1;
var nemo;
var nemo1;
var nemo2;
var nemo3;
var nemo4;
var nemo5;
var nemo6;
var nemo7;
var nemo8;
var nemo9;
var nemo10;
var nemo11;
var nemo12;
var nemo13;
var nemo14;
var nemo15;
var nemo16;
var nemo17;
var nemo18;
var nemo19;
var nemo20;
var nemo21;
var nemo22;
var nemo23;
var nemo24;
var nemo25;
var nemo26;
var nemo27;
var nemo28;
var nemo29;
var nemo20;
var nemo31;
var nemo32;
var nemo33;
var nemo34;
var nemo35;
var nemo36;
var nemo37;
var nemoColpito=false;
var friction = false;
var scivolose;
var pgrasse12Colpito;
var pgrasse13Colpito;
var pgrasse2;
var pgrasse3;
var pgrasse4;
var pgrasse5;
var pgrasse6;

//var pgrasse8;
var pgrasse9;

var pgrasse11;
var pgrasse12;
var pgrasse13;
var pgrasse14;
var pgrasse15;

var pgrasseColpito;
var pgrasse2Colpito;
var pgrasse3Colpito;
var pgrasse4Colpito;
var pgrasse5Colpito;
var pgrasse6Colpito;

//var pgrasse8Colpito;
var pgrasse9Colpito;

var pgrasse11Colpito;
var pgrasse12Colpito;
var pgrasse13Colpito;
var pgrasse14Colpito;
var pgrasse15Colpito;
var nuvolasemaforo;
var nuvolasemaforo2;
var cuori;
var cuorigrigi;
var trilly;
var fly3;
var shot;

var Game2 = {
preload: function() {

  game.world.width = 800*4;
  game.world.height = 800*11.05;

  game.load.crossOrigin = 'anonymous';

  game.load.tilemap('mappa2', 'mappa2.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'ground.png');
  game.load.image('tiless', 'piattaforme2.png');
  game.load.image('sky', 'immagini2/lev.png');
  game.load.image('sky2', 'immagini2/nuvolesfondo.png');
  game.load.image('sfondo1', 'immagini2/L1.png');
  game.load.image('sfondo2', 'immagini2/L2.png');
  game.load.image('sfondo3', 'immagini2/sfondo2liv2.png');
  game.load.image('sfondo4', 'immagini2/sfondo2liv1.png');
  game.load.spritesheet('stella', 'immagini2/star.png', 50, 50);
  game.load.image('scivolose', 'immagini2/scivolose.png');
  game.load.image('ground', 'immagini2/ground.png');
  game.load.image('nuvolasemaforo', 'immagini2/nuv check.png');
  game.load.image('nemico', 'immagini2/ape.png');
  game.load.image('nemico2', 'immagini2/ape.png');
  game.load.spritesheet('nemico3', 'immagini2/piccione vola dx.png', 499, 461);
  game.load.image('idra', 'immagini2/idra.png');
  game.load.spritesheet('dude', 'immagini2/peter.png', 349, 330);
  game.load.image('cloud', 'immagini2/nuvolebianche.png');
  game.load.image('oggetto1', 'https://examples.phaser.io/assets/particles/leaf1.png');
  game.load.image('oggetto2', 'https://examples.phaser.io/assets/particles/leaf1.png');
  game.load.image('oggetto3', 'https://examples.phaser.io/assets/particles/leaf1.png');
  game.load.image('oggetto4', 'https://examples.phaser.io/assets/particles/leaf1.png');
  game.load.image('scatola', 'immagini2/piccione.png');
  game.load.image('piccione', 'https://examples.phaser.io/assets/sprites/wabbit.png');
  game.load.image('oil', 'https://examples.phaser.io/assets/sprites/platform.png');
  game.load.image('bandiera', 'immagini2/bandiera.png');
  game.load.image('bandiera1', 'immagini2/bandiera.png');
  game.load.image('pgrasse192', 'immagini2/spine.png');
  game.load.image('pgrasse96', 'immagini2/spine.png');
  game.load.image('pgrasse3', 'immagini2/spine.png');
  game.load.image('pgrasse4', 'immagini2/stalattiti.png');
  game.load.image('bullet', 'immagini2/proiettile.png');
  game.load.image('big ben', 'immagini2/big ben.png');
  game.load.image('siepe', 'immagini2/siepe.png');
  game.load.image('cuore', 'immagini2/vita.png');
  game.load.image('cuoreno', 'immagini2/cuoregrigio.png');
  game.load.image('barra', 'immagini2/barra.png');
  game.load.image('mascherab', 'immagini2/mascherapolvere.png');
  game.load.image('trilly', 'immagini2/trilly.png');
  game.load.image('fly3', 'immagini2/fly3.png');
  game.load.image('shot', 'immagini2/shot.png');
},

create: function() {

    game.world.setBounds(0, 0, game.world.width, game.world.height);
    game.physics.startSystem(Phaser.Physics.ARCADE);


    time = 1;
    text = game.add.text(10, 10, 'Timer: ' + time, { font: "32px Arial", fill: "#ffffff", align: "center" });
    timeCheck = false;

    var sponx = 25;
    var spony = 8000;

    var sfondoo3 = game.add.sprite(0, 0, 'sky');
    sfondoo3.alpha = 0.85;
    sfondoo3.scale.setTo(1.2, 1);
    var sfondoo6 = game.add.sprite(0, 0, 'sky2');
    var bigben = game.add.sprite(1208, 1568, 'big ben');
    bigben.alpha = 0.8;
    var sfondoo1 = game.add.sprite(-630, 7000, 'sfondo1');
    sfondoo1.scale.setTo(1.2, 1.2);
    var sfondoo2 = game.add.sprite(-630, 6800, 'sfondo2');
    sfondoo2.scale.setTo(1.5, 1.5);
    var sfondoo4 = game.add.sprite(200, 7000, 'sfondo4');
    var sfondoo5 = game.add.sprite(200, 7200, 'sfondo3');

    var siepee = game.add.sprite(-100, 8358, 'siepe');
    siepee.scale.setTo(1, 1.3);
    var siepeee = game.add.sprite(520, 8358, 'siepe');
    siepeee.scale.setTo(1, 1.3);

    map = game.add.tilemap('mappa2');
    map.addTilesetImage('terreno', 'tiles')
    map.addTilesetImage('piattaformeok2', 'tiless')
    layer = map.createLayer('livello1');
    map.setCollisionBetween(1, 10000);

    platforms = game.add.group();
    platforms.enableBody = true;

    scivolose = game.add.group();
    scivolose.enableBody = true;
    game.physics.arcade.enable(scivolose);
    var sciv = scivolose.create(1408, 8576, 'scivolose');
    sciv.body.immovable = true;
    sciv2 = scivolose.create(2144, 8384, 'scivolose');
    sciv2.body.immovable = true;
    //sciv2.scale.setTo(0.75, 1);
    sciv3 = scivolose.create(2560, 8096, 'scivolose');
    sciv3.body.immovable = true;
    //sciv3.scale.setTo(0.5, 1);
    sciv4 = scivolose.create(1728, 8032, 'scivolose');
    sciv4.body.immovable = true;
    //sciv4.scale.setTo(0.5, 1);
    sciv5 = scivolose.create(1824, 7936, 'scivolose');
    sciv5.body.immovable = true;
    sciv6 = scivolose.create(1834, 7392, 'scivolose');
    sciv6.body.immovable = true;
    //sciv6.scale.setTo(0.75, 1);
    sciv7 = scivolose.create(1930, 7232, 'scivolose');
    sciv7.body.immovable = true;
    //sciv7.scale.setTo(0.5, 1);
    sciv8 = scivolose.create(2112, 7136, 'scivolose');
    sciv8.body.immovable = true;
    //sciv8.scale.setTo(0.25, 1);
    sciv9 = scivolose.create(1184, 7200, 'scivolose');
    sciv9.body.immovable = true;
    //sciv9.scale.setTo(0.25, 1);
    sciv10 = scivolose.create(1600, 7200, 'scivolose');
    sciv10.body.immovable = true;
    //sciv10.scale.setTo(0.25, 1);
    sciv11 = scivolose.create(1408, 6912, 'scivolose');
    sciv11.body.immovable = true;
    //sciv11.scale.setTo(0.25, 1);
    sciv12 = scivolose.create(1408, 7104, 'scivolose');
    sciv12.body.immovable = true;
    //sciv12.scale.setTo(0.25, 1);
    sciv13 = scivolose.create(1504, 6112, 'scivolose');
    sciv13.body.immovable = true;
    //sciv13.scale.setTo(1.5, 1);
    sciv14 = scivolose.create(2048, 5728, 'scivolose');
    sciv14.body.immovable = true;
    //sciv14.scale.setTo(0.25, 3);
    sciv15 = scivolose.create(2240, 5632, 'scivolose');
    sciv15.body.immovable = true;
    //sciv15.scale.setTo(0.25, 3);
    sciv16 = scivolose.create(2432, 5536, 'scivolose');
    sciv16.body.immovable = true;
    //sciv16.scale.setTo(0.25, 3);
    sciv17 = scivolose.create(2336, 4864, 'scivolose');
    sciv17.body.immovable = true;
    sciv18 = scivolose.create(2048, 4768, 'scivolose');
    sciv18.body.immovable = true;
    sciv19 = scivolose.create(2336, 4672, 'scivolose');
    sciv19.body.immovable = true;
    sciv20 = scivolose.create(1568, 4096, 'scivolose');
    sciv20.body.immovable = true;
    //sciv20.scale.setTo(1.5, 1);
    sciv21 = scivolose.create(1568, 3904, 'scivolose');
    sciv21.body.immovable = true;
    //sciv21.scale.setTo(1.5, 1);
    sciv22 = scivolose.create(1568, 3712, 'scivolose');
    sciv22.body.immovable = true;
    //sciv23.body.immovable = true;
    //sciv23.scale.setTo(7.5, 1);
    sciv24 = scivolose.create(1760, 3232, 'scivolose');
    sciv24.body.immovable = true;
    //sciv24.scale.setTo(0.75, 1);
    sciv25 = scivolose.create(1856, 3168, 'scivolose');
    sciv25.body.immovable = true;
    //sciv25.scale.setTo(0.75, 1);
    sciv26 = scivolose.create(1952, 3104, 'scivolose');
    sciv26.body.immovable = true;

    pgrasse = game.add.sprite(668.5, 8640, 'pgrasse192');
    game.physics.arcade.enable(pgrasse);
    pgrasse.enableBody = true;
    pgrasse.body.immovable = true;
    pgrasse.scale.setTo(0.3, 0.3);
    pgrasse.alpha = 0.7;

    pgrasse2 = game.add.sprite(1580, 8540, 'pgrasse96');
    pgrasse2.enableBody = true;
    game.physics.arcade.enable(pgrasse2);
    pgrasse2.body.immovable = true;
    pgrasse2.scale.setTo(0.3, 0.3);
    pgrasse2.alpha = 0.7;

    pgrasse3 = game.add.sprite(2206.5, 8640, 'pgrasse3');
    pgrasse3.enableBody = true;
    game.physics.arcade.enable(pgrasse3);
    pgrasse3.body.immovable = true;
    pgrasse3.scale.setTo(0.3, 0.3);
    pgrasse3.alpha = 0.7;

    pgrasse4 = game.add.sprite(1898, 7596, 'pgrasse4');
    pgrasse4.enableBody = true;
    game.physics.arcade.enable(pgrasse4);
    pgrasse4.body.immovable = true;
    pgrasse4.scale.setTo(1.2, 1.2);

    pgrasse5 = game.add.sprite(1438.5, 7532, 'pgrasse4');
    pgrasse5.enableBody = true;
    game.physics.arcade.enable(pgrasse5);
    pgrasse5.body.immovable = true;
    pgrasse5.scale.setTo(1.2, 1.2);

    pgrasse6 = game.add.sprite(1890, 6700, 'pgrasse4');
    pgrasse6.enableBody = true;
    game.physics.arcade.enable(pgrasse6);
    pgrasse6.body.immovable = true;
    pgrasse6.scale.setTo(1.2, 1.2);

    pgrasse9 = game.add.sprite(1760, 5804, 'pgrasse4');
    pgrasse9.enableBody = true;
    game.physics.arcade.enable(pgrasse9);
    pgrasse9.body.immovable = true;
    pgrasse9.scale.setTo(1.2, 1.2);

    pgrasse11 = game.add.sprite(2380, 5612, 'pgrasse4');
    pgrasse11.enableBody = true;
    game.physics.arcade.enable(pgrasse11);
    pgrasse11.body.immovable = true;
    pgrasse11.scale.setTo(1.2, 1.2);

    pgrasse15 = game.add.sprite(1007, 4940, 'pgrasse4');
    pgrasse15.enableBody = true;
    game.physics.arcade.enable(pgrasse15);
    pgrasse15.body.immovable = true;
    pgrasse15.scale.setTo(1.2, 1.2);

    nuvola = game.add.sprite(2528, 2496, 'cloud');
    game.physics.arcade.enable(nuvola);
    nuvola.body.immovable = true;
    nuvola.enableBody = true;
    nuvola.body.collideWorldBounds = true;
    nuvola.scale.setTo(0.2, 0.2);

    nuvola2 = game.add.sprite(2688, 2400, 'cloud');
    game.physics.arcade.enable(nuvola2);
    nuvola2.enableBody = true;
    nuvola2.body.collideWorldBounds = true;
    nuvola2.body.immovable = true;
    nuvola2.scale.setTo(0.2, 0.2);

    nuvola3 = game.add.sprite(2528, 2304, 'cloud');
    game.physics.arcade.enable(nuvola3);
    nuvola3.enableBody = true;
    nuvola3.body.collideWorldBounds = true;
    nuvola3.body.immovable = true;
    nuvola3.scale.setTo(0.2, 0.2);

    nuvola4 = game.add.sprite(2688, 2208, 'cloud');
    game.physics.arcade.enable(nuvola4);
    nuvola4.enableBody = true;
    nuvola4.body.collideWorldBounds = true;
    nuvola4.body.immovable = true;
    nuvola4.scale.setTo(0.2, 0.2);

    nuvola5 = game.add.sprite(2528, 2112, 'cloud');
    game.physics.arcade.enable(nuvola5);
    nuvola5.enableBody = true;
    nuvola5.body.collideWorldBounds = true;
    nuvola5.body.immovable = true;
    nuvola5.scale.setTo(0.2, 0.2);

    nuvola6 = game.add.sprite(2688, 2016, 'cloud');
    game.physics.arcade.enable(nuvola6);
    nuvola6.enableBody = true;
    nuvola6.body.collideWorldBounds = true;
    nuvola6.body.immovable = true;
    nuvola6.scale.setTo(0.2, 0.2);

    nuvola7 = game.add.sprite(2528, 1920, 'cloud');
    game.physics.arcade.enable(nuvola7);
    nuvola7.enableBody = true;
    nuvola7.body.collideWorldBounds = true;
    nuvola7.body.immovable = true;
    nuvola7.scale.setTo(0.2, 0.2);

    nuvola8 = game.add.sprite(2240, 1824, 'cloud');
    game.physics.arcade.enable(nuvola8);
    nuvola8.enableBody = true;
    nuvola8.body.collideWorldBounds = true;
    nuvola8.body.immovable = true;
    nuvola8.scale.setTo(0.2, 0.2);
    nuvola8.patrolnu=true;

    nuvola9 = game.add.sprite(960, 1536, 'cloud');
    game.physics.arcade.enable(nuvola9);
    nuvola9.enableBody = true;
    nuvola9.body.collideWorldBounds = true;
    nuvola9.body.immovable = true;
    nuvola9.scale.setTo(0.2, 0.2);
    nuvola9.patrolnu=true;

    nuvola10 = game.add.sprite(1504, 1632, 'cloud');
    game.physics.arcade.enable(nuvola10);
    nuvola10.enableBody = true;
    nuvola10.body.collideWorldBounds = true;
    nuvola10.body.immovable = true;
    nuvola10.scale.setTo(0.2, 0.2);
    nuvola10.patrolnu=true;

    nuvola11 = game.add.sprite(1856, 1728, 'cloud');
    game.physics.arcade.enable(nuvola11);
    nuvola11.enableBody = true;
    nuvola11.body.collideWorldBounds = true;
    nuvola11.body.immovable = true;
    nuvola11.scale.setTo(0.2, 0.2);
    nuvola11.patrolnu=true;

    nuvola12 = game.add.sprite(1120, 2496, 'cloud');
   game.physics.arcade.enable(nuvola12);
   nuvola12.enableBody = true;
   nuvola12.body.collideWorldBounds = true;
   nuvola12.body.immovable = true;
   nuvola12.scale.setTo(0.2, 0.2);

   nuvola13 = game.add.sprite(800, 2400, 'cloud');
   game.physics.arcade.enable(nuvola13);
   nuvola13.enableBody = true;
   nuvola13.body.collideWorldBounds = true;
   nuvola13.body.immovable = true;
   nuvola13.scale.setTo(0.2, 0.2);

   nuvola14 = game.add.sprite(448, 2304, 'cloud');
   game.physics.arcade.enable(nuvola14);
   nuvola14.enableBody = true;
   nuvola14.body.collideWorldBounds = true;
   nuvola14.body.immovable = true;
   nuvola14.scale.setTo(0.2, 0.2);

   nemo = game.add.sprite(1300, 8700, 'nemico');

       game.physics.arcade.enable(nemo);

       nemo.body.immovable = true;

       nemo.enableBody = true;

       nemo.body.collideWorldBounds = true;

       nemo.patrolN=true;
       nemo.scale.setTo(0.1, 0.1);


       nemo1 = game.add.sprite(1920, 8448, 'nemico');

       game.physics.arcade.enable(nemo1);

       nemo1.body.immovable = true;

       nemo1.enableBody = true;

       nemo1.body.collideWorldBounds = true;

       nemo1.patrolN=true;
       nemo1.scale.setTo(0.1, 0.1);


       nemo2 = game.add.sprite(1850, 7812, 'nemico');

       game.physics.arcade.enable(nemo2);

       nemo2.body.immovable = true;

       nemo2.enableBody = true;

       nemo2.body.collideWorldBounds = true;

       nemo2.patrolN=true;
       nemo2.scale.setTo(0.1, 0.1);


       nemo3 = game.add.sprite(1413, 7720, 'nemico');

       game.physics.arcade.enable(nemo3);

       nemo3.body.immovable = true;

       nemo3.enableBody = true;

       nemo3.body.collideWorldBounds = true;

       nemo3.patrolN=true;
   nemo3.scale.setTo(0.1, 0.1);


       nemo4 = game.add.sprite(2390, 8252, 'nemico');

       game.physics.arcade.enable(nemo4);

       nemo4.body.immovable = true;

       nemo4.enableBody = true;

       nemo4.body.collideWorldBounds = true;

       nemo4.patrolN=true;
   nemo4.scale.setTo(0.1, 0.1);


       nemo5 = game.add.sprite(2980, 8332, 'nemico');

       game.physics.arcade.enable(nemo5);

       nemo5.body.immovable = true;

       nemo5.enableBody = true;

       nemo5.body.collideWorldBounds = true;

       nemo5.patrolN=true;
   nemo5.scale.setTo(0.1, 0.1);


       nemo6 = game.add.sprite(2980, 8492, 'nemico');

       game.physics.arcade.enable(nemo6);

       nemo6.body.immovable = true;

       nemo6.enableBody = true;

       nemo6.body.collideWorldBounds = true;

       nemo6.patrolN=true;
   nemo6.scale.setTo(0.1, 0.1);


       nemo7 = game.add.sprite(2980, 8716, 'nemico');

       game.physics.arcade.enable(nemo7);

       nemo7.body.immovable = true;

       nemo7.enableBody = true;

       nemo7.body.collideWorldBounds = true;

       nemo7.patrolN=true;
   nemo7.scale.setTo(0.1, 0.1);


       nemo8 = game.add.sprite(1828, 6698, 'nemico');

       game.physics.arcade.enable(nemo8);

       nemo8.body.immovable = true;

       nemo8.enableBody = true;

       nemo8.body.collideWorldBounds = true;

       nemo8.patrolN=true;
   nemo8.scale.setTo(0.1, 0.1);


       nemo9 = game.add.sprite(2244, 6538, 'nemico');

       game.physics.arcade.enable(nemo9);

       nemo9.body.immovable = true;

       nemo9.enableBody = true;

       nemo9.body.collideWorldBounds = true;

       nemo9.patrolN=true;
   nemo9.scale.setTo(0.1, 0.1);


       nemo10 = game.add.sprite(1828, 6186, 'nemico');

       game.physics.arcade.enable(nemo10);

       nemo10.body.immovable = true;

       nemo10.enableBody = true;

       nemo10.body.collideWorldBounds = true;

       nemo10.patrolN=true;
   nemo10.scale.setTo(0.1, 0.1);


       nemo11 = game.add.sprite(1700, 5770, 'nemico');

       game.physics.arcade.enable(nemo11);

       nemo11.body.immovable = true;

       nemo11.enableBody = true;

       nemo11.body.collideWorldBounds = true;

       nemo11.patrolN=true;
   nemo11.scale.setTo(0.1, 0.1);


       nemo12 = game.add.sprite(1636, 5226, 'nemico');

       game.physics.arcade.enable(nemo12);

       nemo12.body.immovable = true;

       nemo12.enableBody = true;

       nemo12.body.collideWorldBounds = true;

       nemo12.patrolN=true;

       nemo12.scale.setTo(0.1, 0.1);


       nemo13 = game.add.sprite(2340, 5034, 'nemico');

       game.physics.arcade.enable(nemo13);

       nemo13.body.immovable = true;

       nemo13.enableBody = true;

       nemo13.body.collideWorldBounds = true;

       nemo13.patrolN=true;
   nemo13.scale.setTo(0.1, 0.1);


       nemo14 = game.add.sprite(2052, 4938, 'nemico');

       game.physics.arcade.enable(nemo14);

       nemo14.body.immovable = true;

       nemo14.enableBody = true;

       nemo14.body.collideWorldBounds = true;

       nemo14.patrolN=true;
   nemo14.scale.setTo(0.1, 0.1);


       nemo15 = game.add.sprite(2340, 4810, 'nemico');

       game.physics.arcade.enable(nemo15);

       nemo15.body.immovable = true;

       nemo15.enableBody = true;

       nemo15.body.collideWorldBounds = true;

       nemo15.patrolN=true;
   nemo15.scale.setTo(0.1, 0.1);


       nemo16 = game.add.sprite(2052, 4554, 'nemico');

       game.physics.arcade.enable(nemo16);

       nemo16.body.immovable = true;

       nemo16.enableBody = true;

       nemo16.body.collideWorldBounds = true;

       nemo16.patrolN=true;
   nemo16.scale.setTo(0.1, 0.1);


       nemo17 = game.add.sprite(2340, 4458, 'nemico');

       game.physics.arcade.enable(nemo17);

       nemo17.body.immovable = true;

       nemo17.enableBody = true;

       nemo17.body.collideWorldBounds = true;

       nemo17.patrolN=true;
   nemo17.scale.setTo(0.1, 0.1);


       nemo18 = game.add.sprite(2052, 4330, 'nemico');

       game.physics.arcade.enable(nemo18);

       nemo18.body.immovable = true;

       nemo18.enableBody = true;

       nemo18.body.collideWorldBounds = true;

       nemo18.patrolN=true;
   nemo18.scale.setTo(0.1, 0.1);


       nemo19 = game.add.sprite(1668, 3466, 'nemico');

       game.physics.arcade.enable(nemo19);

       nemo19.body.immovable = true;

       nemo19.enableBody = true;

       nemo19.body.collideWorldBounds = true;

       nemo19.patrolN=true;
   nemo19.scale.setTo(0.1, 0.1);


       nemo20 = game.add.sprite(1572, 3370, 'nemico');

       game.physics.arcade.enable(nemo20);

       nemo20.body.immovable = true;

       nemo20.enableBody = true;

       nemo20.body.collideWorldBounds = true;

       nemo20.patrolN=true;
   nemo20.scale.setTo(0.1, 0.1);


       nemo21 = game.add.sprite(1444, 3274, 'nemico');

       game.physics.arcade.enable(nemo21);

       nemo21.body.immovable = true;

       nemo21.enableBody = true;

       nemo21.body.collideWorldBounds = true;

       nemo21.patrolN=true;
   nemo21.scale.setTo(0.1, 0.1);


       nemo22 = game.add.sprite(1444, 2538, 'nemico');

       game.physics.arcade.enable(nemo22);

       nemo22.body.immovable = true;

       nemo22.enableBody = true;

       nemo22.body.collideWorldBounds = true;

       nemo22.patrolN=true;
   nemo22.scale.setTo(0.1, 0.1);


       nemo23 = game.add.sprite(1604, 2538, 'nemico');

       game.physics.arcade.enable(nemo23);

       nemo23.body.immovable = true;

       nemo23.enableBody = true;

       nemo23.body.collideWorldBounds = true;

       nemo23.patrolN=true;

       nemo23.scale.setTo(0.1, 0.1);


       nemo24 = game.add.sprite(1828, 2538, 'nemico');

       game.physics.arcade.enable(nemo24);

       nemo24.body.immovable = true;

       nemo24.enableBody = true;

       nemo24.body.collideWorldBounds = true;

       nemo24.patrolN=true;
   nemo24.scale.setTo(0.1, 0.1);


       nemo25 = game.add.sprite(1124, 2474, 'nemico');

       game.physics.arcade.enable(nemo25);

       nemo25.body.immovable = true;

       nemo25.enableBody = true;

       nemo25.body.collideWorldBounds = true;

       nemo25.patrolN=true;
   nemo25.scale.setTo(0.1, 0.1);


       nemo26 = game.add.sprite(1892, 2634, 'nemico');

       game.physics.arcade.enable(nemo26);

       nemo26.body.immovable = true;

       nemo26.enableBody = true;

       nemo26.body.collideWorldBounds = true;

       nemo26.patrolN=true;
   nemo26.scale.setTo(0.1, 0.1);


       nemo27 = game.add.sprite(804, 2378, 'nemico');

       game.physics.arcade.enable(nemo27);

       nemo27.body.immovable = true;

       nemo27.enableBody = true;

       nemo27.body.collideWorldBounds = true;

       nemo27.patrolN=true;
   nemo27.scale.setTo(0.1, 0.1);


       nemo28 = game.add.sprite(452, 2282, 'nemico');

       game.physics.arcade.enable(nemo28);

       nemo28.body.immovable = true;

       nemo28.enableBody = true;

       nemo28.body.collideWorldBounds = true;

       nemo28.patrolN=true;
   nemo28.scale.setTo(0.1, 0.1);


       nemo29 = game.add.sprite(452, 2250, 'nemico');

       game.physics.arcade.enable(nemo29);

       nemo29.body.immovable = true;

       nemo29.enableBody = true;

       nemo29.body.collideWorldBounds = true;

       nemo29.patrolN=true;

       nemo29.scale.setTo(0.1, 0.1);


       nemo30 = game.add.sprite(2020, 2538, 'nemico');

       game.physics.arcade.enable(nemo30);

       nemo30.body.immovable = true;

       nemo30.enableBody = true;

       nemo30.body.collideWorldBounds = true;

       nemo30.patrolN=true;
   nemo30.scale.setTo(0.1, 0.1);


       nemo31 = game.add.sprite(2276, 2538, 'nemico');

       game.physics.arcade.enable(nemo31);

       nemo31.body.immovable = true;

       nemo31.enableBody = true;

       nemo31.body.collideWorldBounds = true;

       nemo31.patrolN=true;

       nemo31.scale.setTo(0.1, 0.1);

       nemo32 = game.add.sprite(2244, 2634, 'nemico');

       game.physics.arcade.enable(nemo32);

       nemo32.body.immovable = true;

       nemo32.enableBody = true;

       nemo32.body.collideWorldBounds = true;

       nemo32.patrolN=true;
   nemo32.scale.setTo(0.1, 0.1);


       nemo33 = game.add.sprite(2084, 2634, 'nemico');

       game.physics.arcade.enable(nemo33);

       nemo33.body.immovable = true;

       nemo33.enableBody = true;

       nemo33.body.collideWorldBounds = true;

       nemo33.patrolN=true;
   nemo33.scale.setTo(0.1, 0.1);


       nemo34 = game.add.sprite(2212, 1770, 'nemico');

       game.physics.arcade.enable(nemo34);

       nemo34.body.immovable = true;

       nemo34.enableBody = true;

       nemo34.body.collideWorldBounds = true;

       nemo34.patrolN=true;
   nemo34.scale.setTo(0.1, 0.1);


       nemo35 = game.add.sprite(1860, 1674, 'nemico');

       game.physics.arcade.enable(nemo35);

       nemo35.body.immovable = true;

       nemo35.enableBody = true;

       nemo35.body.collideWorldBounds = true;

       nemo35.patrolN=true;
   nemo35.scale.setTo(0.1, 0.1);


       nemo36 = game.add.sprite(1508, 1578, 'nemico');

       game.physics.arcade.enable(nemo36);

       nemo36.body.immovable = true;

       nemo36.enableBody = true;

       nemo36.body.collideWorldBounds = true;

       nemo36.patrolN=true;
   nemo36.scale.setTo(0.1, 0.1);


       nemo37 = game.add.sprite(954, 1482, 'nemico');

       game.physics.arcade.enable(nemo37);

       nemo37.body.immovable = true;

       nemo37.enableBody = true;

       nemo37.body.collideWorldBounds = true;

       nemo37.patrolN=true;
   nemo37.scale.setTo(0.1, 0.1);

    nuvScompare = game.add.sprite(3000, 130, 'cloud');
    game.physics.arcade.enable(nuvScompare);
    nuvScompare.enableBody = true;
    nuvScompare.body.collideWorldBounds = true;
    nuvScompare.body.immovable = true;
    nuvScompare.scale.setTo(0.2, 0.2);

    oggetti = game.add.group();
    oggetti.enableBody = true;
    var rettangolo = oggetti.create(2240, 2, 'oggetto1');
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.3, 0.3);
    rettangolo = oggetti.create(2000, 500, 'oggetto2');
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.3, 0.3);
    rettangolo = oggetti.create(4500, 100, 'oggetto3');
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.3, 0.3);
    //rettangolo = oggetti.create(6465, 630, 'oggetto4');
    //rettangolo.body.immovable = true;
    //rettangolo.scale.setTo(0.3, 0.3);
    rettangolo = oggetti.create(16900, 830, 'oggetto4');
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.3, 0.3);

    bandiera1 = game.add.sprite(1726, 5126, 'bandiera1');
    game.physics.arcade.enable(bandiera1);
    bandiera1.body.immovable = true;
    bandiera1.enableBody = true;
    bandiera1.body.collideWorldBounds = true;
    bandiera2 = game.add.sprite(1596, 2364, 'bandiera1');
    game.physics.arcade.enable(bandiera2);
    bandiera2.body.immovable = true;
    bandiera2.enableBody = true;
    bandiera2.body.collideWorldBounds = true;

    bandiera = game.add.sprite(790, 1290, 'bandiera');
    game.physics.arcade.enable(bandiera);
    bandiera.body.immovable = true;
    bandiera.enableBody = true;
    bandiera.body.collideWorldBounds = true;
    bandiera.scale.setTo(1.4, 1.4);

    trilly = game.add.sprite(745, 1294, 'trilly');
    game.physics.arcade.enable(trilly);
    trilly.enableBody= true;
    trilly.body.immovable= true;
    trilly.scale.setTo(0.2, 0.2);
    trilly.ptrilly=true;

    fly3 = game.add.sprite(70, 8540, 'fly3');
    game.physics.arcade.enable(fly3);
    fly3.enableBody= true;
    fly3.body.immovable= true;
    fly3.scale.setTo(0.25, 0.25);

    shot = game.add.sprite(1820, 8160, 'shot');
    game.physics.arcade.enable(shot);
    shot.enableBody= true;
    shot.body.immovable= true;
    shot.scale.setTo(0.25, 0.25);

    //player = game.add.sprite(100, 4000, 'dude');
    player = game.add.sprite(sponx, spony, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 800;
    player.scale.setTo(0.16, 0.18);
    player.body.collideWorldBounds = true;
    game.camera.follow(player, Phaser.Camera.STYLE_PLATFORMER);
    //game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.07, 0.02);
    player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 16, true);
    player.animations.add('right', [9, 10, 11, 12, 13, 14, 15], 16, true);

    stella = game.add.group();
    stella.enableBody = true;
    var stelle = stella.create(10, 8640, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(314, 8576, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(634, 8480, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1436, 8540, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(2172, 8350, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(2692, 8050, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
  //ultime
    stelle = stella.create(2528, 6586, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1984, 5850, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1305, 5050, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(2048, 7578, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1204, 2458, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(890, 2362, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(540, 2266, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);

    stelle = stella.create(1426, 7260, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(2128, 7094, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);

    stelle = stella.create(2263, 6298,'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1016, 6586, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1530, 5946, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(2440, 5498, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);

    stelle = stella.create(516, 4954, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);
    stelle = stella.create(1000, 4636, 'stella');
    stelle.body.immovable = true;
    stelle.animations.add('stella');
    stelle.animations.play('stella', 4, true);

    cuorigrigi = game.add.physicsGroup();
    c1 = cuorigrigi.create(300, 70, 'cuoreno');
    c2 = cuorigrigi.create(340, 70, 'cuoreno');
    c3 = cuorigrigi.create(380, 70, 'cuoreno');
    c4 = cuorigrigi.create(420, 70, 'cuoreno');
    c5 = cuorigrigi.create(460, 70, 'cuoreno');
    cuorigrigi.setAll('fixedToCamera', 'true');

    cuori = game.add.physicsGroup();
    c1 = cuori.create(300, 70, 'cuore');
    c2 = cuori.create(340, 70, 'cuore');
    c3 = cuori.create(380, 70, 'cuore');
    c4 = cuori.create(420, 70, 'cuore');
    c5 = cuori.create(460, 70, 'cuore');
    cuori.setAll('fixedToCamera', 'true');

    nemicOOO = game.add.sprite(2250, 0, 'idra');
    game.physics.arcade.enable(nemicOOO);
    nemicOOO.body.immovable = true;
    nemicOOO.enableBody = true;
    nemicOOO.body.collideWorldBounds = true;
    nemicOOO.scale.setTo(0.25, 0.9);

    nemicOOO2 = game.add.sprite(2430, -445, 'idra');
    game.physics.arcade.enable(nemicOOO2);
    nemicOOO2.body.immovable = true;
    nemicOOO2.enableBody = true;
    nemicOOO2.scale.setTo(0.25, 0.9);

    enemyyy = game.add.sprite(600, 400, 'piccione');
    game.physics.arcade.enable(enemyyy);
    enemyyy.body.collideWorldBounds = true;
    enemyyy.enableBody = true;

    nuvolasemaforo = game.add.sprite(1656, 5216, 'nuvolasemaforo');
    game.physics.arcade.enable(nuvolasemaforo);
    nuvolasemaforo.enableBody= true;
    nuvolasemaforo.body.immovable= true;
    nuvolasemaforo.scale.setTo(1, 1);

    nuvolasemaforo2 = game.add.sprite(1536, 2464, 'nuvolasemaforo');
    game.physics.arcade.enable(nuvolasemaforo2);
    nuvolasemaforo2.enableBody= true;
    nuvolasemaforo2.body.immovable= true;
    nuvolasemaforo2.scale.setTo(1, 1);

    barra = game.add.sprite(-199, 81, 'barra');
    barra.fixedToCamera = true;
    mascherab = game.add.sprite(0, 57, 'mascherab');
    mascherab.fixedToCamera = true;

    cursors = game.input.keyboard.createCursorKeys();

    scoreuncini = 5;

    scorestelleText = game.add.text(50, 20, 'Stelle: 0', { fontSize: '18px', fill: '#FFF' });
    scorestelleText.fixedToCamera = true;

    weapon = game.add.weapon(5, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //weapon.bulletAngleOffset = 0;
    weapon.bulletSpeed = 400;
    weapon.trackSprite(player, 15, 40, false);
    fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
},

update: function() {

  var hitPlatform = game.physics.arcade.collide(player, platforms);
  //var hitOil = game.physics.arcade.collide(player, oil);
  var hitGround = game.physics.arcade.collide(player, ground);
  //var hitClouds = game.physics.arcade.collide(player, nuvola, moving);
  var hitnuvScompare = game.physics.arcade.collide(player, nuvola, movingNuv);
  var hitCloud2 = game.physics.arcade.collide(player, nuvola2, movingNuv2);
  var hitCloud3 = game.physics.arcade.collide(player, nuvola3, movingNuv3);
  var hitCloud4 = game.physics.arcade.collide(player, nuvola4, movingNuv4);
  var hitCloud5 = game.physics.arcade.collide(player, nuvola5, movingNuv5);
  var hitCloud6 = game.physics.arcade.collide(player, nuvola6, movingNuv6);
  var hitCloud7 = game.physics.arcade.collide(player, nuvola7, movingNuv7);
  var hitC8 = game.physics.arcade.collide(player, nuvola8);
  var hitC9 = game.physics.arcade.collide(player, nuvola9);
  var hitC10 = game.physics.arcade.collide(player, nuvola10);
  var hitC11 = game.physics.arcade.collide(player, nuvola11);
  var hitC12 = game.physics.arcade.collide(player, nuvola12);
  var hitC13 = game.physics.arcade.collide(player, nuvola13);
  var hitC14 = game.physics.arcade.collide(player, nuvola14);
  var hitnuvolasemaforo = game.physics.arcade.collide(player, nuvolasemaforo);
  var hitnuvolasemaforo2 = game.physics.arcade.collide(player, nuvolasemaforo2);

  game.physics.arcade.collide(player, layer);
  game.physics.arcade.collide(enemy, layer);
  game.physics.arcade.collide(enemi, layer);
  game.physics.arcade.collide(enemyfermo, layer);
  game.physics.arcade.collide(enemyfermo1, layer);
  game.physics.arcade.collide(enemyyy, layer);
  game.physics.arcade.collide(enemy, platforms);
  game.physics.arcade.collide(enemi, platforms);
  game.physics.arcade.collide(enemyfermo, platforms);
  game.physics.arcade.collide(enemyfermo1, platforms);
  game.physics.arcade.collide(enemyyy, platforms);
  game.physics.arcade.collide(stella, platforms);
  game.physics.arcade.collide(stellina, platforms);
  game.physics.arcade.collide(stella, nuvola);
  game.physics.arcade.collide(stellina, nuvola);
  game.physics.arcade.collide(stella, nuvScompare);
  game.physics.arcade.collide(stellina, nuvScompare);
  game.physics.arcade.collide(player, enemi);
  game.physics.arcade.collide(player, enemyfermo);
  game.physics.arcade.collide(player, enemyfermo1);
  game.physics.arcade.collide(stelle, nemicOOO);
  game.physics.arcade.collide(stelle, nemicOOO2);
  game.physics.arcade.collide(player, nemicOOO);
  game.physics.arcade.collide(player, nemicOOO2);
  var hitScivolose = game.physics.arcade.collide(player, scivolose, setFriction);

  game.physics.arcade.overlap(player, stella, this.collectstelle, null, this);

  game.physics.arcade.overlap(player, bandiera, this.arrivo, null, this);
  game.physics.arcade.overlap(player, stellina, this.collectstellina, null, this);
  game.physics.arcade.overlap(player, oggetti, this.collectoggetti, null, this);
  game.physics.arcade.overlap(player, enemy, this.Nemico1, null, this);
  game.physics.arcade.overlap(player, enemi);
  game.physics.arcade.overlap(player, enemyyy,  this.Coniglio, null, this);
  game.physics.arcade.overlap(player, enemyfermo, this.Nemicofermo, null, this);
  game.physics.arcade.overlap(player, enemyfermo1, this.Nemicofermo1, null, this);
  game.physics.arcade.overlap(player, nemicOOO, this.ucciso, null, this);

  game.physics.arcade.overlap(player, pgrasse, this.punge, null, this);
  game.physics.arcade.overlap(player, pgrasse2, this.punge2, null, this);
  game.physics.arcade.overlap(player, pgrasse3, this.punge3, null, this);
  game.physics.arcade.overlap(player, pgrasse4, this.punge4, null, this);
  game.physics.arcade.overlap(player, pgrasse5, this.punge5, null, this);
  game.physics.arcade.overlap(player, pgrasse6, this.punge6, null, this);

  game.physics.arcade.overlap(player, pgrasse9, this.punge9, null, this);
  game.physics.arcade.overlap(player, pgrasse11, this.punge11, null, this);
  game.physics.arcade.overlap(player, pgrasse15, this.punge15, null, this);

  var hitpgrasse = game.physics.arcade.collide(player, pgrasse);
  var hitpgrasse2 = game.physics.arcade.collide(player, pgrasse2);
  var hitpgrasse3 = game.physics.arcade.collide(player, pgrasse3);
  var hitpgrasse4 = game.physics.arcade.collide(player, pgrasse4);
  var hitpgrasse5 = game.physics.arcade.collide(player, pgrasse5);
  var hitpgrasse6 = game.physics.arcade.collide(player, pgrasse6);

  //var hitpgrasse8 = game.physics.arcade.collide(player, pgrasse8);
  var hitpgrasse9 = game.physics.arcade.collide(player, pgrasse9);
  var hitpgrasse11 = game.physics.arcade.collide(player, pgrasse11);
  //var hitpgrasse12 = game.physics.arcade.collide(player, pgrasse12);
  //var hitpgrasse13 = game.physics.arcade.collide(player, pgrasse13);
  var hitpgrasse15 = game.physics.arcade.collide(player, pgrasse15);
  //var hitpgrasse14 = game.physics.arcade.collide(player, pgrasse14);

  game.physics.arcade.overlap(player, nemo, this.Nemico, null, this);
  game.physics.arcade.overlap(player, nemo1, this.Nemico1, null, this);
  game.physics.arcade.overlap(player, nemo2, this.Nemico2, null, this);
  game.physics.arcade.overlap(player, nemo3, this.Nemico3, null, this);
  game.physics.arcade.overlap(player, nemo4, this.Nemico4, null, this);
  game.physics.arcade.overlap(player, nemo5, this.Nemico5, null, this);
  game.physics.arcade.overlap(player, nemo6, this.Nemico6, null, this);
  game.physics.arcade.overlap(player, nemo7, this.Nemico7, null, this);
  game.physics.arcade.overlap(player, nemo8, this.Nemico8, null, this);
  game.physics.arcade.overlap(player, nemo9, this.Nemico9, null, this);
  game.physics.arcade.overlap(player, nemo10, this.Nemico10, null, this);
  game.physics.arcade.overlap(player, nemo11, this.Nemico11, null, this);
  game.physics.arcade.overlap(player, nemo12, this.Nemico12, null, this);
  game.physics.arcade.overlap(player, nemo13, this.Nemico13, null, this);
  game.physics.arcade.overlap(player, nemo14, this.Nemico14, null, this);
  game.physics.arcade.overlap(player, nemo15, this.Nemico15, null, this);
  game.physics.arcade.overlap(player, nemo16, this.Nemico16, null, this);
  game.physics.arcade.overlap(player, nemo17, this.Nemico17, null, this);
  game.physics.arcade.overlap(player, nemo18, this.Nemico18, null, this);
  game.physics.arcade.overlap(player, nemo19, this.Nemico19, null, this);
  game.physics.arcade.overlap(player, nemo20, this.Nemico20, null, this);
  game.physics.arcade.overlap(player, nemo21, this.Nemico21, null, this);
  game.physics.arcade.overlap(player, nemo22, this.Nemico22, null, this);
  game.physics.arcade.overlap(player, nemo23, this.Nemico23, null, this);
  game.physics.arcade.overlap(player, nemo24, this.Nemico24, null, this);
  game.physics.arcade.overlap(player, nemo25, this.Nemico25, null, this);
  game.physics.arcade.overlap(player, nemo26, this.Nemico26, null, this);
  game.physics.arcade.overlap(player, nemo27, this.Nemico27, null, this);
  game.physics.arcade.overlap(player, nemo28, this.Nemico28, null, this);
  game.physics.arcade.overlap(player, nemo29, this.Nemico29, null, this);
  game.physics.arcade.overlap(player, nemo30, this.Nemico30, null, this);
  game.physics.arcade.overlap(player, nemo31, this.Nemico31, null, this);
  game.physics.arcade.overlap(player, nemo32, this.Nemico32, null, this);
  game.physics.arcade.overlap(player, nemo33, this.Nemico33, null, this);
  game.physics.arcade.overlap(player, nemo34, this.Nemico34, null, this);
  game.physics.arcade.overlap(player, nemo35, this.Nemico35, null, this);
  game.physics.arcade.overlap(player, nemo36, this.Nemico36, null, this);
  game.physics.arcade.overlap(player, nemo37, this.Nemico37, null, this);
  game.physics.arcade.overlap(nemo, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo1, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo2, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo3, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo4, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo5, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo6, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo7, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo8, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo9, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo10, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo11, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo12, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo13, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo14, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo15, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo16, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo17, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo18, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo19, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo20, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo21, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo22, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo23, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo24, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo25, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo26, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo27, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo28, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo29, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo30, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo31, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo32, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo33, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo34, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo35, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo36, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(nemo37, weapon.bullets, this.hitHandler, null, this);
  game.physics.arcade.overlap(platforms, weapon.bullets, this.hitPlatforms, null, this);

  //game.physics.arcade.overlap(layer, weapon.bullets, this.hitLayer, null, this);

  //game.physics.arcade.overlap(player, pulsante, this.Nemico, null, this);

  patrol(nemo);
  patrol1(nemo1);
  patrol2(nemo2);
  patrol3(nemo3);
  patrol4(nemo4);
  patrol5(nemo5);
  patrol6(nemo6);
  patrol7(nemo7);
  patrol8(nemo8);
  patrol9(nemo9);
  patrol10(nemo10);
  patrol11(nemo11);
  patrol12(nemo12);
  patrol13(nemo13);
  patrol14(nemo14);
  patrol15(nemo15);
  patrol16(nemo16);
  patrol17(nemo17);
  patrol18(nemo18);
  patrol19(nemo19);
  patrol20(nemo20);
  patrol21(nemo21);
  patrol22(nemo22);
  patrol23(nemo23);
  patrol24(nemo24);
  patrol25(nemo25);
  patrol26(nemo26);
  patrol27(nemo27);
  patrol28(nemo28);
  patrol29(nemo29);
  patrol30(nemo30);
  patrol31(nemo31);
  patrol32(nemo32);
  patrol33(nemo33);
  patrol34(nemo34);
  patrol35(nemo35);
  patrol36(nemo36);
  patrol37(nemo37);

  patrolnu1(nuvola8);
  patrolnu2(nuvola9);
  patrolnu3(nuvola10);
  patrolnu4(nuvola11);

  swiping2(nemicOOO);
  swiping3(nemicOOO2);
  ptrilly(trilly);

if(!friction) {
  if (player.body.touching.down && hitScivolose) {
player.body.velocity.x = player.body.velocity.x*0.7;}
else
player.body.velocity.x = 0;



if (cursors.left.isDown && !alberoColpito || cursors.right.isDown && alberoColpito)
{
  player.body.velocity.x = -390;
  player.animations.play('left');
  //weapon.bulletAngleOffset = 180;
  weapon.fireAngle = Phaser.ANGLE_LEFT;

  console.log("left", weapon.bulletAngleOffset);


}
else if (cursors.right.isDown  && !alberoColpito || cursors.left.isDown && alberoColpito)
{
  player.body.velocity.x = 390;
  player.animations.play('right');
  //weapon.bulletOffset = 0;
  weapon.fireAngle = Phaser.ANGLE_RIGHT;

  console.log("right", weapon.bulletAngleOffset);
}

else {
  player.animations.stop();
  player.frame = 8;
}
if (cursors.up.isDown && stellaColpita)
{
  player.body.velocity.y = -jump;
}

if (cursors.up.isDown && player.body.touching.down && hitPlatform)
{
  player.body.velocity.y = -450;
}
if (cursors.up.isDown && player.body.touching.down && hitScivolose)
{
  player.body.velocity.y = -450;

}
if (cursors.up.isDown && player.body.touching.down && hitnuvScompare)
{
  player.body.velocity.y = -450;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud2)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud3)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud4)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud5)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud6)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitCloud7)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC8)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC9)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC10)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC11)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC12)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC13)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitC14)
{
  player.body.velocity.y = -jump;
}
if (cursors.up.isDown && player.body.touching.down && hitnuvolasemaforo)
{
  player.body.velocity.y = -jump;
}
if (player.body.touching.down && hitnuvolasemaforo)
{
  sponx = 1726;
  spony = 5176;
}
if (cursors.up.isDown && player.body.touching.down && hitnuvolasemaforo2)
{
  player.body.velocity.y = -jump;
}
if (player.body.touching.down && hitnuvolasemaforo2)
{
  sponx = 1596;
  spony = 2324;
}
if (pgrasse.body.touching.up && player.body.touching.down && hitpgrasse)
{
  player.body.velocity.y = -jump;
}
if (pgrasse2.body.touching.up && player.body.touching.down && hitpgrasse2)
{
  player.body.velocity.y = -jump;
}
if (pgrasse3.body.touching.up && player.body.touching.down && hitpgrasse3)
{
  player.body.velocity.y = -jump;
}
if (pgrasse4.body.touching.up && player.body.touching.down && hitpgrasse4)
{
  player.body.velocity.y = -jump;
}
if (pgrasse5.body.touching.up && player.body.touching.down && hitpgrasse5)
{
  player.body.velocity.y = -jump;
}
if (pgrasse6.body.touching.up && player.body.touching.down && hitpgrasse6)
{
  player.body.velocity.y = -jump;
}


//if (pgrasse8.body.touching.up && player.body.touching.down && hitpgrasse8)
//{
  //player.body.velocity.y = -jump;
//}
if (pgrasse9.body.touching.up && player.body.touching.down && hitpgrasse9)
{
  player.body.velocity.y = -jump;
}

if (pgrasse11.body.touching.up && player.body.touching.down && hitpgrasse11)
{
  player.body.velocity.y = -jump;
}
//if (cursors.up.isDown && player.body.touching.down && hitpgrasse12)
//{
//  player.body.velocity.y = -jump;
//}
//{
    //player.body.velocity.y = -jump;
//}
//if (cursors.up.isDown && player.body.touching.down && hitpgrasse14)
//{
//    player.body.velocity.y = -jump;
//}
if (pgrasse15.body.touching.up && player.body.touching.down && hitpgrasse15)
{
  player.body.velocity.y = player.body.velocity.y;
}
//if (cursors.up.isDown && player.body.touching.down && hitpgrasse13)
//{
//  player.body.velocity.y = player.body.velocity.y;
//}

if (cursors.up.isDown && player.body.onFloor())
{
  player.body.velocity.y = -450;
}
if (fireButton.isDown)
 {
     weapon.fire();
     console.log("fire", weapon.bulletAngleOffset);
 }

 if(scoreuncini === 4)
   {c5.kill();}
   else if(scoreuncini === 3)
     {c4.kill();}
 else if(scoreuncini === 2)
   {c3.kill();}
 else if(scoreuncini === 1)
   {c2.kill();}
 else if(scoreuncini === 0)
   {c1.kill();}


function setFriction (player, scivolose) {
console.log("friction")
friction = true }
}

function patrol(nemo) {

   if (nemo.patrolN) {

   if(nemo.body.position.x < 1301)

   nemo.body.velocity.x = 130;

   if(nemo.body.position.x > 1500)

   nemo.body.velocity.x = -130;

  }

  }

  function patrol1(nemo1) {

   if (nemo1.patrolN) {

   if(nemo1.body.position.x < 1301)

   nemo1.body.velocity.x = 130;

   if(nemo1.body.position.x > 1500)

   nemo1.body.velocity.x = -130;

  }

  }



  function patrol2(nemo2) {

   if (nemo2.patrolN) {

   if(nemo2.body.position.x < 1851)

   nemo2.body.velocity.x = 130;

   if(nemo2.body.position.x > 2290)

   nemo2.body.velocity.x = -130;

  }

  }

  function patrol3(nemo3) {

   if (nemo3.patrolN) {

   if(nemo3.body.position.x < 1414)

   nemo3.body.velocity.x = 130;

   if(nemo3.body.position.x > 1477)

   nemo3.body.velocity.x = -130;

  }

  }

  function patrol4(nemo4) {

   if (nemo4.patrolN) {

   if(nemo4.body.position.x < 2391)

   nemo4.body.velocity.x = 130;

   if(nemo4.body.position.x > 2525)

   nemo4.body.velocity.x = -130;

  }

  }

  function patrol5(nemo5) {

   if (nemo5.patrolN) {

   if(nemo5.body.position.x < 2981)

   nemo5.body.velocity.x = 130;

   if(nemo5.body.position.x > 3044)

   nemo5.body.velocity.x = -130;

  }

  }

  function patrol6(nemo6) {

   if (nemo6.patrolN) {

   if(nemo6.body.position.x < 2981)

   nemo6.body.velocity.x = 130;

   if(nemo6.body.position.x > 3044)

   nemo6.body.velocity.x = -130;

  }

  }

  function patrol7(nemo7) {

   if (nemo7.patrolN) {

   if(nemo7.body.position.x < 2981)

   nemo7.body.velocity.x = 130;

   if(nemo7.body.position.x > 3044)

   nemo7.body.velocity.x = -130;

  }

  }

  function patrol8(nemo8) {

   if (nemo8.patrolN) {

   if(nemo8.body.position.x < 1829)

   nemo8.body.velocity.x = 130;

   if(nemo8.body.position.x > 1988)

   nemo8.body.velocity.x = -130;

  }

  }

  function patrol9(nemo9) {

   if (nemo9.patrolN) {

   if(nemo9.body.position.x < 2245)

   nemo9.body.velocity.x = 130;

   if(nemo9.body.position.x > 2404)

   nemo9.body.velocity.x = -130;

  }

  }

  function patrol10(nemo10) {

   if (nemo10.patrolN) {

   if(nemo10.body.position.x < 1829)

   nemo10.body.velocity.x = 130;

   if(nemo10.body.position.x > 2020)

   nemo10.body.velocity.x = -130;

  }

  }

  function patrol11(nemo11) {

   if (nemo11.patrolN) {

   if(nemo11.body.position.x < 1701)

   nemo11.body.velocity.x = 130;

   if(nemo11.body.position.x > 1828)

   nemo11.body.velocity.x = -130;

  }

  }

  function patrol12(nemo12) {

   if (nemo12.patrolN) {

   if(nemo12.body.position.x < 1637)

   nemo12.body.velocity.x = 130;

   if(nemo12.body.position.x > 1828)

   nemo12.body.velocity.x = -130;

  }

  }

  function patrol13(nemo13) {

   if (nemo13.patrolN) {

   if(nemo13.body.position.x < 2341)

   nemo13.body.velocity.x = 130;

   if(nemo13.body.position.x > 2404)

   nemo13.body.velocity.x = -130;

  }

  }

  function patrol14(nemo14) {

   if (nemo14.patrolN) {

   if(nemo14.body.position.x < 2053)

   nemo14.body.velocity.x = 130;

   if(nemo14.body.position.x > 2116)

   nemo14.body.velocity.x = -130;

  }

  }

  function patrol15(nemo15) {

   if (nemo15.patrolN) {

   if(nemo15.body.position.x < 2341)

   nemo15.body.velocity.x = 130;

   if(nemo15.body.position.x > 2404)

   nemo15.body.velocity.x = -130;

  }

  }

  function patrol16(nemo16) {

   if (nemo16.patrolN) {

   if(nemo16.body.position.x < 2053)

   nemo16.body.velocity.x = 130;

   if(nemo16.body.position.x > 2116)

   nemo16.body.velocity.x = -130;

  }

  }

  function patrol17(nemo17) {

   if (nemo17.patrolN) {

   if(nemo17.body.position.x < 2341)

   nemo17.body.velocity.x = 130;

   if(nemo17.body.position.x > 2404)

   nemo17.body.velocity.x = -130;

  }

  }

  function patrol18(nemo18) {

   if (nemo18.patrolN) {

   if(nemo18.body.position.x < 2053)

   nemo18.body.velocity.x = 130;

   if(nemo18.body.position.x > 2116)

   nemo18.body.velocity.x = -130;

  }

  }

  function patrol19(nemo19) {

   if (nemo19.patrolN) {

   if(nemo19.body.position.x < 1669)

   nemo19.body.velocity.x = 130;

   if(nemo19.body.position.x > 1732)

   nemo19.body.velocity.x = -130;

  }

  }

  function patrol20(nemo20) {

   if (nemo20.patrolN) {

   if(nemo20.body.position.x < 1573)

   nemo20.body.velocity.x = 130;

   if(nemo20.body.position.x > 1636)

   nemo20.body.velocity.x = -130;

  }

  }

  function patrol21(nemo21) {

   if (nemo21.patrolN) {

   if(nemo21.body.position.x < 1445)

   nemo21.body.velocity.x = 130;

   if(nemo21.body.position.x > 1540)

   nemo21.body.velocity.x = -130;

  }

  }

  function patrol22(nemo22) {

   if (nemo22.patrolN) {

   if(nemo22.body.position.x < 1445)

   nemo22.body.velocity.x = 130;

   if(nemo22.body.position.x > 1572)

   nemo22.body.velocity.x = -130;

  }

  }

  function patrol23(nemo23) {

   if (nemo23.patrolN) {

   if(nemo23.body.position.x < 1605)

   nemo23.body.velocity.x = 130;

   if(nemo23.body.position.x > 1796)

   nemo23.body.velocity.x = -130;

  }

  }

  function patrol24(nemo24) {

   if (nemo24.patrolN) {

   if(nemo24.body.position.x < 1829)

   nemo24.body.velocity.x = 130;

   if(nemo24.body.position.x > 1988)

   nemo24.body.velocity.x = -130;

  }

  }

  function patrol25(nemo25) {

   if (nemo25.patrolN) {

   if(nemo25.body.position.x < 1125)

   nemo25.body.velocity.x = 130;

   if(nemo25.body.position.x > 1252)

   nemo25.body.velocity.x = -130;

  }

  }

  function patrol26(nemo26) {

   if (nemo26.patrolN) {

   if(nemo26.body.position.x < 1893)

   nemo26.body.velocity.x = 130;

   if(nemo26.body.position.x > 2052)

   nemo26.body.velocity.x = -130;

  }

  }

  function patrol27(nemo27) {

   if (nemo27.patrolN) {

   if(nemo27.body.position.x < 805)

   nemo27.body.velocity.x = 130;

   if(nemo27.body.position.x > 944)

   nemo27.body.velocity.x = -130;

  }

  }

  function patrol28(nemo28) {

   if (nemo28.patrolN) {

   if(nemo28.body.position.x < 453)

   nemo28.body.velocity.x = 130;

   if(nemo28.body.position.x > 580)

   nemo28.body.velocity.x = -130;

  }

  }

  function patrol29(nemo29) {

   if (nemo29.patrolN) {

   if(nemo29.body.position.x < 453)

   nemo29.body.velocity.x = 130;

   if(nemo29.body.position.x > 580)

   nemo29.body.velocity.x = -130;

  }

  }

  function patrol30(nemo30) {

   if (nemo30.patrolN) {

   if(nemo30.body.position.x < 2021)

   nemo30.body.velocity.x = 130;

   if(nemo30.body.position.x > 2244)

   nemo30.body.velocity.x = -130;

  }

  }

  function patrol31(nemo31) {

   if (nemo31.patrolN) {

   if(nemo31.body.position.x < 2277)

   nemo31.body.velocity.x = 130;

   if(nemo31.body.position.x > 2404)

   nemo31.body.velocity.x = -130;

  }

  }

  function patrol32(nemo32) {

   if (nemo32.patrolN) {

   if(nemo32.body.position.x < 2245)

   nemo32.body.velocity.x = 130;

   if(nemo32.body.position.x > 2404)

   nemo32.body.velocity.x = -130;

  }

  }

  function patrol33(nemo33) {

   if (nemo33.patrolN) {

   if(nemo33.body.position.x < 2085)

   nemo33.body.velocity.x = 130;

   if(nemo33.body.position.x > 2212)

   nemo33.body.velocity.x = -130;

  }

  }

  function patrol34(nemo34) {

   if (nemo34.patrolN) {

   if(nemo34.body.position.x < 2213)

   nemo34.body.velocity.x = 130;

   if(nemo34.body.position.x > 2308)

   nemo34.body.velocity.x = -130;

  }

  }

  function patrol35(nemo35) {

   if (nemo35.patrolN) {

   if(nemo35.body.position.x < 1861)

   nemo35.body.velocity.x = 130;

   if(nemo35.body.position.x > 1956)

   nemo35.body.velocity.x = -130;

  }

  }

  function patrol36(nemo36) {

   if (nemo36.patrolN) {

   if(nemo36.body.position.x < 1509)

   nemo36.body.velocity.x = 130;

   if(nemo36.body.position.x > 1572)

   nemo36.body.velocity.x = -130;

  }

  }

  function patrol37(nemo37) {

   if (nemo37.patrolN) {

   if(nemo37.body.position.x < 955)

   nemo37.body.velocity.x = 130;

   if(nemo37.body.position.x > 1104)

   nemo37.body.velocity.x = -130;

  }

  }


function patrolnu1(nuvola8) {
  if (nuvola8.patrolnu) {
  if(nuvola8.body.position.x < 2241)
  nuvola8.body.velocity.x = 200;
  if(nuvola8.body.position.x > 2441)
  nuvola8.body.velocity.x = -200;
  //else {
    //nuvola8.body.velocity.x=0;
  //}
}
}

function patrolnu2(nuvola9) {
  if (nuvola9.patrolnu) {
  //if(nuvola9.body.position.x < 961)
  if(nuvola9.body.position.x < 961)
  nuvola9.body.velocity.x = 200;
  //if(nuvola9.body.position.x > 1161)
  if(nuvola9.body.position.x > 1191)
  nuvola9.body.velocity.x = -200;
  //else {
    //nuvola9.body.velocity.x=0;
  //}
}
}

function patrolnu3(nuvola10) {
  if (nuvola10.patrolnu) {
  if(nuvola10.body.position.x < 1505)
  nuvola10.body.velocity.x = 200;
  if(nuvola10.body.position.x > 1705)
  nuvola10.body.velocity.x = -200;
  //else {
    //nuvola10.body.velocity.x=0;
  //}
}
}

function patrolnu4(nuvola11) {
  if (nuvola11.patrolnu) {
  if(nuvola11.body.position.x < 1857)
  nuvola11.body.velocity.x = 200;
  if(nuvola11.body.position.x > 2157)
  nuvola11.body.velocity.x = -200;
  //else {
    //nuvola11.body.velocity.x=0;
  //}
}
}

function ptrilly(trilly) {
  if (trilly.ptrilly) {
  if(trilly.body.position.y < 1295)
  trilly.body.velocity.y = 45;
  if(trilly.body.position.y > 1315)
  trilly.body.velocity.y = -45;
  //else {
    //nuvola11.body.velocity.x=0;
  //}
}
}

  function movingNuv(player) {
    if(player.body.touching.down && nuvola.body.touching.up) {
    Scompare(nuvola);
  }
  }
  function movingNuv2(player) {
    if(player.body.touching.down && nuvola2.body.touching.up) {
    Scompare(nuvola2);
  }
  }
  function movingNuv3(player) {
    if(player.body.touching.down && nuvola3.body.touching.up) {
    Scompare(nuvola3);
  }
  }
  function movingNuv4(player) {
    if(player.body.touching.down && nuvola4.body.touching.up) {
    Scompare(nuvola4);
  }
  }
  function movingNuv5(player) {
    if(player.body.touching.down && nuvola5.body.touching.up) {
    Scompare(nuvola5);
  }
  }
  function movingNuv6(player) {
    if(player.body.touching.down && nuvola6.body.touching.up) {
    Scompare(nuvola6);
  }
  }
  function movingNuv7(player) {
    if(player.body.touching.down && nuvola7.body.touching.up) {
    Scompare(nuvola7);
  }
  }

  function Scompare(nuvola) {
    game.time.events.add(500, function(){
    game.add.tween(nuvola).to( { alpha: 0 }, 250, Phaser.Easing.Linear.None, true, 0, 200, true);
  })
    game.time.events.add(2000, function(){
    nuvola.kill()
  })
  }

  function setFriction2 (scatola, scatola) {
      scatola.body.velocity.x = 0.1;
  }

  //function setFriction3 (player, enemyyy) {
    //  enemyyy.body.velocity.x = 0.1;
  //}

  function swiping2(nemicOOO) {
    if(nemicOOO.body.position.y < 1)
    nemicOOO.body.velocity.y = 200;
    if(nemicOOO.body.position.y > 200)
    nemicOOO.body.velocity.y = -380;
  }



  function swiping3(nemicOOO2) {
    if(nemicOOO2.body.position.y > -446)
    nemicOOO2.body.velocity.y = -200;
    if(nemicOOO2.body.position.y < -610)
    nemicOOO2.body.velocity.y = 380;
  }

},

hitHandler: function(nemo, bullet){
   if(weapon.fireAngle == Phaser.ANGLE_RIGHT){
 nemo.patrolN = false;
 nemo.body.velocity.x=600;
 nemo.body.collideWorldBounds = false;}
  if(weapon.fireAngle == Phaser.ANGLE_LEFT){
nemo.patrolN = false;
nemo.body.velocity.x=-600;
nemo.body.collideWorldBounds = false;}
},

hitPlatforms: function(platform, bullet) {
 bullet.kill();
},

punge: function(player, pgrasse) {
  if (player.body.touching && pgrasse.body.touching){
   if(!pgrasseColpito) {
     pgrasseColpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasseColpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},
punge2: function(player, pgrasse2) {
  if (player.body.touching && pgrasse2.body.touching){
   if(!pgrasse2Colpito) {
     pgrasse2Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse2Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},
punge3: function(player, pgrasse3) {
  if (player.body.touching && pgrasse3.body.touching){
   if(!pgrasse3Colpito) {
     pgrasse3Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse3Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},
punge4: function(player, pgrasse4) {
if (player.body.touching && pgrasse4.body.touching){
   if(!pgrasse4Colpito) {
     pgrasse4Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse4Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},
punge5: function(player, pgrasse5) {
 if (player.body.touching && pgrasse5.body.touching){
   if(!pgrasse5Colpito) {
     pgrasse5Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse5Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},
punge6: function(player, pgrasse6) {
 if (player.body.touching && pgrasse6.body.touching){
   if(!pgrasse6Colpito) {
     pgrasse6Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse6Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},

//punge8: function(player, pgrasse8) {
 //if (player.body.touching && pgrasse8.body.touching){
   //if(!pgrasse8Colpito) {
     //pgrasse8Colpito = true;
     //scoreuncini--;
     //scoreunciniText.text = 'Vite rimanenti: ' + scoreuncini;
     //game.time.events.add(2000, function() {pgrasse8Colpito = false;});
     //game.time.events.add(250, function(){
 //game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
//})

     //if(scoreuncini === 0) {
     //this.game.state.start('Bad');
   //}}}
//},
punge9: function(player, pgrasse9) {
 if (player.body.touching && pgrasse9.body.touching){
   if(!pgrasse9Colpito) {
     pgrasse9Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse9Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},

punge11: function(player, pgrasse11) {
 if (player.body.touching && pgrasse11.body.touching){
   if(!pgrasse11Colpito) {
     pgrasse11Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse11Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},

punge15: function(player, pgrasse15) {
 if (player.body.touching && pgrasse15.body.touching){
   if(!pgrasse15Colpito) {
     pgrasse15Colpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {pgrasse15Colpito = false;});
     game.time.events.add(250, function(){
 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
})

     if(scoreuncini === 0) {
     this.game.state.start('Male');
   }}}
},

Nemicofermo1: function (player, enemyfermo1) {
  if(player.body.touching.down && enemyfermo1.body.touching.up){
    {
      enemyfermo1.kill();
    }}
},

Coniglio: function (player, enemyyy) {
if (player.body.touching && enemyyy.body.touching) {
if(!alberoColpito) {
  alberoColpito = true;
game.time.events.add(3000, function() {alberoColpito = false;}) }} },

Nemicofermo: function (player, enemyfermo) {
if(player.body.touching.down && enemyfermo.body.touching.up)
  {
    enemyfermo.kill();
  }
},

collectstelle: function (player, stella) {
    stella.kill();
    scorestelle += 1;
    scorestelleText.text = 'Stelle:' + scorestelle;
    if (barra.cameraOffset.x >= -51) {
      game.time.events.add(0, function(){
    game.add.tween(barra).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 2, true);
  })
    game.time.events.add(3000, function(){
    barra.cameraOffset.x = barra.cameraOffset.x - 224;})}
    if (barra.cameraOffset.x < 25) { barra.cameraOffset.x = barra.cameraOffset.x + 75;}
    if (player.body.touching && stella.body.touching && scorestelle===3 || scorestelle===6 || scorestelle===9
    || scorestelle===12 || scorestelle===15 || scorestelle===18 || scorestelle===21) {
    if(!stellaColpita) {
      stellaColpita = true;
    game.time.events.add(2600, function() {stellaColpita = false;}) }}
  },

collectstellina: function (player, stellina) {
    stellina.kill();
    scorestelle += 1;
    scorestelleText.text = 'Stelle:' + scorestelle;
    if (cursors.up.isDown)
    {
        player.body.velocity.y = -jump;
    }
},

collectoggetti: function (player, oggetti) {
    oggetti.body.position.x=player.body.position.x-20;
    oggetti.body.position.y=player.body.position.y;
},

arrivo: function (player, bandiera) {
    this.game.state.start('Bene');
},

Nemico: function (player, nemo) {
  if(player.body.touching.down && nemo.body.touching.up)
   {
     nemo.kill();
    }

 else if(!nemoColpito) {
   nemoColpito = true;
   scoreuncini--;
   game.time.events.add(2000, function() {nemoColpito = false;});
   game.time.events.add(250, function(){
   game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
 })
}

   else if(scoreuncini === 0)
 {
     this.game.state.start('Male');
   }
 },
 Nemico1: function (player, nemo1) {
   if(player.body.touching.down && nemo1.body.touching.up)
     {
       nemo1.kill();
        //stella = game.add.sprite(nemo1.body.position.x, nemo1.body.position.y-70, 'stella');
        //game.physics.arcade.enable(stella);
        //stella.enableBody=true;
      }
      else if(scoreuncini === 0)
    {
        this.game.state.start('Male');
      }

else  if(!nemoColpito) {
    nemoColpito = true;
    scoreuncini--;
    game.time.events.add(2000, function() {nemoColpito = false;});
    game.time.events.add(250, function(){
    game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
  })
 }

  },
  Nemico1: function (player, nemo1) {
   if(!nemoColpito) {
     nemoColpito = true;
     scoreuncini--;
     game.time.events.add(2000, function() {nemoColpito = false;});
     game.time.events.add(250, function(){
     game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
   })
  }
  else if(player.body.touching.down && nemo1.body.touching.up)
    {
      nemo1.kill();
       //stella = game.add.sprite(nemo1.body.position.x, nemo1.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }
     else if(scoreuncini === 0)
   {
       this.game.state.start('Male');
     }
   },
   Nemico2: function (player, nemo2) {
     if(player.body.touching.down && nemo2.body.touching.up)
       {
         nemo2.kill();
          //stella = game.add.sprite(nemo2.body.position.x, nemo2.body.position.y-70, 'stella');
          //game.physics.arcade.enable(stella);
          //stella.enableBody=true;
        }

  else  if(!nemoColpito) {
      nemoColpito = true;
      scoreuncini--;
      game.time.events.add(2000, function() {nemoColpito = false;});
      game.time.events.add(250, function(){
      game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
    })
   }
      else if(scoreuncini === 0)
    {
        this.game.state.start('Male');
      }
    },
    Nemico4: function (player, nemo4) {
      if(player.body.touching.down && nemo4.body.touching.up)
        {
          nemo4.kill();
           //stella = game.add.sprite(nemo4.body.position.x, nemo4.body.position.y-70, 'stella');
           //game.physics.arcade.enable(stella);
           //stella.enableBody=true;
         }
else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
     },
     Nemico3: function (player, nemo3) {
       if(player.body.touching.down && nemo3.body.touching.up)
         {
           nemo3.kill();
            //stella = game.add.sprite(nemo3.body.position.x, nemo3.body.position.y-70, 'stella');
            //game.physics.arcade.enable(stella);
            //stella.enableBody=true;
          }
    else      if(!nemoColpito) {
            nemoColpito = true;
            scoreuncini--;
            game.time.events.add(2000, function() {nemoColpito = false;});
            game.time.events.add(250, function(){
            game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
          })
         }
            else if(scoreuncini === 0)
          {
              this.game.state.start('Male');
            }
          },
          Nemico5: function (player, nemo5) {
            if(player.body.touching.down && nemo5.body.touching.up)
              {
                nemo5.kill();
                 //stella = game.add.sprite(nemo5.body.position.x, nemo5.body.position.y-70, 'stella');
                 //game.physics.arcade.enable(stella);
                 //stella.enableBody=true;
               }
          else     if(!nemoColpito) {
                 nemoColpito = true;
                 scoreuncini--;
                 game.time.events.add(2000, function() {nemoColpito = false;});
                 game.time.events.add(250, function(){
                 game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
               })
              }
                 else if(scoreuncini === 0)
               {
                   this.game.state.start('Male');
                 }
               },
               Nemico6: function (player, nemo6) {
                 if(player.body.touching.down && nemo6.body.touching.up)
                   {
                     nemo6.kill();
                      //stella = game.add.sprite(nemo6.body.position.x, nemo6.body.position.y-70, 'stella');
                      //game.physics.arcade.enable(stella);
                      //stella.enableBody=true;
                    }
              else      if(!nemoColpito) {
                      nemoColpito = true;
                      scoreuncini--;
                      game.time.events.add(2000, function() {nemoColpito = false;});
                      game.time.events.add(250, function(){
                      game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                    })
                   }

                      else if(scoreuncini === 0)
                    {
                        this.game.state.start('Male');
                      }
                    },
          Nemico7: function (player, nemo7) {
            if(player.body.touching.down && nemo7.body.touching.up)
              {
                nemo7.kill();
                 //stella = game.add.sprite(nemo7.body.position.x, nemo7.body.position.y-70, 'stella');
                 //game.physics.arcade.enable(stella);
                 //stella.enableBody=true;
               }
                    else     if(!nemoColpito) {
                           nemoColpito = true;
                           scoreuncini--;
                           game.time.events.add(2000, function() {nemoColpito = false;});
                           game.time.events.add(250, function(){
                           game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                         })
                        }
                           else if(scoreuncini === 0)
                         {
                             this.game.state.start('Male');
                           }
   },
   Nemico8: function (player, nemo8) {
     if(player.body.touching.down && nemo8.body.touching.up)
       {
         nemo8.kill();
          //stella = game.add.sprite(nemo8.body.position.x, nemo8.body.position.y-70, 'stella');
          //game.physics.arcade.enable(stella);
          //stella.enableBody=true;
        }
    else    if(!nemoColpito) {
          nemoColpito = true;
          scoreuncini--;
          game.time.events.add(2000, function() {nemoColpito = false;});
          game.time.events.add(250, function(){
          game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
        })
       }
          else if(scoreuncini === 0)
        {
            this.game.state.start('Male');
}},
Nemico9: function (player, nemo9) {
  if(player.body.touching.down && nemo9.body.touching.up)
    {
      nemo9.kill();
       //stella = game.add.sprite(nemo9.body.position.x, nemo9.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
   }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico10: function (player, nemo10) {
  if(player.body.touching.down && nemo10.body.touching.up)
    {
      nemo10.kill();
       //stella = game.add.sprite(nemo10.body.position.x, nemo10.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico11: function (player, nemo11) {
  if(player.body.touching.down && nemo11.body.touching.up)
    {
      nemo11.kill();
       //stella = game.add.sprite(nemo11.body.position.x, nemo11.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }
else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico12: function (player, nemo12) {
  if(player.body.touching.down && nemo12.body.touching.up)
    {
      nemo12.kill();
       //stella = game.add.sprite(nemo12.body.position.x, nemo12.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
}},
Nemico13: function (player, nemo13) {
  if(player.body.touching.down && nemo13.body.touching.up)
    {
      nemo13.kill();
       //stella = game.add.sprite(nemo13.body.position.x, nemo13.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
}},
Nemico14: function (player, nemo14) {
  if(player.body.touching.down && nemo14.body.touching.up)
    {
      nemo14.kill();
       //stella = game.add.sprite(nemo14.body.position.x, nemo14.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
}},
Nemico15: function (player, nemo15) {
  if(player.body.touching.down && nemo15.body.touching.up)
    {
      nemo15.kill();
       //stella = game.add.sprite(nemo15.body.position.x, nemo15.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
}},
Nemico16: function (player, nemo16) {
  if(player.body.touching.down && nemo16.body.touching.up)
    {
      nemo16.kill();
       //stella = game.add.sprite(nemo16.body.position.x, nemo16.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico17: function (player, nemo17) {
   if(player.body.touching.down && nemo17.body.touching.up)
    {
      nemo17.kill();
       //stella = game.add.sprite(nemo17.body.position.x, nemo17.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico18: function (player, nemo18) {
  if(player.body.touching.down && nemo18.body.touching.up)
    {
      nemo18.kill();
       //stella = game.add.sprite(nemo18.body.position.x, nemo18.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico19: function (player, nemo19) {
  if(player.body.touching.down && nemo19.body.touching.up)
    {
      nemo19.kill();
       //stella = game.add.sprite(nemo19.body.position.x, nemo19.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico20: function (player, nemo20) {
  if(player.body.touching.down && nemo20.body.touching.up)
    {
      nemo20.kill();
       //stella = game.add.sprite(nemo20.body.position.x, nemo20.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico21: function (player, nemo21) {
  if(player.body.touching.down && nemo21.body.touching.up)
   {
     nemo21.kill();
      //stella = game.add.sprite(nemo21.body.position.x, nemo21.body.position.y-70, 'stella');
      //game.physics.arcade.enable(stella);
      //stella.enableBody=true;
    }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico22: function (player, nemo22) {
  if(player.body.touching.down && nemo22.body.touching.up)
    {
      nemo22.kill();
       //stella = game.add.sprite(nemo22.body.position.x, nemo22.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico23: function (player, nemo23) {
  if(player.body.touching.down && nemo23.body.touching.up)
    {
      nemo23.kill();
       //stella = game.add.sprite(nemo23.body.position.x, nemo23.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico24: function (player, nemo24) {
  if(player.body.touching.down && nemo24.body.touching.up)
    {
      nemo24.kill();
       //stella = game.add.sprite(nemo24.body.position.x, nemo24.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }
else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico25: function (player, nemo25) {
  if(player.body.touching.down && nemo25.body.touching.up)
    {
      nemo25.kill();
       //stella = game.add.sprite(nemo25.body.position.x, nemo25.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico26: function (player, nemo26) {
  if(player.body.touching.down && nemo26.body.touching.up)
   {
     nemo26.kill();
      //stella = game.add.sprite(nemo26.body.position.x, nemo26.body.position.y-70, 'stella');
      //game.physics.arcade.enable(stella);
      //stella.enableBody=true;
    }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico27: function (player, nemo27) {
  if(player.body.touching.down && nemo27.body.touching.up)
    {
      nemo27.kill();
       //stella = game.add.sprite(nemo27.body.position.x, nemo27.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico28: function (player, nemo28) {
  if(player.body.touching.down && nemo28.body.touching.up)
    {
      nemo28.kill();
       //stella = game.add.sprite(nemo28.body.position.x, nemo28.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico29: function (player, nemo29) {
  if(player.body.touching.down && nemo29.body.touching.up)
    {
      nemo29.kill();
       //stella = game.add.sprite(nemo29.body.position.x, nemo29.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico30: function (player, nemo30) {
  if(player.body.touching.down && nemo30.body.touching.up)
    {
      nemo30.kill();
       //stella = game.add.sprite(nemo30.body.position.x, nemo30.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico31: function (player, nemo31) {
  if(player.body.touching.down && nemo31.body.touching.up)
    {
      nemo31.kill();
       //stella = game.add.sprite(nemo31.body.position.x, nemo31.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico32: function (player, nemo32) {
  if(player.body.touching.down && nemo32.body.touching.up)
    {
      nemo32.kill();
      // stella = game.add.sprite(nemo32.body.position.x, nemo32.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico33: function (player, nemo33) {
  if(player.body.touching.down && nemo33.body.touching.up)
    {
      nemo33.kill();
       //stella = game.add.sprite(nemo33.body.position.x, nemo33.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }
  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico34: function (player, nemo34) {
  if(player.body.touching.down && nemo34.body.touching.up)
    {
      nemo34.kill();
       //stella = game.add.sprite(nemo34.body.position.x, nemo34.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico35: function (player, nemo35) {
  if(player.body.touching.down && nemo35.body.touching.up)
    {
      nemo35.kill();
       //stella = game.add.sprite(nemo35.body.position.x, nemo35.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }
       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico36: function (player, nemo36) {
  if(player.body.touching.down && nemo36.body.touching.up)
    {
      nemo36.kill();
       //stella = game.add.sprite(nemo36.body.position.x, nemo36.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

  else   if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},
Nemico37: function (player, nemo37) {
  if(player.body.touching.down && nemo37.body.touching.up)
    {
      nemo37.kill();
       //stella = game.add.sprite(nemo37.body.position.x, nemo37.body.position.y-70, 'stella');
       //game.physics.arcade.enable(stella);
       //stella.enableBody=true;
     }

else     if(!nemoColpito) {
       nemoColpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {nemoColpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Male');
       }
},

Albero: function (player, enemyyy) {
  if(!alberoColpito) {
    alberoColpito = true; }
else if (cursors.left.isDown && !alberoColpito)
  {
      player.body.velocity.x = 250;
      player.animations.play('left');
  }
  else (cursors.right.isDown && !alberoColpito)
  {
      player.body.velocity.x = -250;
      player.animations.play('right');
}
},
Stella: function (player, stella) {
  if(!stellaColpita) {
    stellaColpita = true; }
else if (cursors.up.isDown && !stellaColpita)
  {
      player.body.velocity.y = -jump;
  }
},


moving: function (player, nuvola) {
  if(player.body.touching.down && nuvola.body.touching.up) {
    if(nuvola.body.position.x < 1300)
    nuvola.body.velocity.x = 150;
    if(nuvola.body.position.x > 1400)
    nuvola.body.velocity.x = -150; }

},

imageClick2: function(pointer) {
 this.game.state.start('startgame');
}

};

game.state.add('Game2', Game2);

var BeneState = {
preload: function() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('finebene2', 'immagini2/finalebene2.png');
},

create: function() {
    image = game.add.sprite(0, 0, 'finebene2');
    image.scale.setTo(1, 1);
    image.inputEnabled = true;
    image.events.onInputDown.add(this.imageClick, this);
},

imageClick: function(pointer) {
    this.game.state.start('startgame');
}

}
game.state.add('Bene', BeneState);

var MaleState = {
preload: function() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('fine', 'immagini2/finaleno2.png');
},

create: function() {
    image = game.add.sprite(0, 0, 'fine');
    image.inputEnabled = true;
    image.events.onInputDown.add(this.imageClick, this);
},

imageClick: function(pointer) {
    this.game.state.start('Game2');
}
}
game.state.add('Male', MaleState);
