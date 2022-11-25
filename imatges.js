//Variables
const TEMA =   "Top Ten Anime";
const RUTA = "./img/";

const imatges = [//11
    {imatge: "boku no hero.png",
    nom: "Boku no hero Academia.",
    subnom: "僕のヒーローアカデミア。",
    autor: "Horikoshi Kōhei" ,
    descripcio: "Izuku Midoriya és un noi sense poders que, encara que neix en una societat on tenir poders especials és molt normal, té el seu propi somni de convertir-se en un heroi que salvi les persones amb un somriure a la cara.",
    }
    ,
    {imatge: "death note.png",
    nom: "Death Note.",
    subnom: "デスノート。",
    autor: "Manga escrit per Tsugumi Ōba i il·lustrat per Takeshi Obata.",
    descripcio: "Death Note explica la història de Light Yagami, un estudiant excepcional de secundària que troba un misteriós quadern de notes el qual pertany a un déu de la mort també anomenat shinigami, Ryuk. El poder d'aquest bloc de notes sobrenatural permet acabar amb la vida dels altres. Per descomptat, hi ha certes regles estipulades perquè això passi:",
    }
    ,
    {imatge: "Dragon Ball.png",
    nom: "Dragon Ball.",
    subnom: "ドラゴンボール。",
    autor: "Akira Toriyama (successor: Toyotaro).",
    descripcio: "La seva trama descriu les aventures de Gokū, un guerrer saiyajin, expert en arts marcials que a la seva infància inicia els seus viatges i aventures en què posa a prova i millora les seves habilitats de baralla, enfrontant oponents i protegint la Terra d'altres éssers que volen conquerir-la i exterminar la humanitat.",
    }
    ,
    {imatge: "haikyuu.png",
    nom: "Haikyuu!!",
    subnom: "ハイキュー！！",
    autor: "Haruichi Furudate",
    descripcio: "Trama. La història comença quan Shōyō Hinata, encara sent un estudiant de primària, veu un partit de voleibol per la televisió, en el qual veu jugar al conegut 'Petit Gegant'. Des de llavors, vol convertir-se en algú com ell, pel fet que tots dos són baixos d'estatura, i comença a aficionar-se per l'esport.",
    }
    ,
    {imatge: "jujutsu kaisen.png",
    nom: "Jujutsu Kaisen",
    subnom: "呪術廻戦",
    autor: "Gege Akutami",
    descripcio: "La història gira al voltant de l'estudiant Yūji Itadori, que s'uneix a una organització secreta de feiticeiros per matar una poderosa maledicció anomenada Ryōmen Sukuna després de convertir-se en el seu amfitrió.",
    }
    ,
    {imatge: "kimetsu no yaiba.png",
    nom: "Kimetsu no Yaiba.",
    subnom: "鬼滅の刃。",
    autor: "Koyoharu Gotouge",
    descripcio: "La sèrie narra les desventures de Tanjiro, un jove d'un Japó feudal fantàstic que es veu abocat a la venjança després que un dimoni acabi amb tota la família, a excepció de la seva germana, Nezuko, també demoníaca i assedegada de sang.",
    }
    ,
    {imatge: "naruto.png",
    nom: "Naruto.",
    subnom: "ナルト。",
    autor: "Masashi Kishimoto",
    descripcio: "L'obra narra la història d'un ninja orfe adolescent anomenat Naruto Uzumaki, els pares del qual van morir en l'atac de la Guineu Dimoni de Nou Coles, i qui aspira a convertir-se en Hokage (líder del seu llogaret) amb el propòsit de ser reconegut com algú important dins del llogaret i entre els seus companys."
    }
    ,
    {imatge: "one piece.png",
    nom: "One piece.",
    subnom: "ワンピース。",
    autor: "Eiichirō Oda",
    descripcio: "One Piece narra la història d'un jove anomenat Monkey D. Luffy, que inspirat pel seu amic pirata Shanks, comença un viatge per assolir el seu somni, ser el Rei dels pirates, per a això haurà de trobar el tresor One Piece deixat per l'anterior rei dels pirates Gol D. Roger.",
    }
    ,
    
    {imatge: "shingeki no kyoujin.png",
    nom: "Shingeki no Kyôjin.",
    subnom: "進撃の巨人。",
    autor: "Hajime Isayama",
    descripcio: "La trama gira al voltant d'Eren Jaeger, que després de perdre la seva mare a mans dels titans, decideix unir-se a l'Exèrcit de les muralles amb la seva germana adoptiva i el seu millor amic amb l'objectiu de venjar la mort de la seva mare i destruir la els titans.",
    }
    ,
    {imatge: "utena.png",
    nom: "Utena.",
    subnom: "少女革命ウテナ。",
    autor: "Kunihiko Ikuhara",
    descripcio: "La protagonista és Utena Tenjou; una noia que de petita, després de la mort del seu pare i de la seva mare, va conèixer un príncep que li va lliurar un anell i li va prometre que gràcies a ell un dia es retrobarien. Utena va quedar tan impressionada per aquella trobada que de gran va voler convertir-se també en príncep. La història comença quan Utena inicia els seus estudis secundaris a l'elitista Acadèmia Ohtori.",
    }
]


    
    
    
    


