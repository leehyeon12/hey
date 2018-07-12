/**
 *
 * Page35
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";
class Page35 extends Component {
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
                      color: "#000000"
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
                      paddingRight: "10px"
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
        <div
          style={{
            paddingRight: "70px",
            paddingLeft: "70px",
            paddingTop: "20px",
            display: "block"
          }}
        >
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "20px"
            }}
          >
            <Row>
              <Column col={6}>
                <div style={{ height: "100px" }}>
                  <img
                    src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a51509a419202e3242142ec/1515279700305/1_Threads.png"
                    style={{ cursor: "pointer", width: "100%" }}
                  />
                </div>
              </Column>
              <Column col={6}>
                <img
                  src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a514f88652dea46dbbd5e7a/1515279692737/2_Tweets.png"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Column>
            </Row>
          </div>
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "20px"
            }}
          >
            <Row>
              <Column col={6}>
                <img
                  src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a5155060d9297f9a57a6cd0/1515279665379/3_NUX.png?format=750w"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Column>
              <Column col={6}>
                <img
                  src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a516e980852298a12125177/1515287245829/4_tablet.png"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Column>
            </Row>
          </div>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px"
            }}
          >
            <Row>
              <Column col={6}>
                <img
                  src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a516e9871c10b6703b2ba43/1515287245849/5_metro.png?format=750w"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Column>
              <Column col={6}>
                <img
                  src="https://static1.squarespace.com/static/502eb5d284ae7fae2e635767/5a512d3dec212d62e3d921bc/5a5172e7f9619a83b9682edc/1515287340685/6_mhci.png?format=750w"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Column>
            </Row>
          </div>
        </div>
        <div style={{ paddingRight: "70px", paddingLeft: "70px" }}>
          <div>
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
export default Page35;
