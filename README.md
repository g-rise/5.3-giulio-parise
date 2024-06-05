# Estructura de dades MongoDB

Creació de diferents bases de dades en MongoDB
- Creació de diagrames amb les col·leccions que s'implementaran en la base de dades.
- Creació de archius json amb l'estructura de dades de cada col·lecció.

##### IT ACADEMY | NODE JS | SPRINT 5
-------------------------

## NIVELL 1 - ÒPTICA
Informatitzció de la gestió dels clients/es i vendes d'ulleres d'una òptica anomenada “Cul d'Ampolla”.

A partir dels requeriments de l'òptica es generen cuatre col·leccions diferents que responen tambè a l'exigència de les interfícies gràfiques proporcionades en els dos exercicis.
Les col·leccions son les següents:

| clients | glasses | providers | sellings |
| ------ | ------ | ------ | ------ |

### EXERCICI 1

Base de dades que correspon a una interfície gràfica des del punt de vista d’un client de l'Òptica.

![Imagen1PHP](https://github.com/g-rise/5.3-giulio-parise/assets/149588413/81aa3851-b7e7-42ae-a7f8-e02580d38724)

La solució vé amb una col·lecció     :arrow_forward: **clients_db** que engloba informació de la col·lecció  :arrow_forward: **glasses**  

### EXERCICI 2

Base de dades que correspon a una interfície gràfica des del punt de vista de les ulleres.

![Imagen2PHP](https://github.com/g-rise/5.3-giulio-parise/assets/149588413/38e3e82e-ad64-4e57-b04e-73834a133ab4)


La solució vé amb una col·lecció  :arrow_forward: **glasses_db** que engloba informacions de dues col·leccions    :arrow_forward: **providers**  :arrow_forward: **clients**  

---------------------------------

## NIVELL 2 - FOOD DELIVERY

Creació d'una base de dades per una web que permeti fer comandes de menjar a domicili per Internet.

A partir dels requisits es dissenya un diagrama amb les següents sis col·leccions

| clients | orders | products | stores | deliveries | employees
| ------ | ------ | ------ | ------ | ------ | ------ |

per satisfer a la interfície gràfica:

![Imagen3PHP](https://github.com/g-rise/5.3-giulio-parise/assets/149588413/faeef251-ad21-496b-a6ee-a19180ce1bd6)

### :open_file_folder:  schema-validation

Exemples de com creariem una col·lecció a partir de un **"schema validation"**.
La validació d'esquemes a MongoDB és una característica que ens permet estructurar les dades en el document d'una col·lecció. Seguim un conjunt de regles i regles de validació, que garanteixen que les dades que inserim o actualitzem segueixen un esquema predefinit específic.
L'objectiu és garantir que les dades només tinguin tipus de dades específics, camps obligatoris i expressions de validació esmentades a l'esquema predefinit.

----------------------------------

## NIVELL 3 - YOUTUBE

Creació d'un model senzill de com seria la base de dades per a una versió reduïda de YouTube.

A partir dels requisits es dissenya un diagrama amb les següents col·leccions

| users | channels | subscriptions | videos | playlists | comments | likes&dislikes |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |

per satisfer a la interfície gràfica:

![Imagen4PHP](https://github.com/g-rise/5.3-giulio-parise/assets/149588413/3a344bb6-2c4b-4d81-8115-1a2c899e3ff3)


----------------------------------

