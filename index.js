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
