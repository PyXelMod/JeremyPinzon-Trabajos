package Matriz;
import java.util.Scanner;

public class Tallermatriz3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Estudiantes
        String[] estudiantes = new String[3];
        for (int i = 0; i < estudiantes.length; i++) {
            System.out.println("por favor ingrese el nombre del estudiante " + (i + 1));
            estudiantes[i] = sc.next();
        }
        // Notas
        int[][] notas = new int[3][3];

        for (int i = 0; i < notas.length; i++) {
            for (int j = 0; j < notas[i].length; j++) {
                System.out.println("por favor ingrese la nota " + (j + 1) + " para el estudiante " + (i + 1));
                notas[i][j] = sc.nextInt();
            }
        }

        // promedio estudiante 1
        double promedioes1 = 0;
        int sumaes1 = 0;
        for (int i = 0; i < notas[0].length; ++i) {
            sumaes1 = sumaes1 + notas[0][i];
        }
        promedioes1 = sumaes1 / notas[0].length;
        System.out.println("el promedio del estudiante " + estudiantes[0] + " es igual a " + promedioes1);

        // promedio estudiante 2
        double promedioes2 = 0;
        int sumaes2 = 0;
        for (int i = 0; i < notas[1].length; ++i) {
            sumaes2 = sumaes2 + notas[1][i];
        }
        promedioes2 = sumaes2 / notas[1].length;
        System.out.println("el promedio del estudiante " + estudiantes[1] + " es igual a " + promedioes2);

        // promedio estudiante 3
        double promedioes3 = 0;
        int sumaes3 = 0;
        for (int i = 0; i < notas[2].length; ++i) {
            sumaes3 = sumaes3 + notas[2][i];
        }
        promedioes3 = sumaes3 / notas[2].length;
        System.out.println("el promedio del estudiante " + estudiantes[2] + " es igual a " + promedioes3);

        // ranking

        if (promedioes1 < promedioes2) {
            if (promedioes2 < promedioes3) {
                System.out.println("el mejor estudiante es " + estudiantes[0]);
            }
        }
        if (promedioes1 < promedioes2) {
            if (promedioes2 > promedioes3) {
                System.out.println("el mejor estudiante es " + estudiantes[1]);
            }
        } else {
            System.out.println("el mejor estudiante es " + estudiantes[2]);
        }

        sc.close();
    }
}
