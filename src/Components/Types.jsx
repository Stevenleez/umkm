import React from "react";
import Type1 from "../Assets/type1.png";
import Type2 from "../Assets/type2.png";
import Type3 from "../Assets/type3.png";
import { FiArrowRight } from "react-icons/fi";

const Types = () => {
  const workInfoData = [
    {
      image: Type1,
      title: "Robusta Pagar Alam Natural",
    },
    {
      image: Type2,
      title: "Arabica Semendo Honey",
    },
    {
      image: Type3,
      title: "Arabica Semendo Natural",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">MANA PREFERENSIMU?</h1>
        <p className="primary-text">
          Lihat koleksi biji kopi kami yang berkualitas 
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <div className="work-section-button">
        <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Types;