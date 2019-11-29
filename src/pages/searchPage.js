import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { MDBCol } from "mdbreact";





export default function SearchPage() {
  return (
    <div>
      <MDBCol md="6" className="mt-3 mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </MDBCol>
      <NavbarComponent></NavbarComponent>
    </div>
  );
}
