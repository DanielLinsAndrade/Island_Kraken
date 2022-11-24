import './style.css'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as POSTPROCESSING from 'postprocessing'
import { Water } from 'three/examples/jsm/objects/Water.js';

//importando as imagens de background
import one from '/assets/side/1.jpg'
import two from '/assets/side/2.jpg'
import three from '/assets/side/3.jpg'
import four from '/assets/side/4.jpg'
import bottom from '/assets/side/bottom.jpg'
import sky from '/assets/side/seu.jpg'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 1, 100000);
let clock = new THREE.Clock();
clock.start();

var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x000000)

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(-20,900,135);

//Texture Loader
function textura_espacial(){
    const textureLoader = new THREE.TextureLoader();
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      one,
      three,
      sky, //cima
      bottom, //baixo
      four,
      two
    ]);
}

var loader = new GLTFLoader();

//Ilha Principal
class Ilha_principal {
  constructor() {
    loader.load("assets/ilha/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(60, 60, 60)
      gltf.scene.position.set(0, 600, 0)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0 
    
      this.Ilha_principal = gltf.scene
    })
  }
}
new Ilha_principal()

//Barco
class Barco {
  constructor() {
    loader.load("assets/barco/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(0.3, 0.3, 0.3)
      gltf.scene.position.set(-800, 15, 0)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0 
    
      this.Barco = gltf.scene
    })
  }
  movimento(){
    if (this.Barco) {
      this.Barco.position.z -= 0.5
    }
  }
}
const barco = new Barco();

//Barco one piece
class going_merry {
  constructor() {
    loader.load("assets/onepiece_barco1/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(70, 70, 70)
      gltf.scene.position.set(-500, 2, 2300)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = -2
      gltf.scene.rotation.z = 0 
    
      this.going_merry = gltf.scene
    })
  }
  movimento(){
    if (this.going_merry) {
      this.going_merry.position.z -= 0.6
    }
  }
}
const Going_merry = new going_merry();

//Luffy
class Luffy {
  constructor() {
    loader.load("assets/luffy/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(200, 200, 200)
      gltf.scene.position.set(0, 388, 0)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = -2
      gltf.scene.rotation.z = 0 
    
      this.Luffy = gltf.scene
    })
  }
}
new Luffy();

//Barco one piece 2
class Sunny {
  constructor() {
    loader.load("assets/onepieve_barco2/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(40, 40, 40)
      gltf.scene.position.set(2000, 2, 2000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 3.7
      gltf.scene.rotation.z = 0 
    
      this.Sunny = gltf.scene
    })
  }

  movimento() {
    if (this.Sunny) {
      this.Sunny.position.x -= 0.7
      this.Sunny.position.z -= 0.3
    }
  }
}
const sunny = new Sunny();

//Dragon
class Dragon {
  constructor() {
    loader.load("assets/dragon/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(3, 3, 3)
      gltf.scene.position.set(0, 800, 0)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 3.2
      gltf.scene.rotation.z = 0 
    
      this.Dragon = gltf.scene
    })
    }
    movimento(){
      if (this.Dragon) {
        this.Dragon.position.z -= 0.3
      }
    }
}
const dragon = new Dragon();

//terrenos

//Ilha de terreno
class Terreno {
  constructor() {
    loader.load("assets/terreno/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(100, 100, 100)
      gltf.scene.position.set(10000, 330, 3000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = -2
      gltf.scene.rotation.z = 0 
    
      this.Terreno = gltf.scene
    })
  }
}
new Terreno();

//Ilha de terreno
class Terreno_grama_1 {
  constructor() {
    loader.load("assets/terreno_grama/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(150, 150, 150)
      gltf.scene.position.set(-10000, 250, 3000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 2
      gltf.scene.rotation.z = 0 
    
      this.Terreno_grama_1 = gltf.scene
    })
  }
}
new Terreno_grama_1();

class Terreno_grama_2 {
  constructor() {
    loader.load("assets/terreno_grama/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(150, 150, 150)
      gltf.scene.position.set(-7000, 250, 8000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = -5
      gltf.scene.rotation.z = 0 
    
      this.Terreno_grama_2 = gltf.scene
    })
  }
}
new Terreno_grama_2();

class Terreno_grama_3 {
  constructor() {
    loader.load("assets/terreno_grama/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(150, 150, 150)
      gltf.scene.position.set(-13000, 250, 11000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = -2
      gltf.scene.rotation.z = 0 
    
      this.Terreno_grama_3 = gltf.scene
    })
  }
}
new Terreno_grama_3();

