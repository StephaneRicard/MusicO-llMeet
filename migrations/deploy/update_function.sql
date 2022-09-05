-- Deploy meeto_ll_musical:update_function to pg

BEGIN;
-- Fonction de mise à jour d'un momer
CREATE FUNCTION update_users(int, json) RETURNS users AS $$

UPDATE users SET
    name = COALESCE($2->>'name', name),
    picture_url = COALESCE($2->>'picture_url', picture_url),
    city = COALESCE($2->>'city', city),
    email = COALESCE($2->>'email', email),
    password = COALESCE($2->>'password', password),
    phone = COALESCE($2->>'phone', phone),
    address = COALESCE($2->>'address', address),
    county = COALESCE($2->>'county', county),
    description = COALESCE($2->>'description', description),
    momer_to_contact = COALESCE($2->>'momer_to_contact', momer_to_contact),
    momer_type_id = COALESCE(($2->>'momer_type_id')::int, momer_type_id),
    musicians_number = COALESCE(($2->>'musicians_number')::int, musicians_number),
    group_leader = COALESCE($2->>'group_leader', group_leader),
    external_url = COALESCE($2->>'external_url', external_url)

WHERE id = $1
RETURNING *

$$ LANGUAGE sql STRICT;

--fonction d'ajout des nouveaux musical type

CREATE FUNCTION update_musical_type(int , int) RETURNS musical_type_per_users AS $$
    
    INSERT INTO "musical_type_per_users" ("musical_type_id", "users_id" ) 
    VALUES 
    (($1)::int,
    ($2)::int
    )
    RETURNING *

$$LANGUAGE sql STRICT;

CREATE FUNCTION update_event(int, json) RETURNS event AS $$

UPDATE event SET
    name = COALESCE($2->>'name', name),
    description = COALESCE($2->>'description', description),
    picture_url = COALESCE($2->>'picture_url', picture_url),
    owner_id = COALESCE(($2->>'owner_id')::int, owner_id),
    address = COALESCE($2->>'address', address),
    city = COALESCE($2->>'city', city),
    county = COALESCE($2->>'county', county),
    is_published = COALESCE(($2->>'is_published')::boolean, is_published),
    is_archived = COALESCE(($2->>'is_archived')::boolean, is_archived),
    event_date = COALESCE(($2->>'event_date')::timestamptz, event_date),
    external_link = COALESCE($2->>'external_link', external_link),
    event_type = COALESCE($2->>'event_type', event_type),
    type_of_music_needed = COALESCE($2->>'type_of_music_needed', type_of_music_needed)
WHERE id = $1
RETURNING *

$$LANGUAGE sql STRICT;

CREATE FUNCTION update_status(int, json) RETURNS candidate_per_event AS $$

UPDATE candidate_per_event SET
candidate_status_id = COALESCE(($2->>'candidate_status_id')::int, candidate_status_id)
WHERE id = $1
RETURNING *

$$LANGUAGE sql STRICT;

COMMIT;
