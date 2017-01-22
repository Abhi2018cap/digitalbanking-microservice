--DROP TABLE public.card;    
CREATE TABLE public.card
(
  card_no bigint NOT NULL,
  cvv int NOT NULL,
  expiry_date date NOT NULL,
  card_type character varying(10) NOT NULL,
  customer_id int DEFAULT NULL,
  card_company character varying(10) NOT NULL,
  credit_limit double precision DEFAULT NULL,
  card_status numeric(1,0) DEFAULT NULL,
  CONSTRAINT pk_cardno PRIMARY KEY (card_no)      
) WITH (
    OIDS = FALSE
)TABLESPACE pg_default;

ALTER TABLE public.card
    OWNER to postgres;
    
    
--DROP TABLE public.customer;
CREATE TABLE public.customer (
  customer_id int NOT NULL,
  customer_name character varying(10) NOT NULL,
  password character varying(20) DEFAULT NULL,
  last_login date DEFAULT NULL,
  mobile_no character varying(15) DEFAULT NULL,
  email_id character varying(50) NOT NULL      
) WITH (
    OIDS = FALSE
)TABLESPACE pg_default;

ALTER TABLE public.customer
    OWNER to postgres;