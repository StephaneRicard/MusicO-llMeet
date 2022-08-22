-- Revert meeto_ll_musical:init from pg

BEGIN;

DROP TABLE "users", "event", "musical_type", "momer_type", "candidate_status", "candidate_per_event", "musical_type_per_users" CASCADE;

COMMIT;
