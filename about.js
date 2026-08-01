const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_22v5fs9",
        "template_ggcexo5",
        this
    )

    .then(function () {

        alert("Message Sent Successfully!");

        form.reset();

    })

    .catch(function (error) {

        alert("Failed to send message!");

        console.log(error);

    });

});
const my = document.getElementById("resume");
my.addEventListener("click",()=>{
    alert("RESUME DOWNLOADED");
});