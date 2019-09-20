package com.dev.encapsulation;

public class DogDa {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		DogIntImp dii = new DogIntImp();
		Dog d = new Dog();
		d.setAge(1);
		d.setName("scooby");
		d.setBreed("mad");
		d.setColor("browb");

		Dog d1 = new Dog();
		d1.setAge(10);
		d1.setName("scoy");
		d1.setBreed("mad");
		d1.setColor("browb");


		boolean b = dii.addDog(d);
		boolean b1 = dii.addDog(d1);
		System.out.println(b+ " " +b1);

		dii.getDog();
		boolean f =	dii.removeDog(d);
		System.out.println(f);
		dii.getDog();

	}

}
