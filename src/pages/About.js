import React from "react";
import "./About.css";

//Simple HTML CSS Page
function About() {
  return (
    <div className="about-grid">
      <div className="project">
        <h1>About</h1>
        <p>
          When we heard we needed to make a web application that makes API calls
          and creats charts the first thing that came to mind was of course
          Cryptocurrency. There are many avaiable robust API's online to
          retrieve data about the market price and trading histroy of Crypto.
          This sort of dashboard is also popular so we knew we would have ample
          resources online to help us if we got stuck.
        </p>
        <h2>What is Cryptocurrency?</h2>

        <p>
          Cryptocurrency is a form of payment that can be exchanged online for
          goods and services. Many companies have issued their own currencies,
          often called tokens, and these can be traded specifically for the good
          or service that the company provides. Think of them as you would
          arcade tokens or casino chips. You’ll need to exchange real currency
          for the cryptocurrency to access the good or service. Cryptocurrencies
          work using a technology called blockchain. Blockchain is a
          decentralized technology spread across many computers that manages and
          records transactions. Part of the appeal of this technology is its
          security.
        </p>
        <br />
        <div className="src">
          <a href="https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know">
            Source: NerdWallet
          </a>
        </div>

        <h2>Technology Used</h2>
        <div className="tech">
          <div className="techlogo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            <h3>ReactJS</h3>
          </div>
          <div className="techlogo">
            <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png" />
            <h3>JavaScript</h3>
          </div>
          <div className="techlogo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
            <h3>CSS</h3>
          </div>
          <div className="techlogo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" />
            <h3>HTML</h3>
          </div>
          <div className="techlogo">
            <img src="https://www.chartjs.org/img/chartjs-logo.svg" />
            <h3>Chart.js</h3>
          </div>
          <div className="techlogo">
            <img src="https://static.coingecko.com/s/api_landing_page_2x-c8a9b94a199c90fd02f99ccb3484b7911dbf18d1f083339577441d0c411d02d2.png" />
            <h3>CoinGecko APi</h3>
          </div>
        </div>
        <h2>Features</h2>
        <div className="featurelist">
          <div className="flist">
            <ul>
              <li>Feature</li>
              <li>Feature</li>
              <li>Feature</li>
            </ul>
          </div>
          <div className="flist">
            <ul>
              <li>Feature</li>
              <li>Feature</li>
              <li>Feature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
