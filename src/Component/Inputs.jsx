import React from 'react';

export default function Inputs({ data }) {
  return (
    <div className="input-group">
      <label htmlFor={data[0]}>{data[1]}</label>
      <input type="text" name={data[0]} placeholder={data[1]} />
    </div>
  );
}


// import React from 'react'


// export default function inputs({data}) {
//   console.log(data)
//   return (
//     <div className='inputs'>
//         <label htmlFor="Firstname">{data[0]}</label>
//         <input type="text" placeholder={data[1]} />
//     </div>
//   )
// }
