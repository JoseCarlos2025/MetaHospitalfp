# [MetaHospitalfp](https://github.com/JoseCarlos2025/MetaHospitalfp)

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
  - Uso de Axio para la comunicación entre las aplicaciones y el servidor.
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

## Mejora estructural de la Base de Datos 

Para este proyecto, hemos evaluado la idea principal de la base de datos propuesta. Mi compañero y yo hemos identificado fallos y áreas de mejora, especialmente en la estructura actual donde los usuarios son la tabla principal y actúan como discriminador para identificar si son estudiantes o profesores. Esta configuración genera problemas al permitir campos diferentes entre ambos roles, lo que podría resultar en campos vacíos. Además, enfrentamos dificultades para distinguir entre cursos y grupos. Para abordar esto, hemos modificado la estructura, cambiando "curso" a "grupo" y añadiendo una tabla adicional que establece la relación entre grupos y cursos, permitiendo que un curso tenga varios grupos.

## Prototipo

Prototipo en proceso [figma](https://www.figma.com/file/cKBt0NM8CGovFJGsIVfnug/MetaHospitalFp?type=design&node-id=0%3A1&mode=design&t=XYOpM1Ug3TnG21M6-1)

## Construido con 🛠️

* [Reactjs](https://react.dev/) - React es una biblioteca de JavaScript para construir interfaces de usuario.
* [Express](https://expressjs.com/es/) - Express.js es un marco de aplicaciones web de Node.js utilizado para crear servidores y aplicaciones web.
* [Sequelize](https://sequelize.org/) - Sequelize es una biblioteca de Node.js que se utiliza para interactuar con bases de datos SQL y es especialmente útil en aplicaciones que utilizan Node.js.

# Manual de Instalación para el Desarrollador

### Requisitos Previos

- Node.js instalado
- Base de datos relacional MySQL
- Gestor de paquetes npm

### Pasos de Instalación

1. Clonar el repositorio del servidor desde GitHub:

   ```bash
   git clone https://github.com/JoseCarlos2025/MetaHospitalfp

2. Navegar al directorio del servidor:

   ```bash
   cd backend/

3. Instalar las dependencias:

   ```bash
   npm install

4. Configurar los archivo .env con los .env.example:
   
5. Iniciar el servidor:

   ```bash
   npm start

6. Navegar al directorio de la aplicación:

   ```bash
   cd frontend/

7. Instalar las dependencias:

   ```bash
   npm install

8. Configurar los archivo .env con los .env.example:
   
9. Iniciar el servidor:

   ```bash
   npm start

### Usabilidad

## Introducción:
La usabilidad es una parte fundamental de la experiencia del usuario en MetaHospitalfp. En este documento, exploraremos las características diseñadas para hacer que la aplicación sea intuitiva y fácil de usar.

# Iconografía:

1. Uso de Iconos Claros y Reconocibles:
Se han seleccionado iconos fácilmente reconocibles para cada función.
Ejemplos de iconos: [añadir imágenes aquí].
2. Indicadores Visuales:
Los iconos cambian de color o resaltan cuando se seleccionan.
Ejemplos visuales: [añadir imágenes aquí].

# CRUD (Crear, Leer, Actualizar, Eliminar):

1. Formularios Simplificados:
La información se pasa de manera clara y directa al formulario.
Ejemplo de un formulario simplificado: [añadir imagen aquí].
2. Botones Intuitivos:
Iconos claros para agregar, actualizar, eliminar, etc.
Ejemplos de botones: [añadir imágenes aquí].
3. Confirmación Visual:
Iconos específicos para eliminar y editar con papelera y lápiz.
Ejemplos visuales: [añadir imágenes aquí].

# Menús y Navegación:

1. Cambio de Color:
Los elementos del menú cambian de color al seleccionarse.
Ejemplo de cambio de color: [añadir imágenes aquí].
2. Efecto de Tamaño:
Los elementos, como los cards, aumentan de tamaño al pasar el cursor.
Ejemplos visuales: [añadir imágenes aquí].

# Feedback y Ayuda:

1. Mensajes Claros:
Mensajes de error y éxito son claros y fáciles de entender.
Ejemplos de mensajes: [añadir imágenes aquí].
2. Recursos de Ayuda:
Se proporciona acceso fácil a tutoriales y recursos de ayuda.
Ejemplos de recursos de ayuda: [añadir imágenes aquí].

# Conclusiones:

La implementación de estas características de usabilidad se ha centrado en hacer que MetaHospitalFp sea accesible y eficiente para los usuarios. La combinación de iconografía clara, navegación intuitiva y feedback efectivo contribuye a una experiencia positiva del usuario.
   

# Conclusión y Reflexiones

**MetaHospitalFP** es un proyecto innovador que utiliza la realidad virtual para transformar la formación en el ámbito sanitario. La flexibilidad de realizar prácticas de cuidados a neonatos sin restricciones geográficas es una ventaja clave. La estructura modular y la elección de tecnologías modernas reflejan una planificación cuidadosa para garantizar eficiencia y escalabilidad. La inclusión de manuales detallados destaca el compromiso con la usabilidad. Participar en este proyecto ha sido estimulante, y estoy entusiasmado por contribuir a su desarrollo continuo y su impacto positivo en la educación sanitaria.

## Autores ✒️

* **José Carlos Llitrá Quintana** - *Trabajo Inicial* - [JoseCarlos2025](https://github.com/JoseCarlos2025)
