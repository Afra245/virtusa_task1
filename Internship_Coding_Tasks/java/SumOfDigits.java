import java.util.Scanner;
public class SumOfDigits {
    public static int sumOfDigits(int number) {
        if (number == 0) {
            return 0;
        }
        return (number % 10) + sumOfDigits(number / 10);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();
        if (number < 0) {
            number = -number;
        }
        int result = sumOfDigits(number);
        System.out.println("Sum of digits of " + number + " = " + result);

        scanner.close();
    }
}
