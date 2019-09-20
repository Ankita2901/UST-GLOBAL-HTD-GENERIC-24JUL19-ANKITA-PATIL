package com.dev.constructors;

public class constructors {

	public constructors() {
		System.out.println("this is no-arg cons");
	}

	public constructors(int i) {
		System.out.println("This cons is with int arg");
	}

	public constructors(String s) {
		System.out.println("this is with string arg");
	}

	public constructors(String s, int i) {
		System.out.println("this is with string arg and int arg");
	}

	public constructors(int i, String s) {
		System.out.println("this is with int and  arg string arg ");
	}


	public static void main(String[] args) {
		constructors ce = new  constructors();
		constructors ce1 = new  constructors(1);
		constructors ce2 = new  constructors("A");
		constructors ce3 = new  constructors("p", 2);
		constructors ce4 = new  constructors(1, "j");

	}
}

