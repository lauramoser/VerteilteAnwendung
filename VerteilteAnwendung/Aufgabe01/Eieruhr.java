package Aufgabe01;

public class Eieruhr extends Thread {

	private int time;
	private String name;

	public Eieruhr(String name, int time) {
		this.time = time;
		this.name = name;
	}

	public void run() {
		schlafen(name, time);
	}

	public static void schlafen(String name, int time) {
		try {
			Thread.sleep(1000 * time);
			System.out.println(name + ", " + time + " sekunden");
		} catch (InterruptedException t) {
		}
	}
}

