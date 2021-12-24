import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>About Us</h1>
          </Card.Title>
          <Card.Text>
            Name: Mohammed Ibrahim,
            <br />I am a Developer, working as an Intern at PickupBiz
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
