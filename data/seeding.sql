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
('francois','https://cdn.pixabay.com/photo/2014/03/07/10/08/hard-rock-cafe-282006_960_720.jpg','Lyon','francois@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33770411497','9 rue du general doufin','Rhône','momer','bar bien frequente par les boomers','http://catcordion.sergethew.com/', 'francois', 1),
('luc','https://cdn.pixabay.com/photo/2017/05/25/21/23/temple-bar-2344400_960_720.jpg','paris','luc@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700046727','23 rue du colonel jean mi','Paris','momer','restaurant gastronomique 2 etoiles','https://estcequecestbientotleweekend.fr/', 'luc', 1),
('luc','https://cdn.pixabay.com/photo/2020/03/18/21/47/ireland-4945565_960_720.jpg','paris','lucledeuxieme@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33767402086','1 rue de la gare','Paris','momer','association DuFest, on organise des festivales','http://orteil.dashnet.org/cookieclicker/', 'luc', 3),
('bernard','https://cdn.pixabay.com/photo/2014/12/05/03/26/french-quarter-557461_960_720.jpg','paris','bernard@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33688284280','78 rue des marillons','Paris','momer','bar dans une ambiance de pub avec soiree jeux de societes les mardi','http://www.staggeringbeauty.com/', 'bernard', 1),
('bernarde','https://images.pexels.com/photos/1185440/pexels-photo-1185440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Gouvix','bernardette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700280075','6 souquez les artimuses','Calvados','momer','organisateur de concerts pour la mairie de Gouvix','http://weavesilk.com/', 'bernardette', 3),
('stephane','https://images.pexels.com/photos/722562/pexels-photo-722562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Marseille','stephanedeux@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33773828833','21 rue de la liberte','Bouches-du-Rhône','momer','restaurant/bar/discotheque/possionnerie dans les vieux quartier','http://gifctrl.com/', 'marie', 1),
('richard','https://images.pexels.com/photos/11106635/pexels-photo-11106635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Marseille','richard@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33672793129','8 rue montparnasse','Bouches-du-Rhône','momer','strip club avec buffet a volonte les samedi','https://cat-bounce.com/', 'richard', 3),
('bruno','https://images.pexels.com/photos/2955277/pexels-photo-2955277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Lyon','bruno@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33634884327','9 avenue de la machine a laver','Rhône','momer','bar a cote de la place principale, tres bien situe et une fidele clientele de proxenetes','https://barcinski.nl/', 'bruno', 1),
('olexiy','https://images.pexels.com/photos/1918218/pexels-photo-1918218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','toulouse','olexiy@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33765211437','45 rue des glorieuses','Haute-Garonne','momer','Collectif des nouveaux talents francais under 18','https://interneeeeet.com/', 'olexiy', 3),
('brunette','https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Bordeaux','brunette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33779946137','98 avenue du grand','Gironde','momer','collectif du Hell festival','https://www.ouaismaisbon.ch/', 'brunette', 3),
('mouton','https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Gouvix','mouton@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33651748582','27 rue des beaux bois','Calvados','momer','monton vincent, 40ans et futur mari !','http://eelslap.com/', 'mouton', 2),
('bruna','https://images.pexels.com/photos/7061481/pexels-photo-7061481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','paris','bruna@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700062667','5 avenue du pavillon','Paris','momer','bar dans une vieille eglise, endroit parfait pour decompresser','http://www.rrrgggbbb.com/', 'cloclo', 1),
('maelis','https://images.pexels.com/photos/9008746/pexels-photo-9008746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','paris','maelis@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700745649','85 rue de la tour','Paris','momer','Ce restaurant Bocuse avec terrasse et vaste véranda propose des plats de saison aux saveurs méditerranéennes.','http://www.koalastothemax.com/', 'dilou', 1),
('carla','https://images.pexels.com/photos/13221458/pexels-photo-13221458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Lyon','carla@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33600745649','12 parc des princes','Rhône','momer','Repas sur place · Aucun plat à emporter · Aucune livraison','http://randomcolour.com/', 'carla', 3),
('johnny','https://images.pexels.com/photos/9936440/pexels-photo-9936440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Bordeaux','johnny@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33700765149','6 rue du bouquet','Gironde','momer','Depuis 2005,  le Collectif des festivals accompagne les festivals dans leurs démarches de développement durable.','https://r33b.net/', 'johnny', 3),
('joe','https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Gouvix','joe@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33659745149','9bis rue des marons','Calvados','momer','Association animée par l’esprit collaboratif, nous menons depuis 25 ans des projets culturels pour tous et toutes, en partenariat avec les habitant·e·s, associations, collectivités… du Pays de Retz.','https://thatsthefinger.com/', 'joe', 3),
('joe','https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Gouvix','joe2@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33600825693','23bis rue du chabys','Calvados','momer','Very Important Bénévoles : le collectif des festivals Gouvixnais mène une étude, inédite, sur les (indispensables) bénévoles','https://www.bus-paradise.com/fr', 'tintin', 3),
('valentin','https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Marseille','valentin@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33625745949','2 rue des gentilles dames','Bouches-du-Rhône','momer','bar dans l ambiance medievale, organisation de gigs tous les dimanches','https://www.bus-paradise.com/fr', 'valentin', 1),
('yoda','https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','toulouse','yoda@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33686746449','5 avenue de la galere','Haute-Garonne','momer','restaurant des vielles capres, ambiance polynesienne','https://www.bus-paradise.com/fr', 'yoda', 1),
('baptiste','https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Lyon','baptiste@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33642746949','32 avenue du manque dinspiration','Rhône','momer','Organisateur de mariages, toujours à la recherche de groupes pour des concerts en plein air et autres','https://www.bus-paradise.com/fr', 'baptiste', 3),
('kelly','https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','paris','kelly@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33613567849','6 rue des beaux yeux','Paris','momer','comite du petit theatre, organisateur de concerts en plein air, en partenariat avec les colectivites locales pour la promotion de la region','https://www.bus-paradise.com/fr', 'peneloppe', 3),
('richard','https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Lyon','richard.darcy@escen.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33642746949','32 avenue du manque dinspiration','Rhône','momer','StripClub situe en face de l ecole','https://www.bus-paradise.com/fr', 'richard', 3);


