package com.dev.encapsulation;

public class PetsData {

	public static void main(String[] args) {
		Pets p1 = new Pets();
		Pets p2 = new Pets();
		Pets p3 = new Pets();

		p1.setAnimal("cat");
		p1.setAge(2);
		p1.setColor("Brown");
		p1.setName("Meaow");

		p2.setAnimal("Tiger");
		p2.setAge(20);
		p2.setColor("White");
		p2.setName("snow");


		p3.setAnimal("Turtle");
		p3.setAge(4);
		p3.setColor("green");
		p3.setName("Stuart");

		Pets [] pets = {p1, p2, p3};

		for( int i = 0 ; i<pets.length ; i++) {
			System.out.println("Animal: " +pets[i].getAnimal());
			System.out.println("Age: " +pets[i].getAge());
			System.out.println("Color: " +pets[i].getColor());
			System.out.println("Name: " +pets[i].getName());
			System.out.println("+++++++++++++++++++++++");

		}


	}

}
