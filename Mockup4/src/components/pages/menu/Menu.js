import React from 'react';

import { Link } from "react-router-dom";


class Menu extends Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      
      <div className="menu">
        <div className="register">
                <div className="header">
                    <button className="homebutton" title="Home" onClick = {() => this.returnHome()}>
                        <img src={logo} alt="" width={40} height={40} />
                    </button>
                    <span className="title">Tu Phuong Restaurant</span>
                </div>
        </div>
        <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
          <input className="form__input" type="text" name="recipeName" />
          <button className="form__button">Tìm Kiếm</button>
        </form>
        <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}></div>
        <div className="recipes_box">
          <img 
            className="recipe_box-img" 
            src={recipe.image_url} 
            alt={recipe.title}/>
          <div className="recipe_text">
            <h5 className="recipes__title">
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
  }
};

export default Menu;












        

