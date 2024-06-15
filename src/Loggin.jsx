import { useState } from 'react'



export default function Loggin() {
  const [form, setform] = useState({
    firstName:'',
    surname:'',
    username:'',
    password:'',
    confirmpassword:'',
  });

  console.log(form);

  const handleChange = e =>{
   setform({
    ...form,
    [e.target.name]: e.target.value
   })
  };

  return (
    <div>
        <h1 className='font-b text-red-500'>Loging</h1>
        <input type="text" name='firstName' placeholder='firstName' onChange={handleChange} />
        <input type="text" name='surname' placeholder='Surname' onChange={handleChange} />
        <input type="text" name='username' placeholder='Username' onChange={handleChange} />
        <input type="text" name='password' placeholder='Password' onChange={handleChange} />
        <input type="text" name='confirmpassword' placeholder='confirmpassword' onChange={handleChange} />
    </div>
  )
}
