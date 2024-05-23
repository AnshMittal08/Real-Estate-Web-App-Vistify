import React from 'react';
import './PrivacyPolicy.css'; 
import Footer from './Footer';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
    <Navbar/>
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>
      <div className="content">
        <section>
          <h2>Information Collection and Use</h2>
          <p>
            At Vistify, we value and respect your privacy. This Privacy Policy
            outlines the types of information we collect when you use our
            services, how we use and protect that information, and your rights
            regarding your data.
          </p>
        </section>
        <section>
          <h2>Types of Data Collected</h2>
          <h3>Personal Data</h3>
          <p>
            When you use Vistify, we may collect personal information such as
            your name, email address, contact details, and payment information
            when you make a purchase. This information is used to provide you
            with our services, process transactions, and communicate with you.
          </p>
          <h3>Usage Data</h3>
          <p>
            We may also collect information about how you interact with our
            website, such as the pages you visit, the time and date of your
            visit, the time spent on those pages, and other statistics. This
            information helps us improve our services and user experience.
          </p>
        </section>
        <section>
          <h2>Use of Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our website and hold certain information. Cookies are
            files with small amounts of data which may include an anonymous
            unique identifier. You can control cookies through your browser
            settings and opt-out of certain types of tracking by adjusting your
            preferences.
          </p>
        </section>
        <section>
          <h2>Data Retention</h2>
          <p>
            We will retain your personal data only for as long as is necessary
            for the purposes set out in this Privacy Policy. We will retain and
            use your information to the extent necessary to comply with our
            legal obligations, resolve disputes, and enforce our policies.
          </p>
        </section>
        <section>
          <h2>Third-party Links</h2>
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Vistify. We have no control over
            and assume no responsibility for the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
        </section>
        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our services do not address anyone under the age of 18. We do not
            knowingly collect personal identifiable information from children
            under 18. In the case we discover that a child under 18 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to take necessary actions.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
