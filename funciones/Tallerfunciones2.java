package funciones;

import java.util.Scanner;

/**
 * Clase que permite calcular el promedio de 5 notas de un estudiante
 * y determinar su estado académico (Aprobado con honores, Aprobado o Desaprobado).
 */
public class Tallerfunciones2 {
    /**
     * Método principal que interactúa con el usuario para solicitar el nombre
     * del estudiante y sus 5 notas. Luego, calcula el promedio, determina
     * el estado y muestra los resultados por consola.
     *
     * @param args Argumentos de la línea de comandos (no utilizados).
     */
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

    /**
     * Evalúa el promedio del estudiante y determina su estado académico.
     * Criterios:
     * - Mayor o igual a 4.5: Aprobado con honores.
     * - Mayor o igual a 3.0: Aprobado.
     * - Menor o igual a 2.9: Desaprobado.
     *
     * @param promedior El promedio calculado de las notas del estudiante.
     * @return Una cadena de texto con el estado del estudiante.
     */
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

    /**
     * Calcula el promedio aritmético de 5 notas.
     *
     * @param nota1 La primera nota.
     * @param nota2 La segunda nota.
     * @param nota3 La tercera nota.
     * @param nota4 La cuarta nota.
     * @param nota5 La quinta nota.
     * @return El promedio exacto de las 5 notas.
     */
    public static double promedio(double nota1, double nota2, double nota3, double nota4, double nota5) {
        double resultadop = 0;
        resultadop = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
        return resultadop;

    }

}