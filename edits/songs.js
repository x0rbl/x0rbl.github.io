"use strict";

const ALL_SONGS = [
	{"id": 0x00c4, "names": [".59"]},
	{"id": 0x01d8, "names": ["1998"]},
	{"id": 0x9237, "names": ["30 Lives (Up-Up-Down-Dance Mix)"]},
	{"id": 0x01d7, "names": ["321STARS"]},
	{"id": 0x933b, "names": ["888"]},
	{"id": 0x01c1, "names": ["A"]},
	{"id": 0x92db, "names": ["A Brighter Day"]},
	{"id": 0x9280, "names": ["A Geisha's Dream"]},
	{"id": 0x701c, "names": ["A Stupid Barber"]},
	{"id": 0x9193, "names": ["A thing called LOVE"]},
	{"id": 0x9000, "names": ["AA"]},
	{"id": 0x00ec, "names": ["ABSOLUTE"]},
	{"id": 0x0101, "names": ["Abyss"]},
	{"id": 0x01e6, "names": ["Across the nightmare"]},
	{"id": 0x007c, "names": ["AFRONOVA"]},
	{"id": 0x010b, "names": ["AFRONOVA PRIMEVAL"]},
	{"id": 0x0174, "names": ["AFRONOVA(FROM NONSTOP MEGAMIX)"]},
	{"id": 0x9274, "names": ["AFRONOVA(X-Special)"]},
	{"id": 0x0089, "names": ["AFTER THE GAME OF LOVE"]},
	{"id": 0x933c, "names": ["aftershock!!"]},
	{"id": 0x01e2, "names": ["air"]},
	{"id": 0x9314, "names": ["All My Love"]},
	{"id": 0x921a, "names": ["Always on My Mind"]},
	{"id": 0x0019, "names": ["AM-3P"]},
	{"id": 0x91b4, "names": ["AM-3P -\"CHAOS\" Special-"]},
	{"id": 0x008d, "names": ["AM-3P -303 BASS MIX-"]},
	{"id": 0x0175, "names": ["AM-3P（AM EAST mix）"]},
	{"id": 0x9152, "names": ["ANGELUS", "ANGELUS -アンジェラス-"]},
	{"id": 0x9313, "names": ["Anti-Matter"]},
	{"id": 0x9196, "names": ["Arrabbiata"]},
	{"id": 0x00bb, "names": ["B4U"]},
	{"id": 0x91b7, "names": ["B4U -\"VOLTAGE\" Special-"]},
	{"id": 0x0177, "names": ["B4U(B4 ZA BEAT MIX)"]},
	{"id": 0x00b6, "names": ["BABY BABY GIMME YOUR LOVE"]},
	{"id": 0x6007, "names": ["Bad Routine"]},
	{"id": 0x01d1, "names": ["bag"]},
	{"id": 0x8413, "names": ["Baile Le Samba"]},
	{"id": 0x8104, "names": ["BALLAD FOR YOU", "BALLAD FOR YOU ～想いの雨～"]},
	{"id": 0x9336, "names": ["BALLAD THE FEATHERS", "羽之谣"]},
	{"id": 0x01bd, "names": ["BE LOVIN"]},
	{"id": 0x932a, "names": ["Be your wings"]},
	{"id": 0x9175, "names": ["Beautiful Inside (Cube::Hard Mix)"]},
	{"id": 0x9225, "names": ["Big Girls Don't Cry"]},
	{"id": 0x9192, "names": ["Blind Justice ～Torn souls, Hurt Faiths ～"]},
	{"id": 0x9147, "names": ["Bloody Tears（IIDX EDITION）"]},
	{"id": 0x01d3, "names": ["BLUE IMPULSE （for EXTREME）", "蒼い衝動 ～for EXTREME～"]},
	{"id": 0x926c, "names": ["Blue Rain"]},
	{"id": 0x92c5, "names": ["Bonafied Lovin' "]},
	{"id": 0x9236, "names": ["Boys (2008 X-edit)"]},
	{"id": 0x9013, "names": ["Brazilian Anthem"]},
	{"id": 0x0168, "names": ["BRE∀K DOWN！"]},
	{"id": 0x000b, "names": ["BRILLIANT 2U"]},
	{"id": 0x91b3, "names": ["BRILLIANT 2U -\"STREAM\" Special-"]},
	{"id": 0x0176, "names": ["BRILLIANT 2U(K.O.G G3 MIX)"]},
	{"id": 0x000d, "names": ["BRILLIANT 2U(Orchestra Groove)"]},
	{"id": 0x00ed, "names": ["BROKEN MY HEART"]},
	{"id": 0x00b8, "names": ["BURNIN' THE FLOOR"]},
	{"id": 0x0180, "names": ["BURNIN' THE FLOOR（BLUE FIRE mix）"]},
	{"id": 0x0169, "names": ["BURNING HEAT！（3 Option MIX）"]},
	{"id": 0x9235, "names": ["Butterfly (2008 X-edit)"]},
	{"id": 0x9032, "names": ["Cachaca", "cachaca"]},
	{"id": 0x01d4, "names": ["CALICOCAT ROCK", "三毛猫ロック", "MIKENEKO ROCK"]},
	{"id": 0x8000, "names": ["Can Be Real"]},
	{"id": 0x009b, "names": ["CAN'T STOP FALLIN' IN LOVE"]},
	{"id": 0x9035, "names": ["CAN'T STOP FALLIN' IN LOVE -super euro version-"]},
	{"id": 0x010e, "names": ["CAN'T STOP FALLIN' IN LOVE ～SPEED MIX～"]},
	{"id": 0x014d, "names": ["CANDY☆"]},
	{"id": 0x9279, "names": ["CANDY☆(X-Special)"]},
	{"id": 0x016d, "names": ["CANDY♡"]},
	{"id": 0x932e, "names": ["CAPTAIN JACK(GRANDALE REMIX)"]},
	{"id": 0x9190, "names": ["CaptivAte～CHIKAI～", "CaptivAte～誓い～"]},
	{"id": 0x00dd, "names": ["CELEBRATE NITE"]},
	{"id": 0x0184, "names": ["CELEBRATE NITE(EURO TRANCE STYLE)"]},
	{"id": 0x9014, "names": ["CENTAUR"]},
	{"id": 0x9312, "names": ["CG Project"]},
	{"id": 0x926d, "names": ["Chance and Dice"]},
	{"id": 0x903d, "names": ["CHAOS"]},
	{"id": 0x900f, "names": ["CHIKARA", "チカラ"]},
	{"id": 0x01c4, "names": ["Colors ～for EXTREME～"]},
	{"id": 0x92f7, "names": ["Crazy Control"]},
	{"id": 0x9006, "names": ["CURUS"]},
	{"id": 0x008a, "names": ["CUTIE CHASER"]},
	{"id": 0x01ac, "names": ["CUTIE CHASER(MORNING MIX)"]},
	{"id": 0x0156, "names": ["D2R"]},
	{"id": 0x91b5, "names": ["D2R -\"FREEZE\" Special-"]},
	{"id": 0x92ae, "names": ["DAFT PUNK IS PLAYING AT MY HOUSE"]},
	{"id": 0x01cb, "names": ["DAIKENKAI", "大見解"]},
	{"id": 0x9332, "names": ["DAM DARIRAM"]},
	{"id": 0x921f, "names": ["Dance Celebration"]},
	{"id": 0x922a, "names": ["Dance Celebration (System 7 Remix)"]},
	{"id": 0x01e0, "names": ["Dance Dance Revolution"]},
	{"id": 0x927e, "names": ["Dance Dance Revolution(X-Special)"]},
	{"id": 0x9247, "names": ["Dance Floor"]},
	{"id": 0x900d, "names": ["DanDanDO(The true MAN's Road)", "男々道"]},
	{"id": 0x9156, "names": ["dazzle"]},
	{"id": 0x930a, "names": ["Dazzlin' Darlin"]},
	{"id": 0x9309, "names": ["Dazzlin' Darlin-AKBKmix-", "Dazzlin' Darlin-秋葉工房mix-"]},
	{"id": 0x007f, "names": ["DEAD END"]},
	{"id": 0x91b8, "names": ["DEAD END -\"GROOVE RADAR\" Special-"]},
	{"id": 0x9320, "names": ["Decade"]},
	{"id": 0x933d, "names": ["ΔMAX", "DeltaMAX"]},
	{"id": 0x0157, "names": ["DESTINY"]},
	{"id": 0x01b8, "names": ["Destiny lovers"]},
	{"id": 0x933e, "names": ["dirty digital"]},
	{"id": 0x0166, "names": ["DIVE TO THE NIGHT"]},
	{"id": 0x842a, "names": ["DoLL"]},
	{"id": 0x00c9, "names": ["Don't Stop!～AMD 2nd MIX～"]},
	{"id": 0x9005, "names": ["Dragon Blade"]},
	{"id": 0x91cc, "names": ["Dream Machine"]},
	{"id": 0x919c, "names": ["dream of love"]},
	{"id": 0x9322, "names": ["DROP"]},
	{"id": 0x009a, "names": ["DROP OUT"]},
	{"id": 0x0178, "names": ["DROP OUT(FROM NONSTOP MEGAMIX)"]},
	{"id": 0x008b, "names": ["DROP THE BOMB"]},
	{"id": 0x01a5, "names": ["DROP THE BOMB(SyS.F. Mix)"]},
	{"id": 0x923f, "names": ["DUB-I-DUB (2008 X-edit)"]},
	{"id": 0x933f, "names": ["Dummy"]},
	{"id": 0x00ee, "names": ["DXY!"]},
	{"id": 0x007e, "names": ["DYNAMITE RAVE"]},
	{"id": 0x91b6, "names": ["DYNAMITE RAVE -\"AIR\" Special-"]},
	{"id": 0x003a, "names": ["e-motion"]},
	{"id": 0x00eb, "names": ["ECSTASY"]},
	{"id": 0x0182, "names": ["ECSTASY (midnight blue mix)"]},
	{"id": 0x9143, "names": ["Electrified"]},
	{"id": 0x00f3, "names": ["Electro Tuned ( the SubS Mix )"]},
	{"id": 0x00c6, "names": ["era (nostalmix)"]},
	{"id": 0x9330, "names": ["ETERNITY"]},
	{"id": 0x919e, "names": ["Every Day, Every Night（NM STYLE）"]},
	{"id": 0x9331, "names": ["Everytime We Touch"]},
	{"id": 0x014c, "names": ["exotic ethnic"]},
	{"id": 0x9329, "names": ["EZ DO DANCE"]},
	{"id": 0x902a, "names": ["Fascination MAXX"]},
	{"id": 0x9049, "names": ["Fascination ～eternal love mix～"]},
	{"id": 0x91c7, "names": ["Feel"]},
	{"id": 0x92b7, "names": ["Feel Good Inc."]},
	{"id": 0x9105, "names": ["Feelings Won't Fade(Extend Trance Mix)"]},
	{"id": 0x9186, "names": ["FIRE"]},
	{"id": 0x9307, "names": ["FIRE FIRE"]},
	{"id": 0x91ea, "names": ["Flight of the Phoenix"]},
	{"id": 0x91f9, "names": ["Flourish"]},
	{"id": 0x901c, "names": ["Flow"]},
	{"id": 0x9104, "names": ["Flow (Jammin' Ragga Mix)"]},
	{"id": 0x9048, "names": ["Flow (True Style)"]},
	{"id": 0x9047, "names": ["Flowers", "華爛漫 -Flowers-"]},
	{"id": 0x9019, "names": ["Fly away"]},
	{"id": 0x9100, "names": ["Fly away -mix del matador-"]},
	{"id": 0x6005, "names": ["Forever Sunshine"]},
	{"id": 0x8010, "names": ["Freedom"]},
	{"id": 0x9157, "names": ["Freeway Shuffle"]},
	{"id": 0x92a3, "names": ["Freeze"]},
	{"id": 0x01c8, "names": ["Frozen Ray ～for EXTREME～"]},
	{"id": 0x6000, "names": ["Funk Boogie"]},
	{"id": 0x01ba, "names": ["Gamelan de Couple"]},
	{"id": 0x9009, "names": ["Gekkou chou", "月光蝶"]},
	{"id": 0x0054, "names": ["GENOM SCREAMS"]},
	{"id": 0x9240, "names": ["GET UP'N MOVE (2008 X-edit)"]},
	{"id": 0x91c8, "names": ["Ghetto Blasta Deluxe"]},
	{"id": 0x91b1, "names": ["GIRIGILI Burning 24H!", "GIRIGILI門前雀羅"]},
	{"id": 0x9337, "names": ["going up"]},
	{"id": 0x9306, "names": ["GOLD RUSH", "GOLD RUSH (AC)", "GOLD RUSH (CS)"]},
	{"id": 0x902e, "names": ["GOLDEN SKY"]},
	{"id": 0x810a, "names": ["GORGEOUS 2012"]},
	{"id": 0x92e2, "names": ["Gotta Dance"]},
	{"id": 0x0085, "names": ["GRADIUSIC CYBER ～AMD G5 MIX～"]},
	{"id": 0x01bf, "names": ["GRADUATION", "GRADUATION ～それぞれの明日～"]},
	{"id": 0x921c, "names": ["Happy"]},
	{"id": 0x01cf, "names": ["Happy Wedding"]},
	{"id": 0x9002, "names": ["HAPPY☆ANGEL"]},
	{"id": 0x00e9, "names": ["Healing Vision"]},
	{"id": 0x012b, "names": ["Healing Vision ～Angelic mix～"]},
	{"id": 0x9278, "names": ["Healing Vision(X-Special)"]},
	{"id": 0x9046, "names": ["Healing-D-Vision"]},
	{"id": 0x92d0, "names": ["Heatstroke"]},
	{"id": 0x01dd, "names": ["Heaven is a '57 metallic gray ～gimmix～"]},
	{"id": 0x921b, "names": ["Here It Goes Again"]},
	{"id": 0x9241, "names": ["HERO"]},
	{"id": 0x932d, "names": ["Hide-away"]},
	{"id": 0x00b9, "names": ["HIGHER"]},
	{"id": 0x0185, "names": ["HIGHER（next morning mix）"]},
	{"id": 0x9004, "names": ["Himawari", "ヒマワリ"]},
	{"id": 0x00c5, "names": ["Holic"]},
	{"id": 0x9221, "names": ["Horatio"]},
	{"id": 0x01de, "names": ["HYPER EUROBEAT"]},
	{"id": 0x009f, "names": ["HYSTERIA"]},
	{"id": 0x017a, "names": ["HYSTERIA 2001"]},
	{"id": 0x016c, "names": ["i feel ..."]},
	{"id": 0x7013, "names": ["I Need You"]},
	{"id": 0x01b7, "names": ["I'm gonna get you!"]},
	{"id": 0x92ad, "names": ["ICE ICE BABY"]},
	{"id": 0x9326, "names": ["IF YOU WERE HERE"]},
	{"id": 0x9325, "names": ["IF YOU WERE HERE (L.E.D.-G STYLE REMIX)"]},
	{"id": 0x842b, "names": ["iFUTURELIST(DDR VERSION)", "不帅之歌(DDR VERSION)"]},
	{"id": 0x9287, "names": ["in love wit you"]},
	{"id": 0x901a, "names": ["INNOCENCE OF SILENCE"]},
	{"id": 0x010d, "names": ["INSERTiON"]},
	{"id": 0x8386, "names": ["INSIDE YOUR HEART"]},
	{"id": 0x9244, "names": ["Inspiration"]},
	{"id": 0x91ef, "names": ["INTO YOUR HEART (Ruffage remix)"]},
	{"id": 0x019e, "names": ["Jam & Marmalade"]},
	{"id": 0x01bb, "names": ["jane jana"]},
	{"id": 0x01ce, "names": ["JET WORLD"]},
	{"id": 0x91ab, "names": ["JUPITER:The Bringer of Jollity", "木星～組曲『惑星』より"]},
	{"id": 0x900e, "names": ["KAGEROW(Dragonfly)", "カゲロウ"]},
	{"id": 0x0173, "names": ["KAKUMEI", "革命"]},
	{"id": 0x927c, "names": ["KAKUMEI(X-Special)", "革命(X-Special)"]},
	{"id": 0x002e, "names": ["KEEP ON MOVIN'"]},
	{"id": 0x810e, "names": ["KEEP ON MOVIN' ～DMX MIX～"]},
	{"id": 0x92d5, "names": ["KIMONO♥PRINCESS"]},
	{"id": 0x014f, "names": ["Kind Lady"]},
	{"id": 0x01b4, "names": ["KISS KISS KISS"]},
	{"id": 0x9315, "names": ["KISS KISS KISS AKBK MIX", "KISS KISS KISS 秋葉工房 MIX"]},
	{"id": 0x01c6, "names": ["Kiss me all night long"]},
	{"id": 0x926e, "names": ["Koko Soko"]},
	{"id": 0x900a, "names": ["Konoko no nanatsu no oiwaini", "この子の七つのお祝いに"]},
	{"id": 0x91a9, "names": ["L'amour et la liberté(Darwin & DJ Silver remix)"]},
	{"id": 0x01b6, "names": ["L'amour et la liberté(DDR Ver.)"]},
	{"id": 0x01df, "names": ["LA BAMBA"]},
	{"id": 0x9040, "names": ["La Bamba"]},
	{"id": 0x92ef, "names": ["La libertad"]},
	{"id": 0x92f2, "names": ["La receta"]},
	{"id": 0x0080, "names": ["La Señorita"]},
	{"id": 0x008c, "names": ["La Señorita Virtual"]},
	{"id": 0x00c3, "names": ["LEADING CYBER"]},
	{"id": 0x9338, "names": ["Leaving…", "Leaving..."]},
	{"id": 0x0129, "names": ["Let the beat hit em!(CLASSIC R&B STYLE)"]},
	{"id": 0x91f8, "names": ["Lift You Up"]},
	{"id": 0x019f, "names": ["LOGICAL DASH"]},
	{"id": 0x92c4, "names": ["Love Again"]},
	{"id": 0x00bc, "names": ["LOVE AGAIN TONIGHT～For Melissa MIX～"]},
	{"id": 0x8381, "names": ["LOVE IS ORANGE"]},
	{"id": 0x01b5, "names": ["LOVE LOVE SUGER", "♥Love²シュガ→♥"]},
	{"id": 0x002c, "names": ["LOVE THIS FEELIN'"]},
	{"id": 0x01ad, "names": ["LOVE♥SHINE"]},
	{"id": 0x91ee, "names": ["LOVING YOU (Epidemik remix)"]},
	{"id": 0x8382, "names": ["Make A Difference"]},
	{"id": 0x000e, "names": ["MAKE IT BETTER"]},
	{"id": 0x91c9, "names": ["Make Me Cry"]},
	{"id": 0x9145, "names": ["Malacca"]},
	{"id": 0x8383, "names": ["MARIA(I believe...)"]},
	{"id": 0x91ae, "names": ["MARS WAR 3"]},
	{"id": 0x0145, "names": ["MAX 300"]},
	{"id": 0x841a, "names": ["MAX 300 (Super-Max-Me Mix)"]},
	{"id": 0x927a, "names": ["MAX 300(X-Special)"]},
	{"id": 0x9339, "names": ["MAX LOVE"]},
	{"id": 0x7012, "names": ["MAXIMIZER"]},
	{"id": 0x0165, "names": ["MAXX UNLIMITED"]},
	{"id": 0x927b, "names": ["MAXX UNLIMITED(X-Special)"]},
	{"id": 0x930b, "names": ["MEI", "冥"]},
	{"id": 0x933a, "names": ["Melody Life"]},
	{"id": 0x840e, "names": ["MIDNIGHT SPECIAL"]},
	{"id": 0x8114, "names": ["Mind Parasite"]},
	{"id": 0x01be, "names": ["Miracle Moon ～L.E.D.LIGHT STYLE MIX～"]},
	{"id": 0x8410, "names": ["Monkey Punk"]},
	{"id": 0x900b, "names": ["MOON"]},
	{"id": 0x9103, "names": ["MOONSTER"]},
	{"id": 0x9327, "names": ["more more more"]},
	{"id": 0x9007, "names": ["Mugen", "夢幻ノ光"]},
	{"id": 0x9018, "names": ["murmur twins"]},
	{"id": 0x9144, "names": ["Music In The Rhythm"]},
	{"id": 0x901b, "names": ["My Only Shining Star"]},
	{"id": 0x00be, "names": ["MY SUMMER LOVE"]},
	{"id": 0x0186, "names": ["MY SUMMER LOVE(TOMMY'S SMILE MIX)"]},
	{"id": 0x9256, "names": ["NADESHIKO", "凛として咲く花の如く", "Rin To Shite Saku Hana No Gotoku"]},
	{"id": 0x931c, "names": ["New Decade"]},
	{"id": 0x9183, "names": ["NGO"]},
	{"id": 0x9008, "names": ["NIJIIRO", "虹色"]},
	{"id": 0x900c, "names": ["No.13"]},
	{"id": 0x9342, "names": ["oarfish"]},
	{"id": 0x9245, "names": ["on the bounce"]},
	{"id": 0x91c6, "names": ["On The Break"]},
	{"id": 0x9328, "names": ["only my railgun"]},
	{"id": 0x00ba, "names": ["ORION.78(AMeuro-MIX)"]},
	{"id": 0x00d5, "names": ["ORION.78～civilization mix～"]},
	{"id": 0x001b, "names": ["PARANOiA"]},
	{"id": 0x00f4, "names": ["PARANOiA ETERNAL"]},
	{"id": 0x9277, "names": ["PARANOiA ETERNAL(X-Special)"]},
	{"id": 0x00a0, "names": ["PARANOIA EVOLUTION"]},
	{"id": 0x9275, "names": ["PARANOIA EVOLUTION(X-Special)"]},
	{"id": 0x002a, "names": ["PARANOiA KCET ～clean mix～"]},
	{"id": 0x001d, "names": ["PARANOiA MAX～DIRTY MIX～"]},
	{"id": 0x9271, "names": ["PARANOiA MAX～DIRTY MIX～(X-Special)"]},
	{"id": 0x0082, "names": ["PARANOiA Rebirth"]},
	{"id": 0x9273, "names": ["PARANOiA Rebirth(X-Special)"]},
	{"id": 0x01ae, "names": ["PARANOIA survivor"]},
	{"id": 0x01d0, "names": ["PARANOIA survivor MAX"]},
	{"id": 0x91a1, "names": ["PARANOiA ～HADES～"]},
	{"id": 0x926f, "names": ["PARANOiA(X-Special)"]},
	{"id": 0x8006, "names": ["PARANOiA-Respect-"]},
	{"id": 0x9226, "names": ["Party Lights"]},
	{"id": 0x8388, "names": ["PASSION OF LOVE"]},
	{"id": 0x931f, "names": ["Pierce The Sky"]},
	{"id": 0x01dc, "names": ["Pink Rose"]},
	{"id": 0x921e, "names": ["Playa (Original Mix)"]},
	{"id": 0x919f, "names": ["Pluto"]},
	{"id": 0x91a8, "names": ["Pluto Relinquish"]},
	{"id": 0x91bd, "names": ["Pluto The First"]},
	{"id": 0x8380, "names": ["Polovtsian Dances And Chorus"]},
	{"id": 0x9289, "names": ["poririzumu", "ポリリズム"]},
	{"id": 0x91b2, "names": ["Poseidon"]},
	{"id": 0x931d, "names": ["Poseidon(kors k mix)"]},
	{"id": 0x9311, "names": ["POSSESSION"]},
	{"id": 0x91fc, "names": ["Put 'Em Up"]},
	{"id": 0x000a, "names": ["PUT YOUR FAITH IN ME"]},
	{"id": 0x8117, "names": ["PUT YOUR FAITH IN ME ～SATURDAY NIGHT MIX～"]},
	{"id": 0x91c1, "names": ["puzzle"]},
	{"id": 0x9034, "names": ["Quick Master"]},
	{"id": 0x8118, "names": ["Quickening"]},
	{"id": 0x0164, "names": ["rain of sorrow"]},
	{"id": 0x901d, "names": ["rainbow flyer"]},
	{"id": 0x9012, "names": ["rainbow rainbow"]},
	{"id": 0x9146, "names": ["Raspberry♡Heart（English version）"]},
	{"id": 0x9242, "names": ["Reach Up"]},
	{"id": 0x9288, "names": ["real-high-SPEED"]},
	{"id": 0x9001, "names": ["RED ZONE"]},
	{"id": 0x9260, "names": ["resonance"]},
	{"id": 0x9290, "names": ["roppongi EVOLVED ver.A"]},
	{"id": 0x9291, "names": ["roppongi EVOLVED ver.B"]},
	{"id": 0x9292, "names": ["roppongi EVOLVED ver.C"]},
	{"id": 0x9321, "names": ["roppongi EVOLVED ver.D"]},
	{"id": 0x91ed, "names": ["SABER WING"]},
	{"id": 0x9228, "names": ["SABER WING (Akira Ishihara Headshot mix)"]},
	{"id": 0x92a9, "names": ["Sacred Oath"]},
	{"id": 0x01db, "names": ["SAKURA", "桜"]},
	{"id": 0x9340, "names": ["sakura storm"]},
	{"id": 0x931e, "names": ["Sakura Sunrise"]},
	{"id": 0x0102, "names": ["SANA MOLETTE NE ENTE", "サナ・モレッテ・ネ・エンテ"]},
	{"id": 0x6006, "names": ["Saturday Night Love"]},
	{"id": 0x91bb, "names": ["Saturn"]},
	{"id": 0x701d, "names": ["Scorching Moon"]},
	{"id": 0x930d, "names": ["Second Heaven"]},
	{"id": 0x0162, "names": ["Secret Rendez-vous"]},
	{"id": 0x8385, "names": ["SEDUCTION"]},
	{"id": 0x9038, "names": ["SEDUCTION(Vocal Remix)"]},
	{"id": 0x9282, "names": ["SEKAI HA ODORU", "世界は踊る"]},
	{"id": 0x00de, "names": ["SEXY PLANET"]},
	{"id": 0x017c, "names": ["SEXY PLANET(FROM NONSTOP MEGAMIX)"]},
	{"id": 0x91b0, "names": ["Shades of Grey"]},
	{"id": 0x9310, "names": ["She is my wife"]},
	{"id": 0x92c3, "names": ["Shine"]},
	{"id": 0x9323, "names": ["☆shining☆", "shining"]},
	{"id": 0x9335, "names": ["Shiny World"]},
	{"id": 0x0081, "names": ["Silent Hill"]},
	{"id": 0x0183, "names": ["Silent Hill (3rd christmas mix)"]},
	{"id": 0x9106, "names": ["Silver Platform - I wanna get your heart -"]},
	{"id": 0x9016, "names": ["Ska Ska No.3"]},
	{"id": 0x931b, "names": ["Sky Is The Limit"]},
	{"id": 0x9220, "names": ["Slip Out"]},
	{"id": 0x9229, "names": ["Slip Out (bounce in beat mix)"]},
	{"id": 0x9308, "names": ["smooooch･∀･"]},
	{"id": 0x0150, "names": ["SO IN LOVE"]},
	{"id": 0x9324, "names": ["someday..."]},
	{"id": 0x9101, "names": ["SOUL CRASH"]},
	{"id": 0x001c, "names": ["SP-TRIP MACHINE～JUNGLE MIX～"]},
	{"id": 0x9272, "names": ["SP-TRIP MACHINE～JUNGLE MIX～(X-Special)"]},
	{"id": 0x901f, "names": ["Star Gate Heaven"]},
	{"id": 0x9102, "names": ["Star Gate Heaven (FUTURE LOVE Mix)"]},
	{"id": 0x8011, "names": ["STARS☆☆☆(2nd NAOKI's style)"]},
	{"id": 0x9188, "names": ["STARS☆☆☆（Re-tuned by HΛL） - DDR EDITION -"]},
	{"id": 0x01c5, "names": ["STAY (Organic house Version)"]},
	{"id": 0x91a3, "names": ["stealth"]},
	{"id": 0x00ea, "names": ["STILL IN MY HEART"]},
	{"id": 0x017e, "names": ["STILL IN MY HEART（MOMO MIX）"]},
	{"id": 0x01d6, "names": ["stoic (EXTREME version)"]},
	{"id": 0x9283, "names": ["Suki☆Melo", "スキ☆メロ"]},
	{"id": 0x91ba, "names": ["SUNKiSS♥DROP"]},
	{"id": 0x932b, "names": ["Super Driver"]},
	{"id": 0x932f, "names": ["SUPER EUROBEAT <GOLD MIX>"]},
	{"id": 0x9178, "names": ["SUPER SAMURAI"]},
	{"id": 0x009e, "names": ["SUPER STAR"]},
	{"id": 0x017d, "names": ["SUPER STAR(FROM NONSTOP MEGAMIX)"]},
	{"id": 0x015a, "names": ["Sweet Sweet ♥ Magic"]},
	{"id": 0x91fd, "names": ["Swingin'"]},
	{"id": 0x91a2, "names": ["switch"]},
	{"id": 0x01d5, "names": ["sync (EXTREME version)"]},
	{"id": 0x91c4, "names": ["S・A・G・A"]},
	{"id": 0x9284, "names": ["Tabibito", "旅人"]},
	{"id": 0x91ec, "names": ["Taj He Spitz"]},
	{"id": 0x9227, "names": ["Taj He Spitz (Tommie Sunshine's Brooklyn Fire Re-Touch)"]},
	{"id": 0x91fa, "names": ["Take A Chance"]},
	{"id": 0x929c, "names": ["Taking It To The Sky"]},
	{"id": 0x01e4, "names": ["TEARS"]},
	{"id": 0x932c, "names": ["TENSHI"]},
	{"id": 0x91c0, "names": ["The flower in your smile"]},
	{"id": 0x01b9, "names": ["The Least 100sec"]},
	{"id": 0x01d2, "names": ["The legend of MAX"]},
	{"id": 0x927d, "names": ["The legend of MAX(X-Special)"]},
	{"id": 0x01a4, "names": ["THE SHINING POLARIS"]},
	{"id": 0x002d, "names": ["think ya better D"]},
	{"id": 0x92df, "names": ["THIS NIGHT"]},
	{"id": 0x91eb, "names": ["Ticket to Bombay"]},
	{"id": 0x9015, "names": ["TIERRA BUENA"]},
	{"id": 0x9238, "names": ["Till the lonely's gone"]},
	{"id": 0x9333, "names": ["Time After Time"]},
	{"id": 0x91c3, "names": ["TimeHollow"]},
	{"id": 0x9017, "names": ["Tino's White Horse", "怒れる大きな白い馬"]},
	{"id": 0x8384, "names": ["TOMORROW"]},
	{"id": 0x600a, "names": ["Tomorrow Perfume"]},
	{"id": 0x91ca, "names": ["Tracers (4Beat Remix)"]},
	{"id": 0x9281, "names": ["Trickster"]},
	{"id": 0x9246, "names": ["Trigger"]},
	{"id": 0x9107, "names": ["Trim"]},
	{"id": 0x001a, "names": ["TRIP MACHINE"]},
	{"id": 0x00b7, "names": ["TRIP MACHINE CLIMAX"]},
	{"id": 0x9276, "names": ["TRIP MACHINE CLIMAX(X-Special)"]},
	{"id": 0x9199, "names": ["TRIP MACHINE PhoeniX"]},
	{"id": 0x01e1, "names": ["TRIP MACHINE survivor"]},
	{"id": 0x9270, "names": ["TRIP MACHINE(X-Special)"]},
	{"id": 0x002b, "names": ["TRIP MACHINE～luv mix～"]},
	{"id": 0x9043, "names": ["TRUE♥LOVE"]},
	{"id": 0x91a7, "names": ["Trust -DanceDanceRevolution mix-"]},
	{"id": 0x6001, "names": ["Try 2 Luv. U"]},
	{"id": 0x0167, "names": ["TSUGARU"]},
	{"id": 0x0181, "names": ["TSUGARU (APPLE MIX)"]},
	{"id": 0x01d9, "names": ["Twin Bee -Generation X-"]},
	{"id": 0x921d, "names": ["U Can't Touch This"]},
	{"id": 0x9195, "names": ["Übertreffen"]},
	{"id": 0x702d, "names": ["un deux trois"]},
	{"id": 0x9010, "names": ["Under the Sky"]},
	{"id": 0x9187, "names": ["Unreal"]},
	{"id": 0x91ad, "names": ["Uranus"]},
	{"id": 0x01c0, "names": ["V ～for EXTREME～"]},
	{"id": 0x9334, "names": ["Valkyrie dimension"]},
	{"id": 0x930e, "names": ["VANESSA"]},
	{"id": 0x019b, "names": ["VANITY ANGEL"]},
	{"id": 0x919a, "names": ["Vem brincar"]},
	{"id": 0x9191, "names": ["Venus"]},
	{"id": 0x919d, "names": ["volcano"]},
	{"id": 0x91aa, "names": ["Votum stellarum -forest #25  DDR RMX-"]},
	{"id": 0x91cb, "names": ["Waiting 4 u"]},
	{"id": 0x9243, "names": ["We Come Alive"]},
	{"id": 0x923d, "names": ["We've Got To Make It Tonight"]},
	{"id": 0x9316, "names": ["WH1TE RO5E"]},
	{"id": 0x92aa, "names": ["What Will Come of Me"]},
	{"id": 0x91af, "names": ["Why not"]},
	{"id": 0x009c, "names": ["WILD RUSH"]},
	{"id": 0x017f, "names": ["WILD RUSH(FROM NONSTOP MEGAMIX)"]},
	{"id": 0x916c, "names": ["will"]},
	{"id": 0x01da, "names": ["xenon"]},
	{"id": 0x9003, "names": ["Xepher"]},
	{"id": 0x930f, "names": ["YELLOW CANDY", "不沈艦CANDY"]},
	{"id": 0x92ed, "names": ["You are a Star"]},
	{"id": 0x8389, "names": ["You gotta move it (feat. Julie Rugaard)"]},
	{"id": 0x9341, "names": ["Your Angel"]},
	{"id": 0x925a, "names": ["ZERO", "零 - ZERO -"]},
	{"id": 0x930c, "names": ["ZETA～The World of Prime Numbers and the Transcendental Being～", "ZETA～素数の世界と超越者～"]},
];

