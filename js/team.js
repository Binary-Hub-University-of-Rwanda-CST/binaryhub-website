 // Sample data for team members
 var teamMembers = {
    "UWIHANGANYE Edison": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "Knowledge is good when it is shared and it has value when it is applied",
    },
    "ISHIMWE Lucie KARLISE": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "MUNEZERO NTAGANIRA Michel": {
        "Position": "FRONT-END Developer",
        "Status": "computer SCIENCE STUDENT",
        "Bio": "I love coding and exploring new technologies...",
    },
    "NDAYISHIMIYE Habibu": {
        "Position": "Data analysist",
        "Status": "CP computer science",
        "Bio": "I love coding and exploring new technologies...",
    },
    "ISHIMWE Lucie KARLISE": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "TUYISHIME David": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "DUSHIME Dieudonne": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "UWIHANGANYE Obed": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "INGABIRE lysa Adoline": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },
    "SIBONIYO Emmanuel": {
        "Position": "Computer Science Student",
        "Status": "Student",
        "Bio": "I love coding and exploring new technologies...",
    },

    "Dr. Ignace GATARE": {
        "Position": "Principal of CST",
        "Status": "Staff",
        "Bio": "Short Bio for Principal of CST...",
    },
    "Mr. MBONABUCYA Celestin": {
        "Position": "Cordinator",
        "Status": "Staff",
        "Bio": "",
    },
    "Dr. Uwitonze Alfred": {
        "Position": "Dean of school of Ict",
        "Status": "Staff",
        "Bio": "Senior Lecturer Information & Communication Engineering",
    },
    "John MUNYAKAYANZA": {
        "Position": "HOD of Computer science",
        "Status": "Staff",
        "Bio": "CS HOD BIO",
    },
    "Mr. HARELIMANA Dominique": {
        "Position": "HOD of INFORMATION TECHNOLOGY",
        "Status": "Staff",
        "Bio": "CS HOD BIO",
    },
    "Dr. Alexander Ngenzi": {
        "Position": "HOD of Computer science",
        "Status": "Staff",
        "Bio": "CS HOD BIO",
    },

    "Mr. Murangira Theoneste": {
        "Position": "HOD of Computer science",
        "Status": "Staff",
        "Bio": "CS HOD BIO",
    },
    "SHYIRAMBERE Joseph": {
        "Position": "HOD of Computer science",
        "Status": "Staff",
        "Bio": "CS HOD BIO",
    },
    // Add More team members and their details as needed
};

// Function to filter team members
function filterTeam(category) {
    $(".team-member").hide(); // Hide all team members

    if (category === 'all') {
        $(".team-member").show(); // Show all team members
    } else {
        $("." + category).show(); // Show team members based on the category (student or staff)
    }
}

// Function to show member information in the modal
function showMemberInfo(name, position, status, bio) {
    // Find the modal elements
    var modalTitle = document.querySelector("#memberModalLabel");
    var modalBody = document.querySelector(".modal-body");

    // Set the member's information in the modal
    modalTitle.textContent = "BINARY HUB Member Information - " + name;

    // Check if the member exists in the teamMembers data
    if (teamMembers.hasOwnProperty(name)) {
        var member = teamMembers[name];
        modalBody.innerHTML = "<p><strong>Name:</strong> " + name + "</p>" +
            "<p><strong>Position:</strong> " + position + "</p>" +
            "<p><strong>Status:</strong> " + status + "</p>" +
            "<p><strong>Bio:</strong></p>" +
            "<p>" + bio + "</p>";
    } else {
        modalBody.innerHTML = "<p>Member information not found.</p>";
    }

    // Show the modal
    $("#memberModal").modal("show");
}