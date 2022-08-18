-- Revert meeto_ll_musical:update_function from pg

BEGIN;

DROP FUNCTION update_users

COMMIT;
