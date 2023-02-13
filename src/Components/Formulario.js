import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [Entradas, setentradas] = useState([]);

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/todos",
    })
      .then((response) => {
        setentradas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setentradas]);

  const onSubmit = (data, e) => {
    console.log(data);
    alert("funciona");
    setentradas([...Entradas, data]);
    alert(JSON.stringify(Entradas));
    e.target.reset();
  };

  return (
    <>
      <div className="container">
        <h2>Formulario </h2>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                        name="nombre"
                        className="form-control"
                        placeholder="Ingresa tu nombre "   
                        //Validacion --register nombre
                        {...register("nombre",{
                            required:{value:true, message:"este campo es requerido"},
                            minLength:{value:2, message:"el nombre tiene que ser mas largo"}

                        })}
                        
                        />

                        {
                            errors.nombre &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.nombre.message}
                            </div>
                        }
                         <input 
                        name="apellido"
                        className="form-control"
                        placeholder="Ingresa tu apellido "   
                        //Validacion --register nombre
                        {...register("apellido",{
                            required:{value:true, message:"este campo es requerido"},
                            minLength:{value:2, message:"el apellido tiene que ser mas largo"}

                        })}
                        
                        />
                        
                        {
                            errors.apellido &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.apellido.message}
                            </div>
                        }


                        <button type="submit" className="btn btn-primary" > Enviar </button>
                </form> */}

        <ul>
          {Entradas.map((item) => (
            <li>
              {item.nombre}
              {item.apellido}
            </li>
          ))}
        </ul>

        <form
          class="needs-validation"
          novalidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                name="nombre"
                className="form-control"
                placeholder="Ingresa tu nombre "
                //Validacion --register nombre
                {...register("nombre", {
                  required: { value: true, message: "este campo es requerido" },
                  minLength: {
                    value: 2,
                    message: "el nombre tiene que ser mas largo",
                  },
                })}
              />

              {errors.nombre && (
                <div className="alert alert-danger mt-1 p-1">
                  {errors.nombre.message}
                </div>
              )}
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                name="apellido"
                className="form-control"
                placeholder="Ingresa tu apellido "
                //Validacion --register nombre
                {...register("apellido", {
                  required: { value: true, message: "este campo es requerido" },
                  minLength: {
                    value: 2,
                    message: "el apellido tiene que ser mas largo",
                  },
                })}
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustomUsername">Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                placeholder="City"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom04">State</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom04"
                placeholder="State"
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">Zip</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                placeholder="Zip"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
