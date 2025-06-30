import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/projects.json";
import CardDetail from "../Component/Card/CardDetail";
import { Footer } from "../Component/Footer/Footer";
import Card from "../Component/Card/Card"; // Zorg dat je deze hebt geïmporteerd

const Detailproject = () => {
  const { id } = useParams();
  const project = data.projects.find((item) => String(item.id) === id);

  if (!project) {
    return (
      <main className="main">
        <p className="error-message">❌ Project niet gevonden.</p>
        <Footer />
      </main>
    );
  }

  // Vind maximaal 3 andere projecten met hetzelfde jaar, zonder het huidige project
  const relatedProjects = data.projects
    .filter((item) => item.year === project.year && String(item.id) !== id)
    .slice(0, 3);

  return (
    <main className="main">
      <CardDetail data={project} />

      {relatedProjects.length > 0 && (
        <section className="related-projects">
          <h2>Andere projecten uit {project.year}</h2>
          <div className="Cards">
            {relatedProjects.map((proj) => (
              <Card key={proj.id} data={proj} hiddenButton={false} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export { Detailproject };




// import React from "react";
// import { Footer } from "../Component/Footer/Footer";
// import { Link, useParams } from "react-router-dom";
// // import Card from "../Component/Card/Card";
// import CardDetail from "../Component/Card/CardDetail";

// import data from "../data/projects.json";

// const Detailproject = () => {
//   const { id } = useParams();
//   const project = data.projects.find((e) => String(e.id) === id);

//   if (!project) {
//     return (
//       <div>
//         <Link className="btn__link back" to="/projecten">Terug</Link>
//         <p style={{ color: "red" }}>Project niet gevonden.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="btn-left">
//         <Link className="btn__link back" to="/projecten">
//           Terug
//         </Link>
//       </div>

//       <CardDetail hiddenButton data={project} />

//       <div className="projectDetail">
//         <h1>Bezoek mijn project</h1>
//         <ul className="projectDetail-list">
//           <li>
//             <a
//               className="projectDetail-li projectDetail-link"
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//           </li>
//           <li>
//             <a
//               className="projectDetail-li projectDetail-2 projectDetail-link"
//               href={project.website}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Website
//             </a>
//           </li>
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export { Detailproject };

// import React from "react";
// import { Footer } from "../Component/Footer/Footer";
// import { Link, useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import Card from "../Component/Card/Card";
// import profile from "../docs/data.json";

// const Detailproject = () => {
//   const { id } = useParams();
//   const [arrayList, projectError, projectLoading] = useFetch(
//     `https://raw.githubusercontent.com/Niki284/NewPortfolio/main/docs/data.json`
//   );

//   function redirectLink(source) {
//     const profileLink = profile.projects.find((project) => project.id === Number(id));
//     if (source === "github") window.open(profileLink.github, "_blank");
//     if (source === "website") window.open(profileLink.website, "_blank");
//   }

//   return (
//     <div>
//       <div className="btn-left">
//         <Link className="btn__link back" to={"/projecten"}>
//           Back
//         </Link>
//       </div>

//       {projectLoading && <p>Loading...</p>}
//       {projectError && <p>Something went wrong...</p>}
//       {arrayList && <Card hiddenButton data={arrayList.projects.find((e) => e.id == id)} />}

//       <div className="projectDetail">
//         <h1>Bezoek mijn project</h1>
//         <ul className="projectDetail-list">
//           <li
//             className="projectDetail-li projectDetail-link"
//             onClick={() => redirectLink("github")}
//           >
//             GitHub
//           </li>
//           <li
//             className="projectDetail-li projectDetail-2 projectDetail-link"
//             onClick={() => redirectLink("website")}
//           >
//             Website
//           </li>
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export { Detailproject };
