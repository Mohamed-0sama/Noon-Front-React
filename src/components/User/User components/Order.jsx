import React from "react";
import { Card } from "antd";
const Order = () => {
  return (
    <div>
      {/* <Card title="Card title"> */}
      <Card
        type="inner"
        title="ORDER NEGDB0089885464"
        // extra={<a href="#j">More</a>}
      >
        <div class="card mb-3" style={{ maxWidth: "540px", border: "none" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* </Card> */}
    </div>
  );
};

export default Order;
