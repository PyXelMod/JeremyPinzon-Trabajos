package funciones;

import java.util.Scanner;

public class Tallerfunciones2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("por favor favor ingrese el nombre de estudiante");
        String nombre = sc.nextLine();

        System.out.println("por favor ingrese la nota 1");
        double nota1 = sc.nextDouble();
        System.out.println("por favor ingrese la nota 2");
        double nota2 = sc.nextDouble();
        System.out.println("por favor ingrese la nota 3");
        double nota3 = sc.nextDouble();
        System.out.println("por favor ingrese la nota 4");
        double nota4 = sc.nextDouble();
        System.out.println("por favor ingrese la nota 5");
        double nota5 = sc.nextDouble();

        double promedior = promedio(nota1, nota2, nota3, nota4, nota5);

        String validacione = validacion(promedior);

        System.out.println("el estudiante " + nombre + " tiene un promedio de " + promedior
                + " por consecuente su estado es " + validacione);

        sc.close();
    }

    public static String validacion(double promedior) {

        String validacion = "";

        if (promedior >= 4.5) {
            validacion = "Aprobado con honores";
        } else if (promedior >= 3.0) {

            validacion = "Aprobado";
        } else if (promedior <= 2.9) {
            validacion = "desaprobado";
        } else {
            validacion = "error";
        }

        return validacion;

    }

    public static double promedio(double nota1, double nota2, double nota3, double nota4, double nota5) {
        double resultadop = 0;
        resultadop = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
        return resultadop;

    }

}