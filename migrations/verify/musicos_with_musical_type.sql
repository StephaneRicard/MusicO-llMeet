-- Verify meeto_ll_musical:musicos_with_musical_type on pg

BEGIN;

SELECT * FROM "musicos_with_musical_type" WHERE false;

ROLLBACK;
