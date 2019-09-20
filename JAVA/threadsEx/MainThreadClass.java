package com.dev.threadsEx;

public class MainThreadClass {

	public static void main(String[] args) {
		System.out.println(" Main thread started.......");

		System.out.println(" MainThreadClass prints the value of i");

		//new T2().start();// if we create thread this start() method should be called
		Thread2  t2 = new  Thread2 ();
		t2.setName("Thread T2");
		t2.start();

		Thread.currentThread().setName("Main Thread");

		//  T3 t3 = new T3();  Thread t = new Thread(t3); t.start();

		new Thread(new Thread3()).start();// for implementing multiple threads

		for(int i = 1 ; i <= 10 ; i++) {
			System.out.println("i :" +i);
		}

		System.out.println("Thread Name2: "+t2.getName());
		System.out.println("Thread Name1: " +Thread.currentThread().getName());
		System.out.println("Thread2 id: "+t2.getId());
		System.out.println("Main Thread id: "+Thread.currentThread().getId());
		System.out.println("priority :" +t2.getPriority());
		t2.setPriority(3);




		System.out.println(" Main Thread terminated........");

	}

}
