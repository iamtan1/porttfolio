// Function to save feedback to local storage and hide feedback input
function saveFeedback() {
    var feedback = document.getElementById("feedback-input").value;
    if (feedback.trim() !== "") {
        var existingFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
        existingFeedback.push(feedback);
        localStorage.setItem("feedback", JSON.stringify(existingFeedback));
        displayFeedback();
        hideFeedbackForm();
    }
}

// Function to display feedback from local storage
function displayFeedback() {
    var feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = "";
    var existingFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
    existingFeedback.forEach(function(feedback) {
        var li = document.createElement("li");
        li.textContent = feedback;
        feedbackList.appendChild(li);
    });
}

// Function to hide feedback input after submission
function hideFeedbackForm() {
    var feedbackForm = document.getElementById("feedback-form");
    feedbackForm.style.display = "none";
}

// Display existing feedback when page loads
displayFeedback();
