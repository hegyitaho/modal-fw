# doksi
storybookban irtam mert lehet esetekent tesztet irni es jsdommal ellentetben latni is es mockolni se kell semmit.
modalos fileok `./src`, storybook `./stories` mappaban

### futtatas
- `npm run storybook` 
-  http://localhost:6006/
## usage
```tsx
<ModalProvider>
    <Page />
</ModalProvider>
```
### exposed methods
```ts
const { openNewModal, close, moveToBack, moveToFront, setZIndex } = useModal()
```
### openNewModal
opens a new modal
```tsx
const modalId = openNewModal({ 
    children: <p>modal content</p>,
    title: 'modal title',
})
```
### close
closes athe modal with the id
```tsx
close(modalId)
```
### moveToFront, moveToBack
moves modal to front or back (z-index doesn't affect modal dialog)
```tsx
 moveToFront(modalId)
```
### setZIndex
only works with non-blocking (non-modal) dialog
```tsx
setZIndex(modalId, zIndex)
```
### custom buttons
using default layout but custom buttons
```tsx
openNewModal({ 
    buttons: ({ onClose }) => <MyCusomButton onClick={() => { onClose() }}>fancy close button</button>
})
```
### layout
display any component as content without the default layout / buttons etc.
```tsx
const modalId = openNewModal({ 
    layout: ({ onClose }) => (
        <MyCustomElement {...{onClose, ...customProps}}/>
    )
})
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