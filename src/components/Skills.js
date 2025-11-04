import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCode,
  faN,
  faLaptopCode,
  faGears,
  faC,
  faT,
  faR,
  faDatabase,
  faBolt,
  faChartPie,
  faS,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss,
  faJs,
  faReact,
  faNodeJs,
  faJava,
  faPython,
  faDocker,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div style={{ padding: "2rem 0" }}>
      <div>
        <h1>
          Technical Skills <FontAwesomeIcon icon={faLightbulb} />
        </h1>
      </div>
      <div className="skills" style={{ padding: "0 1rem" }}>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>
            <FontAwesomeIcon icon={faCode} /> Language
          </h2>
          <div
            className="language"
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faJava} size="2x"  />
              Java
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faC} size="2x"  />
              C/C++
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faJs} size="2x"  />
              Javascript
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faPython} size="2x"  />
              Python
            </btn>
          </div>
        </div>
        <div className="frontEnd" style={{ padding: "2rem 0" }}>
          <h2>
            <FontAwesomeIcon icon={faLaptopCode} /> FrontEnd
          </h2>

          <div
            className="language"
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faHtml5} size="2x"  />
              Html
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faCss} size="2x"  />
              CSS
            </btn>

            <btn className="btnSkills">
              <FontAwesomeIcon icon={faReact} size="2x"  />
              React
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faN} size="2x"  />
              Next.js
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faT} size="2x"  />
              TailWind CSS
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faR} size="2x"  />
              Redux Toolkit
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faS} size="2x"  />
              Sass
            </btn>
          </div>
        </div>
        <div className="BackEnd" style={{ padding: "2rem 0" }}>
          <h2>
            <FontAwesomeIcon icon={faGears} /> BackEnd
          </h2>

          <div
            className="language"
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faNodeJs} size="2x"  />
              Node.js
            </btn>

            <btn className="btnSkills">
              <FontAwesomeIcon icon={faJs} size="2x"  />
              Javascript
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faDatabase} size="2x"  />
              Mongodb
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faDocker} size="2x"  />
              Docker
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faGithub} size="2x"  />
              Github
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faBolt} size="2x"  />
              FastAPI
            </btn>
            <btn className="btnSkills">
              <FontAwesomeIcon icon={faChartPie} size="2x"  />
              GraphQL
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
}
