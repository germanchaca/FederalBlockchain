import web3 from './web3';

const address = direccion del contrato en rinkeby;

const abi = [
  {
   constant:false,
   inputs:[{name:'_activo',type:'string'}],
   name:'setActivoSubyacente',
   outputs:[],
   payable:false,
   stateMutability:'nonpayable',
   type:'function'
  },
  {
   constant:true,
   inputs:[],
   name:'activoSubyacente',
   outputs:[{name:'',type:'string'}],
   payable:false,
   stateMutability:'view',
   type:'function'
  },
  {
   inputs:[{name:'_activo',type:'string'}],
   payable:false,
   stateMutability:'nonpayable',
   type:'constructor'
  }
 ];

export default new web3.eth.Contract(abi, address);
