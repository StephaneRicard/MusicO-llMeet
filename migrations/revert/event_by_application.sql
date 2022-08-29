-- Revert meeto_ll_musical:event_by_application from pg

BEGIN;

DROP VIEW "event_by_application";

COMMIT;
