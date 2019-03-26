import Layout from "./views/Layout";
import Home from "./views/Home";
import Foo from "./views/Foo";
import Bar from "./views/Bar";

export default [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "foo", component: Foo },
      { path: "bar", component: Bar }
    ]
  }
];
