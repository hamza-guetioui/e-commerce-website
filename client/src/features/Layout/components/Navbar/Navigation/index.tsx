import React from "react";
import Navigation from "./Navigation";
import Item from "./Item";
import Categories from "./Categories";
import More from "./More";

function index() {
  return (
    <>
      <Navigation>
        <Item path="/">Home</Item>
        <Item>

          <Categories  />
        </Item>
        <Item path="/Store">Store</Item>
        <Item path="/Fachion">Fachion</Item>
        <Item path="/Articles">Articles</Item>
        <Item>
          <More />
        </Item>
      </Navigation>
    </>
  );
}

export default index;
