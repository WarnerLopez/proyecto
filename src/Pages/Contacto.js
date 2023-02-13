import React from "react";
import Formulario1 from "../Components/Formulario1";

export default function Contacto() {
  return (
    <>
      <div className="container">
        <h1>Contactenos</h1>
        <hr/>
        <div className="row">
          <div className="col-sm letras">
            <h3>Idiomas</h3>
            <div class="form-check mg-t-10">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Ingles laboral
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Ingles Niños
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Portugues integral
              </label>
            </div>
            <hr />
            <h3>Tecnológicos</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Master Front End Web Developer
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Cisco
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Bootcamp Cisco CCNA
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Linux Administrator
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Amazon Web Services Cloud Practitioner
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Amazon Web Services Architect
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Microsoft SQL
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Ciberseguridad
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Programación Python
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Microsoft Azure
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Marketing Digital
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Virtualización VMWare
              </label>
            </div>
            <hr />
            <h3>Gerenciales</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Gerencia de Proyectos
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Microsoft Excel Básico | Intermedio | Avanzado
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Lean Six Sigma Yellow Belt
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Scrum Master Professional
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                ITIL v4
              </label>
              <hr />
            </div>
          </div>

          <div className="col-sm">
            <form className="letras">
              
              <div class="form-group row">
                <label  class="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    
                    placeholder="Nombre"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                  Apellidos
                </label>
                <div class="col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                   
                    placeholder="apellido"
                  />
                </div>
              </div>
              
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Correo
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Correo"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                  Telefono
                </label>
                <div class="col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                   
                    placeholder="Telefono"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                  Pais
                </label>
                <div class="col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                   
                    placeholder="Pais"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
