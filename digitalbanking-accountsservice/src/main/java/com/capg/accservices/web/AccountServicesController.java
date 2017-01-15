package com.capg.accservices.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capg.accservices.model.Account;
import com.capg.accservices.service.AccountService;

@RestController

@ComponentScan("com.capg.accservices")

@EnableAutoConfiguration
public class AccountServicesController {

	@Autowired
	private AccountService accountService;
    
	@RequestMapping(value="/accservices/{customerId}/accounts",method = RequestMethod.GET)
    public List<Account> getAccounts(@PathVariable  int customerId) {
		return accountService.getCustomerAccounts(customerId);
    }
	
	@RequestMapping(value="/accservices/{accountNo}/account",method = RequestMethod.GET)
    public Account getAccountById(@PathVariable  int accountNo) {
		return accountService.getAccountDetailsById(accountNo);
    }
	
	@RequestMapping(value="/accservices/{accountNo}/{amount}/accountdeposit",method = RequestMethod.POST)
    public String depositeAmount(@PathVariable  int accountNo, @PathVariable  int amount) {
		accountService.depositeAmount(accountNo, amount);
		return "Sucess";
    }
	
	@RequestMapping(value="/accservices/{accountNo}/{amount}/accountwithdraw",method = RequestMethod.POST)
    public String withdrawAmount(@PathVariable  int accountNo, @PathVariable  int amount) {
		accountService.withdrawAmount(accountNo, amount);
		return "Sucess";
    }
	
}