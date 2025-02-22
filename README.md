Globális Modal Kezelő Rendszer
Készítsen egy olyan alkalmazást, amely egy globális modal kezelő rendszert implementál a Context API segítségével.
 
Funkciók:
Modal megjelenítése és bezárása.
 
Készítsen egy globális modal rendszert, amely lehetővé teszi bármilyen modal ablak megjelenítését az alkalmazás bármely részéről.
A modalok tartalma dinamikus legyen, tehát különböző komponensekből érkező tartalmak is megjelenhetnek ugyanabban a modalkomponensben.

Context API használata: 
Implementáljon egy ModalContext-et, amely tartalmazza a modal állapot kezeléséhez szükséges logikát (pl. megjelenítendő modalok listája, nyitás/zárás logika).
A modalok globálisan legyenek elérhetők az egész alkalmazásban. Bármelyik komponens képes legyen egy modalt megnyitni.

Komplex state kezelés:
A modalok dinamikusan paraméterezhetők legyenek, például lehessen különböző tartalmakat (komponenseket) és konfigurációkat (pl. méret, gombok megjelenítése) megadni.
Több modal egyidejű megnyitásának lehetősége, és a z-index kezelés.
 
Form kezelés modalon belül: 
Készítsen egy példát, ahol egy form jelenik meg a modalban (pl. felhasználó létrehozása vagy termék hozzáadása).
A form validációja és beküldése után a modal bezáródik, és egy új modal jelenik meg a sikeres beküldést jelző visszaigazolással.