package form.div.collections;

public class Contact {
	private String Name;
	private Long Number;
	private String Group;
	
	@Override
	public String toString() {
		return "Contact [Name=" + Name + ", Number=" + Number + ", Group=" + Group + "]";
	}

	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Long getNumber() {
		return Number;
	}
	public void setNumber(Long number) {
		Number = number;
	}
	public String getGroup() {
		return Group;
	}
	public void setGroup(String group) {
		Group = group;
	}



}
