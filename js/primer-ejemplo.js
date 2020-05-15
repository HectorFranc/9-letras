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
game.start()