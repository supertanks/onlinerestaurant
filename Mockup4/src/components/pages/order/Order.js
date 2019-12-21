import React from 'react';

import { Link } from "react-router-dom";

const Orders = props => (
    <div className="container">
      <div className="row">
      { props.Orders.map((order) => {
        return (
          <div key={order.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
            <div className="oders_box">
                <div className="oders_text">
                  <h5 className="oders_title">
                    { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                  </h5>
                  <p className="recipes_price">Giá Món: <span>
                    { recipe.price }
                  </span></p>
                </div>
                <button className="recipe_buttons">
                  <Link to={{ 
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}>Xem Món Ăn</Link>
                </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
  
  export default Orders;