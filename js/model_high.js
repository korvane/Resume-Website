
function makeH2(id) {
    var gu = document.getElementById(id);
    return gu ? gu.querySelector("h2").textContent : gu;
}

function makeMedia(id) {
    var gu = document.getElementById(id);
    if(gu != null){
        return gu.querySelector("section video") ? gu.querySelector("section video").src : gu.querySelector("section img").src;
    }
    return null;
}

function makeCaption(id) {
    var gu = document.getElementById(id);
    return gu ? gu.querySelector("ul li").textContent : gu;
}

function makehref(id) {
    var gu = document.getElementById(id);
    return gu ? "./pages/highLevel.html#" + gu.id : gu;
}


if(sessionStorage.getItem("init")) {
    window.location.href = "lowLevel.html";
}

var toIndex = new Array(12);
//get the names of the three featured projects

for(let i = 0; i < 3; i++) {
    var gu = makeH2(i.toString());
    toIndex[i] = gu;
    gu = makeMedia(i.toString());
    toIndex[i+3] = gu;
    gu = makeCaption(i.toString());
    toIndex[i+6] = gu;
    gu = makehref(i.toString());
    toIndex[i+9] = gu;
}

//send to storage for the main js script
for(let i = 0; i < 3; i++) {
    if(toIndex[i]) {
        sessionStorage.setItem(i.toString(), toIndex[i]);
        sessionStorage.setItem((i+3).toString(), toIndex[i+3]);
        sessionStorage.setItem((i+6).toString(), toIndex[i+6]);
        sessionStorage.setItem((i+9).toString(), toIndex[i+9]);
    }
}