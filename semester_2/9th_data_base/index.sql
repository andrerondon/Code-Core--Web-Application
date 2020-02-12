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