import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.println("Informe o saldo atual");
        Double saldoInicial = input.nextDouble();
        
        Double reajuste = saldoInicial * 0.01;
        Double novoSaldo = reajuste + saldoInicial;
        
        System.out.println("o valor com reajuste é:" + novoSaldo);
      
    }
}
