## Introducción

El proyecto MetaHospitalFP surge como respuesta a la creciente necesidad de proporcionar a los estudiantes de sanidad del IES Los Gladiolos en la isla de Tenerife una experiencia de aprendizaje innovadora. La aplicación de Realidad Virtual tiene como objetivo permitir a los alumnos realizar prácticas de cuidados a neonatos de manera virtual, ofreciendo una simulación inmersiva de situaciones hospitalarias. Desarrollado específicamente para el IES Los Gladiolos, y aspira a extenderse para ser utilizado por todos los centros de sanidad en Canarias, incluyendo universidades.

## Desarrollo para

El proyecto se desarrolla para el IES Los Gladiolos en la isla de Tenerife, con la visión de expandirse para ser utilizado por todos los centros de sanidad en Canarias. Esta iniciativa busca transformar la educación sanitaria al proporcionar a los estudiantes una plataforma virtual para practicar y perfeccionar habilidades de cuidado neonatal.

## Idea Resumida

La idea central del desarrollo es crear una Aplicación de Realidad Virtual que permita a los estudiantes realizar prácticas de cuidados a neonatos de forma virtual. La aplicación registrará los resultados de las prácticas, incluyendo calificaciones, para que los profesores puedan evaluar el rendimiento de los estudiantes. El proyecto se divide en dos aplicaciones separadas, centradas en la administración de actividades y en la gestión de centros educativos, que se fusionarán en la segunda evaluación.

# Requisitos de Usuario

## Requisitos Generales del Sistema

1. **Registro de Usuarios:**
   - El sistema permitirá los administradores añadir usuarios poniendo su información basica de ellos.

2. **Gestión de Perfiles:**
   - Los usuarios podrán personalizar sus perfiles.

3. **Acceso a Prácticas Virtuales:**
   - La aplicación proporcionará acceso a entornos de prácticas virtuales de cuidados a neonatos para que los estudiantes puedan realizar simulaciones realistas.

4. **Registro de Resultados y Calificaciones:**
   - Los usuarios podrán registrar los resultados de sus prácticas, incluyendo calificaciones y comentarios, para su revisión y evaluación por parte del profesorado.

5. **Gestión de Centros Educativos:**
   - El sistema permitirá la gestión de información relacionada con los centros educativos de sanidad, facilitando la administración de recursos y la coordinación entre instituciones.

6. **Interfaz Intuitiva:**
   - La interfaz de usuario será intuitiva y fácil de usar, garantizando una experiencia fluida para todos los usuarios, independientemente de su nivel de habilidad técnica.

## Casos de Uso en su Versión Inicial

![Casos de uso 2023-10-31 084804](https://github.com/JoseCarlos2025/MetaHospitalfp/assets/118464246/67ca5d55-b02c-4519-993b-7a24bb736623)

# Especificaciones Técnicas

## Aplicación del Servidor

- **Tecnologías Utilizadas:**
  - Node.js con Express para el backend.
  - Sequelize como ORM para la gestión de la base de datos.
  - Autenticación segura mediante JSON Web Tokens (JWT).

- **Base de Datos:**
  - Base de datos relacional MySQL para el almacenamiento de datos.
  - Modelado de datos con Sequelize para una gestión eficiente.

- **Seguridad:**
  - Implementación de prácticas de seguridad estándar, como cifrado de contraseñas y control de acceso.
  - Validación de entrada para prevenir ataques comunes.

## Aplicaciones Móvil y Web

- **Tecnologías Utilizadas:**
  - React Native para la aplicación móvil.
  - React.js para la aplicación web.

- **Interfaz de Usuario:**
  - Diseño intuitivo y receptivo para adaptarse a diversas pantallas y dispositivos.
  - Navegación sencilla para mejorar la experiencia del usuario.

- **Comunicación con el Servidor:**
  - Uso de API RESTful para la comunicación entre las aplicaciones y el servidor.
  - Manejo eficiente de solicitudes y respuestas para una experiencia fluida.

- **Seguridad:**
  - Implementación de protocolos de seguridad en la comunicación con el servidor.
  - Almacenamiento seguro de datos locales y gestión de sesiones.

# Diagrama de clases

![Diagrama de clases 2023-10-30 193104](https://github.com/JoseCarlos2025/MetaHospitalfp/assets/118464246/1586f5c4-b320-4700-965f-8c3a38c911cd)


# Diagrama de Entidad/Interrelación

![Diagrama de Entidad/Interrelación 2023-10-30 193024](https://github.com/JoseCarlos2025/MetaHospitalfp/assets/118464246/1d9a2e53-bf44-416a-baba-00dce438e6d9)

# Diagrama de Entidad/relación

![Diagrama E_R proyecto](https://github.com/JoseCarlos2025/MetaHospitalfp/assets/118464246/0edb94a4-3081-473d-abc8-7fc45ef64d6d)

## Prototipo

Prototipo en proceso [figma](https://www.figma.com/file/cKBt0NM8CGovFJGsIVfnug/MetaHospitalFp?type=design&node-id=0%3A1&mode=design&t=XYOpM1Ug3TnG21M6-1)

## Construido con 🛠️

* [Reactjs](https://react.dev/) - React es una biblioteca de JavaScript para construir interfaces de usuario.
* [Express](https://expressjs.com/es/) - Express.js es un marco de aplicaciones web de Node.js utilizado para crear servidores y aplicaciones web.
* [Sequelize](https://sequelize.org/) - Sequelize es una biblioteca de Node.js que se utiliza para interactuar con bases de datos SQL y es especialmente útil en aplicaciones que utilizan Node.js.


## Autores ✒️

* **José Carlos Llitrá Quintana** - *Trabajo Inicial* - [JoseCarlos2025](https://github.com/JoseCarlos2025)
