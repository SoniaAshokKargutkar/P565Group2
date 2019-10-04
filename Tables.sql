CREATE TABLE VOLUNTEER_TAB(
ID INT(11) NOT NULL AUTO INCREMENT,
FIRST_NAME VARCHAR(20) NOT NULL,
LAST_NAME VARCHAR(30) NOT NULL,
USERNAME VARCHAR(20) NOT NULL UNIQUE,
AGE INT CHECK (AGE >= 18),
EMAIL VARCHAR(30) NOT NULL,
CITY VARCHAR(30),
STATE VARCHAR(30),
PASSWORD VARCHAR(32) NOT NULL,
PRIMARY KEY (ID));

INSERT INTO VOLUNTEER_TAB VALUES(1,'Milan','Chheta','mchheta',23,'mchheta@iu.edu','Mumbai','Maharashtra','abc456');
INSERT INTO VOLUNTEER_TAB VALUES(2,'Luke','Lovett','lalovett',23,'lalovett@iu.edu','Chicago','Illinois','xyz321');
INSERT INTO VOLUNTEER_TAB VALUES(3,'Sonia','Kargutkar','skargutk',26,'skargutk@iu.edu','Mumbai','Maharashtra','jkl446');
INSERT INTO VOLUNTEER_TAB VALUES(4,'Bhakti','Narvekar','bnarvekr',23,'bnarvekr@iu.edu','Bloomington','Indiana','efg569');
INSERT INTO VOLUNTEER_TAB VALUES(5,'Bhumika','Agrawal','bagrawal',23,'bagrawal@iu.edu','Indore','Madhya Pradesh','zwe123');

CREATE TABLE ORGANIZER_TAB(
ID INT(11) NOT NULL AUTO INCREMENT,
NAME VARCHAR(20) NOT NULL,
USERNAME VARCHAR(20) NOT NULL UNIQUE,
EMAIL VARCHAR(30) NOT NULL,
CITY VARCHAR(30),
STATE VARCHAR(30),
PASSWORD VARCHAR(32) NOT NULL,
PRIMARY KEY (ID));

INSERT INTO ORGANIZER_TAB VALUES('O1','Alzheimer''s' Association','alz_ass','aa@gmail.com','Bloomington','Indiana','abc');
INSERT INTO ORGANIZER_TAB VALUES('O2','American Cancer Society','acs123','acs@gmail.com','Bloomington','Indiana','xyz');
INSERT INTO ORGANIZER_TAB VALUES('O3','Stepping Stones, Inc.','ssi345','ssi@gmail.com','Bloomington','Indiana','123');
INSERT INTO ORGANIZER_TAB VALUES('O4','Hope Housing & Restoration Center','hhandr6','hhr@gmail.com','Bloomingon','Indiana','456');
INSERT INTO ORGANIZER_TAB VALUES('O5','Volunteers in Medicine','vim987','vim@gmail.com','Bloomington','Indiana','789');





