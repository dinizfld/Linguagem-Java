import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        // Informa o saldo inicial
        System.out.print("Informe o saldo inicial: R$ ");
        double saldoInicial = input.nextDouble();
        
        // Calcula o reajuste de 1%
        double reajuste = saldoInicial * 0.01;
        
        // Calcula o novo saldo com o reajuste
        double novoSaldo = saldoInicial + reajuste;
        
        // Imprime o novo saldo na tela
        System.out.println("Novo saldo com reajuste de 1%: R$ " + novoSaldo);
    }
}
