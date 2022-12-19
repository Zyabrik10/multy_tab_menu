$(document).ready(function ($) {
    const li = $(".tab_menu nav ul li");
    const p = $(".tab_menu .text p");

    const main_color = "rgb(33, 34, 109)";
    const main_radius = "20px";

    // tab on click and transform
    li.each((index, currentElement) => {

        // transform before the start
        if (currentElement.classList.contains("active")) {
            currentElement.style.border = "0";
            currentElement.style.borderRadius = "0";
            p[index].classList.add("active");


            li.each((i, e) => {
                if (i != index) {
                    e.style.border = 0;
                    e.style.borderRadius = 0;

                    if (i == index - 1 && i >= 0) {
                        e.style.borderBottomRightRadius = main_radius;
                    }

                    if (i == index + 1 && i < li.length) {
                        e.style.borderBottomLeftRadius = main_radius;
                        e.style.borderLeft = `3px solid ${main_color}`;
                    }

                    if (i == li.length - 1) {
                        e.style.borderBottom = `3px solid ${main_color}`;
                    } else {
                        e.style.borderBottom = `3px solid ${main_color}`;
                        e.style.borderRight = `3px solid ${main_color}`;
                    }
                }
            });
        }

        // transform on click
        currentElement.onclick = () => {

            currentElement.classList.add("active");
            currentElement.style.border = "0";
            currentElement.style.borderRadius = "0";

            p[index].classList.add("active");

            li.each((i, e) => {
                if (i != index) {
                    e.classList.remove("active");

                    e.style.border = 0;
                    e.style.borderRadius = 0;

                    if (i == index - 1 && i >= 0) {
                        e.style.borderBottomRightRadius = main_radius;
                    }

                    if (i == index + 1 && i < li.length) {
                        e.style.borderBottomLeftRadius = main_radius;
                        e.style.borderLeft = `3px solid ${main_color}`;
                    }

                    if (i == li.length - 1) {
                        e.style.borderBottom = `3px solid ${main_color}`;
                    } else {
                        e.style.borderBottom = `3px solid ${main_color}`;
                        e.style.borderRight = `3px solid ${main_color}`;
                    }
                }
            });

            p.each((ind, e) => {
                if (ind != index)
                    e.classList.remove("active");
            });
        };
    });
});