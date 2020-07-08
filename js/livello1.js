var open;
var sponx = 1024;
var spony = 1024;
var enemy;
var enemy1;
var ground;
var uncini;
var oggetti;
var rettangolo;
var oggetto1;
var oggetto2;
var oggetto3;
var oggetto4;
var scoreuncini = 4;
var scoreoggetti = 4;
var jump = 480;
var tenda;
var layer;
var colpito = false;
var trenoColpito = false;
var treno1Colpito = false;
var alberoColpito = false;
var rimbalza = false;
var treno;
var treno1;
var scatola;
var friction=false;
var scatolaSpinta=false;
var time;
//var bandiera;
var sfondo2;
var sfondo3;
var sfondo4;
var sfondo5;
var sfondo6;
var mascheraMetro = false;
var mascheraMetro1 = false;
otouched=false;

var Game1 = {
preload: function() {

    game.world.width = 800*14.2;
    game.world.height = 2550;

    game.load.crossOrigin = 'anonymous';

    game.load.tilemap('mappa', 'mappa.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'groundd.png');
    game.load.image('tilessss', 'risorsa.png');
    game.load.image('tiless', 'piatta_forme.png');
    game.load.image('trilly', 'immagini/trilly.png');
    game.load.image('left', 'immagini/left-02.png');
    game.load.image('right', 'immagini/right.png');
    game.load.image('jump1', 'immagini/jump.png');
    game.load.image('toposcritta', 'immagini/jumptopo.png');
    game.load.image('freccia', 'immagini/freccia.png');
    game.load.image('sky1', 'immagini/sfondo1_1.png');
    game.load.image('sky2', 'immagini/sfondo2_1.png');
    game.load.image('sky3', 'immagini/sfondo3_1.png');
    game.load.image('sky4', 'immagini/sfondo4_1.png');
    game.load.image('sky5', 'immagini/sfondo5_1.png');
    game.load.image('sky6', 'immagini/Risorsa 72.png');
    game.load.image('ground', 'immagini/ground.png');
    game.load.image('idra', 'immagini/idra.png');
    game.load.spritesheet('dude', 'immagini/wendy.png', 217, 355);
    game.load.image('topo', 'immagini/topo ok1.png');
    game.load.image('oggetto1', 'immagini/sveglia.png');
    game.load.image('oggetto2', 'immagini/ditale.png');
    game.load.image('oggetto3', 'immagini/flauto.png');
    game.load.image('oggetto4', 'immagini/piumaOK.png');
    game.load.image('trenodietro', 'immagini/trenodietro.png');
    game.load.image('trenodavanti', 'immagini/trenodavanti.png');
    game.load.image('scatola', 'immagini/scatola 1.png');
    game.load.spritesheet('tenda', 'immagini/tenda.png', 105, 16, 6);
    game.load.image('piccione', 'https://examples.phaser.io/assets/sprites/wabbit.png');
    game.load.image('oil', 'https://examples.phaser.io/assets/sprites/platform.png');
    //game.load.image('bandiera', 'immagini/bandiera.png');
    game.load.image('coppo', 'immagini/coppo.png');
    game.load.image('cuore', 'immagini/cuore verde.png');
    game.load.image('cuoreno', 'immagini/cuore grigio_1.png');
    game.load.image('semafororosso', 'immagini/semaforo rosso.png');
    game.load.image('semaforoverde', 'immagini/semaforo verde.png');
    game.load.image('entrata', 'immagini/partesxsala.png');
    game.load.image('stopinmetro', 'immagini/stop metro.png');
    game.load.image('stopdelplayer', 'immagini/pulsanteXtrasparente.png');
    game.load.image('pulsante1', 'immagini/pulsanteXtrasparente.png');
    game.load.image('missing', 'immagini/pulsanteXtrasparente.png');
    game.load.image('scritta1', 'immagini/missing.png');
    game.load.image('missingscritta', 'immagini/star.png');
    game.load.image('luce', 'immagini/luce_metro.png');
    game.load.image('sfondometro', 'immagini/dietro metro.png');
},

create: function() {

    game.world.setBounds(0, 0, game.world.width, game.world.height);
    game.physics.startSystem(Phaser.Physics.ARCADE);

    var sfondo1 = game.add.sprite(100, 0, 'sky1');
    sfondo1.scale.setTo(20, 15);
    sfondo2 = game.add.sprite(0, 250, 'sky2');
    sfondo3 = game.add.sprite(0, 300, 'sky3');
    sfondo4 = game.add.sprite(0, 350, 'sky4');
    sfondo5 = game.add.sprite(950, 468, 'sky5');
    sfondo6 = game.add.sprite(1000, 468, 'sky6');
    sfondo2 = game.add.sprite(7424, 250, 'sky2');
    sfondo3 = game.add.sprite(7424, 300, 'sky3');
    sfondo4 = game.add.sprite(7424, 350, 'sky4');
    sfondo5 = game.add.sprite(8134, 468, 'sky5');
    sfondo6 = game.add.sprite(8324, 468, 'sky6');
    var sfondo7 = game.add.sprite(3200, 1184, 'sfondometro');
    sfondo7.scale.setTo(1.5, 1);
    //sfondo7.alpha = 0.5;

    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 20, 'ground');
    var ledge = platforms.create(400, 450, 'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(0.2, 0.2);
    ledge = platforms.create(1000, 180, 'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(0.2, 0.2);

    left = game.add.sprite(988, 852, 'left');
    game.physics.arcade.enable(left);
    left.body.immovable = true;
    left.enableBody = true;
    left.body.collideWorldBounds = true;
    left.scale.setTo(0.25, 0.25);

    jump1 = game.add.sprite(1052, 852,'jump1');
    game.physics.arcade.enable(jump1);
    jump1.body.immovable = true;
    jump1.enableBody = true;
    jump1.body.collideWorldBounds = true;
    jump1.scale.setTo(0.25, 0.25);

    freccia = game.add.sprite(1920, 576,'freccia');
    game.physics.arcade.enable(freccia);
    freccia.body.immovable = true;
    freccia.enableBody = true;
    freccia.body.collideWorldBounds = true;
    freccia.scale.setTo(0.25, 0.25);

    right = game.add.sprite(1132, 852, 'right');
    game.physics.arcade.enable(right);
  right.body.immovable = true;
  right.enableBody = true;
  right.body.collideWorldBounds = true;
  right.scale.setTo(0.25, 0.25);

    semaforor = game.add.sprite(3136, 1013, 'semafororosso');
    game.physics.arcade.enable(semaforor);
    semaforor.body.immovable = true;
    semaforor.enableBody = true;
    semaforor.body.collideWorldBounds = true;

    coppotrilli = game.add.sprite(11232, 352, 'coppo');
    game.physics.arcade.enable(coppotrilli);
    coppotrilli.body.immovable = true;
    coppotrilli.enableBody = true;
    coppotrilli.body.collideWorldBounds = true;

    semaforor2 = game.add.sprite(8450, 1013, 'semafororosso');
    game.physics.arcade.enable(semaforor2);
    semaforor2.body.immovable = true;
    semaforor2.enableBody = true;
    semaforor2.body.collideWorldBounds = true;

    salaballo = game.add.sprite(160, 50, 'entrata');
    game.physics.arcade.enable(salaballo);
    salaballo.body.immovable = true;
    salaballo.enableBody = true;
    salaballo.body.collideWorldBounds = true;

    salaballofine = game.add.sprite(3360, 50, 'entrata');
    game.physics.arcade.enable(salaballofine);
    salaballofine.body.immovable = true;
    salaballofine.enableBody = true;
    salaballofine.body.collideWorldBounds = true;

    //salaballofinefine = game.add.sprite(7172, -3250, 'entrata');
    //game.physics.arcade.enable(salaballofinefine);
    //salaballofinefine.body.immovable = true;
    //salaballofinefine.enableBody = true;
    //salaballofinefine.body.collideWorldBounds = true;
    //salaballofinefine.scale.setTo(1, 1.5);

    stopmetro = game.add.sprite(3200, 2112, 'stopinmetro');
    game.physics.arcade.enable(stopmetro);
    stopmetro.body.immovable = true;
    stopmetro.enableBody = true;
    stopmetro.body.collideWorldBounds = true;

    stopplayer = game.add.sprite(3200, 2580, 'stopdelplayer');
    game.physics.arcade.enable(stopplayer);
    stopplayer.body.immovable = true;
    stopplayer.enableBody = true;
    stopplayer.body.collideWorldBounds = true;

    scatola = game.add.physicsGroup();
    scatola.enableBody = true;
    game.physics.arcade.enable(scatola);
    scatola.create(2500, 530, 'scatola');
    scatola.create(2700, 530, 'scatola');
    scatola.setAll('body.immovable', false);




    tenda = game.add.sprite(3072, 672, 'tenda');
    game.physics.arcade.enable(tenda);
    tenda.body.immovable = true;
    tenda.enableBody = true;
    tenda.body.collideWorldBounds = true;
    tenda.scale.setTo(1, 1);

    tenda2 = game.add.sprite(10496, 512, 'tenda');
    game.physics.arcade.enable(tenda2);
    tenda2.body.immovable = true;
    tenda2.enableBody = true;
    tenda2.body.collideWorldBounds = true;
    tenda2.scale.setTo(0.6, 0.6);



    coppos = game.add.physicsGroup();
    game.time.events.loop(3500, scrolling);
    coppos.setAll('body.immovable', true);
    coppos.forEach(function(cop){
        cop.anchor.setTo(0.5,0.5);
      });

      copposdx = game.add.physicsGroup();
      game.time.events.loop(3500, scrolling1);
      copposdx.setAll('body.immovable', true);
      copposdx.forEach(function(copp){
          copp.anchor.setTo(0.5,0.5);
        });

missingobject = game.add.sprite(3200, 1186, 'missing');
game.physics.arcade.enable(missingobject);
missingobject.body.immovable = true ;
//missingobject.scale.setTo(4, 4);


missingobject1 = game.add.sprite(8500, 0, 'missing');
game.physics.arcade.enable(missingobject1);
missingobject1.body.immovable = true ;
missingobject1.scale.setTo(0.01, 20);

    oggetto1 = game.add.sprite(7328, 1600, 'oggetto1'); // è oggetto3
    game.physics.arcade.enable(oggetto1);
    oggetto1.scale.setTo(0.15, 0.15);
    oggetto1.alpha = 0;

    oggetto2 = game.add.sprite(2000, 500, 'oggetto2'); // è oggetto1
    game.physics.arcade.enable(oggetto2);
    oggetto2.scale.setTo(0.15, 0.15);
    oggetto2.alpha = 0;

    oggetto3 = game.add.sprite(10496, 288, 'oggetto3'); // è oggetto4 6560 1440
    game.physics.arcade.enable(oggetto3);
    oggetto3.scale.setTo(0.15, 0.15);
    oggetto3.alpha = 0;

    oggetto4 = game.add.sprite(3072, 384, 'oggetto4'); // è oggetto2
    game.physics.arcade.enable(oggetto4);
    oggetto4.scale.setTo(0.2, 0.2);
    oggetto4.alpha = 0;


    oggetti = game.add.group();
    oggetti.enableBody = true;
    var rettangolo = oggetti.create(7328, 1600, 'oggetto1'); //sveglia
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.15, 0.15);
    rettangolo.offset = 60;
    rettangolo.follow = 5;
    rettangolo = oggetti.create(2000, 500, 'oggetto2'); //ditale
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.15, 0.15);
    rettangolo.offset = 20;
    rettangolo.follow = 10;
    rettangolo = oggetti.create(10496, 288, 'oggetto3'); //flauto
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.15, 0.15);
    rettangolo.offset = 80;
    rettangolo.follow = 20;
    rettangolo = oggetti.create(3072, 384, 'oggetto4'); //piuma
    rettangolo.body.immovable = true;
    rettangolo.scale.setTo(0.2, 0.2);
    rettangolo.offset = 40;
    rettangolo.follow = 30;

    //player = game.add.sprite(sponx, spony, 'dude');
    player = game.add.sprite(sponx , spony, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 800;
    player.scale.setTo(0.28, 0.28);
    player.body.collideWorldBounds = true;
    //game.camera.follow(player, Phaser.Camera.STYLE_PLATFORMER);
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.07, 0.6);
    player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 16, true);
    player.animations.add('right', [9, 10, 11, 12, 13, 14, 15], 16, true);

    fatina = game.add.sprite(11328, 224, 'trilly');
    game.physics.arcade.enable(fatina);
    fatina.body.bounce.y = 0.1;
    //trilly.body.gravity.y = 800;
    fatina.scale.setTo(0.15, 0.15);
    fatina.body.collideWorldBounds = true;

        treno = game.add.physicsGroup();
    game.time.events.loop(2800, swiping1);
    treno.setAll('body.immovable', true);

    treno1 = game.add.physicsGroup();
    game.time.events.loop(2800, swiping2);
    treno1.setAll('body.immovable', true);

    enemy = game.add.sprite(5900, 1859, 'topo');
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds = true;
    enemy.body.gravity.y = 500;
    enemy.enableBody = true;
    enemy.body.immovable = true;
    enemy.scale.setTo(0.3, 0.3);

    enemy1 = game.add.sprite(6300, 1859, 'topo');
    game.physics.arcade.enable(enemy1);
    enemy1.body.collideWorldBounds = true;
    enemy1.body.gravity.y = 500;
    enemy1.enableBody = true;
    enemy1.body.immovable = true;
    enemy1.scale.setTo(0.3, 0.3);

    enemy2 = game.add.sprite(6300, 1859, 'topo');
    game.physics.arcade.enable(enemy2);
    enemy2.body.collideWorldBounds = true;
    enemy2.body.gravity.y = 500;
    enemy2.enableBody = true;
    enemy2.body.immovable = true;
    enemy2.scale.setTo(0.3, 0.3);

    enemy3 = game.add.sprite(4288, 900, 'topo');
    game.physics.arcade.enable(enemy3);
    enemy3.body.collideWorldBounds = true;
    enemy3.body.gravity.y = 500;
    enemy3.enableBody = true;
    enemy3.body.immovable = true;
    enemy3.scale.setTo(0.3, 0.3);

    enemy4 = game.add.sprite(2600, 2000, 'toposcritta');
    game.physics.arcade.enable(enemy4);
    enemy4.body.collideWorldBounds = true;
    enemy4.body.gravity.y = 500;
    enemy4.enableBody = true;
    enemy4.body.immovable = true;
    enemy4.scale.setTo(0.3, 0.3);

    enemy5 = game.add.sprite(1664, 896, 'topo');
    game.physics.arcade.enable(enemy5);
    enemy5.body.collideWorldBounds = true;
    enemy5.body.gravity.y = 500;
    enemy5.enableBody = true;
    enemy5.body.immovable = true;
    enemy5.scale.setTo(0.3, 0.3);

    enemy6 = game.add.sprite(2048, 768, 'topo');
    game.physics.arcade.enable(enemy6);
    enemy6.body.collideWorldBounds = true;
    enemy6.body.gravity.y = 500;
    enemy6.enableBody = true;
    enemy6.body.immovable = true;
    enemy6.scale.setTo(0.3, 0.3);

    enemy7 = game.add.sprite(2784, 768, 'topo');
    game.physics.arcade.enable(enemy7);
    enemy7.body.collideWorldBounds = true;
    enemy7.body.gravity.y = 500;
    enemy7.enableBody = true;
    enemy7.body.immovable = true;
    enemy7.scale.setTo(0.3, 0.3);

    enemy9 = game.add.sprite(6208, 1920, 'topo');
    game.physics.arcade.enable(enemy9);
    enemy9.body.collideWorldBounds = true;
    enemy9.body.gravity.y = 500;
    enemy9.enableBody = true;
    enemy9.body.immovable = true;
    enemy9.scale.setTo(0.3, 0.3);

    enemy8 = game.add.sprite(2432, 608, 'topo');
    game.physics.arcade.enable(enemy8);
    enemy8.body.collideWorldBounds = true;
    enemy8.body.gravity.y = 500;
    enemy8.enableBody = true;
    enemy8.body.immovable = true;
    enemy8.scale.setTo(0.3, 0.3);

    mascheraMetro = game.add.sprite(0, 0, 'luce');
    mascheraMetro.alpha = 0.96;
    mascheraMetro1 = game.add.sprite(0, 0, 'luce');
    mascheraMetro1.alpha = 0.96;

    pulsanteMETRO = game.add.sprite(3200, 1344, 'pulsante1');
    game.physics.arcade.enable(pulsanteMETRO);
    pulsanteMETRO.scale.setTo(4, 4);

    pulsanteMETRO1 = game.add.sprite(6400, 1000, 'pulsante1');
    game.physics.arcade.enable(pulsanteMETRO1);
    pulsanteMETRO1.scale.setTo(0.30, 0.1);

    pulsantefineMETRO = game.add.sprite(8224, 1184, 'pulsante1');
    game.physics.arcade.enable(pulsantefineMETRO);
    pulsantefineMETRO.scale.setTo(4, 4);

    map = game.add.tilemap('mappa');
    map.addTilesetImage('cemento', 'tiles')
    map.addTilesetImage('terreno metro', 'tilessss')
    map.addTilesetImage('piattaformeok', 'tiless')
    layer = map.createLayer('livello1');
    map.setCollisionBetween(0, 50000);

    cuorigrigi = game.add.physicsGroup();
    c1 = cuorigrigi.create(50, 30, 'cuoreno');
    c2 = cuorigrigi.create(90, 30, 'cuoreno');
    c3 = cuorigrigi.create(130, 30, 'cuoreno');
    c4 = cuorigrigi.create(170, 30, 'cuoreno');
    cuorigrigi.setAll('fixedToCamera', 'true');

    cuori = game.add.physicsGroup();
    c1 = cuori.create(50, 30, 'cuore');
    c2 = cuori.create(90, 30, 'cuore');
    c3 = cuori.create(130, 30, 'cuore');
    c4 = cuori.create(170, 30, 'cuore');
    cuori.setAll('fixedToCamera', 'true');

    barraoggettigrigio = game.add.physicsGroup();
    d1 = barraoggettigrigio.create(300, 30, 'oggetto2');
    d1.alpha = 0.3;
    d1.scale.setTo(0.2,0.2);
    pi1 = barraoggettigrigio.create(350, 25, 'oggetto4');
    pi1.alpha = 0.3;
    pi1.scale.setTo(0.2,0.2);
    s1 = barraoggettigrigio.create(380, 30, 'oggetto1');
    s1.alpha = 0.3;
    s1.scale.setTo(0.2,0.2);
    f1 = barraoggettigrigio.create(420, 30, 'oggetto3');
    f1.scale.setTo(0.2,0.2);
    f1.alpha = 0.3;
    barraoggettigrigio.setAll('fixedToCamera', 'true');

    //barraoggetti = game.add.physicsGroup();
    //d = barraoggetti.create(300, 30, 'oggetto2');
    //d.scale.setTo(0.2,0.2);
    //pi = barraoggetti.create(340, 30, 'oggetto4');
    //pi.scale.setTo(0.2,0.2);
    //s = barraoggetti.create(380, 30, 'oggetto1');
    //s.scale.setTo(0.2,0.2);
    //f = barraoggetti.create(420, 30, 'oggetto3');
    //f.scale.setTo(0.2,0.2);
    //barraoggetti.setAll('fixedToCamera', 'true');

     function swiping1() {
     //t = treno.create(12300, 1590, 'treno');
     t = treno.create(10300, 2245, 'trenodietro');
     t.body.immovable = true;
     t.scale.setTo(0.55, 0.55);
     t.body.velocity.x = -700;
   }
     function swiping2() {
     t1 = treno1.create(10240, 2332, 'trenodavanti');
     t1.body.immovable = true;
     t1.scale.setTo(0.55, 0.55);
     t1.body.velocity.x = -700;
     }

     function scrolling() {

          co = platforms.create(7980, 0, 'coppo');
          co.body.immovable = true;
          //p.scale.setTo(0.4,0.4);
          co.body.velocity.y = 80; }

    function scrolling1() {

       co = platforms.create(8300, -100, 'coppo');
        co.body.immovable = true;
      co.body.velocity.y = 80; }


    cursors = game.input.keyboard.createCursorKeys();
},

