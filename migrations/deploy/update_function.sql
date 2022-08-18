-- Deploy meeto_ll_musical:update_function to pg

BEGIN;

CREATE FUNCTION update_users(int, json) RETURNS users AS $$

UPDATE users SET
    name = COALESCE($2->>'name', name),
    picture_url = COALESCE($2->>'picture_url', picture_url),
    city = COALESCE($2->>'city', city),
    email = COALESCE($2->>'email', email),
    password = COALESCE($2->>'password', password),
    phone = (COALESCE(($2->>'phone')::int, phone)),
    address = COALESCE($2->>'address', address),
    county = COALESCE($2->>'county', county),
    description = COALESCE($2->>'description', description),
    momer_to_contact = COALESCE($2->>'momer_to_contact', momer_to_contact),
    momer_type_id = (COALESCE(($2->>'momer_type_id')::int, momer_type_id))

WHERE id = $1
RETURNING *

$$ LANGUAGE sql STRICT;

COMMIT;
