<template>
        <title>Que tan sesgado es ChatGPT</title>
        <meta name="ChatGPT puede ser sesgado, ya que está entrenado en un conjunto de datos que refleja los sesgos de l" />
        <div class="container">
          <article>
              <header>
                <h1 style="text-transform: capitalize;">Que tan sesgado es ChatGPT</h1>
              </header>
              <p>ChatGPT puede ser sesgado, ya que está entrenado en un conjunto de datos que refleja los sesgos de la sociedad. Por ejemplo, ChatGPT puede ser más probable que genere texto que sea sexista o racista.</p>
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
          title: 'Que tan sesgado es ChatGPT',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'ChatGPT puede ser sesgado, ya que está entrenado en un conjunto de datos que refleja los sesgos de la',
            },
          ],
        }
      },
    }
    </script>    
    