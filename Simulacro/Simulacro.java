package Simulacro;
import java.util.Scanner;

public class Simulacro {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double[] temperatura = new double[7];

        for (int i = 0; i < temperatura.length; i++) {
            System.out.println("por favor ingrese la temperatura del dia " + (i + 1));
            temperatura[i] = sc.nextDouble();
        }

        double promedio = calculo(temperatura[0], temperatura[1], temperatura[2], temperatura[3], temperatura[4],
                temperatura[5], temperatura[6]);

        String mayormenor = mayonesa(temperatura[0], temperatura[1], temperatura[2], temperatura[3], temperatura[4], temperatura[5], temperatura[6]);

        int diascontadoscalurosos = diascalurosos(temperatura[0], temperatura[1], temperatura[2], temperatura[3], temperatura[4], temperatura[5], temperatura[6]);
        int diascontadosfrios = diasfrios(temperatura[0], temperatura[1], temperatura[2], temperatura[3], temperatura[4], temperatura[5], temperatura[6]);

        System.out.println("su promedio es " + promedio);
        System.out.println(mayormenor);
        System.out.println("la cantidad de dias que ha pasado de los 30 grados (calurosos) es de " + diascontadoscalurosos);
        System.out.println("la cantidad de dias que estan por debajo de 27 grados (frios) es de " + diascontadosfrios);

        sc.close();
    }

    public static double calculo(double t1, double t2, double t3, double t4, double t5, double t6, double t7) {
        double resultado = 0;

        resultado = (t1 + t2 + t3 + t4 + t5 + t6 + t7) / 7;

        return resultado;
    }

    public static int diascalurosos(double t1, double t2, double t3, double t4, double t5, double t6, double t7) {
        int cantidad = 0;
        double[] temperatura = {t1,t2,t3,t4,t5,t6,t7};

        for (int i = 0; i < temperatura.length; i++){
            if (temperatura[i] >= 30){
                cantidad++;
            }
        }
        return cantidad;
    }

    public static int diasfrios(double t1, double t2, double t3, double t4, double t5, double t6, double t7) {
        int cantidad = 0;
        double[] temperatura = {t1,t2,t3,t4,t5,t6,t7};

        for (int i = 0; i < temperatura.length; i++){
            if (temperatura[i] <= 27){
                cantidad++;
            }
        }
        return cantidad;
    }

    
     public static String mayonesa(double t1, double t2, double t3, double t4, double t5, double t6, double t7) {

        double[] temperatura = {t1,t2,t3,t4,t5,t6,t7};
        

        double mayor = t1;
        double menor = t1;

        for (int i = 0; i < temperatura.length; i++) {
            if (temperatura[i] < menor) {
                menor = temperatura[i];
            }

        }

        for (int i = 0; i < temperatura.length; i++) {
            if (temperatura[i] > mayor) {
                mayor = temperatura[i];
            }

        }

        String resultado = "el numero mayor es " + mayor + " y el menor es " + menor;

        return resultado;

    }
    
    // correo profe = carmanu125@gmail.com

}
