package com.dev.project;

public class Gmail {
	private int User_Id;
	private String User_name;
	private String Password;
	private String Email;
    private String Mail;
	public String getMail() {
		return Mail;
	}
	public void setMail(String mail) {
		Mail = mail;
	}
	@Override
	public String toString() {
		return "Gmail [User_Id=" + User_Id + ", User_name=" + User_name + ", Password=" + Password + ", Email=" + Email
				+ ", Message_id=" + Message_id + ", Message=" + Message + "]";
	}
	private String Message_id;
	private String Message;
	public int getUser_Id() {
		return User_Id;
	}
	public void setUser_Id(int user_Id) {
		User_Id = user_Id;
	}
	public String getUser_name() {
		return User_name;
	}
	public void setUser_name(String user_name) {
		User_name = user_name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getMessage_id() {
		return Message_id;
	}
	public void setMessage_id(String message_id) {
		Message_id = message_id;
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}




}
