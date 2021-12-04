import React from "react";
import { Card } from "antd";
const RoutingDiv = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Card
        title="Default size card"
        // extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      {/* <ul className="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    className="nav-item"                   
                    onMouseOver={() => CatChanged(cat.id)}
                    onMouseOut={mouseOut}
                  >
                    <a className="nav-link" href={cat.link}>
                      {cat.mainCat}
                    </a>
                  </li>
                </>
              );
            })}
          </ul> */}
    </div>
  );
};

export default RoutingDiv;
