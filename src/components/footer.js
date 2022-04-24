import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; Made by <Link to="https://github.com/qxchuckle/status" text="status" /></p>
      </div>
    </div>
  );
}

export default Footer;
