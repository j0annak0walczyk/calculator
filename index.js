const result = document.querySelector("#result");
const btnDigit = document.querySelectorAll(".btn-digit");
const btnReset = document.querySelector(".btn-reset");
const btnDel = document.querySelector(".btn-del");
const btnMinus = document.querySelectorAll(".btn-minus");

// wyświetlenie działania w oknie result

const renderSigns = function (btn) {
  btn.forEach((btn) => {
    btn.addEventListener("click", function () {
      result.textContent += btn.textContent.trim();
    });
  });
};

renderSigns(btnDigit);
renderSigns(btnMinus);

// wyświetlanie reszty znaków, ale nie na samym początku result

// wyświetlanie się znaków, ale tylko 1 pod rząd

// działania

// DEL

const delFunction = function () {
  btnDel.addEventListener("click", function (e) {
    result.textContent = result.textContent.slice(0, -1);
  });
};
delFunction();

// RESET

btnReset.addEventListener("click", function () {
  result.innerHTML = "";
});
