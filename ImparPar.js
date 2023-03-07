import java.util.Scanner;

public class NumeroParOuImpar {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int numero;
        System.out.print("Digite o valor do numero: ");
        numero = in.nextInt();
        in.nextLine();
        if(numero%2==0)
            System.out.println("O número é par");
        else
            System.out.println("O número é impar");
    }

}

