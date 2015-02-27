//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADD TEXT LABELS
// SMALLER IMAGE FILE SIZES?
// fix orbital mechanics
// fix orbital speeds so they arent punctuated / jagged
// make sure it works in chromium / chrome / IE
// SIMPLIFY CODE

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPTIONS MENU
function show_hide(value1, value2){
  // HIDE ORBITAL PATHS
  if (value1 === 0){
    scene.remove(sphere_1_0);
    scene.remove(sphere_2_0);
    scene.remove(sphere_3_0);
    scene.remove(sphere_4_0);
    scene.remove(sphere_5_0);
    scene.remove(sphere_6_0);
    scene.remove(sphere_7_0);
    scene.remove(sphere_8_0);
  }
  
  // HIDE THE BACKGROUND
  if (value1 === 1){
    document.getElementById("body").style.background = "#000000";
  }
  
  // HIDE EARTH'S MOON
  if (value1 === 2){
    scene.remove(sphere_3_1);
  }
  
  // HIDE INNER PLANETS
  if (value1 === 3){
    scene.remove(sphere_1);
    scene.remove(sphere_2);
    scene.remove(sphere_3);
      scene.remove(sphere_3_1);
    scene.remove(sphere_4);
  }
  
  // HIDE OUTER PLANETS
  if (value1 === 4){
    scene.remove(sphere_5);
    scene.remove(sphere_6);
      scene.remove(sphere_6_1);
      scene.remove(sphere_6_2);
    scene.remove(sphere_7);
    scene.remove(sphere_8);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SETUP
var scene = new THREE.Scene(),
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
renderer = new THREE.WebGLRenderer();  

renderer.setSize(window.innerWidth, window.innerHeight); //window.innerHeight); 
document.body.appendChild(renderer.domElement);

// set up the sphere vars
var radius = 50, segments = 16, rings = 16;

controls = new THREE.OrbitControls(camera, renderer.domElement);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){
  // SET CANVAS BACKGROUND COLOR
  renderer.setClearColorHex(0x000000, 0);
  
  // SCALES THE CANVAS WITH THE WINDOW DIMENSIONS
  window.addEventListener( 'resize', onWindowResize, false );

  init();
  render();
  animate();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOLAR SYSTEM OBJECTS
////////////////////////////////////
// SUN /////
var sphere_0_material = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_0_sun.jpg")
});
  
var sphere_0 = new THREE.Mesh(
  new THREE.SphereGeometry(20, segments, rings), // 545
  sphere_0_material);
  
sphere_0.position.set(0,0,0)
scene.add(sphere_0);

// add a light source to the sun
var light = new THREE.PointLight(0xffffff);
light.position.set(0,0,0);
scene.add(light);
////////////////////////////////////

////////////////////////////////////
// PLANET - MERCURY - 0.38 earth radius
var sphere_1_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_1_mercury.jpg")
});
  
var sphere_1 = new THREE.Mesh(
  new THREE.SphereGeometry(1.90, segments, rings),
  sphere_1_material);
  
sphere_1.position.set(-5,0,-100)
scene.add(sphere_1);

// MERCURY - orbital marker
var sphere_1_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_1_0 = new THREE.Mesh(
  new THREE.RingGeometry(99,100,100),
  sphere_1_0_material);

sphere_1_0.position.set(0,0,0)
sphere_1_0.rotation.x = Math.PI / 2;
scene.add(sphere_1_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - VENUS - 0.95 earth radius
var sphere_2_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_2_venus.jpg")
});
  
var sphere_2 = new THREE.Mesh(
  new THREE.SphereGeometry(4.75, segments, rings),
  sphere_2_material);
  
sphere_2.position.set(-10,0,-200)
scene.add(sphere_2);

// VENUS - orbital marker
var sphere_2_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_2_0 = new THREE.Mesh(
  new THREE.RingGeometry(199,200,100),
  sphere_2_0_material);

sphere_2_0.position.set(0,0,0)
sphere_2_0.rotation.x = Math.PI / 2;
scene.add(sphere_2_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - EARTH
var sphere_3_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_3_earth.jpg")
});
  
var sphere_3 = new THREE.Mesh(
  new THREE.SphereGeometry(5, segments, rings),
  sphere_3_material);
  
sphere_3.position.set(-15,0,-300)
scene.add(sphere_3);

// MOON - 0.27 earth radius
var sphere_3_1_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_3_1_moon.jpg")
});
  
var sphere_3_1 = new THREE.Mesh(
  new THREE.SphereGeometry(1.35, segments, rings),
  sphere_3_1_material);
  
sphere_3_1.position.set(-25,0,-310)
scene.add(sphere_3_1);

