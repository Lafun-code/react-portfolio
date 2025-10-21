# H. Emre Berkay's Retro Terminal Portfolio (React Version)

This repository contains the source code for the React version of Hüsnü Emre Berkay's personal portfolio website, live at [hemreberkay.com.tr](https://hemreberkay.com.tr/)

The site is designed with the aesthetic of an old computer terminal (DOS command line), featuring green text on a black background. Information is presented as if being displayed by running `type [filename]` commands.

![Site Screenshot](https://i.imgur.com/56VcNhD.png)

## ✨ Features

* **Retro Terminal Aesthetic:** A design inspired by classic DOS and command-line interfaces.
* **Bilingual Support:** [EN] (English) and [TR] (Turkish) language options managed with **React Context**.
* **Component-Based Architecture:** The UI is built with reusable React components.
* **Typing Effect:** A cursor animation on the main title to simulate a typing effect.
* **ASCII Art Logo:** A custom ASCII logo that fits the terminal theme.
* **Responsive Design:** Displays correctly on both mobile and desktop devices.

## 🛠️ Tech Stack

* **React:** The core JavaScript library for building the user interface.
* **Vite:** A next-generation frontend tool for fast development and building.
* **CSS3:** Styling for the retro look, colors, and animations.
* **JavaScript (ES6+):** Used for application logic and interactivity within React.

## 🚀 Running Locally

To run this project on your local machine, you must have [Node.js](https://nodejs.org/) and npm installed.

1.  Clone this repository:
    ```bash
    git clone [https://github.com/Lafun-code/react-portfolio.git](https://github.com/Lafun-code/react-portfolio.git)
    ```
   
2.  Navigate to the project directory:
    ```bash
    cd react-portfolio
    ```
   
3.  Install the project dependencies:
    ```bash
    npm install
    ```
4.  Start the local development server:
    ```bash
    npm run dev
    ```
5.  Open `http://localhost:5173` (or the URL shown in your terminal) in your browser.

## 📦 Building for Production

1.  To create an optimized static build of the site, run:
    ```bash
    npm run build
    ```
2.  This command will create a `dist` folder. The contents of this `dist` folder are ready to be deployed to any static web host.

---
---

# H. Emre Berkay Retro Site Tasarımı (React Versiyonu)

Bu depo, Hüsnü Emre Berkay'ın [hemreberkay.com.tr](https://hemreberkay.com.tr/) adresinde yer alan kişisel portfolyo web sitesinin **React ile yazılmış** kaynak kodlarını içerir.

Site, siyah arka plan üzerine yeşil metinlerin kullanıldığı eski bir bilgisayar terminali (DOS komut satırı) arayüzü şeklinde tasarlanmıştır. Bilgiler, `type [dosya_adı]` komutları çalıştırılıyormuş gibi sunulmaktadır.

![Site Ekran Görüntüsü](https://i.imgur.com/fQB2kzB.png)

## ✨ Özellikler

* **Retro Terminal Estetiği:** Klasik DOS ve komut satırı arayüzlerinden ilham alan bir tasarım.
* **Çift Dil Desteği:** **React Context** ile yönetilen [EN] (İngilizce) ve [TR] (Türkçe) dil seçeneği.
* **Bileşen Tabanlı Mimari:** Arayüz, yeniden kullanılabilir React bileşenleri (component) ile oluşturulmuştur.
* **Yazma Efekti:** Ana başlıkta yer alan ve yazıyormuş hissi veren imleç (cursor) animasyonu.
* **ASCII Art Logo:** Terminal temasına uygun bir ASCII logo.
* **Duyarlı Tasarım:** Mobil ve masaüstü cihazlarda düzgün görüntülenir.

## 🛠️ Kullanılan Teknolojiler

* **React:** Kullanıcı arayüzünü oluşturmak için kullanılan temel JavaScript kütüphanesi.
* **Vite:** Hızlı geliştirme ve derleme (build) sağlayan yeni nesil frontend aracı.
* **CSS3:** Retro görünüm, renkler ve animasyonlar için stil sayfası.
* **JavaScript (ES6+):** React içinde uygulama mantığı ve etkileşimler için kullanılmıştır.

## 🚀 Yerel Olarak Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için [Node.js](https://nodejs.org/) ve npm'in yüklü olması **gerekmektedir**.

1.  Bu depoyu klonlayın:
    ```bash
    git clone [https://github.com/Lafun-code/react-portfolio.git](https://github.com/Lafun-code/react-portfolio.git)
    ```
   
2.  Proje klasörüne gidin:
    ```bash
    cd react-portfolio
    ```
   
3.  Proje bağımlılıklarını yükleyin:
    ```bash
    npm install
    ```
4.  Yerel geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```
5.  Tarayıcınızda `http://localhost:5173` adresini (veya terminalinizde gösterilen adresi) açın.

## 📦 Sunucuya Yüklemek İçin (Production Build)

1.  Sitenin optimize edilmiş statik versiyonunu oluşturmak için şu komutu çalıştırın:
    ```bash
    npm run build
    ```
2.  Bu komut, projenizin içinde `dist` adında bir klasör oluşturacaktır. Sunucuya (cPanel vb.) yüklemeniz gereken dosyalar bu `dist` klasörünün içindekilerdir.
