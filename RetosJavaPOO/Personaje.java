package RetosJavaPOO;

public class Personaje {

    public Personaje (String nombre, int vida, int ataque, String raza){
        this.ataque = ataque;
        this.nombre = nombre;
        this.raza = raza;
        this.vida = vida; 
    }

   private String nombre;
   private int vida;
   private int ataque;
   private String raza;

   public void setAtaque(int ataque) {
       this.ataque = ataque;
   }public void setNombre(String nombre) {
       this.nombre = nombre;
   }public void setRaza(String raza) {
       this.raza = raza;
   }public void setVida(int vida) {
       if (getVida() > 0){
        this.vida = vida;
       }else{
        this.vida = 0;
       }
   }public int getAtaque() {
       return ataque;
   }public String getNombre() {
       return nombre;
   }public String getRaza() {
       return raza;
   }public int getVida() {
       return vida;
   }
    
}
