import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ currentPage }) {
  return (
    <div id="nav">
      <nav>
        <ul>
          <li className={currentPage == "home" ? "hiden" : "nav-li"}>
            <Link to="/">首頁</Link>
          </li>
          <li className={currentPage == "home" ? "nav-li" : "hiden"}>
            <a href="#home">Top</a>
          </li>
          <li className={currentPage == "home" ? "nav-li" : "hiden"}>
            <a href="#production">作品</a>
          </li>
          <li className={currentPage == "home" ? "nav-li" : "hiden"}>
            <a href="#skill">技能</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
