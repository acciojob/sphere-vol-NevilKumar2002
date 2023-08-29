const radius=document.getElementById("radius");
const volume=document.getElementById("volume");

function volume_sphere() {
    //Write your code here
	let r=radius.value;
	let ans=(4/3)*Math.PI*r*r*r;
	volume.value=ans;
    // ?volume.value.appendChild(ans);
  
} 
volume_sphere();

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
