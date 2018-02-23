document.addEventListener("DOMContentLoaded", function (event) {
    var d = new Date();

    var month = new Array("січня", "лютого", "березня", "квітня", "травня", "квітня",
        "липня", "серпня", "вересня", "жовтня", "листопада", "грудня");

    var currentDay = document.getElementsByClassName("curday");
    var content = "Сьогодні " + d.getDate() + " " + month[d.getMonth()];
    currentDay[0].innerHTML = content;

});
