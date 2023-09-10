let button = document.getElementById("finish");

button.addEventListener('click', CheckTest);

function CheckTest(){
    let result = 0;
    if(document.querySelector("#q1").value === "4"){
        result++;
    }
    if(document.querySelector("#q2").value === "6"){
        result++;
    }
    if(document.querySelector("#q3").value === "512"){
        result++;
    }
    if(document.querySelector("#q4").value === "100"){
        result++;
    }
    if(document.querySelector("#q5").value === "1"){
        result++;
    }
    alert("Количество правильных ответов: "+ result);
}