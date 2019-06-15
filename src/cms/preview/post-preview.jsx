import React from "react";
import moment from "moment";
import { StyleSheetManager } from "styled-components";
import Content from "../../components/Content";
import ContentInfo from "../../components/ContentInfo";

export default ({ widgetFor }) => (
  <StyleSheetManager target={document.querySelector("#nc-root iframe").contentDocument.head}>
    <ContentInfo
      timeToRead="1"
      title={widgetFor("body")}
      date={moment(widgetFor("body"), "YYYYMMDD").fromNow()}
      category={widgetFor("category")}
      color="#000"
      image={widgetFor("image")}
      tags={widgetFor("tags")}
    />
    <Content html={widgetFor("body")} />
  </StyleSheetManager>
);
