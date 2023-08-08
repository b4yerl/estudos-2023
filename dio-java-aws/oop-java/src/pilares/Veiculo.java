public abstract class Veiculo {
  private String marca;
  private String modelo;

  public Veiculo(String marca, String modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  public String getMarca() {
    return this.marca;
  }
  public void setMarca(String marca) {
    this.marca = marca;
  }
  public String getModelo() {
    return this.modelo;
  }
  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public abstract void ligar();

  public void acelerar() {
    System.out.println("ACELERANDO");
  }
  public void frear() {
    System.out.println("FREANDO");
  }


}