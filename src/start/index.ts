import * as THREE from 'three'

const innerWidth = window.innerWidth-20;
const innerHeight = window.innerHeight-20;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45,innerWidth/innerHeight,1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor('#fff')
// 设置渲染器大小
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color:'#8390fa'})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube);
camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;

function render(){
    requestAnimationFrame(render);
    cube.rotation.x+=0.01;
    cube.rotation.z+=0.01;
    cube.rotation.y+=0.01;
    renderer.render(scene,camera)
}
render();