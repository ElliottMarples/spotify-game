let round_num = 1

function changeSong(round, chosen_btn) {
    fetch("./stats.json")
        .then((response) => response.json())
        .then((json) => {
            if ( chosen_btn  == "left" ) {
                if ( json[`round${round-1}`]["option1"]["answer"] == true ) {
                    score = document.getElementById("score").innerHTML
                    score_num = Number(score[7]) + 1
                    document.getElementById("score").innerHTML = `Score: ${score_num}`
                }
            }
            if ( chosen_btn  == "right" ) {
                if ( json[`round${round-1}`]["option2"]["answer"] == true ) {
                    score = document.getElementById("score").innerHTML
                    score_num = Number(score[7]) + 1
                    document.getElementById("score").innerHTML = `Score: ${score_num}`
                }
            }
            let option1 = json[`round${round}`]["option1"]
            let option2 = json[`round${round}`]["option2"]

            document.getElementById("left-track").innerHTML = option1["title"]
            document.getElementById("left-artist").innerHTML = option1["artist"]
            document.getElementById("left-item").style.backgroundImage = `url("${option1["image"]}")`

            document.getElementById("right-track").innerHTML = option2["title"]
            document.getElementById("right-artist").innerHTML = option2["artist"]
            document.getElementById("right-item").style.backgroundImage = `url("${option2["image"]}")`
        })
    return round + 1
}

round_num = changeSong(round_num, null);

const left_button = document.getElementById("left-btn")
const right_button = document.getElementById("right-btn")
left_button.addEventListener("click", function(){ round_num = changeSong(round_num, "left") })
right_button.addEventListener("click", function(){ round_num = changeSong(round_num, "right") })