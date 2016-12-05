-- Scripts for Database digital_banking
-- DDL
-- Customer
create table Customer(customer_id int(30) ,customer_name varchar(20) not null,
password varchar(20),last_login date,mobile_no int, email_id varchar(50), constraint pk_custId primary key(customer_id) );
-- Address
create table Address(customer_id int(30) ,house_no varchar(10),street_1 varchar(20),street_2 varchar(20),city varchar(20),state varchar(20),country varchar(20),pin_code int, constraint fk_custId foreign key(customer_id) references Customer(customer_id));
-- Savings
--create table Account(account_no int(20) ,customer_id  int(30), ifsc_code varchar(30) not null,account_type varchar(20) not null,account_balance double(10,2) not null,account_creation_date date ,account_status boolean not null , constraint pk_accNo primary key(account_no) ), fk_custId foreign key(customer_id) references Customer(customer_id));
create table Account(account_no int(20) ,customer_id  int(30), ifsc_code varchar(30) not null,account_type varchar(20) not null,account_balance double(10,2) not null,account_creation_date date ,account_status boolean not null , constraint pk_accNo primary key(account_no) ));
ALTER TABLE account
ADD FOREIGN KEY (customer_id) REFERENCES customer (customer_id);

-- Transaction
create table Transaction(transaction_Id int(10), transaction_date date, transaction_type  varchar(100), scheduled_date date, debited_amount double(10,2), credited_amount double(10,2), closing_amount double(10,2), transaction_status Boolean not null, constraint pk_transId primary key (transaction_id) );
-- Cards
create table card(card_no int(16) , cvv int(3) not null, expiry_date date not null, card_type varchar(10) not null, customer_id int(30), card_company varchar(10) not null, credit_limit decimal(10,2), card_status Boolean, constraint pk_cardNo primary key(card_no));
ALTER TABLE card
ADD FOREIGN KEY (customer_id) REFERENCES customer (customer_id);

-- Loans
create table Loan (loan_id int, account_no int(20),  loan_type varchar(15), interest_rate float, loan_given_date date, 
loan_duration varchar(20), amount_given double, loan_status boolean, constraint pk_loanId primary key(loan_id));
ALTER TABLE loan
ADD FOREIGN KEY (account_no) REFERENCES account (account_no);

-- Bill Payment
create table Payment (payment_id int, mobile_no int(15), merchant_name varchar(20), bill_amount double(10,2) , payment_date date, constraint pk_pymtId primary key(payment_id));
-- Payee
create table Payee ( account_no int(20), account_holder_name varchar(30), ifsc_code varchar(30) , email_id varchar(30));
ALTER TABLE Payee
ADD FOREIGN KEY (account_no) REFERENCES account (account_no);

-- Investment
create table investment(investment_id int(30), investment_type varchar(30), account_no int(30), investment_date date, amount double(10,2), interest float, date_of_maturity date, maturity_amount double(10,2), constraint pk_investId  primary key(investment_id));
ALTER TABLE investment
ADD FOREIGN KEY (account_no) REFERENCES account (account_no);
-- Inbox
create table Inbox(customer_id int(30), message varchar(100) , recd_date date);
-- Bank
create table Bank(ifsc_code varchar(20), bank_name varchar(30), branch varchar(20), city varchar(20), state varchar(10), constraint pk_ifscCode  primary key(ifsc_code));
-- Loan Payment
create table Loan_payment(payment_id int, loan_id int, payment_date date, capital_paid double, interest_paid double, constraint pk_pymtId primary key(payment_id));
ALTER TABLE Loan_payment
ADD FOREIGN KEY (loan_id) REFERENCES loan (loan_id);
