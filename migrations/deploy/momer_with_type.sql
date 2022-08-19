-- Deploy meeto_ll_musical:momer_with_type to pg

BEGIN;
--creation view pour récupérer les momers avec leur momer type
CREATE VIEW "momer_with_type" AS
SELECT
    "users".*,
    "momer_type"."name" AS "momer_type"
FROM "users"
JOIN "momer_type"
    ON "users"."momer_type_id" = "momer_type"."id"
WHERE "users"."role" = 'momer';

COMMIT;
