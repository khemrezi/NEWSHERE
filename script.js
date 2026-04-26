const btn = document.getElementById('anniversaryBtn');
const mainCard = document.getElementById('mainCard');
const letterContainer = document.getElementById('loveLetter');
const textTarget = document.getElementById('typewriter');
const touchHereBtn = document.getElementById('touchHereBtn');
const questionArea = document.getElementById('questionArea');
const currentQuestion = document.getElementById('currentQuestion');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const message = `From the moment you entered my life, everything changed in a way I can hardly describe. My love for you, Oun Ta, isn’t just a feeling; it is my gravity, the force that keeps me grounded while simultaneously making me feel like I’m soaring. I love you to infinity, reaching toward a horizon that never ends. It is a deep, unshakable devotion that grows stronger with every sunrise we share. You are the person I’ve chosen, not just for now, but for every version of the future I imagine. I don’t just want to walk beside you; I want to build a world with you, one where your happiness is my mission, because you are the one who makes me happy in my entire life. Before you, I didn’t know life could feel this bright or this meaningful.

I want to live with you forever, sharing the small, mundane joys of daily life just as much as the big milestones. I imagine us waking up in a home filled with the warmth of our shared history, growing old together while keeping the spark of our youth alive. My greatest ambition is to be the person who takes care of you—to be your sanctuary when the world feels too loud and your strength when you feel weary. Whether it’s shielding you from the storms of life or simply being the hand you hold during a walk, I promise to be your constant. I want to protect your dreams, cherish your heart, and ensure that you never have to wonder if you are loved.

In return, I carry one simple, quiet hope in my soul: I only wish that you will love me as I do. My heart is yours, and I’ve placed it fully in your hands. It’s a little heart, but it’s filled with so much love for you—please, don't break my little lovely heart. You are my home, my peace, and my greatest blessing. To love you forever isn't a duty; it is the most beautiful privilege of my life, and I will spend every day proving that my heart belongs to you and only you.`;

btn.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) { setTimeout(createHeart, i * 100); }
    mainCard.style.opacity = '0';
    setTimeout(() => {
        mainCard.classList.add('hidden');
        letterContainer.classList.remove('hidden');
        startTyping();
    }, 800);
});

function startTyping() {
    let i = 0;
    function type() {
        if (i < message.length) {
            textTarget.innerHTML += message.charAt(i);
            i++;
            letterContainer.scrollTop = letterContainer.scrollHeight;
            setTimeout(type, 45);
        } else {
            document.getElementById('touchHereContainer').classList.add('show-fade');
            document.getElementById('letterFooter').classList.add('show-fade');
        }
    }
    type();
}

let yesSize = 1;
let step = 1;

noBtn.addEventListener('click', () => {
    yesSize += 0.6;
    yesBtn.style.transform = `scale(${yesSize})`;
    if (yesSize > 5) noBtn.style.display = 'none';
});

yesBtn.addEventListener('click', () => {
    if (step === 1) {
        currentQuestion.innerHTML = "don't brake ma little lovely and loyalty heart, okay?";
        yesSize = 1;
        yesBtn.style.transform = 'scale(1)';
        step = 2;
    } else {
        alert("Yay! I love you so much, Oun Ta! 💜💍");
    }
});

touchHereBtn.addEventListener('click', () => {
    document.getElementById('touchHereContainer').classList.add('hidden');
    questionArea.classList.remove('hidden');
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💜';
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}