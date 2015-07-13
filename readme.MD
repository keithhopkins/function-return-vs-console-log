A simple program to demonstrate why a function should return a value instead of using console.log

I created a search function to find the index of an element. Using return I can then use that value to find the GPA of that student which is in another array that uses corresponding indexes for each student.

When trying to do this with simply using console.log, I am unable to reuse functions and keep my code DRY. I have to search through the "students array" again in my findGPA function in order to actually find the student's GPA.
