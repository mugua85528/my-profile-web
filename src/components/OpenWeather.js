import React, { useState, useEffect } from "react";
import axios from "axios";

function OpenWeather({ setCurrentPage }) {
  let [city, setCity] = useState("Taipei");
  let [data, setData] = useState(null);
  let [rain, setRain] = useState("");

  let APIKey = "269ce9706886f36f9274307293645e60";
  const today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  const searchWeather = async () => {
    try {
      let result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},TW&appid=${APIKey}&units=metric&lang=zh_tw`
      );
      if (result.data.rain == undefined) {
        setRain("0");
      } else {
        setRain(result.data.rain["1h"]);
      }
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCity = (city) => {
    setCity(city);
  };

  useEffect(() => {
    searchWeather();
    setCurrentPage("weather");
    window.scrollTo(0, 0);
  }, [city]);

  return (
    <div id="main">
      <div id="table">
        <div>
          <table>
            <tbody>
              <tr>
                <th>
                  <p
                    className={
                      city === "Keelung" ||
                      city === "Taipei" ||
                      city === "Taoyuan" ||
                      city === "Hsinchu" ||
                      city === "Yilan"
                        ? "currenArea"
                        : ""
                    }
                  >
                    北部
                  </p>
                </th>
                <td>
                  <button
                    className={city === "Keelung" ? "currenCity" : ""}
                    onClick={() => handleCity("Keelung")}
                  >
                    基隆
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Taipei" ? "currenCity" : ""}
                    onClick={() => handleCity("Taipei")}
                  >
                    台北
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Taoyuan" ? "currenCity" : ""}
                    onClick={() => handleCity("Taoyuan")}
                  >
                    桃園
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Hsinchu" ? "currenCity" : ""}
                    onClick={() => handleCity("Hsinchu")}
                  >
                    新竹
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Yilan" ? "currenCity" : ""}
                    onClick={() => handleCity("Yilan")}
                  >
                    宜蘭
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <p
                    className={
                      city === "Miaoli" ||
                      city === "Taichung" ||
                      city === "Changhua" ||
                      city === "Nantou" ||
                      city === "Yunlin"
                        ? "currenArea"
                        : ""
                    }
                  >
                    中部
                  </p>
                </th>
                <td>
                  <button
                    className={city === "Miaoli" ? "currenCity" : ""}
                    onClick={() => handleCity("Miaoli")}
                  >
                    苗栗
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Taichung" ? "currenCity" : ""}
                    onClick={() => handleCity("Taichung")}
                  >
                    台中
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Changhua" ? "currenCity" : ""}
                    onClick={() => handleCity("Changhua")}
                  >
                    彰化
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Nantou" ? "currenCity" : ""}
                    onClick={() => handleCity("Nantou")}
                  >
                    南投
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Yunlin" ? "currenCity" : ""}
                    onClick={() => handleCity("Yunlin")}
                  >
                    雲林
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <p
                    className={
                      city === "Chiayi" ||
                      city === "Tainan" ||
                      city === "Kaohsiung" ||
                      city === "Pingtung" ||
                      city === "Penghu"
                        ? "currenArea"
                        : ""
                    }
                  >
                    南部
                  </p>
                </th>
                <td>
                  <button
                    className={city === "Chiayi" ? "currenCity" : ""}
                    onClick={() => handleCity("Chiayi")}
                  >
                    嘉義
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Tainan" ? "currenCity" : ""}
                    onClick={() => handleCity("Tainan")}
                  >
                    台南
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Kaohsiung" ? "currenCity" : ""}
                    onClick={() => handleCity("Kaohsiung")}
                  >
                    高雄
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Pingtung" ? "currenCity" : ""}
                    onClick={() => handleCity("Pingtung")}
                  >
                    屏東
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Penghu" ? "currenCity" : ""}
                    onClick={() => handleCity("Penghu")}
                  >
                    澎湖
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <p
                    className={
                      city === "Hualie" || city === "Taitung"
                        ? "currenArea"
                        : ""
                    }
                  >
                    東部
                  </p>
                </th>
                <td>
                  <button
                    className={city === "Hualie" ? "currenCity" : ""}
                    onClick={() => handleCity("Hualie")}
                  >
                    花蓮
                  </button>
                </td>
                <td>
                  <button
                    className={city === "Taitung" ? "currenCity" : ""}
                    onClick={() => handleCity("Taitung")}
                  >
                    台東
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="dateAndWeather">
        <div className="dateTime">
          <p>
            現在時間: {dateTime}，天氣狀況:{" "}
            {data && data.weather[0].description}
          </p>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
      <div id="tempAndWindAndRain">
        <div className="circle">
          <div className="wind">
            <p className="p">風速:</p>
            <p className="p main-p">{data && data.wind.speed}</p>
            <p className="p">m/s</p>
          </div>
        </div>
        <div className="circle">
          <div className="temp">
            <p className="p">溫度:</p>
            <p className="p main-p">{data && data.main.temp}</p>
            <p className="p">°C</p>
          </div>
        </div>
        <div className="circle">
          <div className="rain">
            <p className="p">雨量:</p>
            <p className="p main-p">{rain}</p>
            <p className="p">mm</p>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <footer>&copy; 2023 Marcus Mu</footer>
      </div>
    </div>
  );
}

export default OpenWeather;
