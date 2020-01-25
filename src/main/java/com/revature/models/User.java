package com.revature.models;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table (name="USER")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="userIdGenerator")
	@SequenceGenerator(name="userIdGenerator", sequenceName="user_id_sequence", allocationSize=1)
	@Column(name="user_id")
	private int user_id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String username;
	
	@Column
	private String password;
	
	@Column
	private int balance;
	
	@Column
	@OneToMany(mappedBy="user_id", cascade = CascadeType.ALL)
	private List<PokeBall> pokeball;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String firstName, String lastName, String username, String password, int balance,
			List<PokeBall> pokeball) {
		super();
		this.user_id = user_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.balance = balance;
		this.pokeball = pokeball;
	}

	@Override
	public int hashCode() {
		return Objects.hash(balance, firstName, lastName, password, pokeball, user_id, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof User)) {
			return false;
		}
		User other = (User) obj;
		return balance == other.balance && Objects.equals(firstName, other.firstName)
				&& Objects.equals(lastName, other.lastName) && Objects.equals(password, other.password)
				&& Objects.equals(pokeball, other.pokeball) && user_id == other.user_id
				&& Objects.equals(username, other.username);
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public List<PokeBall> getPokeball() {
		return pokeball;
	}

	public void setPokeball(List<PokeBall> pokeball) {
		this.pokeball = pokeball;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", firstName=" + firstName + ", lastName=" + lastName + ", username="
				+ username + ", password=" + password + ", balance=" + balance + ", pokeball=" + pokeball + "]";
	}
}
