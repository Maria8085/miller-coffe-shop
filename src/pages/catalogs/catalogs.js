import React from "react";
import "./style.scss";
import Catalog from "../../components/catalog/catalog";
import Resale from "../../components/resale/resale";

function Catalogs() { 
    return (
      <main className="main">
        <Catalog />
        <Resale />
    </main>
);}

export default Catalogs;