SELECT id FROM ordini where id = (SELECT id FROM clienti 
WHERE nome = 'Giovanni' AND cognome = 'Verdi') 
AS id;

SELECT '<?xml version="1.0" encoding="UTF-8"?> <clienti>' 
UNION ALL
SELECT CONCAT(
    '<cliente id="', id, '">',
    '</cliente>'
)
FROM clienti c
WHERE c.nome = 'Mario Rossi'
UNION ALL
SELECT '</clienti>'
INTO OUTFILE 'MarioRossi.xml';