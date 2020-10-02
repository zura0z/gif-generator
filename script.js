 function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

function randomsearch(responsetext)
{
    var response_objects = JSON.parse(responsetext);
    top_10_gifs = response_objects["results"];

    var image = document.createElement('img');
    image.setAttribute("id","preview_gif");
    image.src = top_10_gifs[0]["media"][0]["nanogif"]["url"];
    var div = document.getElementById('cont');
      div.appendChild(image);
}

function grab_data()
{
    var apikey = "WBV8BD71RO5L";
    var lmt = 26;
    var search_term = document.getElementById('inp').value;
    var search_url = "https://api.tenor.com/v1/random?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;
              httpGetAsync(search_url,randomsearch);
}

function appear(){
    document.getElementById('cont').style.display = 'flex';
}

function reset(){
   var gif = document.getElementById('cont');
    while (gif.firstChild) {
        gif.removeChild(gif.firstChild);
      }
    document.getElementById('inp').value= null;
    document.getElementById('cont').style.display = 'none';
}