import React from "react";

const Header = (prop) => {
  return (
    <>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">{prop.title}</h1>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Header;