const SONG_START = {
	0x01c1: 0x1000,  // aaaa  120
	0x9000: 0x1000,  // aaaa2 32
	0x92db: 0x1000,  // abri  464
	0x00ec: 0x1000,  // abso  121
	0x0101: 0x1000,  // abys  122
	0x01e6: 0x1000,  // acro  123
	0x007c: 0x5000,  // afro  126
	0x0174: 0x1000,  // afro3 125
	0x9274: 0x5000,  // afrx  445
	0x0089: 0x3000,  // afte  127
	0x933c: 0x1000,  // aftr  495
	0x00bc: 0x3000,  // agai  228
	0x01e2: 0x1000,  // airr  128
	0x9314: 0x1000,  // allm  478
	0x921a: 0x1000,  // almy  366
	0x91a3: 0x1000,  // alth  355
	0x91b4: 0x5000,  // amch  361
	0x008d: 0x3000,  // amcs  129
	0x016d: 0x1000,  // andy  150
	0x9152: 0x1000,  // ange  356
	0x9313: 0x1000,  // anti  507
	0x01d3: 0x1000,  // aois  138
	0x9196: 0x1000,  // arra  354
	0x9193: 0x1000,  // athi  344
	0x00b6: 0x2000,  // baby  134
	0x01d1: 0x1000,  // bagg  135
	0x8413: 0x4000,  // bais  64
	0x8104: 0x1000,  // bald  66
	0x9336: 0x1000,  // batf  535
	0x01bd: 0x1000,  // belo  137
	0x9226: 0x1000,  // bene  367
	0x932a: 0x1000,  // beyo  539
	0x00bb: 0x3000,  // bfor  133
	0x0177: 0x1000,  // bfor3 132
	0x91b7: 0x3000,  // bfov  364
	0x9225: 0x1000,  // bigg  387
	0x9175: 0x2000,  // bins  433
	0x9192: 0x1000,  // blin  334
	0x9147: 0x1000,  // bloo  337
	0x926c: 0x1000,  // blra  434
	0x01a5: 0x2000,  // bom2  173
	0x92c5: 0x1000,  // bona  518
	0x9236: 0x1000,  // boys2 389
	0x9013: 0x1000,  // braz  67
	0x000b: 0x5000,  // bril  142
	0x000d: 0x5000,  // bril2 141
	0x0176: 0x1000,  // bril3 140
	0x91b3: 0x5000,  // bris  360
	0x00ed: 0x1000,  // brok  143
	0x6007: 0x2000,  // brou  62
	0x00b8: 0x3000,  // burn  145
	0x0180: 0x1000,  // burn3 144
	0x9235: 0x1000,  // butt2 368
	0x9032: 0x1000,  // cach  33
	0x8000: 0x1000,  // canb  69
	0x014d: 0x1000,  // cand  151
	0x9279: 0x1000,  // canx  446
	0x932e: 0x1000,  // capt2 526
	0x9312: 0x1000,  // cgpr  479
	0x926d: 0x1000,  // chan  435
	0x903d: 0x1000,  // chao  301
	0x002a: 0x1000,  // clea  251
	0x00b7: 0x6000,  // clim  285
	0x9276: 0x6000,  // clix  461
	0x01c4: 0x1000,  // colo  155
	0x92f7: 0x1000,  // crco  502
	0x9006: 0x1000,  // curu  37
	0x008a: 0x2800,  // cuti  158
	0x921f: 0x1000,  // dace  390
	0x922a: 0x1000,  // dacr  391
	0x930a: 0x1000,  // dada  475
	0x9309: 0x1000,  // dada2 515
	0x92ae: 0x1000,  // daft  521
	0x01cb: 0x1000,  // daik  160
	0x9332: 0x1000,  // damd2 523
	0x900d: 0x1000,  // dand  38
	0x9247: 0x1000,  // danf  392
	0x9156: 0x1000,  // dazz  369
	0x01e0: 0x1000,  // ddre  161
	0x927e: 0x1000,  // ddrx  447
	0x007f: 0x5000,  // dead  162
	0x91b8: 0x1000,  // deag  365
	0x933d: 0x1000,  // delt  494
	0x702d: 0x4000,  // deux  111
	0x0085: 0x3000,  // dgra  193
	0x8382: 0x1000,  // diff  88
	0x933e: 0x1000,  // dirt  496
	0x919c: 0x1000,  // dofl  347
	0x842a: 0x3000,  // doll  70
	0x9005: 0x1000,  // drab  39
	0x91cc: 0x1000,  // drem  393
	0x9322: 0x1000,  // droo  510
	0x009a: 0x7000,  // drop  172
	0x0178: 0x1000,  // drop3 171
	0x0156: 0x1000,  // drte  159
	0x91b5: 0x1000,  // dtwf  362
	0x923f: 0x1000,  // dubi2 370
	0x933f: 0x1000,  // dumm  497
	0x9046: 0x1000,  // dvis  299
	0x00ee: 0x1000,  // dxyy  175
	0x007e: 0x3000,  // dyna  178
	0x91b6: 0x3000,  // dyns  363
	0x00eb: 0x1000,  // ecst  181
	0x0182: 0x1000,  // ecst3 180
	0x919e: 0x1000,  // eday  318
	0x00f3: 0x1000,  // elec  182
	0x003a: 0x3000,  // emot  179
	0x00c6: 0x1000,  // eran  184
	0x0157: 0x1000,  // esti  164
	0x9330: 0x1000,  // etny  524
	0x9331: 0x1000,  // evti  537
	0x014c: 0x1000,  // exot  186
	0x9329: 0x1000,  // ezdo  540
	0x902a: 0x1000,  // fasc  300
	0x9049: 0x1000,  // fasc2 302
	0x00e9: 0x0000,  // feal  199
	0x9278: 0x1000,  // feax  448
	0x91c7: 0x1000,  // feee  394
	0x92b7: 0x1000,  // fego  519
	0x9105: 0x1000,  // felw  310
	0x9143: 0x1000,  // fied  316
	0x9307: 0x1000,  // fifi  473
	0x9186: 0x1000,  // firr  353
	0x91ea: 0x1000,  // flig  395
	0x91f9: 0x1000,  // flou  371
	0x901c: 0x1000,  // flow  20
	0x9048: 0x1000,  // flow2 21
	0x9104: 0x1000,  // flow3 308
	0x9019: 0x1000,  // flya  23
	0x9100: 0x1000,  // flya2 306
	0x8010: 0x2000,  // free  72
	0x92a3: 0x1000,  // frez  469
	0x01c8: 0x1000,  // froz  189
	0x6005: 0x7000,  // frve  71
	0x6000: 0x4000,  // funk  73
	0x9157: 0x1000,  // fway  315
	0x01ba: 0x1000,  // game  190
	0x901f: 0x1000,  // gate  30
	0x9102: 0x1000,  // gate2 307
	0x9280: 0x1000,  // geis  436
	0x9009: 0x1000,  // gekk  42
	0x01d9: 0x1000,  // gene  293
	0x0054: 0x3000,  // geno  191
	0x9240: 0x1000,  // getu2 396
	0x00b9: 0x3000,  // gher  202
	0x0185: 0x1000,  // gher3 201
	0x91c8: 0x1000,  // ghet  397
	0x91b1: 0x1000,  // gili  321
	0x92e2: 0x1000,  // goda  470
	0x902e: 0x1000,  // gold  7
	0x810a: 0x1000,  // gorg  74
	0x9306: 0x1000,  // goru  509
	0x9337: 0x1000,  // goup  531
	0x9047: 0x1000,  // hana  22
	0x921c: 0x1000,  // happ  398
	0x012b: 0x1000,  // heal  198
	0x01dd: 0x1000,  // heav  200
	0x921b: 0x6000,  // heit  372
	0x9241: 0x1000,  // hero2 399
	0x92d0: 0x1000,  // hest  468
	0x932d: 0x1000,  // hide  538
	0x9004: 0x1000,  // hima  75
	0x9221: 0x1000,  // hora  400
	0x9002: 0x1000,  // hpan  43
	0x930f: 0x1000,  // huch  477
	0x01de: 0x1000,  // hype  205
	0x009f: 0x4000,  // hyst  207
	0x017a: 0x1000,  // hyst3 206
	0x92ad: 0x1000,  // iceb  520
	0x01d8: 0x1000,  // ichi  116
	0x016c: 0x1000,  // ifee  208
	0x842b: 0x2000,  // ifut  78
	0x9326: 0x1000,  // ifyo2 517
	0x9325: 0x1000,  // ifyo3 541
	0x01b7: 0x1000,  // imgo  209
	0x7013: 0x3000,  // inee  76
	0x9287: 0x1000,  // inlo  500
	0x901a: 0x1000,  // inno  25
	0x010d: 0x1000,  // inse  210
	0x8386: 0x2000,  // insi  80
	0x9244: 0x1000,  // insp  401
	0x01b4: 0x1000,  // issk  218
	0x9315: 0x1000,  // issk2 516
	0x91ef: 0x1000,  // iyhr  427
	0x019e: 0x1000,  // jamm  81
	0x01bb: 0x1000,  // jane  213
	0x01ce: 0x1000,  // jetw  214
	0x91ab: 0x1000,  // jupi  322
	0x900e: 0x1000,  // kage  45
	0x0173: 0x1000,  // kaku  215
	0x927c: 0x1000,  // kakx  449
	0x810e: 0x3000,  // kee2  83
	0x002e: 0x3000,  // keep  216
	0x92d5: 0x1000,  // kimp  483
	0x014f: 0x2000,  // kind  217
	0x926e: 0x1000,  // koko  437
	0x900a: 0x1000,  // kono  46
	0x9040: 0x1000,  // lab3  10
	0x01df: 0x1000,  // laba  221
	0x92ef: 0x1000,  // lali  503
	0x91a9: 0x1000,  // lamd  324
	0x01b6: 0x1000,  // lamo  220
	0x92f2: 0x1000,  // larc  505
	0x0080: 0x4000,  // lase  223
	0x010e: 0x1000,  // lcan  148
	0x00c3: 0x3000,  // lead  224
	0x01be: 0x1000,  // ledl  242
	0x01d2: 0x1000,  // lege  283
	0x927d: 0x1000,  // legx  459
	0x0129: 0x3000,  // lett  225
	0x91f8: 0x1000,  // lift  402
	0x019f: 0x2000,  // logi  86
	0x91ee: 0x1000,  // lovy  428
	0x002b: 0x4000,  // luvm  287
	0x92c4: 0x1000,  // lvag  504
	0x9338: 0x1000,  // lvng  533
	0x000e: 0x5000,  // make  235
	0x9145: 0x1000,  // mala  374
	0x8383: 0x2000,  // mari  89
	0x91ae: 0x1000,  // mars  352
	0x9339: 0x1000,  // maxl  532
	0x0145: 0x1000,  // maxx  238
	0x91c9: 0x1000,  // mcry  403
	0x01ac: 0x2400,  // mcut  157
	0x01c6: 0x1000,  // meal  219
	0x930b: 0x1000,  // meii  511
	0x933a: 0x1000,  // melo  534
	0x840e: 0x3000,  // mids  93
	0x01d4: 0x1000,  // mike  147
	0x8114: 0x1000,  // mind  94
	0x9144: 0x1000,  // mitr  346
	0x7012: 0x3000,  // mize  92
	0x9327: 0x1000,  // momo  514
	0x8410: 0x3000,  // monk  95
	0x900b: 0x1000,  // mooo  48
	0x9103: 0x1000,  // moos  304
	0x9007: 0x2000,  // muge  49
	0x9018: 0x1000,  // murm  50
	0x901b: 0x1000,  // myon  27
	0x00ba: 0x2000,  // naha  247
	0x931c: 0x1000,  // newd  506
	0x9183: 0x1000,  // ngoo  342
	0x00dd: 0x3000,  // nite  153
	0x0184: 0x1000,  // nite3 152
	0x9008: 0x1000,  // nizi  51
	0x9342: 0x1000,  // oarf  492
	0x9017: 0x1000,  // okor  58
	0x00c5: 0x1000,  // olic  204
	0x9245: 0x1000,  // onbo  404
	0x9328: 0x1000,  // onra  484
	0x91c6: 0x1000,  // ontb  375
	0x00c9: 0x3000,  // onts  169
	0x0169: 0x1000,  // opti  146
	0x8381: 0x1000,  // oran  87
	0x00d5: 0x7000,  // orio  248
	0x010b: 0x1000,  // pafr  124
	0x001b: 0x5000,  // para  256
	0x001d: 0x5000,  // para2 252
	0x8006: 0x4000,  // parb  96
	0x91a1: 0x1000,  // pard  340
	0x926f: 0x5000,  // parx  452
	0x9271: 0x5000,  // parx2 455
	0x8388: 0x1000,  // pass  97
	0x00f4: 0x1000,  // peta  249
	0x9277: 0x1000,  // petx  453
	0x00a0: 0x5000,  // pevo  250
	0x9275: 0x5000,  // pevx  454
	0x931f: 0x1000,  // pier  508
	0x921e: 0x1000,  // play  406
	0x91bd: 0x3000,  // pluf  491
	0x91a8: 0x1000,  // plur  327
	0x919f: 0x1000,  // plut  326
	0x8380: 0x1000,  // polo  99
	0x9289: 0x1000,  // pori  442
	0x91b2: 0x1000,  // pose  357
	0x931d: 0x1000,  // pose2 543
	0x9311: 0x1000,  // poss  472
	0x8117: 0x2000,  // put3  100
	0x91fc: 0x1000,  // pute  407
	0x000a: 0x5000,  // puty  258
	0x91c1: 0x1000,  // puzz  376
	0x9034: 0x1000,  // qmas  53
	0x8118: 0x2000,  // quic  101
	0x01bf: 0x1000,  // radu  194
	0x0164: 0x1000,  // rain  260
	0x9012: 0x1000,  // rara  54
	0x9146: 0x1000,  // rasp  350
	0x901d: 0x2000,  // rbow  102
	0x0082: 0x5000,  // rebi  253
	0x9273: 0x5000,  // rebx  457
	0x841a: 0x7000,  // remx  91
	0x9242: 0x1000,  // reup  408
	0x9260: 0x1000,  // rezo  522
	0x9256: 0x1000,  // rint  438
	0x01e1: 0x1000,  // ripm  286
	0x0168: 0x1000,  // roll  139
	0x9290: 0x1000,  // ropp1 487
	0x9291: 0x1000,  // ropp2 488
	0x9292: 0x1000,  // ropp3 489
	0x9321: 0x1000,  // ropp4 490
	0x01dc: 0x1000,  // rose  257
	0x9001: 0x2000,  // rzon  55
	0x91ed: 0x1000,  // sabe  377
	0x92a9: 0x1000,  // sacr  467
	0x91c4: 0x1000,  // saga  378
	0x9340: 0x1000,  // sak2  498
	0x01db: 0x1000,  // saku  262
	0x9178: 0x1000,  // samu  439
	0x0102: 0x1000,  // sana  263
	0x9228: 0x1000,  // sare  409
	0x931e: 0x1000,  // sasu  485
	0x6006: 0x3000,  // satn  103
	0x91bb: 0x1000,  // satu  323
	0x701d: 0x1000,  // scor  104
	0x9324: 0x1000,  // sday  529
	0x930d: 0x1000,  // seco  476
	0x0162: 0x1000,  // secr  264
	0x8385: 0x1000,  // sedu  105
	0x9038: 0x1000,  // sedu2 29
	0x9282: 0x1000,  // seka  431
	0x00de: 0x1000,  // sexy  266
	0x017c: 0x1000,  // sexy3 265
	0x91b0: 0x1000,  // shad  359
	0x9310: 0x1000,  // shei  482
	0x92c3: 0x1000,  // shie  465
	0x01a4: 0x1000,  // shin  107
	0x9323: 0x1000,  // shng  544
	0x9335: 0x1000,  // shwo  528
	0x0081: 0x4800,  // sile  269
	0x0183: 0x1000,  // sile3 268
	0x9106: 0x1000,  // silv  311
	0x9016: 0x1000,  // sksk  56
	0x931b: 0x1000,  // skyi  480
	0x9220: 0x1000,  // slip  410
	0x9229: 0x1000,  // slre  411
	0x91c0: 0x1000,  // smil  379
	0x9308: 0x1000,  // smoo  474
	0x0150: 0x2000,  // soin  271
	0x9101: 0x1000,  // soul  305
	0x009e: 0x3000,  // sprs  278
	0x017d: 0x1000,  // sprs3 277
	0x001c: 0x5000,  // sptr  272
	0x9272: 0x5000,  // sptx  458
	0x9188: 0x1000,  // stah  351
	0x0019: 0x5000,  // star  131
	0x0175: 0x1000,  // star3 130
	0x8011: 0x1000,  // stas  106
	0x00ea: 0x2000,  // stil  275
	0x017e: 0x1000,  // stil3 274
	0x01b8: 0x1000,  // stin  163
	0x01d6: 0x1000,  // stoi  276
	0x009b: 0x3000,  // stop  149
	0x9035: 0x1000,  // stop2 34
	0x9288: 0x1000,  // sttb  501
	0x701c: 0x2000,  // stup  61
	0x932b: 0x1000,  // sudr  527
	0x932f: 0x1000,  // sueu  525
	0x01b5: 0x1000,  // suga  230
	0x9283: 0x1000,  // suki  432
	0x00be: 0x3000,  // summ  245
	0x0186: 0x1000,  // summ3 244
	0x91ba: 0x1000,  // sunk  328
	0x01ad: 0x1000,  // suns  229
	0x01ae: 0x1000,  // surv  255
	0x01d0: 0x1000,  // surv3 254
	0x015a: 0x1000,  // swee  279
	0x91fd: 0x1000,  // swin  412
	0x91a2: 0x1000,  // swit  349
	0x9284: 0x1000,  // tabi  443
	0x91ec: 0x1000,  // tajh  381
	0x91fa: 0x1000,  // taka  415
	0x929c: 0x1000,  // taki  462
	0x9320: 0x1000,  // tako  486
	0x9227: 0x1000,  // tare  414
	0x01d7: 0x1000,  // tars  118
	0x9014: 0x1000,  // taur  35
	0x01c5: 0x1000,  // tayy  273
	0x01e4: 0x1000,  // tear  281
	0x00c4: 0x3000,  // teng  115
	0x932c: 0x1000,  // tens  530
	0x008b: 0x2000,  // theb  174
	0x01b9: 0x1000,  // thel  282
	0x002d: 0x1000,  // thin  284
	0x900c: 0x1000,  // thir  52
	0x002c: 0x3000,  // this  231
	0x9237: 0x1000,  // thli  382
	0x92df: 0x1000,  // thni  471
	0x933b: 0x1000,  // thr8  493
	0x91eb: 0x1000,  // tick  383
	0x9015: 0x1000,  // tier  57
	0x900f: 0x1000,  // tika  36
	0x91c3: 0x1000,  // timh  384
	0x9333: 0x1000,  // titi  536
	0x9043: 0x1000,  // tlov  31
	0x8384: 0x2000,  // tmrr  108
	0x600a: 0x4000,  // tomo  109
	0x0166: 0x1000,  // toth  165
	0x91ca: 0x1000,  // trac  385
	0x9281: 0x1000,  // tric  444
	0x9246: 0x1000,  // trig  416
	0x9107: 0x1000,  // trim  312
	0x001a: 0x4c00,  // trip  288
	0x9199: 0x1000,  // trix  341
	0x91a7: 0x1000,  // trus  325
	0x9270: 0x4c00,  // trxs  460
	0x6001: 0x3000,  // tryl  110
	0x0167: 0x1000,  // tsug  292
	0x0181: 0x1000,  // tsug3 291
	0x9238: 0x1000,  // ttlg  386
	0x9195: 0x1000,  // uber  440
	0x921d: 0x1000,  // ucan  417
	0x9010: 0x1000,  // unde  59
	0x0165: 0x1000,  // unli  239
	0x927b: 0x1000,  // unlx  451
	0x9187: 0x1000,  // unre  345
	0x91ad: 0x1000,  // uran  336
	0x9334: 0x1000,  // valk  542
	0x930e: 0x1000,  // vane  513
	0x019b: 0x1000,  // vani  295
	0x9190: 0x1000,  // vate  335
	0x919a: 0x1000,  // vemb  343
	0x9191: 0x1000,  // venu  339
	0x008c: 0x5000,  // virt  222
	0x919d: 0x1000,  // volc  348
	0x91aa: 0x1000,  // votu  338
	0x01c0: 0x1000,  // vvvv  294
	0x91cb: 0x1000,  // waiu  418
	0x9243: 0x1000,  // weco  420
	0x01cf: 0x1000,  // wedd  197
	0x923d: 0x1000,  // weve  419
	0x9316: 0x1000,  // whro  481
	0x91af: 0x1000,  // whyn  358
	0x009c: 0x1000,  // wild  297
	0x017f: 0x1000,  // wild3 296
	0x916c: 0x2000,  // will  429
	0x92aa: 0x1000,  // wwcm  463
	0x01da: 0x1000,  // xeno  298
	0x9003: 0x1000,  // xeph  60
	0x927a: 0x1000,  // xmax  450
	0x01d5: 0x1000,  // yncc  280
	0x9341: 0x1000,  // yoan  499
	0x92ed: 0x1000,  // youa  466
	0x8389: 0x3000,  // youg  112
	0x925a: 0x6000,  // zerr  430
	0x930c: 0x1000,  // zeta  512
};

