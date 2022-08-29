-- Revert meeto_ll_musical:application_by_musicos from pg

BEGIN;

DROP VIEW "application_by_musicos";

COMMIT;
