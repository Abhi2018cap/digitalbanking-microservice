package com.capg.accservices.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capg.accservices.model.Account;
import com.capg.accservices.model.Customer;

@Service
public interface AccountService {

	public List<Account> getCustomerAccounts(int customerId);
	public Account getAccountDetailsById(int accountId);
	public void depositeAmount(int accountNo,double amount) ;
	public double withdrawAmount(int accountNo,double amount) ;
	

}
