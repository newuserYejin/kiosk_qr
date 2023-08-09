/** simple-keyboard 키보드 **/

$(document).ready(function() {
  const Keyboard = window.SimpleKeyboard.default;
  const KeyboardLayouts = window.SimpleKeyboardLayouts.default;

  const layout = new KeyboardLayouts().get("korean");

  const myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button),
    ...layout
  });

  function onChange(input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }
  
  function onKeyPress(button) {
    console.log("Button pressed", button);
  }
  
});