update: function() {

  var hitPlatform = game.physics.arcade.collide(player, platforms);
  //var hitOil = game.physics.arcade.collide(player, oil);
  var hitGround = game.physics.arcade.collide(player, ground);

  var hitStopmetro = game.physics.arcade.collide(player, stopmetro);
  var hitStopplayer = game.physics.arcade.collide(player, stopplayer);
  var hitCoppotrilli = game.physics.arcade.collide(player, coppotrilli);
  var hitTenda = game.physics.arcade.collide(player, tenda);
  var hitTenda2 = game.physics.arcade.collide(player, tenda2);
  var hitpulsanteMETRO = game.physics.arcade.collide(player, pulsanteMETRO, inmetro);
  var hitpulsanteMETRO1 = game.physics.arcade.collide(player, pulsanteMETRO1, inmetro1);
  var hitpulsantefineMETRO = game.physics.arcade.collide(player, pulsantefineMETRO, inmetroNO);

  var hitScatola = game.physics.arcade.collide(player, scatola);


  var hittreno = game.physics.arcade.collide(player, treno);
  var hittreno1 = game.physics.arcade.collide(player, treno1);

  game.physics.arcade.collide(player, layer);
  game.physics.arcade.collide(player, stopmetro);
  game.physics.arcade.collide(player, stopplayer);
  game.physics.arcade.collide(layer, fatina);
  game.physics.arcade.collide(player, salaballo);
  game.physics.arcade.collide(player, salaballofine);
  //game.physics.arcade.collide(player, salaballofinefine);
  game.physics.arcade.collide(player, coppotrilli);
  game.physics.arcade.collide(enemy, layer);
  game.physics.arcade.collide(enemy1, layer);
  game.physics.arcade.collide(enemy2, layer);
  game.physics.arcade.collide(enemy3, layer);
  game.physics.arcade.collide(enemy4, layer);
  game.physics.arcade.collide(enemy5, layer);
  game.physics.arcade.collide(enemy6, layer);
  game.physics.arcade.collide(enemy7, layer);
  game.physics.arcade.collide(enemy8, layer);
  game.physics.arcade.collide(enemy9, layer);
  game.physics.arcade.collide(enemy, platforms);

  game.physics.arcade.collide(treno, platforms);
  game.physics.arcade.collide(treno, player, this.vitetreno, null, this);
  game.physics.arcade.collide(treno1, platforms);
  game.physics.arcade.collide(treno1, player, this.vitetreno1, null, this);

  game.physics.arcade.collide(enemy, tenda);


  game.physics.arcade.collide(enemy, tenda2);

  game.physics.arcade.collide(player, missingobject);
  game.physics.arcade.collide(player, missingobject1);

  game.physics.arcade.collide(player, scatola, setFriction, null, this);
  game.physics.arcade.collide(scatola, scatola, setFriction2, null, this);

  game.physics.arcade.overlap(player, fatina, this.arrivo, null, this);
  game.physics.arcade.overlap(player, oggetti, this.collectoggetti, null, this);
  game.physics.arcade.overlap(player, oggetto1, this.o1barra, null, this);
  game.physics.arcade.overlap(player, oggetto2, this.o2barra, null, this);
  game.physics.arcade.overlap(player, oggetto3, this.o3barra, null, this);
  game.physics.arcade.overlap(player, oggetto4, this.o4barra, null, this);
  game.physics.arcade.overlap(player, enemy, this.Nemico, null, this);
  game.physics.arcade.overlap(player, enemy1, this.Nemico1, null, this);
  game.physics.arcade.overlap(player, enemy2, this.Nemico2, null, this);
  game.physics.arcade.overlap(player, enemy3, this.Nemico3, null, this);
  game.physics.arcade.overlap(player, enemy4, this.Nemico4, null, this);
  game.physics.arcade.overlap(player, enemy5, this.Nemico5, null, this);
  game.physics.arcade.overlap(player, enemy6, this.Nemico6, null, this);
  game.physics.arcade.overlap(player, enemy7, this.Nemico7, null, this);
  game.physics.arcade.overlap(player, enemy8, this.Nemico8, null, this);
  game.physics.arcade.overlap(player, enemy9, this.Nemico9, null, this);

  game.physics.arcade.overlap(player, stopmetro,  this.playerkill, null, this);
  game.physics.arcade.overlap(player, treno);
  game.physics.arcade.overlap(player, treno1);
  game.physics.arcade.overlap(player, semaforor, this.checkpoint, null, this);
  game.physics.arcade.overlap(player, semaforor2, this.checkpoint2, null, this);
  //game.physics.arcade.overlap(player, pulsante, this.Nemico, null, this);

  patrol(enemy);
  patroll(enemy1);
  patroll(enemy2);
  patrol3(enemy3);
  patrol4(enemy4);
  patrol5(enemy5);
  patrol6(enemy6);
  patrol7(enemy7);
  patrol8(enemy8);
  patrol9(enemy9);


  player.body.velocity.x = 0;

  if (cursors.left.isDown)
  {
      //parallax1.tilePosition.x += 0.1;
      //parallax2.tilePosition.x += 0.3;
      //parallax3.tilePosition.x += 0.6;
      player.body.velocity.x = -450;
      player.animations.play('left');

  }
  else if (cursors.right.isDown)
  {
      //parallax1.tilePosition.x -= 0.1;
      //parallax2.tilePosition.x -= 0.3;
      //parallax3.tilePosition.x -= 0.6;
      player.body.velocity.x = 450;
      player.animations.play('right');
  }

  else
  {
      player.animations.stop();
      player.frame = 8;
  }

  oggetti.forEach(function (o) {
    if(o.touched){
      o.body.position.x = player.body.position.x - o.offset;
      o.body.position.y = o.body.position.y - (o.body.position.y - player.body.position.y)/o.follow;

    }
    console.log(o.touched)
  })

  if (cursors.left.isDown && !alberoColpito || cursors.right.isDown && alberoColpito)
  {
      player.body.velocity.x = -400;
      player.animations.play('left');
  }
  else if (cursors.right.isDown  && !alberoColpito || cursors.left.isDown && alberoColpito)
  {
      player.body.velocity.x = 400;
      player.animations.play('right');
  }

  if (cursors.up.isDown && player.body.touching.down && hitPlatform)
  {
      player.body.velocity.y = -jump;
  }


  if (cursors.up.isDown && player.body.touching.down && hitScatola)
  {
      player.body.velocity.y = -jump;
  }
  if (player.body.touching.down && hitTenda)
        {
            player.body.velocity.y = -jump*1.2;
            //sponx = tenda.body.position.x;
            //spony = tenda.body.position.y;
            if(!rimbalza) {
              rimbalza = true;
              animtenda = tenda.animations.add('salta');
              tenda.animations.play('salta', 15, false);
              game.time.events.add(1000, function() {rimbalza = false;
              })
            }
        }
  if (cursors.up.isDown && player.body.touching.down && hitStopmetro)
  {
      player.body.velocity.y = -jump;
        }
  if (player.body.touching.down && hitStopmetro)
  {
      sponx = 3232;
      spony = 1952;
      d1.alpha = 1;
      pi1.alpha = 1;
  }
  if (player.body.touching.down && hitTenda2)
        {
            player.body.velocity.y = -jump*1.2;
            //sponx = tenda.body.position.x;
            //spony = tenda.body.position.y;
            if(!rimbalza) {
              rimbalza = true;
              animtenda = tenda2.animations.add('salta');
              tenda2.animations.play('salta', 15, false);
              game.time.events.add(1000, function() {rimbalza = false;
              })
            }
        }

  if (cursors.up.isDown && player.body.touching.down && hittreno)
  {
      player.body.velocity.y = -jump;
  }
  if (cursors.up.isDown && player.body.touching.down && hittreno1)
  {
      player.body.velocity.y = -jump;
  }

  if (cursors.up.isDown && player.body.onFloor())
  {
      player.body.velocity.y = -jump;
  }

  if(scoreuncini == 3)
  {c4.kill();}
  else if(scoreuncini == 2)
  {c3.kill();}
  else if(scoreuncini == 1)
  {c2.kill();}
  else if(scoreuncini == 0)
  {c1.kill();}

  function patrol(enemy) {
    if(enemy.body.position.x < 5901)
    enemy.body.velocity.x = 100;
    if(enemy.body.position.x > 6200)
    enemy.body.velocity.x = -100;
  }

  function patroll(enemy1) {
    if(enemy1.body.position.x < 6351)
    enemy1.body.velocity.x = 150;
    if(enemy1.body.position.x > 6600)
    enemy1.body.velocity.x = -180;
  }

  function patrol2(enemy2) {
    if(enemy2.body.position.x < 6351)
    enemy2.body.velocity.x = 200;
    if(enemy2.body.position.x > 6600)
    enemy2.body.velocity.x = -280;
  }

  function patrol3(enemy3) {
    if(enemy3.body.position.x < 4289)
    enemy3.body.velocity.x = 200;
    if(enemy3.body.position.x > 4349)
    enemy3.body.velocity.x = -220;
  }

  function patrol4(enemy4) {
    if(enemy4.body.position.x < 2601)
    enemy4.body.velocity.x = 100;
    if(enemy4.body.position.x > 2801)
    enemy4.body.velocity.x = -130;
  }

  function patrol5(enemy5) {
    if(enemy5.body.position.x < 1665)
    enemy5.body.velocity.x = 100;
    if(enemy5.body.position.x > 1710)
    enemy5.body.velocity.x = -120;
  }

  function patrol6(enemy6) {
    if(enemy6.body.position.x < 2049)
    enemy6.body.velocity.x = 100;
    if(enemy6.body.position.x > 2200)
    enemy6.body.velocity.x = -120;
  }

  function patrol7(enemy7) {
    if(enemy7.body.position.x < 2785)
    enemy7.body.velocity.x = 100;
    if(enemy7.body.position.x > 2815)
    enemy7.body.velocity.x = -110;
  }

  function patrol8(enemy8) {
   if(enemy8.body.position.x < 2433)
    enemy8.body.velocity.x = 50;
    if(enemy8.body.position.x > 2485)
    enemy8.body.velocity.x = -80;
   }

  function patrol9(enemy9) {
   if(enemy9.body.position.x < 6209)
    enemy9.body.velocity.x = 80;
    if(enemy9.body.position.x > 6300)
    enemy9.body.velocity.x = -100;
  }








  function setFriction (player, scatola) {
      scatola.body.velocity.x = 0.1;
  }

  function setFriction2 (scatola, scatola) {
      scatola.body.velocity.x = 0.1;
  }

  function inmetro(player) {
    if(player.body.touching.down && pulsanteMETRO.body.touching.up) {
      pulsanteMETRO.kill();
      //game.time.events.loop(0, pulsantexmetro);
    pulsantexmetro(mascheraMetro);
  }
  }

  function inmetro1(pulsanteMETRO1) {
    if(player.body.touching.down && pulsanteMETRO1.body.touching.up) {
      pulsanteMETRO1.kill();
      //game.time.events.loop(0, pulsantexmetro);
    pulsantexmetro1(mascheraMetro1);
  }
  }

  function inmetroNO(player) {
    if(player.body.touching.up && pulsantefineMETRO.body.touching.down) {
      pulsantefineMETRO.kill();
      //game.time.events.loop(0, pulsantexmetro);
    pulsantexmetrofine(mascheraMetro);
  }
  }
  function pulsantexmetro(mascheraMetro) {

      mascheraMetro.fixedToCamera = true;
      mascheraMetro.cameraOffset.y = 100;
      mascheraMetro.cameraOffset.x = -20;
      //mascheraMetro.x = 0;
      game.time.events.add(0, function(){

    game.add.tween(mascheraMetro).to( { alpha: 1 },500, Phaser.Easing.None, true, 1000, 1000,true);
  }) }


  function pulsantexmetro1(mascheraMetro1) {

      mascheraMetro1.fixedToCamera = true;
      //mascheraMetro1.x = 0;

  }

  function pulsantexmetrofine(mascheraMetro) {

  mascheraMetro.fixedToCamera = false;
  mascheraMetro1.fixedToCamera = false;
  mascheraMetro.kill();
  mascheraMetro1.kill();

  }
  },

  playerkill: function(player, stopmetro) {
    if (player.body.touching && stopmetro.body.touching.right) {
      player.kill();
    }
  },


  vitetreno: function (player, treno) {
    if (player.body.touching.right && treno.body.touching.left)

          player.kill();
      this.game.state.start('Bad');


      },

      vitetreno1: function (player, treno1) {
        if (player.body.touching.right && treno1.body.touching.left)

            player.kill();
          this.game.state.start('Bad');


          },



  collectoggetti: function (player, oggetto) {
      oggetto.touched = true;
      },

  o1barra: function (player, oggetto1) {
    s1.alpha = 1;
    missingobject1.kill();
  },

  o2barra: function (player, oggetto2) {
    d1.alpha = 1;
  },

  o3barra: function (player, oggetto3) {
    f1.alpha = 1;

  },

  o4barra: function (player, oggetto4) {
    pi1.alpha = 1;
    //missingobject.kill();
    //semaforor.kill();
    //semforov = game.add.sprite(3136, 1013, 'semaforoverde');
  },

  arrivo: function (player, fatina) {
      this.game.state.start('Good');
  },

  Nemico: function (player, enemy) {
      if(player.body.touching.down && enemy.body.touching.up)
       {
         enemy.kill();

        }

     else if(!colpito) {
       colpito = true;
       scoreuncini--;
       game.time.events.add(2000, function() {colpito = false;});
       game.time.events.add(250, function(){
       game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
     })
    }

       else if(scoreuncini === 0)
     {
         this.game.state.start('Bad');
       }
     },

     Nemico1: function (player, enemy1) {
         if(player.body.touching.down && enemy1.body.touching.up)
          {
            enemy1.kill();
             //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
           //  game.physics.arcade.enable(stella);
             //stella.enableBody=true;
           }

        else if(!colpito) {
          colpito = true;
          scoreuncini--;
          game.time.events.add(2000, function() {colpito = false;});
          game.time.events.add(250, function(){
          game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
        })
       }

          else if(scoreuncini === 0)
        {
            this.game.state.start('Bad');
          }
        },
        Nemico2: function (player, enemy2) {
            if(player.body.touching.down && enemy2.body.touching.up)
             {
               enemy2.kill();
                //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
              //  game.physics.arcade.enable(stella);
                //stella.enableBody=true;
              }

           else if(!colpito) {
             colpito = true;
             scoreuncini--;
             game.time.events.add(2000, function() {colpito = false;});
             game.time.events.add(250, function(){
             game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
           })
          }

             else if(scoreuncini === 0)
           {
               this.game.state.start('Bad');
             }
           },
           Nemico3: function (player, enemy3) {
               if(player.body.touching.down && enemy3.body.touching.up)
                {
                  enemy3.kill();
                   //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                 //  game.physics.arcade.enable(stella);
                   //stella.enableBody=true;
                 }

              else if(!colpito) {
                colpito = true;
                scoreuncini--;
                game.time.events.add(2000, function() {colpito = false;});
                game.time.events.add(250, function(){
                game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
              })
             }

                else if(scoreuncini === 0)
              {
                  this.game.state.start('Bad');
                }
              },
              Nemico4: function (player, enemy4) {
                  if(player.body.touching.down && enemy4.body.touching.up)
                   {
                     enemy4.kill();
                      //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                    //  game.physics.arcade.enable(stella);
                      //stella.enableBody=true;
                    }

                 else if(!colpito) {
                   colpito = true;
                   scoreuncini--;
                   game.time.events.add(2000, function() {colpito = false;});
                   game.time.events.add(250, function(){
                   game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                 })
                }

                   else if(scoreuncini === 0)
                 {
                     this.game.state.start('Bad');
                   }
                 },
                 Nemico5: function (player, enemy5) {
                     if(player.body.touching.down && enemy5.body.touching.up)
                      {
                        enemy5.kill();
                         //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                       //  game.physics.arcade.enable(stella);
                         //stella.enableBody=true;
                       }

                    else if(!colpito) {
                      colpito = true;
                      scoreuncini--;
                      game.time.events.add(2000, function() {colpito = false;});
                      game.time.events.add(250, function(){
                      game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                    })
                   }

                      else if(scoreuncini === 0)
                    {
                        this.game.state.start('Bad');
                      }
                    },
                    Nemico6: function (player, enemy6) {
                        if(player.body.touching.down && enemy6.body.touching.up)
                         {
                           enemy6.kill();
                            //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                          //  game.physics.arcade.enable(stella);
                            //stella.enableBody=true;
                          }

                       else if(!colpito) {
                         colpito = true;
                         scoreuncini--;
                         game.time.events.add(2000, function() {colpito = false;});
                         game.time.events.add(250, function(){
                         game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                       })
                      }

                         else if(scoreuncini === 0)
                       {
                           this.game.state.start('Bad');
                         }
                       },
                       Nemico7: function (player, enemy7) {
                           if(player.body.touching.down && enemy7.body.touching.up)
                            {
                              enemy7.kill();
                               //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                             //  game.physics.arcade.enable(stella);
                               //stella.enableBody=true;
                             }

                          else if(!colpito) {
                            colpito = true;
                            scoreuncini--;
                            game.time.events.add(2000, function() {colpito = false;});
                            game.time.events.add(250, function(){
                            game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                          })
                         }

                            else if(scoreuncini === 0)
                          {
                              this.game.state.start('Bad');
                            }
                          },
                          Nemico8: function (player, enemy8) {
                              if(player.body.touching.down && enemy8.body.touching.up)
                               {
                                 enemy8.kill();
                                  //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                                //  game.physics.arcade.enable(stella);
                                  //stella.enableBody=true;
                                }

                             else if(!colpito) {
                               colpito = true;
                               scoreuncini--;
                               game.time.events.add(2000, function() {colpito = false;});
                               game.time.events.add(250, function(){
                               game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                             })
                            }

                               else if(scoreuncini === 0)
                             {
                                 this.game.state.start('Bad');
                               }
                             },
                             Nemico9: function (player, enemy9) {
                                 if(player.body.touching.down && enemy9.body.touching.up)
                                  {
                                    enemy9.kill();
                                     //stella = game.add.sprite(nemo.body.position.x, nemo.body.position.y-70, 'stella');
                                   //  game.physics.arcade.enable(stella);
                                     //stella.enableBody=true;
                                   }

                                else if(!colpito) {
                                  colpito = true;
                                  scoreuncini--;
                                  game.time.events.add(2000, function() {colpito = false;});
                                  game.time.events.add(250, function(){
                                  game.add.tween(player).to( { alpha: 0 }, 150, Phaser.Easing.Linear.None, true, 0, 2, true);
                                })
                               }

                                  else if(scoreuncini === 0)
                                {
                                    this.game.state.start('Bad');
                                  }
                                },
  checkpoint: function (player, semaforor) {
    if(d1.alpha === 1 && pi1.alpha===1) {
    semaforor.kill();
    missingobject.kill();
    semforov = game.add.sprite(3136, 1013, 'semaforoverde');
    //sponx = 3296;
    //spony = 1013;
  }
    else if (player.body.touching && semaforor.body.touching) { scritta = game.add.sprite(3180, 950, 'scritta1');
  scritta.scale.setTo(0.25, 0.25);
  scritta.alpha = 0;
  game.time.events.add(0, function(){
  game.add.tween(scritta).to( { alpha: 1 }, 600, Phaser.Easing.Linear.None, true, 0, 2, true);
  })
  }
  },

  //alert: function (player, missingobject) {
    //missingobject.kill();
    //semforov = game.add.sprite(3100, 1013, 'semaforoverde');
    //sponx = 3296;
    //spony = 1013;
  //},

  checkpoint2: function (player, semaforor2) {
    if(s1.alpha === 1) {
    semaforor2.kill();
    semforov2 = game.add.sprite(8450, 1013, 'semaforoverde');
    stopdp = game.add.sprite(7968, 1184, 'stopdelplayer');
    sponx = 8450;
    spony = 1013;
  //  d1.alpha = 0.3;
  //pi1.alpha = 0.3;
  //s1.alpha = 0.3;
  }
    else if (player.body.touching && semaforor2.body.touching) { scritta1 = game.add.sprite(8500, 950, 'scritta1');
  scritta1.scale.setTo(0.25, 0.25);
  scritta1.alpha = 0;
  game.time.events.add(0, function(){
  game.add.tween(scritta1).to( { alpha: 0 }, 600, Phaser.Easing.Linear.None, true, 0, 2, true);
  })
  }
},

  imageClick1: function(pointer) {
  this.game.state.start('Game2');
  }

};

