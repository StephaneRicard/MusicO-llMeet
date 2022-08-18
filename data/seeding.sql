BEGIN;

TRUNCATE "momer_type" RESTART IDENTITY CASCADE;
TRUNCATE "musical_type" RESTART IDENTITY CASCADE;
TRUNCATE "candidate_status" RESTART IDENTITY CASCADE;
--Insertition type de momer
INSERT INTO "momer_type" ("name") 
VALUES 
('Restaurant'),
('Particulier'),
('Association'),
('Salle de spectacle'),
('Collectivité');

--Insertition genre musical
INSERT INTO "musical_type" ("name")
VALUES
('Rock'),
('Pop'),
('Electro'),
('Latino'),
('Reggae'),
('Folk'),
('Chanson Française'),
('Rap/Hip Hop'),
('Blues/Jazz'),
('Country'),
('Classique'),
('Musique du monde');


--Insertition statut candidat
INSERT INTO "candidate_status" ("name")
VALUES
('En attente'),
('Refusée'),
('Acceptée');

--Insertition momer
INSERT INTO "user" ("name", "picture_url","city","email","password","phone","address","county","role","description","external_url","momer_to_contact","momer_type_id")
VALUES
('mon restaurant','image momer','toulouse','momer@momer.fr','1234','0606060606','2 rue des pommes','haute-garonne','momer','description momer','lien externe momer', 'roger', 3);

--Insertition musicos
INSERT INTO "user" ("name", "picture_url","city","email","password","phone","address","county","role","description","musicians_number","group_leader","external_url")
VALUES
('mon groupe de rock','image musicos','toulouse','musicos@musicos.fr','1234','0707070707','2 rue des poires','haute-garonne','musicos','description musicos',3,'Michel','musicos lien externe');

--Insertition event
INSERT INTO "event"("name", "description","picture_url","owner_id", "address","county","is_published","is_archived","event_date","external_link","event_type","type_of_music_needed")
VALUES
('monconcert','description test','image test',1,'2 rue des pommes','haute garonne',false,false,now(),'lien externe','concert','rock');


--Insertition canditature pour un event
INSERT INTO "candidate_per_event" ("event_id","user_id","candidate_status_id")
VALUES
(1,1,1);

--Insertition genre musical pour un musicos
INSERT INTO "musical_type_per_user"("musical_type_id","user_id")
VALUES
(1,2),
(2,2);

COMMIT;