const dozens = document.querySelector(".dozens");
const dozensChildren = dozens.children;

const units = document.querySelector(".units");
const unitsChildren = units.children;

const minDozens = document.querySelector(".min-dozens");
const minDozensChildren = minDozens.children;

const minUnits = document.querySelector(".min-units");
const minUnitsChildren = minUnits.children;

const H = document.querySelector(".H");
const HH = document.querySelector(".HH");

const M = document.querySelector(".M");
const MM = document.querySelector(".MM");

function changeTime() {
  const data = new Date(Date.now());
  const hrs = data.getHours().toString();
  const min = data.getMinutes().toString().padStart("2", "0");
  const sec = data.getSeconds();

  HH.innerHTML = hrs.charAt(1);
  H.innerHTML = hrs.charAt(0);

  M.innerHTML = min.charAt(0);
  MM.innerHTML = min.charAt(1);

  for (let i = 0; i < dozensChildren.length; i++) {
    const bcd = decimalToBCD(hrs.charAt(0));

    if (bcd.split("")[i + 1] === "1") {
      dozensChildren[i].classList.add("one", "fade-in");
    } else {
      dozensChildren[i].classList.remove("one", "fade-in");
    }
  }
  for (let i = 0; i < unitsChildren.length; i++) {
    const bcd = decimalToBCD(hrs.charAt(1));

    if (bcd.split("")[i] === "1") {
      unitsChildren[i].classList.add("one", "fade-in");
    } else {
      unitsChildren[i].classList.remove("one", "fade-in");
    }
  }

  for (let i = 0; i < minDozensChildren.length; i++) {
    const bcd = decimalToBCD(min.charAt(0));

    if (bcd.split("")[i + 1] === "1") {
      minDozensChildren[i].classList.add("one", "fade-in");
    } else {
      minDozensChildren[i].classList.remove("one", "fade-in");
    }
  }

  for (let i = 0; i < minUnitsChildren.length; i++) {
    const bcd = decimalToBCD(min.charAt(1));

    if (bcd.split("")[i] === "1") {
      minUnitsChildren[i].classList.add("one", "fade-in");
    } else {
      minUnitsChildren[i].classList.remove("one", "fade-in");
    }
  }
}

function decimalToBCD(decimal) {
  let bcd = "";
  let digits = decimal.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    let binary = parseInt(digits[i], 10).toString(2);
    while (binary.length < 4) {
      binary = "0" + binary;
    }
    bcd += binary;
  }

  return bcd;
}

setInterval(changeTime, 1000);
