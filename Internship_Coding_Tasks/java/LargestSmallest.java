import java.util.Scanner;

// Task 1: Find largest and smallest element in an integer array
public class LargestSmallest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask user for the number of elements
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();

        int[] arr = new int[n];

        // Take array input from user
        System.out.println("Enter " + n + " integers:");
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        // Initialize largest and smallest with the first element
        int largest = arr[0];
        int smallest = arr[0];

        // Loop through the array to find largest and smallest
        for (int i = 1; i < n; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }

        // Display the result
        System.out.println("Largest element: " + largest);
        System.out.println("Smallest element: " + smallest);

        scanner.close();
    }
}
