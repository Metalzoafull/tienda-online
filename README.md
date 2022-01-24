# tienda-online

### `dependencia utilizadas:`

## `bcrypt`

Utilizado para encriptar las contraseñas.

## `express`

Utilizado para facilitar la coneccion con el servidor.

## `jsonwebtoken`

Utilizado para agregar los "tokens".


## `morgan`

Utilizado para hacer seguimientos a las peticiones pedidas por el servidor.

## `mysql2`

Dependencia para poder utilizar la base de datos "mysql".

## `sequelize`

ORM utilizada para abstraer un poco la relacion con la base de datos.

## ``


### `comandos utilizados:`

## `npm run dev`

Es el comando que se utiliza para levantar el trabajo mientras esta en desarrollo.

## `npx sequelize-cli model:generate --name "name" --attributes "atributes"`

Es el comando que se utiliza para crear las entidades de la base en nodejs, con este comando creamos el modelo y las migraciones, ej: npx sequelize-cli model:generate --name category(el nombre del modelo) --attributes name:strin,description:strin (los atributos del modelo, recuerde que tienen que estar juntos sin espacios por que los espacios pueden llegar a producir un error).

## `npx sequelize-cli db:migrate`

Es el comando utilizado para "migrar" todos los modelo de creados a entidades de base de datos.

