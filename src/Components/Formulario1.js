import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'


const AddPersonForm = () => {

  const { register, formState: { errors }, handleSubmit }= useForm();

 
  const [people, setPeople] = useState([]);
  const [Entradas, setentradas] = useState([])
  const [showData, setShowData] = useState(false);

  const agregarPersona = async (persona,e)=>{
    console.log(persona)
    const response = await axios.post('https://jsonplaceholder.typicode.com/users',{ persona });
    console.log(response)
    alert("funciona")
    setentradas([
      ...Entradas,response.data.persona
    ])
    alert(JSON.stringify(Entradas))
    e.target.reset()

  }
  const traerPerona = async ()=>{
   
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    alert("funciona")
    setPeople(response.data)
    setShowData(true)

  }
  return (
    <>
    <div className='container formulario'>
   

                <form class="needs-validation" novalidate onSubmit={handleSubmit(agregarPersona)}>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom01">First name</label>
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
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom02">Last name</label>
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
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustomUsername">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input 
                        name="correo"
                        className="form-control"
                        placeholder="Ingresa tu apellido "   
                        //Validacion --register nombre
                        {...register("correo",{
                            required:{value:true, message:"este campo es requerido"},
                            minLength:{value:2, message:"el correo tiene que ser mas largo"}

                        })}
                        />
                          {
                            errors.correo &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.correo.message}
                            </div>
                        }
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="validationCustom03">City</label>
                      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationCustom04">State</label>
                      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationCustom05">Zip</label>
                      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required/>
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                  </div>
                  
                  <button class="btn btn-primary" type="submit">Submit form</button>
                  
                  {
                            errors.apellido &&
                            <div className="alert alert-danger mt-1 p-1">
                                {errors.apellido.message}
                            </div>
                        }
                </form>

                
                <div>
                <button className="btn btn-primary btnup" onClick={traerPerona}>
                  Mostrar datos
                </button>
                {showData && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Entradas.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.nombre}</td>
                          <td>{item.apellido}</td>
                          <td>{item.correo}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
               
                
                </div>

                
    </>
  );
};

export default AddPersonForm;
