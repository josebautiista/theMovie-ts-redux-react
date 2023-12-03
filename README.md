# theMovie-ts-redux-react
Prueba Técnica desarrollador frontend con typescript + REACT + REDUX

Requeriminetos:

1. Nodejs
2. npm
3. VScode o editor de preferencia
4. json-server global (opcional)

Instalación:

1. Si desea ver la prueba técnica importe en postman el archivo ./Prueba React Frontend.postman_collection.json
2. Descargar el .zip de github, descomprimirlo y abrirlo en VScode o en el editor de preferencia
3. Crear en la ruta ./theMovie un archivo de variables de entorno llamado .env.local
4. Ir a la página https://www.themoviedb.org/ registrarse y obtener la API key y el Access token
5. Crear las variables de entorno en .env.local llamadas VITE_ACCESS_TOKEN y VITE_API_KEY con los valores de https://www.themoviedb.org/
6. Dentro del proyecto ir a ./theMovie y ejecutar 
```bash
npm install
```
7. Una vez creada la carpeta node_modules abrir dos terminales
8. En una terminal ejecutar npm run dev, esto ejecutará el frontend
9. En la otra terminal ejecutar el comando
```bash
json-server --watch db.json --port 3000
```
esto ejecutará la un backend simulado.
Si no tiene instalado json-server en su PC, puede hacerlo con
```bash
 npm install -g json-server
```
si no desea instalarlo puede ejecutar
```bash
npx json-server --watch db.json --port 3000
```
10. El proyecto por defecto viene con un usuario guardado las credenciales son email: admin@admin.com  password: admin123

login:

![image](https://github.com/josebautiista/theMovie-ts-redux-react/assets/121981137/a24e4fe7-c427-40c6-ad3f-fdeabb96d5b9)

Register: 

![image](https://github.com/josebautiista/theMovie-ts-redux-react/assets/121981137/e7cf46f0-675a-4885-af6e-6e5e1fe847db)

Home: 

![image](https://github.com/josebautiista/theMovie-ts-redux-react/assets/121981137/ede7dde0-d3b0-459e-a029-65d6ad202f74)

Detalles pelicula: 

![image](https://github.com/josebautiista/theMovie-ts-redux-react/assets/121981137/2c2e1210-b696-48fd-aed6-3e97ce16a546)




