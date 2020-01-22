package com.revature.models;

import java.util.Objects;

public class PokeBall {
	private PokeBallType type;
	private int count;

	public PokeBall() {
		super();
	}

	public PokeBall(PokeBallType type, int count) {
		super();
		this.type = type;
		this.count = count;
	}

	public synchronized PokeBallType getType() {
		return type;
	}

	public synchronized void setType(PokeBallType type) {
		this.type = type;
	}

	public synchronized int getCount() {
		return count;
	}

	public synchronized void setCount(int count) {
		this.count = count;
	}

	@Override
	public int hashCode() {
		return Objects.hash(count, type);
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
		return count == other.count && Objects.equals(type, other.type);
	}

	@Override
	public String toString() {
		return "PokeBall [type=" + type + ", count=" + count + "]";
	}

}
