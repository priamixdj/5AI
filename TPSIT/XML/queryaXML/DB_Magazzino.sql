-- ===========================
-- TABELLA CLIENTI
-- ===========================
CREATE TABLE clienti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    telefono VARCHAR(20)
);

-- ===========================
-- TABELLA ORDINI
-- ===========================
CREATE TABLE ordini (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
    dataOrdine DATE NOT NULL,
    importo DECIMAL(10,2) NOT NULL,

    -- vincolo FK
    CONSTRAINT fk_ordini_clienti
        FOREIGN KEY (idCliente)
        REFERENCES clienti(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
INSERT INTO clienti (nome, email, telefono) VALUES
('Mario Rossi', 'mario.rossi@example.com', '333-1234567'),
('Luisa Bianchi', 'luisa.bianchi@example.com', '333-2345678'),
('Giovanni Verdi', 'giovanni.verdi@example.com', '333-3456789'),
('Anna Neri', 'anna.neri@example.com', '333-4567890'),
('Carlo Gialli', 'carlo.gialli@example.com', '333-5678901');

INSERT INTO ordini (idCliente, dataOrdine, importo) VALUES
(1, '2025-01-05', 120.50),
(1, '2025-02-12', 75.00),
(2, '2025-01-20', 200.00),
(3, '2025-03-01', 50.00),
(3, '2025-03-15', 30.25),
(3, '2025-03-20', 100.00),
(4, '2025-04-10', 150.00),
(5, '2025-05-05', 250.75);
