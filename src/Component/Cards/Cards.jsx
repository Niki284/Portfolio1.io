import React from 'react'

import  useFetch from '../../hooks/useFetch';
import Card  from '../Card/Card'
export const Cards = () => {

  const [arrayList, projectError, projectLoading] = useFetch(`https://raw.githubusercontent.com/Niki284/NewPortfolio/main/docs/data.json`)
  return (
    <div>
       {projectLoading && <p>Loading...</p>}
      {projectError && <p>Something went wrong...</p>}
      {arrayList && (
        <>
        <div className='Cards'>
           {arrayList.projects.map((data)=> (<Card data={data}/>))}
        </div>
        </>
      )}
   </div>
  )
}
