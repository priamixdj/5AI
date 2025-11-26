import java.math.BigInteger;

public class RsaKey {

    // N = p * q (modulo RSA)
    private BigInteger N;
    // Esponente pubblico
    private BigInteger E;
    // Esponente privato
    private BigInteger D;
    // phi = (p-1)*(q-1)
    private BigInteger phi;

    // Costruttore: riceve p e q (numeri primi) come BigInteger
    public RsaKey(BigInteger p, BigInteger q) {
        // Calcolo N = p * q
        this.N = p.multiply(q);

        // Calcolo phi = (p-1)*(q-1)
        BigInteger pMinus1 = p.subtract(BigInteger.ONE);
        BigInteger qMinus1 = q.subtract(BigInteger.ONE);
        this.phi = pMinus1.multiply(qMinus1);

        // Generazione di E e D
        creaEsponentePubblico();
        creaEsponentePrivato();
    }

    public BigInteger getN() {
        return N;
    }

    public BigInteger getE() {
        return E;
    }

    public BigInteger getD() {
        return D;
    }

    // Sceglie un esponente pubblico E coprimo con phi
    private void creaEsponentePubblico() {
        // Partiamo da 3 e proviamo solo numeri dispari
        BigInteger possibileE = BigInteger.valueOf(3);

        while (possibileE.compareTo(phi) < 0) {
            BigInteger mcd = possibileE.gcd(phi);

            if (mcd.equals(BigInteger.ONE)) {
                // trovato un E coprimo con phi
                this.E = possibileE;
                return;
            }

            // Passiamo al prossimo numero dispari
            possibileE = possibileE.add(BigInteger.TWO);
        }

        throw new RuntimeException("Impossibile trovare un esponente E valido.");
    }

    // Calcola D come inverso di E rispetto a phi
    private void creaEsponentePrivato() {
        this.D = E.modInverse(phi);
    }
}
