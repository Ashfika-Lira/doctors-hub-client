import React from "react";
import "./Catagories.css";
import { Container, Row } from "react-bootstrap";

const Catagories = () => {
  return (
    <div>
      <Container>
	  <h1 className="text-white bg-secondary text-center">Our Testing Labs</h1>
        <Row>
          <div className="col-lg-3 feature1">
            <button>Complete Blood Count</button>
          </div>
          <div className="col-lg-6 feature2">
            <button>Prothrombin Time</button>
          </div>
          <div className="col-lg-6 feature3">
            <button>Comprehensive Metabolic Panel</button>
          </div>
          <div className="col-lg-3 feature4">
            <button>Basic Metabolic Panel</button>
          </div>
          <div className="col-lg-3 feature5">
            <button>Lipid Panel</button>
          </div>
          <div className="col-lg-3 feature6">
            <button>Urinalysis</button>
          </div>
          <div className="col-lg-3 feature7">
            <button>Liver Panel</button>
          </div>
          <div className="col-lg-3 feature8">
            <button>Thyroid Stimulating Hormone</button>
          </div>
          <div className="col-lg-3 feature9">
            <button>Hemoglobin A1C</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Catagories;