import React, { useState } from "react";
import $ from "jquery";

function Fluidingredients() {
  let [wetIngredient, setWetIngredient] = useState("");
  let [inputValue, setInputValue] = useState("");
  let ingredients = $("#wetIngredient").val();

  function handleChange(event) {
    const amount = event.target.value;
    setInputValue(amount);
  }

  function convertMilToCup() {
    switch (ingredients) {
      case "oil":
        setWetIngredient(inputValue / 200);
        break;
      default:
        console.log("please type amount");
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    convertMilToCup();
  }
  return (
    <div className="FluidIngredients">
      <h2>חומרים נוזליים</h2>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="חשב" />
        <input
          type="number"
          placeholder="כמות במיליליטר"
          onChange={handleChange}
        ></input>
        <select name="בחר/י חומר גלם" id="wetIngredient">
          <option value="chooseIngredient">בחר/י חומר גלם</option>
          <option value="honey">דבש/ סילאן</option>
          <option value="mapleSyrup">מייפל סירופ</option>
          <option value="oil">שמן</option>
          <option value="sweetCream">שמנת מתוקה</option>
          <option value="sourCream">שמנת חמוצה</option>
          <option value="yogurt">יוגורט</option>
          <option value="milk">חלב</option>
          <option value="water">מים</option>
          <option value="juice">מיץ</option>
          <option value="tehina">טחינה</option>
          <option value="coconutMilk">חלב/קרם קוקוס</option>
          <option value="condensedMilk">חלב מרוכז</option>
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