game.state.add('Game1', Game1);

var GoodState = {
preload: function() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('finebene', 'immagini/finebene.png');
    game.load.image('foto1', 'immagini/scenaditale.png');
    game.load.image('foto2', 'immagini/scenapiuma.png');
    game.load.image('foto3', 'immagini/scenasveglia.png');
    game.load.image('foto4', 'immagini/scenacaverna.png');
    game.load.image('tasto1', 'immagini/ditale.png');
    game.load.image('tasto2', 'immagini/piuma.png');
    game.load.image('tasto3', 'immagini/sveglia.png');
    game.load.image('tasto4', 'immagini/flauto.png');
    game.load.image('backtogame', 'immagini/backto.png');
},

create: function() {
    img1 = game.add.sprite(0, 0, 'finebene');

    img2 = game.add.sprite(50, 680, 'tasto1');
    img2.scale.setTo(0.3, 0.3);
    img2.inputEnabled = true;
    img2.events.onInputDown.add(this.image00Click, this);

    img3 = game.add.sprite(130, 680, 'tasto2');
    img3.scale.setTo(0.3, 0.3);
    img3.inputEnabled = true;
    img3.events.onInputDown.add(this.image01Click, this);

    img4 = game.add.sprite(190, 680, 'tasto3');
    img4.scale.setTo(0.3, 0.3);
    img4.inputEnabled = true;
    img4.events.onInputDown.add(this.image02Click, this);

    img5 = game.add.sprite(260, 680, 'tasto4');
    img5.scale.setTo(0.3, 0.3);
    img5.inputEnabled = true;
    img5.events.onInputDown.add(this.image03Click, this);

    img6 = game.add.sprite(798, 705, 'backtogame');
    img6.scale.setTo(0.16, 0.2);
    img6.inputEnabled = true;
    img6.events.onInputDown.add(this.image04Click, this);
},

