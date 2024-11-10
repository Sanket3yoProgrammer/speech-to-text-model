const output = document.getElementById("output");
let finalTranscript = "";

// Set up the SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = true;

// Function to start recognition
function startRecognition() {
    finalTranscript = '';
    output.textContent = '';
    recognition.start();
}

// Attempt to start on window load
window.onload = () => {
    startRecognition();
};

// Fallback: Start listening after first user interaction if it didn’t start on load
document.addEventListener('click', () => {
    if (recognition) {
        startRecognition();
    }
}, { once: true }); // Runs only once

// Event listener for capturing speech results
recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('');

    if (e.results[0].isFinal) {
        finalTranscript = transcript;
        output.textContent = finalTranscript;

        // Send the transcription result to the Flask server
        fetch("http://localhost:5000/transcription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: finalTranscript })
        })
        .then(response => response.text())
        .then(data => console.log("Server response:", data))
        .catch(error => console.error("Error:", error));
    }
});

// Restart recognition automatically after each phrase
recognition.addEventListener('end', () => {
    startRecognition();  // Restart listening
});

// Optional: Stop recognition on pressing 'Escape' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        recognition.stop();
    }
});









// const output = document.getElementById("output");

// let finalTranscript = "";

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = "en-US";
// recognition.interimResults = true;

// // Function to start recognition
// function startRecognition() {
//     finalTranscript = '';
//     output.textContent = '';
//     recognition.start();
// }

// // Attempt to start on window load
// window.onload = () => {
//     startRecognition();
// };

// // Fallback: Start listening after first user interaction if it didn’t start on load
// document.addEventListener('click', () => {
//     if (recognition) {
//         startRecognition();
//     }
// }, { once: true }); // Runs only once











// recognition.addEventListener('result', (e) => {
//     const transcript = Array.from(e.results).map(result => result[0].transcript).join('');

//     if (e.results[0].isFinal) {
//         finalTranscript = transcript;
//         output.textContent = finalTranscript;
//     }
// });

// recognition.addEventListener('end', () => {
//     recognition.start();  // Restart listening automatically
// });

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         recognition.stop();
//     }
// });


// const output = document.getElementById("output");
// let finalTranscript = "";























// recognition.addEventListener('result', (e) => {
//     const transcript = Array.from(e.results).map(result => result[0].transcript).join('');

//     if (e.results[0].isFinal) {
//         finalTranscript = transcript;
//         output.textContent = finalTranscript;



//         fetch("http://localhost:5000/transcription", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ text: finalTranscript })
//         })
//         .then(response => response.text())
//         .then(data => console.log("Server response:", data))
//         .catch(error => console.error("Error:", error));

//         // // Send the transcription result to the Flask server
//         // fetch("http://localhost:5000/transcription", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify({ text: finalTranscript })
//         // })
//         // .then(response => response.text())
//         // .then(data => console.log("Server response:", data))
//         // .catch(error => console.error("Error:", error));
//     }
// });






















// const output = document.getElementById("output");
// // const startButton = document.getElementById("startButton");

// let finalTranscript = "";

// const SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.lang = "en-US";
// recognition.interimResults = true;
// // startButton.addEventListener("click", () => {
// //     finalTranscript = '';
// //     output.textContent = '';
// //     recognition.start();
// //     startButton.textContent = 'Listening....';
// // });

// // startButton.onclick = () => {
// //     startButton.textContent = 'Listening...';
// // };

// recognition.addEventListener('result', (e)=> {
//     const transcript = Array.from(e.results).map(result => 
//         result[0].transcript).join('');

//     if(e.results[0].isFinal){
//         finalTranscript = transcript;
//         output.textContent = finalTranscript;
//     }
// });

// // recognition.addEventListener('end', () => {
// //     startButton.textContent = 'startButton';
// //     // startButton.textContent = 'listening....';
// //     recognition.start();
// // });

// recognition.addEventListener('end', () => {
//     recognition.start();
// });


// // document.addEventListener('keydown', (e) => { 
// //     if (e.key == 'Escape') {
// //         recognition.stop();
// //         startButton.textContent = 'startButton';
// //     }
// // });

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         recognition.stop();
//     }
// });
