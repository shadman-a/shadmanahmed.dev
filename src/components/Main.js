import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    const { title, description, logo, links } = this.props;

    return (
      <div>
        <div className="container">
          {logo.src && (
            <img
              className="logo"
              alt={logo.alt}
              src={logo.src}
              style={{ ...logo.style }}
            />
          )}

          {title.text && (
            <div className="title" style={{ ...title.style }}>
              {title.text}
            </div>
          )}

          {description.text && (
            <div className="description" style={{ ...description.style }}>
              {description.text}
            </div>
          )}
        </div>

        {links && links.length > 0 && (
          <div className="social-networks">
            {links.map((social, i) => (
              <a
                className="social-networks-link"
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
              >
                {social.image && (
                  <img
                    className="social-networks-image"
                    src={social.image}
                    alt={social.text}
                    style={{ ...social.imageStyle }}
                  />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Main.defaultProps = {
  logo: {
    src: "",
    alt: "",
    style: {},
  },
  title: {
    text: "",
    style: {},
  },
  description: {
    text: "",
    style: {},
  },
  links: [
    {
      url: "",
      image: "",
      imageStyle: {},
    },
  ],
};

export default Main;
