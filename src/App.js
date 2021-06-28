import React from "react";
import Main from "./components/Main";
import logo from "./Image.png";
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
          image: "https://image.flaticon.com/icons/svg/733/733553.svg",
        },
        {
          url: "https://twitter.com/talktoshad",
          image: "https://image.flaticon.com/icons/svg/145/145812.svg",
        },
        {
          url: "https://www.linkedin.com/in/ahmedshadman",
          image: "https://image.flaticon.com/icons/svg/145/145807.svg",
        },
        {
          url: "mailto:ahmedshadman966@gmail.com",
          image: "https://image.flaticon.com/icons/svg/732/732200.svg",
        },
      ]}
    />
  </div>
);

export default App;
