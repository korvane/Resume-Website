function updateCard(id, text, srcMed, desc, href) {
  var card = document.getElementById(id);
  
  card.querySelector("h3").textContent = text;
  var temp = document.createElement("a");
  temp.href = href;
  temp.textContent = " Learn More";
  card.querySelector("h3").appendChild(temp);
  
  var des = document.createElement("p"); //description
  des.textContent = desc;
  card.appendChild(des);

  if (srcMed != null && srcMed != "null") {
    card.appendChild(makeMedia(srcMed));
  }
  var line = document.createElement("div");
  line.className="line-break";
  card.appendChild(line);
}

function makeMedia(src) {
  if(src.split(".").pop() != "mp4") {
    var imag = document.createElement("img");
    imag.src = src;

    imag.width = 320;
    imag.height = 240;
    return imag;
  }
  var video = document.createElement("video");

  video.controls = true;
  video.width = 320;
  video.height = 240;
  video.src = src;

  return video;
}


if(sessionStorage.length == 0) {
  sessionStorage.setItem("init", "init");
  window.location.href = "./pages/highLevel.html";
}


var items = new Array(12);
for(let i = 0; i < items.length; i++) {
  items[i] = sessionStorage.getItem(i.toString());
  if(i <= 2) {
    items[i] = items[i].indexOf("(") >= 0 ? items[i].substring(0, items[i].indexOf("(")) : items[i];
  }
}


console.log(items);


updateCard("id0", items[0], items[3], items[6], items[9]);
updateCard("id1", items[1], items[4], items[7], items[10]);
updateCard("id2", items[2], items[5], items[8], items[11]);
