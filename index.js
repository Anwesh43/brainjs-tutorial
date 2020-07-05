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
