package Aufgabe02;

public class Dispatcher extends Thread {

    private int n;
    private F f;
    private Result r;

    public Dispatcher(F f, int n, Result r){
        this.n = n;
        this.f = f;
        this.r = r;
    }
    
    public void run() {
        r.einlesen(f, n, r);
    }
}
