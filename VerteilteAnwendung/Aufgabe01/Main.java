package Aufgabe01;

public class Main {
    public static void main(String[] args) {
		eieruhr("A", 10);
		eieruhr("B", 15);
        eieruhr("C", 20);
	}

	public static void eieruhr(String name, int time) {
		Eieruhr eieruhr = new Eieruhr(name, time);
		eieruhr.start();
	}
}
