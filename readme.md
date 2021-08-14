# **Profile's User Bash (Node JS)**

## **Apasih itu Profile's User Bash ?**

Profile' user bash merupakan suatu aplikasi berbasis command prompt yang dapat menyimpan, delete dan mengupdate suatu data dalam bentuk json, data tersebut berisikan _nama_ (required), _alamat_ (required), _nomor handphone_ (required), dan _email_ (optional). Ide ini di dapat dari adanya _contact person_ yang ada di handphone yang anda miliki. Oleh karena itu, saya mencoba untuk membuat aplikasi berbasis _command prompt_ dimana nantiNya hasil data dapat di ambil dalam bentuk file json. Pada aplikasi ini juga mengimplementasikan beberapa core module yang dimiliki oleh node js, local module dan third-party.

## **Apa environment yang digunakan ?**

Environment yang digunakan dalam pembuatan aplikasi ini yaitu menggunakan bahasa javascript dengan framework node js.

## **Apa aja packages atau dependencies yang digunakan ?**

Package yang digunakan dalam pembuatan aplikasi ini adalah package _yargs_ , _validator_ dan _chalk_. Dokumentasi dari package nya dapat di lihat pada website resminya.

## **Langkah - langkah penggunaan aplikasi**

1. Clone project ini ke device local anda dan pastikan anda telah menginstall node js.
2. Setelah anda clone project ini, silakan anda membuka terminal pada vscode anda atau bisa tekan `Ctrl +` `.
3. Silahkan install module yang digunakan pada aplikasi ini dengan menulis command

```
npm install
```

4. Untuk melihat dokumentasi penggunaan anda bisa menuliskan command ini kedalam terminal

```
node app --help
```

4. Apabila anda telah menuliskan command tersebut, silakan untuk menekan **Enter**
5. Silakan menikmati aplikasi ini untuk mencatat seluruh profile manusia yang ada didunia, xixixi

## **Contoh penggunaan command**

1. Apabila anda ingin menambahkan sebuah data. keterangan: penulisan nama hingga alamat dapat dilakukan secara tidak urut, asalkan nama, nomorHP dan alamat diisi karena memiliki sifat _required_ anda bisa menuliskan command ini :

```
node app add --nama="Adrian Fathur Setyawan" --email="fatursetiawan80@gmail.com" --nomorHP="081586858640" --alamat="mirota lactona"

atau

node app a -n "Adrian Fathur Setyawan" -e "fatursetiawan80@gmail.com" --nomorHP="081586858640" --alamat="mirota lactona"

```

2. Apabila anda ingin mengupdate sebuah data. keterangan: penulisan nama hingga alamat dapat dilakukan secara tidak urut, asalkan nama, nomorHP dan alamat diisi karena memiliki sifat _required_ anda bisa menuliskan command ini :

```
node app update --nama="Adrian Fathur Setyawan" --email="fatursetiawan80@gmail.com" --nomorHP="081586858640" --alamat="mirota lactona"

atau

node app u -n "Adrian Fathur Setyawan" -e "fatursetiawan80@gmail.com" --nomorHP="081586858640" --alamat="mirota lactona"

```

3. Apabila anda ingin delete sebuah data. keterangan: kunci hapus ada di nama. anda bisa menuliskan command ini :

```
node app delete --nama="Adrian Fathur Setyawan"

atau

node app d -n "Adrian Fathur Setyawan"

```

4. Apabila anda ingin _read all_ data. anda bisa menuliskan command ini :

```
node app list

atau

node app ls

```

5. Apabila anda ingin menampilkan sebuah data. Keterangagan :kunci adalah nama. anda bisa menuliskan command ini :

```
node app list --nama="Adrian Fathur Setyawan"

atau

node app ls --nama="Adrian Fathur Setyawan"

```

## **Quotes on project**

> " Sedikit ilmu silakan anda coba, dan setidaknya anda termasuk orang yang cerdas. Orang bodoh akan selalu mencaci hingga ia lupa, ia tak punya ilmu yang kalian miliki"

> " Walau sedikit ilmu yang anda dapatkan tetap bersyukurlah, karena tak semua orang bisa memiliki ilmu tersebut"
