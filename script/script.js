var nonvowels=[
  {
      item: "B",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "C",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "D",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "F",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "G",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "H",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "J",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "K",
      value: Math.floor(Math.random() * 4) + 1,
  },
  {
      item: "L",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "M",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "N",
      value: Math.floor(Math.random() * 4) + 1,
  },,{
      item: "P",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "Q",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "R",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "S",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "T",
      value: Math.floor(Math.random() * 4) + 1,
  },,{
      item: "V",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "W",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "X",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "Y",
      value: Math.floor(Math.random() * 4) + 1,
  },{
      item: "Z",
      value: Math.floor(Math.random() * 4) + 1,
  }
];
let vowels=[
{
    item : "A",
    value: Math.floor(Math.random() * 4) + 1,
},{
  item: "E",
  value: Math.floor(Math.random() * 4) + 1,
},{
  item: "I",
  value: Math.floor(Math.random() * 4) + 1,
},{
  item: "O",
  value: Math.floor(Math.random() * 4) + 1,
},{
  item: "U",
  value: Math.floor(Math.random() * 4) + 1,
}
];
function shuffle(nonvowels) {
  nonvowels.sort(() => Math.random() - 0.5);
};
shuffle(nonvowels);
let data = [...vowels,...nonvowels];
data = data.slice(0,20);
console.log(data);
displayData(data);
var string="";
//appending alphabets with values
  function displayData(data) {
    data.map(function (el, i, arr) {
         let div=document.createElement("div");
         div.setAttribute("class","block");
         let letter = document.createElement("p");
         letter.innerText = el.item;
         let weight = document.createElement("h4");
         weight.innerText=el.value;
         div.addEventListener("click", function () {
            if(data[i].value == 1)
            {
              el.value=el.value-1;
              string=string+el.item;
              document.querySelector(".ans").innerText=string;
              div.style.display="none";
            }
            else if(data[i].value > 1)
            {
                el.value=el.value-1;
                weight.innerText=el.value;
                string=string+el.item;
                document.querySelector(".ans").innerText=string;
            }
            totalScore();
           });
         div.append(letter,weight);
         document.querySelector(".gblocks").append(div);
    });
  }
var total;
//Total Score
function totalScore() {
    total = data.reduce(function (acc, el) {
      return acc + el.value * 1;
    }, 0);
    if(total==0)
    {
      localStorage.setItem("res",string);
      window.location.href="success.html";
    }
    document.querySelector("#totalscore").innerText = total;
    document.getElementById("tilesleft").innerHTML= total - 20;
  }
totalScore();

  

//99sec timer
var countTime = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countTime - now;
  var seconds = Math.floor((distance % (1000 * 100)) / 1000);
  document.getElementById("timer").innerHTML = seconds + "s ";
  if(seconds === 0){
    localStorage.setItem("res",string);
    clearInterval(x);
    alert("Game Over");
    window.location.href="success.html";
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

//redirect on correct button
document.querySelector(".rr").addEventListener("click",()=>{
  localStorage.setItem("res",string);
  window.location.href="success.html";
});

//delete last charecter on x button
document.querySelector(".ww").addEventListener("click",()=>{
  string=string.slice(0,-1);
  document.querySelector(".ans").innerText=string;
});




