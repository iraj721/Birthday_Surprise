// ===================== PAGE NAVIGATION =====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    if (pageId === 'page-birthday' || pageId === 'page-final') {
        createConfetti(30);
    }

    if (pageId === 'page-gift') {
        setTimeout(() => createFloatingHearts(8), 500);
    }

    window.scrollTo(0, 0);
}

// ===================== INTRO PAGE =====================
function goToWillYouSee() {
    createFloatingHearts(10);
    setTimeout(() => {
        showPage('page-choice');
    }, 400);
}

// ===================== CHOICE PAGE =====================
let noClickCount = 0;
const noMessages = [
    "Aww, please? 🥺",
    "Pretty please? 💖",
    "Don't break my heart! 💔",
    "Last chance... 😢",
    "Okay fine, I'll cry now 😭"
];

function handleNoClick() {
    const noHeart = document.getElementById('noHeart');
    const msg = document.getElementById('choiceMsg');
    
    noHeart.classList.add('shake');
    setTimeout(() => noHeart.classList.remove('shake'), 500);
    
    if (noClickCount < noMessages.length) {
        msg.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        msg.textContent = "You HAVE to say YES! 😤💕";
    }
    
    const randomX = (Math.random() - 0.5) * 30;
    const randomY = (Math.random() - 0.5) * 30;
    noHeart.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    setTimeout(() => {
        noHeart.style.transform = 'translate(0, 0)';
    }, 600);
}

function handleYesClick() {
    createConfetti(40);
    createFloatingHearts(15);
    
    const yesHeart = document.getElementById('yesHeart');
    yesHeart.style.transform = 'scale(1.3)';
    
    setTimeout(() => {
        showPage('page-password');
    }, 800);
}

// ===================== PASSWORD SYSTEM =====================
let passcode = "";
const correctPasscode = "2008";

function enterDigit(digit) {
    if (passcode.length < 4) {
        passcode += digit;
        updatePasscodeDisplay();
        document.getElementById('error-msg').textContent = "";

        if (passcode.length === 4) {
            setTimeout(checkPasscode, 200);
        }
    }
}

function clearPasscode() {
    passcode = "";
    updatePasscodeDisplay();
    document.getElementById('error-msg').textContent = "";
}

function updatePasscodeDisplay() {
    for (let i = 1; i <= 4; i++) {
        const box = document.getElementById('box' + i);
        if (i <= passcode.length) {
            box.textContent = '•';
            box.classList.add('filled');
        } else {
            box.textContent = '';
            box.classList.remove('filled');
        }
    }
}

function checkPasscode() {
    if (passcode === correctPasscode) {
        document.getElementById('error-msg').textContent = "✨ Unlocking...";
        document.getElementById('error-msg').style.color = "#4caf50";
        createConfetti(25);
        createFloatingHearts(10);
        setTimeout(() => {
            showPage('page-birthday');
        }, 800);
    } else {
        document.getElementById('error-msg').textContent = "❌ Wrong passcode! Try again";
        document.getElementById('error-msg').style.color = "#e53935";
        passcode = "";
        setTimeout(updatePasscodeDisplay, 400);
    }
}

// ===================== CONFETTI SYSTEM =====================
function createConfetti(count = 40) {
    const colors = ['#ff6b9d', '#ff4081', '#ffd700', '#ff9a9e', '#48dbfb', '#feca57', '#ff9ff3', '#a29bfe', '#fd79a8'];
    const container = document.getElementById('confetti-container');

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 1.5 + 's';

        const shapes = ['50%', '0%', '0% 50%'];
        confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// ===================== FLOATING HEARTS =====================
function createFloatingHearts(count = 15) {
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝'];
    const container = document.getElementById('floating-hearts-container');

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 16 + 14) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
}

// ===================== WISH JAR =====================
const wishTexts = [
    "🌟 May your 18th year be filled with moments that take your breath away.",
    "😊 May you always find a reason to smile, even on the hardest days.",
    "✨ May every dream you dare to dream come true, one by one.",
    "💕 May you be surrounded by people who love you for exactly who you are.",
    "🎉 May this new chapter of adulthood bring you endless adventures and joy.",
    "💖 May you always know how deeply, completely, and unconditionally you are loved."
];

let openedLetters = 0;

function openJar() {
    const closedScene = document.getElementById('jarClosedScene');
    const openedScene = document.getElementById('jarOpenedScene');
    
    createConfetti(30);
    createFloatingHearts(15);
    
    closedScene.style.display = 'none';
    openedScene.style.display = 'flex';
}

function openLetter(index) {
    const letters = document.querySelectorAll('.mini-letter');
    const letter = letters[index];
    
    if (letter.classList.contains('opened')) return;
    
    letter.classList.add('opened');
    openedLetters++;
    
    document.getElementById('jarProgress').textContent = `Opened: ${openedLetters} / 6`;
    
    const modal = document.getElementById('letterModal');
    const wishText = document.getElementById('modalWishText');
    wishText.textContent = wishTexts[index];
    modal.style.display = 'flex';
    
    createFloatingHearts(5);
    
    if (openedLetters === 6) {
        setTimeout(() => {
            createConfetti(50);
            createFloatingHearts(20);
        }, 500);
    }
}

function closeLetterModal(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close')) return;
    document.getElementById('letterModal').style.display = 'none';
}

// ===================== GIFT OPENING =====================
let giftOpened = false;

