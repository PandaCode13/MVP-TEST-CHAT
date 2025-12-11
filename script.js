// -----------------------------
// Données des émotions + réponses contextualisées
// -----------------------------

const emotionsData = {
    "joie": {
        "nom_complet": "Joie / Bonheur",
        "description": "Émotion positive liée à des expériences agréables",
        "prompts": [
            {
                "input": "Je me sens vraiment bien aujourd'hui, tout semble plus lumineux",
                "response": "C'est merveilleux de ressentir cette joie. Les jours où tout semble plus lumineux sont de véritables cadeaux. Profite de cette énergie positive !"
            },
            {
                "input": "J'ai passé un excellent moment avec des amis ou en famille",
                "response": "Les moments partagés avec des proches sont une source immense de bonheur. Ces connexions nourrissent notre bien-être émotionnel."
            },
            {
                "input": "J'ai réussi quelque chose qui me tenait à cœur",
                "response": "Félicitations ! Accomplir ce qui nous tient à cœur apporte une satisfaction profonde et renforce la confiance en soi."
            },
            {
                "input": "Je ressens de la gratitude pour ce que j'ai",
                "response": "La gratitude est l'une des émotions les plus puissantes. Reconnaître ce qui est positif dans notre vie amplifie le sentiment de bien-être."
            },
            {
                "input": "J'ai envie de célébrer ou de partager ma bonne humeur",
                "response": "Partager sa joie peut la décupler. N'hésite pas à exprimer ce sentiment positif autour de toi."
            }
        ],
        "mots_cles": ["heureux", "content", "joyeux", "satisfait", "épanoui", "réussi", "fier", "chanceux", "enthousiaste", "optimiste", "gratitude", "sourire", "lumineux", "positif"],
        "conseils": ["Profite de ce moment", "Partage ton émotion avec d'autres", "Note ce qui t'apporte de la joie", "Célèbre tes réussites"]
    },

    "tristesse": {
        "nom_complet": "Tristesse / Mélancolie",
        "description": "Émotion liée à la perte, la déception ou la solitude",
        "prompts": [
            {
                "input": "Je me sens vide ou sans énergie aujourd'hui",
                "response": "La tristesse peut parfois nous donner cette impression de vide. Rappelle-toi que les émotions sont passagères et que tu n'es pas seul à ressentir cela."
            },
            {
                "input": "J'ai vécu une déception ou une perte récemment",
                "response": "Les déceptions et les pertes font naturellement naître de la tristesse. Accorde-toi le temps de ressentir cette émotion sans jugement."
            },
            {
                "input": "Je me sens seul même entouré",
                "response": "La solitude intérieure peut coexister avec la présence des autres. C'est une expérience humaine profonde qui mérite d'être reconnue avec douceur."
            },
            {
                "input": "Je pleure sans raison apparente",
                "response": "Les larmes sont souvent l'expression d'émotions accumulées. Elles ont une fonction libératrice importante, même quand leur origine n'est pas claire."
            },
            {
                "input": "Rien ne semble avoir de sens en ce moment",
                "response": "Les périodes de doute et de remise en question peuvent être douloureuses, mais elles font partie du cheminement personnel. Ces moments passent, même si cela ne semble pas possible maintenant."
            }
        ],
        "mots_cles": ["triste", "seul", "vide", "déçu", "perdu", "abandonné", "pleurer", "larmes", "mélancolie", "désespéré", "découragé", "isolé", "faible", "lourd"],
        "conseils": ["Permets-toi de ressentir cette émotion", "Parle à quelqu'un de confiance", "Écris ce que tu ressens", "Prends soin de toi physiquement"]
    },

    "colère": {
        "nom_complet": "Colère / Frustration",
        "description": "Réaction à une injustice, une frustration ou une menace perçue",
        "prompts": [
            {
                "input": "Je suis frustré par une situation que je ne contrôle pas",
                "response": "La frustration naît souvent du décalage entre nos attentes et la réalité. Identifier ce qui est vraiment en ton contrôle peut aider à apaiser cette tension."
            },
            {
                "input": "Je me sens injustement traité",
                "response": "Le sentiment d'injustice est un déclencheur puissant de colère. Cette émotion signale que tes limites ou tes valeurs ont été franchies."
            },
            {
                "input": "J'ai l'impression que mes besoins ne sont pas respectés",
                "response": "La colère peut être un signal important que tes besoins fondamentaux ne sont pas satisfaits. C'est une invitation à clarifier et à communiquer ce qui est important pour toi."
            },
            {
                "input": "Je ressens de l'irritation pour des choses qui ne devraient pas m'énerver",
                "response": "Parfois, la colère mineure est l'expression d'une frustration plus profonde. Prendre un moment pour identifier la source réelle peut être utile."
            },
            {
                "input": "J'ai envie de m'isoler parce que tout m'énerve",
                "response": "L'isolement peut être une réaction protectrice quand l'irritation est intense. C'est parfois nécessaire pour retrouver son calme, mais attention à ne pas y rester trop longtemps."
            }
        ],
        "mots_cles": ["énervé", "fâché", "colère", "frustré", "irrité", "exaspéré", "agacé", "furieux", "rage", "contrarié", "tendu", "exploser", "impatient", "hostile"],
        "conseils": ["Respire profondément avant de réagir", "Identifie la cause réelle de ta colère", "Exprime ton ressenti de façon constructive", "Fais une pause si nécessaire"]
    },

    "anxiete": {
        "nom_complet": "Anxiété / Inquiétude",
        "description": "Préoccupation face à l'incertitude ou à des menaces potentielles",
        "prompts": [
            {
                "input": "Je m'inquiète pour l'avenir",
                "response": "L'inquiétude pour l'avenir est naturelle, mais elle peut nous priver du moment présent. Se concentrer sur ce que tu peux contrôler aujourd'hui peut aider à réduire cette anxiété."
            },
            {
                "input": "Je ressens une tension physique (estomac noué, cœur qui bat vite)",
                "response": "L'anxiété se manifeste souvent physiquement. Ces sensations sont le signe que ton corps se prépare à faire face à une menace perçue, même si celle-ci n'est pas immédiate."
            },
            {
                "input": "J'ai du mal à arrêter de penser à ce qui pourrait mal tourner",
                "response": "Les pensées anxieuses peuvent devenir des cercles vicieux. Les reconnaître comme de simples pensées, et non comme des vérités absolues, peut aider à prendre de la distance."
            },
            {
                "input": "Je me sens submergé par tout ce que j'ai à faire",
                "response": "La sensation de débordement est courante dans l'anxiété. Diviser les tâches en petites étapes et prioriser peut rendre la charge plus gérable."
            },
            {
                "input": "J'anticipe négativement une situation à venir",
                "response": "L'anticipation négative est un mécanisme de protection, mais elle peut créer une souffrance inutile. Essayer de se concentrer sur des scénarios réalistes et équilibrés peut apporter du soulagement."
            }
        ],
        "mots_cles": ["stressé", "anxieux", "inquiet", "nerveux", "tendu", "paniqué", "incertain", "doute", "préoccupé", "craintif", "appréhensif", "submergé", "oppressé", "incapacité"],
        "conseils": ["Pratique la respiration consciente", "Ancre-toi dans le moment présent", "Écris tes inquiétudes", "Parle de ce qui te stresse"]
    }
};