--Insertition musicos
INSERT INTO "users" ("name", "picture_url","city","email","password","phone","address","county","role","description","musicians_number","group_leader","external_url")
VALUES
('La furieuse','https://cdn.pixabay.com/photo/2016/01/14/06/09/woman-1139397_960_720.jpg','toulouse','carladeux@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33613567568','52 avenue de la savane','Haute-Garonne','musicos','guitariste de malade ! ',3,'carla','https://www.youtube.com/watch?v=Bk7B0hsk_R0'),
('Jose le banjo','https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg','paris','Jose@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33659874535','4 avenue des galeres','Paris','musicos','Joueur de banjo du futur. Je peux vous aider à réaliser vos reves les plus fous',3,'Jose','https://www.youtube.com/watch?v=NHhaZnnz5yE'),
('Les taupes','https://cdn.pixabay.com/photo/2016/06/01/10/28/musicians-1428749_960_720.png','Lyon','marine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361378532','12 rue des galettes','Rhône','musicos','Vaiqueurs de Nouvelle Star 2010',3,'marine musicos','https://www.youtube.com/watch?v=iX-QaNzd-0Y'),
('Qualitatif','https://cdn.pixabay.com/photo/2017/04/12/18/45/music-2225358_960_720.jpg','paris','georgette@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356788','8bis rue des gommes','Paris','musicos','Finaliste The Voice 2019',3,'georgette','https://www.youtube.com/watch?v=Vn8phH0k5HI'),
('SuperUp','https://cdn.pixabay.com/photo/2016/08/19/11/11/musicians-on-the-beach-1605018_960_720.jpg','paris','camille@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356258','6 avenue des fraise','Paris','musicos','@dj nowhoiam sur instagrame pour mon profil lachez un like svp',3,'camille','https://www.youtube.com/watch?v=NcXsK_u4ixI'),
('Perdu','https://cdn.pixabay.com/photo/2019/12/20/15/07/musician-4708668_960_720.jpg','Bordeaux','solene@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361344588','65 rue de la carotte','Gironde','musicos','groupe rap fusion electro fusion classique fusion pop',3,'solene','https://www.youtube.com/watch?v=aQZDyyIyQMA'),
('Mamamia','https://cdn.pixabay.com/photo/2016/08/18/08/31/lemur-1602313_960_720.jpg','paris','stephanetrois@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33648484757','5bis i ll be back','Paris','musicos','groupe de 3 trompettises ',3,'stephane','https://www.youtube.com/watch?v=AcHHE9bvLgY'),
('LesConde','https://cdn.pixabay.com/photo/2016/03/27/07/38/police-1282330_960_720.jpg','Bordeaux','laurent@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356784','15 j ai glisse chef','Gironde','musicos','engagez moi svp',3,'lolo','https://linkaband.com/groove-garden'),
('Ma parole','https://cdn.pixabay.com/photo/2020/03/06/11/14/black-4906807_960_720.jpg','Lyon','virginie@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33186152578','58 rue de la marquise','Rhône','musicos','Groupe de variete francaise',3,'virginie','https://linkaband.com/mv'),
('Betty reverse','https://cdn.pixabay.com/photo/2018/02/07/22/11/portrait-3138140_960_720.jpg','paris','betty@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+33484854568','8 avenue du carre','Paris','musicos','Groupe de passionnes / vaiqueurs du trophe de l univers de la musique des meilleurs au monde',3,'betty','https://linkaband.com/gabriel-the-voice-the-lobsters'),
('Footprint on the moon','https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_960_720.jpg','Bordeaux','laurentledeuxieme@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361316784','6bis rue des flammes','Gironde','musicos','groupe de 4 dj disponibles pour mariage et autres evenements / experience en festival hellfest',3,'laurent','https://linkaband.com/maseko'),
('Ac/Db','https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_960_720.jpg','paris','stephane@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3363256784','2bis avenue des affaires','Paris','musicos','pianiste solo disponible pour gig / large repertoire musical',3,'stephane','https://linkaband.com/mezzo-musique'),
('UnDeuxTrois','https://cdn.pixabay.com/photo/2017/03/05/14/45/comic-style-2118785_960_720.jpg','Lyon','claudine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361356782','52 avenue de la liberte','Rhône','musicos','groupe pop-rock fusion - disponible pour gig et evenements de petit envergure',3,'claudine','https://www.youtube.com/watch?v=x5mVJYPSPDw'),
('Cracodile','https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg','Lyon','paul@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364356784','123 rue du soleil','Rhône','musicos','groupe rock pret à vous faire danser toute la nuit !',3,'paul','https://www.youtube.com/watch?v=t-wFKNy0MZQ&list=RDMM&start_radio=1&rv=x5mVJYPSPDw'),
('lulurio','https://cdn.pixabay.com/photo/2017/08/28/16/17/mario-2690254_960_720.jpg','paris','polo@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364556784','32 salade cesar','Paris','musicos','maitre chanteur à l opera de paris de 2000 à 2008, disponible pour representations',3,'polo','https://www.youtube.com/watch?v=FBnAZnfNB6U'),
('Les bambina','https://cdn.pixabay.com/photo/2015/05/12/21/19/black-764751_960_720.jpg','Lyon','rocco@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364357784','6 avenue paul de la roquette','Rhône','musicos','groupe de 3 jeunes chanteurs avce repertoire important - tres portes sur chansons paillardes',3,'rocco','https://www.youtube.com/watch?v=RhMYBfF7-hE'),
('Les meilleurs joueurs du monde','https://cdn.pixabay.com/photo/2018/03/06/06/58/performance-3202707_960_720.jpg','paris','david@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364356781','9 rue de la voiture','Paris','musicos','joue de la harpe depuis 15 ans, a la recherche d opportunites pour faire partager ma passion',3,'david','https://www.klemenslakonja.com/'),
('le groupe du futur','https://cdn.pixabay.com/photo/2015/06/23/19/23/caricature-819023_960_720.jpg','paris','nadine@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364866784','11 avenue du mouton','Paris','musicos','groupe rock-pop experimente et disponible des demain',3,'nadine','https://www.ecouter-musique-gratuite.com/musiques-francaises/ofenbach/'),
('le futur du groupe','https://cdn.pixabay.com/photo/2018/03/19/22/17/man-3241483_960_720.jpg','Lyon','mouhamed@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364376284','8 rue de la societe','Rhône','musicos','groupe de 52 trompettistes disponible pour des mariages - on peut egalement faire des acrobaties',3,'mouhamed','http://make-everything-ok.com/'),
('lé plu faur','https://cdn.pixabay.com/photo/2017/04/06/09/37/toy-2207781_960_720.jpg','paris','claudia@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3361234784','3 avenue du marchand','Paris','musicos','groupe de 3 - 1 guitariste, 1 bassiste et 1 chanteur disponibles pour concerts et autres evenements. On connait tous les johnny',3,'claudia','https://www.nyan.cat/'),
('plus dinspi','https://cdn.pixabay.com/photo/2022/08/25/15/07/hero-7410516_960_720.jpg','Bordeaux','morganne@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3364321784','6 rue du bapteme','Gironde','musicos','6 solistes electro becano abricot',3,'morganne','https://www.ecouter-musique-gratuite.com/musiques-francaises/boulevard-des-airs/'),
('pitie achevez moi','https://cdn.pixabay.com/photo/2016/08/18/08/31/lemur-1602313_960_720.jpg','toulouse','renaud@mail.fr','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3367896784','9 rue de la rocaille','Haute-Garonne','musicos','2 chanteurs soudisponibles pour les soirees',3,'renaud','https://www.ecouter-musique-gratuite.com/musiques-francaises/les-enfoires/'),
('bruno le musicos','https://cdn.pixabay.com/photo/2017/07/31/22/44/concert-2561749_960_720.jpg','toulouse','brunovillalon@gmail.com','$2a$12$s3DmoXyT3whnsa0dIFkuAudy1rN/C91SyU.f3SYd2FXjx1vQqsDP6','+3367896784','14 rue de la ferme','Haute-Garonne','musicos','Je suis au sommet de mon art',1000,'bruno','https://youtu.be/5jnZMW8C6wA');

