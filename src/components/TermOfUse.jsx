import React from 'react';
import './TermOfUse.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfUse = () => {
  
  return (
    <div>
    <Navbar/>
    <div className="terms-container">
      <h1 className="terms-heading">Terms of Use</h1>
      <div className="content">
        <section>
          <h2>Welcome to Vistify!</h2>
          <p>
            These terms and conditions outline the rules and regulations for
            the use of Vistify's Website!!
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Vistify if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
        </section>
        <section>
          <h2>Use of Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Vistify, you agree to
            use cookies in agreement with Vistify's Privacy Policy.
          </p>
          <p>
        All terms refer to the offer, acceptance and consideration of payment
        necessary to undertake the process of our assistance to the Client in
        the most appropriate manner for the express purpose of meeting the
        Client's needs in respect of provision of the Company's stated services,
        in accordance with and subject to, prevailing law of Netherlands. Any
        use of the above terminology or other words in the singular, plural,
        capitalization and/or he/she or they, are taken as interchangeable and
        therefore as referring to same.
      </p>
      <h2>License</h2>
      <p>
        Unless otherwise stated, Vistify and/or its licensors own the
        intellectual property rights for all material on Vistify. All
        intellectual property rights are reserved. You may access this from
        Vistify for your own personal use subjected to restrictions set in these
        terms and conditions.
      </p>
      <ul>
        <li>Republish material from Vistify</li>
        <li>Sell, rent or sub-license material from Vistify</li>
        <li>Reproduce, duplicate or copy material from Vistify</li>
        <li>Redistribute content from Vistify</li>
      </ul>
      <h2>You warrant and represent that:</h2>
      <ul>
        <li>
          You are entitled to post the Comments on our website and have all
          necessary licenses and consents to do so;
        </li>
        <li>
          The Comments do not invade any intellectual property right, including
          without limitation copyright, patent or trademark of any third party;
        </li>
        <li>
          The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material which is an invasion of
          privacy
        </li>
        <li>
          The Comments will not be used to solicit or promote business or
          custom or present commercial activities or unlawful activity.
        </li>
      </ul>
      <h2>Hyperlinking to our Content</h2>
      <p>
        The following organizations may link to our Website without prior
        written approval:
      </p>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>
          Online directory distributors may link to our Website in the same
          manner as they hyperlink to the Websites of other listed businesses;
          and
        </li>
        <li>
          System wide Accredited Businesses except soliciting non-profit
          organizations, charity shopping malls, and charity fundraising groups
          which may not hyperlink to our Web site.
        </li>
      </ul>
      <h2>Disclaimer</h2>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </p>
      <ul>
        <li>
          limit or exclude our or your liability for death or personal injury;
        </li>
        <li>
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </li>
        <li>
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or
        </li>
        <li>
          exclude any of our or your liabilities that may not be excluded under
          applicable law.
        </li>
      </ul>
      <p>
        The limitations and prohibitions of liability set in this Section and
        elsewhere in this disclaimer: (a) are subject to the preceding
        paragraph; and (b) govern all liabilities arising under the disclaimer,
        including liabilities arising in contract, in tort and for breach of
        statutory duty.
      </p>
      <p>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or damage of any nature.
      </p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsOfUse;
