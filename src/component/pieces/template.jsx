import React from "react";
import Header from "./header";

const Template = (prop) => {
  return (
    <div className="container my-3 py-5">
      <Header title={prop.title} />

      <div className="row justify-content-center">
        {prop.body}
      </div>
    </div>
  );
};

export default Template;