// Variables pour le suivi des émotions
let emotionHistory = []; // Historique des émotions détectées
let sessionStartTime = new Date(); // Heure de début de la session
let messageCount = 0; // Compteur total de messages

// -----------------------------
// Fonction de détection d'émotion améliorée
// -----------------------------
function detecterEmotion(text) {
    const textLower = text.toLowerCase();
    let scores = {
        "joie": 0,
        "tristesse": 0,
        "colère": 0,
        "anxiete": 0
    };
    
    // Analyser chaque mot du texte
    const mots = textLower.split(/\s+/);
    
    mots.forEach(mot => {
        // Vérifier chaque émotion
        for (let emotion in emotionsData) {
            if (emotionsData[emotion].mots_cles.some(motCle => mot.includes(motCle))) {
                scores[emotion] += 2; // Mot-clé direct
            }
        }
    });
    
    // Vérifier les expressions spécifiques
    for (let emotion in emotionsData) {
        emotionsData[emotion].prompts.forEach(prompt => {
            if (textLower.includes(prompt.input.toLowerCase().substring(0, 30))) {
                scores[emotion] += 5; // Correspondance forte avec un prompt
            }
        });
    }
    
    // Trouver l'émotion avec le score le plus élevé
    let emotionDominante = null;
    let scoreMax = 0;
    
    for (let emotion in scores) {
        if (scores[emotion] > scoreMax) {
            scoreMax = scores[emotion];
            emotionDominante = emotion;
        }
    }
    
    // Seuil minimum pour considérer une détection valide
    if (scoreMax < 2) {
        return {
            emotion: "neutre",
            confidence: 0,
            scores: scores
        };
    }
    
    // Calculer un niveau de confiance (entre 0 et 1)
    const totalPointsPossibles = (mots.length * 2) + 5;
    const confidence = Math.min(scoreMax / totalPointsPossibles * 2, 1);
    
    return {
        emotion: emotionDominante,
        confidence: confidence.toFixed(2),
        scores: scores
    };
}

