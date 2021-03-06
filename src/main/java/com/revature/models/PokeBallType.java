package com.revature.models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="pokeBallType")
public class PokeBallType implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	@OneToMany(mappedBy= "type", cascade = CascadeType.ALL)
	private int id;

	@Column
	private String type;
	
	@Column
	private float catchBoost;

	public PokeBallType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PokeBallType(int id, String type, float catchBoost) {
		super();
		this.id = id;
		this.type = type;
		this.catchBoost = catchBoost;
	}

	@Override
	public String toString() {
		return "PokeBallType [id=" + id + ", type=" + type + ", catchBoost=" + catchBoost + "]";
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public float getCatchBoost() {
		return catchBoost;
	}

	public void setCatchBoost(float catchBoost) {
		this.catchBoost = catchBoost;
	}

	
}
