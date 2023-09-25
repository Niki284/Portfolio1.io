import React from "react";
import { Footer } from "../Component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../Component/Card/Card";
import profile from "../docs/data.json";

const Detailproject = () => {
  const { id } = useParams();
  const [arrayList, projectError, projectLoading] = useFetch(
    `https://raw.githubusercontent.com/Niki284/NewPortfolio/main/docs/data.json`
  );

  function redirectLink(source) {
    const profileLink = profile.projects.find((project) => project.id === Number(id));
    if (source === "github") window.open(profileLink.github, "_blank");
    if (source === "website") window.open(profileLink.website, "_blank");
  }

  return (
    <div>
      <div className="btn-left">
        <Link className="btn__link back" to={"/projecten"}>
          Back
        </Link>
      </div>

      {projectLoading && <p>Loading...</p>}
      {projectError && <p>Something went wrong...</p>}
      {arrayList && <Card hiddenButton data={arrayList.projects.find((e) => e.id == id)} />}

      <div className="projectDetail">
        <h1>Bezoek mijn project</h1>
        <ul className="projectDetail-list">
          <li
            className="projectDetail-li projectDetail-link"
            onClick={() => redirectLink("github")}
          >
            GitHub
          </li>
          <li
            className="projectDetail-li projectDetail-2 projectDetail-link"
            onClick={() => redirectLink("website")}
          >
            Website
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export { Detailproject };
