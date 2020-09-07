constructor(){
  super();
  this.mountRef = React.createRef();
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/2/window.innerHeight, 0.1, 1000 );
  this.camera.position.z = 5;
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize( window.innerHeight/1.5, window.innerHeight/1.5 );
  this.controls = new OrbitControls( this.camera, this.renderer.domElement );
  this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  this.controls.dampingFactor = 0.05;

  this.controls.screenSpacePanning = false;

  this.controls.minDistance = 5;
  this.controls.maxDistance = 5;

  this.controls.maxPolarAngle = Math.PI / 2;
  this.cube = new Cube().getCube();

  //this.move = this.move.bind(this);

  for(let i = 0; i < this.cube.length; i++){
    this.scene.add(this.cube[i]);
  }
  console.log(this.scene.children.length);
  this.animate();

}

// dir: 1 || -1 wall: "red", "blue" etc..
move = (direction, wall) =>{
  let group = new THREE.Group();
  let position = new THREE.Vector3();
  let indexes = [];
  for(let i = 0; i < this.scene.children.length; i++){
    this.scene.children[i].getWorldPosition(position)
    if(wall === 'blue' && position.z ===  1){
      indexes.push(i);
    }
    // if(wall === 'green' && position.z === -1){group.add(this.scene.children[i])}
    // if(wall === 'white' && position.y === 1){group.add(this.scene.children[i])}
    // if(wall === 'yellow' && position.y === -1){group.add(this.scene.children[i])}
    // if(wall === 'red' && position.x === 1){group.add(this.scene.children[i])}
    // if(wall === 'orange' && position.x === -1){group.add(this.scene.children[i])}
    }
  for(let i = indexes.length - 1; i >= 0; i--){
    group.add(this.scene.children[indexes[i]]);
  }
  this.scene.add(group)
  group.rotateZ(-direction * 1.57079633);
  group.updateWorldMatrix();
  this.ungroup(group);
  console.log("group: " + group.rotation.z)

}

ungroup = (group) =>{
  console.log("in group len: " + group.children.length)
  for(let i = group.children.length -1; i >= 0; i--){
    var ungroupedObject = group.getObjectById(group.children[i].id);

    var position = new THREE.Vector3();
    var rotation = new THREE.Quaternion();

    ungroupedObject.getWorldPosition(position);
    ungroupedObject.getWorldQuaternion(rotation);

    // console.log("Position- x: " + position.x + ", y: " + position.y + ", z: " + position.z);
    // console.log("Rotation: " + rotation);

    group.remove(this.scene.getObjectById(group.children[i].id));
    this.scene.add(ungroupedObject);

    ungroupedObject.position.set(position.x, position.y, position.z);//.ceil());
    ungroupedObject.applyQuaternion(rotation);
  }


}

animate = () =>{
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render( this.scene, this.camera );
}
