-- Revert meeto_ll_musical:momer_with_type from pg

BEGIN;

DROP VIEW "momer_with_type";

COMMIT;
