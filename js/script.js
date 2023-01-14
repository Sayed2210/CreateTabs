let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let content = document.querySelectorAll(".content > div");
let conArray = Array.from(content);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active")
        }
        )
        e.currentTarget.classList.add("active");
        conArray.forEach((content) => {
            content.style.display = "none";
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    }
    )
}

)