// -----------------------------
// Fonction pour analyser l'évolution émotionnelle
// -----------------------------
function analyserEvolutionEmotionnelle() {
    if (emotionHistory.length < 3) return null;
    
    const emotionsRecentes = emotionHistory.slice(-5).filter(e => e.emotion !== "neutre");
    if (emotionsRecentes.length < 3) return null;
    
    // Compter les émotions uniques
    const emotionsUniques = [...new Set(emotionsRecentes.map(e => e.emotion))];
    
    // Vérifier la variabilité émotionnelle
    if (emotionsUniques.length >= 3) {
        // Calculer l'intensité moyenne
        const intensiteMoyenne = emotionsRecentes.reduce((sum, e) => sum + parseFloat(e.confidence), 0) / emotionsRecentes.length;
        
        return {
            variabilite: "élevée",
            emotionsUniques: emotionsUniques.length,
            intensiteMoyenne: intensiteMoyenne.toFixed(2),
            conseil: "Tu traverses une période de fluctuations émotionnelles intenses. Cela peut être fatigant. Prends le temps de te recentrer."
        };
    }
    
    // Vérifier la persistance d'une émotion négative
    const derniereEmotion = emotionsRecentes[emotionsRecentes.length - 1].emotion;
    const emotionsNegatives = ["tristesse", "colère", "anxiete"];
    
    if (emotionsNegatives.includes(derniereEmotion)) {
        const countDerniereEmotion = emotionsRecentes.filter(e => e.emotion === derniereEmotion).length;
        
        if (countDerniereEmotion >= 4) {
            return {
                variabilite: "faible",
                emotionPersistante: derniereEmotion,
                conseil: `L'émotion de ${emotionsData[derniereEmotion].nom_complet.toLowerCase()} semble persister. ${emotionsData[derniereEmotion].conseils[0]}`
            };
        }
    }
    
    return null;
}

// -----------------------------
// Fonction pour trouver une réponse contextuelle
// -----------------------------
function trouverReponseContextuelle(text, detection) {
    // 1. Chercher une correspondance exacte dans les prompts
    for (let emotion in emotionsData) {
        for (let p of emotionsData[emotion].prompts) {
            const inputLower = p.input.toLowerCase();
            const textLower = text.toLowerCase();
            
            // Vérifier une correspondance significative (pas nécessairement exacte)
            if (textLower.includes(inputLower.substring(0, Math.min(30, inputLower.length)))) {
                return {
                    reponse: p.response,
                    emotion: emotion,
                    type: "exacte"
                };
            }
        }
    }
    
    // 2. Si une émotion a été détectée avec confiance
    if (detection.emotion !== "neutre" && detection.confidence > 0.4) {
        const emotionData = emotionsData[detection.emotion];
        const prompts = emotionData.prompts;
        
        // Choisir une réponse aléatoire parmi les prompts de cette émotion
        const promptAleatoire = prompts[Math.floor(Math.random() * prompts.length)];
        
        return {
            reponse: promptAleatoire.response,
            emotion: detection.emotion,
            type: "detectee"
        };
    }
    
    // 3. Réponse par défaut avec invitation à clarifier
    const reponsesNeutres = [
        "Je comprends que tu partages quelque chose d'important. Peux-tu m'en dire plus sur ce que tu ressens exactement?",
        "Merci de partager cela avec moi. Pour mieux te comprendre, pourrais-tu décrire ton émotion avec d'autres mots?",
        "Je perçois que quelque chose te préoccupe. Aimerais-tu explorer ce sentiment plus en détail?",
        "Chaque émotion mérite d'être entendue. Dis-m'en plus sur ce qui se passe pour toi en ce moment."
    ];
    
    return {
        reponse: reponsesNeutres[Math.floor(Math.random() * reponsesNeutres.length)],
        emotion: "neutre",
        type: "neutre"
    };
}

// -----------------------------
// Fonction pour afficher des insights périodiques
// -----------------------------
function fournirInsightEmotionnel() {
    if (emotionHistory.length < 5) return;
    
    const derniersMessages = emotionHistory.slice(-10);
    const emotionsFiltrees = derniersMessages.filter(e => e.emotion !== "neutre");
    
    if (emotionsFiltrees.length < 3) return;
    
    // Analyser la tendance
    const compteEmotions = {};
    emotionsFiltrees.forEach(e => {
        compteEmotions[e.emotion] = (compteEmotions[e.emotion] || 0) + 1;
    });
    
    const emotionDominante = Object.keys(compteEmotions).reduce((a, b) => 
        compteEmotions[a] > compteEmotions[b] ? a : b
    );
    
    const pourcentage = (compteEmotions[emotionDominante] / emotionsFiltrees.length * 100).toFixed(0);
    
    if (pourcentage > 60) {
        setTimeout(() => {
            ajouterMessage(
                `💭 En observant nos échanges, je remarque que l'émotion de ${emotionsData[emotionDominante].nom_complet.toLowerCase()} revient régulièrement (${pourcentage}% du temps). ${emotionsData[emotionDominante].conseils[1] || "Prends soin de toi."}`,
                "ia-insight"
            );
        }, 1000);
    }
}

