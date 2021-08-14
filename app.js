// //define package
// const validator  = require("validator");// validator ini digunakan untuk pengecekan sebuah string dari inputan user
// const chalk= require('chalk');

// //import core module
// const fileSys=require('./module/coreModules/fileSystem')
// console.log(fileSys.openFile())
// const readline= require('readline')
// var fs=require('fs');


// //import locale module
// const operator=require('./module/localModules/operator')

// const error=chalk.red.italic
// const success=chalk.green.bold
// let email="fatursetiawa8gmail.com";
// if(validator.isEmail(email)){
//   console.log(success("Ini email bener"))
// }else{
//   console.log(error("Email masih salah"))
// }
// /* template literal */
// const pesan =chalk `Hello {bgBlue.black World}`
// console.log(pesan)
// console.log(validator.isEmail("dathu@gmail.com"))
// console.log(validator.isMobilePhone('98982','id-ID'))
// console.log(validator.isDate('1999/99/28',new Date()))
// console.log(validator.isDecimal('0,119',{force_decimal: true, decimal_digits: '2', locale: 'id-ID'}))
// console.log(validator.equals('hamburger','hamburger'))// bisa digunakan match string or integer

// //penjumlahan
// var jumlah=operator.penjumlahan(10,2)
// console.log(jumlah)
// //pengurangan
// var kurang=operator.pengurangan(20,2)
// console.log(kurang)
// //perkalian
// var kali=operator.perkalian(2,20);
// console.log(kali)
// //pembagian
// var bagi=operator.pembagian(2,20);
// console.log(bagi)


/* 
const pertanyaan1=()=>{
  return new Promise((resolve,reject)=>{
    rl.question("Masukan Nama Anda ?",(nama)=>{
      resolve(nama)
    })
  })
}

const pertanyaan2=()=>{
  return new Promise((resolve,reject)=>{
    rl.question("Masukan Email Anda ?",(email)=>{
      resolve(email)
    })
  })
} */

// define core system
// const fileSystem = require('./module/coreModules/fileSystem')
// const main = async ()=>{
//   /* const nama=await pertanyaan1();
//   const email=await pertanyaan2(); */

//   const nama = await fileSystem.pertanyaan("Masukan Nama Anda ?");
//   const email = await fileSystem.pertanyaan("Masukan Email Anda ?"); 
//   const noHP = await fileSystem.pertanyaan("Masukan Nomor Telepon Anda ?"); 
//   const object={
  //     nama,email,noHP
//   }
//   fileSystem.saveContact(object)
// }
// //execute Program
// main();

//console ini berfungsi untuk mendapat path dari node app dan letak dari path project
const yargs =require('yargs')
const fileSystem= require("./module/coreModules/fileSystem")
/* console.log(yargs.argv) */

//pengendalian apabila user tidak menngetik syntax command
yargs.demandCommand(1,"You Need at least one command before enter")
//untuk mengaliaskan syntax command

//syntax add ->tambah data
yargs.command({
  command:"add",
  describe:"menambahkan kontak",
  aliases:"a",
  builder:{
    nama:{
      describe:"Nama Lengkap",
      demandOption:true,
      alias:"n",
      type:"string"
    },
    email:{
      describe:"Email",
      demandOption:false,
      alias:"e",
      type:"string"
    },
    nomorHP:{
      describe:"Nomor Telepon",
      demandOption:true,
      alias:"no",
      type:"string"
    },
    alamat:{
      describe:"Alamat",
      alias:"al",
      demandOption:true,
      type:"string"
    },
  },
  handler(argv){
    const object={
      nama:argv.nama,
      email:argv.email,
      nomorHP:argv.nomorHP,
      alamat:argv.alamat
    }
    fileSystem.saveContact(object);
  },
}).options({
  'add':{
    alias:"a",
    describe:"tambah data"
  }
}).help();

//syntax command list->untuk read all Data
yargs.command({
  command:"list",
  aliases:"ls",
  describe:"Read File Data",
  handler(){
    fileSystem.readFile();
  }
}).options({
  'list':{
    alias:"ls",
    describe:"read all data"
  }
});

//syntax command detail -> untuk mencari file data
yargs.command({
  command:"detail",
  describe:"Read Spesific File Data",
  aliases:"lss",
  builder:{
    nama:{
      describe:"Nama Lengkap Yang Dicari",
      demandOption:true,
      type:"string"
    },
  },
  handler(argv){
    fileSystem.readSpesificFileData(argv.nama);
  }
}).options({
  'detail':{
    alias:"lss",
    describe:"read Spesific File Data"
  }
}).help();

//Syntax command update key nama -> untuk mengupdate data
yargs.command({
  command:"update",
  describe:"Update Spesific Data",
  aliases:"u",
  builder:{
    nama:{
      describe:"Nama Lengkap Yang Dicari",
      demandOption:true,
      type:"string",
      alias:"n",
    },
    email:{
      describe:"Email yang akan diperbaharui",
      demandOption:false,
      alias:"e",
      type:"string"
    },
    nomorHP:{
      describe:"Nama Lengkap Yang Dicari",
      demandOption:false,
      alias:"no",
      type:"string"
    },
    alamat:{
      describe:"Alamat",
      demandOption:false,
      alias:"al",
      type:"string"
    },
  },
  handler(argv){
    var object={
      nama:argv.nama,
      nomorHP:argv.nomorHP,
      email:argv.email,
      alamat:argv.alamat
    }
    fileSystem.updateSpesificFileData(object);
  }
}).options({
  'update':{
    alias:"u",
    describe:"update Spesific Data"
  }
}).help();

//syntax command delete -> untuk menghapus data
yargs.command({
  command:"delete",
  describe:"data yang akan di hapus",
  aliases:"d",
  builder:{
    nama:{
      describe:"Nama Lengkap yang akan di hapus",
      demandOption:true,
      type:"string",
      alias:"n"
    }
  },
  handler(argv){
    fileSystem.deleteSpesificFileData(argv.nama)
  }
}).options({
  'delete':{
    alias:"d",
    describe:"menghapus data"
  }
}).help();

//digunakan untuk run yargs
yargs.parse()