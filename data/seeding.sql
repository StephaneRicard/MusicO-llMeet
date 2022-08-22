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
INSERT INTO "users" ("name", "picture_url","city","email","password","phone","address","county","role","description","external_url","momer_to_contact","momer_type_id")
VALUES
('name1 momer','image1 momer','city1 momer','momer1@mail.fr','password1 momer','phone1 momer','adresse1 momer','county1 momer','momer','description1 momer','lien externe1 momer', 'nom momer1', 3),
('name2 momer','image2 momer','city2 momer','momer2@mail.fr','password2 momer','phone2 momer','adresse2 momer','county2 momer','momer','description2 momer','lien externe2 momer', 'nom momer2', 3);

--Insertition musicos
INSERT INTO "users" ("name", "picture_url","city","email","password","phone","address","county","role","description","musicians_number","group_leader","external_url")
VALUES
('name1 musicos','image1 musicos','city1 musicos','musicos1@mail.fr','password1 musicos','phone 1 musicos','adresse1 musicos','county1 musicos','musicos','description1 musicos',3,'leader1 musicos','musicos1 lien externe'),
('name2 musicos','image2 musicos','city2 musicos','musicos2@mail.fr','password2 musicos','phone 2 musicos','adresse2 musicos','county2 musicos','musicos','description2 musicos',3,'leader2 musicos','musicos2 lien externe');
--Insertition event
INSERT INTO "event"("name", "description","picture_url","owner_id", "address","county","is_published","is_archived","event_date","external_link","event_type","type_of_music_needed")
VALUES
('name1 event','description1 event','image1 event',1,'adresse1 event','county1 event',false,false,now(),'external_link1 event','type1 event','needed1 event'),
('name2 event','description2 event','image2 event',1,'adresse2 event','county2 event',true,false,now(),'external_link2 event','type2 event','needed2 event'),
('name3 event','description3 event','image3 event',1,'adresse3 event','county3 event',false,false,now(),'external_link3 event','type3 event','needed3 event'),
('name4 event','description4 event','image4 event',1,'adresse4 event','county4 event',true,false,now(),'external_link4 event','type4 event','needed4 event');

--Insertition canditature pour un event
INSERT INTO "candidate_per_event" ("event_id","users_id","candidate_status_id")
VALUES
(2,3,1);

--Insertition genre musical pour un musicos
INSERT INTO "musical_type_per_users"("musical_type_id","users_id")
VALUES
(1,3),
(2,3);

COMMIT;