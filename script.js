// Global interval variable for stars loop
let starInterval;

// Automatically launch falling stars when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startStarShower();
});

// Creates tiny falling stars randomly across the screen width
function startStarShower() {
    const container = document.getElementById('star-container');
    container.style.display = 'block';
    
    // Spawn a star every 150 milliseconds
    starInterval = setInterval(() => {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Randomize sizes (between 8px and 20px) and positions
        const size = Math.random() * 12 + 8;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        
        // Randomize falling speed (3 to 6 seconds)
        const duration = Math.random() * 3 + 3;
        star.style.animationDuration = `${duration}s`;
        
        // Random choice of star characters or sparkles
        const shapes = ['★', '✦', '✧', '•'];
        star.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        star.style.fontSize = `${size}px`;

        container.appendChild(star);

        // Safely remove the element after its falling animation completes
        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }, 150);
}

function stopStarShower() {
    clearInterval(starInterval);
    document.getElementById('star-container').style.display = 'none';
    document.getElementById('star-container').innerHTML = '';
}

// Screen 1 Logic
function sayYes1() {
    document.getElementById('q1-text').innerText = "so YOU ARE MY CUTIE GF, PEW PEW PEW";
    document.getElementById('s1-buttons').style.display = "none";
    document.getElementById('dig-in-btn').style.display = "inline-block";
}
function sayNo1() {
    document.getElementById('modal1').classList.add('active');
}
function closeModal1() {
    document.getElementById('modal1').classList.remove('active');
}

// Screen 2 Logic (Floating ocean wave texts)
function startFloating() {
    document.getElementById('screen1').classList.remove('active');
    let screen2 = document.getElementById('screen2');
    screen2.classList.add('active');
    
    let words = ['pew', 'cheww', 'blehhh'];
    for(let i = 0; i < 35; i++) {
        let span = document.createElement('span');
        span.className = 'floating-text';
        span.innerText = words[Math.floor(Math.random() * words.length)];
        span.style.left = Math.random() * 90 + 'vw';
        span.style.top = Math.random() * 90 + 'vh';
        span.style.animationDuration = (Math.random() * 2 + 3) + 's';
        span.style.animationDelay = (Math.random() * 2) + 's';
        screen2.appendChild(span);
    }

    setTimeout(() => {
        screen2.classList.remove('active');
        document.getElementById('screen3').classList.add('active');
        startTypewriter(); 
    }, 10000); 
}

// Typewriter Array Data
const letterParagraphs = [
    "Whenever I wake up, the very first thing that crosses my mind is you. It is like my brain is permanently wired to think about your beautiful smile the exact second my eyes open. You are my peerless; there is absolutely no one else in this whole wide world who can even come close to comparing to you. You are my only one, the person who holds my entire heart in the palm of your hands. Every single day with you feels like an incredible blessing, and I just can't get enough of you. From the way you talk to the way you laugh, everything about you just draws me in completely. I never knew I could feel this deeply and intensely for someone until you came into my life and changed everything for the better. You make the ordinary days feel so special, and I just want to keep making you happy for as long as I can. My world completely revolves around you, and honestly, I wouldn't have it any other way. You are my cutie, my peace, my motivation, and my greatest joy. Just knowing that you are mine makes me feel like the luckiest guy alive.",
    "But because I love you so much, sometimes my feelings get the best of me. I get this really jealous feeling when you talk to your friends because I just want to talk to you so much. I want all your attention to myself, and I can't help but wish I was the only one making you smile in those moments. And I get this incredibly sad feeling when you're ignoring me or when you are busy, even if you don't mean to, because I miss your voice and your texts so much it actually hurts. My heart feels heavy when we aren't talking. I care about you more than words could ever possibly explain, and I constantly have this worry feeling about you when we aren't together. Are you eating well? Are you resting enough? I just want to wrap you up, protect you from everything, and keep you safe in my arms.",
    "Happy 3rd month anniversiry bebe.",
    "I wish for your health to always be strong and for your studies to go perfectly. Don't stress too much about school, okay? I am always here to comfort you, to hold you, and to be your safe place whenever you are tired. You are doing great, and I love you."
];

let currentPara = 0;
let currentChar = 0;
const letterBody = document.getElementById('letter-body');

