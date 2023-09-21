let sizeOfScreen;

if (window.innerWidth <= 700) {
    sizeOfScreen = Math.floor(window.innerWidth / 100) * 100;
} else {
    sizeOfScreen = 700;
}

export let screenWidth = sizeOfScreen - ((sizeOfScreen / 100) * 10);