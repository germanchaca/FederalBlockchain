# FederalBlockchain v1.0


## Campos de cada estructura

    struct Estation {
        string nameStation;
        uint id;
        string description;
    }

    struct Product {
        address estationOwner;
        string nameProduct;
    }
    
## Funciones

### Funcion para agregar estaciones en la blockchain, se pasa por parametro el nombre de la estacion, el identificador y una descripcion. Devuelve

function addEstation (string _nameStation, uint _id, string _desc) public returns (bool success)

### Funcion para buscar una estacion a partir del address de quien la agrego

function findEstation (address _estation) public constant returns (string, uint, string)

### Funcion que agrega un producto a partir de un identificador con su nombre

function addProduct (string _codQr, string _nameProduct)  public returns (bool success)

### Busqueda del producto a partir del identificador

function findProduct (string _codQr)  public constant returns (address, string)



https://remix.ethereum.org/#optimize=false&version=soljson-v0.4.22+commit.4cb486ee.js
