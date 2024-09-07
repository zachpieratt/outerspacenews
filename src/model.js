import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loadButton = document.getElementById("loadModel");
loadButton.addEventListener("click", initModel, false);

function initModel() {
  const e = document.getElementById("models");
  const selectedModel = e.value;
  console.log(selectedModel);

  if (selectedModel == "default") {
    console.log("No Model Selected");
  } else {
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    loader.load(
      `3dModels/${selectedModel}.glb`,
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //sizing
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Create lights

    const ambientLight = new THREE.AmbientLight(0x404040, 60);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
    const spotLight = new THREE.SpotLight(0xffffff, 100, 5, 1, 1000);
    spotLight.position.set(0, 10, 10);
    directionalLight.position.set(0, 10, 10);

    scene.add(spotLight);
    scene.add(ambientLight);
    scene.add(directionalLight);

    //create camera

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      1000
    );
    camera.position.z = 80;
    scene.add(camera);

    //create renderer
    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    //controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1;
    controls.enableRotate = true;

    //resize
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      //update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();
  }
}
