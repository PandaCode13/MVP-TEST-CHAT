// -----------------------------
// JSON des émotions + réponses
// -----------------------------

const emotionsData = {
    "joies": {
        "prompts": [
            {
                "input": "Aujourd’hui j’ai trop rigolé, raconte-moi pourquoi je suis si content !",
                "response": "Trop chouette ! Tu as sûrement vécu un moment drôle ou partagé un fou rire avec quelqu’un."
            },
            {
                "input": "Je suis super heureux, comme si j'avais gagné une surprise ! Tu peux m’aider à l’expliquer ?",
                "response": "Wow ! Quand tu te sens comme si tu avais gagné une surprise, c’est que quelque chose t’a rendu super fier."
            },
            {
                "input": "J’ai fait quelque chose de trop cool, ça me donne envie de sauter partout !",
                "response": "Génial ! Tu as sûrement réussi un truc important."
            },
            {
                "input": "Je me sens léger dans mon cœur, comme si tout brillait !",
                "response": "Ton cœur est tout lumineux et rempli d’une belle émotion."
            },
            {
                "input": "Je veux raconter un moment joyeux, tu peux m'aider à l'écrire joliment ?",
                "response": "Tu as vécu un moment rempli de douceur et de sourires."
            }
        ]
    },

    "tristes": {
        "prompts": [
            {
                "input": "Je me sens tout mou et je sais pas pourquoi… aide-moi à comprendre.",
                "response": "C'est normal parfois de se sentir tout mou. On peut en parler doucement."
            },
            {
                "input": "J'ai envie de pleurer un peu, tu peux écrire ce que je ressens ?",
                "response": "Pleurer, c'est normal. Ça aide à se sentir mieux."
            },
            {
                "input": "Aujourd'hui je suis triste, comme si j'avais perdu mon jouet préféré.",
                "response": "Tu te sens un peu vide, et c'est ok."
            },
            {
                "input": "Mon cœur est lourd, comme un nuage gris… raconte-le pour moi.",
                "response": "Ton cœur a juste besoin de temps pour redevenir lumineux."
            },
            {
                "input": "J'ai pas envie de parler… mais tu peux dire ce que je sens.",
                "response": "Tu es peut-être fatigué ou triste, et c'est normal."
            }
        ]
    },

    "colere": {
        "prompts": [
            {
                "input": "Je suis trop énervé, j'ai envie de crier ! Tu peux m'aider à l'expliquer ?",
                "response": "Tu es comme un volcan prêt à exploser, quelque chose t'a contrarié."
            },
            {
                "input": "J'ai la tête chaude, comme si tout m'agaçait !",
                "response": "Quand ta tête chauffe, c'est que tu as accumulé plein d'énervement."
            },
            {
                "input": "Je suis fâché fort, tu peux écrire pourquoi ?",
                "response": "Tu es très fâché parce que quelque chose n'a pas été comme tu voulais."
            },
            {
                "input": "J'ai envie de taper dans un coussin, je suis trop en colère.",
                "response": "Taper un coussin c'est une bonne manière de libérer la colère."
            },
            {
                "input": "Mon cœur fait boum boum parce que je suis énervé, tu peux raconter ça ?",
                "response": "Ton cœur bat vite parce que l'émotion est forte."
            }
        ]
    },

    "degout": {
        "prompts": [
            {
                "input": "Beurk... j'aime pas du tout ça, tu peux dire pourquoi ça me dégoûte ?",
                "response": "Ton corps dit qu'il n'aime pas du tout ce que tu as vu ou senti."
            },
            {
                "input": "C'était trop bizarre et ça m'a donné envie de faire une grimace.",
                "response": "Ça t'a surpris et ton cerveau a dit 'erk'."
            },
            {
                "input": "Pouah, ça m'a fait un truc dans le ventre… raconte-le !",
                "response": "Ton ventre s'est serré parce que quelque chose t'a dégoûté."
            },
            {
                "input": "J'ai vu un truc que j'aime VRAIMENT pas, tu peux l'écrire ?",
                "response": "Quelque chose t'a marqué mais pas dans le bon sens."
            },
            {
                "input": "Ça me donne envie de dire « beurk », explique-le à ma place.",
                "response": "Ton corps n'aime vraiment pas ce qu'il a vu ou senti."
            }
        ]
    }
};

// Variables pour le suivi des émotions
let emotionHistory = []; // Historique des émotions détectées
let questionCount = 0; // Compteur de questions

