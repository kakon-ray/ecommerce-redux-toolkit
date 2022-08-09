import { Button, Table } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToCart } from "../../features/CartSlice";

const Cart = () => {
  const cart = useSelector((item) => item.cart.cartsItems);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeToCart(item));
  };

  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.length === 0 ? (
        <div className="text-center mt-5 pt-5">
          <h1 className="text-center">Your Cart is Empty</h1>
          <Link to="/">
            <Button variant="primary">Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => {
                return (
                  <tr>
                    <td className="d-flex align-items-center gap-3">
                      <img
                        src={item.img}
                        style={{ widht: "100px", height: "50px" }}
                        alt="Product"
                      />
                      <h5>{item.name}</h5>
                      <h6
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(item)}
                      >
                        Remove
                      </h6>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        style={{ width: "50px" }}
                        defaultValue={item.cartQuantity}
                      />
                    </td>
                    <td>
                      {parseFloat(item.price) * parseInt(item.cartQuantity)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button type="button" class="btn btn-outline-danger">
                Danger
              </button>
            </div>

            <div style={{ width: "250px" }}>
              <div className="d-flex justify-content-between">
                <h3>Subtotal </h3>
                <h3>400$</h3>
              </div>
              <p>Voluptatum, voluptatem?</p>
              <button type="button" class="btn btn-primary w-100">
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
