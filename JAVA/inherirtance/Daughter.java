package com.dev.inherirtance;

public class Daughter extends Father{
	static Daughter d = new Daughter();
	String name = "Ankita";


	@Override
	public void printName() {

		System.out.println(name+" "+f.name+" "+f.lastName);
	}

	public static void main(String[] args) {

		d.printName();
	}

}
