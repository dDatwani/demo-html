class QuizeView {
    #parentElement = document.querySelector('#main-container');
    #data = null;
    #currentQuestion = null;
    #totalQuestion = null;
    #progress = null;
    #maxLimit = 10;
    currentLimit = 0
    callBack = null;
    interval = null;
    render(data, currentQuestion, totalQuestion, callBack) {
        currentQuestion = currentQuestion+1;
        this.#currentQuestion = currentQuestion;
        this.#totalQuestion = totalQuestion;
        this.#progress = currentQuestion / totalQuestion * 100;
        this.#data = data ? data : null;
        this.callBack = callBack ? callBack : null;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
        this.interval = window.setInterval(() => {
            this.currentLimit++;
            const timer = String(this.currentLimit).padStart(2, '0')
            document.querySelector('#timer') ? document.querySelector('#timer').innerHTML = timer : null;
            
            if(this.currentLimit >= this.#maxLimit) {
                this.currentLimit = 0;
                clearInterval();
                if(this.callBack) {
                    this.callBack();
                }
            }
        }, 1000)
    }

    clearInterval() {
        if(this.interval) {
            window.clearInterval(this.interval);
        }
    }

    #clear() {
        this.#parentElement.innerHTML = ''; 
    }

    
    #generateMarkup() {
        return `
            <div class="quize-block">
                <div class="loader">
                    
                    <div class="d-flex justify-content-between">
                        <div class="loader-text"><span class="current">${this.#currentQuestion}</span>/${this.#totalQuestion}</div>
                        <div class="loader-text">Time left: 00:<span id="timer"></span></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: ${this.#progress}%" aria-valuenow="${this.#progress}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                </div>
                <p>${this.#data?.question}</p>
                
                <div class="form-field">
                    <div class="quize-row row row-cols-1 row-cols-sm-2">
                        
                        ${this.#data?.options.map((option, index) => {
                            return `<div class="quiz-topic col-md  col-sm-12">
                            <input type="radio" name="option" id="${option}" value="${index}">
                            <label for="${option}">${option}</label>
                        </div>`
                        })}
                    </div>
                    <div>
                        <button id="next" disabled="true" class="quize-button">Next</button>
                        <button id="skip" class="quize-button-skip">Skip this question</button>
                    </div>
                </div>
            </div>
        `;
    }

    
}

export default new QuizeView();