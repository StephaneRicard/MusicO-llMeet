-- Revert meeto_ll_musical:insert_functions from pg

BEGIN;

DROP FUNCTION "insert_ad";

COMMIT;
