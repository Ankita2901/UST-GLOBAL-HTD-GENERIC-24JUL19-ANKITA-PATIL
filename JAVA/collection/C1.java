package com.dev.collection;
import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {

	public static void main(String[] args) {
		HashSet<Dog> hs = new HashSet<Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setBreed("DM");
		d.setName("scooby");
		d.setColor("brown");

		Dog d1 = new Dog();
		d1.setAge(5);
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


		boolean b = hs.add(d);
		boolean b1 = hs.add(d1);

		d1.setAge(20);


		boolean b3 = hs.add(d3);
		System.out.println("Output of add():" +b+ "  "+b1+ " "+b3);

		/*for(Dog dog : hs){
			System.out.println(dog); // for each loop

		}*/

		System.out.println(hs);
		System.out.println("siza of HashSet hs: " +hs.size());

		boolean b2=	hs.remove(d);
		System.out.println("Output of remove():" +b2);
		System.out.println(hs);

		System.out.println("Output of contains(): " +hs.contains(d1));

		System.out.println("size of HashSet hs after remove(): " +hs.size());

		hs.clear();
		System.out.println("size of HashSet after clear(): "+hs.size());

	}

}
