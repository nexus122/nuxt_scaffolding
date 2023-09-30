// leer el archivo page_data.json
const pageData = require("../page_data.json");
const fs = require("fs");

// ELiminador de acentos
const removeAccents = (str) => {
  console.log(str)
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

// iterar sobre el array de objetos y crear un archivo dentro de la carpeta pages por cada objeto
let folderName = pageData[0]["name"];
let questions = pageData[0]["questions"];

// Quitamos los acentos a los titulos
questions.map((element)=>{
  element.question = removeAccents(element.question);
})

// Eliminamos todo lo que haya en la carpeta
deleteFolder(`../src/pages/${folderName}`);

// Añadimos la estructura al index.vue de la carpeta /nombreProyecto
fs.writeFileSync(
  `../src/pages/${folderName}/index.vue`,
  `<template>
    <div class="container">
      <article>
        <header>
            <div>
                <h1>${folderName}</h1>
            </div>
        </header>`
);

// Creamos cada una de las paginas del proyecto
questions.forEach((page) => {
  fs.writeFileSync(
    `../src/pages/${folderName}/${page.question.replaceAll(" ", "_")}.vue`,
    `<template>
        <div class="container">
          <article>
              <header>
                <h1 style="text-transform: capitalize;">${page.question}</h1>
              </header>
              <p>${page.text}</p>
              <footer>
                <router-link to="/${folderName}"><button>Back</button></router-link>
              </footer>
          </article>
        </div>
    </template>
    `
  );
  // write link in the index.vue file
  fs.appendFileSync(
    `../src/pages/${folderName}/index.vue`,
    `<p>
    <router-link style="text-transform: capitalize;" to="/${folderName}/${page.question
      .replaceAll(" ", "_")
      .toUpperCase()}">${page.question}</router-link>
    </p>`
  );
});

// Cerramos el archivo index.vue
fs.appendFileSync(
  `../src/pages/${folderName}/index.vue`,
  `</article>  
</div>
    </template>`
);

function deleteFolder(carpetaAEliminar){
fs.readdir(carpetaAEliminar, (err, files) => {
  if (err) {
    console.error(`Error al leer la carpeta: ${err}`);
    return;
  }

  // Iterar sobre los archivos y eliminar cada uno de ellos
  files.forEach((file) => {
    const filePath = path.join(carpetaAEliminar, file);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error al eliminar ${filePath}: ${err}`);
      } else {
        console.log(`Se eliminó ${filePath}`);
      }
    });
  });
});

}