import React from "react";
import ReactDOM from "react-dom";
import { Table, Header, Row,TableFooter } from "./index";
// import "./style/index.less";
// import './style/tailwind.output.scss'
ReactDOM.render(
  <React.StrictMode>
    <Table>
      <Header>
        <span>sla</span>
        <div filter={true} sort={true} onSort={() => console.log("first")}>
          sla
        </div>
        <span>sla</span>
        <span>sla</span>
      </Header>
      <Row borderLeft="10px solid #00b893" >
        <span colSpan="5">sla</span>
        {/* <span>sla</span>
        <span>sla</span>
        <span>sla</span> */}
      </Row>
    </Table>
<TableFooter styles={{padding:"10px"}}>
  khdjs
</TableFooter>
  </React.StrictMode>,
  document.getElementById("root")
);
