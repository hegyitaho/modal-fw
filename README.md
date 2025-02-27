# doksi
storybookban irtam mert lehet esetekent tesztet irni es jsdommal ellentetben latni is es mockolni se kell semmit.
### futtatas
- `npm run storybook` 
-  http://localhost:6006/
## usage
### openNewModal
opens a new modal
```tsx
const ({openNewModal}) = useModal()
// ...
<ModalProvider>
    <button onClick={() => {
        const modalId = openNewModal({ 
            children: <p>modal content</p>,
            title: 'modal title',
        })
    }}>
        open modal
    </button>
</ModalProvider>

```
### close
closes athe modal with the id
```tsx
const ({close}) = useModal()
// ...
<ModalProvider>
    <button onClick={() => { close(modalId) }}>
        open modal
    </button>
</ModalProvider>
```
### moveToFront, moveToBack
moves modal to front or back (z-index doesn't affect modal dialog)
```tsx
const ({close}) = useModal()
// ...
<ModalProvider>
    <button onClick={() => { close(modalId) }}>
        open modal
    </button>
</ModalProvider>
```
### setZIndex
only works with non-blocking (non-modal) dialog
```tsx
const ({setZIndex}) = useModal()
// ...
<ModalProvider>
    <button onClick={() => { setZIndex(modalId, 1) }}>
        open modal
    </button>
</ModalProvider>
```
### layout
display any component as content without the default layout / buttons etc.
```tsx
const ({close}) = useModal()
// ...
<ModalProvider>
    <button onClick={() => {
        const modalId = openNewModal({ 
             layout: ({ onClose }) => (
              <MyCustomElement {...{
                onClose,
                ...customProps
              }}
              />
            )
        })
    }>
        open modal
    </button>
</ModalProvider>
```






# feladat
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