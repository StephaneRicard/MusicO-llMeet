-- Revert meeto_ll_musical:update_function from pg

BEGIN;

DROP FUNCTION "update_users", "update_musical_type", "update_event", "update_status";

COMMIT;
