package com.dev.threadsEx;

public class SyncMainThread {

	public static void main(String[] args) throws InterruptedException{
		System.out.println("SyncMain Thread Started....");

		Printer p =  new Printer();

		Thread4 t4 = new Thread4(p);


		t4.start(); 
		t4.join();

		//new Thread4(p).start();
		new Thread5(p).start();



		System.out.println("SyncMain thread Terminated");
	}

}
