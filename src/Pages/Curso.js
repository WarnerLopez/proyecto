import React from "react";
import uno from "../assets/marketing.jfif";
import ingles from "../assets/ingles.webp";
import cisco from "../assets/cisco.jfif";
import java from "../assets/javascript.png";

export default function Curso() {
  const miCursoM = {
    nombre: 'marketing',
    tiempo: '4 meses',
    limite: 'limite 30 estudiantes'
  };
  const miCursoI = {
    nombre: 'Ingles',
    tiempo: '8 meses',
    limite: 'limite 20 estudiantes'
  };
  const miCursoC = {
    nombre: 'Ingles',
    tiempo: '6 meses',
    limite: 'limite 30 estudiantes'
  };
  const miCursoJ = {
    nombre: 'Web Developer',
    tiempo: '7 meses',
    limite: 'limite 30 estudiantes'
  };
     
       

  return (
    <>
    
     <div className="animate__animated animate__backInDown">
        <h1>Cursos</h1>
      </div>

      

      <div className="container">
        <div className="container1">
          
          <div className="card-1 animate__animated animate__backInLef">
                <ul>
                    <li>CLases en vivo</li>
                    <li>Opciones de pago</li>

                </ul>
          </div>
          <div className="card-2 animate__animated animate__backInLef">
          <ul>
                    <li>Trabajos desde casa</li>
                    <li>Horario flexibles</li>

                </ul>
          </div>
          <div className="card-3 animate__animated animate__backInRight">
          <ul>
                    <li>CLases en vivo</li>
                    <li>Opciones de pago</li>

                </ul>
          </div>
          <div className="card-4 animate__animated animate__backInRight">
          <ul>
                    <li>CLases en vivo</li>
                    <li>Opciones de pago</li>

                </ul>
          </div>
        </div>
      </div>

     
      <div className="container  ">
        <div class="card-group animate__animated animate__backInLeft ">
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={uno}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoM.nombre}</h5>
              <p class="card-text">
                Duracion {miCursoM.tiempo}
              </p>
              <p class="card-text">
              {miCursoM.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>
            </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={ingles}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoI.nombre}</h5>
              <p class="card-text">
              {miCursoI.tiempo}
              </p>
              <p class="card-text">
                {miCursoI.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>

            </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={cisco}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoC.nombre}</h5>
              <p class="card-text">
              {miCursoC.tiempo}
              </p>
              <p class="card-text">
                {miCursoC.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>
           </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={java}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoJ.nombre}</h5>
              <p class="card-text">
              {miCursoJ.tiempo}
              </p>
              <p class="card-text">
                {miCursoJ.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>

            </div>
          </div>
        </div>
        <div class="card-group animate__animated animate__backInRight ">
        <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={uno}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoM.nombre}</h5>
              <p class="card-text">
                Duracion {miCursoM.tiempo}
              </p>
              <p class="card-text">
              {miCursoM.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>
            </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={ingles}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoI.nombre}</h5>
              <p class="card-text">
              {miCursoI.tiempo}
              </p>
              <p class="card-text">
                {miCursoI.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>

            </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={cisco}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoC.nombre}</h5>
              <p class="card-text">
              {miCursoC.tiempo}
              </p>
              <p class="card-text">
                {miCursoC.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>
           </div>
          </div>
          <div class="card bordes">
            <img
              className="img-cursos card-img-top imagenCurso"
              src={java}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{miCursoJ.nombre}</h5>
              <p class="card-text">
              {miCursoJ.tiempo}
              </p>
              <p class="card-text">
                {miCursoJ.limite}
              </p>
              <button type="button" class="btn btn-outline-secondary">Mas Informacion</button>

            </div>
          </div>
          

        </div>
      </div>
    </>
  );
}
