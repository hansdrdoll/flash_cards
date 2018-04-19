-- \c flash_cards

-- USERS --
INSERT INTO users
  (username, password_digest)
VALUES
  ('Jack', 'pass');

INSERT INTO users
  (username,  password_digest)
VALUES
  ('Jill', 'word');

INSERT INTO users
  (username,  password_digest)
VALUES
  ('Meh', 'pw');

  --------------------------------------------------------------------------------

  -- DECKS --
  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('Vanilla JS', 'vanilla-js', 1);

  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('CSS', 'css', 1);

  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('SQL', 'sql', 2);

  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('High Order Functions', 'high-order-functions', 2);

  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('React', 'react', 3);

  INSERT INTO decks
  (title, slug, user_id)
  VALUES
  ('HTML', 'html', 3);
  --------------------------------------------------------------------------------

  -- CARDS --

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What are the differences between null and undefined?',
'JavaScript has two distinct values for nothing, null and undefined',
 1);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Is "false" is false?',
'No, Because, its a string with length greater than 0. Only empty string is false.',
1);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What is the value of +"dude"',
'NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.',
1 );

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What’s the difference between an Element and a Component in React?',
'Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI. A React component is a function or a class which optionally accepts input and returns a React element.',
5 );

INSERT INTO cards
(question, answer, deck_id)
VALUES
('When would you use a Class Component over a Functional Component?',
'If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.',
5);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What is the difference between a controlled component and an uncontrolled component?',
'A controlled component is a component where React is in control and is the single source of truth for the form data. An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.',
5);


INSERT INTO cards
(question, answer, deck_id)
VALUES
('In which lifecycle event do you make AJAX requests?',
'AJAX requests should go in the componentDidMount lifecycle event.',
5);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What is the difference between createElement and cloneElement?',
'createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI). cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two 🙂.',
5);


INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the names, street address, and cities of residence for all employees who work for First Bank Corporation and earn more than $10,000.',
'select employee.employee-name, employee.street, employee.city from employee, works where employee.employee-name=works.employee-name and company-name = "First Bank Corporation" and salary > 10000)',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the names of all employees in the database who live in the same cities as the companies for which they work.',
'select e.employee-name from employee e, works w, company c where e.employee-name = w.employee-name and e.city = c.city and w.company-name = c.company-name',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the names of all employees in the database who live in the same cities and on the same streets as do their managers.',
'select p.employee-name from employee p, employee r, manages m where p.employee-name = m.employee-name and m.manager-name = r.employee-name and p.street = r.street and p.city = r.city',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the names of all employees in the database who do not work for `First Bank Corporation`. Assume that all people work for exactly one company',
'select employee-name from works where company-name <> `First Bank Corporation',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the names of all employees in the database who earn more than every employee of `Small Bank Corporation`. Assume that all people work for at most one company',
'select employee-name from works where salary > all (select salary from works where company-name = `Small Bank Corporation`)',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Find the name of the company that has the smallest payroll.',
'select company-name from works group by company-name having sum(salary) <= all (select sum(salary)from works group by company-name)',
3);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What is React-Router?',
'React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL.',
5);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What are Tags?',
'HTML tags are composed of three things: opening tag, content and ending tag. Some tags are unclosed tags. Content is placed between tags to display data on the web page.',
6);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('Do all HTML tags have end tag?',
'No. There are some HTML tags that don`t need a closing tag. For example: <image> tag, <br> tag.',
6);


INSERT INTO cards
(question, answer, deck_id)
VALUES
('Does a hyperlink only apply to text?',
'No, you can use hyperlinks on text and images both.',
6);

INSERT INTO cards
(question, answer, deck_id)
VALUES
('What is HTML?',
'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web',
6);
