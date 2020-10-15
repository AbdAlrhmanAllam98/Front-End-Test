var allData=[];
var httpReq = new XMLHttpRequest();
var category="general";
getData(category);

var links=document.querySelectorAll(".nav-link");

for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e)
    {
        category=e.target.text.toLowerCase();
        getData(category);
    });
}

function getData(category)
{
    httpReq.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+category+"apiKey=0b635679060d4386af2c576502d82ea1");
    httpReq.send();
    httpReq.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            allData=JSON.parse(httpReq.response);
            displayData();
        }
    }   
}
function displayData()
{
    var temp=``;
    for(var i=0;i<allData.length;i++)
    {
        temp+=`
        <div class="col-md-4">
            <img class="img-fluid" src="`+allData[i].urlToImage+`">
            <h4>`+allData[i].title+`</h4>
            <p>`+allData[i].description+`</p>
        </div>`
    }
}