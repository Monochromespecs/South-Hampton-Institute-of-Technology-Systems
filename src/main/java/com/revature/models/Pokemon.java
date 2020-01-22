package com.revature.models;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name="pokemons")
public class Pokemon implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pokemon_id")
	private int id;
	
	@Column
    private String name;
    
	@Column
	private int challengeRating;
    
	@Column
    private int value;
    
    @Column
    private List<Integer> stats;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

	public Pokemon() {
		super();
	}

	public Pokemon(int id, String name, int challengeRating, int value, List<Integer> stats, User user) {
		super();
		this.id = id;
		this.name = name;
		this.challengeRating = challengeRating;
		this.value = value;
		this.stats = stats;
		this.user = user;
	}

	public synchronized int getId() {
		return id;
	}

	public synchronized void setId(int id) {
		this.id = id;
	}

	public synchronized String getName() {
		return name;
	}

	public synchronized void setName(String name) {
		this.name = name;
	}

	public synchronized int getChallengeRating() {
		return challengeRating;
	}

	public synchronized void setChallengeRating(int challengeRating) {
		this.challengeRating = challengeRating;
	}

	public synchronized int getValue() {
		return value;
	}

	public synchronized void setValue(int value) {
		this.value = value;
	}

	public synchronized List<Integer> getStats() {
		return stats;
	}

	public synchronized void setStats(List<Integer> stats) {
		this.stats = stats;
	}

	public synchronized User getUser() {
		return user;
	}

	public synchronized void setUser(User user) {
		this.user = user;
	}

	@Override
	public int hashCode() {
		return Objects.hash(challengeRating, id, name, stats, user, value);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Pokemon)) {
			return false;
		}
		Pokemon other = (Pokemon) obj;
		return challengeRating == other.challengeRating && id == other.id && Objects.equals(name, other.name)
				&& Objects.equals(stats, other.stats) && Objects.equals(user, other.user) && value == other.value;
	}

	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", challengeRating=" + challengeRating + ", value=" + value
				+ ", stats=" + stats + ", user=" + user + "]";
	}
    
    
}
