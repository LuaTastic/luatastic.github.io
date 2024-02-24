var infobar = document.getElementById("infobar_top")
var why_not = document.getElementById("why_not")

function init() {

    var date = new Date()
    
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()

    if (day <= 31 && month == 11) {
        infobar.textContent = "Happy new year and merry christmas!"
        infobar.style.backgroundColor = "#0E0E0E"
        infobar.style.display = "block"
     }
    if (day < 10 && month == 0) {
        infobar.textContent = "Happy new year!"
        infobar.style.backgroundColor = "#0E0E0E"
        infobar.style.display = "block"
    }
    if (day == 10 && month == 10) {
        infobar.textContent = "Today Test Place is turning " + (year - 2020) + " years old! Happy birthday Test Place!"
        infobar.style.backgroundColor = "#FFB600"
        infobar.style.display = "block"
    }
    if (day == 15 && month == 1) {
        infobar.textContent = "Today's my birthday!"
        infobar.style.backgroundColor = "#FFB600"
        infobar.style.display = "block"
    }
    if (day == 17 && month == 8) {
        infobar.textContent = "Today LuaTastic Studios has turned " + (year - 2023) + " years old!"
        infobar.style.backgroundColor = "#FFB600"
        infobar.style.display = "block"
    }
    if (day == 30 && month == 11) {
        infobar.textContent = "Happy 'Freedom Day'!"
        infobar.style.backgroundColor = "#0E0E0E"
        infobar.style.display = "block"
    }


            infobar.textContent = "The website is temporarily experiencing technical difficulties. Expect some pages to look weird!"
        infobar.style.backgroundColor = "#FFA500"
        infobar.style.display = "block"

}

document.onload = init();