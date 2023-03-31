
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o texto a ser criptografado:");
        String texto = sc.nextLine();

        String textoCriptografado = criptografar(texto);
        System.out.println("Texto criptografado: " + textoCriptografado);

        String textoDescriptografado = descriptografar(textoCriptografado);
        System.out.println("Texto descriptografado: " + textoDescriptografado);
    }

    public static String criptografar(String texto) {
        String alfabeto = "abcdefghijklmnopqrstuvwxyz";
        String alfabetoEmbaralhado = "qwertyuiopasdfghjklzxcvbnm";

        StringBuilder textoCriptografado = new StringBuilder();
        for (int i = 0; i < texto.length(); i++) {
            char caractere = texto.charAt(i);
            int indice = alfabeto.indexOf(caractere);
            if (indice == -1) {
                textoCriptografado.append(caractere);
            } else {
                char novoCaractere = alfabetoEmbaralhado.charAt(indice);
                textoCriptografado.append(novoCaractere);
            }
        }

        return textoCriptografado.toString();
    }
