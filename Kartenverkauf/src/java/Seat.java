package de.demo;

public class Seat {
	
	public int id;
	public String status;
	public String reservationname;
	
	
	public Seat(int _id, String _status, String _reservationname) {
		this.id = _id;
		this.status = _status;
		this.reservationname = _reservationname;
	}
	
	@Override
	public String toString() {
		return "id, status, reservationname";
	}
	
	public String getStatus() {
		return status;
	}
}
