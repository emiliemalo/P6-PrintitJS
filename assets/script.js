
/*

étape 1 : générer une slide
récupérer dans slides le nom de l'image et la tagline
à partie du nom générer le chemin src
générer le html qui correspond à la slide

étape 2 : changer la slide et le texte

*/

// étape 1 => pour une seule image

/*let i = 0;

const image = document.getElementById("slides");
image.src = "./assets/images/slideshow/" + img_slides[i].image

const tag = document.getElementById("tagline");
tag.innerHTML = img_slides[i].tagLine; 
*/


 const img_slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;

function updateSlide(i){

const image = document.getElementById("slides");
image.src = "./assets/images/slideshow/" + img_slides[i].image

const tag = document.getElementById("tagline");
tag.innerHTML = img_slides[i].tagLine; 

updateDots(i)

}

function updateDots(i) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === i) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

updateSlide(i);



document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);

function nextSlide() {
    i++;
    if (i >= img_slides.length) {
        i = 0;
    }
    updateSlide(i);
}

function prevSlide() {
    i--;
	if (i < 0) {
        i = img_slides.length - 1;
    }
    updateSlide(i);
}














