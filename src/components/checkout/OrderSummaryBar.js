import React from "react";

class OrderSummaryBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPanelHide: true };
  }

  onClick = () => {
    this.props.onClick(!this.state.isPanelHide);
    this.setState(() => ({ isPanelHide: !this.state.isPanelHide }));
  };

  render() {
    return (
      <div className="c-order-summary-bar">
        <div className="c-order-summary-bar__content">
          <div className="c-order-summary-bar__action" onClick={this.onClick}>
            Show order summery
          </div>
          <div className="c-order-summary-bar__value">$349.99</div>
        </div>
      </div>
    );
  }
}

export default OrderSummaryBar;
