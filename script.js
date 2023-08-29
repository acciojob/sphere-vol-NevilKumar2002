const radiusInput=document.getElementById("radius");
const volumeoutput=document.getElementById("volume");

function volume_sphere(){
    //Write your code here
	// event.preventDefault();
	
    const radius =parseInt(radiusInput.value);
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volumeoutput.value =(volume); 
	
}
volume_sphere();

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