// EARTH - orbital marker
var sphere_3_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_3_0 = new THREE.Mesh(
  new THREE.RingGeometry(299,300,100),
  sphere_3_0_material);

sphere_3_0.position.set(0,0,0)
sphere_3_0.rotation.x = Math.PI / 2;
scene.add(sphere_3_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - MARS - 0.53 earth radius
var sphere_4_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_4_mars.jpg")
});
  
var sphere_4 = new THREE.Mesh(
  new THREE.SphereGeometry(2.65, segments, rings),
  sphere_4_material);
  
sphere_4.position.set(-20,0,-400)
scene.add(sphere_4);

// MARS - orbital marker
var sphere_4_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_4_0 = new THREE.Mesh(
  new THREE.RingGeometry(399,400,100),
  sphere_4_0_material);

sphere_4_0.position.set(0,0,0)
sphere_4_0.rotation.x = Math.PI / 2;
scene.add(sphere_4_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - JUPITER - 11.21 earth radius
var sphere_5_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_5_jupiter.jpg")
});
  
var sphere_5 = new THREE.Mesh(
  new THREE.SphereGeometry(56.05, segments, rings),
  sphere_5_material);
  
sphere_5.position.set(-25,0,-500)
scene.add(sphere_5);

// JUPITER - orbital marker
var sphere_5_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_5_0 = new THREE.Mesh(
  new THREE.RingGeometry(499,500,100),
  sphere_5_0_material);

sphere_5_0.position.set(0,0,0)
sphere_5_0.rotation.x = Math.PI / 2;
scene.add(sphere_5_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - SATURN - 9.45 earth radius
var sphere_6_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_6_saturn.jpg")
});
  
var sphere_6 = new THREE.Mesh(
  new THREE.SphereGeometry(47.25, segments, rings),
  sphere_6_material);
  
sphere_6.position.set(-35,0,-700)
scene.add(sphere_6);

