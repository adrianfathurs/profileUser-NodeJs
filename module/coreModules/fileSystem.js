//import module
const fs = require('fs');
const chalk=require('chalk')
const validator=require("validator")
const folderPath = './data';


if(!fs.existsSync(folderPath)){
  fs.mkdirSync(folderPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath,'[]','utf-8')
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pertanyaan = (question) =>{
  return new Promise((resolve,reject)=>{
    rl.question(question,(answer)=>{
      resolve(answer)
    })
  })
}

const readFile=()=>{
  const readFiles=fs.readFileSync('data/contacts.json','utf-8');
  console.log(readFiles)
  return JSON.parse(readFiles);
}
const readSpesificFileData = (arg) =>{
  const readRes = readFile();
  const readSpesific = readRes.find(data =>
    data.nama.toLowerCase() == arg.toLowerCase()
  )
  if(!readSpesific){
    console.log(chalk.red("Data Tidak Ditemukan"))
  }else{
    console.log(chalk.cyan.bold("Contact Detail : "))
    console.log("Nama Lengkap : ",readSpesific.nama)
    console.log("Nomor Telepon : ",readSpesific.nomorHP)
    console.log("Alamat : ",readSpesific.alamat)
    if(readSpesific.email){
      console.log("Email : ",readSpesific.email)
    } 
  }
  rl.close();

}

const searchDuplikat= async (con,object,perintah) => {
  if(perintah == "create"){
    var duplikat = await con.find(data => {
      return data.nama.toLowerCase() == object.nama.toLowerCase();
    })
    return duplikat;
  }else if(perintah == "update"){
    var duplikat = await con.filter(data => {
      return data.nama.toLowerCase() != object.nama.toLowerCase();
    })   
    return duplikat;
  }else if(perintah == "delete"){
    var duplikat = await con.filter(data => {
      return data.nama.toLowerCase() != object.toLowerCase();
    })   
    return duplikat;
  }
}
const validatorEmail =(object)=>{
  var respoonn=true;
  if(object.email){
    if(!validator.isEmail(object.email)){
      respoonn=false;
    }else { respoonn=true; }
  }else{
    respoonn=true;
  }
  return respoonn;
}

const saveContact = async(object) => {
  const readFile = fs.readFileSync('data/contacts.json','utf-8')
  const con = JSON.parse(readFile)
  var perintah= "create";
  var validEmail=validatorEmail(object)
  var dup= await searchDuplikat(con,object,perintah)
  if ( dup ) {
    console.log(chalk.red.bold("Tidak Berhasil Tersimpan, Terdapat Data Duplikat."))
    } else {
      if(validEmail){
        con.push(object)
        fs.writeFileSync('data/contacts.json',JSON.stringify(con))
        console.log(chalk.green.bold("Data Anda berhasil di Simpan"))
      }else{
        console.log(chalk.red.bold("Tidak Berhasil Tersimpan, Email Tidak Valid."))
      }
    }  
  rl.close()
}

const updateSpesificFileData = async(object) => {
  const readFile = fs.readFileSync('data/contacts.json','utf-8')
  const con = JSON.parse(readFile)
  var perintah= "update";
  var validEmail=validatorEmail(object)
  var dup= await searchDuplikat(con,object,perintah)
  
  if ( dup && dup.length>=1) {
      if(validEmail){
        dup.push(object)
        fs.writeFileSync('data/contacts.json',JSON.stringify(dup))
        console.log(chalk.green.bold("Data Anda berhasil di Update"))
      }else{
        console.log(chalk.red.bold("Tidak Berhasil TerUpdate, Email Tidak Valid"));
      }
    } else {
      console.log(chalk.red.bold("Tidak Berhasil TerUpdate"));
    }  
    rl.close()
  }

  const deleteSpesificFileData = async (arg) =>{
    const readRes = readFile();
    var perintah = "delete";
    console.log(arg)
    var res = await searchDuplikat(readRes,arg,perintah)
      if(readRes.length == res.length){
        console.log(chalk.red.bold("Tidak Ada Data yang Terhapus"));
      } else{
        fs.writeFileSync('data/contacts.json',JSON.stringify(res))
        console.log(chalk.green.bold("Berhasil Menghapus Data"));
      }
      rl.close()
}

module.exports={
  pertanyaan,
  saveContact,
  readFile,
  readSpesificFileData,
  updateSpesificFileData,
  deleteSpesificFileData
}