import React from "react";
import Main from "./components/Main";
import logo from "./Image.png";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import gmail from "./gmail.svg";
import twitter from "./twitter.svg";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./components/Main.css";

const App = () => (
  <div className="whole">
    <BackgroundAnimation />
    <Main
      logo={{
        src: logo,
        alt: "logo",
        style: {
          width: "180px",
        },
      }}
      title={{
        text: "Shadman Ahmed",
        style: {
          maxWidth: "440px",
        },
      }}
      description={{
        text: "Fullstack Developer",
      }}
      links={[
        {
          url: "https://github.com/shadman-a",
          image: github,
        },
        {
          url: "https://twitter.com/talktoshad",
          image: twitter,
        },
        {
          url: "https://www.linkedin.com/in/ahmedshadman",
          image: linkedin,
        },
        {
          url: "mailto:ahmedshadman966@gmail.com",
          image: gmail,
        },
      ]}
    />
  </div>
);

export default App;
