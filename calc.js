{
  const resultContent = document.querySelector(".calculator__result");
  const inputs = document.querySelectorAll(".calculator__input");
  let result;


  const mathOperation = (a, b) => {
    result = (a * b - (a * b) / 5) * 12;
  };

  const changeResultContent = () => {
    resultContent.textContent = result.toFixed(2) + "zł";
    resultContent.style.color = "#ffb001";
    resultContent.style.opacity = "1";
  };

  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      let glassBox = document.querySelector("#glass-boxes").value;
      let glassExport = document.querySelector("#glass-export").value;
      parseInt(glassBox);
      parseInt(glassExport);

      mathOperation(glassBox, glassExport);

      changeResultContent();
    });
  });
 
}