import React from "react";
import Page363 from "./Page363";
import Page381 from "./Page381";
import Page387 from "./Page387";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page363 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page363
    },
    {
      path: "/work",
      name: "/work",
      component: Page381
    },
    {
      path: "/work-01",
      name: "/work-01",
      component: Page387
    },
    {
      path: "*",
      name: "notfound",
      component: Page363
    }
  ]
};
