package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class Taller1Ejercicio1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 

       int[] notasAlumnos = new int[5];
       int promedion = 0;
        int i = 0;
        int contador = 0;
        while (contador < notasAlumnos.length){
            System.out.println("por favor ingrese el valor de la nota " + i);
            notasAlumnos[i] = sc.nextInt();
            contador++;
            promedion = promedion + i;
        }
        int promedio = promedion / notasAlumnos.length;
        System.out.println("el valor de sus notas es " + Arrays.toString(notasAlumnos));
        System.out.println("el promedio de sus notas seria: " + promedio);
        
        sc.close();
    }
}
