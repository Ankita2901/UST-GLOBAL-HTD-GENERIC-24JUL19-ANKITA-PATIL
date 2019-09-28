package form.div.collections;

import java.util.HashMap;

public class ContactImplements implements ContactInterface{
	
	HashMap<String, Contact> hm = new HashMap<String, Contact>();

	@Override
	public void print() {
		System.out.println("Press-1 to show all contacts" );
		System.out.println("Press-2 to search for contact Using name");
		System.out.println("Press-3 to operate on contact");

	}


	@Override
	public int options(Contact contact) {
		return 0;
		
	}
}
