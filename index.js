(function () {
    let app = document.getElementById("app");
    let board = document.getElementById("board");
    let suffle = document.getElementById("suffle");
    let sort = document.getElementById("sort");

    suffle.addEventListener("click", doSuffle);
    sort.addEventListener("click", doSort);

    let i = 0;

    var limit = 9,
        amount = 3,
        lower_bound = 1,
        upper_bound = 10,
        unique_random_numbers = [];

    doSuffle();    

    function doSuffle() {
        // board.innerHTML = '';
        unique_random_numbers = [];
        while (unique_random_numbers.length < limit) {
            var random_number = Math.floor(Math.random() * (upper_bound - lower_bound) + lower_bound);
            if (unique_random_numbers.indexOf(random_number) == -1 || !unique_random_numbers.length) {
                unique_random_numbers.push(random_number);
            }
        }

        while (i < 9) {
            let div = document.createElement("div");
            div.classList.add("cell");
            div.innerText = unique_random_numbers[i];
            board.appendChild(div);
            i++;
        }
    }

    function doSort() {
        board.innerHTML = '';
        while (i < 10) {
            let div = document.createElement("div");
            div.classList.add("cell");
            div.innerText = i;
            board.appendChild(div);
            i++;
        }
    }
})();