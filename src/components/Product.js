import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { name, img } = props.item;
  return (
    <div className="col-lg-4 my-2">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
