

-- USERS --
INSERT INTO users
  (username, id, password_digest, cards)
VALUES
  ("Jack", 1, );

INSERT INTO users
  (username, id, password_digest, cards)
VALUES
  ("Jill", 2, );

INSERT INTO users
  (username, id, password_digest, cards)
VALUES
  ("Meh", 3, );


--------------------------------------------------------------------------------

-- DECKS --
INSERT INTO Decks
(id, title, user_id)
VALUES
  (1, "Vanilla JS", 1);

INSERT INTO Decks
  (id, title, user_id)
VALUES
  (2, "", 1);

INSERT INTO Decks
  (id, title, user_id)
VALUES
  (3, "SQL", 2);

INSERT INTO Decks
  (id, title, user_id)
VALUES
  (4, "High Order Functions", 2);

INSERT INTO Decks
  (id, title, user_id)
VALUES
  (5, "React", 3);

INSERT INTO Decks
  (id, title, user_id)
VALUES
  (6, "HTML", 3);

--------------------------------------------------------------------------------

-- CARDS --

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (1,
    "What are the differences between null and undefined?",
    "JavaScript has two distinct values for nothing, null and undefined",
    1);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (2,
    "Is 'false' is false?",
    " No, Because, it's a string with length greater than 0. Only empty string is false.",
    1 );

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (3,
    "What is the value of +'dude'",
    " NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.",
    1 );

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (4,
    "What’s the difference between an Element and a Component in React?",
    "Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.
    A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).",
    5 );

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (5,
    "When would you use a Class Component over a Functional Component?",
    "If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.",
     5);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (6,
    "What is the difference between a controlled component and an uncontrolled component?",
     "A controlled component is a component where React is in control and is the single source of truth for the form data.
      An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.
     ",
     5);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (7,
    "In which lifecycle event do you make AJAX requests?",
     "AJAX requests should go in the componentDidMount lifecycle event.",
     5);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (8,
    "What is the difference between createElement and cloneElement?",
     "createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI). cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two 🙂.",
     5);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (9,
    "Find the names, street address, and cities of residence for all employees who work for First Bank Corporation' and earn more than $10,000.",
    "select employee.employee-name, employee.street, employee.city from
    employee, works
    where employee.employee-name=works.employee-name
    and company-name = 'First Bank Corporation' and salary > 10000)",
  3);

INSERT INTO cards
  (id, question, answer, deck_id)
  VALUES
  (10,
    "Find the names of all employees in the database who live in the same cities as the
    companies for which they work.",
    "select e.employee-name
    from employee e, works w, company c
    where e.employee-name = w.employee-name and e.city = c.city
    and w.company-name = c.company-name",
  3);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (11,
    "Find the names of all employees in the database who live in the same cities and on the
    same streets as do their managers.",
    "select p.employee-name
    from employee p, employee r, manages m
    where p.employee-name = m.employee-name and m.manager-name =
    r.employee-name
    and p.street = r.street and p.city = r.city",
    3);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (12,
    "Find the names of all employees in the database who do not work for 'First Bank
    Corporation'. Assume that all people work for exactly one company",
    "select employee-name
    from works
    where company-name <> 'First Bank Corporation'",
   3);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (13,
     "Find the names of all employees in the database who earn more than every employee
     of 'Small Bank Corporation'. Assume that all people work for at most one company",
     "select employee-name
     from works
     where salary > all (select salary
      from works
      where company-name = 'Small Bank Corporation')",
    3);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (14,
    "Find the name of the company that has the smallest payroll.",
    "select company-name
    from works
    group by company-name
    having sum(salary) <= all (select sum(salary)
    from works
    group by company-name)",
  3);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (15,
    "What is React-Router?",
    "React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.",
   5);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (16,
   "What are Tags?",
   "HTML tags are composed of three things: opening tag, content and ending tag. Some tags are unclosed tags.
    Content is placed between tags to display data on the web page.
   ",
  6);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (17,
    "Do all HTML tags have end tag?",
    "No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag.",
   6);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (18,
    "Does a hyperlink only apply to text?",
    "No, you can use hyperlinks on text and images both.",
   6);

INSERT INTO cards
  (id, question, answer, deck_id)
VALUES
  (19,
    "What is HTML?",
    "HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web",
   6);
