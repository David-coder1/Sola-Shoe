import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (500+)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum
          quas id nulla qui voluptatum doloremque exercitationem accusamus
          architecto expedita distinctio rerum sed voluptatibus, quos aliquam
          eum nemo modi nisi architecto expedita distinctio rerum sed
          voluptatibus, quos aliquam eum nemo modi nisi
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          iure quibusdam obcaecati, voluptate doloremque commodi quo delectus
          porro, sint nostrum dignissimos harum. Veniam accusamus numquam eos
          labore cumque inventore veritatis.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
