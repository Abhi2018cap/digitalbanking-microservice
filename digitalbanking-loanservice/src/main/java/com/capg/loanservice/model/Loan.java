package com.capg.loanservice.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "loan")
public class Loan implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="loan_account_id")
	private int loanAccountId;
	
	@Column(name="branch_id")
	private int branchid;
	
	@Column(name="loan_account_number")
	private String loanAccountNumber;
	
	@Column(name="amount")
	private double amount;
	
	@Column(name="loan_type")
	private String loanType;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;

	public int getLoanAccountId() {
		return loanAccountId;
	}
	public void setLoanAccountId(int loanAccountId) {
		this.loanAccountId = loanAccountId;
	}
	public int getBranchid() {
		return branchid;
	}
	public void setBranchid(int branchid) {
		this.branchid = branchid;
	}
	
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public String getLoanAccountNumber() {
		return loanAccountNumber;
	}
	public void setLoanAccountNumber(String loanAccountNumber) {
		this.loanAccountNumber = loanAccountNumber;
	}
	@JsonIgnore
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
}
