-- Deploy meeto_ll_musical:application_by_musicos to pg

BEGIN;
CREATE VIEW "application_by_musicos" AS
SELECT "users".*,"candidate_per_event"."id" as application_id,"candidate_per_event"."candidate_status_id" as status_id, json_agg("musical_type"."name") as musical_type FROM "users"
FULL JOIN "musical_type_per_users" ON "musical_type_per_users"."users_id" = "users"."id"
FULL JOIN "musical_type" ON "musical_type"."id" = "musical_type_per_users"."musical_type_id"
FULL JOIN "candidate_per_event" ON "candidate_per_event"."users_id" = "users"."id"
FULL JOIN "candidate_status" ON "candidate_status"."id" = "candidate_per_event"."candidate_status_id"
WHERE role = 'musicos'
GROUP BY "candidate_per_event"."id", "users"."id", "candidate_status"."name";

COMMIT;
