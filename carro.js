public class Carro {
   String marca;
   String modelo;
   int ano;
   
   public void ligar() {
      System.out.println("O carro está ligado");
   }
   
   public void desligar() {
      System.out.println("O carro está desligado");
   }
   
   public static void main(String[] args) {
      Carro meuCarro = new Carro();
      meuCarro.marca = "Fiat";
      meuCarro.modelo = "Uno";
      meuCarro.ano = 2020;
      meuCarro.ligar();
      meuCarro.desligar();
   }
}