// -----------------------------
// Fonction pour détecter l'émotion à partir du texte
// -----------------------------
function detecterEmotion(text) {
    const textLower = text.toLowerCase();
    
    if (textLower.includes("heureux") || textLower.includes("content") || textLower.includes("rigolé") || textLower.includes("joyeux") || textLower.includes("cool")) {
        return "joies";
    } else if (textLower.includes("triste") || textLower.includes("pleurer") || textLower.includes("lourd") || textLower.includes("mou") || textLower.includes("vide")) {
        return "tristes";
    } else if (textLower.includes("énervé") || textLower.includes("fâché") || textLower.includes("colère") || textLower.includes("agacé") || textLower.includes("exploser")) {
        return "colere";
    } else if (textLower.includes("beurk") || textLower.includes("dégoût") || textLower.includes("pouah") || textLower.includes("bizarre") || textLower.includes("grimace")) {
        return "degout";
    } else {
        return "inconnue";
    }
}

// -----------------------------
// Fonction pour vérifier et gérer les changements d'émotion
// -----------------------------
function gererChangementEmotion(texteUtilisateur) {
    // Détecter l'émotion actuelle
    const emotionActuelle = detecterEmotion(texteUtilisateur);
    
    // Si l'émotion est inconnue, on ne fait rien
    if (emotionActuelle === "inconnue") {
        emotionHistory.push("inconnue");
        questionCount++;
        return;
    }
    
    // Ajouter l'émotion à l'historique
    emotionHistory.push(emotionActuelle);
    questionCount++;
    
    // Vérifier après 5 questions
    if (questionCount >= 5) {
        // Analyser les 5 dernières émotions
        const derniereEmotions = emotionHistory.slice(-5);
        const emotionsUniques = [...new Set(derniereEmotions.filter(e => e !== "inconnue"))];
        
        // Si on a au moins 3 émotions différentes parmi les 5 dernières
        if (emotionsUniques.length >= 3) {
            // Afficher un message d'attention après un court délai
            setTimeout(() => {
                ajouterMessage("💡 J'ai remarqué que tes émotions ont beaucoup varié récemment. C'est normal de ressentir différentes émotions, mais prends un moment pour respirer et te recentrer. Comment te sens-tu vraiment en ce moment ?", "ia");
            }, 500);
            
            // Réinitialiser le compteur après avoir affiché le message
            questionCount = 0;
        }
    }
}

// -----------------------------
// Fonction envoyer modifiée
// -----------------------------
function envoyer() {
    const inputField = document.getElementById("prompt-user-input");
    const text = inputField.value.trim();
    if (text === "") return;

    // Affichage du message utilisateur
    ajouterMessage(text, "user");

    // Gérer le suivi des émotions
    gererChangementEmotion(text);

    // Cherche une réponse dans le JSON
    const réponse = trouverRéponse(text);

    // Affiche la réponse après un court délai
    setTimeout(() => {
        ajouterMessage(réponse, "ia");
    }, 300);

    inputField.value = "";
}

// -----------------------------
// Fonctions existantes (conservées)
// -----------------------------
function trouverRéponse(text) {
    // Cherche une correspondance exacte
    for (let emotion in emotionsData) {
        for (let p of emotionsData[emotion].prompts) {
            if (p.input.toLowerCase() === text.toLowerCase()) {
                return p.response;
            }
        }
    }
    
    // Si aucune correspondance exacte, utiliser la détection par mots-clés
    const textLower = text.toLowerCase();
    
    // Joies
    if (textLower.includes("heureux") || textLower.includes("content") || textLower.includes("rigolé") || textLower.includes("joyeux")) {
        return "Tu sembles ressentir de la joie ! C'est merveilleux de te sentir si bien. 😊";
    }
    
    // Tristesse
    if (textLower.includes("triste") || textLower.includes("pleurer") || textLower.includes("lourd") || textLower.includes("mou")) {
        return "Je comprends que tu te sentes triste. C'est normal de ressentir ça parfois. 💙";
    }
    
    // Colère
    if (textLower.includes("énervé") || textLower.includes("fâché") || textLower.includes("colère") || textLower.includes("agacé")) {
        return "La colère est une émotion forte. Prends une grande respiration, ça va passer. 🌬️";
    }
    
    // Dégoût
    if (textLower.includes("beurk") || textLower.includes("dégoût") || textLower.includes("pouah") || textLower.includes("bizarre")) {
        return "Le dégoût nous protège parfois de choses désagréables. C'est une réaction naturelle. 🛡️";
    }
    
    // Réponse par défaut
    return "Je comprends pas bien, mais tu peux m'expliquer autrement ?";
}

function ajouterMessage(message, type) {
    const messagesDiv = document.getElementById("messages");
    const msgDiv = document.createElement("div");
    
    msgDiv.classList.add("msg", type);
    msgDiv.textContent = message;
    
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// -----------------------------
// Écouteurs d'événements
// -----------------------------
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById("prompt-user-input");
    
    // Écoute la touche Entrée
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            envoyer();
        }
    });
    
    // Donner le focus à l'input au chargement
    inputField.focus();
});