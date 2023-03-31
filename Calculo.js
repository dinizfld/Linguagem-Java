import java.util.Scanner;

public class Calculo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1, num2, result;
        char operador;
        
        System.out.println("Digite o primeiro número:");
        num1 = scanner.nextDouble();
        
        System.out.println("Digite o segundo número:");
        num2 = scanner.nextDouble();
        
        System.out.println("Digite o operador (+, -, *, /):");
        operador = scanner.next().charAt(0);
        
        switch(operador) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                System.out.println("Operador inválido.");
                return;
        }
        
        System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
    }

}
