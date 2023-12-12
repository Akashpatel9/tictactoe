const box = document.querySelectorAll(".box");

var flag = 0;


var arr = ["048", "642", "012", "345", "678", "036", "147", "258"];

var filled = [];

for (const iterator in box) {
    box[iterator].addEventListener("click", () => {
        if (!filled[iterator]) {
            if (flag == 0) {
                box[iterator].innerHTML = "X";
                flag = 1;
            } else {
                box[iterator].innerHTML = "O";
                flag = 0;
            }
            filled[iterator] = true;
        }

        arr.forEach((i) => {
            if (box[i[0]].innerHTML !== "" && box[i[1]].innerHTML !== "" && box[i[2]].innerHTML !== "") {
                if (box[i[0]].innerHTML === box[i[1]].innerHTML && box[i[1]].innerHTML === box[i[2]].innerHTML) {
                    document.querySelector("h3").innerHTML = `Winner is ${box[i[0]].innerHTML}`;
                }
            }
        });

    });
}



