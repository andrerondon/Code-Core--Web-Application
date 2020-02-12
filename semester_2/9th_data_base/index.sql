SELECT *
FROM table
WHERE condition


SELECT *
FROM students
WHERE registration_date >= 'January 31, 2018' AND registration_date < 'March 1, 2018'

SELECT MIN(registration_date), MAX(registration_date)
FROM students

SELECT registration_date
FROM students
ORDER BY registration_date

--Select all students whose ids are more than 100 and less than 200

SELECT *
FROM students
WHERE id > 100 AND id < 200
ORDER BY id

--Select all students whose ages are null or less than 20
SELECT *
FROM students
WHERE age IS NULL OR age < 20

--Find all students whose first names start with Jo (case sensitive)
SELECT *
FROM students
WHERE first_name LIKE 'Jo%'


-- same but insensitive
SELECT *
FROM students
WHERE first_name iLIKE 'Jo%'

--Find all students whose first names end with ‘on’ (case insensitive)
SELECT *
FROM students
WHERE first_name iLIKE '%on'

--Select all students whose first names or last names contain ‘nn’
SELECT *
FROM students
WHERE first_name iLIKE '%nn%' OR last_name iLIKE '%nn%'

--Select all students whose ages are between 25 and 35

SELECT *
FROM students
WHERE age BETWEEN 25 and 35

--Select all students that have registered between July 14, 2019 and July 28, 2019
SELECT *
FROM students
WHERE registration_date BETWEEN 'July 14, 2019' AND 'July 28, 2019'

--Select all students that whose first name is Daphnee, Norma, or Rene
SELECT *
FROM students
WHERE first_name IN ('Daphnee', 'Norma', 'Rene')

first_name = 'Daphnee'
OR first_name = 'Norma'
OR first = 'Rene'

--Select all students whose age is one of 23, 26, or 29.

SELECT *
FROM students
WHERE age IN (23, 26, 29)