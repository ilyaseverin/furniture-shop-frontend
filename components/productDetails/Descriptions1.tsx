"use client";
import React, { useState } from "react";
import Description from "./Description";
import Shipping from "./Shipping";
import ReturnPolicies from "./ReturnPolicies";

export default function Descriptions1() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Описание" },
    { label: "Доставка и возврат" },
    { label: "Политика возврата" },
  ];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="widget-tabs style-1">
              <ul className="widget-menu-tab">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`item-title ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="inner">{tab.label}</span>
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                <div
                  className={`widget-content-inner ${
                    activeIndex == 0 ? "active" : ""
                  } `}
                >
                  <div className="tab-description">
                    <Description />
                  </div>
                </div>
                <div
                  className={`widget-content-inner ${
                    activeIndex == 1 ? "active" : ""
                  } `}
                >
                  <div className="tab-shipping">
                    <Shipping />
                  </div>
                </div>
                <div
                  className={`widget-content-inner ${
                    activeIndex == 2 ? "active" : ""
                  } `}
                >
                  <div className="tab-policies">
                    <ReturnPolicies />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
