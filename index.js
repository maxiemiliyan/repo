/*[{"id":1,"answer":3,"question":"Which was not one of Voldemort's Horcruxes?","options":["Harry","Nagini","Helga's Diadem","Tom Riddle's Diary"]},
{"id":2,"answer":1,"question":"Which of these are not one of Hagrid's many pets?","options":["Grawp","Fluffy","Aragog","Noberta"]},
{"id":3,"answer":3,"question":"Which class did Severus Snape always want to teach?","options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]},
{"id":4,"answer":3,"question":"Which Hogwarts house did Moaning Myrtle belong in?","options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]},
{"id":5,"answer":2,"question":"What class did Neville end up teaching at Hogwarts?","options":["Astronomy","Herbology","Charms","Muggle Studies"]}]*/


function result() {
    var score=0;
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    if (document.getElementById("correct4").checked) {
        score++;
    }
    if (document.getElementById("correct5").checked) {
        score++;
    }
    document.getElementById("rmark").innerHTML=(score)+" / 5";
}