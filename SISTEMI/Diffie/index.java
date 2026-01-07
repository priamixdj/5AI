import java.math.BigInteger;
import java.util.Scanner;

public class index {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Inserisci un numero primo: ");
        BigInteger p = new BigInteger(in.nextLine());

        System.out.print("Inserisci un numero compreso tra 2 e -2: ");
        BigInteger g = new BigInteger(in.nextLine());

        System.out.print("Inserisci il numero segreto a: ");
        int a = in.nextInt();
        in.nextLine();

        System.out.print("Inserisci il numero segreto b: ");
        int b = in.nextInt();
        in.nextLine();
        BigInteger A = g.modPow(BigInteger.valueOf(a), p);
        BigInteger B = g.modPow(BigInteger.valueOf(b), p);

        System.out.println("A = " + A);
        System.out.println("B = " + B);

        BigInteger keyA = B.modPow(BigInteger.valueOf(a), p);
        BigInteger keyB = A.modPow(BigInteger.valueOf(b), p);

        System.out.println("Chiave calcolata da KA = " + keyA);
        System.out.println("Chiave calcolata da KB = " + keyB);
    }
}