function startTypewriter() {
    if (currentPara < letterParagraphs.length) {
        if (currentChar === 0) {
            let p = document.createElement('p');
            p.className = 'letter';
            if (currentPara === 2) {
                p.style.fontWeight = 'bold';
                p.style.fontSize = '1.5rem';
                p.style.color = '#8E44AD';
            }
            letterBody.appendChild(p);
        }
        
        let targetPs = letterBody.getElementsByClassName('letter');
        let activeP = targetPs[targetPs.length - 1];
        
        activeP.innerHTML += letterParagraphs[currentPara].charAt(currentChar);
        currentChar++;
        
        if (currentChar < letterParagraphs[currentPara].length) {
            setTimeout(startTypewriter, 15); 
        } else {
            currentPara++;
            currentChar = 0;
            setTimeout(startTypewriter, 400); 
        }
    } else {
        document.getElementById('end-letter-btn').style.display = 'inline-block';
    }
}

// Screen 4 Logic (Countdown & Hiding Background Details)
function startCountdown() {
    // Hide side hearts AND stop falling stars to keep boom screen beautifully pristine!
    document.getElementById('side-decor').style.display = 'none';
    stopStarShower();

    document.getElementById('screen3').classList.remove('active');
    let screen4 = document.getElementById('screen4');
    screen4.classList.add('active');
    
    let count = 10;
    let counterEl = document.getElementById('counter');
    
    let interval = setInterval(() => {
        count--;
        if (count > 0) {
            counterEl.innerText = count;
        } else {
            clearInterval(interval);
            counterEl.style.display = 'none';
            
            let boomContainer = document.getElementById('boom-container');
            boomContainer.style.display = 'block';
            
            triggerBoomSequence(1); 
        }
    }, 1000);
}

function triggerBoomSequence(currentBoomCount) {
    let boomContainer = document.getElementById('boom-container');
    boomContainer.innerHTML = '';
    
    if (currentBoomCount <= 3) {
        let textDiv = document.createElement('div');
        textDiv.className = 'boom-text-style';
        textDiv.innerText = 'បងស្រឡាញ់អូន';
        boomContainer.appendChild(textDiv);
        
        void textDiv.offsetWidth;
        textDiv.classList.add('animate-boom');
        
        setTimeout(() => {
            triggerBoomSequence(currentBoomCount + 1);
        }, 2000); 
    } else {
        // Bring decorative hearts and falling stars back for the quiz screens!
        document.getElementById('side-decor').style.display = 'block';
        startStarShower();

        document.getElementById('screen4').classList.remove('active');
        document.getElementById('screen5').classList.add('active');
        loadQuestion();
    }
}

// Screen 5 Logic (Questions)
const questions = [
    "DO YOU LOVE ME?",
    "HMM DON'T IGNORE ME, OKAY?",
    "DON'T BRAKE MA LITTLE LOVELY HEART, OKAY?",
    "B SL O AND B OT JNG LOSE O TE, DON'T LEAVE B AND WE'LL BE TOGETHER, OKAY?"
];
let currentQIndex = 0;
let noAnswers = [];

function loadQuestion() {
    if (currentQIndex < questions.length) {
        document.getElementById('quiz-q').innerText = questions[currentQIndex];
    } else {
        showResults();
    }
}

function answerYes() {
    currentQIndex++;
    loadQuestion();
}

function answerNo() {
    document.getElementById('modal-quiz').classList.add('active');
}

function cancelNo() {
    document.getElementById('modal-quiz').classList.remove('active');
}

function confirmNo() {
    document.getElementById('modal-quiz').classList.remove('active');
    noAnswers.push(questions[currentQIndex]);
    currentQIndex++;
    loadQuestion();
}

// Screen 6 Logic (Results + Scripting Effect)
function showResults() {
    document.getElementById('screen5').classList.remove('active');
    let screen6 = document.getElementById('screen6');
    screen6.classList.add('active');

    if (noAnswers.length === 0) {
        document.getElementById('final-msg').innerText = "yayayayayyay b sl o bebe ❤️";
        setTimeout(typeScriptGfName, 1000); 
    } else if (noAnswers.length >= 2) {
        document.getElementById('final-msg').innerText = "oh i see";
        document.getElementById('analytics-box').style.display = "block";
        
        let ul = document.getElementById('no-list');
        noAnswers.forEach(q => {
            let li = document.createElement('li');
            li.innerText = q;
            ul.appendChild(li);
        });
    } else {
        document.getElementById('final-msg').innerText = "oh i see... just one no, but I still love you bebe ❤️";
    }
}

function typeScriptGfName() {
    // Switched to mixed case so it looks incredibly clean and readable!
    const gfName = "Kim Sovannniasa";
    let gfNameEl = document.getElementById('gf-name');
    let idx = 0;
    
    function script() {
        if (idx < gfName.length) {
            gfNameEl.innerHTML += gfName.charAt(idx);
            idx++;
            setTimeout(script, 180); 
        }
    }
    script();
}