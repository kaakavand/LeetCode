function romanToInt(s: string): number {


const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const arr = [];

  for (let i = 0; i < s.split("").length; i++) {
    switch (s.split("")[i]) {
      case "I":
        if (s.split("")[i + 1] === "V" || s.split("")[i + 1] === "X") {
          arr.push(s.split("")[i] + s.split("")[i + 1]);
        } else {
          arr.push(s.split("")[i]);
        }
        break;
      case "X":
        if (s.split("")[i + 1] === "L" || s.split("")[i + 1] === "C") {
          arr.push(s.split("")[i] + s.split("")[i + 1]);
        } else {
          arr.push(s.split("")[i]);
        }
        break;
      case "C":
        if (s.split("")[i + 1] === "D" || s.split("")[i + 1] === "M") {
          arr.push(s.split("")[i] + s.split("")[i + 1]);
        } else {
          arr.push(s.split("")[i]);
        }
        break;
      default:
        arr.push(s.split("")[i]);
        break;
    }
  }
 

  const newArr = [];

  for (let j = 0; j < arr.length; j++) {
    if (j === 1) {
      if (arr[j - 1].length > 1) {
        if (arr[j - 1].split("")[1] === arr[j]) {
          newArr.push(arr[j - 1]);
        }
      } else {
        newArr.push(arr[j]);
      }
    }
  }

  console.log(newArr);
  return 5;
}

romanToInt("III");
