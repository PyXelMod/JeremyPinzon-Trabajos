package Encapsulamiento;


public class Estudiantes {
    
   private String nombre;
   private int edad;
   private double notaf;


    //setters 

   public void setEdad(int edad) {
        if (edad >= 0){
            this.edad = edad;
        } else {
            System.out.println("la edad no puede ser menor que 0");
        }    
   }public void setNombre(String nombre) {
       this.nombre = nombre;
   }public void setNotaf(double notaf) {
       if (notaf >= 0 && notaf <= 0){
        this.notaf = notaf;
       } else {
        System.out.println("nota no valida");
       }

       //getters 

   }public int getEdad() {
       return edad;
   }public String getNombre() {
       return nombre;
   }public double getNotaf() {
       return notaf;
   }

   public String pasa(double notaf){

    String resultado;

    if (notaf >= 3.0){
      resultado = "pasa";
    } else{
        resultado = "no pasa";
    }
    return resultado;

   }


}
