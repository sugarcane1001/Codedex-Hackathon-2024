import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import '../assets/css/Menu.css';

const Menu = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000); // Aspect ratio adjusted for a square renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(400, 400); // Set a size for the renderer
    renderer.setClearColor(new THREE.Color(0x000000), 0); // Transparent background
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // enable damping
    controls.enablePan = false; // Disable panning to restrict movement to rotation and zoom
    controls.enableRotate = true; // Ensure rotation is enabled

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // soft white light, higher intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // white light, 60% intensity
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4); // white light, 40% intensity
    directionalLight2.position.set(-1, 0.5, 1).normalize();
    scene.add(directionalLight2);

    // Load 3D model
    const loader = new GLTFLoader();
    let coffee;

    loader.load(
      '/coffee_cup.glb', // Ensure this path is correct
      function (gltf) {
        coffee = gltf.scene;
        coffee.scale.set(1, 1, 1); // Adjust scale for visibility
        coffee.position.set(0, 0, 0); // Adjust position of coffee cup under the menu
        scene.add(coffee);

        // Adjust camera position based on the bounding box of the model
        const box = new THREE.Box3().setFromObject(coffee);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        controls.maxDistance = boxSize * 10;
        camera.position.copy(boxCenter);
        camera.position.x += boxSize / 2.0;
        camera.position.y += boxSize / 5.0;
        camera.position.z += boxSize / 2.0;
        camera.lookAt(boxCenter);
        controls.update();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    camera.position.z = 2;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // Update controls with damping
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  // JSX for menu and coffee cup
  return (
    <div className="scene-container">
      <div className="menu-container">
        <div className="menu-category">
          <strong className="category-title">BOBA</strong>
          <div className="menu-columns">
            <div className="menu-column">
              <div className="menu-item">
                <strong>THE OG</strong><br />
                Medium: $4.25<br />
                Large: $5.25<br />
                Hot: $5.25<br />
                Classic milk tea
              </div>
              <div className="menu-item">
                <strong>BROWN SUGAR BOBA</strong><br />
                Medium: $4.75<br />
                Large: $5.75<br />
                Hot: $5.75<br />
                Caffeine free
              </div>
              <div className="menu-item">
                <strong>TARO BOBA COCONUT BOBA</strong><br />
                Medium: $4.25<br />
                Large: $5.25<br />
                Hot: $5.25<br />
                Caffeine free, dairy free
              </div>
            </div>
            <div className="menu-column">
              <div className="menu-item">
                <strong>FRUIT GREEN/BLACK TEA</strong><br />
                Medium: $4.25<br />
                Large: $5.25<br />
                Comes in a variety of flavors:<br />
                mango/strawberry/passionfruit/<br />
                peach/green apple/lychee/kiwi<br />
                Feel free to mix and match!
              </div>
              <div className="menu-item">
                <strong>FRUIT BLACK TEA</strong><br />
                Medium: $4.25<br />
                Large: $5.25<br />
                Comes in a variety of flavors:<br />
                peach/strawberry<br />
                Feel free to mix and match!
              </div>
              <div className="menu-item">
                <strong>JASMINE WINTERMELON MILK TEA</strong><br />
                Medium: $4.25<br />
                Large: $5.25<br />
                Hot: $5.25<br />
                Dairy free
              </div>
            </div>
          </div>
        </div>
        <div className="menu-category">
          <strong className="category-title">SPECIALTY DRINKS</strong>
          <div className="menu-columns">
            <div className="menu-column">
              <div className="menu-item">
                <strong>MATCHA LATTE</strong><br />
                $5.25(H)/$5.75(C)
              </div>
              <div className="menu-item">
                <strong>HOT CHOCOLATE</strong><br />
                $4.50(H)<br />
                S'mores: $5.50
              </div>
              <div className="menu-item">
                <strong>NUTELLA LATTE</strong><br />
                $5.75(H)/$6.25(C)
              </div>
              <div className="menu-item">
                <strong>CHAI</strong><br />
                $5.00(H)/$5.50(C)
              </div>
            </div>
            <div className="menu-column">
              <div className="menu-item">
                <strong>LAVENDAR LATTE</strong><br />
                $5.75(H)/$6.25(C)
              </div>
              <div className="menu-item">
                <strong>ROSE LATTE</strong><br />
                $5.75(H)/$6.25(C)
              </div>
              <div className="menu-item">
                <strong>BROWN SUGAR LATTE</strong><br />
                $5.75(H)/$6.25(C)
              </div>
              <div className="menu-item">
                <strong>BUMBLEBEE LATTE</strong><br />
                $6.25(H)/$6.75(C)
              </div>
              <div className="menu-item">
                <strong>DIRTY CHAI</strong><br />
                $6.25(H)/$6.75(C)
              </div>
            </div>
          </div>
        </div>
        <div className="menu-category">
          <strong className="category-title">COFFEE</strong>
          <div className="menu-columns">
            <div className="menu-column">
              <div className="menu-item">
                <strong>LATTE</strong><br />
                $4.75(H)/$5.25(C)
              </div>
              <div className="menu-item">
                <strong>CORTADO</strong><br />
                $4.25(H)/$4.75(C)
              </div>
              <div className="menu-item">
                <strong>DRIP COFFEE</strong><br />
                Small: $3(H)/$3.50(C)<br />
                Medium: $3.50(H)<br />
                Large: $4(H)/$4.25(C)
              </div>
              <div className="menu-item">
                <strong>CAFE AU LAIT</strong><br />
                $3.25(H)
              </div>
            </div>
            <div className="menu-column">
              <div className="menu-item">
                <strong>CAPPUCINO</strong><br />
                $4.50(H)
              </div>
              <div className="menu-item">
                <strong>MOCHA</strong><br />
                $5.75(H)/$6.25(C)
              </div>
              <div className="menu-item">
                <strong>RED EYE</strong><br />
                $4.50(H)/$4.75(C)
              </div>
              <div className="menu-item">
                <strong>AMERICANO</strong><br />
                $3.75(H)/$4.25(C)
              </div>
            </div>
          </div>
        </div>
        <div className="menu-toppings">
          <strong>TOPPINGS +$0.50</strong>
          <p>Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop strawberry, pop passionfruit, mango stars</p>
        </div>
      </div>
      <div ref={mountRef} className="renderer-container"></div>
    </div>
  );
};

export default Menu;