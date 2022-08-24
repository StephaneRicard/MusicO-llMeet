-- Deploy meeto_ll_musical:event_with_candidate to pg


BEGIN;
--view pour récupérer les musicos avec l'ensemble des musical type
--(les musical type sont mis dans un tableau avec l'aggregation json_agg)
CREATE VIEW "event_with_candidate" AS
SELECT "event".*, json_agg("users"."name") as group_name, json_agg("musical_type"."name") as musical_type FROM "event"
FULL JOIN "candidate_per_event" ON "event_id" = "event"."id"
FULL JOIN "users" ON "users"."id" = "candidate_per_event"."users_id"
FULL JOIN "candidate_status" ON "candidate_status"."id" = "candidate_status_id"
FULL JOIN "musical_type_per_users" ON "musical_type_per_users"."users_id" = "users"."id"
FULL JOIN "musical_type" ON "musical_type"."id" = "musical_type_per_users"."musical_type_id"

GROUP BY "event"."id";

COMMIT;