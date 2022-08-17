-- Deploy meeto_ll_musical:momer_with_type to pg

BEGIN;

CREATE VIEW "momer_with_type" AS
SELECT
    "user".*,
    "momer_type"."name" AS momer_type
FROM "user"
JOIN momer_type
    ON "user"."momer_type_id" = "momer_type"."id";

COMMIT;
