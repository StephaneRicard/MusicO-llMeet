-- Deploy meeto_ll_musical:insert_functions to pg

BEGIN;

CREATE FUNCTION insert_ad(json) RETURNS event AS $$

    INSERT INTO "event"
    ("name", "description", "picture_url", "owner_id", "address", "county", "event_date", "external_link", "event_type", "type_of_music_needed")
    VALUES (
    $1->>'name',
    $1->>'description',
    $1->>'picture_url',
    ($1->>'owner_id')::int,
    $1->>'address',
    $1->>'county',
    ($1->>'event_date')::timestamptz,
    $1->>'external_link',
    ($1->>'event_type'),
    ($1->>'type_of_music_needed')
    )
    RETURNING *

$$ LANGUAGE sql STRICT;

COMMIT;
