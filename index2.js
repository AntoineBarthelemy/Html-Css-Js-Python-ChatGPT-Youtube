const urlInput = document.getElementById("youtube-url");
const question1Input = document.getElementById("question1");
const question2Input = document.getElementById("question2");
const question3Input = document.getElementById("question3");
const submitButton = document.querySelector("button");

const response1 = document.getElementById("pop1");
const response2 = document.getElementById("pop2");
const response3 = document.getElementById("pop3");

submitButton.addEventListener("click", async () => {
  const progressStatus = document.getElementById("progress-status");

  function updateProgressStatus(status) {
    progressStatus.innerHTML = `Statut: ${status}`;
  }

  if (
    urlInput.value === "" ||
    question1Input.value === "" ||
    question2Input.value === "" ||
    question3Input.value === ""
  ) {
    alert("Veuillez remplir tous les champs avant de soumettre.");
    return;
  }

  updateProgressStatus("Téléchargement de la vidéo...");

  const youtubeUrl = urlInput.value;

  const customPrompts = [
    question1Input.value,
    question2Input.value,
    question3Input.value,
  ];

  const response = await fetch("http://127.0.0.1:5000/process_video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      youtube_url: youtubeUrl,
      custom_prompts: customPrompts,
    }),
  });

  if (!response.ok) {
    alert("Erreur lors du traitement de la requête. Veuillez réessayer.");
    return;
  }

  const result = await response.json();

  response1.innerHTML = `Question 1: ${question1Input.value}<br><br>Réponse: ${result[0]}`;
  response2.innerHTML = `Question 2: ${question2Input.value}<br><br>Réponse: ${result[1]}`;
  response3.innerHTML = `Question 3: ${question3Input.value}<br><br>Réponse: ${result[2]}`;

  updateProgressStatus("Terminé !");
});

const bubblesContainer = document.querySelector(".bubbles");
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const size = Math.random() * 50 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.animationDuration = `${Math.random() * 2 + 2}s`;
  bubble.style.animationDelay = `${Math.random() * 2}s`;
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000 * (Math.random() * 2 + 2));
}

setInterval(createBubble, 200);
// Fonction pour enregistrer l'URL de la vidéo YouTube
function saveLastUrl(url) {
  localStorage.setItem("lastYoutubeUrl", url);
}

// Fonction pour enregistrer l'URL de la vidéo YouTube
function saveLastUrl(url) {
  localStorage.setItem("lastYoutubeUrl", url);
}

// Fonction pour récupérer l'URL de la vidéo YouTube précédemment utilisée
function getLastUrl() {
  return localStorage.getItem("lastYoutubeUrl");
}

// Fonction pour enregistrer les questions
function saveLastQuestions(questions) {
  localStorage.setItem("lastQuestions", JSON.stringify(questions));
}

// Fonction pour récupérer les questions précédemment posées
function getLastQuestions() {
  return JSON.parse(localStorage.getItem("lastQuestions"));
}

// Affichage de l'URL précédemment utilisée et des questions posées lors du chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const lastUrl = getLastUrl();
  if (lastUrl) {
    urlInput.value = lastUrl;
  }

  const lastQuestions = getLastQuestions();
  if (lastQuestions) {
    question1Input.value = lastQuestions[0];
    question2Input.value = lastQuestions[1];
    question3Input.value = lastQuestions[2];
  }
});

// Enregistrement des questions et de l'URL lors de l'envoi
submitButton.addEventListener("click", () => {
  saveLastUrl(urlInput.value);
  saveLastQuestions([
    question1Input.value,
    question2Input.value,
    question3Input.value,
  ]);
});
// Étape 1 : Ajouter un écouteur d'événements pour le bouton "Envoyer ²"
const interactiveSubmitButton = document.getElementById("interactive-submit");
const interactiveInput = document.getElementById("interactive-input");
const interactiveAnswer = document.getElementById("interactive-answer");

interactiveSubmitButton.addEventListener("click", async () => {
  if (interactiveInput.value === "") {
    alert("Veuillez saisir une question avant de soumettre.");
    return;
  }
  // Étape 2 : Créer une fonction pour envoyer la question au serveur et récupérer la réponse
  const response = await fetch("http://127.0.0.1:5000/ask_question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      youtube_url: urlInput.value,
      question: interactiveInput.value,
    }),
  });

  if (!response.ok) {
    alert("Erreur lors du traitement de la requête. Veuillez réessayer.");
    return;
  }

  // Étape 3 : Afficher la réponse du modèle dans la zone "Réponse"
  const result = await response.json();
  interactiveAnswer.innerText = result.answer;
});
