class ResultView {
    #parentElement = document.querySelector('#main-container');
    #data = null;
    flag = false;
    #score = 0;
    #correctAnswerCount = 0;
    #unansweredCount = 0;
    #wrongAnswerCount = 0;
    render(score, correctAnswerCount, wrongAnswerCount, unansweredCount) {
        // this.#data = data ? data : null;
        this.#score = score ? score : 0;
        this.#correctAnswerCount = correctAnswerCount ? correctAnswerCount : 0;
        this.#unansweredCount = unansweredCount ? unansweredCount : 0;
        this.#wrongAnswerCount = wrongAnswerCount ? wrongAnswerCount : 0;
        if(this.#score> 50) {
            this.flag = true;
        } else {
            this.flag = false;
        }
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
        
    }

    #clear() {
        this.#parentElement.innerHTML = ''; 
    }

    
    #generateMarkup() {
        if(this.flag) {
            return `
            <div class="quize-result-block">
                <img src="./success.png" alt="Quiz Result" class="result-image">
                <h2 class="success-flag">Congratulations</h2>
                <p>You successfully completed the Quiz and holds</p>
                <h3>Your Score</h3>
                <h1 class="success-score">${this.#score}%<h1>
                <h1><b>Great job!</b></h1>

                <div class="block-result-box">
                    <p>Out of 10 question</p>
                    <div class="d-flex justify-content-between">
                        <div class="correct-answer block-result">
                            <p><span class="success-score">${this.#correctAnswerCount}</span> Correct</p>
                        </div>
                        <div class="incorrect-answer block-result">
                            <p><span class="fail-score">${this.#wrongAnswerCount}</span> Incorrect</p>
                        </div>
                        <div class="not-answer block-result">
                            <p><span class="not-answoered">${this.#unansweredCount}</span> Not answered</p>
                        </div>
                    </div>
                </div>

                <button id="retake" class="quize-button-retake">Retake Quize</button>
            </div>
        `;
        } else {
            return `
            <div class="quize-result-block">
                <img src="./fail.png" alt="Quiz Result" class="result-image">
                <p>You successfully completed the Quiz</p>
                <h2 class="success-flag">KEEP</h2>
                <h2 class="success-flag">PRACTICING !</h2>
                <div class="socre-radious">
                <h3>Your Score</h3>
                <h1 class="fail-score">${this.#score}%<h1>
                </div>
                <div class="block-result-box">
                    <p>Out of 10 question</p>
                    <div class="d-flex justify-content-between">
                        <div class="correct-answer block-result">
                            <p><span class="success-score">${this.#correctAnswerCount}</span> Correct</p>
                        </div>
                        <div class="incorrect-answer block-result">
                            <p><span class="fail-score">${this.#wrongAnswerCount}</span> Incorrect</p>
                        </div>
                        <div class="not-answer block-result">
                            <p><span class="not-answoered">${this.#unansweredCount}</span> Not answered</p>
                        </div>
                    </div>
                </div>
                <button id="retake" class="quize-button-retake">Retake Quize</button>
            </div>
        `;
        }
        
    }

    
}

export default new ResultView();