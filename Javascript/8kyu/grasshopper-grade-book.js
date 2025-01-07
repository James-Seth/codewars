//Describtion:
// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

//My Solution:
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3  
    return average >= 90? 'A': average >= 80? 'B': average >= 70? 'C': average >= 60? 'D': 'F'
  }

//Other solutions:
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }