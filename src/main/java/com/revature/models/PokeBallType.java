package com.revature.models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="pokeBallType")
public class PokeBallType implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;

	@Column
	private String type;
	
	@Column
	private float catchBoost;

	public PokeBallType() {
		super();
	}

	public PokeBallType(int id, String type, float catchBoost) {
		super();
		this.id = id;
		this.type = type;
		this.catchBoost = catchBoost;
	}

	public synchronized int getId() {
		return id;
	}

	public synchronized void setId(int id) {
		this.id = id;
	}

	public synchronized String getType() {
		return type;
	}

	public synchronized void setType(String type) {
		this.type = type;
	}

	public synchronized float getCatchBoost() {
		return catchBoost;
	}

	public synchronized void setCatchBoost(float catchBoost) {
		this.catchBoost = catchBoost;
	}

	@Override
	public int hashCode() {
		return Objects.hash(catchBoost, id, type);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof PokeBallType)) {
			return false;
		}
		PokeBallType other = (PokeBallType) obj;
		return Float.floatToIntBits(catchBoost) == Float.floatToIntBits(other.catchBoost) && id == other.id
				&& Objects.equals(type, other.type);
	}

	@Override
	public String toString() {
		return "PokeBallType [id=" + id + ", type=" + type + ", catchBoost=" + catchBoost + "]";
	}
	
	
}
