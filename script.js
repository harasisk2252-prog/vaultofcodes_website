const certificates = {

    "VOC-2024-12345": {
        name: "Harasis Kaur",
        course: "Web Development Internship",
        duration: "1 Month",
        status: "Verified"
    },

    "VOC-2024-67890": {
        name: "Rahul Sharma",
        course: "Python Programming Internship",
        duration: "2 Months",
        status: "Verified"
    },

    "VOC-2024-11111": {
        name: "Priya Singh",
        course: "Java Programming Internship",
        duration: "1 Month",
        status: "Verified"
    }

};



const form = document.getElementById("certificateForm");

const input = document.getElementById("certificateId");

const result = document.getElementById("result");

const button = document.getElementById("verifyBtn");




form.addEventListener("submit", function (event) {

    event.preventDefault();


    

    const certificateId =
        input.value.trim().toUpperCase();


    result.className = "result";

    result.innerHTML = "";


    if (certificateId === "") {

        result.classList.add("error");

        result.innerHTML = `
            <strong>⚠ Please enter a certificate ID.</strong>
            <br>
            Enter your certificate ID and try again.
        `;

        return;
    }


    button.disabled = true;

    button.innerHTML = "Verifying...";


    

    setTimeout(function () {

        const certificate =
            certificates[certificateId];


        

        if (certificate) {

            result.classList.add("success");

            result.innerHTML = `
                <strong>✓ Certificate Verified</strong>

                <br><br>

                <strong>Name:</strong>
                ${certificate.name}

                <br>

                <strong>Program:</strong>
                ${certificate.course}

                <br>

                <strong>Duration:</strong>
                ${certificate.duration}

                <br>

                <strong>Status:</strong>
                ${certificate.status}
            `;

        }


        //invalid certificate 

        else {

            result.classList.add("error");

            result.innerHTML = `
                <strong>✕ Certificate Not Found</strong>

                <br>

                The certificate ID
                <strong>${certificateId}</strong>
                could not be verified.

                <br>

                Please check the ID and try again.
            `;

        }


        //restore button
        button.disabled = false;

        button.innerHTML = `
            <span>Verify Certificate</span>
            <span class="arrow">→</span>
        `;

    }, 700);

});
