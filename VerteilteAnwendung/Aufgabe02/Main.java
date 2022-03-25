package Aufgabe02;

public class Main {

	public static void main(String[] args) {
		execute( x->x, 5);
	}

	public static int[] execute(F f, int n){
		Result result = new Result(n);
		for (int i = 0; i <= n; i++){
			Dispatcher dispatcher = new Dispatcher(f, n, result);
			dispatcher.start();  
		}    
		return result.auslesen();
	}
}
