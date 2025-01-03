const text = "Vicky, ever since I first saw you which was around the beginning of 2023, I've had a huge crush on you. I just never got the chance to properly get to know you, even in-person because you're usually hard to find on campus. I regret not shooting my shot many times but I guess I was scared. One of my New Year's resolution was to finally get it off my chest after 2 damn years. And I wanted to give you a bouquet and Love Letter, and I was gonna drop it off at your work place, but I didn't want to cause a scene at your work place like that, so I kept thinking for literally a month to come with a solution, and here I am, coding a love letter instead. I like everything about you, you're pretty yet you're smart and career driven. You're cute yet you're also intelligent and most importantly you have the cutest smile. Your personality is attractive, your smile is attractive, and everything about you is just attractive. I achieved everything during my time in UH, friends, popularity, good grades, but it felt incomplete because I was not able to ask you out, which is crazy because usually I have the confidence to do so. You deserve all the happiness in the world, you deserve to be treated right, and I want to be the one to be able to bring happiness into your life. I don't know if this will work but this was the best I could come up with for now. I did put in a lot of hours and thought into this so I hope it proves to be worth it. It sounds crazy doesn't it? You barely know me, I barely know you, yet I've been so crazy about you for so long, yet I know that I want to be, have to be, and can be the best version of myself for you and with you. But whatever happens and has happened, I'll respect your choice of course, and leave you alone if you want me to, but I am finally going to shoot my shot after 2 long years.";

const paragraph = text.split("");
let i = 0;

// Function to animate the typing of the love letter
function dashOut(arr) {
    if (i < arr.length) {
        console.log(arr[i]);  // Logging each character
        document.querySelector(".textCont").textContent += arr[i];
        i++;
        console.log("The i count: " + i);  // Logging the index
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));  // Use interval to control speed
    } else {
        // Show the response options when the text is fully displayed
        document.querySelector(".response-container").classList.remove("hidden");
    }
}

// Function to adjust typing speed based on punctuation
function interval(letter) {
    console.log(letter);  // Logging each letter
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 200 + 200);  // Slow down for punctuation
    } else {
        return Math.floor(Math.random() * 80 + 5);  // Faster for other characters
    }
}

// Function to start the animation of the love letter
function startFromBegin() {
    i = 0;
    document.querySelector(".textCont").textContent = "";  // Clear existing content
    dashOut(paragraph);  // Start displaying the text
}

// When the Love Letter button is clicked
document.getElementById("startText").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent the default behavior of the anchor tag
    this.classList.add("hidden");  // Hide the "Love Letter" button
    startFromBegin();  // Start displaying the text
});

// Handle the "Yes" button
document.getElementById("yesBtn").addEventListener("click", function() {
    const userResponse = 'Yes';
    alert("Gah damn! You said Yes! I'll plan a date");
    // Send the response to Google Form
    submitResponse(userResponse);
});

// Handle the "No" button
document.getElementById("noBtn").addEventListener("click", function() {
    const userResponse = 'No';
    alert("Damn!");
    // Send the response to Google Form
    submitResponse(userResponse);
});


// Function to send the response to the Google Form
function submitResponse(response) {
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSecuENbhP4Tfv4FW_yLHK_oAcSDGPjSmqZB32nqQZy1q5rLkg/formResponse'; // Replace with your form's submission URL
    const data = new FormData();
    data.append('entry.1493874133', response); // Replace with your form's entry ID for the question
    data.append('entry.1493874133_sentinel', 'some_value'); // The sentinel entry ID, if needed

    fetch(formURL, {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response submitted:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

