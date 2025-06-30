import React from 'react';
import projectsData from '../../data/projects.json'; // pas pad aan indien nodig
import Card from '../Card/Card';
import './Cards.css';

export const Cards = ({ limit = null, filterYear = null }) => {
  // projects uit import
  let projects = projectsData.projects;

  // filter op jaar indien meegegeven
  if (filterYear) {
    projects = projects.filter(project => project.year === filterYear);
  }

  // limiet op aantal cards indien meegegeven
  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <div className="Cards">
      {projects.length === 0 && <p>Geen projecten gevonden.</p>}
      {projects.map(data => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};




// import React from 'react';
// import Card from '../Card/Card';
// import "./Cards.css";

// import data from '../../data/projects.json';

// export const Cards = () => {
//   const projects = data.projects;

//   return (
//     <div className="Cards">
//       {projects.map((project) => (
//         <Card key={project.id} data={project} />
//       ))}
//     </div>
//   );
// };

// import React from 'react'

// import  useFetch from '../../hooks/useFetch';
// import Card  from '../Card/Card'
// export const Cards = () => {

//   const [arrayList, projectError, projectLoading] = useFetch(`https://raw.githubusercontent.com/Niki284/NewPortfolio/main/docs/data.json`)
//   return (
//     <div>
//        {projectLoading && <p>Loading...</p>}
//       {projectError && <p>Something went wrong...</p>}
//       {arrayList && (
//         <>
//         <div className='Cards'>
//            {arrayList.projects.map((data)=> (<Card data={data}/>))}
//         </div>
//         </>
//       )}
//    </div>
//   )
// }
