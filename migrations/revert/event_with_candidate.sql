-- Revert meeto_ll_musical:event_with_candidate from pg

BEGIN;

DROP VIEW "event_with_candidate";

COMMIT;
