import React, { useState } from "react";
import $ from "jquery";
import "./DryIngredients.css";

function DryIngredients() {
  let [inputValue, setInputValue] = useState("");
  let [cupDryConvertion, setCupDryConvertion] = useState("");
  let [calculation, setCalculation] = useState(false);
  let ingredients = $("#dryIngredient").val();
  let fixedNumDry = (Math.round(cupDryConvertion * 100) / 100).toFixed(2);

  function handleChange(event) {
    let amount = event.target.value;
    setInputValue(amount);
  }

  function convertGramsToCup() {
    switch (ingredients) {
      case "coconut":
      case "almonds":
        setCupDryConvertion(inputValue / 100);
        break;
      case "sugarPowder":
        setCupDryConvertion(inputValue / 120);
        break;
      case "whiteFlour":
      case "cornflour":
      case "cocoa":
        setCupDryConvertion(inputValue / 140);
        break;
      case "wholeWheatFlour":
        setCupDryConvertion(inputValue / 125);
        break;
      case "semolina":
      case "demeraraSugar":
      case "whiteSugar":
        setCupDryConvertion(inputValue / 200);
        break;
      case "brownSugar":
        setCupDryConvertion(inputValue / 240);
        break;
      default:
        console.log("please type amount");
        break;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    convertGramsToCup();
    setCalculation(true);
    setInputValue("");
    ingredients = "chooseIngredient";
  }
  return (
    <div className="DryIngredients">
      <h2 className="heading-dry">חומרים יבשים</h2>
      <form onSubmit={handleClick} className="form-dry-ing">
        <input type="submit" value="חשב" className="btn-calc-dry input-box" />
        <input
          type="number"
          placeholder="כמות בגרמים"
          onChange={handleChange}
          className="input-box"
        ></input>
        <select name="בחר/י חומר גלם" id="dryIngredient" className="input-box">
          <option value="chooseIngredient">בחר/י חומר גלם</option>
          <option value="sugarPowder" id="sugarPowder">
            אבקת סוכר
          </option>
          <option value="whiteSugar">סוכר לבן</option>
          <option value="demeraraSugar">סוכר דמררה</option>
          <option value="brownSugar">סוכר חום כוס דחוסה</option>
          <option value="semolina">סולת</option>
          <option value="coconut">קוקוס</option>
          <option value="cornflour">קורנפלור</option>
          <option value="whiteFlour">קמח לבן</option>
          <option value="wholeWheatFlour">קמח מלא</option>
          <option value="cocoa">קקאו</option>
          <option value="oatmeal">שיבולת שועל</option>
          <option value="almonds">שקדים / אגוזים טחונים</option>
        </select>
      </form>
      {calculation ? (
        <p className="outcomeDry">
          <span>מספר כוסות:</span> <span>{fixedNumDry}</span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default DryIngredients;
