CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(30) NOT NULL,
  telephone VARCHAR(12) UNIQUE NOT NULL,
  birthdate DATE
);

CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(50) NOT NULL,
  length INTEGER NOT NULL CHECK(length > 0),
  genre VARCHAR(30) NOT NULL,
  year INTEGER NOT NULL CHECK(year >= 1500)
);

CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(5) NOT NULL
);

-- Para registrar una llave foránea en SQL se usa:
-- FOREIGN KEY (campo) REFERENCES tabla_original(campo_original)

CREATE TABLE songs_artists (
  id_song INTEGER, -- Es una llave foránea de la tabla "songs"
  id_artist INTEGER, -- Es una llave foránea de la tabla "artists"
  PRIMARY KEY (id_song, id_artist),
  FOREIGN KEY (id_song) REFERENCES songs(id),
  FOREIGN KEY (id_artist) REFERENCES artists(id)
);

CREATE TABLE users_songs (
  id_user INTEGER, -- Es una llave foránea de la tabla "users"
  id_song INTEGER, -- Es una llave foránea de la tabla "songs"
  PRIMARY KEY (id_user, id_song),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_song) REFERENCES songs(id)
);

-- Leer datos de una tabla
-- SELECT campo1, campo2, campo3,... FROM tabla
SELECT email FROM users;

-- Seleccionamos TODOS LOS CAMPOS :)
SELECT * FROM users;

-- Insertar datos en una tabla

-- INSERT INTO tabla(campo1 campo2, campo3, ...) VALUES (valor1, valor2, valor3,...)
-- Nota: Los valores se insertan en el mismo orden que en la definición del parentesis.

-- INSERT INTO tabla VALUES (valor1, valor2, ...)
-- Nota: Los valores se insertan en el mismo orden que la definición de la tabla.

INSERT INTO users VALUES (1000, 'beto', 'beto@bedu.org', 'ornitorrinco123', '5555555555', NULL);
INSERT INTO users VALUES (1001, 'joaquin', 'joaquin@bedu.org', '123123', '666666666', NULL);
INSERT INTO users (username, email, password, id, telephone) VALUES ('rodrigo', 'rodrigo@bedu.org', '321321', 1002, '0000000000');

-- BULK INSERT
INSERT INTO songs VALUES
  (789089,'MOJABI GHOST',3,'POP',2023),
  (18335, 'Shooting Star', 5, "J-Pop", 2002),
  (48,'Black ice',250,'rock',1900),
  (1212,"Fiesta Pagana", 120, "Folk-Metal",1999),
  (1, 'Perfecta', 3, 'Pop', 2010),
  (NULL, 'pegasus fantasy', '400', 'j-rock', 1985),
  (112,'master fo puppets',8,'metal',1996),
  (3452786, 'comfortably numb', 300, 'rock', 1979),
  (28, 'Somewhere only we know', 180, 'alternative', 2004);

-- Eliminar TODOS LOS DATOS (CUIDADO!)
-- DELETE FROM tabla;
DELETE FROM songs;

-- Para eliminar una cantidad especifica de registros:
-- DELETE FROM tabla WHERE condicion;
DELETE FROM songs WHERE id = 1212;

-- Actualizar TODOS LOS REGISTROS (CUIDADO!)
-- UPDATE tabla SET campo = valor, campo2 = valor2;

-- Para actualizar una cantidad de registros en particular
--- UPDATE tabla SET campo = valor WHERE condicion
UPDATE songs SET title = 'Pegasus Fantasy' WHERE id = 789090;

-- Obtener todas las canciones del año 2000 en adelante
SELECT * FROM songs WHERE year >= 2000;

-- Obtener todas las canciones cuya duración es entre 3 a 5min.
SELECT * FROM songs WHERE length BETWEEN 180 AND 300;
SELECT * FROM songs WHERE length >= 180 AND length <= 300;

-- Los operadores lógicos de SQL: AND, OR, NOT

-- Ordenamiento
-- SELECT ... ORDER BY campo

SELECT * FROM songs ORDER BY title;