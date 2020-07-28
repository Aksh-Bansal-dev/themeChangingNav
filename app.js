const anchor = document.getElementById("toggle");
const anchorSVG = document.getElementById("anchorSVG");
const clip = document.querySelector(".clip");
const body = document.getElementById("body");

let clickState = 0;
window.addEventListener("load",()=>{
	var theme = localStorage.getItem("theme");
	console.log(theme)
	if(theme){
		body.classList.replace("normal", theme);
		if(theme==="dark") clickState = 1;
		else if(theme==="light") clickState = 2;
		else if(theme==="colorful")clickState = 3;
	}else{
		 clickState = 0;
	}
})


anchor.addEventListener("click", ()=>{

	clip.classList.toggle("clip-ani");
	setTimeout(()=>{
		if(clickState===0){
			anchorSVG.classList.remove("rotat3");
			anchorSVG.classList.toggle("rotate");

			body.classList.remove("normal");
			body.classList.toggle("dark");

			localStorage.setItem("theme","dark");

			clickState = 1;
			
		}
		else if(clickState===1){
			anchorSVG.classList.remove("rotate");
			anchorSVG.classList.toggle("rotat1");

			body.classList.remove("dark");
			body.classList.toggle("light");

			localStorage.setItem("theme","light");
			
			clickState = 2;
		}
		else if(clickState===2){
			anchorSVG.classList.remove("rotat1");
			anchorSVG.classList.toggle("rotat2");

			body.classList.remove("light");
			body.classList.toggle("colorful");

			localStorage.setItem("theme","colorful");
			
			clickState = 3;
		}
		else if(clickState===3){
			anchorSVG.classList.remove("rotat2");
			anchorSVG.classList.toggle("rotat3");

			body.classList.remove("colorful");
			body.classList.toggle("normal");

			localStorage.setItem("theme","normal");
			

			clickState = 0;
		}
		clip.classList.toggle("clip-ani");
	},500);
		
	
	
	console.log(clickState);
})