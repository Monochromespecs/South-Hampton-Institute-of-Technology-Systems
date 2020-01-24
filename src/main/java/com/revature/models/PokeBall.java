package com.revature.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "POKEBALLTABLE")
public class PokeBall {
	
	@Id
	@GeneratedValue
	@SequenceGenerator(name="intenvoryIdGenerator", sequenceName="inventory_id_sequence", allocationSize=1)
	@Column(name="inventory_id")
	private int inventory_id;
	
	@Column
	private PokeBallType type;
	
	@Column
	private int count;
	
	@JoinColumn(name="FK_USER_ID")
	@ManyToOne
	private int user_id;

	public PokeBall() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PokeBall(int inventory_id, PokeBallType type, int count, int user_id) {
		super();
		this.inventory_id = inventory_id;
		this.type = type;
		this.count = count;
		this.user_id = user_id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(count, inventory_id, type, user_id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof PokeBall)) {
			return false;
		}
		PokeBall other = (PokeBall) obj;
		return count == other.count && inventory_id == other.inventory_id && Objects.equals(type, other.type)
				&& user_id == other.user_id;
	}

	public int getInventory_id() {
		return inventory_id;
	}

	public void setInventory_id(int inventory_id) {
		this.inventory_id = inventory_id;
	}

	public PokeBallType getType() {
		return type;
	}

	public void setType(PokeBallType type) {
		this.type = type;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "PokeBall [inventory_id=" + inventory_id + ", type=" + type + ", count=" + count + ", user_id=" + user_id
				+ "]";
	}
	
	
}
