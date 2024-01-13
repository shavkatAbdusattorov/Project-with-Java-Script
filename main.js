let box = document.querySelector(".box");
let b = document.querySelector(".inp1");
let c = document.querySelector(".inp2");
let v = document.querySelector(".btn");
let p = document.querySelector(".p");
v.onclick = () => {
  if (b.value > c.value ) {
    p.innerHTML = "The big number" + " " + b.value;
  } else if (b.value < c.value) {
    p.innerHTML = "The big number" + " " + c.value;
  } else {
    p.innerHTML =
      "There are equal numbers" +
      "  " +
      b.value +
      " " +
      "=" +
      " " +
      c.value +
      "   " +
      "  " +
      "Ададхои баробар хастанд";
  }
};

// 2
let a = document.querySelector(".btn1");
let d = document.querySelector(".inpp1");
a.onclick = () => {
  alert(d.value);
};

// 3
let w = document.querySelector(".innp2");
let f = document.querySelector(".bttn2");
let s = document.querySelector(".ereee");
f.onclick = () => {
  if (w.value <= 10) {
    s.innerHTML = "Wellcome";
  } else {
    s.innerHTML = "Good bay";
  }
};

// 4
let i = document.querySelector(".ddd");
let o = document.querySelector(".fff");
let e = document.querySelector(".ggg");
let q = document.querySelector(".we");
i.onclick = () => {
  q.innerHTML   ++;
};
o.onclick = () => {
    q.innerHTML = 0;
}
e.onclick = () => {
    q.innerHTML  --
}


// 5
let l = document.querySelector(".for");
let k = document.querySelector(".form");
let pe = document.querySelector(".wr");
let op=document.querySelector(".form1")

k.onclick = () => {
  let sum = l.value
  let cnt = 1;
  for (let i = 1; i <= sum; i++) {
    cnt*= i;
  }
  console.log(cnt);
  pe.innerHTML = cnt
}


op.onclick = () => {
    pe.innerHTML = 0
    l.value = ''
}

let offf = document.querySelector(".offf")
let ooon = document.querySelector(".ooon");
let block_img = document.querySelector(".block_img");
let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");


offf.onclick = () => {
  block_img.innerHTML = img_1.src = "./photo_2023-08-29_13-54-39.jpg";
}



let light = document.querySelector(".light")
let butDark = document.querySelector(".offf")
let dark = document.querySelector(".dark")
let butLight = document.querySelector(".ooon")


butDark.onclick=()=> {
    light.style.display = "none";
    dark.style.display = "block";
}


butLight.onclick = () => {
  light.style.display = "block";
  dark.style.display = "none";
};