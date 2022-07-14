function displayDetail(obj) {

    var detailMeue = document.getElementById("detail_meue");

    if(detailMeue.style.display == "" || detailMeue.style.display == "none"){
        detailMeue.style.display = "flex";
        obj.innerHTML = "접기▲";
        obj.style.color="rgb(98, 218, 87)"
    } else{
        detailMeue.style.display = "none";
        obj.innerHTML = "더보기▼";
        obj.style.color = "#000000"
    }
}




