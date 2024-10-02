// Crear los artículos para la primera sección

// Artículo para el texto
let articleTexto1 = document.createElement("article");
let texto1 = document.createElement("p");
texto1.setAttribute("class", "texto");
texto1.innerText = "Conóceme";
articleTexto1.appendChild(texto1);

// Artículo para la imagen
let articleImagen1 = document.createElement("article");
let img1 = document.createElement("img");
img1.setAttribute("src", "./IMG/m.png"); 
img1.setAttribute("alt", "Mi Foto");
articleImagen1.appendChild(img1);

// Agregar ambos artículos a la primera sección
document.getElementById("articulos").appendChild(articleTexto1);
document.getElementById("articulos").appendChild(articleImagen1);

// Crear los artículos para la segunda sección

// Artículo para el texto
let articleTexto2 = document.createElement("article");
let texto2 = document.createElement("p");
texto2.setAttribute("class", "texto");
texto2.innerText = "Conoce mas (Otra seccion)";
articleTexto2.appendChild(texto2);

// Artículo para la imagen
let articleImagen2 = document.createElement("article");
let img2 = document.createElement("img");
img2.setAttribute("src", "./IMG/m.png"); 
img2.setAttribute("alt", "Mi Foto");
articleImagen2.appendChild(img2);

// Agregar ambos artículos a la segunda sección
document.getElementById("articulos2").appendChild(articleTexto2);
document.getElementById("articulos2").appendChild(articleImagen2);
