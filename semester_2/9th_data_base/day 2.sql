--example of a subquery

UPDATE students
SET registration_date = 'February 18, 2020'
WHERE id IN (
	SELECT id
	FROM students
	WHERE first_name = 'Elinore'
)

--SELECT * from students where first_name = 'Elinore';

--example of a Transaction
BEGIN TRANSACTION;

SELECT * FROM students WHERE id = 7;

UPDATE students SET first_name = 'Blahblah' WHERE id = 7;

SELECT * FROM students WHERE id = 7;

--COMMIT TRANSACTION
--ROLLBACK TRANSACTION


Lab 1:  Find the Count of students whos first name starts with "L"
--28
SELECT count (last_name)
FROM students
WHERE last_name iLIKE 'l%'
