import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  Toolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../../components";

const Editor = () => {
  return (
    <div className="m-2 md:md-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark rounded-3xl">
      <Header category="App" title="Calendar" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
