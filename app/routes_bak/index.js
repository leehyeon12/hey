import React from "react";
import Page226 from "./Page226";
import Page227 from "./Page227";
import Page226 from "./Page226";

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
  indexRoute: { component: Page226 },
  childRoutes: [
    {
      path: "/new-page2",
      name: "/new-page2",
      component: Page226
    },
    {
      path: "/new-page1",
      name: "/new-page1",
      component: Page227
    },
    {
      path: "/detail-01",
      name: "/detail-01",
      component: Page226
    },
    {
      path: "*",
      name: "notfound",
      component: Page226
    }
  ]
};
