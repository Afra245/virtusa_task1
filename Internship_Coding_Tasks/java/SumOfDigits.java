import java.util.Scanner;

// Task 2: Find sum of digits using recursion
public class SumOfDigits {

    // Recursive method to calculate sum of digits
    public static int sumOfDigits(int number) {
        // Base case: if number is 0, return 0
        if (number == 0) {
            return 0;
        }
        // Recursive case: last digit + sum of remaining digits
        return (number % 10) + sumOfDigits(number / 10);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask user for input
        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();

        // Handle negative numbers by converting to positive
        if (number < 0) {
            number = -number;
        }

        // Calculate sum of digits using recursion
        int result = sumOfDigits(number);

        // Display the result
        System.out.println("Sum of digits of " + number + " = " + result);

        scanner.close();
    }
}