image00Click: function(pointer) {
  var image00 = game.add.sprite(-20, 0, 'foto1');
  image00.scale.setTo(0.85, 0.85);
  image00Click.events.onInputDown.add(this.image01Click, this);
},

image01Click: function(pointer) {
    var image01 = game.add.sprite(-20, 0, 'foto2');
    image01.scale.setTo(0.85, 0.85);
    image01Click.events.onInputDown.add(this.image02Click, this);
},

image02Click: function(pointer) {
    var image02 = game.add.sprite(-20, 0, 'foto3');
    image02.scale.setTo(0.85, 0.85);
    image02Click.events.onInputDown.add(this.image03Click, this);
},

image03Click: function(pointer) {
    var image03 = game.add.sprite(-20, 0, 'foto4');
    image03.scale.setTo(0.85, 0.85);
    image03Click.events.onInputDown.add(this.image04Click, this);
},

image04Click: function(pointer) {
this.game.state.start('Game2');
}
}
game.state.add('Good', GoodState);



var BadState = {
preload: function() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('fine', 'immagini/finaleno.png');
},

create: function() {
    image = game.add.sprite(0, 0, 'fine');
    image.scale.setTo(1, 1);
    image.inputEnabled = true;
    image.events.onInputDown.add(this.imageClick, this);
},

imageClick: function(pointer) {
    this.game.state.start('Game1');
    scoreuncini = 4;
    colpito = false;
    trenoColpito = false;
    treno1Colpito = false;
    alberoColpito = false;

    friction=false;
    scatolaSpinta=false;
}
}
game.state.add('Bad', BadState);
