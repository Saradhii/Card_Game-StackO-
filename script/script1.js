var data= JSON.parse(localStorage.getItem("letters"));

var str=localStorage.getItem("res");
var sum=0;
for(var i=0;i<str.length;i++)
{
    for(var j=0;j<data.length;j++)
    {
        if(str[i]==data[j].item)
        {
            console.log(data[j].value);
            sum=sum+data[j].value;
        }
    }
}
var h1=document.createElement("h1");
h1.innerText=sum;
document.getElementById("res").append(h1);

document.querySelector(".btn").addEventListener("click",()=>{
    window.location.href="index.html";
})