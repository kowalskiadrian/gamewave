import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../styles/rubiks.css';
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

class Rubik extends Component{
  constructor(){
    super();
    this.mountRef = React.createRef();
    // SCENE + CAMERA
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth*0.7/window.innerHeight, 1, 1000 );
    this.camera.position.z = 7;
    this.camera.position.x = 8;
    this.camera.position.y = 9;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerHeight * 0.7, window.innerHeight*0.7 );
    // CAMERA
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.initControls();

    // CUBE
    this.cube = new Cube().getCube();

    for(let i = 0; i < this.cube.length; i++){
      this.scene.add(this.cube[i]);
    }


    this.animate();
  }

  move = (direction, wall) =>{
    var group = new THREE.Group();
    console.log(group.matrix);
    for(let i = this.cube.length - 1 ; i >= 0; i--){
      if(wall === 'blue' && this.scene.children[i].position.z === 1){
          group.add(this.scene.children[i])
      }
      if(wall === 'green' && this.scene.children[i].position.z === -1){
          group.add(this.scene.children[i])
      }
      if(wall === 'white' && this.scene.children[i].position.y === 1){
          group.add(this.scene.children[i])
      }
      if(wall === 'yellow' && this.scene.children[i].position.y === -1){
          group.add(this.scene.children[i])
      }
      if(wall === 'red' && this.scene.children[i].position.x === -1){
          group.add(this.scene.children[i])
      }
      if(wall === 'orange' && this.scene.children[i].position.x === 1){
          group.add(this.scene.children[i])
      }
    }
    if(wall === 'blue' || wall === 'green'){group.rotateZ(direction * Math.PI * 0.5)}
    if(wall === 'white' || wall === 'yellow'){group.rotateY(direction * Math.PI * 0.5)}
    if(wall === 'red' || wall === 'orange'){group.rotateX(direction * Math.PI * 0.5)}

    group.updateWorldMatrix();
    console.log(group.matrix)
    this.ungroup(group);
  }

  ungroup = (group) => {
    var position = new THREE.Vector3();
    var rotation = new THREE.Quaternion();
    for(let i = group.children.length -1; i >= 0; i--){
      group.children[i].getWorldQuaternion(rotation)
      group.children[i].getWorldPosition(position)

      var ungroupedObject = group.getObjectById(group.children[i].id);
      ungroupedObject.quaternion.set(rotation.x, rotation.y, rotation.z,rotation.w);
      ungroupedObject.position.set(Math.round(position.x), Math.round(position.y), Math.round(position.z))

      group.remove(group.getObjectById(group.children[i].id));
      this.scene.add(ungroupedObject);
    }
  }

  initControls(){

    this.controls.enableDamping = false;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 5;
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  animate(){
      requestAnimationFrame(() => this.animate());
      this.controls.update();
      this.renderer.render( this.scene, this.camera );
  }

  componentDidMount(){
    this.mountRef.current.appendChild( this.renderer.domElement );
  }

  render() {
    return(<div className="rubik-wrapper">
              <div ref={this.mountRef}></div>
              <div className="rubik-buttons">
                <button className='blue-button' onClick={() => this.move(-1, 'blue')}>ROTATE BLUE WALL CLOCKWISE</button>
                <button className='blue-button' onClick={() => this.move(1, 'blue')}>ROTATE BLUE WALL COUNTERCLOKWISE</button>
                <button className='red-button' onClick={() => this.move(-1, 'red')}>ROTATE RED  WALL CLOCKWISE</button>
                <button className='red-button' onClick={() => this.move(1, 'red')}>ROTATE RED WALL COUNTERCLOKWISE</button>
                <button className='white-button' onClick={() => this.move(-1, 'white')}>ROTATE WHITE WALL CLOCKWISE</button>
                <button className='white-button' onClick={() => this.move(1, 'white')}>ROTATE WHITE WALL COUNTERCLOKWISE</button>
                <button className='orange-button' onClick={() => this.move(-1, 'orange')}>ROTATE ORANGE WALL CLOCKWISE</button>
                <button className='orange-button' onClick={() => this.move(1, 'orange')}>ROTATE ORANGE WALL COUNTERCLOKWISE</button>
                <button className='yellow-button' onClick={() => this.move(-1, 'yellow')}>ROTATE YELLOW WALL CLOCKWISE</button>
                <button className='yellow-button' onClick={() => this.move(1, 'yellow')}>ROTATE YELLOW WALL COUNTERCLOKWISE</button>
                <button className='green-button' onClick={() => this.move(-1, 'green')}>ROTATE GREEN WALL CLOCKWISE</button>
                <button className='green-button' onClick={() => this.move(1, 'green')}>ROTATE GREEN WALL COUNTERCLOKWISE</button>
              </div>
           </div>)
    }
  }
  export default Rubik;

class Cube{
  constructor(){
      this.cube = this.generateCube();
    }

    getCube(){
      return this.cube;
    }

    generateCube(){
      let cube = [];
      const colors = [
        new THREE.MeshBasicMaterial({color: 0xF0750F}), //right**
        new THREE.MeshBasicMaterial({color: 0xBB0000}), //left**
        new THREE.MeshBasicMaterial({color: 0xF2F3EE}), //top **
        new THREE.MeshBasicMaterial({color: 0xFFF77D}), //bottom **
        new THREE.MeshBasicMaterial({color: 0x00D2FF}), //front **
        new THREE.MeshBasicMaterial({color: 0x5A8D03}), // back **
      ];
      for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
            for(let k = -1; k <= 1; k++){
                let cubie = new THREE.Mesh(new THREE.BoxGeometry(0.99, 0.99, 0.99), colors);
                cubie.name = "cubie";
                cubie.position.set(i, j, k);
                cube.push(cubie)
            }
          }
        }
      return cube;
    }
  }
