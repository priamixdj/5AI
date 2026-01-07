CREATE TABLE atleta (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255),
    cognome varchar(255)
);

create TABLE squadra (
    nome varchar(255) not null PRIMARY KEY
);

create TABLE partite (
    id int AUTO_INCREMENT PRIMARY KEY,
    squadra1 varchar(255) on UPDATE CASCADE not null,
    squadra2 varchar(255) on UPDATE CASCADE not null,
    squadra1_punteggio int not null,
    squadra2_punteggio int DEFAULT 0 CHECK (squadra2_punteggio >= 0) ON UPDATE CASCADE not null
)


    
    
    