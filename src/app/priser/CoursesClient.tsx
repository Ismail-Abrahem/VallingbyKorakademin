"use client";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface CourseItem {
  title: string;
  price: string;
  info: string;
}

interface CourseColumn {
  title: string;
  items: CourseItem[];
}

export default function CoursesClient() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleInfo = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const columns: CourseColumn[] = [
    {
      title: "Körlektioner",
      items: [
        { title: "1 Körlektion (50 min)", price: "580 kr", info: "Perfekt för att testa våra bilar och lärare." },
        { title: "5 Körlektioner", price: "2,800 kr", info: "Bra startpaket för nya elever." },
        { title: "10 Körlektioner", price: "5,700 kr", info: "Passar dig som vill bygga trygghet i trafiken." },
        { title: "15 Körlektioner", price: "8,500 kr", info: "För dig som vill ha extra tid att träna." },
        { title: "20 Körlektioner", price: "11,000 kr", info: "För en komplett och säker förberedelse." },
      ],
    },
    {
      title: "Paket",
      items: [
        { title: "5 Körlektioner + Risk1 + Risk2", price: "5,000 kr", info: "Ett smidigt paket för snabbare körkort." },
        { title: "10 Körlektioner + Risk 1 + Risk 2", price: "7,700 kr", info: "Populärt val för både teori och praktik." },
        { title: "15 Körlektioner + Risk 1 + Risk 2", price: "10,500 kr", info: "Rekommenderas för att bli helt förberedd." },
        { title: "20 Körlektioner + Risk 1 + Risk 2", price: "13,000 kr", info: "Vårt mest omfattande paket." },
      ],
    },
    {
      title: "Kurser",
      items: [
        { title: "Risk 1", price: "350 kr", info: "Obligatorisk teoretisk kurs om risker i trafiken." },
        { title: "Risk 2 / Halkbana", price: "1,750 kr", info: "Obligatorisk praktisk kurs på halkbana." },
        { title: "Introduktionsutbildning", price: "250 kr", info: "För handledare och elev som vill övningsköra privat." },
        { title: "Lån av bil vid körprov", price: "1,000 kr", info: "Använd vår bil vid uppkörning." },
      ],
    },
  ];

  return (
    <div className="priser-page">
    <div className="course-list">
      <h1>Våra Kurser och Priser</h1>
      <div className="columns-container">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="course-column">
            <h2 className="column-title">{column.title}</h2>
            <div className="column-items">
              {column.items.map((item, itemIndex) => {
                const id = `${colIndex}-${itemIndex}`;
                
                return (
                  <div key={id} className="course-card">
                    <div className="course-content">
                      <span className="course-title">{item.title}</span>
                      <div className="price-info">
                        <span className="course-price">{item.price}</span>
                        <FaInfoCircle 
                          className="info-icon" 
                          onClick={() => toggleInfo(id)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    {openIndex === id && <div className="course-info">{item.info}</div>}
                  </div>
                );
              })}
            </div>
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
}