import React from "react";

const AboutUs = () => {
  console.log("about");
  const jumboStyle = {
    width: "50%"
  };
  return (
    <div class="jumbotron jumbotron-fluid mx-auto mt-4" style={jumboStyle}>
      <div class="container">
        <h1 class="display-4">Blog-APP</h1>
        <p class="text-muted">Blog he kuch jugaad Nahi!!</p>
      </div>
    </div>
  );
};

export default AboutUs;
