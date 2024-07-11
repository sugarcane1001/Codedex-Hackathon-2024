import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xffffff)); // hex for white

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // enable damping

// Increase ambient light intensity
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // soft white light, higher intensity
scene.add(ambientLight);

// Adjust directional light intensity
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // white light, 60% intensity
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Add a second directional light
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4); // white light, 40% intensity
directionalLight2.position.set(-1, 0.5, 1).normalize();
scene.add(directionalLight2);

const loader = new GLTFLoader();

let coffee;
loader.load(
    '/coffee_cup.glb', // Correct path for the Express server setup
    function (gltf) {
        coffee = gltf.scene;
        scene.add(coffee);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update controls with damping
  renderer.render(scene, camera);
}

animate();
