import { socialMediaComponents } from "../utils/data";

export const FirstContainer = () => {
  const socialMediaItems = socialMediaComponents.map((obj, index) => {
    return (
      <li key={index}>
        <a
          style={{
            background: `url(${obj.image}) ${obj.properties}`,
          }}
        ></a>
      </li>
    );
  });
  return (
    <div className="firstContainer">
      <div className="firstSocialMediaContainer">
        <ul>{socialMediaItems}</ul>
      </div>
      <div className="firstImageContainer"></div>
      <div className="firstTextContainer">
        <h1>Hi, I am chess player</h1>
        <h3>Frontend & Backend Developer</h3>
        <p>
          Passionate frontend and backend developer specializing in
          pixel-architecture-perfect design.
        </p>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <button>Contact Me</button>
        </a>
      </div>
    </div>
  );
};
