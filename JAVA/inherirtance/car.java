package com.dev.inherirtance;

public class car {

	static car c = new car();
	String name = "sports car";


	public static void main(String[] args) {

		c.printname();

	}

	public void printname() {
		System.out.println(name);
	}

}
