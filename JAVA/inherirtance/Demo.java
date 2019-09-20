package com.dev.inherirtance;

import com.dev.encapsulation.Dog;
public class Demo {
	Dog d = new Dog();
	com.dev.abstraction.Dog d1 = new com.dev.abstraction.Dog();// for importing the class from different packages

	final static int INT= 10;

	protected final static void print() {
		System.out.println("Final method");
	}


	public static void main(String[] args) {

		System.out.println(INT);
		//i = 20; cannot reintilize

	}

}
