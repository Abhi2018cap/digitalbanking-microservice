package com.capg.accservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.capg.accservices.model.Transaction;

@Repository
@Transactional
public interface TransactionDao extends JpaRepository<Transaction,Long> {
	
	

}
