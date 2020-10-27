import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p><b>Ingredients:</b></p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories:</b> {calories}</p>
        </div>
    );
}

export default Recipe;