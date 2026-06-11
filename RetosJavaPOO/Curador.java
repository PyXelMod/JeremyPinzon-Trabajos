package RetosJavaPOO;

public class Curador extends Personaje{

    private int cura;
    private int usos;

   public Curador(String nombre, int vida, int ataque, String raza, int cura, int usos){
    super(nombre, vida, ataque, raza);
    this.cura = cura;
    this.usos = usos;
  } 


public void setCura(int cura) {
    this.cura = cura;
}public void setUsos(int usos) {
    this.usos = usos;
}public int getCura() {
    return cura;
}public int getUsos() {
    return usos;
}
    
}


