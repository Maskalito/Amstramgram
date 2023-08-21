INSERT INTO users (username, email, user_url, password)
    VALUES
    ('Miles Morales', 'milesmorales@gmail.com', 'assets/profile_pics/Miles_Morales_pp.jpg', 'Iamspidey'),
    ('Peter Parker', 'peterparker@gmail.com', 'assets/profile_pics/Peter_Parker_pp.png', 'Iamspiderman'),
    ('Eddie Brock', 'eddiebrock@gmail.com', 'assets/profile_pics/Eddie_Brock_pp.jpg', 'Iamvenom'),
    ('Luke Skywalker', 'luke@rebellionmail.com', 'assets/profile_pics/Luke_Skywalker.png', 'Iamluke'),
    ('Arwen Undomiel', 'arwen@rivendelmail.com', 'assets/profile_pics/Arwen_Undomiel.png', 'Iamarwen'),
    ('Neo Matrix', 'neo@matrixmail.com', 'assets/profile_pics/Neo.png', 'Iamneo'),
    ('Gandalf', 'gandalf@middleearthmail.com', 'assets/profile_pics/Gandalf.png', 'Iamgandalf'),
    ('Dumbledore', 'dumbledore@hogwartsmail.com', 'assets/profile_pics/Dumbledore.png', 'Iamdumbledore'),
    ('Jon Snow', 'jon@snowmail.com', 'assets/profile_pics/Jon_Snow.png', 'Iamjon'),
    ('Moi', 'moi@gmail.com', 'assets/profile-pic.jpeg', 'Iammoi');

INSERT INTO posts (username, user_image, post_image, description, likes, shares, user_id)
    VALUES
    ('Miles Morales', 'assets/profile_pics/Miles_Morales_pp.jpg', 'assets/profile_pics/Miles_Morales_pp.jpg', 'Hey, its me', '100', '3', '1'),
    ('Peter Parker', 'assets/profile_pics/Peter_Parker_pp.png', 'assets/profile_pics/Peter_Parker_pp.png', 'Hello guys, i am Peter', '501', '5', '2'),
    ('Eddie Brock', 'assets/profile_pics/Eddie_Brock_pp.jpg', 'assets/profile_pics/Eddie_Brock_pp.jpg', 'Here is Venom', '340', '15', '3'),
    ('Luke Skywalker', 'assets/profile_pics/Luke_Skywalker.png', 'assets/profile_pics/Luke_Skywalker.png', 'Je vais vous sortir de là, je vais vous sauver !', '950', '342', '5'),
    ('Arwen Undomiel', 'assets/profile_pics/Arwen_Undomiel.png', 'assets/profile_pics/Arwen_Undomiel.png', 'Quand tu aimes profondément, tu te plantes toi-même cette dague dans le coeur.', '234', '45', '6'),
    ('Neo', 'assets/profile_pics/Neo.png', 'assets/profile_pics/Neo.png', 'Je connais le kung-fu', '432', '12', '7'),
    ('Gandalf', 'assets/profile_pics/Gandalf.png', 'assets/profile_pics/Gandalf.png', 'Comme tous ceux qui vivent des heures si sombres, mais ce n est pas à eux de décider. Tout ce que vous avez à décider, c est quoi faire du temps qui vous est imparti.', '123', '567', '8'),
    ('Dumbledore', 'assets/profile_pics/Dumbledore.png', 'assets/profile_pics/Dumbledore.png', 'Il y a de la lumière et de l obscurité en chacun de nous. Qui va gagner, cela dépend de nous.', '45', '678', '9'),
    ('Jon Snow', 'assets/profile_pics/Jon_Snow.png', 'assets/profile_pics/Jon_Snow.png', 'J ai froid', '6', '1', '10');
