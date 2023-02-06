import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'


const Formulario1 = () => {
  const { register, formState: { errors }, handleSubmit } =useForm();  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [Entradas, setentradas] = useState([])

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos'  );
      setentradas([
        ...Entradas,response.data
      ])
      console.log(response.data)
    } catch (error) {
      setMessage('Error al agregar persona');
    }
  };

  const handleAddPerson = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { name, age });
      setentradas([...Entradas, { id: response.data.id, name, age }]);
      setMessage(`Persona agregada con éxito con ID: ${response.data.id}`);
      setName('');
      setAge('');
      console.log(response.data)
    } catch (error) {
      setMessage('Error al agregar persona');
    }
  };

  return (
    <>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        required
      />
      <button type="submit">Agregar persona</button>
      <p>{message}</p>
    </form>
   


    
    </>
  );
};

export default Formulario1;