package RetosJavaPOO;

import java.util.Scanner;

public class Batalla {
public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

      Heroe Goku = new Heroe("Goku", 100, 40, "Humano", "Kamehame-Ha");
      Villano Freezer = new Villano("Freezer", 200, 60, "Alien", "Death-Ball");
      Curador Dende = new Curador("Dende", 50, 10, "namekiano", 100, 3);

Goku.combatir(Freezer);

    }
}
