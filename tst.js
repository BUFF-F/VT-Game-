let c = document.getElementById("CA")
let c1 = c[1];
let c2 = c[2];
let c3 = c[3];
let c4 = c[4];
let p = document.getElementById("PA");
let p1 = p[1];
let p2 = p[2];
let p3 = p[3];
let p4 = p[4];
let Res = document.getElementById("Res");
let exebut = document.getElementById("butt");
let kbrd = document.getElementById("keyboard");
Res.innerHTML = "Waiting for Answer...";
test = (X) => {
  let a = X / 1000;
  let b = (X / 100) % 10;
  let c = (X % 100) / 10;
  let d = X % 10;
  let tst = true;
  if (a == b || a == c || a == d || b == c || b == d || c == d) {
    tst = false;
  }
  return tst;
};
test2 = (X) => {
  if (!(test(X)) || X < 1000 || X > 9999) {
    return Res.innerHTML = "Invalid Number!";
  }
};
while (test(n) == false) {
  n = Math.floor(Math.random() * (9999 - 1000) + 1000);
}
let n = 0;
let ok = false;
let nom = c1.innerHTML * 1000 + c2.innerHTML * 100 + c3.innerHTML * 10 + c4.innerHTML;
let t1 = nom.toString();
let t2 = n.toString();
green = (X) => {
  kybrd[X.innerHTML].style.backgroundColor = green;
}
yelllow = (X) => {
  kybrd[X.innerHTML].style.backgroundColor = yellow;
}
black = (X) => {
  kybrd[X.innerHTML].style.backgroundColor = black;
}
EXE = () => {
  let G = 0;
  let Y = 0;
  if (c1.innerHTML == "" || c2.innerHTML == "" || c3.innerHTML == "" || c4.innerHTML == "" || c1.innerHTML == 0 || test(nom)) {
    Res.innerHTML = "Invalid Number";
    return void (0);
  } else {
    go = true;
  }
  if (go == true) {
    Res.innerText = "";
    for (var i = 0; i < 4; i++) {
      if (t1[i] == t2[i]) {
        green(i);
        G++;
      } else {
        for (var j = 0; j < 4; j++) {
          if (t1[i] == t2[j]) {
            yellow(i);
            Y++;
          } else {
            black(i);
          }
        }
      }
    }
  }
  if (Y == 0 && G == 4) {
    Res.innerHTML = "Congratulations! you found the secret number";
  } else {
    p1.innerHTML = c1.innerHTML;
    p2.innerHTML = c2.innerHTML;
    p3.innerHTML = c3.innerHTML;
    p4.innerHTML = c4.innerHTML;
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    c4.innerHTML = "";
    Res.innerHTML = "Try again!";
  }
};
inp = (X) => {
  for (var i = 0; i < 4; i++) {
    if (c[i] == "") {
      c[i] = X;
      return void (0)
    } else if (c[i] == X) {
      c[i] = "";
      return void (0)
    }
  }
};