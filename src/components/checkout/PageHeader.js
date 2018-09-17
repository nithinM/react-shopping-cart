import React from "react";
import Media from "react-media";
import boostedLogo from "../../images/boosted-logo.png";
import Breadcrumb from "./Breadcrumb";
import OrderSummary from "./OrderSummary";
import OrderSummaryBar from "./OrderSummaryBar";

class PageHeader extends React.Component {
  state = {
    isPanelHide: true
  };

  render() {
    return (
      <div className="c-main__header">
        <div className="c-main__logo">
          <a className="c-main__logo-link" href="#">
            <img src={boostedLogo} alt="Boosted Boards" />
          </a>
        </div>

        <Breadcrumb />

        <Media
          query="(max-width: 999px)"
          render={() => (
            <React.Fragment>
              <OrderSummaryBar
                onClick={isPanelHide => {
                  this.setState(() => ({ isPanelHide }));
                }}
              />
              <OrderSummary isPanelHide={this.state.isPanelHide} />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default PageHeader;
