import React from "react";
import { connect } from "react-redux";
import OrderItemLisItem from "./OrderItemLisItem";

const OrderItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="c-order-summary__section c-order-summary__section--products">
      {items.map(item => (
        <OrderItemLisItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.orderItems
});

export default connect(mapStateToProps)(OrderItemList);
