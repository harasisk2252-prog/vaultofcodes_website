// =====================================
// CERTIFICATE DATA
// =====================================

// Demo certificates
// You can replace these with the certificates
// provided in your original starter code.

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


// =====================================
// GET HTML ELEMENTS
// =====================================

const form = document.getElementById("certificateForm");

const input = document.getElementById("certificateId");

const result = document.getElementById("result");

const button = document.getElementById("verifyBtn");


// =====================================
// FORM SUBMISSION
// =====================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get certificate ID

    const certificateId =
        input.value.trim().toUpperCase();


    // Clear previous result

    result.className = "result";

    result.innerHTML = "";


    // Check empty input

    if (certificateId === "") {

        result.classList.add("error");

        result.innerHTML = `
            <strong>⚠ Please enter a certificate ID.</strong>
            <br>
            Enter your certificate ID and try again.
        `;

        return;
    }


    // Show loading state

    button.disabled = true;

    button.innerHTML = "Verifying...";


    // Small delay for better user experience

    setTimeout(function () {

        const certificate =
            certificates[certificateId];


        // =====================================
        // VALID CERTIFICATE
        // =====================================

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


        // =====================================
        // INVALID CERTIFICATE
        // =====================================

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


        // Restore button

        button.disabled = false;

        button.innerHTML = `
            <span>Verify Certificate</span>
            <span class="arrow">→</span>
        `;

    }, 700);

});