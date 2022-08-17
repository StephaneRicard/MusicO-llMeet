-- Verify meeto_ll_musical:momer_with_type on pg

BEGIN;

SELECT * FROM "momer_with_type" WHERE false;

ROLLBACK;
