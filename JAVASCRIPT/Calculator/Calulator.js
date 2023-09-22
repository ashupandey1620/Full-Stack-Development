

function Calculator() {
    this.result = 0;
  }
  
  
  Calculator.prototype.add = function (value) {
    this.result += value;
  };
  

  Calculator.prototype.subtract = function (value) {
    this.result -= value;
  };
  

  Calculator.prototype.multiply = function (value) {
    this.result *= value;
  };
  

  Calculator.prototype.divide = function (value) {
    if (value !== 0) {
      this.result /= value;
    } else {
      console.error("Cannot divide by zero.");
    }
  };
  

  Calculator.prototype.getResult = function () {
    return this.result;
  };
  

  Calculator.prototype.clear = function () {
    this.result = 0;
  };
  

  const calculator = new Calculator();
  
  calculator.add(10);
  console.log("Result after adding 10:", calculator.getResult());
  
  calculator.subtract(5);
  console.log("Result after subtracting 5:", calculator.getResult());
  
  calculator.multiply(2);
  console.log("Result after multiplying by 2:", calculator.getResult());
  
  calculator.divide(4);
  console.log("Result after dividing by 4:", calculator.getResult());
  
  calculator.clear();
  console.log("Result after clearing:", calculator.getResult());
  