const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        // Bright yellow color:
        color,
        size: random(10, 20),
        style: {
            // Pick a random spot in the available space
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
            // Float sparkles above sibling content
            zIndex: 2,
        },
    }
}
