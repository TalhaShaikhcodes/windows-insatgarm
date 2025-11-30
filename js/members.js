// JavaScript for dynamic effects and content

// 1. Matrix Falling Code Effect
document.addEventListener('DOMContentLoaded', () => {
    const matrixBg = document.getElementById('matrixBackground');
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';
    const numColumns = Math.floor(window.innerWidth / 15); // Adjust based on font size

    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = `${i * 15}px`;
        column.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10 second fall
        column.style.animationDelay = `${Math.random() * -10}s`; // Stagger start times

        let columnText = '';
        for (let j = 0; j < 50; j++) { // 50 characters per column
            columnText += chars[Math.floor(Math.random() * chars.length)] + '\n';
        }
        column.textContent = columnText;
        matrixBg.appendChild(column);
    }

    // 2. Last Updated Date
    const lastUpdatedElement = document.getElementById('lastUpdatedDate');
    if (lastUpdatedElement) {
        const now = new Date();
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        lastUpdatedElement.textContent = now.toLocaleDateString('en-US', options).replace(/,/, '');
    }

    // 3. Status bar scrolling text (classic Geocities effect)
    let message = ":: Welcome to The Coolest Group's Cyber Resources :: Knowledge is Power :: Stay Vigilant :: ";
    let scrollPos = 0;
    function scrollStatusBar() {
        window.status = message.substring(scrollPos, message.length) + message.substring(0, scrollPos);
        scrollPos++;
        if (scrollPos > message.length) {
            scrollPos = 0;
        }
        setTimeout(scrollStatusBar, 150); // Adjust scroll speed
    }
    scrollStatusBar();
});