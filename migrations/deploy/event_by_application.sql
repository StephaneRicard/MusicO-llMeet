-- Deploy meeto_ll_musical:event_by_application to pg

BEGIN;
CREATE VIEW "event_by_application" as
SELECT event.*, "candidate_status"."name" as status_name, "candidate_per_event"."users_id", "candidate_per_event"."id" as application_id FROM "event"
FULL JOIN "candidate_per_event" ON "candidate_per_event"."event_id" = "event"."id"
FULL JOIN "candidate_status" ON "candidate_status"."id" = "candidate_per_event"."candidate_status_id";

COMMIT;
