import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreadcrumbItem = ({
  pathname,
  customerInfoIsComplete,
  shippingAddressIsComplete,
  pathLink,
  linkText
}) => (
  <li className="c-breadcrumb__item">
    {pathname === { pathLink } ? (
      <span className="c-breadcrumb__text c-breadcrumb__item--current">
        {linkText}
      </span>
    ) : customerInfoIsComplete && shippingAddressIsComplete ? (
      <Link className="c-breadcrumb__link" to={pathLink}>
        {linkText}
      </Link>
    ) : (
      <span className="c-breadcrumb__text">{linkText}</span>
    )}
  </li>
);

BreadcrumbItem.propTypes = {
  pathname: PropTypes.string.isRequired,
  customerInfoIsComplete: PropTypes.string.isRequired,
  shippingAddressIsComplete: PropTypes.string.isRequired,
  pathLink: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default BreadcrumbItem;
