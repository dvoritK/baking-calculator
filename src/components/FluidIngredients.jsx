import React, { useState } from "react";
import $ from "jquery";
import "./FluidIngredients.css";

function Fluidingredients() {
  let [wetIngredient, setWetIngredient] = useState("");
  let [inputValue, setInputValue] = useState("");
  let ingredients = $("#wetIngredient").val();

  function handleChange(event) {
    const amount = event.target.value;
    setInputValue(amount);
  }

  function convertMillToCup() {
    switch (ingredients) {
      case "oil":
        setWetIngredient(inputValue / 200);
        break;
      case "mapleSyrup":
      case "juice":
      case "tehina":
      case "milk":
      case "water":
        setWetIngredient(inputValue / 240);
        break;
      case "sweetCream":
      case "peanutButter":
        setWetIngredient(inputValue / 250);
        break;
      case "nutella":
        setWetIngredient(inputValue / 280);
        break;
      case "honey":
        setWetIngredient(inputValue / 360);
        break;
      case "coconutMilk":
      case "halvaSpread":
        setWetIngredient(inputValue / 400);
        break;
      default:
        console.log("please type amount");
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    convertMillToCup();
  }
  return (
    <div className="FluidIngredients">
      <h2 className="heading-fluid">נוזלים, רטבים וממרחים</h2>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="חשב" className="btn-calc input-box" />
        <input
          type="number"
          placeholder="כמות במיליליטר"
          onChange={handleChange}
          className="input-box"
        ></input>
        <select name="בחר/י חומר גלם" id="wetIngredient" className="input-box">
          <option value="chooseIngredient">בחר/י חומר גלם</option>
          <option value="honey">דבש/ סילאן</option>
          <option value="mapleSyrup">מייפל סירופ</option>
          <option value="oil">שמן</option>
          <option value="sweetCream">שמנת מתוקה</option>
          <option value="peanutButter">חמאת בוטנים</option>
          <option value="milk">חלב</option>
          <option value="water">מים</option>
          <option value="juice">מיץ</option>
          <option value="tehina">טחינה גולמית</option>
          <option value="coconutMilk">חלב/קרם קוקוס</option>
          <option value="halvaSpread">ממרח חלבה</option>
          <option value="nutella">נוטלה</option>
        </select>
      </form>
      <p>
        <span>מספר כוסות</span> <span>{wetIngredient}</span>
      </p>
    </div>
  );
}
export default Fluidingredients;
