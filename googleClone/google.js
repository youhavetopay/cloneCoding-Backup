function searchGoogle(obj) {
    console.log(obj.value);
    if(event.keyCode== 13){
        location.href = "https://www.google.com/search?q="+obj.value;
        obj.value = "";
    }
}