function openGift() {
    if (giftOpened) return;
    giftOpened = true;

    const giftBox = document.getElementById('gift-box');
    const giftText = document.getElementById('gift-text');
    const giftScene = document.getElementById('gift-scene');
    const giftReveal = document.getElementById('gift-reveal');

    giftBox.style.transform = 'scale(0.8) rotate(10deg)';
    giftBox.style.opacity = '0';
    giftText.style.opacity = '0';

    createConfetti(50);
    createFloatingHearts(20);

    setTimeout(() => {
        giftScene.style.display = 'none';
        giftReveal.style.display = 'block';
        createFloatingHearts(10);
    }, 400);
}

// ===================== MAGICAL HEART CLICK =====================
let magicTriggered = false;

const magicMessageText = `Manahil...

I don't say this enough, but you are the best thing that ever happened to me.

When the world feels heavy, you are my light. When I feel lost, you are my home. When I cry, you are the only one who can make me laugh through my tears.

I know we fight. I know we annoy each other. I know we steal each other's clothes and eat each other's food. But I also know that no one in this entire universe understands me the way you do.

You are my first friend, my forever friend, and my favorite person. I don't know what I did to deserve a sister like you, but I thank God every single day for you.

Happy 18th Birthday, my love. I promise to always stand by you, to cheer for you, to fight for you, and to love you — today, tomorrow, and always.

You are my heart. You are my soul. You are my everything.`;

function triggerMagic() {
    if (magicTriggered) return;
    magicTriggered = true;

    const revealHeart = document.getElementById('reveal-heart');
    const giftReveal = document.getElementById('gift-reveal');
    const magicMessage = document.getElementById('magic-message');
    const typewriterEl = document.getElementById('magic-typewriter');

    revealHeart.style.transform = 'scale(2)';
    revealHeart.style.opacity = '0';

    createConfetti(80);
    createFloatingHearts(30);

    for (let i = 0; i < 12; i++) {
        setTimeout(() => createFloatingHearts(5), i * 200);
    }

    setTimeout(() => {
        giftReveal.style.display = 'none';
        magicMessage.style.display = 'block';

        typeWriterEffect(typewriterEl, magicMessageText, 40);

        setInterval(() => createFloatingHearts(3), 1500);
    }, 600);
}

function typeWriterEffect(element, text, speed) {
    element.innerHTML = '';
    let i = 0;
    const lines = text.split('\n');
    let currentLine = 0;
    let currentChar = 0;

    function type() {
        if (currentLine >= lines.length) {
            element.style.borderRight = 'none';
            return;
        }

        const line = lines[currentLine];
        if (currentChar < line.length) {
            element.innerHTML += line.charAt(currentChar);
            currentChar++;
            setTimeout(type, speed);
        } else {
            element.innerHTML += '<br><br>';
            currentLine++;
            currentChar = 0;
            setTimeout(type, speed * 3);
        }
    }

    element.style.borderRight = '2px solid #ff4081';
    element.style.paddingRight = '4px';
    element.style.display = 'inline';

    type();
}

// ===================== FINAL PAGE MAGIC =====================
function triggerFinalMagic() {
    createConfetti(60);
    createFloatingHearts(25);

    const btn = document.querySelector('.heart-btn');
    btn.style.transform = 'scale(1.5)';
    btn.innerHTML = '💖';

    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.innerHTML = '❤️';
    }, 800);

    const specialMsg = document.createElement('div');
    specialMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255,255,255,0.98);
        padding: 30px 25px;
        border-radius: 24px;
        box-shadow: 0 20px 60px rgba(255,107,157,0.4);
        border: 3px solid #ff6b9d;
        text-align: center;
        z-index: 10000;
        animation: pageFadeIn 0.5s ease;
        max-width: 320px;
        width: 90%;
    `;
        specialMsg.innerHTML = `
        <div style="font-size:50px;margin-bottom:10px;">🥺💕</div>
        <div style="font-family:'Dancing Script',cursive;font-size:24px;color:#ff4081;margin-bottom:10px;">I Love You, Manahil</div>
        <div style="font-size:14px;color:#666;line-height:1.6;">Thank you for being the most amazing sister in the world. This day is all about YOU! 🎂✨</div>
        <button onclick="this.parentElement.remove()" style="margin-top:15px;padding:10px 24px;background:linear-gradient(135deg,#ff6b9d,#ff4081);color:white;border:none;border-radius:25px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Quicksand',sans-serif;">Close 💝</button>
    `;
    document.body.appendChild(specialMsg);
}

// ===================== INITIAL LOAD =====================
window.onload = function() {
    createConfetti(20);
};

// Keyboard support for password
window.addEventListener('keydown', function(e) {
    const passwordPage = document.getElementById('page-password');
    if (!passwordPage.classList.contains('active')) return;

    const key = e.key;
    if (key >= '0' && key <= '9') {
        enterDigit(parseInt(key));
    } else if (key === 'Backspace' || key === 'Delete') {
        clearPasscode();
    } else if (key === 'Enter') {
        checkPasscode();
    }
});

// ===================== CERTIFICATE DOWNLOAD =====================
function downloadCertificate() {
    const certificateContent = document.getElementById('certificateContent');
    const downloadBtn = document.querySelector('.download-cert-btn');
    
    downloadBtn.disabled = true;
    downloadBtn.textContent = '⏳ Processing...';
    
    html2canvas(certificateContent, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: '#f5f1de',
        allowTaint: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Manahil-Birthday-Certificate.png';
        link.click();
        
        downloadBtn.disabled = false;
        downloadBtn.textContent = '📥 Download Certificate';
        
        createFloatingHearts(15);
    }).catch(err => {
        console.error('Error generating certificate:', err);
        downloadBtn.disabled = false;
        downloadBtn.textContent = '📥 Download Certificate';
        alert('Error downloading certificate. Please try again.');
    });
}