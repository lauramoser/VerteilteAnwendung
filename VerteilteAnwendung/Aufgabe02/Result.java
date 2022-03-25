package Aufgabe02;

public class Result{

    public int[] array;

    public Result(int n){
        array = new int[n];
    }

    public synchronized void einlesen (F f, int n, Result r){
    
        for(int i = 0; i < n; i++){
            notifyAll();
        }
       
    }

    public synchronized int[] auslesen (){
        try {
            wait();
        } catch (InterruptedException t) {
            }     
        return array;
    }
}
