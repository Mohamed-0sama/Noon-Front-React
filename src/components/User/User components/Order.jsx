import React from "react";
import { Card } from "antd";
const Order = () => {
  return (
    <div>
      <Card title="Card title">
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#j">More</a>}
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#d">More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    </div>
  );
};

export default Order;
