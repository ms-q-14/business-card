import React from "react";

function Footer() {
  return (
    <div className="footer">
      <button
        className="git-btn btn-secondary"
        href="https://github.com/ms-q-14"
      >
        <i class="bi bi-github"></i>
      </button>
      <button className="email-btn btn-secondary">
        <i class="bi bi-envelope-paper"></i>
      </button>
    </div>
  );
}

export default Footer;
