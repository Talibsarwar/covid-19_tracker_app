import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Who built this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by Talib Sarwar. A software engineer and content
          creator and SEO expert.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can connect me via linkedIn{" "}
          <a href="https://www.linkedin.com/in/talib-sarwar-338417189/" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </div>
        <br />
        <h4>Wonder if I have a YouTube channel?</h4>
        <div style={{ fontSize: "20px" }}>
          Click{" "}
          <a
            href="https://www.youtube.com/channel/UCyH9EuiKr7dNkpUm6XGWNZA"
            target="_blank" rel="noopener noreferrer"
          >
            here
          </a>{" "}
          will redirect you to my YouTube.
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;