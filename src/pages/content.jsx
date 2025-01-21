import React from "react";
import { Header } from "../components";
import NavItem from "../components/NavItem";

const Content = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark dark:text-white rounded-3xl">
      <Header category="Page" title="Header" />
        <NavItem />
    </div>
  );
};

export default Content;
