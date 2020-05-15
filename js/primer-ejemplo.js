let game = new Game([
    {
        word: 'tomate',
        incorrect: ['animal', 'cuadrado', 'lento'],
        correct: 'rojo'
    },
    {
        word: 'rojo',
        incorrect: ['limón', 'pariente', 'lente'],
        correct: 'amarillo'
    },
    {
        word: 'amarillo',
        incorrect: ['hermano', 'rápido', 'agua'],
        correct: 'plátano'
    },
    {
        word: 'plátano',
        incorrect: ['color', 'animal', 'rápido'],
        correct: 'alimento'
    }
])
document.querySelector('.DH_play-button').addEventListener('click', (event) => {
    document.querySelector('.DH_instructions').style.display = 'none'
})
game.start()