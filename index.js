class TrainingData {

    input
    output

    constructor(input, output) {
        this.input = input
        this.output = output
    }

    static create(input, output) {
        return new TrainingData(input, output)
    }
}

class NNService {

    neuralNetwork
    trainingData = []

    init() {
          this.neuralNetwork = new brain.NeuralNetwork({})
    }

    addTrainingData(input, output) {
        this.trainingData.push(TrainingData.create(input, output))
    }

    train() {
        this.neuralNetwork.train(this.trainingData)
    }

    run(input) {
        return this.neuralNetwork.run(input)
    }
}

const input = [[0, 0], [0, 1], [1, 0], [1, 1]]
const output = [[0], [1], [1], [0]]

const target = [0, 0]

const nnService = new NNService()
nnService.init()

const messageElement = document.getElementById('message')

const interval = setInterval(() => {
    var msg = ""
    if (input.length == 0) {
        messageElement.innerHTML = "training"
        nnService.train()
        const result = nnService.run(target)
        msg = `trained model and ran ${JSON.stringify(target)} for result ${JSON.stringify(result)}`
        clearInterval(interval)
    }  else {
        const currInput = input.splice(0, 1)[0]
        const currOutput = output.splice(0, 1)[0]
        nnService.addTrainingData(currInput, currOutput)
        msg = `adding ${JSON.stringify(currInput)} : ${JSON.stringify(currOutput)} training data`

    }
    messageElement.innerHTML = msg
}, 1000)
