import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Portafolio de Trabajos</h1>
        <p className="subtitle">By Gabriel Chi</p>
        <div className="intro">
          <p>Este portafolio tiene el objetivo de facilitar la búsqueda y visualización de los trabajos que realicé en todas las materias de 5to Semestre.</p>
        </div>
      </header>

      <main className="projects-section">
        <h2>Mis Trabajos</h2>
        
        <div className="project-card">
          <h3>Escape de Beyoncé</h3>
          <p>En este trabajo seguimos instrucciones para ver un video y familiarizarnos con JavaScript. Se nos pidió agregar características propias como la velocidad del jugador, velocidad del enemigo y configuración del entorno. En mi caso, personalicé el fondo y las velocidades.</p>
          <a href="https://github.com/gchiv/EscapedeBeyonce.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
          <a href="https://gchiv.github.io/EscapedeBeyonce/" target="_blank" rel="noreferrer" className="btn-link">
            Ver Pages
          </a>
        </div>

        <div className="project-card">
          <h3>Formulario CRUD</h3>
          <p>Implementación de las 4 operaciones básicas (Create, Read, Update, Delete) en una tabla HTML conectada a una API de un Sistema Escolar. Permite leer registros, añadir nuevos, actualizar datos existentes y eliminar registros, sincronizando todo con la API.</p>
          <a href="https://github.com/gchiv/GestionPersonas.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
           <a href="https://gchiv.github.io/GestionPersonas/" target="_blank" rel="noreferrer" className="btn-link">
            Ver Pages
          </a>
        </div>

        <div className="project-card">
          <h3>Tic-Tac-Toe</h3>
          <p>Juego clásico creado siguiendo un tutorial de React, pero personalizado posteriormente, diseñé una interfaz estética y minimalista, cambié las fichas por imágenes de gatitos y agregué un Easter Egg: al ganar X, aparece una ventana con mi nombre y matrícula.</p>
          <a href="https://github.com/gchiv/Tic-Tac-Toe.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
          <a href="https://tictacgabo.vercel.app/?authuser=1" target="_blank" rel="noreferrer" className="btn-link">
            Ver Pages
          </a>
        </div>

        <div className="project-card">
          <h3>Codelabs de Flutter</h3>
          <p>Consiste en seguir los pasos de 2 tutoriales de Flutter titulado: "Tu Primera App FLutter" y "Acertijo de Palabras con FLutter", al cual al finalizar a cada uno le agregamos un Easter Egg y en clase ejecutar el programa en nuestros telefonos.</p>
          <a href="https://github.com/gchiv/CodelabsFlutter.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
        </div>

        <div className="project-card">
          <h3>Sistema Escolar</h3>
          <p>Este trabajo fue en equipos, creamos un tipo Workbench que funciona con las dependencias de JDBC para MariaDB, el cual deberia de incluir las vistas de  Persona, Materias, Inscripciones y Asistencias. Cada vista debe de tener sus contoles necesarios.</p>
          <a href="https://github.com/gchiv/SistemaEscolarCom.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
        </div>

        <div className="project-card">
          <h3>Mi Red Social</h3>
          <p>Creamos una maqueta de una Red Social usando HTML y CSS, la maqueta debe de contener elementos espesificados por el Profesor. Debe ser ser responsivo, es decir, que no importa el tamaño de la pantalla, la pagina se debe de ver bien</p>
          <a href="https://github.com/gchiv/Dogster.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
          <a href="https://gchiv.github.io/Dogster/" target="_blank" rel="noreferrer" className="btn-link">
            Ver Pages
          </a>
        </div>

        <div className="project-card">
          <h3>Cheat Sheat</h3>
          <p>Elabore un Cheat Sheet o acordeon, donde puse todos elementos de HTML que vimos en clase</p>
          <a href="https://github.com/gchiv/Cheat-Sheet.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
          <a href="https://gchiv.github.io/Cheat-Sheet/" target="_blank" rel="noreferrer" className="btn-link">
            Ver Pages
          </a>
        </div>

        <div className="project-card">
          <h3>Software con Concurrencia para Servidores Locales</h3>
          <p>Elabore un Chat Concurrente, donde hay un servidor y usuarios, implemente 5 metodos: start-connection, change-userName, send-msg, mensaje global y list.</p>
          <a href="https://github.com/gchiv/ServidorLocal.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
        </div>

        <div className="project-card">
          <h3>Software con Concurrencia usando exclusión mutua con Monitores y Semáforos</h3>
          <p>Elabore 2 proyectos que tengan Monitores y Semaforos, en este caso una Impresora con Monitor y otra Impresora con Semaforo.</p>
          <a href="https://github.com/gchiv/monitoresYsemaforos.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
        </div>

        <div className="project-card">
          <h3>Accessible-E-Commerce</h3>
          <p>Elabore en equipos una plataforma de comercios, en este caso de Hamburguesas KO, que esta optimizada para personas que no pueden ver, para que el VoiceOver funcione bien y sin problemas.</p>
          <a href="https://github.com/gchiv/Accessible-E-Commerce.git" target="_blank" rel="noreferrer" className="btn-link">
            Ver Repositorio
          </a>
        </div>

      </main>

      <footer className="footer">
        <p>© 2025 Gabriel Chi 74446 - Hecho con React</p>
      </footer>
    </div>
  )
}

export default App