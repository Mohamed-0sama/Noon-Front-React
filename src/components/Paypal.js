import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();
  const total = props.total.total;
  console.log("ttttttttttttttttttt");

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          alert(
            "Thank you...Transaction completed successfully by " +
              order.payer.name.given_name
          );
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className="text-center" style={{position: "relative", zIndex : "0"}}>
      <div ref={paypal}></div>
    </div>
  );
}