class Sketch_terrain_1 {
  constructor() {
    loader.load("assets/sketch_terrain/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(3000, 3000, 3000)
      gltf.scene.position.set(-11000, 40, -11000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0
    
      this.Sketch_terrain_1 = gltf.scene
    })
  }
}
new Sketch_terrain_1();

class Sketch_terrain_2 {
  constructor() {
    loader.load("assets/sketch_terrain/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(3000, 3000, 3000)
      gltf.scene.position.set(11000, 40, -11000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0
    
      this.Sketch_terrain_2 = gltf.scene
    })
  }
}
new Sketch_terrain_2();

class Sketch_terrain_3 {
  constructor() {
    loader.load("assets/sketch_terrain/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(3000, 3000, 3000)
      gltf.scene.position.set(-6000, 40, -6000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0
    
      this.Sketch_terrain_3 = gltf.scene
    })
  }
}
new Sketch_terrain_3();

//O KRAKEN
class Kraken {
  constructor() {
    loader.load("assets/kraken/scene.gltf", (gltf) => {
      scene.add(gltf.scene)
      gltf.scene.scale.set(5, 5, 5)
      gltf.scene.position.set(300, 700, -6000)
      gltf.scene.rotation.x = 0
      gltf.scene.rotation.y = 0
      gltf.scene.rotation.z = 0
    
      this.Kraken = gltf.scene
    })
  }
}
new Kraken();



function luz(){
  var light = new THREE.HemisphereLight(0xf5c662, 0xFFFFFF, 1.3);
  scene.add(light);
}

let composer;

function shaders() {
 
  let light1 = new THREE.PointLight(0x44BDEE, 1);
  light1.position.set(0, 300, 500);
  scene.add(light1);

  let light2 = new THREE.PointLight(0x44BDEE, 0.5);
  light2.position.set(500, 100, 0);
  scene.add(light2);

  let light3 = new THREE.PointLight(0x4C44EE, 0.5);
  light3.position.set(0, 100, -500);
  scene.add(light3);

  let light4 = new THREE.PointLight(0x4C44EE, 1);
  light4.position.set(-500, 300, 0);
  scene.add(light4);

  composer = new POSTPROCESSING.EffectComposer(renderer);
  composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

  const effectPass = new POSTPROCESSING.EffectPass(
    camera,
    new POSTPROCESSING.BloomEffect()
  );
  effectPass.renderToScreen = true;
  composer.addPass(effectPass);

}

let water;

function mar() {

const agua = new THREE.PlaneGeometry(100000, 100000);

water = new Water(
  agua,
  {
    textureWidth: 4096,
    textureHeight: 4096,
    waterNormals: new THREE.TextureLoader().load('assets/water/nexuswater.jpg', function (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }),
      waterColor: 0x001e0f,
      distortionScale: 3.5,
      fog: scene.fog !== undefined
  }
  );

  water.rotation.x =  - Math.PI / 2;
  scene.add(water);
}

function controles(){
   controls.panSpeed = 6;
   controls.rotateSpeed = 2;

   controls.keys = {
     LEFT: 'KeyA',
     UP: 'KeyW',
     RIGHT: 'KeyD',
     BOTTOM: 'KeyS'
   }

   controls.listenToKeyEvents(window);
   controls.keyPanSpeed = 30;
   controls.minPolarAngle = (Math.PI / 4);
   controls.maxPolarAngle =  (Math.PI / 2) + (- Math.PI / 2048);
}

function audio_de_fundo(){
  
  const listener = new THREE.AudioListener();
  camera.add( listener );

  const sound = new THREE.Audio( listener );

  const audioLoader = new THREE.AudioLoader();
    audioLoader.load( 'assets/music/Nexus Kraken.wav', function( buffer ) {
	  sound.setBuffer( buffer );
	  sound.setLoop(true);
	  sound.setVolume(0.1);
	  sound.play();
  });

}

//chamada de funções
textura_espacial();
  
//audio_de_fundo(); 

mar();

controles();
  
shaders();
luz();

function animate(){  
  //renderer.render(scene, camera);
  composer.render();

  requestAnimationFrame(animate)
  controls.update()

  //chamando animações de movimento
  
  sunny.movimento();
  dragon.movimento();
  Going_merry.movimento();
  barco.movimento();
}

animate();