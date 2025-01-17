import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NpCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Norman Park</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Card.Link href='https://github.com/JustTheNorm'>Github</Card.Link> */}
          <a href="https://github.com/JustTheNorm">
          <Button variant="primary" >Github</Button></a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NpCard;
