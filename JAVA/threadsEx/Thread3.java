package com.dev.threadsEx;

public class Thread3 implements Runnable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	@Override
	public void run() {
		// TODO Auto-generated method stub

		System.out.println("T3 thread starts.....");

		System.out.println("Thread 3 prints the value of k");

		int k = 1;
		while(k<=10) {
			k++;
			System.out.println("k : "+k);
		}

		System.out.println("T3 thread terminated......");

	}

}
