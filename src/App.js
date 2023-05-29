import  foto from './images/foto.png';
import  hojavida1 from './images/hojavida1.png';
import  hojavida2 from './images/hojavida2.png';
import  hojavida3 from './images/hojavida3.png';
import  hojavida4 from './images/hojavida4.png';
import  hojavida5 from './images/hojavida5.png';
import  hojavida6 from './images/hojavida6.png';
import  hojavida7 from './images/hojavida7.png';
import  hojavida8 from './images/hojavida8.png';
import  hojavida9 from './images/hojavida9.png';
import  hojavida10 from './images/hojavida10.png';
import  maquinaescribir from './images/maquinaescribir.jpg';
import  maquinaescribir2 from './images/maquinaescribir2.jpg';
import  maquinaescribir3 from './images/maquinaescribir3.jpg';


function App() {
  return (
      <div className="container">
        <div className="row border-primary">
          <div className="col-lg-12 text-center ">
            <h1>Hoja de Vida</h1>
            <p>Solicitud de empleo</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="form-group col-lg-9">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value="Diana Carolina Avedaño"
                   disabled />
          </div>
          <div className="col-lg-1">

          </div>
          <div className="col-lg-2">
            <img src={foto} alt="hola" width="82" height="108"/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="direccion">Direccion:</label>
            <input type="text" className="form-control" id="direccion" name="direccion" value="Carrera 24F 18-26 Sur"
                   disabled/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="ciudad">Ciudad:</label>
            <input type="text" className="form-control" id="ciudad" name="ciudad" value="Bogota D.C - Colombia"
                   disabled/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value="Arodiana.carolina70@gmail.com"
                   disabled/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="telefono">Telefono:</label>
            <input type="tel" className="form-control" id="telefono" name="telefono" value="3138912539" disabled/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="estadoci">Estado Civil:</label>
            <input type="text" className="form-control" id="estadoci" name="estadoci" value="Comprometida" disabled/>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <h1 className="text-center">Perfil Ocupacional</h1>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <p>Técnica laboral en Auxiliar Administrativo, I semestre actualmente con conocimientos en ortografía,
              redacción de textos comerciales y digitación de textos.</p>
            <p>Con habilidades para trabajar en equipo, toma decisiones, liderazgo Y creatividad</p>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <h1 className="text-center">Experiencia</h1>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <table className="table">
              <thead>
              <tr>
                <th>Empresa y/o Puesto</th>
                <th>Tiempo</th>
                <th>Descripcion</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Suelas Fucsia Administración y ventas</td>
                <td>10 de septiembre 2020 — Actual</td>
                <td>Atención al cliente, recepción de llamadas,<br/>
                  manejo de documentos, facturación, manejo de<br/>
                  correspondencia: manejo Sistema CGI: Excel, Word,<br/>
                  caja menor, recuperación de cartera.
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <h1 className="text-center">Formacion Academica</h1>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <table className="table">
              <thead>
              <tr>
                <th>Profesion</th>
                <th>Tiempo</th>
                <th>Institucion</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Técnico laboral en Auxiliar Administrativo y Secretariado Ejecutivo</td>
                <td>1 semestre actual-Actual</td>
                <td>Instituto colombiano Aprendizaje INCAP</td>
              </tr>
              <tr>
                <td>Profesional Contaduría Publica</td>
                <td>2016-2021</td>
                <td>Universidad Minuto de Dios</td>
              </tr>
              <tr>
                <td>Bachiller Académico</td>
                <td>Bogotá D. C 2015</td>
                <td>IED Bernardo Jaramillo</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-12">
            <h1 className="text-center">Referencias Profesionales</h1>
          </div>
          <div className=" col-lg-12">
            <hr/>
          </div>
          <div className=" col-lg-4">
            <ul>
              <li>Cristian Avendaño</li>
              <li>Diseñador</li>
              <li>Suelas Fucsia</li>
              <li>3145069606</li>
            </ul>
          </div>
          <div className=" col-lg-4">
            <ul>
              <li>Diego Alejandro Martínez</li>
              <li>Ingeniero</li>
              <li>Tecnisuelas</li>
              <li>3208613943</li>
            </ul>
          </div>
          <div className=" col-lg-4">
            <ul>
              <li>Diana Carolina Avendaño</li>
              <li>Bogotá D C.</li>
            </ul>
          </div>
          <div className="col-lg-12">
            <hr/>
          </div>
          <div className="col-lg-6">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#dialogo1">Abrir Hoja de
              vida en fisico
            </button>
          </div>
          <div className="col-lg-6">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#dialogo2">Abrir Historia
              Maquina de escribir
            </button>
          </div>
        </div>
        {/*modal de solicitud en imagen*/}
        <div className="modal fade" id="dialogo1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              {/*cabecera del diálogo*/}
              <div className="modal-header">
                <h4 className="modal-title">Hoja en fisico</h4>
                <button type="button" className="close" data-dismiss="modal">X</button>
              </div>

              <div className="modal-body ">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-8">
                      <img src={hojavida1} alt="hojavida1"/>
                      <img src={hojavida2} alt="hojavida2"/>
                      <img src={hojavida3} alt="hojavida3"/>
                      <img src={hojavida4} alt="hojavida4"/>
                      <img src={hojavida5} alt="hojavida5"/>
                      <img src={hojavida6} alt="hojavida6"/>
                      <img src={hojavida7} alt="hojavida7"/>
                      <img src={hojavida8} alt="hojavida8"/>
                      <img src={hojavida9} alt="hojavida9"/>
                      <img src={hojavida10} alt="hojavida10"/>
                    </div>
                    <div className="col-lg-2">

                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>

            </div>
          </div>
        </div>

        {/*modal para maquina de escribir*/}
        <div className="modal fade" id="dialogo2">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Historia de la maquina de escribir</h4>
                <button type="button" className="close" data-dismiss="modal">X</button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <p>
                      La máquina de escribir fue inventada en 1867 por Christopher Latham Sholes,
                      quien trabajaba como editor de un periódico en Milwaukee. La primera máquina de escribir
                      se llamó "Type-Writer" y fue fabricada por la compañía Remington en 1873.
                    </p>
                    <p>
                      La máquina de escribir fue una herramienta revolucionaria en su época, ya que
                      permitió a las personas escribir documentos de manera más rápida y eficiente que con
                      la escritura a mano. Esto tuvo un gran impacto en la industria de la escritura y la
                      comunicación, y se convirtió en una herramienta esencial para oficinistas, periodistas y
                      escritores.
                    </p>
                    <p>
                      A lo largo de los años, se realizaron mejoras en la máquina de escribir, como la
                      introducción de la tecla de retorno y la eliminación de la necesidad de cambiar el papel
                      manualmente. Sin embargo, con la llegada de la era digital en la década de 1980, la
                      máquina de escribir comenzó a perder terreno frente a los procesadores de texto y las
                      computadoras personales.
                    </p>
                    <p>
                      A pesar de esto, la máquina de escribir sigue siendo valorada por muchos como un
                      objeto de nostalgia y un símbolo del pasado.
                    </p>
                    <img src={maquinaescribir} alt="maquinaescribir"/>
                    <br/>
                    <small>FIGURA 1: MAQUINA DE ESCRIBIR</small>
                    <br/>
                    <a href="https://es.wikipedia.org/wiki/M%C3%A1quina_de_escribir#:~:text=En%201855%20el%20italiano%20Giuseppe,escrib%C3%ADa%20a%20medida%20que%20tecleaba.">https://es.wikipedia.org/wiki/M%C3%A1quina_de_escribir#:~:text<br/>=En%201855%20el%20italiano%20Giuseppe,escrib%C3%ADa%20a%20medida%20que%20tecleaba.</a>
                    <br/>
                    <h3>IMPORTANCIA DE LA DIGITANCION EN EL MUNDO LABORAL</h3>
                    <p>
                      La digitación es una habilidad esencial en el mundo laboral moderno, ya que la mayoría de
                      los trabajos requieren el uso de computadoras y dispositivos electrónicos para la creación y
                      edición de documentos. Algunas de las razones por las que la digitación es importante en el mundo
                      laboral incluyen:
                    </p>
                    <ol>
                      <li>Eficiencia: La digitación permite a los trabajadores escribir y editar documentos de manera
                        más rápida y eficiente
                        que la escritura a mano. Esto se traduce en una mayor productividad y ahorro de tiempo para la
                        empresa.
                      </li>
                      <li>Precisión: La digitación también permite una mayor precisión en la escritura y edición de
                        documentos. Los errores
                        pueden ser corregidos fácilmente y los documentos pueden ser revisados y editados de manera más
                        rápida y precisa.
                      </li>
                      <li>Comunicación: La mayoría de las comunicaciones en el mundo laboral se realizan a través de
                        correo electrónico, chat o
                        mensajería instantánea. La habilidad de digitación es esencial para la comunicación efectiva y
                        rápida.
                      </li>
                      <li>Competitividad: En un mercado laboral cada vez más competitivo, la habilidad de digitación
                        puede ser una ventaja competitiva
                        para los trabajadores. Los empleados buscan trabajadores que sean eficientes y precisos en la
                        creación y edición de documentos.
                      </li>
                      <li>Adaptabilidad: La habilidad de digitación es esencial para adaptarse a las nuevas tecnologías
                        y herramientas digitales que se
                        utilizan en el mundo laboral. Los trabajadores que no tienen habilidades de digitación pueden
                        tener dificultades para adaptarse
                        a los cambios en el lugar de trabajo.
                      </li>
                    </ol>
                    <br/>
                    <img src={maquinaescribir2} alt="figura2"/>
                    <br/>
                    <small>FIGURA 2: DIGITACION EN EL MUNDO LABORAL</small>
                    <br/>
                    <a href="https://epicartsagency.com/importancia-de-la-digitalizacion-en-las-empresas/#:~:text=La%20importancia%20de%20la%20digitalizaci%C3%B3n,consecuencia%20de%20la%20transformaci%C3%B3n%20digital.">https://epicartsagency.com/importancia-de-la-digitalizacion-en-las-empresas/#:~:<br/>
                      text=La%20importancia%20de%20la%20digitalizaci%C3%B3n,<br/>consecuencia%20de%20la%20transformaci%C3%B3n%20digital.</a>
                    <br/>
                    <h3>IMPORTANCIA DEL AUXILIAR ADMINISTRATIVO EN EL MUNDO LABORAL</h3>
                    <p>
                      El auxiliar administrativo es un rol importante en el mundo laboral, ya que ayuda a las empresas y
                      organizaciones
                      a mantenerse organizadas y eficientes. Algunas de
                      las razones por las que el auxiliar administrativo es importante en el mundo laboral incluyen:
                    </p>
                    <ol>
                      <li>Gestión de la información: El auxiliar administrativo es responsable de mantener y organizar
                        la información de la empresa.
                        Esto incluye la gestión de archivos, la actualización de bases de datos y la organización de
                        documentos.
                      </li>
                      <li>Comunicación: El auxiliar administrativo es a menudo el primer punto de contacto para los
                        clientes y proveedores. Es importante que el auxiliar administrativo
                        tenga habilidades de comunicación efectivas para poder proporcionar información precisa y
                        responder preguntas de manera clara y concisa.
                      </li>
                      <li>Apoyo a los empleados: El auxiliar administrativo a menudo proporciona apoyo a otros empleados
                        de la empresa. Esto puede incluir la
                        programación de reuniones, la gestión de horarios y la organización de viajes de negocios.
                      </li>
                      <li>Mantener la eficiencia: El auxiliar administrativo trabaja para mantener la eficiencia en la
                        empresa. Esto puede incluir la identificación
                        de áreas donde se pueden hacer mejoras y la implementación de procesos más eficientes.
                      </li>
                      <li>Coordinación de proyectos: El auxiliar administrativo a menudo trabaja en equipo con otros
                        empleados para coordinar proyectos. Es importante que el auxiliar administrativo tenga
                        habilidades
                        de liderazgo y de trabajo en equipo para poder coordinar eficientemente a los miembros del
                        equipo y asegurar el éxito del proyecto.
                      </li>
                    </ol>
                    <br/>
                    <img src={maquinaescribir3} alt="figura3"/>
                    <br/>
                    <small>FIGURA 3: AUXILIAR ADMINISTRATIVO</small>
                    <br/>
                    <a href="https://definicion.de/auxiliar-administrativo/">https://definicion.de/auxiliar-administrativo/</a>
                    <br/>
                    <h3>ENFERMEDADES ADQUIRIDAS POR LA MALA DIGITACION</h3>
                    <p>La mala digitación y postura pueden provocar diversas enfermedades y lesiones, algunas de las
                      cuales son:</p>
                    <ol>
                      <li>Síndrome del túnel carpiano: Esta enfermedad es causada por la presión repetitiva en el nervio
                        mediano en la muñeca, lo que puede provocar dolor, entumecimiento y debilidad en la mano y la
                        muñeca.
                        La mala digitación, especialmente si se hace durante largos períodos de tiempo, puede aumentar
                        el riesgo de síndrome del túnel carpiano.
                      </li>
                      <li>Dolor de espalda: La mala postura al sentarse durante largos períodos de tiempo puede ejercer
                        presión sobre la columna vertebral y provocar dolor de espalda.
                        La mala postura también puede provocar tensión en los músculos de la espalda y el cuello, lo que
                        puede provocar dolor y rigidez.
                      </li>
                      <li>Tendinitis: La tendinitis es una inflamación de los tendones, que puede ser causada por la
                        repetición de movimientos durante largos períodos de tiempo. La mala digitación,
                        especialmente si se realiza con una postura incorrecta, puede aumentar el riesgo de tendinitis
                        en las manos, muñecas y codos.
                      </li>
                    </ol>
                    <br/>
                    <h3>IMPORTANCIA Y EJEMPLOS DE PAUSAS ACTIVAS</h3>
                    <p>
                      Las pausas activas son importantes en el lugar de trabajo porque ayudan a reducir el estrés
                      y la fatiga, mejoran la circulación sanguínea y reducen el riesgo de lesiones relacionadas
                      con el trabajo. Algunos ejemplos de pausas activas incluyen:
                    </p>
                    <ol>
                      <li>Estiramientos: Los estiramientos son una forma efectiva de aliviar la tensión muscular y
                        mejorar la flexibilidad. Los estiramientos pueden ser realizados en cualquier lugar, incluso en
                        el lugar de trabajo.
                      </li>
                      <li>Ejercicios de respiración: Los ejercicios de respiración pueden ayudar a reducir el estrés y
                        la ansiedad, y mejorar la
                        concentración. Estos ejercicios pueden ser realizados en cualquier momento y lugar.
                      </li>
                      <li>Caminar: Tomar un breve descanso para caminar puede ayudar a mejorar la circulación sanguínea
                        y
                        reducir la fatiga. Caminar también puede ayudar a reducir el estrés y mejorar el estado de
                        ánimo.
                      </li>
                      <li>Ejercicios de relajación: Los ejercicios de relajación, como la meditación y el yoga, pueden
                        ayudar
                        a reducir el estrés y la ansiedad, mejorar la concentración y aumentar la energía.
                      </li>
                      <li>Masajes: Los masajes pueden ayudar a aliviar la tensión muscular y reducir el estrés.
                        Los masajes pueden ser realizados por un profesional o por uno mismo.
                      </li>
                    </ol>
                    <p>En resumen, las pausas activas son importantes en el lugar de trabajo para reducir el estrés, la
                      fatiga y el riesgo de lesiones relacionadas con el trabajo.
                      Los ejemplos de pausas activas incluyen estiramientos, ejercicios de respiración, caminar,
                      ejercicios de relajación y masajes.</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
