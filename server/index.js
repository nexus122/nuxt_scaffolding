// leer el archivo page_data.json
const pageData = require("../page_data.json");
const fs = require("fs");

/* --- Funcionalidades --- */
// ELiminador de acentos
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// iterar sobre el array de objetos y crear un archivo dentro de la carpeta pages por cada objeto
let folderName = pageData[0]["name"];
let questions = pageData[0]["questions"];
let metaDescription = pageData[0]["description"];

// Quitamos los acentos a los titulos
questions.map((element) => {
  element.question = removeAccents(element.question);
})

// Añadimos la estructura al index.vue de la carpeta /nombreProyecto
fs.writeFileSync(
  `../src/pages/index.vue`,
  `<template>
  <title>${folderName}</title>
  <meta name="${metaDescription}" />
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
    `../src/pages/${page.question.replaceAll(" ", "_")}.vue`,
    `<template>
        <title>${page.question}</title>
        <div class="container">
          <article>
              <header>
                <h1 style="text-transform: capitalize;">${page.question}</h1>
              </header>
              <p>${page.text}</p>
              <footer>
                <router-link to="/"><button>Back</button></router-link>
              </footer>
          </article>
        </div>
    </template>
    <script>
    export default {
      // Otras configuraciones de la página
    
      head() {
        return {
          title: '${page.question}',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: '${page.text.slice(0, 101)}',
            },
          ],
        }
      },
    }
    </script>    
    `
  );
  // write link in the index.vue file
  fs.appendFileSync(
    `../src/pages/index.vue`,
    `
    <p>
    <router-link style="text-transform: capitalize;" to="/${page.question
      .replaceAll(" ", "_")
      .toUpperCase()}">${page.question}</router-link>
    </p>`
  );
});

// Cerramos el archivo index.vue
fs.appendFileSync(
  `../src/pages/index.vue`,
  `</article>  
</div>
    </template>
    <script>
export default {
  // Otras configuraciones de la página

  head() {
    return {
      title: '${folderName}',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '${metaDescription}',
        },
      ],
    }
  },
}
</script>

    `
);