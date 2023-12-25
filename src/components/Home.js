import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ setCurrentPage }) {
  const [moreHCJ, setMoreHCJ] = useState(false);
  const [moreReact, setMoreReact] = useState(false);
  const [moreNode, setMoreNode] = useState(false);
  const [moreWebpack, setMoreWebpack] = useState(false);
  const HCJHandler = () => {
    if (moreHCJ === false) {
      setMoreHCJ(true);
    } else {
      setMoreHCJ(false);
    }
  };
  const ReactHandler = () => {
    if (moreReact === false) {
      setMoreReact(true);
    } else {
      setMoreReact(false);
    }
  };
  const NodeHandler = () => {
    if (moreNode === false) {
      setMoreNode(true);
    } else {
      setMoreNode(false);
    }
  };
  const WebpackHandler = () => {
    if (moreWebpack === false) {
      setMoreWebpack(true);
    } else {
      setMoreWebpack(false);
    }
  };
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  return (
    <div id="home">
      <div className="opening-animation-main">
        <div className="opening-animation">
          <div className="opening-animation-top">
            <svg className="svg" height="354" width="320">
              <text className="svg-text" x="0" y="300">
                穆
              </text>
            </svg>
          </div>
          <div className="opening-animation-down">
            <p className="opening-animation-p">
              看似簡單的生活，是需要刻意努力的
            </p>
            <hr className="opening-animation-hr" />
          </div>
        </div>
      </div>
      <main className="homeMain">
        <section className="homeFirst">
          <svg>
            <line className="line line1" x1="80%" y1="0%" x2="100%" y2="10%" />
            <line
              className="line line2"
              x1="100%"
              y1="10%"
              x2="90%"
              y2="100%"
            />
            <line className="line line3" x1="90%" y1="100%" x2="0%" y2="70%" />
          </svg>
          <figure className="photo">
            <div className="marcus"></div>
          </figure>
          <div className="introMyself">
            <p className="intro-p">
              哈囉大家好，我的名字是穆政廷
              <br />
              曾就讀崑山科技大學電機工程系
              <br />
              畢業後約莫6年的時間嘗試各產業的工作
              <br />
              但在未來的綜合考量下還是決定重返程式設計
              <br />
              透過線上課程及各前輩的文章自我進修
              <br />
              <br />
              以下是我從零開始構思到完成的作品
              <br />
              並非照搬課程中的作品
              <br />
              希望能得到貴公司的賞識
              <br />
              讓我有機會親自與您介紹我自己
            </p>
            <div className="scroll-arow">
              <p className="arow-p">往下滑</p>
              <div className="arow">
                <p className="arow arow1">﹀</p>
                <p className="arow arow2">﹀</p>
                <p className="arow arow3">﹀</p>
              </div>
            </div>
          </div>
        </section>
        <section className="homeSec" id="production">
          <div className="sideProject">
            <p className="title">作品</p>
            <p className="note">
              ***
              因Render閒置的機制，若點選按鈕後伺服器毫無反應，麻煩請等待30秒讓Render重新啟動服務，感謝!
            </p>
            <div className="API">
              <p>
                1. 串接OpenWeatherAPI顯示台灣各地當前的天氣 :
                <Link to="/weather">天氣查詢</Link>
              </p>
            </div>
            <div className="Reverse">
              <p>
                2.
                預約SPA及商家後台SPA搭配後端伺服器並連接資料庫的完整預約網站，上線於Render免費雲端服務
                :
              </p>
              <p>
                <Link
                  to="https://sideproject-reverseweb.onrender.com"
                  target="_blank"
                >
                  用戶端預約頁面
                </Link>
                <Link
                  to="https://github.com/mugua85528/reverse-web-client.git"
                  target="_blank"
                >
                  GitHub-client
                </Link>
                <br />
                一般用戶可以在這個頁面瞭解商家資訊，並選擇服務、預約時間及填寫資料立即向商家預約。同時也可以利用手機號碼查詢已預約的服務
              </p>
              <p>
                <Link
                  to="https://sideproject-reverseweb-business.onrender.com"
                  target="_blank"
                >
                  商家後台頁面
                </Link>
                <Link
                  to="https://github.com/mugua85528/reverse-web-business.git"
                  target="_blank"
                >
                  GitHub-business
                </Link>
                <br />
                商家可以在這個頁面註冊會員並登入設定商家資訊，營業時間會同步顯示用戶頁面可預約的時間。此頁面也會顯示即將到來的預約服務並包含用戶所提供的所有訊息
              </p>
              <p>
                <Link
                  to="https://github.com/mugua85528/reverse-web-server.git"
                  target="_blank"
                >
                  GitHub-server
                </Link>
                <br />
                後端提供預約及商家資料庫儲存、RestfulAPI等等的相關基本服務
              </p>
            </div>
          </div>
        </section>
        <section className="homeThr" id="skill">
          <p className="title">使用的技能</p>
          <div className="skill">
            <hr />
            <div onClick={HCJHandler} className="part H-C-J">
              <p>HTML CSS JAVASCRIPT</p>
              <p className={moreHCJ === true ? "note" : "hiden"}>
                理解如何優化SEO及DOM、設計RWD並熟悉JS，能完成各種網站設計
              </p>
            </div>
            <hr />
            <div onClick={ReactHandler} className="part React">
              <p>React</p>
              <p className={moreReact === true ? "note" : "hiden"}>
                能夠搭配React Hook及Webpack完整做出Single Page App
              </p>
            </div>
            <hr />
            <div onClick={NodeHandler} className="part Node.js">
              <p>Node.js</p>
              <p className={moreNode === true ? "note" : "hiden"}>
                能夠使用Express製作基本伺服器、搭配Mongodb製作Models並使用RESTful
                API架構設計出基本的CRUD處理前端的請求
              </p>
            </div>
            <hr />
            <div onClick={WebpackHandler} className="part Webpack">
              <p>Webpack</p>
              <p className={moreWebpack === true ? "note" : "hiden"}>
                目前熟悉使用axios、date fns、react router
                dom、bcrypt、joi的npm，往後也會積極學習其他Webpack及library
              </p>
            </div>
            <hr />
          </div>
          <div className="next">
            <p>持續學習 : TypeScript、Node.js、Next.js</p>
            <p>未來會走向Full-stack 全端工程師</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
