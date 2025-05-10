import welcomeView from './views/welcome/welocome.js';
import quizeView from './views/load-quize/quize.js';
import resultView from './views/result/result.js';
import store from './model.js';
export default function showWelcome() {
    welcomeView.render();
    document.addEventListener('change', (e) => {
        if (e.target.matches('#name') || e.target.matches('input[name="topic"]')) {
            checkUserChange();
        }
    });
}   

function checkUserChange() {
    
    const name = (document.querySelector('#name').value) ? document.querySelector('#name').value : null;
    const topic = (document.querySelector('input[name="topic"]:checked') && document.querySelector('input[name="topic"]:checked').value) ?  document.querySelector('input[name="topic"]:checked').value : null;
    const button = document.querySelector('.quize-button');
    
    if (name && topic) {
        store.userName = name;
        store.topic = topic;
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'true');
    }
}

document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.matches('#start')) {
        // quizeView.loadQuize(store.topic);
        loadQuize();
        
    }
    if (e.target.matches('#next') || e.target.matches('#skip')) {
        // quizeView.loadQuize(store.topic);
        loadNextQuize();
        
    }
    if (e.target.matches('#retake')) {
        // quizeView.loadQuize(store.topic);
        window.location.reload();
        
    }
    if( e.target.matches('#exit')) {
        store.currentQuize = store.topicBasedQuize[store.topic].question.length -1;
        loadNextQuize();
    }
    if(e.target.matches('#info')) {
        document.querySelector('.quize-rule').style.display = 'block';        

    }
    
});

function loadQuize() {
    const topic = store.topic;
    const totalQuestion = store.topicBasedQuize[topic].question.length;
    const quizeData = store.topicBasedQuize[topic].question;
    let currentQuestion = store.currentQuize;
    quizeView.render(quizeData[currentQuestion], currentQuestion, totalQuestion, loadNextQuize);
    document.querySelector('#exit').style.display = 'block';
    
}

function loadNextQuize() {
    store.currentQuize++;
    if(store.currentQuize < store.topicBasedQuize[store.topic].question.length) {
        quizeView.clearInterval();
        loadQuize();
    } else {
        quizeView.clearInterval();
        document.querySelector('#username').innerHTML = `<span class="username-initials">${store.userName[0]}</span> ${store.userName}`;
        document.querySelector('#exit').style.display = 'none';
        document.querySelector('#username').style.display = 'block';
        console.log(store.topicBasedQuize[store.topic].question)
        store.topicBasedQuize[store.topic].question.map(item => {
            if(item.selectedOption == null) {
                store.unansweredCount++;                
            }
            if(parseInt(item.selectedOption) == item.answer) {
                store.correctAnswerCount++;                
            }
            if(item.selectedOption !== null && parseInt(item.selectedOption) !== item.answer) {
                store.wrongAnswerCount++;                
            }
        });
        store.score = (store.correctAnswerCount / store.topicBasedQuize[store.topic].question.length) * 100;
        resultView.render(store.score, store.correctAnswerCount, store.wrongAnswerCount, store.unansweredCount );
    }
    
}

function setOption(questionIndex, topic, selectedOption) {
    store.topicBasedQuize[topic].question[questionIndex].selectedOption = selectedOption;
}


document.addEventListener('change', (e) => {
    if (e.target.matches('input[name="option"]')) {
        const selectedOption = document.querySelector('input[name="option"]:checked').value;
        setOption(store.currentQuize, store.topic, selectedOption);
        const button = document.querySelector('.quize-button');
        button.removeAttribute('disabled');
    }
});
