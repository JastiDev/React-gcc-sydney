/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="text-center"  style={{position: 'absolute', top: -200, left: 0, right: 0, color: 'white'}}>
            <h2>Leadership</h2>
          </div>

          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/paul_nam.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Rev. Paul Nam <br />
              </h4>
              <h6 className="description">Lead Pastor</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-justify" md="6">
              <p>
                Pastor Paul Nam is the founder and Lead Pastor of Grace Community
                Chapel Sydney. Pastor Paul is a graduate of The George Washington
                University (B.A.) and The Southwestern Baptist Theological
                Seminary (M.Div).
              </p>
              <p>
                He is currently pursuing a Doctorate of Ministry in Discipleship from Talbot School of Theology. 
              </p>
              <p>
                He also holds a Foundations of Biblical Counseling Certificate from Christian Counseling &amp; Educational Foundation (CCEF).
              </p> 
              <p>He is ordained in the Christian Reformed Church of North America (CRCNA).</p>  
              <p>
                His greatest passion is for the church
                to raise bold, committed, and passionate disciples of Jesus Christ
                that will make a great impact for the Kingdom of God.
              </p>  
              <p>His heart is for people to fall into a deep, love relationship with Jesus.</p>
              <p>Pastor Paul is a devoted husband to Deborah, and a grateful father to Karis, Kayla, Moses, and Matthew.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
