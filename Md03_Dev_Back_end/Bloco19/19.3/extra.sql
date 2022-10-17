USE Scientists;
SELECT SSN, a.Name, Project, b.Name, Hours  FROM Scientists a
 JOIN AssignedTo, Projects b WHERE SSN=Scientist AND Project=Code;