document.addEventListener("DOMContentLoaded", function() {
    const star1 = document.getElementById("star1");
    const star2 = document.getElementById("star2");
    const star3 = document.getElementById("star3");
    const star4 = document.getElementById("star4");
    const star5 = document.getElementById("star5");
    const submitBtn = document.getElementById("submit-btn");
    const helloCard = document.getElementById("card1");
    const thanksCard = document.getElementById("card2");
    const ratingInfo = document.getElementById("rating-info");

    var rating=null;

    function makeClicked(event) {
        star1.classList.remove("rating-selected");
        star2.classList.remove("rating-selected");
        star3.classList.remove("rating-selected");
        star4.classList.remove("rating-selected");
        star5.classList.remove("rating-selected");

        event.target.classList.add("rating-selected");
        rating=event.target.getAttribute("value");
    }

    function submitRating(event) {
        if(rating!=null) {
            helloCard.style.display="none";
            thanksCard.style.display="flex";

            ratingInfo.innerText = "You selected "+rating+" out of 5";
        }
    }

    star1.addEventListener("click", makeClicked);
    star2.addEventListener("click", makeClicked);
    star3.addEventListener("click", makeClicked);
    star4.addEventListener("click", makeClicked);
    star5.addEventListener("click", makeClicked);

    submitBtn.addEventListener("click", submitRating);


});
