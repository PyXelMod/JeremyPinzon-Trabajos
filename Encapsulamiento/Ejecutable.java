package Encapsulamiento;

import java.util.Scanner;

public class Ejecutable {
public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

Estudiantes estudiante = new Estudiantes();

estudiante.setEdad(17);
estudiante.setNombre("alberto");
estudiante.setNotaf(3.0);



sc.close();



    }
}
