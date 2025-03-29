document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".nikeTop__list");
    const btnPrev = document.querySelector(".nikeTop__slide-btn1");
    const btnNext = document.querySelector(".nikeTop__slide-btn2");
    let items = Array.from(slider.children);
    
    let scrollStep = items[0].offsetWidth + 10;
    let cloneCount = 5; 


    items.slice(0, cloneCount).forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone");
        slider.appendChild(clone);
    });

    items.slice(-cloneCount).forEach((item) => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone");
        slider.insertBefore(clone, slider.firstChild);
    });


    items = Array.from(slider.children);

    slider.scrollLeft = scrollStep * cloneCount;

    let isScrolling = false;


    function checkLoop() {
        if (isScrolling) return;

        if (slider.scrollLeft >= scrollStep * (items.length - cloneCount)) {
            isScrolling = true;
            setTimeout(() => {
                slider.style.scrollBehavior = "auto"; 
                slider.scrollLeft = scrollStep * cloneCount;
                setTimeout(() => {
                    slider.style.scrollBehavior = "smooth"; 
                    isScrolling = false;
                }, 50);
            }, 300);
        } else if (slider.scrollLeft <= 0) {
            isScrolling = true;
            setTimeout(() => {
                slider.style.scrollBehavior = "auto";
                slider.scrollLeft = scrollStep * (items.length - cloneCount * 2);
                setTimeout(() => {
                    slider.style.scrollBehavior = "smooth";
                    isScrolling = false;
                }, 50);
            }, 300);
        }
    }


    btnNext.addEventListener("click", () => {
        if (!isScrolling) {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
            setTimeout(checkLoop, 500);
        }
    });

    btnPrev.addEventListener("click", () => {
        if (!isScrolling) {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
            setTimeout(checkLoop, 500);
        }
    });

    slider.addEventListener("scroll", () => {
        setTimeout(checkLoop, 200);
    });
});
