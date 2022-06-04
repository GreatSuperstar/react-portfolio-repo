import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  experience,
} from "../../content_option";

export const Experience = () => {
    return (
        
        <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Skills | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Experience</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {experience.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
          
        </Container>
          </HelmetProvider>
       
    );
};