// -----------------------------
// Fonction envoyer améliorée
// -----------------------------
function envoyer() {
    const inputField = document.getElementById("prompt-user-input");
    const text = inputField.value.trim();
    
    if (text === "") return;
    
    // Empêcher l'envoi de messages trop courts sans substance
    if (text.length < 3) {
        ajouterMessage("Ton message semble très court. Peux-tu développer un peu plus ce que tu ressens?", "ia");
        inputField.value = "";
        return;
    }
    
    // Affichage du message utilisateur
    ajouterMessage(text, "user");
    messageCount++;
    
    // Détecter l'émotion avec l'algorithme amélioré
    const detection = detecterEmotion(text);
    
    // Ajouter à l'historique
    emotionHistory.push(detection);
    
    // Trouver une réponse adaptée
    const reponseData = trouverReponseContextuelle(text, detection);
    
    // Afficher la réponse après un délai réaliste
    const delaiReponse = 500 + Math.random() * 1000; // Entre 500ms et 1500ms
    
    setTimeout(() => {
        ajouterMessage(reponseData.reponse, "ia");
        
        // Ajouter une indication d'émotion détectée (optionnel, pour la transparence)
        if (reponseData.emotion !== "neutre" && reponseData.type !== "neutre") {
            setTimeout(() => {
                const emotionName = emotionsData[reponseData.emotion].nom_complet;
                ajouterMessage(`(J'ai perçu principalement de la ${emotionName.toLowerCase()} dans ton message)`, "ia-subtle");
            }, 300);
        }
        
        // Fournir un insight périodique (tous les 5 messages)
        if (messageCount % 5 === 0) {
            fournirInsightEmotionnel();
        }
        
        // Analyser l'évolution émotionnelle
        const analyse = analyserEvolutionEmotionnelle();
        if (analyse) {
            setTimeout(() => {
                ajouterMessage(`💡 Insight: ${analyse.conseil}`, "ia-insight");
            }, 800);
        }
    }, delaiReponse);
    
    inputField.value = "";
    
    // Donner le focus pour le prochain message
    setTimeout(() => inputField.focus(), 100);
}

// -----------------------------
// Fonction d'affichage des messages améliorée
// -----------------------------
function ajouterMessage(message, type) {
    const messagesDiv = document.getElementById("messages");
    const msgDiv = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    msgDiv.classList.add("msg", type);
    
    // Ajouter un timestamp réaliste
    const timeSpan = document.createElement("span");
    timeSpan.classList.add("msg-time");
    timeSpan.textContent = timestamp;
    
    // Contenu du message
    const contentSpan = document.createElement("span");
    contentSpan.classList.add("msg-content");
    contentSpan.textContent = message;
    
    msgDiv.appendChild(timeSpan);
    msgDiv.appendChild(contentSpan);
    
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    // Animation d'arrivée réaliste
    msgDiv.style.opacity = "0";
    msgDiv.style.transform = "translateY(10px)";
    
    setTimeout(() => {
        msgDiv.style.transition = "opacity 0.3s, transform 0.3s";
        msgDiv.style.opacity = "1";
        msgDiv.style.transform = "translateY(0)";
    }, 10);
}

// -----------------------------
// Écouteurs d'événements améliorés
// -----------------------------
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById("prompt-user-input");
    
    // Écoute la touche Entrée
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            envoyer();
        }
    });
    
    // Permettre Shift+Enter pour un saut de ligne
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.shiftKey) {
            // Laisser le saut de ligne se produire naturellement
            return;
        }
    });
    
    // Donner le focus à l'input au chargement
    setTimeout(() => inputField.focus(), 300);
    
    // Message de bienvenue contextuel
    setTimeout(() => {
        const heures = new Date().getHours();
        let salutation = "";
        
        if (heures < 12) salutation = "Bonjour";
        else if (heures < 18) salutation = "Bon après-midi";
        else salutation = "Bonsoir";
        
        ajouterMessage(
            `${salutation}. Je suis là pour t'écouter et t'accompagner dans l'exploration de tes émotions. Parle-moi de ce que tu ressens en ce moment.`,
            "ia"
        );
    }, 800);
});

// -----------------------------
// Fonction utilitaire pour réinitialiser la conversation
// -----------------------------
function reinitialiserConversation() {
    if (confirm("Voulez-vous vraiment réinitialiser la conversation? L'historique émotionnel sera perdu.")) {
        emotionHistory = [];
        messageCount = 0;
        sessionStartTime = new Date();
        
        const messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML = '';
        
        ajouterMessage("Conversation réinitialisée. Parle-moi de ce que tu ressens en ce moment.", "ia");
    }
}