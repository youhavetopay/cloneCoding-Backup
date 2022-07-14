// main 메뉴 클릭 이벤트
function onclickMeue(obj) {

    let nextNode = obj.nextElementSibling;

    if(nextNode.style.display == "none" || nextNode.style.display == ""){
        nextNode.style.display = "flex";
    } else{
        nextNode.style.display = "none";
    }

}


function onloadTest() {

    let textArea = document.getElementById("noti_content");

    let dateInput = document.getElementById("noti_write_date");

    textArea.value = "awdwdawdaawddaw";

    dateInput.value = "2021-04-26";

    dateInput.readOnly = true;
    
}


let mainTableLastRow = null;
let subTableLastRow = null
function tableClikeEvent(obj, flag) {
    
    let parentNode = obj.parentNode;

    if(flag){
        if(mainTableLastRow == null){
            mainTableLastRow = parentNode;

        } else{
            mainTableLastRow.className = "table_tr";
            mainTableLastRow = parentNode;
        }
    } else{
        if(subTableLastRow == null){
            subTableLastRow = parentNode;

        } else{
            subTableLastRow.className = "table_tr";
            subTableLastRow = parentNode;
        }
    }

    parentNode.className += " table_tr_click"

}


function addMainTable() {
    
    let mainTable = document.getElementById("table_main_tbody");

    let newRow = mainTable.insertRow();

    newRow.className = "table_tr";


    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    cell1.appendChild(checkBox);

    cell2.innerHTML = "123";

    cell3.innerHTML = "내부공지";

    cell4.innerHTML = "[산학협력단] ㅁㅇㅈㅁㅈㅇㅁㅈㅇ";
    cell4.className = "text_left";
    

    cell5.innerHTML = "2021.12.14";

}