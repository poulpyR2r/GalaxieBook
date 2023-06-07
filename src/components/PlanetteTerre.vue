<template>
    <div id="mycanvas"></div>
</template>
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
    mounted() {
        const container = document.getElementById('mycanvas');

        // Crée une scène 3D, une caméra et un rendu WebGL
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setClearColor(0x000000, 0); // Fond transparent
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Charge un fichier GLTF
        let earth = undefined;
        const loader = new GLTFLoader();
        loader.load('./earth.glb', (gltf) => {
            earth = gltf.scene;
            scene.add(earth);
        }, undefined, (error) => {
            console.error(error);
        });


        // Ajoute des lumières à la scène


        const ambientLight = new THREE.AmbientLight(0xffffff, 1)
        scene.add(ambientLight)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.set(1, 1, 1)
        scene.add(directionalLight)
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight2.position.set(-1, -1, -1)
        scene.add(directionalLight2)

        // Ajuste la position et l'orientation de la caméra pour afficher le modèle 3D
        camera.position.z = 1.3;
        camera.lookAt(scene.position);



        // Animer le modèle 3D
        function animate() {
            requestAnimationFrame(animate);

            if (earth !== undefined) {
                earth.rotation.y += 0.005; // Fait tourner l'objet sur son axe Y




            }

            renderer.render(scene, camera);
        }
        animate();
    },
};
</script>
  
<style scoped>
#mycanvas {
    width: 100%;
    height: 500px;
    z-index: 9;
}
</style>
  