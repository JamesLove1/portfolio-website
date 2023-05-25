import public_key from '/scripts/key.js';

console.log(public_key());

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(public_key());
})();

window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0regubs', 'Contact Form ', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById("submit").value ="Email Sent Successfully";
                document.getElementById("submit").style.background = "black";
                document.getElementById("submit").style.color = "white";
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}


//contact_service
//service_0regubs


