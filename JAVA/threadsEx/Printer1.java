package com.dev.threadsEx;

public class Printer1 {

	synchronized public void printVal(int i, String thread) {
		for(int k = 0 ; k <= 10 ; k++) {

			System.out.println("Thread: "+ thread + " "+" k ="+ +k);
		}

	}

}
