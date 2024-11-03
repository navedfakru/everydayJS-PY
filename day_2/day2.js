function gradeSchoolMultiply(num1, num2) {
  // Convert the numbers to strings for easy access to individual digits
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // Initialize an array to store the result of each partial product
  const result = Array(strNum1.length + strNum2.length).fill(0);
  console.log("Result", result)

  // Perform multiplication digit by digit, similar to the paper-and-pencil method
  for (let i = strNum1.length - 1; i >= 0; i--) {
    for (let j = strNum2.length - 1; j >= 0; j--) {
      // Get the integer values of the digits
      const digit1 = parseInt(strNum1[i], 10);
      const digit2 = parseInt(strNum2[j], 10);

      // Multiply the digits
      const product = digit1 * digit2;
      console.log(product)

      // Determine the positions in the result array
      const pos1 = i + j;         // The left position for this partial product
      const pos2 = i + j + 1;     // The right position for carrying

      // Add the product to the current position
      const sum = product + result[pos2];
      console.log("Sum", sum)

      // Set the right position to the last digit of the sum
      result[pos2] = sum % 10;

      // Carry over the remainder to the left position
      result[pos1] += Math.floor(sum / 10);
    }
  }

  // Convert the result array to a string and remove leading zeros
  const resultStr = result.join("").replace(/^0+/, "");

  // Return the result as an integer, or "0" if resultStr is empty
  return resultStr === "" ? "0" : resultStr;
}

// Example usage:
const num1 = 123;
const num2 = 45;
console.log(`${num1} * ${num2} = ${gradeSchoolMultiply(num1, num2)}`);
// Output: 123 * 45 = 5535
