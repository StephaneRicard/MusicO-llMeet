-- Revert meeto_ll_musical:update_function from pg

BEGIN;

DROP FUNCTION update_momer, update_musicos, update_musical_type;

COMMIT;
