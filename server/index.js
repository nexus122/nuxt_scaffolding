// leer el archivo page_data.json
const pageData = require("../page_data.json");
const fs = require("fs");

// iterar sobre el array de objetos y crear un archivo dentro de la carpeta pages por cada objeto
let folderName = pageData[0]["name"];
let questions = pageData[0]["questions"];

// añadir la estructura a index.vue
fs.writeFileSync(
  `../src/pages/${folderName}/index.vue`,
  `<template>
        <div>
            <h1>${folderName}</h1>
        </div>
    <div>`
);

questions.forEach((page) => {
  fs.writeFileSync(
    `../src/pages/${folderName}/${page.question.replaceAll(" ", "_")}.vue`,
    `<template>
        <div>
            <h1>${page.question}</h1>
            <p>${page.text}</p>
        </div>        
        <router-link to="/${folderName}">Back</router-link>
    </template>`
  );
  // write link in the index.vue file
  fs.appendFileSync(
    `../src/pages/${folderName}/index.vue`,
    `<p>
    <router-link to="/${folderName}/${page.question.replaceAll(" ", "_")}">${
      page.question
    }</router-link>
    </p>`
  );
});

fs.appendFileSync(
  `../src/pages/${folderName}/index.vue`,
  `</div>
    </template>`
);
