package Matriz;

import java.util.Scanner;

public class Tallermatriz2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[][] numeros = new int[3][3];

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("por favor ingrese el valor de la fila " + (i + 1) + " y la columna " + (j + 1));
                numeros[i][j] = sc.nextInt();
            }
        }
        int sumaf1 = 0;
        for (int i = 0; i < numeros[0].length; i++) {
            sumaf1 = sumaf1 + numeros[0][i];
        }
        double promedio = sumaf1 / numeros[0].length;
        System.out.println("la suma de la fila 1 es: " + sumaf1);

        int sumaf2 = 0;
        for (int i = 0; i < numeros[1].length; i++) {
            sumaf2 = sumaf2 + numeros[1][i];
        }
        double promedio2 = sumaf2 / numeros[1].length;
        System.out.println("la suma de la fila 2 es: " + sumaf2);

        int sumaf3 = 0;
        for (int i = 0; i < numeros[2].length; i++) {
            sumaf3 = sumaf3 + numeros[2][i];
        }
        double promedio3 = sumaf3 / numeros[2].length;

        System.out.println("el promedio de la fila 1 seria " + promedio);
        System.out.println("el promedio de la fila 2 seria " + promedio2);
        System.out.println("el promedio de la fila 3 seria " + promedio3);

        sc.close();
    }
}
