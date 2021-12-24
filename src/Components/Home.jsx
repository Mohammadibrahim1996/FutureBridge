import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Data } from "./DataB";

export const Home = () => {
  return (
    <div>
      <Row>
        {Data.data.map((item, i) => (
          <Col md={3}>
            <div key={i}>
              <Card
                style={{
                  width: "13rem",
                  height: "55vh",
                  margin: "30px",
                  display: "flex",
                }}
              >
                <Card.Body>
                  <Card.Img variant="top" src={item.Poster} />
                  <Card.Title>Movie Name:{item.Title}</Card.Title>
                  <Card.Text>Release Date:{item.Year}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
