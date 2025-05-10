class WelcomeView {
    #parentElement = document.querySelector('#main-container');
    #data = null;
    render() {
        // this.#data = data ? data : null;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = ''; 
    }

    
    #generateMarkup() {
        return `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
            <div class="welocom-block">
                <h1>Welcome to <span class="logo">QUIZ<b>Mania</b></span></h1>
                <div class="quize-rule">
                    <p>Please read all the rules about this quize before you start.</p>
                    <a href="javascript:void(0)" id="info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiz rules</a>
                </div>
                <div class="form-field">
                    <label for="name">Full name</label>
                    <input type="text" placeholder="Full name" id="name" required>
                </div>
                <div class="form-field">
                    <div><label for="name">Please select topic to continue</label></div>
                    <div class="quize-row d-flex justify-content-between">
                        <div class="quiz-topic col-md col-sm-12">
                            <input type="radio" name="topic" id="topic1" value="js">
                            <label for="topic1">Javascript Basic</label>
                        </div>
                        <div class="quiz-topic col-md  col-sm-12">
                            <input type="radio" name="topic" id="topic2" value="ng">
                            <label for="topic2">Angular Basic</label>
                        </div>
                    </div>
                    <div class="quize-row d-flex  justify-content-between">
                        <div class="quiz-topic col-md col-sm-12">
                            <input type="radio" name="topic" id="topic3" value="rct">
                            <label for="topic3">React.js Advance</label>
                        </div>
                        <div class="quiz-topic col-md col-sm-12">
                            <input type="radio" name="topic" id="topic4" value="flt">
                            <label for="topic4">Flutter</label>
                        </div>
                    </div>
                    <div>
                        <button id="start" class="quize-button" disabled="true">Start Quiz</button>
                    </div>
                </div>
            </div>
        `;
    }

    
}

export default new WelcomeView();