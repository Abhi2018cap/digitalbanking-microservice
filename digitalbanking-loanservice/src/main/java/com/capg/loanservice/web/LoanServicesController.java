package com.capg.loanservice.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capg.loanservice.model.Customer;
import com.capg.loanservice.model.Loan;
import com.capg.loanservice.service.impl.LoanServiceImpl;

@RestController
@ComponentScan("com.capg.loanservice")
public class LoanServicesController {

	@Autowired
	private LoanServiceImpl loanService;
	
	@RequestMapping(value="/loanservice/{customerId}/loans",method = RequestMethod.GET)
    public List<Loan> getAllLoansofCustomer(@PathVariable  int customerId) {
	    Customer customer=new Customer();
	    customer.setCustomerId(customerId);
	    List<Loan> listLoan=loanService.getLoans(customer);
	    return listLoan;
    }
	
	@RequestMapping(value="/loanservice/{loanAccountId}/loan",method = RequestMethod.GET)
    public Loan getLoanById(@PathVariable  int loanAccountId) {
	    Loan loan=loanService.getLoanById(loanAccountId);
	    return loan;
    }
}
