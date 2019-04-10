Como crear una nueva aplicacion con Node (package.json):
npm init --yes

Como incluir el path de Python en Node:
npm config set python "<path>\python.exe"

Como verificar la version de un paquete:
npm view <package-name> version

Como se agreugan dependencias al package.json:
npm install <package_name> --save
npm install <package_name> --save-dev

Si se quiere que el paquete se instale en forma global:
npm install -g <package_name>

Paquetes a intalar para la aplicacion:
npm install --save ganache-cli
npm install --save mocha
npm install --save web3@1.0.0-beta.26 (cuidado, se deve validar que sea la version correcta, ultima validada: web3@0.19)
npm install --save solc


Para confirmar que el paquete fue instalado en forma local:
dir node_modules
Dentro de este directorio se deveria ver un sub-directorio con el nombre <package_name>

Aclaracion:
Node genera un archivo llamado package-lock.json, tiene informacion de la estructura no debe ser modificado manualmente.

Git: 
Si se trabaja en Windows ejecutar estos comandos:
git update-git-for-windows
git update

Si se trabaja con React como framework, ejecutar:
npm install -g create-react-app
create-react-app <nombre_de_aplicacion>
npm start
