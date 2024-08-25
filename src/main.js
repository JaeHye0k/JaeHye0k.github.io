function onClickNavHandler(e, id) {
    e.preventDefault();

    const targetElement = document.querySelector(id);
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}

// document.addEventListener("scroll", function (e) {
//     const elem = document.querySelector("#project");
//     console.log(elem.getBoundingClientRect());
// });

const $about_me_link = document.querySelector("a[href='#about_me']");
const $project_link = document.querySelector("a[href='#project']");

$about_me_link.addEventListener("click", (e) => onClickNavHandler(e, "#about_me"));
$project_link.addEventListener("click", (e) => onClickNavHandler(e, "#project"));
