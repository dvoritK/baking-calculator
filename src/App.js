import "./App.css";
import $ from "jquery";
import { useState } from "react";

function App() {
  let [inputValue, setInputValue] = useState("");
  let [cupConvertion, setCupConvertion] = useState("");

  function convertToCup() {
    switch ($("#ingredient").val()) {
      case "coconut":
      case "almonds":
        setCupConvertion(inputValue / 100);
        break;
      case "sugarPowder":
        setCupConvertion(inputValue / 120);
        break;
      case "whiteFlour":
      case "cornflour":
      case "cocoa":
        setCupConvertion(inputValue / 140);
        break;
      case "wholeWheatFlour":
        setCupConvertion(inputValue / 125);
        break;
      case "semolina":
      case "demeraraSugar":
      case "whiteSugar":
        setCupConvertion(inputValue / 200);
        break;
      case "brownSugar":
        setCupConvertion(inputValue / 240);
        break;
      default:
        console.log("please type amount");
        break;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    convertToCup();
  }
  function handleChange(event) {
    const amount = event.target.value;
    setInputValue(amount);
  }

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <input type="submit" value="חשב" />
        <input
          type="number"
          placeholder="כמות בגרמים"
          onChange={handleChange}
        ></input>
        <select name="בחר/י חומר גלם" id="ingredient">
          <option value="chooseIngredient">בחר/י חומר גלם</option>
          <option value="sugarPowder" id="sugarPowder">
            אבקת סוכר
          </option>
          <option value="whiteSugar">סוכר לבן</option>
          <option value="demeraraSugar">סוכר דמררה</option>
          <option value="brownSugar">סוכר חום כוס דחוסה</option>
          <option value="semolina">סולת</option>
          <option value="pudding">פודינג</option>
          <option value="coconut">קוקוס</option>
          <option value="cornflour">קורנפלור</option>
          <option value="whiteFlour">קמח לבן</option>
          <option value="wholeWheatFlour">קמח מלא</option>
          <option value="cocoa">קקאו</option>
          <option value="oatmeal">שיבולת שועל</option>
          <option value="almonds">שקדים / אגוזים טחונים</option>
        </select>
      </form>
      <p>
        <span>מספר כוסות:</span> <span>{cupConvertion}</span>
      </p>
    </div>
  );
}

export default App;
