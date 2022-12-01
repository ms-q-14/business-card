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

      <h3>About</h3>
      <p>
        I am a nurse turned frontend designer that likes to create and discover
        new things.{" "}
      </p>
    </div>
  );
}

export default UpperText;
