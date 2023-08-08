public class VeiculoTestDrive {
  public static void main(String[] args) {
    Carro car = new Carro("Volkswagen", "Gol");
    Moto bike = new Moto("Honda", "CG125");
    Veiculo variavelAbrangente = car;

    car.ligar();
    car.acelerar();
    System.out.println(car.getMarca());
    System.out.println(variavelAbrangente.getModelo());

    bike.ligar();
    bike.acelerar();
    System.out.println(bike.getMarca());
    System.out.println(bike.getModelo());
  }
}
