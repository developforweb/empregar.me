[![Build Status](https://travis-ci.com/developforweb/empregar.me.svg?branch=master)](https://travis-ci.com/developforweb/empregar.me)
# Empregar.me - Aplicativo para Gerenciamento de Vagas de Emprego

## Lista de Funcionalidades
  - Prontas:
    • Navegação entre telas;
    • Menu Lateral;
    • Menu Horizontal;
    • Páginas Principais;
    • Autenticação;
    • Components;
    • Providers;
    • Etc...;
  - Pendentes:
    • Correções de pequenos erros;
    • TryCatch de algumas excessões;
    • Ajustes nas vagas tragas do API Wordpress;
    • Otimização da consulta JSON.
## Requisitos Necessários
  - NodeJS
  - NPM
  - Ionic
  - Cordova
  - Visual Studio Code (para edição dos arquivos)
  - GIT (para atualização dos arquivos)

## Para executar (How to Use - Windows)
### 1 - Download
  - Efetue o download do repositório utilizando o comando "git clone https://github.com/developforweb/empregar.me.git" no terminal bash.
### 2 - Instalação
  - Utilize no terminal NodeJS ou CMD o comando "cd" para navegar até a pasta onde foi clonada o diretório git;
  - Execute os comandos para instalar os requisitos necessários:
  - npm install -g npm
  - npm install -g cordova ionic
  
### 3 - Subir o servidor localmente
  - Após a instalação utilize o comando:
  - ionic serve --lab
  - para testar o sistema em ambiente local.

## Para executar no Linux (How to Use - Linux with the Ionic CLI):
 - Execute os comandos para instalar os requisitos necessários:
 - No bash
 $ sudo npm install -g ionic cordova
 $ npm install

### Then, to run it, cd into project directory and run:
- Add platforms for IOS and Android
$ ionic cordova platform add ios
$ ionic cordova platform add android

### Run app (Build)

$ ionic cordova run ios
$ ionic cordova run android

# Licença
  - Todo o conteúdo presente neste diretório, estão de acordo com a licença [MIT] 
  - https://github.com/andersusilva/empregar.me/LICENSE