--Insertition event
INSERT INTO "event"("name", "description","picture_url","owner_id", "address","city", "county","is_published","is_archived","event_date","external_link","event_type","type_of_music_needed")
VALUES
('Dj Sunny','DJ set on Rooftop - free drinks for under 18','https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_960_720.jpg',1,'46bis rue du theatre, Lyon','Lyon','Rhône',false,false,'2022-12-12','http://dontevenreply.com/','festival','electro-house'),
('Pool party','Funk, jazz, musiques africaines ou d’ailleurs, nul doute que ce collectif formé par 7 musiciens d’origine et d’inspirations différentes saura mettre le feu à la soirée et vous donner l’envie irrépressible de danser.','https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',2,'21 avenue de madame, Paris','Paris','Paris',true,false,'2022-08-29','https://pointerpointer.com/','concert','rock'),
('Ultra','le Transbordeur accueillera 3 artistes, dont la chanteuse hispano-française November Ultra, aperçue l’année dernière en première partie de Pomme aux Nuits de Fourvière. Sa voix incroyablement suave s’accorde parfaitement à ses petites merveilles de chansons folk pour un rendu d’une incroyable douceur. La soirée verra également les concerts du duo pop-folk hollandais Donna Blue et les chansons électro du stéphanois Fellower.','https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_960_720.jpg',3,'2 rue du collegue, Paris','Paris','Paris',false,false,'2023-02-06','https://seoi.net/penint/','concert','pop'),
('Dj Sunny','DJ set on Rooftop - free drinks for under 18','https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_960_720.jpg',4,'6bis rue du bis','Paris','Paris',false,false,'2022-11-06','https://archive.org/web/','anniversaire','electro-house'),
('Curtis Harding','Le Food-Society, le très cool food court de la Part-Dieu, organise régulièrement des concerts. Mais cette fois, il profite de l’immense rooftop du dernier étage pour inviter, un peu au dernier moment, Curtis Harding. Le chanteur soul viendra vous faire shaker votre body à l’heure du coucher du soleil, tout en mangeant un bon barbecue. Elle est pas belle la vie ?','https://cdn.pixabay.com/photo/2015/08/26/10/03/synthesizer-908298_960_720.jpg',5,'10 avenue des autres, Rosel','Rosel','Calvados',false,false,'2022-09-15','https://findtheinvisiblecow.com/','concert','blues'),
('Chinese Man Record Party','DJ set on Rooftop - free drinks for under 18','https://cdn.pixabay.com/photo/2016/08/01/11/28/rock-1560867_960_720.jpg',6,'21 rue des bobo, Marseille','Marseille','Bouches-du-Rhône',false,false,'2022-10-21','https://play2048.co/','concert','electro-house'),
('The World','L’association CCO qui gérait déjà la salle de Villeurbanne (que les fans de metal connaissent bien) a investi un autre lieu carrément cool depuis quelques années, à quelques encablures de la Soie. Dans le futur nouveau quartier de l’Autre Soie, la Rayonne occupe un ancien foyer d’ouvrières de la soie, et investit surtout un immense parc. Parfait pour organiser plein de soirées (et d’après-midi), dont cette carte blanche au label Chinese Man Record. Au programme, le duo marseillais d’inspiration très latino Baja Frequencia, le producteur et membre du groupe Chinese Man MATTEO, et le dj et producteur Lyonnais Fisto.','https://cdn.pixabay.com/photo/2016/07/20/22/15/crowd-1531427_960_720.jpg',7,'36 rue du lac, Mareseille','Mareseille','Bouches-du-Rhône',false,false,'2022-12-15','http://papertoilet.com/','pool party','blues'),
('The Faim','Les Australiens nous avaient déjà convaincus avec leur tube Summer is a Curse qui tournait en boucle il y a quelques années ; ils viennent cette fois nous présenter leur nouvel album Talk Talk qui sort dans un mois. Des morceaux à priori toujours dans la même veine de rock alternatif que vous pourrez découvrir lors d’une soirée à ne pas rater.','https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg',8,'65 rue du 65, Lyon','Lyon','Rhône',false,true,'2022-09-12','https://www.mapcrunch.com/','anniversaire','rap'),
('Big Thief','Ils viennent de Brooklyn, mais on pourrait les croire de beaucoup plus loin, notamment grâce à la voix sulfureusement éraillée de la chanteuse Adrianne Lenker (qui chante aussi en solo). Encore une soirée qui devrait bien nous transporter.','https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_960_720.jpg',11,'9 avenue du trou, Caen','Caen','Calvados',false,false,'2022-11-25','http://ww7.beesbeesbees.com/','session improv','reggae'),
('Tops','on part au nord, direction Montréal pour accueillir un autre quatuor, TOPS. Cette fois, on est plus dans la pop atmosphérique et envoûtante, toujours grâce à la magnifique voix de la chanteuse. Parfait pour chiller sur notre péniche préférée.','https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg',12,'21 rue des ecoles, Paris','Paris','Paris',false,false,'2022-11-06','https://screamintothevoid.com/','festival','rock'),
('A Thou Bout d’Chant','petite salle située dans le premier arrondissement met en valeur la chanson française et aide à l’émergence de talents locaux depuis 20 ans. Alors pour fêter cet anniversaire comme il se doit, ce ne sont pas moins de 9 artistes qui seront présents ce soir au Transbordeur : Tom Bird, Oscar les Vacances, Mauvais Garçon, Pandore, Llimace, Noémie Brigant, Zim, Slamouraï, Biscotte.','https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_960_720.jpg',10,'5 rue de la place, Bordeaux','Bordeaux','Gironde',false,false,'2022-12-01','https://theuselessweb.com/','concert','rock'),
('Serpent','A ne pas rater assurément. À noter que le reste de la programmation du festival est plutôt cool aussi : Kid Francescoli et Wendy Martinez le même jour, French 79, Tahiti 80 et Human Pattern la veille, Throes + The Shine et Kunta le samedi, et LGMX, Mazalda et Spelim le dimanche.
Sans parler de la partie street food qu’on adore aussi, miam.','https://cdn.pixabay.com/photo/2017/08/02/13/09/confetti-2571539_960_720.jpg',14,'3 rue du cardinal, Lyon','Lyon','Rhône',false,false,'2023-01-07','https://stellarium-web.org/','mariage','rock-metal'),
('Baptiste W Hamon','parfois en anglais, parfois en français. Le jeune song writter viendra jouer son troisième album, “Jusqu’à la lumière”, produit par John Parish, le vieux complice de PJ Harvey (et de plein d’autres groupes en fait).','https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg',15,'6bis rue du charme, Bordeaux','Bordeaux','Gironde',false,false,'2023-06-05','http://www.staggeringbeauty.com/','concert','metal'),
('Amarula Café Club','Pour définir leur musique, le collectif parisien parle d’afro-pop, mais en réalité, c’est encore plus varié, puisque le quatuor en partie originaire de Madagascar et de la Réunion chante en anglais, en malgache, en français ou en espagnol. Tout ça sur des rythmes chaloupés qui invite à danser un cocktail à la main.','https://cdn.pixabay.com/photo/2016/07/20/22/15/crowd-1531431_960_720.jpg',18,'4 avenue des templiers, Marseille','Marseille','Bouches-du-Rhône',false,false,'2023-05-04','https://apod.nasa.gov/apod/astropix.html','concert','variete francaise'),
('Jonathan Bree','Le visage caché derrière un masque impassible, le néo-zélandais distille une cold-pop impeccable de précision, armé de sa voix de crooner, des musiciens (dont un quatuor à cordes) et des danseuses. Il avait déjà hypnotisé le public de la salle feyzinoise il y a quelques années et devrait vraisemblablement reproduire la même performance ce mercredi.','https://cdn.pixabay.com/photo/2010/12/13/10/00/rock-2099_960_720.jpg',1,'23 avenue des coches, Lyon','Lyon','Rhône',true,true,'2022-12-08','https://zoomquilt.org/','concert','pop-rock'),
('Nuits Sonores','Toujours à la pointe de l’innovation, le festival brouille les codes en investissant l’immense site des anciennes usines Fagor-Brandt en pleine journée pour les Days (de 16 h à minuit), avec une scène live, une scène performances hybrides et vidéos 360° et un espace soundsystem. Chaque soir (de 23 h à 5 h), c’est un artiste qui sert de curateur et invite la crème des artistes musicaux du moment dans l’autre lieu emblématique du festival, la Sucrière. En parallèle, d’autres concerts, performances et animations sont organisées un peu partout dans la ville ','https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg',19,'7bis rue de la flotte, Toulouse','Toulouse','Haute-Garonne',true,true,'2023-03-06','https://www.internetlivestats.com/','pool party','rap'),
('Le Gros 4','en référence au Big Four of Trash, qui désigne les 4 groupes les plus influents du trash metal, à savoir Metallica, Megadeth, Slayer et Anthrax. Au programme, de la version française Ultra Vomit, Mass Hysteria, Tagada Jones et No One is Innocent pour une soirée riche en décibels.','https://cdn.pixabay.com/photo/2020/01/15/17/35/concert-4768496_960_720.jpg',17,'46 rue de du j en peux plus, Caen','Caen','Calvados',false,false,'2023-06-17','https://en.wikipedia.org/wiki/List_of_individual_dogs','mariage','soul'),
('Horse Field Festival','On prend un peu de hauteur, direction les Monts d’Or pour un petit festival, mais avec une programmation là encore carrément canon. Le samedi soir, vous pourrez notamment écouter le bluesman Lyonnais à la voix sombre Théo Charaf, ou encore le drômois H-Burns qui viendra présenter son magnifique dernier album hommage à Leonard Cohen, Burns On The Wire.','https://cdn.pixabay.com/photo/2018/03/27/00/33/music-3264716_960_720.jpg',16,'4 rue des tulipes, Caen','Caen','Calvados',true,false,'2022-12-01','https://musclewiki.com/','concert','jazz'),
('Soirée Jazz','Pratique sexuelle libertine consistant en un échange temporaire des partenaires réguliers, entre deux ou plusieurs couples.','https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg',22,'4 rue des tulipes, Lyon','Lyon','Rhône',false,false,'2022-12-01','https://musclewiki.com/','concert','jazz'),
('Kumbaya Fest','Bientôt la fin de l’été mais pas tout à fait ! Encore un peu de rab lors d’un après-midi organisé par l’association Solstice à ciel ouvert au MacBar, le bar éphémère du Musée d’Art Contermporain de Lyon qui ferme bientôt boutique, entre Djs sets, friperie et boissons fraîches ?','https://cdn.pixabay.com/photo/2020/11/01/13/41/music-notes-5703813_960_720.jpg',15,'6bis rue Elon Musk, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','jazz'),
('Graines Électroniques','Prenez de la musique, mixez-la avec de l’écologie et vous obtiendrez Graines Électroniques ! Nouvelle édition de ce festival avec une programmation électro aux oignons et des animations, des ateliers à gogo pour voir la vie en vert. Rendez-vous à la Station Mue !','https://cdn.pixabay.com/photo/2019/04/09/16/55/party-4114985_960_720.jpg',14,'59 rue des popo, Rodez','Rodez','Aveyron',true,false,'2023-01-01','https://musclewiki.com/','concert','electro'),
('Wine and Transat Festival','Etirer encore un peu les vacances, c’est ce que propose le Grand Hôtel-Dieu en invitant les vignerons de Crozes-Hermitage pour une soirée de total chill et des ateliers de dégustations pour l’ouverture du week-end.','https://cdn.pixabay.com/photo/2019/05/11/07/16/rock-4195221_960_720.png',13,'1 rue des serpillères, Sedan','Sedan','Ardennes',true,false,'2022-12-01','https://musclewiki.com/','concert','rap'),
('Boomrang Two Years','Anniversaire en grandes pompes pour Boomrang ! Le tiers-lieu du 3e fête cette année ses 2 bougies et a bien envie de le partager ! Pour l’occasion, une fanzine sera de sortie tout comme des DJs artistes choisis avec soin comme Lost in Materials ou Selected Lost Memories. Début de la boom à 19 h jusqu’à 23 h 30, le prix d’entrée est LIBRE.','https://cdn.pixabay.com/photo/2017/01/30/16/32/party-2021361_960_720.jpg',12,'9 avenue des caprices, Vichy','Vichy','Allier',true,false,'2023-04-01','https://musclewiki.com/','concert','rock'),
('Scandal’ Drag Show','Le Livestation DIY revient en fanfare et en paillettes ! Le collectif Scandal’ Drag prend les manettes pour une soirée blindtest et show rien que pour vous ! De quoi fêter la rentrée des classes avec panache ! Ça se passe de 20 h à 01 h, l’entrée est GRATUITE (pensez à réserver votre table).','https://cdn.pixabay.com/photo/2017/04/11/20/16/skillet-2222711_960_720.jpg',10,'4 rue des tulipes, Lyon','Lyon','Rhône',true,false,'2023-01-01','https://musclewiki.com/','concert','soul'),
('Mini club','Chaos in the CBD et Tatie Dee se partageront les platines pour une soirée jusqu’au petit matin au mythique Sucre. De quoi faire chauffer le rooftop et célébrer le début du mois de septembre allègrement ! Direction le Sucre de 23 h à 05 h, entrée à 10 € avant minuit, 14 € après','https://cdn.pixabay.com/photo/2017/07/28/15/40/microphone-2548973_960_720.jpg',9,'4 rue des tondeuses, Gex','Gex','Ain',true,false,'2023-01-01','https://musclewiki.com/','concert','rock'),
('This is French Touch','On ne se lassera jamais des années 90 et de ce “je ne sais quoi” qui les caractérisent si bien ! Sortez les tee-shirts punchy et vos baggys fétiches pour vous ambiancer sur les notes “so French” des Daft Punk, Mr Oizo ou encore Justice. Ça se passe au Groom de 23 h à 04 h et comptez 7 € l’entrée.','https://cdn.pixabay.com/photo/2014/11/01/12/13/stage-511909_960_720.jpg',10,'2bis rue des lettres, Marseille','Marseille','Bouches-du-Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','metal'),
('Vide-penderie','On reprend les bonnes habitudes avec Les Débraillées et leur vide-penderie mensuel ! L’occasion de trouver la pièce pour l’automne qui fera mouche (en prenant soin de la planète en plus de ça, tout ce qu’on aime ). Direction la boutique des Débraillées, vendredi et samedi de 11 h à 19 h, l’entrée est LIBRE.','https://cdn.pixabay.com/photo/2015/10/23/23/18/disco-1003870_960_720.jpg',9,'4 rue des tul, Caen','Caen','Calvados',true,false,'2023-02-01','https://musclewiki.com/','concert','jazz'),
('Séisme solidaire','On reprend les bonnes habitudes avec Les Débraillées et leur vide-penderie mensuel ! L’occasion de trouver la pièce pour l’automne qui fera mouche (en prenant soin de la planète en plus de ça, tout ce qu’on aime ). Direction la boutique des Débraillées, vendredi et samedi de 11 h à 19 h, l’entrée est LIBRE.','https://cdn.pixabay.com/photo/2014/12/12/10/49/music-565244_960_720.jpg',8,'4 rue des tulipes, Caen','Caen','Calvados',true,false,'2023-01-03','https://musclewiki.com/','concert','jazz'),
('Le Pèlerinage','1ère étape du Pèlerinage en plein coeur du parc de Gerland. Deux jours de musiques, de danse et de grand air pour cet Act 1. Bromo ou encore Frickion seront de la partie ce samedi parmi une longue liste d’artistes. Démarrage à 14 h le samedi pour terminer le dimanche à 22 h, l’entrée est LIBRE.','https://cdn.pixabay.com/photo/2015/11/17/23/41/show-1048467_960_720.jpg',7,'4 rue de la république, Paris','Paris','Paris',true,false,'2023-01-01','https://musclewiki.com/','concert','rock'),
('Everybody Trance','Autre option de rendez-vous pour le goûter avec le festival Everybody Trance qui a décidé de profiter de l’ombre des arbres pour vous concocter une programmation musicale délicieuse avec Binary Digit *Live*, César & Jason b2b Mars O10C, Lumbago et Maelita ! Ça se passe au parc de la Cerisaie de 15 h à 23 h et c’est GRATUIT !','https://cdn.pixabay.com/photo/2019/11/19/20/12/party-4638385_960_720.jpg',5,'3bis rue des des, Paris','Paris','Paris',true,false,'2022-12-25','https://musclewiki.com/','concert','jazz'),
('Disco House Session','Strass, groove and funk au Mob Hotel pour ce premier samedi du mois. Bryce Wax, Florent.VT et Märzhase seront les invités pour vous faire déhancher entre le goûter et l’apéro. Le rendez-vous est pris de 16 h à 21 h et l’entrée est GRATUITE.','https://cdn.pixabay.com/photo/2017/03/24/13/10/concert-2171166_960_720.jpg',5,'41 rue des cachets, Paris','Paris','Paris',true,false,'2023-01-02','https://musclewiki.com/','concert','electro'),
('Furie Open Air','Profiter encore des beaux jours, de la douceur -enfin- revenue pour faire toujours plus le plein de sons et de chill en plein air. Le collectif Furie invite ses potes – Pedro Bertho ou Papini pour ne citer qu’eux –  pour des djs sets fous, fous, fous ! Direction la friche de l’Autre Soie, de 17 h à 01 h, comptez entre 7 € et 12 € l’entrée.','https://cdn.pixabay.com/photo/2020/06/12/20/21/sound-speakers-5291699_960_720.jpg',4,'4 rue des tulipes, Caen','Caen','Calvados',true,false,'2022-12-01','https://musclewiki.com/','concert','jazz'),
('Soirée hip-hop','L’Olympique Lyonnais et Nuits Sonores vous donnent RDV chez Heat pour un bon gros plateau hip-hop dans la grande halle, à partir de 18 h avec Andy4000, Dope Saint Jude, Kayla, Le Juiice, Shy One et YANKA. Ça se passe dans la grande halle de 18 h à minuit est ça coûte 8 €.','https://cdn.pixabay.com/photo/2019/03/31/11/40/microphone-4092920_960_720.jpg',3,'44 rue des bobo, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','hip-hop'),
('Before le Sucre','Au Heat aussi on souffle des bougies ! Celles des 10 ans de l’Antinote, entité musicale qui ne cesse de mettre en lumière les talents de la scène musicale française. Zaltan et Nico Motte du crew seront de la fête pour cette mise en jambes. Ça se passe de 18 h à 23 h et l’entrée est LIBRE.','https://cdn.pixabay.com/photo/2021/10/06/20/45/nightclub-6686682_960_720.jpg',2,'43 rue des boobo, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','jazz'),
('Shall we swing ?','Et c’est une vraie question ! Si vous avez envie de tester votre bounce et laisser le swing vous envahir, venez participer à une initiation au lindy hop pour une bonne dose de danse et de bonne humeur. Direction la Place Guichard de 19 h à 19 h 30 pour les stages d’initiation qui sont GRATUITS.','https://cdn.pixabay.com/photo/2020/04/16/11/19/concert-5050235_960_720.jpg',1,'3 rue des tulipes, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','pop'),
('Crowd Control','Qui est partant pour une petite session d’Happiness Therapy maybe in Crowd Control ? Session 100% house européenne pour un coup de boost de reprise ! Ça se passe de Groom de 23 h à 04 h, comptez 5 € l’entrée.','https://cdn.pixabay.com/photo/2022/08/02/23/03/singer-7361481_960_720.jpg',1,'3 rue des tulipes, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','soul'),
('Initiation Quidditch','Croyez-le ou pas, la pratique du Quidditch est très sérieuse et ce depuis 20 ans ! Alors on ne vous fera malheureusement pas voler sur un balai mais tout y est ! Et si vous avez envie de faire partie de l’équipe lyonnaise, ce week-end d’initiation est aussi celui du recrutement ! Ça se passe au Parc Blandan, de 14 h à 18 h et c’est GRATUIT.','https://cdn.pixabay.com/photo/2020/12/14/13/54/drums-5830943_960_720.jpg',10,'41 rue des booboo, Lyon','Lyon','Rhône',true,false,'2022-12-01','https://musclewiki.com/','concert','soul');

--Insertition canditature pour un event
INSERT INTO "candidate_per_event" ("event_id","users_id","candidate_status_id")
VALUES
(20,25,3),
(21,45, 3),
(22,25,3),
(23,45, 3),
(24,25,3),
(25,45, 3),
(26,25,3),
(27,45, 3),
(28,25,3),
(29,45, 3),
(30,25,3),
(31,45, 3),
(32,25,3),
(33,45, 3),
(34,25,3),
(35,45, 3),
(36,25,3),
(37,45, 3),
(37,25,2),
(35,44, 2),
(31,25,2),
(19,45, 1),
(11,25,3),
(19,45, 1),
(11,25,3),
(19,45, 1),
(11,25,3),
(19,45, 1),
(11,25,3),
(19,45, 1),
(11,25,3),
(19,45, 1),
(1,25,1),
(2,23,1),
(18,27,3),
(2,28,3),
(1,29,1),
(16,30,1),
(2,31,1),
(15,32,1),
(2,33,2),
(6,34,1),
(4,34,3),
(17,35,1),
(7,36,1),
(5,37,3),
(13,38,2),
(14,39,2),
(2,40,1),
(15,41,1),
(3,42,3),
(8,42,1),
(3,38,1),
(17,32,1),
(13,26,3),
(11,29,1),
(6,31,3),
(15,31,2),
(11,24,2),
(11,34,3),
(6,35,3),
(1,28,2),
(2,27,1),
(12,37,1),
(4,28,1),
(2,23,3),
(11,25,3),
(19,45,1),
(3,40,1);

--Insertition genre musical pour un musicos
INSERT INTO "musical_type_per_users"("musical_type_id","users_id")
VALUES
(9,23),
(9,24),
(8,25),
(9,26),
(8,27),
(7,28),
(2,29),
(3,30),
(5,31),
(4,32),
(2,33),
(4,34),
(1,35),
(5,36),
(6,37),
(1,38),
(2,39),
(3,40),
(2,41),
(1,43),
(2,44),
(1,45),
(5,42);

COMMIT;
