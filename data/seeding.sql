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
('francois','https://i.pinimg.com/736x/b3/21/a5/b321a58fa62571623b12fefb4b89d230.jpg','lyon','francois@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33770411497','9 rue du general doufin','rhone','momer','bar bien frequente par les boomers','lien externe1 momer', 'francois', 1),
('luc','https://media-cdn.tripadvisor.com/media/photo-s/01/29/47/e7/restaurant-plein-air.jpg','paris','luc@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700046727','23 rue du colonel jean mi','ile de france','momer','restaurant gastronomique 2 etoiles','lien externe2 momer', 'luc', 1),
('luc','https://cibul.s3.amazonaws.com/event_impromptu-musical-de-l-association-des-musiciens-de-l-insa-rouen-normandie_326003.jpg','paris','lucledeuxieme@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33767402086','1 rue de la gare','ile de france','momer','association DuFest, on organise des festivales','lien externe2 momer', 'luc', 3),
('bernard','https://i.pinimg.com/originals/38/aa/13/38aa1386ae52711b3163031e8dc3f8b3.jpg','paris','bernard@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33688284280','78 rue des marillons','ile de france','momer','bar dans une ambiance de pub avec soiree jeux de societes les mardi','lien externe2 momer', 'bernard', 1),
('bernardette','https://www.imusic-events.com/wp-content/uploads/2022/06/instruments-e1655724692325.png','dijon','bernardette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700280075','6 souquez les artimuses','cote d or','momer','organisateur de concerts pour la mairie de dijon','lien externe2 momer', 'bernardette', 3),
('stephane','https://img.freepik.com/photos-premium/manavgat-turquie-13-novembre-2021-restaurant-plein-air-au-bord-mer-side_533998-6323.jpg?w=2000','marseille','stephane@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33773828833','21 rue de la liberte','Bouches-du-Rhône','momer','restaurant/bar/discotheque/possionnerie dans les vieux quartier','lien externe2 momer', 'marie', 1),
('richard','https://i.chzbgr.com/thumb800/9257989/h668BD43E/photos-of-a-funny-sign-for-a-gentlemens-club-featuring-jokes-and-sayings','marseille','richard@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33672793129','8 rue montparnasse','Bouches-du-Rhône','momer','strip club avec buffet a volonte les samedi','lien externe2 momer', 'richard', 3),
('bruno','http://madeinmarseille.net/actualites-marseille/bar-concert-hard-rock-cafe-marseille.jpg','lyon','bruno@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33634884327','9 avenue de la machine a laver','rhone','momer','bar a cote de la place principale, tres bien situe et une fidele clientele de proxenetes','lien externe2 momer', 'bruno', 1),
('olexiy','http://www.net1901.org/image/use2/7/76091.jpg','toulouse','olexiy@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33765211437','45 rue des glorieuses','Haute-Garonne','momer','Collectif des nouveaux talents francais under 18','lien externe2 momer', 'olexiy', 3),
('brunette','https://api-cdn.arte.tv/img/v2/image/pNyK3ojBsfoFi6xqz4j3eW/1920x1080','bordeaux','brunette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33779946137','98 avenue du grand','gironde','momer','collectif du Hell festival','lien externe2 momer', 'brunette', 3),
('mouton','https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/6/8/7687f6fcf3_50154558_mariage-contrat.jpg','dijon','mouton@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33651748582','27 rue des beaux bois','cote d or','momer','monton vincent, 40ans et futur mari !','lien externe2 momer', 'mouton', 2),
('bruna','https://www.pariszigzag.fr/wp-content/uploads/2015/03/Capture-d%E2%80%99ecran-2019-03-08-a-14.05.03.png','paris','bruna@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700062667','5 avenue du pavillon','ile de france','momer','bar dans une vieille eglise, endroit parfait pour decompresser','lien externe2 momer', 'cloclo', 1),
('maelis','http://www.pariszigzag.fr/wp-content/uploads/2016/06/img_5195-e1467123588962.jpg','paris','maelis@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700745649','85 rue de la tour','ile de france','momer','Ce restaurant Bocuse avec terrasse et vaste véranda propose des plats de saison aux saveurs méditerranéennes.','lien externe2 momer', 'dilou', 1),
('carla','https://lalsacien.com/wp-content/uploads/2022/04/photo-devanture-entree-restaurant-lalsacien-lyon-header.jpg','lyon','carla@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33600745649','12 parc des princes','rhone','momer','Repas sur place · Aucun plat à emporter · Aucune livraison','lien externe2 momer', 'carla', 3),
('johnny','https://www.lecollectifdesfestivals.org/collectif/wp-content/uploads/2020/03/cropped-LogoCDF.png','bordeaux','johnny@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700765149','6 rue du bouquet','gironde','momer','Depuis 2005,  le Collectif des festivals accompagne les festivals
dans leurs démarches de développement durable.','lien externe2 momer', 'johnny', 3),
('joe','https://media.sudouest.fr/4701498/1000x500/so-57e1046166a4bde778c98e42-ph0.jpg?v=1459494495','dijon','joe@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33659745149','9bis rue des marons','cote d or','momer','Association animée par l’esprit collaboratif, nous menons depuis 25 ans des projets culturels pour tous et toutes, en partenariat avec les habitant·e·s, associations, collectivités… du Pays de Retz.','lien externe2 momer', 'joe', 3),
('joe','https://actualite-dijon.fr/wp-content/uploads/2014/06/Fotolia_61730571_S-660x330.jpg','dijon','joe2@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33600825693','23bis rue du chabys','cote d or','momer','Very Important Bénévoles : le collectif des festivals dijonnais mène une étude, inédite, sur les (indispensables) bénévoles','lien externe2 momer', 'tintin', 3),
('valentin','https://www.sncf-connect.com/assets/styles/scale_max_width_961/public/media/2019-05/toulouse-132-jose-manuel-herrador.jpg?itok=D7b94a6P','marseille','valentin@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33625745949','2 rue des gentilles dames','Bouches-du-Rhône','momer','bar dans l ambiance medievale, organisation de gigs tous les dimanches','lien externe2 momer', 'valentin', 1),
('yoda','https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/f10cea8a-2840-4cae-a9d9-250cfbafd5cc/312e6c39-e592-4eec-b667-c9be976e4e39.jpg','toulouse','yoda@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33686746449','5 avenue de la galere','Haute-Garonne','momer','restaurant des vielles capres, ambiance polynesienne','lien externe2 momer', 'yoda', 1),
('baptiste','https://www.hotelparisjadore.com/fr/blog/wp-content/uploads/2019/08/mariage-770x512.jpg','lyon','baptiste@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33642746949','32 avenue du manque dinspiration','rhone','momer','Organisateur de mariages, toujours à la recherche de groupes pour des concerts en plein air et autres','lien externe2 momer', 'baptiste', 3),
('kelly','https://cibul.s3.amazonaws.com/7ed58989d52e405eb59e40a29d32cc3f.base.image.jpg','paris','kelly@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33613567849','6 rue des beaux yeux','ile de france','momer','comite du petit theatre, organisateur de concerts en plein air, en partenariat avec les colectivites locales pour la promotion de la region','lien externe2 momer', 'peneloppe', 3);

--Insertition musicos
INSERT INTO "users" ("name", "picture_url","city","email","password","phone","address","county","role","description","musicians_number","group_leader","external_url")
VALUES
('carla','https://i.pinimg.com/originals/b3/ff/3a/b3ff3accc46377d013a80eb9519c8c1c.jpg','toulouse','carla@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33613567568','52 avenue de la savane','Haute-Garonne','musicos','guitariste de malade ! ',3,'carla','https://www.youtube.com/watch?v=Bk7B0hsk_R0'),
('Jose','https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80','paris','Jose@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33659874535','4 avenue des galeres','ile de france','musicos','Groupe de 4 violonistes du futur ! Nous realiserons vos reves les plus fous',3,'Jose','https://www.youtube.com/watch?v=NHhaZnnz5yE'),
('marine','https://images-na.ssl-images-amazon.com/images/I/91I89Qh5JzL.png','lyon','marine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361378532','12 rue des galettes','rhone','musicos','Vaiqueurs de Nouvelle Star 2010',3,'marine musicos','https://www.youtube.com/watch?v=iX-QaNzd-0Y'),
('georgette','https://as1.ftcdn.net/v2/jpg/01/93/38/40/1000_F_193384026_F34lj9rX9W4ixlVZBrTJmijK010Tdv0j.jpg','paris','georgette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356788','8bis rue des gommes','ile de france','musicos','Finaliste The Voice 2019',3,'georgette','https://www.youtube.com/watch?v=Vn8phH0k5HI'),
('camille','https://i.ytimg.com/vi/NsUWXo8M7UA/maxresdefault.jpg','paris','camille@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356258','6 avenue des fraise','ile de france','musicos','@dj nowhoiam sur instagrame pour mon profil lachez un like svp',3,'camille','https://www.youtube.com/watch?v=NcXsK_u4ixI'),
('solene','https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg','bordeaux','solene@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361344588','65 rue de la carotte','gironde','musicos','groupe rap fusion electro fusion classique fusion pop',3,'solene','https://www.youtube.com/watch?v=aQZDyyIyQMA'),
('stephane','https://thumbs.dreamstime.com/b/portrait-de-profil-de-jeune-musicien-masculin-beau-77793098.jpg','paris','stephane@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33648484757','5bis i ll be back','ile de france','musicos','groupe de 3 trompettises ',3,'stephane','https://www.youtube.com/watch?v=AcHHE9bvLgY'),
('laurent','https://lequotidien.sn/wp-content/uploads/2021/08/Sarro-1.jpg','bordeaux','laurent@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356784','15 j ai glisse chef','gironde','musicos','engagez moi svp',3,'lolo','https://linkaband.com/groove-garden'),
('virginie','https://c8.alamy.com/compfr/m52afp/profil-de-toute-la-longueur-d-un-musicien-de-jazz-jouant-femme-un-saxophone-isole-sur-fond-blanc-m52afp.jpg','lyon','virginie@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33186152578','58 rue de la marquise','rhone','musicos','Groupe de variete francaise',3,'virginie','https://linkaband.com/mv'),
('betty','https://cdn-s-www.ledauphine.com/images/733840C3-6EBF-4A1D-8796-229D6902EA60/NW_raw/une-musicienne-experimentee-bien-a-l-aise-dans-son-espace-de-travail-creatif-1524333985.jpg','paris','betty@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33484854568','8 avenue du carre','ile de france','musicos','Groupe de passionnes / vaiqueurs du trophe de l univers de la musique des meilleurs au monde',3,'betty','https://linkaband.com/gabriel-the-voice-the-lobsters'),
('laurent','https://www.recherche-musiciens.com/Modules/Upload/Uploaded/cropped/webp/a/a7386f9f909945d4c92f4e61b3665a97ae26f5e74d48caef80.webp','bordeaux','laurent@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361316784','6bis rue des flammes','gironde','musicos','groupe de 4 dj disponibles pour mariage et autres evenements / experience en festival hellfest',3,'laurent','https://linkaband.com/maseko'),
('stephane','https://res.cloudinary.com/dcyafbpoh/image/upload/v1538131706/musicien-chanteur-solo.jpg','paris','stephane@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3363256784','2bis avenue des affaires','ile de france','musicos','pianiste solo disponible pour gig / large repertoire musical',3,'stephane','https://linkaband.com/mezzo-musique'),
('claudine','https://pwiic.xyz/upload/pictos/484a15e53cfe559089249df84b02778c.webp','lyon','claudine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356782','52 avenue de la liberte','rhone','musicos','groupe pop-rock fusion - disponible pour gig et evenements de petit envergure',3,'claudine','https://www.youtube.com/watch?v=x5mVJYPSPDw'),
('paul','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDiHxy-M5SDHJhBOkq-7y5Opb_V4vSavJcA&usqp=CAU','lyon','paul@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364356784','123 rue du soleil','rhone','musicos','groupe rock pret à vous faire danser toute la nuit !',3,'paul','https://www.youtube.com/watch?v=t-wFKNy0MZQ&list=RDMM&start_radio=1&rv=x5mVJYPSPDw'),
('polo','https://www.studio1822.fr/wp-content/uploads/2018/05/portrait_musicien_Flavien_Bassimon__Flutiste__05-3.jpg','paris','polo@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364556784','32 salade cesar','ile de france','musicos','maitre chanteur à l opera de paris de 2000 à 2008, disponible pour representations',3,'polo','https://www.youtube.com/watch?v=FBnAZnfNB6U'),
('rocco','https://meragor.com/files/styles//ava_800_800_wm/artisty-lyudi-muzhchiny-muzyka-16016.jpg','lyon','rocco@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364357784','6 avenue paul de la roquette','rhone','musicos','groupe de 3 jeunes chanteurs avce repertoire important - tres portes sur chansons paillardes',3,'rocco','https://www.youtube.com/watch?v=RhMYBfF7-hE'),
('david','https://www.radiofrance.fr/s3/cruiser-production/2022/08/bbd0e66a-aedf-43b1-b8f9-cb82fe4fdac4/1200x630_gettyimages-90954915-612x612.jpg','paris','david@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364356781','9 rue de la voiture','ile de france','musicos','joue de la harpe depuis 15 ans, a la recherche d opportunites pour faire partager ma passion',3,'david','https://www.klemenslakonja.com/'),
('nadine','https://st.depositphotos.com/3332767/4937/i/600/depositphotos_49375905-stock-photo-female-musician-holding-acoustic-guitar.jpg','paris','nadine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364866784','11 avenue du mouton','ile de france','musicos','groupe rock-pop experimente et disponible des demain',3,'nadine','https://www.ecouter-musique-gratuite.com/musiques-francaises/ofenbach/'),
('mouhamed','https://www.spirit-of-metal.com/membre_groupe/photo/Hammett%20Kirk-1613_8ae5.jpg','lyon','mouhamed@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364376284','8 rue de la societe','rhone','musicos','groupe de 52 trompettistes disponible pour des mariages - on peut egalement faire des acrobaties',3,'mouhamed','musicos1 lien externe'),
('claudia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9-FA2UNloRWMPOGFRHGcqAqH0Yk0IU6PzQ&usqp=CAU','paris','claudia@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361234784','3 avenue du marchand','ile de france','musicos','groupe de 3 - 1 guitariste, 1 bassiste et 1 chanteur disponibles pour concerts et autres evenements. On connait tous les johnny',3,'claudia','musicos2 lien externe'),
('morganne','https://i.pinimg.com/564x/d6/a1/fd/d6a1fdbd79b80339d009aff691f49985.jpg','bordeaux','morganne@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364321784','6 rue du bapteme','gironde','musicos','6 solistes electro becano abricot',3,'morganne','https://www.ecouter-musique-gratuite.com/musiques-francaises/boulevard-des-airs/'),
('renaud','https://i.pinimg.com/736x/54/6d/b2/546db2cb9739337538d36c94af893033.jpg','toulouse','renaud@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3367896784','9 rue de la rocaille','Haute-Garonne','musicos','2 chanteurs soudisponibles pour les soirees',3,'renaud','https://www.ecouter-musique-gratuite.com/musiques-francaises/les-enfoires/');

--Insertition event
INSERT INTO "event"("name", "description","picture_url","owner_id", "address","county","is_published","is_archived","event_date","external_link","event_type","type_of_music_needed")
VALUES
('Dj Sunny','DJ set on Rooftop - free drinks for under 18','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2022/04/Rone-800x450.png',1,'46bis rue du theatre','rhone',true,true,2022-12-12,'http://dontevenreply.com/','festival','electro-house'),
('Pool party','Funk, jazz, musiques africaines ou d’ailleurs, nul doute que ce collectif formé par 7 musiciens d’origine et d’inspirations différentes saura mettre le feu à la soirée et vous donner l’envie irrépressible de danser.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2022/05/277499633_526839392141803_8965407344747176313_n-800x450.jpg',2,'21 avenue de madame','ile de france',true,false,2022-08-29,'https://pointerpointer.com/','concert','jazz-funk'),
('Ultra','le Transbordeur accueillera 3 artistes, dont la chanteuse hispano-française November Ultra, aperçue l’année dernière en première partie de Pomme aux Nuits de Fourvière. Sa voix incroyablement suave s’accorde parfaitement à ses petites merveilles de chansons folk pour un rendu d’une incroyable douceur. La soirée verra également les concerts du duo pop-folk hollandais Donna Blue et les chansons électro du stéphanois Fellower.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2022/06/top_5_concerts-800x481.jpg',3,'2 rue du collegue','ile de france',true,true,2022-02-06,'https://wallpaperaccess.com/full/463550.jpg','concert','pop'),
('Dj Sunny','DJ set on Rooftop - free drinks for under 18','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2022/03/Festivals-autour-de-Lyon-800x480.jpg',4,'6bis rue du bis','ile de france',true,true,2022-11-06,'https://archive.org/web/','anniversaire','electro-house'),
('Curtis Harding','Le Food-Society, le très cool food court de la Part-Dieu, organise régulièrement des concerts. Mais cette fois, il profite de l’immense rooftop du dernier étage pour inviter, un peu au dernier moment, Curtis Harding. Le chanteur soul viendra vous faire shaker votre body à l’heure du coucher du soleil, tout en mangeant un bon barbecue. Elle est pas belle la vie ?','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/10/general-elektiks.jpeg',5,'10 avenue des autres','cote d or',true,true,2022-05-06,'https://findtheinvisiblecow.com/','concert','blues'),
('Chinese Man Record Party','DJ set on Rooftop - free drinks for under 18','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2022/02/Camion-Bazar-La-Mamie-s-1160x580.jpg',6,'21 rue des bobo','Bouches-du-Rhône',true,true,2022-04-21(),'https://play2048.co/','concert','electro-house'),
('The World','L’association CCO qui gérait déjà la salle de Villeurbanne (que les fans de metal connaissent bien) a investi un autre lieu carrément cool depuis quelques années, à quelques encablures de la Soie. Dans le futur nouveau quartier de l’Autre Soie, la Rayonne occupe un ancien foyer d’ouvrières de la soie, et investit surtout un immense parc. Parfait pour organiser plein de soirées (et d’après-midi), dont cette carte blanche au label Chinese Man Record. Au programme, le duo marseillais d’inspiration très latino Baja Frequencia, le producteur et membre du groupe Chinese Man MATTEO, et le dj et producteur lyonnais Fisto.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2019/01/rone_credit_flavienprioreau-800x400.jpeg',7,'36 rue du lac','Bouches-du-Rhône',true,true,2022-12-15,'http://papertoilet.com/','pool party','blues'),
('The Faim','Les Australiens nous avaient déjà convaincus avec leur tube Summer is a Curse qui tournait en boucle il y a quelques années ; ils viennent cette fois nous présenter leur nouvel album Talk Talk qui sort dans un mois. Des morceaux à priori toujours dans la même veine de rock alternatif que vous pourrez découvrir lors d’une soirée à ne pas rater.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2017/07/Jardin-des-chartreux-2-_-Anthony-Nuguet.png',8,'65 rue du 65','rhone',false,true,2022-09-12,'https://www.mapcrunch.com/','anniversaire','rap'),
('Big Thief','Ils viennent de Brooklyn, mais on pourrait les croire de beaucoup plus loin, notamment grâce à la voix sulfureusement éraillée de la chanteuse Adrianne Lenker (qui chante aussi en solo). Encore une soirée qui devrait bien nous transporter.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/05/62304207_10157403737278336_1999740376495161344_n-800x533.jpg',11,'9 avenue du trou','cote d or',false,false,2022-11-25,'http://ww7.beesbeesbees.com/','session improv','reggae'),
('Tops','on part au nord, direction Montréal pour accueillir un autre quatuor, TOPS. Cette fois, on est plus dans la pop atmosphérique et envoûtante, toujours grâce à la magnifique voix de la chanteuse. Parfait pour chiller sur notre péniche préférée.','https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg',12,'21 rue des ecoles','ile de france',true,false,2022-02-06,'https://screamintothevoid.com/','festival','rock'),
('A Thou Bout d’Chant','petite salle située dans le premier arrondissement met en valeur la chanson française et aide à l’émergence de talents locaux depuis 20 ans. Alors pour fêter cet anniversaire comme il se doit, ce ne sont pas moins de 9 artistes qui seront présents ce soir au Transbordeur : Tom Bird, Oscar les Vacances, Mauvais Garçon, Pandore, Llimace, Noémie Brigant, Zim, Slamouraï, Biscotte.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/05/Citron-sucre-800x700.png',10,'5 rue de la place','gironde',true,true,2022-12-01,'https://theuselessweb.com/','concert','hip hop'),
('Serpent','A ne pas rater assurément. À noter que le reste de la programmation du festival est plutôt cool aussi : Kid Francescoli et Wendy Martinez le même jour, French 79, Tahiti 80 et Human Pattern la veille, Throes + The Shine et Kunta le samedi, et LGMX, Mazalda et Spelim le dimanche.
Sans parler de la partie street food qu’on adore aussi, miam.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/11/Urban-Village.jpg',14,'3 rue du cardinal','rhone',true,true,2022-04-07,'https://stellarium-web.org/','mariage','rock-metal'),
('Baptiste W Hamon','parfois en anglais, parfois en français. Le jeune song writter viendra jouer son troisième album, “Jusqu’à la lumière”, produit par John Parish, le vieux complice de PJ Harvey (et de plein d’autres groupes en fait).','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2019/01/rone_credit_flavienprioreau-800x400.jpeg',15,'6bis rue du charme','gironde',true,true,2022-06-05,'http://www.staggeringbeauty.com/','concert','metal'),
('Amarula Café Club','Pour définir leur musique, le collectif parisien parle d’afro-pop, mais en réalité, c’est encore plus varié, puisque le quatuor en partie originaire de Madagascar et de la Réunion chante en anglais, en malgache, en français ou en espagnol. Tout ça sur des rythmes chaloupés qui invite à danser un cocktail à la main.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2018/12/Ukandanz-1500-800x435.jpg',18,'4 avenue des templiers','Bouches-du-Rhône',false,false,2022-05-04,'https://apod.nasa.gov/apod/astropix.html','concert','variete francaise'),
('Jonathan Bree','Le visage caché derrière un masque impassible, le néo-zélandais distille une cold-pop impeccable de précision, armé de sa voix de crooner, des musiciens (dont un quatuor à cordes) et des danseuses. Il avait déjà hypnotisé le public de la salle feyzinoise il y a quelques années et devrait vraisemblablement reproduire la même performance ce mercredi.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2020/01/Concert_Shaka_Ponk_Lyon-800x533.jpg',1,'23 avenue des coches','rhone',true,true,2022-06-08,'https://zoomquilt.org/','concert','pop-rock'),
('Nuits Sonores','Toujours à la pointe de l’innovation, le festival brouille les codes en investissant l’immense site des anciennes usines Fagor-Brandt en pleine journée pour les Days (de 16 h à minuit), avec une scène live, une scène performances hybrides et vidéos 360° et un espace soundsystem. Chaque soir (de 23 h à 5 h), c’est un artiste qui sert de curateur et invite la crème des artistes musicaux du moment dans l’autre lieu emblématique du festival, la Sucrière. En parallèle, d’autres concerts, performances et animations sont organisées un peu partout dans la ville ','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2020/03/photo-1412859-1160x773.jpg',19,'7bis rue de la flotte','Haute-Garonne',true,true,2022-03-06,'https://www.internetlivestats.com/','pool party','rap'),
('Le Gros 4','en référence au Big Four of Trash, qui désigne les 4 groupes les plus influents du trash metal, à savoir Metallica, Megadeth, Slayer et Anthrax. Au programme, de la version française Ultra Vomit, Mass Hysteria, Tagada Jones et No One is Innocent pour une soirée riche en décibels.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2020/01/Kompromat-800x427.jpg',17,'46 rue de du j en peux plus','cote d or',false,true,2022-06-17,'https://en.wikipedia.org/wiki/List_of_individual_dogs','mariage','soul'),
('Horse Field Festival','On prend un peu de hauteur, direction les Monts d’Or pour un petit festival, mais avec une programmation là encore carrément canon. Le samedi soir, vous pourrez notamment écouter le bluesman lyonnais à la voix sombre Théo Charaf, ou encore le drômois H-Burns qui viendra présenter son magnifique dernier album hommage à Leonard Cohen, Burns On The Wire.','https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/04/Nuits_sonores_6_-_Brice_Robert-800x533.jpg',16,'4 rue des tulipes','cote d or',true,false,2022-12-01,'https://musclewiki.com/','concert','hip hop');

--Insertition canditature pour un event
INSERT INTO "candidate_per_event" ("event_id","users_id","candidate_status_id")
VALUES
(1,3,1),
(2,4,1),
(3,21,1),
(4,19,2),
(18,20,1),
(18,18,3),
(2,16,3),
(1,12,1),
(16,11,1),
(2,10,1),
(15,4,1),
(2,7,2),
(6,7,1),
(4,6,3),
(17,2,1),
(7,1,1),
(5,1,3),
(13,10,2),
(14,10,2),
(2,20,1),
(15,13,1),
(3,12,3),
(8,11,1),
(3,10,1),
(17,17,1),
(13,18,3),
(11,19,1),
(6,19,3),
(15,15,2),
(11,10,2),
(11,11,3),
(6,4,3),
(1,3,2),
(2,2,1),
(12,5,1),
(4,8,1),
(2,7,3),
(11,4,3),
(3,3,1);

--Insertition genre musical pour un musicos
INSERT INTO "musical_type_per_users"("musical_type_id","users_id")
VALUES
(1,1),
(12,2),
(11,3),
(10,4),
(9,5),
(8,6),
(7,7),
(2,8),
(3,9),
(5,10),
(4,11),
(2,12),
(4,13),
(1,14),
(5,15),
(6,16),
(8,17),
(2,18),
(3,19),
(2,20),
(5,21);

COMMIT;