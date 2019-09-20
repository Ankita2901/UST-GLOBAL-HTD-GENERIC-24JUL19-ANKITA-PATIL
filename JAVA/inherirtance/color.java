package com.dev.inherirtance;

public class color extends brand {

	static color c = new color();
	String colour = "Red";

	@Override
	public void printname() {
		System.out.println(name+" "+super.br+" "+colour);
	}

	public static void main(String[] args) {
		c.printname();

	}

}
