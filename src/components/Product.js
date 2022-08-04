import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
  const { name, img, price } = props.item;
  const product = props.item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    navigate("./cart");
  };

  return (
    <div className="col-lg-4 my-2">
      <Card>
        <Card.Img variant="top" style={{ height: "350px" }} src={img} />
        <Card.Body className="text-center">
          <div className="d-flex justify-content-between my-3">
            <Card.Title>{name}</Card.Title>
            <h5>{price}$</h5>
          </div>
          <Button
            variant="warning w-100"
            onClick={() => handleAddProduct(product)}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
