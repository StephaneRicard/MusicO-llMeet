-- Deploy meeto_ll_musical:musicos_with_musical_type to pg

BEGIN;
--view pour récupérer les musicos avec l'ensemble des musical type
--(les musical type sont mis dans un tableau avec l'aggregation json_agg)
CREATE VIEW "musicos_with_musical_type" AS
SELECT "users".*, json_agg("musical_type"."name") FROM "users"
FULL JOIN "musical_type_per_users" ON "users_id" = "users"."id"
FULL JOIN "musical_type" ON "musical_type"."id" = "musical_type_per_users"."musical_type_id"
WHERE "role" = 'musicos'
GROUP BY "users"."id";

COMMIT;
