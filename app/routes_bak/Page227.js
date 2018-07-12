/**
 *
 * Page227
 *
 */

import React, { Component } from "react";

import { MycComponents } from "modules/MycComponents";
import { Row, Column } from "modules/Layout";

class Page227 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              paddingTop: "18px",
              paddingRight: "68px",
              paddingBottom: "18px",
              paddingLeft: "68px"
            }}
          >
            <div style={{ textAlign: "start" }}>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingRight: "200px",
                  paddingBottom: "5px",
                  paddingLeft: "5px"
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    alignItems: "center",
                    display: "inline-block",
                    position: "relative"
                  }}
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "1em",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: 700,
                      fontStyle: "normal",
                      lineHeight: "16px",
                      color: "#000000",
                      fontFamily: "FuturaPTWeb"
                    }}
                  >
                    yuan wang
                  </span>
                </div>
                <div style={{ display: "inline-block" }}>
                  <div
                    style={{
                      position: "absolute",
                      right: "70px",
                      top: "25px",
                      textTransform: "uppercase",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      letterSpacing: "2.88px",
                      cursor: "pointer",
                      lineHeight: "12px",
                      color: "#4f4f4f",
                      paddingRight: "10px",
                      fontFamily: "FuturaPTWeb"
                    }}
                  >
                    <span style={{ margin: "20px" }}>about</span>
                    <span>work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MycComponents>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div>
              <Row>
                <Column col={6}>
                  <div style={{ display: "inline" }}>
                    <img
                      src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/t/5a21138fc8302566a3ba66a3/1512118871198/yuanwang_profilepic?format=500w"
                      style={{
                        maxHeight: "433px",
                        maxWidth: "431px",
                        width: "100%"
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#73beee",
                        padding: "5%",
                        position: "absolute",
                        right: "40px",
                        top: "15px"
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontFamily: "futura-pt",
                          letterSpacing: "0.35em",
                          lineHeight: "1.2em",
                          fontWeight: 500,
                          color: "#ffffff",
                          textAlign: "center",
                          fontSize: "31.6123px",
                          textTransform: "uppercase",
                          fontStyle: "italic"
                        }}
                      >
                        Hello
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "18.1192px",
                          fontStyle: "italic",
                          fontWeight: 400,
                          letterSpacing: "0.26em",
                          textAlign: "center",
                          textTransform: "uppercase",
                          lineHeight: "1.2em",
                          color: "#ffffff"
                        }}
                      >
                        i'm yuan
                      </span>
                    </div>
                  </div>
                </Column>
                <Column col={6} style={{ color: "#ffffff" }}>
                  <div
                    style={{
                      display: "inline-block",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "15px",
                      paddingBottom: "15px",
                      paddingLeft: "15px",
                      color: "#ffffff"
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      My name is Yuan ("you-en"). Currently, I'm an experience design lead at Airbnb, working on Guest Experiences.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      I spent the past 3.5 years designing at Twitter, where I worked on projects from Growth & Onboarding, Abuse & Safety, to Tweets & Conversations. Prior to Twitter, I led the experience design of Firefox mobile products at Mozilla, and studied HCI at Carnegie Mellon University.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      I enjoy bringing creative ideas to life through strong empathy, systematic thinking and collaborative execution. I focus on building cross-team relationships, improving team culture and communications.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      Besides design, I spend lots of time painting and crafting. "Ink+Water" features a series of ink paintings inspired by Chinese classical poetry. My work was invited to a global group exhibit "Enter Into Art" in Cologne, Germany in 2017.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      In addition, I enjoy spending time with my husband and 2 rescued kitties, salsa dancing, and urban gardening in the always chilly SF.
                    </span>
                  </div>
                </Column>
              </Row>
            </div>
          </div>
        </MycComponents>

        <div
          style={{
            paddingRight: "70px",
            paddingLeft: "70px",
            paddingTop: "25px",
            paddingBottom: "25px"
          }}
        >
          <div
            style={{
              display: "block",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div>
              <Row>
                <Column col={6}>
                  <div style={{ display: "inline" }}>
                    <img
                      src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/t/5a21138fc8302566a3ba66a3/1512118871198/yuanwang_profilepic?format=500w"
                      style={{
                        maxHeight: "433px",
                        maxWidth: "431px",
                        width: "100%"
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#73beee",
                        padding: "5%",
                        position: "absolute",
                        right: "40px",
                        top: "15px"
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontFamily: "futura-pt",
                          letterSpacing: "0.35em",
                          lineHeight: "1.2em",
                          fontWeight: 500,
                          color: "#ffffff",
                          textAlign: "center",
                          fontSize: "31.6123px",
                          textTransform: "uppercase",
                          fontStyle: "italic"
                        }}
                      >
                        Hello
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "18.1192px",
                          fontStyle: "italic",
                          fontWeight: 400,
                          letterSpacing: "0.26em",
                          textAlign: "center",
                          textTransform: "uppercase",
                          lineHeight: "1.2em",
                          color: "#ffffff"
                        }}
                      >
                        i'm yuan
                      </span>
                    </div>
                  </div>
                </Column>
                <Column col={6} style={{ color: "#ffffff" }}>
                  <div
                    style={{
                      display: "inline-block",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "15px",
                      paddingBottom: "15px",
                      paddingLeft: "15px",
                      color: "#ffffff"
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      My name is Yuan ("you-en"). Currently, I'm an experience design lead at Airbnb, working on Guest Experiences.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      I spent the past 3.5 years designing at Twitter, where I worked on projects from Growth & Onboarding, Abuse & Safety, to Tweets & Conversations. Prior to Twitter, I led the experience design of Firefox mobile products at Mozilla, and studied HCI at Carnegie Mellon University.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      I enjoy bringing creative ideas to life through strong empathy, systematic thinking and collaborative execution. I focus on building cross-team relationships, improving team culture and communications.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      Besides design, I spend lots of time painting and crafting. "Ink+Water" features a series of ink paintings inspired by Chinese classical poetry. My work was invited to a global group exhibit "Enter Into Art" in Cologne, Germany in 2017.
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#14171a",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: 400,
                        letterSpacing: "0.6px",
                        lineHeight: "30px"
                      }}
                    >
                      In addition, I enjoy spending time with my husband and 2 rescued kitties, salsa dancing, and urban gardening in the always chilly SF.
                    </span>
                  </div>
                </Column>
              </Row>
            </div>
          </div>
        </div>

        <div style={{ paddingRight: "70px", paddingLeft: "70px" }}>
          <div style={{ fontFamily: "FuturaPTWeb" }}>
            <span
              style={{
                textTransform: "uppercase",
                color: "#4f4f4f",
                fontSize: "12px",
                cursor: "pointer",
                lineHeight: "12px",
                fontWeight: 500,
                letterSpacing: "2.88px",
                marginRight: "10px"
              }}
            >
              email
            </span>
            <span
              style={{
                textTransform: "uppercase",
                color: "#4f4f4f",
                fontSize: "12px",
                cursor: "pointer",
                lineHeight: "12px",
                fontWeight: 500,
                letterSpacing: "2.88px",
                marginRight: "10px"
              }}
            >
              linkedin
            </span>
            <span
              style={{
                textTransform: "uppercase",
                color: "#4f4f4f",
                fontSize: "12px",
                cursor: "pointer",
                lineHeight: "12px",
                fontWeight: 500,
                letterSpacing: "2.88px"
              }}
            >
              twitter
            </span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page227;
