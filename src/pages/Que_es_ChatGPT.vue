<template>
        <title>Que es ChatGPT</title>
        <meta name="ChatGPT es un chatbot de inteligencia artificial desarrollado por OpenAI. Es capaz de generar texto," />
        <div class="container">
          <article>
              <header>
                <h1 style="text-transform: capitalize;">Que es ChatGPT</h1>
              </header>
              <p>ChatGPT es un chatbot de inteligencia artificial desarrollado por OpenAI. Es capaz de generar texto, traducir idiomas, escribir diferentes tipos de contenido creativo y responder a tus preguntas de forma informativa.</p>
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
          title: 'Que es ChatGPT',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'ChatGPT es un chatbot de inteligencia artificial desarrollado por OpenAI. Es capaz de generar texto, ',
            },
          ],
        }
      },
    }
    </script>    
    