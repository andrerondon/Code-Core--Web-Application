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
SELECT COUNT(*)
FROM students
WHERE first_name ILIKE 'L%'

DEMO:  Get the number of students who are more than 25 years of age
SELECT COUNT(*)
FROM students
WHERE age > 25

Lab 2:  Find the sum of students ages whos first name starts with "L"


Lab: Find out the average age of students who registered after March 1st 2018
SELECT AVG(age)
FROM students
WHERE registration_date > 'March 1, 2018'

Exercise: Write a query with the maximum, minimum, average and total age of all students
SELECT MAX(age) AS max_age,
MIN(age) AS min_age,
ROUND(AVG(age), 2) AS average_age,
SUM(age) AS total_age
FROM students

--COUNT and GROUP BY example
SELECT first_name, count(*) AS NumberOfStudents
FROM students
GROUP BY first_name
ORDER BY 2 DESC

Exercise:  Find out the age that is the most common for all students.  Can return more than one age if needed
SELECT age, count(*) AS NumberOfStudentsWithThatAge
FROM students
GROUP BY age
ORDER BY 2 DESC
