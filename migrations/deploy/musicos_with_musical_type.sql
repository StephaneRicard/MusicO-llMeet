-- Deploy meeto_ll_musical:musicos_with_musical_type to pg

BEGIN;

CREATE VIEW "musicos_with_musical_type" AS
SELECT "user".*, json_agg("musical_type"."name") FROM "user"
JOIN "musical_type_per_user" ON "user_id" = "user"."id"
JOIN "musical_type" ON "musical_type"."id" = "musical_type_per_user"."musical_type_id"
WHERE "role" = 'musicos'
GROUP BY "user"."id";

COMMIT
