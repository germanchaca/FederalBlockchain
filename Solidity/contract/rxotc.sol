pragma solidity ^0.4.0;

contract myctct {
   
 string public activoSubyacente;
  
  constructor(string _activo) public{
      activoSubyacente = _activo;
  }

  function setActivoSubyacente(string _activo) public{
      activoSubyacente = _activo;
  }
   
}