package RetosJavaPOO;

public class Villano extends Personaje{

private String tecnica;

   public Villano(String nombre, int vida, int ataque, String raza, String tecnica){
    super(nombre, vida, ataque, raza);
    this.tecnica = tecnica;
  } 

public void setTecnica(String tecnica) {
    this.tecnica = tecnica;
}public String getTecnica() {
    return tecnica;
}

    
public void atacar(Heroe elHeroe){
    elHeroe.setVida(elHeroe.getVida() - getAtaque());


    System.out.println(getNombre() + " ha atacado a " + elHeroe.getNombre() + " ");
}


}