// RINGS - 1 - ??? earth radius
var sphere_6_1_material = new THREE.MeshBasicMaterial({
  color: 0xCCAA88,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_6_1 = new THREE.Mesh(
  new THREE.RingGeometry(60,69, 30),
  sphere_6_1_material);
  
sphere_6_1.position.set(sphere_6.position.x,0,sphere_6.position.z)
sphere_6_1.rotation.x = Math.PI / 2;
scene.add(sphere_6_1);

// RINGS - 2
var sphere_6_2_material = new THREE.MeshBasicMaterial({
  color: 0x775544,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_6_2 = new THREE.Mesh(
  new THREE.RingGeometry(70, 75, 30),
  sphere_6_2_material);
  
sphere_6_2.position.set(sphere_6.position.x,0,sphere_6.position.z)
sphere_6_2.rotation.x = Math.PI / 2;
scene.add(sphere_6_2);

// SATURN - orbital marker
var sphere_6_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_6_0 = new THREE.Mesh(
  new THREE.RingGeometry(699,700,100),
  sphere_6_0_material);
  
sphere_6_0.position.set(0,0,0)
sphere_6_0.rotation.x = Math.PI / 2;
scene.add(sphere_6_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - URANUS - 4.01 earth radius
var sphere_7_material = new THREE.MeshPhongMaterial({
  color: 0x0087D5
});
  
var sphere_7 = new THREE.Mesh(
  new THREE.SphereGeometry(20.05, segments, rings),
  sphere_7_material);
  
sphere_7.position.set(-45,0,-900)
scene.add(sphere_7);

// URANUS - orbital marker
var sphere_7_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_7_0 = new THREE.Mesh(
  new THREE.RingGeometry(899,900,100),
  sphere_7_0_material);

sphere_7_0.position.set(0,0,0)
sphere_7_0.rotation.x = Math.PI / 2;
scene.add(sphere_7_0);
////////////////////////////////////

////////////////////////////////////
// PLANET - NEPTUNE - 3.88 earth radius
var sphere_8_material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("sphere_8_neptune.jpg")
});
  
var sphere_8 = new THREE.Mesh(
  new THREE.SphereGeometry(19.40, segments, rings),
  sphere_8_material);
  
sphere_8.position.set(-50,0,-1000)
scene.add(sphere_8);

// NEPTUNE - orbital marker
var sphere_8_0_material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  blending: THREE.AdditiveBlending, // required for transparent: true
  transparent: true,
  side: THREE.DoubleSide
});
  
var sphere_8_0 = new THREE.Mesh(
  new THREE.RingGeometry(999,1000,100),
  sphere_8_0_material);

sphere_8_0.position.set(0,0,0)
sphere_8_0.rotation.x = Math.PI / 2;
scene.add(sphere_8_0);
////////////////////////////////////
      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init(){
  camera.position.y = 1500;
};

var sin_deg = 0.00;
var cos_deg = 0.00;
var sin_deg2 = 0.00;
var cos_deg2 = 0.00;
var sin_deg3 = [];
var cos_deg3 = [];

var timer = [];
for (i = 0; i < 8; i++){
  sin_deg3[i] = 0.00;
  cos_deg3[i] = 0.00;
  
  timer[i] = 0;
}

function onWindowResize( event ) {
  SCREEN_HEIGHT = window.innerHeight;
  SCREEN_WIDTH = window.innerWidth;
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  camera.updateProjectionMatrix();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function render() {
  requestAnimationFrame(render);
  
  sphere_0.rotation.y += 0.01;
  sphere_1.rotation.y += 0.01;
  sphere_2.rotation.y += 0.01;
  sphere_3.rotation.y += 0.01;
  sphere_4.rotation.y += 0.01;
  sphere_5.rotation.y += 0.01;
  sphere_6.rotation.y += 0.01;
  sphere_7.rotation.y += 0.01;
  sphere_8.rotation.y += 0.01;
  
  sin_deg += 0.05;
  cos_deg += 0.05;
  
  sin_deg2 += 0.025;
  cos_deg2 += 0.025;
  
  sin_deg3[0] += 0.05;
  cos_deg3[0] += 0.05;
  sin_deg3[1] += 0.025;
  cos_deg3[1] += 0.025;
  sin_deg3[2] += 0.0125;
  cos_deg3[2] += 0.0125;
  sin_deg3[3] += 0.00625;
  cos_deg3[3] += 0.00625;
  sin_deg3[4] += 0.003125;
  cos_deg3[4] += 0.003125;
  sin_deg3[5] += 0.0015625;
  cos_deg3[5] += 0.0015625;
  sin_deg3[6] += 0.00078125;
  cos_deg3[6] += 0.00078125;
  sin_deg3[7] += 0.000390625;
  cos_deg3[7] += 0.000390625;
  
  sphere_1.position.x += 5 * Math.cos(sin_deg3[0]);
  sphere_1.position.z += 5 * Math.sin(cos_deg3[0]);
  
  timer[1]++;
  if (timer[1] >= 2){
    sphere_2.position.x += 10 * Math.cos(sin_deg3[1]);
    sphere_2.position.z += 10 * Math.sin(cos_deg3[1]);
    
    timer[1] = 0;
  }
  
  timer[2]++;
  if (timer[2] >= 4){
    sphere_3.position.x += 15 * Math.cos(sin_deg3[2]);
    sphere_3.position.z += 15 * Math.sin(cos_deg3[2]);
    
    sphere_3_1.position.x += 15 * Math.cos(sin_deg3[2]);
    sphere_3_1.position.z += 15 * Math.sin(cos_deg3[2]);
    
    timer[2] = 0;
  }
  
  timer[3]++;
  if (timer[3] >= 8){
    sphere_4.position.x += 20 * Math.cos(sin_deg3[3]);
    sphere_4.position.z += 20 * Math.sin(cos_deg3[3]);
    
    timer[3] = 0;
  }
  
  timer[4]++;
  if (timer[4] >= 16){
    sphere_5.position.x += 25 * Math.cos(sin_deg3[4]);
    sphere_5.position.z += 25 * Math.sin(cos_deg3[4]);
    
    timer[4] = 0;
  }
  
  timer[5]++;
  if (timer[5] >= 32){
    sphere_6.position.x += 35 * Math.cos(sin_deg3[5]);
    sphere_6.position.z += 35 * Math.sin(cos_deg3[5]);
    
    sphere_6_1.position.x += 35 * Math.cos(sin_deg3[5]);
    sphere_6_1.position.z += 35 * Math.sin(cos_deg3[5]);
    
    sphere_6_2.position.x += 35 * Math.cos(sin_deg3[5]);
    sphere_6_2.position.z += 35 * Math.sin(cos_deg3[5]);
    
    timer[5] = 0;
  }
  
  timer[6]++;
  if (timer[6] >= 64){
    sphere_7.position.x += 45 * Math.cos(sin_deg3[6]);
    sphere_7.position.z += 45 * Math.sin(cos_deg3[6]);
    
    timer[6] = 0;
  }
  
  timer[7]++;
  if (timer[7] >= 128){
    sphere_8.position.x += 50 * Math.cos(sin_deg3[7]);
    sphere_8.position.z += 50 * Math.sin(cos_deg3[7]);
    
    timer[7] = 0;
  }
  
  renderer.render(scene, camera);
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
};