import React from 'react';

import './footer.css';
import FooterItem from '../footer-item';

const Footer = ({ footerItems }) => {
return (
  <div className="footer">
    {
      footerItems.map((item) => {
      return <FooterItem item = {item} key = {item.label} />;
    })
    }
  </div>
  );
}
export default Footer;
