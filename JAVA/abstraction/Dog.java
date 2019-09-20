package com.dev.abstraction;

import com.dev.inherirtance.Demo;

public final class Dog extends Demo {//a final class can be a subclass but not a super class and final class cannot be inherited
	//@Override
	//static void print() {  because it is declared as final it cannot be created
	//	System.out.println("Method");
	//}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Demo.print();
	}

}
