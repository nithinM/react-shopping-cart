import React from "react";
import PropTypes from "prop-types";
import Media from "react-media";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const breadcrumbsMenuItems = [
  { linkText: "Cart", link: "/", view: "cart" },
  {
    linkText: "Customer information",
    link: "/checkout/customer-information",
    view: "customerInfo"
  },
  {
    linkText: "Shipping method",
    link: "/checkout/shipping-method",
    view: "shippingMethod"
  },
  {
    linkText: "Payment method",
    link: "/checkout/payment-method",
    view: "paymentMethod"
  }
];

class Breadcrumb extends React.Component {
  renderBreadcrumbLink = (linkText, link) => (
    <Link className="c-breadcrumb__link" to={link}>
      {linkText}
    </Link>
  );

  renderBreadcrumbDisabledLink = linkText => (
    <span className="c-breadcrumb__text">{linkText}</span>
  );

  renderBreadcrumbItem = () => {
    const {
      location,
      customerInfo,
      shippingAddress,
      shippingMethod
    } = this.props;

    console.log("this.props", this.props);
    breadcrumbsMenuItems.map(menuItem => {
      if (location.pathname === menuItem.link) {
        return (
          <span className="c-breadcrumb__text c-breadcrumb__item--current">
            {menuItem.linkText}
          </span>
        );
      }

      if (menuItem.view === "cart") {
        if (customerInfo.isComplete && shippingAddress.isComplete) {
          return this.renderBreadcrumbLink(menuItem.linkText, menuItem.link);
        }
        return this.renderBreadcrumbDisabledLink(menuItem.linkText);
      }

      if (menuItem.view === "customerInfo") {
        if (customerInfo.isComplete && shippingAddress.isComplete) {
          return this.renderBreadcrumbLink(menuItem.linkText, menuItem.link);
        }
        return this.renderBreadcrumbDisabledLink(menuItem.linkText);
      }

      if (menuItem.view === "shippingMethod") {
        if (customerInfo.isComplete && shippingAddress.isComplete) {
          return this.renderBreadcrumbLink(menuItem.linkText, menuItem.link);
        }
        return this.renderBreadcrumbDisabledLink(menuItem.linkText);
      }

      if (menuItem.view === "paymentMethod") {
        if (
          customerInfo.isComplete &&
          shippingAddress.isComplete &&
          shippingMethod.isComplete
        ) {
          return this.renderBreadcrumbLink(menuItem.linkText, menuItem.link);
        }
        return this.renderBreadcrumbDisabledLink(menuItem.linkText);
      }

      return null;
    });
  };

  render() {
    return (
      <Media
        query="(min-width: 1000px)"
        render={() => (
          <ul className="c-breadcrumb">
            <li className="c-breadcrumb__item">
              {this.renderBreadcrumbItem()}
            </li>
          </ul>
        )}
      />
    );
  }
}

// const Breadcrumb = ({
//   location,
//   customerInfo,
//   shippingAddress,
//   shippingMethod
// }) => (
//   <Media
//     query="(min-width: 1000px)"
//     render={() => (
//       <ul className="c-breadcrumb">
//
//         <li className="c-breadcrumb__item">
//           <a className="c-breadcrumb__link" href="/">
//             Cart
//           </a>
//         </li>
//         <li className="c-breadcrumb__item">
//           {location.pathname === "/checkout/customer-information" ? (
//             <span className="c-breadcrumb__text c-breadcrumb__item--current">
//               Customer information
//             </span>
//           ) : customerInfo.isComplete && shippingAddress.isComplete ? (
//             <Link
//               className="c-breadcrumb__link"
//               to="/checkout/customer-information"
//             >
//               Customer information
//             </Link>
//           ) : (
//             <span className="c-breadcrumb__text">Customer information</span>
//           )}
//         </li>
//         <li className="c-breadcrumb__item">
//           {location.pathname === "/checkout/shipping-method" ? (
//             <span className="c-breadcrumb__text c-breadcrumb__item--current">
//               Shipping method
//             </span>
//           ) : customerInfo.isComplete && shippingAddress.isComplete ? (
//             <Link className="c-breadcrumb__link" to="/checkout/shipping-method">
//               Shipping method
//             </Link>
//           ) : (
//             <span className="c-breadcrumb__text">Shipping method</span>
//           )}
//         </li>
//         <li className="c-breadcrumb__item">
//           {location.pathname === "/checkout/payment-method" ? (
//             <span className="c-breadcrumb__text c-breadcrumb__item--current">
//               Payment method
//             </span>
//           ) : shippingMethod.isComplete &&
//           customerInfo.isComplete &&
//           shippingAddress.isComplete ? (
//             <Link className="c-breadcrumb__link" to="/checkout/payment-method">
//               Payment method
//             </Link>
//           ) : (
//             <span className="c-breadcrumb__text">Payment method</span>
//           )}
//         </li>
//       </ul>
//     )}
//   />
// );

Breadcrumb.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  customerInfo: PropTypes.instanceOf(Object).isRequired,
  shippingAddress: PropTypes.instanceOf(Object).isRequired,
  shippingMethod: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = (state, props) => ({
  shippingAddress: state.shippingAddress,
  customerInfo: state.customerInfo,
  shippingMethod: state.shippingMethod,
  paymentMethod: state.paymentMethod,
  ...props
});

export default withRouter(connect(mapStateToProps)(Breadcrumb));