const SONG_END = {
	0x01c1: 0x3a800,  // aaaa  120
	0x9000: 0x3c000,  // aaaa2 32
	0x92db: 0x49000,  // abri  464
	0x00ec: 0x3d800,  // abso  121
	0x0101: 0x3a000,  // abys  122
	0x01e6: 0x67c00,  // acro  123
	0x007c: 0x4a000,  // afro  126
	0x0174: 0x4d000,  // afro3 125
	0x9274: 0x4a000,  // afrx  445
	0x0089: 0x29c00,  // afte  127
	0x933c: 0x4b000,  // aftr  495
	0x00bc: 0x3bc00,  // agai  228
	0x01e2: 0x29800,  // airr  128
	0x9314: 0x40000,  // allm  478
	0x921a: 0x38000,  // almy  366
	0x91a3: 0x43000,  // alth  355
	0x91b4: 0x2e000,  // amch  361
	0x008d: 0x32000,  // amcs  129
	0x016d: 0x48000,  // andy  150
	0x9152: 0x37800,  // ange  356
	0x9313: 0x83000,  // anti  507
	0x01d3: 0x3a000,  // aois  138
	0x9196: 0x5d000,  // arra  354
	0x9193: 0x48000,  // athi  344
	0x00b6: 0x27000,  // baby  134
	0x01d1: 0x19c00,  // bagg  135
	0x8413: 0x24000,  // bais  64
	0x8104: 0x1d000,  // bald  66
	0x9336: 0x38000,  // batf  535
	0x01bd: 0x3b000,  // belo  137
	0x9226: 0x33000,  // bene  367
	0x932a: 0x38000,  // beyo  539
	0x00bb: 0x3f000,  // bfor  133
	0x0177: 0x38400,  // bfor3 132
	0x91b7: 0x3f000,  // bfov  364
	0x9225: 0x38000,  // bigg  387
	0x9175: 0x30000,  // bins  433
	0x9192: 0x48000,  // blin  334
	0x9147: 0x3d000,  // bloo  337
	0x926c: 0x3d000,  // blra  434
	0x01a5: 0x3a000,  // bom2  173
	0x92c5: 0x3b000,  // bona  518
	0x9236: 0x3b000,  // boys2 389
	0x9013: 0x31000,  // braz  67
	0x000b: 0x34000,  // bril  142
	0x000d: 0x34000,  // bril2 141
	0x0176: 0x3c400,  // bril3 140
	0x91b3: 0x34000,  // bris  360
	0x00ed: 0x44000,  // brok  143
	0x6007: 0x33000,  // brou  62
	0x00b8: 0x3c000,  // burn  145
	0x0180: 0x3bc00,  // burn3 144
	0x9235: 0x37000,  // butt2 368
	0x9032: 0x30000,  // cach  33
	0x8000: 0x34000,  // canb  69
	0x014d: 0x48000,  // cand  151
	0x9279: 0x48000,  // canx  446
	0x932e: 0x4b000,  // capt2 526
	0x9312: 0x4b000,  // cgpr  479
	0x926d: 0x3f000,  // chan  435
	0x903d: 0x2dd00,  // chao  301
	0x002a: 0x47800,  // clea  251
	0x00b7: 0x43400,  // clim  285
	0x9276: 0x44000,  // clix  461
	0x01c4: 0x43000,  // colo  155
	0x92f7: 0x2b000,  // crco  502
	0x9006: 0x4b000,  // curu  37
	0x008a: 0x2e800,  // cuti  158
	0x921f: 0x34000,  // dace  390
	0x922a: 0x34000,  // dacr  391
	0x930a: 0x49000,  // dada  475
	0x9309: 0x4a000,  // dada2 515
	0x92ae: 0x3e000,  // daft  521
	0x01cb: 0x46000,  // daik  160
	0x9332: 0x3b000,  // damd2 523
	0x900d: 0x44800,  // dand  38
	0x9247: 0x30000,  // danf  392
	0x9156: 0x2a000,  // dazz  369
	0x01e0: 0x3be00,  // ddre  161
	0x927e: 0x3be00,  // ddrx  447
	0x007f: 0x4e800,  // dead  162
	0x91b8: 0x44000,  // deag  365
	0x933d: 0x8a000,  // delt  494
	0x702d: 0x34000,  // deux  111
	0x0085: 0x42000,  // dgra  193
	0x8382: 0x3b000,  // diff  88
	0x933e: 0x33000,  // dirt  496
	0x919c: 0x33000,  // dofl  347
	0x842a: 0x51000,  // doll  70
	0x9005: 0x5e000,  // drab  39
	0x91cc: 0x35000,  // drem  393
	0x9322: 0x4c000,  // droo  510
	0x009a: 0x6c000,  // drop  172
	0x0178: 0x2ec00,  // drop3 171
	0x0156: 0x40000,  // drte  159
	0x91b5: 0x40000,  // dtwf  362
	0x923f: 0x36000,  // dubi2 370
	0x933f: 0x43000,  // dumm  497
	0x9046: 0x60000,  // dvis  299
	0x00ee: 0x40c00,  // dxyy  175
	0x007e: 0x3c000,  // dyna  178
	0x91b6: 0x3c000,  // dyns  363
	0x00eb: 0x39400,  // ecst  181
	0x0182: 0x36400,  // ecst3 180
	0x919e: 0x27000,  // eday  318
	0x00f3: 0x33000,  // elec  182
	0x003a: 0x28c00,  // emot  179
	0x00c6: 0x3ac00,  // eran  184
	0x0157: 0x41800,  // esti  164
	0x9330: 0x3c000,  // etny  524
	0x9331: 0x3c000,  // evti  537
	0x014c: 0x4a000,  // exot  186
	0x9329: 0x38000,  // ezdo  540
	0x902a: 0x6b000,  // fasc  300
	0x9049: 0x79800,  // fasc2 302
	0x00e9: 0x46c00,  // feal  199
	0x9278: 0x46c00,  // feax  448
	0x91c7: 0x3b000,  // feee  394
	0x92b7: 0x3a000,  // fego  519
	0x9105: 0x3b000,  // felw  310
	0x9143: 0x37000,  // fied  316
	0x9307: 0x50000,  // fifi  473
	0x9186: 0x45000,  // firr  353
	0x91ea: 0x3b000,  // flig  395
	0x91f9: 0x44000,  // flou  371
	0x901c: 0x39000,  // flow  20
	0x9048: 0x49000,  // flow2 21
	0x9104: 0x35000,  // flow3 308
	0x9019: 0x36000,  // flya  23
	0x9100: 0x34000,  // flya2 306
	0x8010: 0x38000,  // free  72
	0x92a3: 0x3b000,  // frez  469
	0x01c8: 0x45400,  // froz  189
	0x6005: 0x30000,  // frve  71
	0x6000: 0x32000,  // funk  73
	0x9157: 0x40000,  // fway  315
	0x01ba: 0x34000,  // game  190
	0x901f: 0x37000,  // gate  30
	0x9102: 0x37000,  // gate2 307
	0x9280: 0x40000,  // geis  436
	0x9009: 0x4b000,  // gekk  42
	0x01d9: 0x31c00,  // gene  293
	0x0054: 0x32000,  // geno  191
	0x9240: 0x33000,  // getu2 396
	0x00b9: 0x38000,  // gher  202
	0x0185: 0x34400,  // gher3 201
	0x91c8: 0x36000,  // ghet  397
	0x91b1: 0x3b000,  // gili  321
	0x92e2: 0x3a000,  // goda  470
	0x902e: 0x35000,  // gold  7
	0x810a: 0x37000,  // gorg  74
	0x9306: 0x43000,  // goru  509
	0x9337: 0x66000,  // goup  531
	0x9047: 0x45000,  // hana  22
	0x921c: 0x3c000,  // happ  398
	0x012b: 0x4b000,  // heal  198
	0x01dd: 0x48800,  // heav  200
	0x921b: 0x42000,  // heit  372
	0x9241: 0x39000,  // hero2 399
	0x92d0: 0x3c000,  // hest  468
	0x932d: 0x3c000,  // hide  538
	0x9004: 0x50000,  // hima  75
	0x9221: 0x3b000,  // hora  400
	0x9002: 0x49000,  // hpan  43
	0x930f: 0x56000,  // huch  477
	0x01de: 0x3d800,  // hype  205
	0x009f: 0x4b000,  // hyst  207
	0x017a: 0x4a400,  // hyst3 206
	0x92ad: 0x35000,  // iceb  520
	0x01d8: 0x3e000,  // ichi  116
	0x016c: 0x3a400,  // ifee  208
	0x842b: 0x3d000,  // ifut  78
	0x9326: 0x3c000,  // ifyo2 517
	0x9325: 0x49000,  // ifyo3 541
	0x01b7: 0x40000,  // imgo  209
	0x7013: 0x2e000,  // inee  76
	0x9287: 0x3b000,  // inlo  500
	0x901a: 0x31800,  // inno  25
	0x010d: 0x3b000,  // inse  210
	0x8386: 0x2c000,  // insi  80
	0x9244: 0x3c000,  // insp  401
	0x01b4: 0x3fc00,  // issk  218
	0x9315: 0x4a000,  // issk2 516
	0x91ef: 0x34000,  // iyhr  427
	0x019e: 0x2b000,  // jamm  81
	0x01bb: 0x2d400,  // jane  213
	0x01ce: 0x33000,  // jetw  214
	0x91ab: 0x38000,  // jupi  322
	0x900e: 0x44000,  // kage  45
	0x0173: 0x42400,  // kaku  215
	0x927c: 0x42400,  // kakx  449
	0x810e: 0x35000,  // kee2  83
	0x002e: 0x26000,  // keep  216
	0x92d5: 0x4d000,  // kimp  483
	0x014f: 0x32000,  // kind  217
	0x926e: 0x34000,  // koko  437
	0x900a: 0x40d00,  // kono  46
	0x9040: 0x3f000,  // lab3  10
	0x01df: 0x42c00,  // laba  221
	0x92ef: 0x4b000,  // lali  503
	0x91a9: 0x44000,  // lamd  324
	0x01b6: 0x3ac00,  // lamo  220
	0x92f2: 0x39000,  // larc  505
	0x0080: 0x4b000,  // lase  223
	0x010e: 0x42000,  // lcan  148
	0x00c3: 0x3cc00,  // lead  224
	0x01be: 0x38400,  // ledl  242
	0x01d2: 0x79800,  // lege  283
	0x927d: 0x79800,  // legx  459
	0x0129: 0x26000,  // lett  225
	0x91f8: 0x31000,  // lift  402
	0x019f: 0x2e000,  // logi  86
	0x91ee: 0x45000,  // lovy  428
	0x002b: 0x3f000,  // luvm  287
	0x92c4: 0x22000,  // lvag  504
	0x9338: 0x40000,  // lvng  533
	0x000e: 0x2dc00,  // make  235
	0x9145: 0x3b000,  // mala  374
	0x8383: 0x35000,  // mari  89
	0x91ae: 0x58000,  // mars  352
	0x9339: 0x67000,  // maxl  532
	0x0145: 0x6e000,  // maxx  238
	0x91c9: 0x37000,  // mcry  403
	0x01ac: 0x2d000,  // mcut  157
	0x01c6: 0x3dc00,  // meal  219
	0x930b: 0x61000,  // meii  511
	0x933a: 0x58000,  // melo  534
	0x840e: 0x3c000,  // mids  93
	0x01d4: 0x61c00,  // mike  147
	0x8114: 0x33000,  // mind  94
	0x9144: 0x42000,  // mitr  346
	0x7012: 0x4b800,  // mize  92
	0x9327: 0x3c000,  // momo  514
	0x8410: 0x4f000,  // monk  95
	0x900b: 0x3e000,  // mooo  48
	0x9103: 0x3a000,  // moos  304
	0x9007: 0x47000,  // muge  49
	0x9018: 0x45000,  // murm  50
	0x901b: 0x3f000,  // myon  27
	0x00ba: 0x28000,  // naha  247
	0x931c: 0x7a000,  // newd  506
	0x9183: 0x5e000,  // ngoo  342
	0x00dd: 0x33000,  // nite  153
	0x0184: 0x37400,  // nite3 152
	0x9008: 0x3e000,  // nizi  51
	0x9342: 0x3d000,  // oarf  492
	0x9017: 0x39000,  // okor  58
	0x00c5: 0x37c00,  // olic  204
	0x9245: 0x3d000,  // onbo  404
	0x9328: 0x3c000,  // onra  484
	0x91c6: 0x41000,  // ontb  375
	0x00c9: 0x32000,  // onts  169
	0x0169: 0x40c00,  // opti  146
	0x8381: 0x43000,  // oran  87
	0x00d5: 0x4e000,  // orio  248
	0x010b: 0x53000,  // pafr  124
	0x001b: 0x4b800,  // para  256
	0x001d: 0x4b800,  // para2 252
	0x8006: 0x7c000,  // parb  96
	0x91a1: 0x6a000,  // pard  340
	0x926f: 0x4bc00,  // parx  452
	0x9271: 0x4b800,  // parx2 455
	0x8388: 0x3d000,  // pass  97
	0x00f4: 0x4e800,  // peta  249
	0x9277: 0x4e800,  // petx  453
	0x00a0: 0x4d000,  // pevo  250
	0x9275: 0x4f000,  // pevx  454
	0x931f: 0x46000,  // pier  508
	0x921e: 0x35000,  // play  406
	0x91bd: 0x5f000,  // pluf  491
	0x91a8: 0x7a000,  // plur  327
	0x919f: 0x35000,  // plut  326
	0x8380: 0x3e000,  // polo  99
	0x9289: 0x3c000,  // pori  442
	0x91b2: 0x4c000,  // pose  357
	0x931d: 0x3d000,  // pose2 543
	0x9311: 0x97000,  // poss  472
	0x8117: 0x2f000,  // put3  100
	0x91fc: 0x32000,  // pute  407
	0x000a: 0x2bc00,  // puty  258
	0x91c1: 0x30c00,  // puzz  376
	0x9034: 0x36000,  // qmas  53
	0x8118: 0x40000,  // quic  101
	0x01bf: 0x36000,  // radu  194
	0x0164: 0x37c00,  // rain  260
	0x9012: 0x42000,  // rara  54
	0x9146: 0x47000,  // rasp  350
	0x901d: 0x40c00,  // rbow  102
	0x0082: 0x4e800,  // rebi  253
	0x9273: 0x4e800,  // rebx  457
	0x841a: 0x84000,  // remx  91
	0x9242: 0x3d000,  // reup  408
	0x9260: 0x42000,  // rezo  522
	0x9256: 0x4d000,  // rint  438
	0x01e1: 0x3d800,  // ripm  286
	0x0168: 0x52000,  // roll  139
	0x9290: 0x4c000,  // ropp1 487
	0x9291: 0x4c000,  // ropp2 488
	0x9292: 0x4a000,  // ropp3 489
	0x9321: 0x5c000,  // ropp4 490
	0x01dc: 0x37000,  // rose  257
	0x9001: 0x3f000,  // rzon  55
	0x91ed: 0x5a000,  // sabe  377
	0x92a9: 0x42000,  // sacr  467
	0x91c4: 0x50000,  // saga  378
	0x9340: 0x46000,  // sak2  498
	0x01db: 0x69000,  // saku  262
	0x9178: 0x47000,  // samu  439
	0x0102: 0x24800,  // sana  263
	0x9228: 0x5f000,  // sare  409
	0x931e: 0x47000,  // sasu  485
	0x6006: 0x34000,  // satn  103
	0x91bb: 0x43000,  // satu  323
	0x701d: 0x32000,  // scor  104
	0x9324: 0x4b000,  // sday  529
	0x930d: 0x49000,  // seco  476
	0x0162: 0x27c00,  // secr  264
	0x8385: 0x44000,  // sedu  105
	0x9038: 0x4c000,  // sedu2 29
	0x9282: 0x32000,  // seka  431
	0x00de: 0x3c000,  // sexy  266
	0x017c: 0x49000,  // sexy3 265
	0x91b0: 0x42000,  // shad  359
	0x9310: 0x3d000,  // shei  482
	0x92c3: 0x32000,  // shie  465
	0x01a4: 0x3d000,  // shin  107
	0x9323: 0x54000,  // shng  544
	0x9335: 0x22000,  // shwo  528
	0x0081: 0x327c0,  // sile  269
	0x0183: 0x32400,  // sile3 268
	0x9106: 0x3a000,  // silv  311
	0x9016: 0x31800,  // sksk  56
	0x931b: 0x3f000,  // skyi  480
	0x9220: 0x25000,  // slip  410
	0x9229: 0x29000,  // slre  411
	0x91c0: 0x4b000,  // smil  379
	0x9308: 0x53000,  // smoo  474
	0x0150: 0x28c00,  // soin  271
	0x9101: 0x3b000,  // soul  305
	0x009e: 0x2e000,  // sprs  278
	0x017d: 0x31c00,  // sprs3 277
	0x001c: 0x3a000,  // sptr  272
	0x9272: 0x3a000,  // sptx  458
	0x9188: 0x3e000,  // stah  351
	0x0019: 0x2e000,  // star  131
	0x0175: 0x36000,  // star3 130
	0x8011: 0x3c800,  // stas  106
	0x00ea: 0x3d000,  // stil  275
	0x017e: 0x3f400,  // stil3 274
	0x01b8: 0x42000,  // stin  163
	0x01d6: 0x3d800,  // stoi  276
	0x009b: 0x3e000,  // stop  149
	0x9035: 0x42800,  // stop2 34
	0x9288: 0x3b000,  // sttb  501
	0x701c: 0x38000,  // stup  61
	0x932b: 0x55000,  // sudr  527
	0x932f: 0x3f000,  // sueu  525
	0x01b5: 0x37000,  // suga  230
	0x9283: 0x42000,  // suki  432
	0x00be: 0x26800,  // summ  245
	0x0186: 0x29c00,  // summ3 244
	0x91ba: 0x50000,  // sunk  328
	0x01ad: 0x48000,  // suns  229
	0x01ae: 0x64c00,  // surv  255
	0x01d0: 0x6c000,  // surv3 254
	0x015a: 0x44c00,  // swee  279
	0x91fd: 0x2a000,  // swin  412
	0x91a2: 0x3f000,  // swit  349
	0x9284: 0x31000,  // tabi  443
	0x91ec: 0x2e000,  // tajh  381
	0x91fa: 0x26000,  // taka  415
	0x929c: 0x34000,  // taki  462
	0x9320: 0x42000,  // tako  486
	0x9227: 0x32000,  // tare  414
	0x01d7: 0x41000,  // tars  118
	0x9014: 0x31c00,  // taur  35
	0x01c5: 0x2a800,  // tayy  273
	0x01e4: 0x3b000,  // tear  281
	0x00c4: 0x3a400,  // teng  115
	0x932c: 0x3a000,  // tens  530
	0x008b: 0x3a000,  // theb  174
	0x01b9: 0x6ac00,  // thel  282
	0x002d: 0x37c00,  // thin  284
	0x900c: 0x41000,  // thir  52
	0x002c: 0x3bc00,  // this  231
	0x9237: 0x40000,  // thli  382
	0x92df: 0x49000,  // thni  471
	0x933b: 0x67000,  // thr8  493
	0x91eb: 0x3b000,  // tick  383
	0x9015: 0x29000,  // tier  57
	0x900f: 0x48000,  // tika  36
	0x91c3: 0x29800,  // timh  384
	0x9333: 0x3e000,  // titi  536
	0x9043: 0x4b000,  // tlov  31
	0x8384: 0x37000,  // tmrr  108
	0x600a: 0x37000,  // tomo  109
	0x0166: 0x3d000,  // toth  165
	0x91ca: 0x3d000,  // trac  385
	0x9281: 0x47800,  // tric  444
	0x9246: 0x72000,  // trig  416
	0x9107: 0x57000,  // trim  312
	0x001a: 0x3abc0,  // trip  288
	0x9199: 0x3f000,  // trix  341
	0x91a7: 0x46000,  // trus  325
	0x9270: 0x3abc0,  // trxs  460
	0x6001: 0x26000,  // tryl  110
	0x0167: 0x3e000,  // tsug  292
	0x0181: 0x3ec00,  // tsug3 291
	0x9238: 0x37000,  // ttlg  386
	0x9195: 0x47000,  // uber  440
	0x921d: 0x3a000,  // ucan  417
	0x9010: 0x40000,  // unde  59
	0x0165: 0x75000,  // unli  239
	0x927b: 0x75000,  // unlx  451
	0x9187: 0x44000,  // unre  345
	0x91ad: 0x40000,  // uran  336
	0x9334: 0x59000,  // valk  542
	0x930e: 0x49000,  // vane  513
	0x019b: 0x37000,  // vani  295
	0x9190: 0x44000,  // vate  335
	0x919a: 0x3b000,  // vemb  343
	0x9191: 0x57000,  // venu  339
	0x008c: 0x47000,  // virt  222
	0x919d: 0x69000,  // volc  348
	0x91aa: 0x3d000,  // votu  338
	0x01c0: 0x41800,  // vvvv  294
	0x91cb: 0x47000,  // waiu  418
	0x9243: 0x31000,  // weco  420
	0x01cf: 0x32000,  // wedd  197
	0x923d: 0x32000,  // weve  419
	0x9316: 0x3c000,  // whro  481
	0x91af: 0x46000,  // whyn  358
	0x009c: 0x32400,  // wild  297
	0x017f: 0x32000,  // wild3 296
	0x916c: 0x3f000,  // will  429
	0x92aa: 0x42000,  // wwcm  463
	0x01da: 0x3a000,  // xeno  298
	0x9003: 0x47000,  // xeph  60
	0x927a: 0x6e000,  // xmax  450
	0x01d5: 0x41000,  // yncc  280
	0x9341: 0x51000,  // yoan  499
	0x92ed: 0x3d000,  // youa  466
	0x8389: 0x3a000,  // youg  112
	0x925a: 0x52000,  // zerr  430
	0x930c: 0x5b000,  // zeta  512
};
