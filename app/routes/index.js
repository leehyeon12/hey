import React from "react";
import Page491 from "./Page491";
import Page35 from "./Page35";
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
  indexRoute: { component: Page491 },
  childRoutes: [
    {
      path: "/new-page2",
      name: "/new-page2",
      component: Page491
    },
    {
      path: "/new-page3",
      name: "/new-page3",
      component: Page35
    },
    {
      path: "*",
      name: "notfound",
      component: Page491
    }
  ]
};
