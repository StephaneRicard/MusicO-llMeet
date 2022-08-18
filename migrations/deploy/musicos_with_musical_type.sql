-- Deploy meeto_ll_musical:musicos_with_musical_type to pg

BEGIN;

CREATE VIEW "musicos_with_musical_type" AS
SELECT "users".*, json_agg("musical_type"."name") FROM "users"
JOIN "musical_type_per_users" ON "users_id" = "users"."id"
JOIN "musical_type" ON "musical_type"."id" = "musical_type_per_users"."musical_type_id"
WHERE "role" = 'musicos'
GROUP BY "users"."id";

COMMIT
