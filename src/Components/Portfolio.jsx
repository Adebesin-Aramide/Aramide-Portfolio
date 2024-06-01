/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pexels-lukas-669619.jpg";

const imageAltText = "Data analytics on a paper";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Foodie Lens",
    description:
      "Foodie Lens is a machine learning-based application designed to identify various traditional Yoruba dishes from images and provide the corresponding recipes and cooking instructions.",
    url: "https://github.com/Adebesin-Aramide/Foodie_lens",
  },
  {
    title: "HarmonyHaven Chatbot",
    description:
      "Imagine a tireless AI, designed to provide guidance, encouragement and coping mechanisms on Mental Health Issues. That is what the HarmonyHaven Chatbot is!",
    url: "https://github.com/Adebesin-Aramide/HarmonyHaven_chatbot",
  },
  {
    title: "Global Household Electrification",
    description:
      "This is a machine learning model that predicts if a household has electricity or not.",
    url: "https://github.com/Adebesin-Aramide/Global_Household_Electrification",
  },
  {
    title: "A Walkthrough of my First Project in the Year 2024",
    description:
      "This is an article I wrote about my first project at the beginning of the year 2024.",
    url: "https://medium.com/@adebesinaramide/first-project-of-the-year-harmonyhaven-chatbot-703106305e00",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
