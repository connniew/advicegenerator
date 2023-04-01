window.onload = () => {
    displayDivider();
    getAdvice();
}

window.addEventListener("resize", displayDivider);
document.querySelector("button").addEventListener("click", getAdvice);

function displayDivider() {
    const dividerDesktop = document.querySelector(".divider.desktop");
    const dividerMobile = document.querySelector(".divider.mobile");

    if (window.innerWidth <= 767) {
        dividerDesktop.classList.add("invisible");
        dividerMobile.classList.remove("invisible");
    } else {
        dividerMobile.classList.add("invisible");
        dividerDesktop.classList.remove("invisible");
    }
}

function getAdvice() {
    const url = "https://api.adviceslip.com/advice";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const quote = data.slip.advice;
            const adviceID = data.slip.id;
            document.querySelector(".advice-num").innerHTML = adviceID;
            document.querySelector(".quote").innerHTML = '"' + quote + '"';
        })
        .catch((err) => {
            console.error('Error:', err);
        })
}


