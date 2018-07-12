/**
 *
 * Page11
 *
 */
import React, { Component } from "react";
class Page11 extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <div
            style={{
              paddingTop: "18px",
              paddingBottom: "18px",
              paddingLeft: "15%",
              paddingRight: "15%"
            }}
          >
            <div style={{ display: "inline-block", width: "400px" }}>
              <span
                style={{
                  paddingTop: "18px",
                  paddingBottom: "18px",
                  paddingRight: "12px",
                  paddingLeft: "12px",
                  height: "16px",
                  cursor: "pointer",
                  fontSize: "16px",
                  letterSpacing: "16px",
                  textTransform: "uppercase",
                  width: "200px"
                }}
              >
                yuan wang
              </span>
            </div>
            <div
              style={{
                display: "inline-block",
                textAlign: "right",
                width: "150px"
              }}
            >
              <span>About</span>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "100px",
                textAlign: "center"
              }}
            >
              <span>Work</span>
            </div>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default Page11;
