package funciones;

import java.util.Scanner;

public class Tallerfunciones1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("por favor ingrese el valor del numero 1");
        double numero1 = sc.nextDouble();
        System.out.println("por favor ingrese el valor del numero 2");
        double numero2 = sc.nextDouble();

        System.out.println("1. suma /2. resta /3. multiplicacion /4. division");
        String operador = sc.next();

        double calculo = calculadora(numero1, numero2, operador);

        System.out.println("su resultado es " + calculo);

        sc.close();
    }

    public static double calculadora(double numero1, double numero2, String operador) {
        double resultado = 0;

        switch (operador) {
            case "1":
                // suma
                resultado = numero1 + numero2;
                break;
            case "2":
                // resta
                resultado = numero1 - numero2;
                break;
            case "3":
                // multiplicacion
                resultado = numero1 * numero2;
                break;
            case "4":
                // division
                resultado = numero1 / numero2;
                break;
            default:
                // numero default
                resultado = 0;
        }
        return resultado;

    }

}
