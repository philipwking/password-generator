import './App.css';
import React, { useState } from "react";

function App() {


  var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var spec = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var alphNumb = alph.concat(numb);
  var alphSpec = alph.concat(spec);
  var numbSpec = numb.concat(spec);
  var alphNumbSpec = numb.concat(spec.concat(alph));

  const [state, setState] = useState({
    password: "",
    letters: false,
    numbers: false,
    special: false,
    passLength: 15
  })

  function reverse(value) {
    if (value) {
      return false
    } else if (!value) {
      return true
    }
  }

  function handleChange(event) {
    const name = event.target.name
    switch (name) {
      case "letters":
        setState((prevState) => ({ ...prevState, letters: reverse(state.letters) }))
        break;
      case "numbers":
        setState((prevState) => ({ ...prevState, numbers: reverse(state.numbers) }))
        break;
      case "special":
        setState((prevState) => ({ ...prevState, special: reverse(state.special) }))
        break;
    }
  }

  function handleSlider(e) {
    const value = e.target.value
    setState((prevState) => ({ ...prevState, passLength: value }))
  }

  function generatePassword() {
    var pass = ""
    const letters = state.letters
    const numbers = state.numbers
    const special = state.special
    const passLength = state.passLength

    if (letters && numbers && special) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let lett = Math.floor(Math.random() * alphNumbSpec.length);
        pass = pass + alphNumbSpec[lett];
      }
    } else if (letters && numbers) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let lett = Math.floor(Math.random() * alphNumb.length);
        pass = pass + alphNumb[lett];
      }
    } else if (letters && special) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let lett = Math.floor(Math.random() * alphSpec.length);
        pass = pass + alphSpec[lett];
      }
    } else if (numbers && special) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let lett = Math.floor(Math.random() * numbSpec.length);
        pass = pass + numbSpec[lett];
      }
    } else if (letters) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let lett = Math.floor(Math.random() * alph.length);
        pass = pass + alph[lett];
      }
    } else if (numbers) {
      for (let i = 0; i <= passLength; i = i + 1) {
        let num = Math.floor(Math.random() * 10);
        pass = pass + num.toString();
      }
    } else if (special) {
      for (let i = 0; i <= passLength; i = i + 1) {
        var lett = Math.floor(Math.random() * spec.length);
        pass = pass + spec[lett];
      }
    }
    setState((prevState) => ({ ...prevState, password: pass }))
  }

  return (
    <div class="container">
      <div class="level">
        <h1 class="level-item has-text-centered">
          Custom Password Generator
                </h1>
      </div>
      <div class="level">
        <label class="checkbox">
          <input type="checkbox" name="letters" onChange={(e) => { handleChange(e) }} />
          Letters
            </label>
      </div>
      <div class="level">
        <label class="checkbox">
          <input type="checkbox" name="numbers" onChange={(e) => { handleChange(e) }} />
          Numbers
            </label>
      </div>
      <div class="level">
        <label class="checkbox">
          <input type="checkbox" name="special" onChange={(e) => { handleChange(e) }} />
          Special Characters
            </label>
      </div>
      <div class="level">
        <label class="slider">
          <input class="slider is-fullwidth" step="1" min="0" max="30" type="range" name="passLength" onChange={(e) => { handleSlider(e) }} />
          {state.passLength}
        </label>
      </div>
      <div class="level">
        <button onClick={() => { generatePassword() }}>
          Generate Password
                </button>
      </div>

      <div class="level-item has-text-centered">
        <div class="box">
          {state.password}
        </div>
      </div>
    </div>
  )


}

export default App;
