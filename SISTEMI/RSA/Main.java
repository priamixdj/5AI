import java.math.BigInteger;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int p, q;
        Scanner in = new Scanner(System.in);

        while (true) {
            System.out.println("Inserisci il numero primo p: ");
            p = in.nextInt();

            System.out.println("Inserisci il numero primo q: ");
            q = in.nextInt();

            if (p * q > 127) break;

            System.out.println("Sono troppo piccoli, riprova!!");
        }

        BigInteger pBigInteger = BigInteger.valueOf(p);
        BigInteger qBigInteger = BigInteger.valueOf(q);

        RsaKey RSA = new RsaKey(pBigInteger, qBigInteger);

        BigInteger N = RSA.getN();
        BigInteger E = RSA.getE();
        BigInteger D = RSA.getD();

        System.out.println("N: " + N + " E: " + E + " D: " + D);

        in.nextLine(); // consume end of line
        String messaggio = in.nextLine();

        BigInteger[] cifrato = new BigInteger[messaggio.length()];

        for (int i = 0; i < messaggio.length(); i++) {
            char ch = messaggio.charAt(i);
            int iCh = (int) ch;
            BigInteger BCh = BigInteger.valueOf(iCh);

            System.out.println("Posizione " + i + ": carattere = '" + ch + "'");
            System.out.println("Codice ASCII = " + iCh);
            System.out.println("BigInteger plaintext (BCh) = " + BCh);
            System.out.println("E = " + E);
            System.out.println("N = " + N);

            BigInteger c = BCh.modPow(E, N);
            cifrato[i] = c;

            System.out.println("Cifrato (c) = " + c);
            System.out.println("-------------------------------");
        }

        System.out.println("Cifrato completo:");
        for (int i = 0; i < cifrato.length; i++) {
            System.out.println("cifrato[" + i + "] = " + cifrato[i]);
        }

        for (BigInteger bigInteger : cifrato) {
            System.err.println(bigInteger + " ");
        }

        StringBuilder decifrato = new StringBuilder();

        for (BigInteger c : cifrato) {
            BigInteger m = c.modPow(D, N);
            int mInt = m.intValue();
            char ch = (char) mInt;
            decifrato.append(ch);
        }

        System.err.println("Decifratura: " + decifrato.toString());

        if (messaggio.equals(decifrato.toString()))
            System.err.println("tuto coreto");
    }
}
