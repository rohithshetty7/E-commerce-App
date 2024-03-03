import React from "react";

function Container(props) {
  console.log("props", props.class1);
  return (
    <>
      <section className={props.class1}>
        <div className="container-xxl">{props.children}</div>
      </section>
    </>
  );
}

export default Container;
