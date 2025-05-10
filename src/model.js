const store = {
    userName: null,
    topic: null,
    currentQuize: 0,
    correctAnswerCount: 0,
    wrongAnswerCount: 0,
    unansweredCount: 0,
    score: 0,
    topicBasedQuize: {
        js: {
            question: [
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of Germany?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 2,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of India?',
                    options: ['delhi', 'chenai', 'kolkata', 'bangalore'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of China?',
                    options: ['Bijing', 'changQuing', 'wohan', 'shanghai'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of Amerika?',
                    options: ['washington', 'manhaton', 'shikago', 'newyork'],
                    answer: 0,
                    selectedOption: null
                },
            ],
        },
        ng: {
            question: [
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of Germany?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 2,
                    selectedOption: null
                },
            ],
        },
        rct: {
            question: [
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of Germany?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 2,
                    selectedOption: null
                },
            ],
        },
        flt: {
            question: [
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 0,
                    selectedOption: null
                },
                {
                    question: 'What is the capital of Germany?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 2,
                    selectedOption: null
                },
            ],
        },
    }
}
export default store;