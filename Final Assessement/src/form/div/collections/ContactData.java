package form.div.collections;

import java.util.HashMap;

public class ContactData {
	
	
	public static void main(String[] args) {
		HashMap<String, Contact> hm = new HashMap<String,Contact>();
		
		Contact c1 = new Contact();
		c1.setName("Ankita");
		c1.setNumber(26568797l);
		c1.setGroup("spartans");
		
		Contact c2 = new Contact();
		c2.setName("Ankita");
		c2.setNumber(26568797l);
		c2.setGroup("spartans");
		
		Contact c3 = new Contact();
		c3.setName("Ankita");
		c3.setNumber(26568797l);
		c3.setGroup("spartans");
		
		Contact c4 = new Contact();
		c4.setName("Ankita");
		c4.setNumber(26568797l);
		c4.setGroup("spartans");
		
		
		 Contact d = hm.get(c3);
		System.out.println("Press-1 to show all contacts" );
		System.out.println("Press-2 to search for contact Using name");
		System.out.println("Press-3 to operate on contact");

		int press = 1;
		if(press==1) {
			
			System.out.println(" all the contact names" +hm.get(c1));
		
		 if(press==2) {
			 
			 boolean j = hm.containsKey(c3);
				System.out.println("complete information" );
				System.out.println("press 1 to call");
				System.out.println("press 2 to message");
				System.out.println("press 3 to go back to main menu");
				int press1=3;
				if(press1==1) {
					System.out.println("calling to:"+c1.getName());
					if(press1==2) {
						System.out.println("Sending message");
					}
						if(press1==3) {
							System.out.println("go back to the main menu:");
								
						}
						if(press==3) {
							System.out.println("Press 1 to add contact");
							System.out.println("Press 2 to delete contact");
							System.out.println("Press 3 to edit contact"); 
						}
					}
					
					
				}
					
					
				}
				
			
			
		
		
		

	}




		
		}

	

