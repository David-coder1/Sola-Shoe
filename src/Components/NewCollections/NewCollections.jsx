import React from "react";
import new_collection from "../Assets/new_collections";

import "./NewCollections.css";
import Item from "../Item/Item";
function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collection">
        {new_collection.map((item, i) => {
          return (
            <Item
              Key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
