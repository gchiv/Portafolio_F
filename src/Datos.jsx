import './Datos.css'

function Datos() {
    return (
        <section className="datos-container">
            <div className="about-card">
                <div className="title-section">
                    <h2>Acerca de Mí</h2>
                </div>
                <div className="info-section">
                    <p>
                        Hola, me llamo <strong>Gabriel Chi Vidal</strong>. Soy estudiante de Ingeniería en Software en la 
                        Universidad Autónoma de Campeche. Me considero un apasionado por la tecnología, 
                        especialmente en el desarrollo web y móvil. Soy principiante pero me esfuerzo por 
                        aprender algo nuevo cada día en este extenso mundo de la programación.
                    </p>
                </div>
                
                <div className="separator"></div>

                <div className="contacto-section">
                    <h3>Contacto</h3>
                    <div className="info-contacto">
                        <p>📧 gabrielchi.contacto@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Datos