package com.capg.accservices.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Transaction")
public class Transaction implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="transaction_id")
	private int transactionId; 
	
	@Column(name="account_no")
	private int accountNo; 
	
	@Column(name="account_balance")
	private double accountBalance;
		
	@Column(name="transaction_type")
	private String transactionType; 
	
	@Column(name="comments")
	private String comments; 
	
	@Column(name="transaction_date")
	private Timestamp transactionDate;

	@Column(name="account_balance_debit")
	private double accountBalanceDebit;
	
    @Column(name="account_balance_credit")
	private double accountBalanceCredit;
	
	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public int getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public double getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Timestamp getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Timestamp transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getAccountBalanceDebit() {
		return accountBalanceDebit;
	}

	public void setAccountBalanceDebit(double accountBalanceDebit) {
		this.accountBalanceDebit = accountBalanceDebit;
	}

	public double getAccountBalanceCredit() {
		return accountBalanceCredit;
	}

	public void setAccountBalanceCredit(double accountBalanceCredit) {
		this.accountBalanceCredit = accountBalanceCredit;
	}
	
}
