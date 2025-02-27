import { useState } from 'react'


function App() {

  const [name, setName] = useState('');
  const [id, setId] = useState('');


  function naming(e) {
    const value = e.target.value;
    setName(value);
    if (value.toLowerCase() === 'khusboo') {
      setId(12345);

    } else if (value.toLowerCase() === 'john') {
      setId(67890);
    }
    else if (value.toLowerCase() === 'Rankingeek') {
      setId(54321);
    }
    else {
      setId(null);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen   bg-gradient-to-br from-blue-500 to blue-300'>
      <div className='bg-white bg-opacity-10 backdrop-blur-lg  shadow-xl  rounded-lg p-6 text-center  max-w-md w-full'>
        <h1 className='text-2xl   mb-4'>Whats your name :)</h1>
        <input type='text' placeholder='Your Good name' onChange={naming}
          className='w-full px-4 py-2 text-lg  rounded-lg  border border-gray-300 bg-opacity-50 bg-white '
         />
        {<h2 className='text-xl font-semibold  mt-4'>Your ID number is : <span className='text-blue-800'>{id}</span>   </h2>}

      </div>
    </div>
  )
}

export default App
