package com.dev.objectmethods;

public class DogData {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		Dog d3 = new Dog();

		d1.setAge(1);
		d1.setBreed("Dober Man");
		d1.setColor("Black");
		d1.setName("Shro");

		d2.setAge(2);
		d2.setBreed("Pug");
		d2.setColor("Brown");
		d2.setName("Scooby");

		d3.setAge(2);
		d3.setBreed("Pug");
		d3.setColor("Brown");
		d3.setName("Scooby");

		Dog [ ] dogs  = {d1 , d2 };

		for(int i =  0 ; i<dogs.length ; i++) {

			/*System.out.println("Age: " +dogs[i].getAge()); since we are using the below print statement no need of printing single values
		System.out.println("Breed: " +dogs[i].getBreed());
		System.out.println("Color: " +dogs[i].getColor());
		System.out.println("Name: " +dogs[i].getName());*/


			System.out.println(dogs[i]);// after overriding the toString from source it will give the values in the object
			System.out.println("++++++++++++++++++++++++++++++++");

		}
		System.out.println(d3.equals(d2)); // for equals method and returns a boolean value and after overriding hashcode and equals method it will compare the values else only the reference and value will be false 
		System.out.println(d3.hashCode());// it gives integers values without overriding
	}



}
