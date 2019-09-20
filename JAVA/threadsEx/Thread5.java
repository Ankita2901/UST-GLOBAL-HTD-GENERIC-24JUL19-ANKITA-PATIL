package com.dev.threadsEx;

public class Thread5 extends Thread {

	Printer p;
	Printer1 p1;

	public Thread5(Printer pref) {
		p = pref;

	}

	@Override
	public void run() {
		p.printVal(10,"Thread 5");

	}
}



