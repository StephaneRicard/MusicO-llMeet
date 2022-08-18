-- Revert meeto_ll_musical:musicos_with_musical_type from pg

BEGIN;

DROP VIEW "musicos_with_musical_type";

COMMIT;
