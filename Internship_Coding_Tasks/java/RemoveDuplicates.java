import java.util.Scanner;
import java.util.LinkedHashSet;
import java.util.Set;
public class RemoveDuplicates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();
        Set<Integer> set = new LinkedHashSet<>();

        System.out.println("Enter " + n + " integers (duplicates allowed):");
        for (int i = 0; i < n; i++) {
            int value = scanner.nextInt();
            set.add(value); 
        }
        System.out.println("Array after removing duplicates: " + set);

        scanner.close();
    }
}
