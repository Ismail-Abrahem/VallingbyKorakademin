// src/app/priser/page.jsx
import CoursesClient from "./CoursesClient";
import "./Priser.css";

export const metadata = {
  title: "Priser – Vällingby Körakademin",
  description:
    "Se priser för körlektioner, kurser och paket hos Vällingby Körakademin. Vi erbjuder prisvärda körlektioner, riskutbildningar och körkortspaket.",
  alternates: {
    canonical: "https://www.vällingbykörakademin.se/priser",
  },
};

export default function Courses() {
  return (
    <div className="priser-container">
      <div className="priser-content">
        <CoursesClient />
      </div>
    </div>
  );
}