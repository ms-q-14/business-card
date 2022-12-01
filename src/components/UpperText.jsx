import React from "react";

function UpperText() {
  return (
    <div className="upperText">
      <h2 className="upperText__name">Mohammad Qureshi</h2>
      <h5 className="upperText__job">Frontend Developer</h5>
      <a
        className="upperText__web"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
      >
        Mohammad.Qureshi.com
      </a>
      <a
        className="upperText__button"
        href="https://www.linkedin.com/in/mohammad-qureshi-780b88250/"
        target="_blank"
      >
        <button type="button">
          {" "}
          <i class="bi bi-linkedin"></i> LinkedIn
        </button>
      </a>

      <h3 className="upperText__about_title">About</h3>
      <p className="upperText__about_text">
        I am a nurse turned frontend designer that likes to create and discover
        new things. I am currently well versed in HTML, CSS, and JavaScript.
        Currently in the midst of learning React. Top Coder is loading.....{" "}
      </p>

      <h3 className="upperText__interests_title">Interests</h3>
      <p className="upperText__interests_text">
        Comic books. Music. Coffee addict. Technophile. Gamer. Fishing.
        Basketball (Go Raptors!).{" "}
      </p>
    </div>
  );
}

export default UpperText;
