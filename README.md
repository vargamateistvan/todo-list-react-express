## Telepítés

```
npm install
```

## Futtatás

Docker telepítes kell hozzá, a futtatáshoz nem szükséges telepíteni a packageket

```
docker-compose up
```

## Tesztelés

Tesztek futtatásához szükséges a csomagok telepítése

```
npm run dev
```

## környezet

```
node v20.10.0  npm 10.2.4
```

A backendhez tartozik egy postman collection is a postman mappában

## Feladat leírása

### Full-stack pozíció esetén

A feladat egy **Todo list** alkalmazás elkészítése a [Carbon Component](https://carbondesignsystem.com/) használatával egy általa [támogatott keretrendszer ](https://carbondesignsystem.com/developing/frameworks/react)segítségével.

### Front-end pozíció esetén

A feladat egy **Todo list** alkalmazás elkészítése [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) használatával natívan vagy Lit/Stencil keretrendszerek használatával. A UI kialakítása során ne használj semmilyen CSS keretrendszert, egyébként a kinézet rád van bízva. Ügyelj kérlek az akadálymentesítési alapelvekre is a WCAG 2.2-es szabvány alapján.

- Az alkalmazás a gyökér könyvtárból futtatható kell legyen
- A README.md file-ba töltsd ki a **Telepítés** és **Futtatás** részeit!

### A frontenden a következő funkcióknak / elemeknek kell megjelennie:

- Jelenjen meg az aktuális nap, dátummal és hónappal együtt _(magyar dátum formátum)_
- Lehessen felvenni új elemet _(Üres elemet ne lehessen felvenni)_
  - A ToDo elemnek szüksége van `névre`, `leírásra`, `állapotra`, `lezárás idejére`.
- Jelenítse meg az összes aktív és a már elvégezett feladatokat is
- Az elemet lehessen szerkeszteni és/vagy törölni
- A felvett elemet lehessen egy kapcsolóval elvégzettnek állítani (vagy ezt viszavonni)

##### Plusz pontért:

- UI tesztek írása az egyes funkciókhoz
- Nyelvesítés megvalósítása

### A backendet a következő szempontok alapján kérjük elkészíteni (full-stack pozíció esetén):

Az általunk biztosított alapstruktúrában található egy ExpressJs alapú webserver amelyben az API végpontok megtalálhatóak, alkalmazás logika nélkül.
_De ezt szabadon változtathatod, amennyiben más kiszolgáló megoldás kézenfekvőbb számodra. (github-ra feltölthető verzió legyen)_

- A kiszolgáló oldali alkalmazásnak meg kell valósítania a CRUD (create, read, update, delete) perzisztens tárolási funkcionalitást a REST (Representational State Transfer) alapelvek szerint

##### Plusz pontért:

- Unit tesztek írása
- Tesztek írása az egyes végpontokhoz, funkciókhoz

### Alapstruktúra és alkalmazáskeret felépítése:

- Tartalmazza a server és client könyvtárat
- Az alkalmazás keret működtetéséhez szükség van NodeJs ill. npm telepítésére
- A keret a futtatáshoz szükséges npm csomagokat nem tartalmazza, ezeket fel kell
  telepíteni az általad választott csomagkezelő segítségével.

## Értékelési szempontok:

- Az alkalmazás megjelenése/felépítése megfelel e a kiírásnak
- Az alkalmazás biztosítja-e a kiírásnak megfelelő funkcionalitást
- A forráskód minősége (formázás, elnevezések, kódszervezés)
- Megoldás ötletessége, egyszerűsége
- Modern technológiák használata
- Tesztlefedettség (amennyiben készültek tesztesetek)

A feladat megoldásával kapcsolatban felmerülő kérdéseiddel fordulj az Idomsoft HR csapatához a kivalasztas@idomsoft.hu e-mail címen, vagy a github issue-kon keresztül.
