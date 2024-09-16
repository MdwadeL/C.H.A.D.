/* FLASHCARD FLASHCARD FLASHCARD */
const flashcard = document.getElementById('flashcard');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const checkButton = document.getElementById('check-button');
const languageSelector = document.getElementById('language-selector');

const flashcards = {
    arabic: [
        { term: "سلام", definition: "Hello" },
        { term: "ماشي", definition: "Okay" },
        { term: "معزة", definition: "Goat" },
        { term: "أحمر", definition: "Red" },
        { term: "حافلة", definition: "Bus" },
        { term: "يُسلِّم", definition: "Hand" },
        { term: "خمسة", definition: "Five" },
        { term: "سحاب", definition: "Clouds" },
        { term: "اليوم", definition: "Today" },
        { term: "أمس", definition: "Yesterday" },
        { term: "ساعة", definition: "Hour" },
        { term: "دقيقة ", definition: "Minute" },
        { term: "أسبوع ", definition: "Week" },
        { term: "شهر", definition: "Month" },
        { term: "جسر", definition: "Bridge" },
        { term: "نفق", definition: "Tunnel" },
        { term: "موقف سيارات", definition: "Car park" },
        { term: "السكك الحديدية", definition: "Railway" },
        { term: "شارع", definition: "Street" },
        { term: "شاطئ", definition: "Beach" },
        { term: "مركز تسوق", definition: "Shopping mall" },
        { term: "مسجد", definition: "Mosque" },
        { term: "سفارة", definition: "Embassy" },
        { term: "مخبز", definition: "Bakery" },
        { term: "مطار", definition: "Airport" },
        { term: "محطة حافلات", definition: "Bus station" },
        { term: "محطة قطار", definition: "Train station" },
        { term: "تذكرة", definition: "Ticket" },
        { term: "صعب", definition: "Hard" },
        { term: "سهل", definition: "Easy" },
        { term: "جاف", definition: "Dry" },
        { term: "رطب", definition: "Wet" },
        { term: "مبكرًا", definition: "Early" },
        { term: "متأخر", definition: "Late" },
        { term: "سريع", definition: "Fast" },
        { term: "يسار", definition: "Left" },
        { term: "أيمن", definition: "Right" },
        { term: "بارد", definition: "Cold" },
        { term: "ساخن", definition: "Hot" },
        { term: "ببطء", definition: "Slowly" },
        { term: "بصوت عالي", definition: "Loudly" },
        { term: "بهدوء", definition: "Quietly" },
        { term: "هناك", definition: "There" },
        { term: "هنا", definition: "Here" },
        { term: "أول", definition: "First" },
        { term: "بعدها", definition: "Then" },
        { term: "أحيانًا", definition: "Sometimes " },
        { term: "جداً", definition: "Very" }
    ],
    gujarati: [
        { term: "હાય", definition: "hi" },
        { term: "લાલ", definition: "red" },
        { term: "ઝાડ", definition: "tree" },
        { term: "નમસ્તે", definition: "Hello" },
        { term: "વિદ્યા", definition: "Knowledge" },
        { term: "પાણી", definition: "Water" },
        { term: "મિત્ર", definition: "Friend" },
        { term: "ખુશ", definition: "Happy" },
        { term: "ઘર", definition: "House" },
        { term: "કમળ", definition: "Lotus" },
        { term: "આકાશ", definition: "Sky" },
        { term: "દૂધ", definition: "Milk" },
        { term: "ફૂલ", definition: "Flower" },
        { term: "ચંદ્ર", definition: "Moon" },
        { term: "પ્રેમ", definition: "Love" },
        { term: "કપડા", definition: "Clothes" },
        { term: "મીઠું", definition: "Salt" },
        { term: "મીઠાઈ", definition: "Sweets" },
        { term: "હાથ", definition: "Hand" },
        { term: "નજીક", definition: "Near" },
        { term: "દુર", definition: "Far" },
        { term: "મીઠું", definition: "Sweet" },
        { term: "ખાટું", definition: "Sour" },
        { term: "ગુસ્સો", definition: "Anger" },
        { term: "શાંતિ", definition: "Peace" },
        { term: "પરમાત્મા", definition: "God" },
        { term: "વિશ્વ", definition: "World" },
        { term: "ભાષા", definition: "Language" },
        { term: "કાળજી", definition: "Care" },
        { term: "શિક્ષણ", definition: "Education" },
        { term: "સપના", definition: "Dream" },
        { term: "સંસ્કૃતિ", definition: "Culture" },
        { term: "સંગીત", definition: "Music" }    ]
};

let currentLanguage = 'arabic';
let currentCardIndex = 0;

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flip');
});

nextButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards[currentLanguage].length;
    updateCard();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

backButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + flashcards[currentLanguage].length) % flashcards[currentLanguage].length;
    updateCard();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateCard() {
    const card = flashcards[currentLanguage][currentCardIndex];
    document.querySelector('.front').textContent = card.term;
    document.querySelector('.back').textContent = card.definition;
    flashcard.classList.remove('flip');
}

function displayCard() {
    console.log(`Displaying card in ${currentLanguage} at index ${currentCardIndex}`);
    updateCard();
}

document.addEventListener('DOMContentLoaded', () => {
    languageSelector.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        currentCardIndex = 0;
        displayCard();
    });

    // Display the initial card
    displayCard();
});

/* TRACKPAD TRACKPAD TRACKPAD */
const canvas = document.getElementById('trackpad');
const ctx = canvas.getContext('2d');

let drawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => startDrawing(e.clientX, e.clientY));
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', (e) => draw(e.clientX, e.clientY));
canvas.addEventListener('touchstart', (e) => startDrawing(e.touches[0].clientX, e.touches[0].clientY), { passive: false });
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', (e) => draw(e.touches[0].clientX, e.touches[0].clientY), { passive: false });

function startDrawing(x, y) {
    drawing = true;
    [lastX, lastY] = getEventPosition(x, y);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(x, y) {
    if (!drawing) return;

    const { x: posX, y: posY } = getEventPosition(x, y);
    ctx.lineTo(posX, posY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  [lastX, lastY] = [posX, posY];
}

function getEventPosition(x, y) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: x - rect.left,
    y: y - rect.top
  };
}

document.getElementById('clear-button').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

/*QUICK SETTINGS QUICK SETTINGS QUICK SETTINGS*/
const quickSettings = document.getElementById('quick-settings');
const quickSettingsButton = document.getElementById('quick-settings-button')

quickSettingsButton.addEventListener('click', () => {
    const isQuickSettingsOpen = quickSettings.style.display === 'inline-block';
    quickSettings.style.display = isQuickSettingsOpen ? 'none' : 'inline-block';
    quickSettingsButton.style.transform = isQuickSettingsOpen ? 'rotate(0deg)' : 'rotate(180deg)';
})

