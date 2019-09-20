package com.dev.method;

public class MethodOverloading {

	static MethodOverloading mo = new MethodOverloading();

	private void print() {
		System.out.println("this is print method with no-arg");
	}

	static int print(int i) {
		System.out.println("this is print metod with int arg");
		return 1;
	}

	final String print(String str) {
		System.out.println("this is print methid with string arg");
		return "A";
	}
	public static void main(String[] args) {
		mo.print();
		mo.print(1);
		mo.print("ankita");
	}

}
