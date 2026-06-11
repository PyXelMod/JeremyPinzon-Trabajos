package RetosJavaPOO;

public class Heroe extends Personaje{

    private String poder;

   public Heroe(String nombre, int vida, int ataque, String raza, String poder){
    super(nombre, vida, ataque, raza);
    this.poder = poder;
  } 


public void setPoder(String poder){
    this.poder = poder;
}public String getPoder() {
    return poder;
}
    


public void combatir(Villano elVillano){
    elVillano.setVida(elVillano.getVida() - getAtaque());

    System.out.println(getNombre() + " ha atacado a " + elVillano.getNombre() + " usando " + getPoder() + " y ha infrigido una cantidad de daño igual a " + getAtaque() + " el objetivo quedo a " + elVillano.getVida() + " puntos de vida");
}
}


