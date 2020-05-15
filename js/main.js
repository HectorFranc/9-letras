function shuffle(array) {
    let tmpArray = [...array]
    return tmpArray.sort(() => Math.random() - 0.5)
}

class Game {
    constructor(slides) {
        this.slides = slides
        this.actualIndex = 0
        this.optionsHTMLElements = document.getElementsByClassName('DH_option')
        this.attempt = this.attempt.bind(this)
    }
    start() {
        this.actualIndex = 0
        this.updateLevel()
    }
    nextLevel() {
        this.actualIndex += 1
        if (this.actualIndex >= this.slides.length) {
            alert('Felicidades. ¡Buen trabajo!')
            this.start()
        }
        this.updateLevel()
    }
    updateLevel() {
        this.setProgress()
        this.populatePhrases()
        this.addEventsListeners()
    }
    addEventsListeners() {
        for(let optionHTMLElemnt of this.optionsHTMLElements) {
            optionHTMLElemnt.addEventListener('click', this.attempt)
        }
    }
    removeEventsListeners() {
        console.log('H')
        for(let optionHTMLElemnt of this.optionsHTMLElements) {
            optionHTMLElemnt.removeEventListener('click', this.attempt)
        }
    }
    attempt(event) {
        if (event.target.innerText === this.slides[this.actualIndex]['correct']) {
            this.removeEventsListeners()
            setTimeout(this.nextLevel.bind(this), 200)
        } else {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance('Intenta de nuevo'))
        }
    }
    setProgress() {
        let progress = document.querySelector('.DH_progress > progress')
        progress.value = 100 * (this.actualIndex / this.slides.length)
    }
    populatePhrases() {
        this.populateActualWords()
        this.populateActualOptions()
    }
    populateActualWords() {
        let lastFirst = document.getElementById('DH_last-first')
        let lastSecond = document.getElementById('DH_last-second')
        let actualWord = document.querySelector('.DH_words__actual')

        if (this.actualIndex > 1) {
            lastFirst.innerText = this.slides[this.actualIndex-2]['word']
            lastSecond.innerText = this.slides[this.actualIndex-1]['word']

            lastSecond.style.display = 'block'
            lastFirst.style.display = 'block'

        } else if ( this.actualIndex > 0) {
            lastFirst.style.display = 'none'

            lastSecond.innerHTML = this.slides[this.actualIndex-1]['word']
            lastSecond.style.display = 'block'
        } else {
            lastFirst.style.display = 'none'
            lastSecond.style.display = 'none'
        }

        actualWord.innerText = this.slides[this.actualIndex]['word']
    }
    populateActualOptions() {
        let allOptions = this.slides[this.actualIndex]['incorrect'].concat(this.slides[this.actualIndex]['correct'])
        allOptions = shuffle(allOptions)

        for(let i=0; i < allOptions.length; i++) {
            this.optionsHTMLElements[i].innerText = allOptions[i]
        }
    }
}