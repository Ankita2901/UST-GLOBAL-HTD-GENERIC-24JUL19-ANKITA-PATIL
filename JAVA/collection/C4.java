package com.dev.collection;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class C4 {

	public static void main(String[] args) {
		TreeSet<Dog> ts = new TreeSet<Dog>();

		Dog d = new Dog();
		d.setAge(10);
		d.setBreed("DM");
		d.setName("scooby");
		d.setColor("brown");

		Dog d1 = new Dog();
		d1.setAge(7);
		d1.setBreed("Dalmation");
		d1.setName("Ronnie");
		d1.setColor("white");


		Dog d2 = new Dog();
		d2.setAge(8);
		d2.setBreed("Pug");
		d2.setName("shero");
		d2.setColor("grey");

		Dog d3 = new Dog();
		d3.setAge(3);
		d3.setBreed("streetdog");
		d3.setName("Rocky");
		d3.setColor("golden");

		ts.add(d);
		ts.add(d1);
		ts.add(d2);

		System.out.println(ts);
	}

}
