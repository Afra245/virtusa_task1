import java.util.Scanner;
import java.util.LinkedHashSet;
import java.util.Set;

// Task 3: Remove duplicate elements using Set
public class RemoveDuplicates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask user for the number of elements
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();

        // Use LinkedHashSet to maintain insertion order and remove duplicates
        Set<Integer> set = new LinkedHashSet<>();

        // Take input from user
        System.out.println("Enter " + n + " integers (duplicates allowed):");
        for (int i = 0; i < n; i++) {
            int value = scanner.nextInt();
            set.add(value); // Set automatically ignores duplicates
        }

        // Display the unique elements
        System.out.println("Array after removing duplicates: " + set);

        scanner.close();
    }
}
