<!-- HEADER COM IDENTIDADE VISUAL -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:f97316,100:fb923c&height=160&section=header&text=Gerador%20de%20Assinaturas%20Comuta&fontSize=32&fontColor=ffffff&animation=fadeIn"/>
</p>

<h2 align="center">✉️ Desenvolvimento Web • Automação • Identidade Visual</h2>

<p align="center">
Sistema desenvolvido para gerar assinaturas de e-mail do <b>Comuta Reformas</b> e do <b>Instituto Comuta</b>.
</p>

---

## 🧡 Sobre o projeto

O **Gerador de Assinaturas Comuta** é um site estático desenvolvido para facilitar e padronizar a criação das assinaturas de e-mail dos colaboradores do **Comuta Reformas** e do **Instituto Comuta**.

O projeto surgiu a partir de uma demanda real do meu chefe, que precisava de uma maneira mais simples e rápida de criar assinaturas profissionais para todas as pessoas da empresa.

Antes, cada assinatura precisaria ser desenvolvida e ajustada individualmente. Pensando nisso, criei uma ferramenta em que o próprio colaborador pode preencher seus dados, escolher a marca desejada e copiar uma assinatura pronta para utilizar no Gmail.

---

## 🎯 Objetivo

Criar uma ferramenta interna capaz de:

🟧 Padronizar as assinaturas de e-mail  
🟧 Atender ao Comuta Reformas e ao Instituto Comuta  
🟧 Facilitar a criação de assinaturas para novos colaboradores  
🟧 Evitar alterações manuais no código HTML  
🟧 Manter a identidade visual de cada marca  
🟧 Agilizar processos internos da empresa  

---

## 🏢 Marcas disponíveis

O sistema permite gerar assinaturas para duas marcas:

### 🏠 Comuta Reformas

Assinatura direcionada aos colaboradores e às comunicações relacionadas aos serviços de reformas residenciais do Comuta.

### 🧡 Instituto Comuta

Assinatura direcionada aos colaboradores, parceiros, projetos sociais e comunicações institucionais do Instituto Comuta.

Cada marca possui automaticamente suas próprias informações:

- Logo
- Cor principal
- Endereço
- Site
- Domínio de e-mail
- Botões de contato
- Links institucionais

---

## ⚙️ Tecnologias utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,vscode,github" />
</p>

<p align="center">
HTML • CSS • JavaScript • GitHub Pages
</p>

---

## 🧩 O que foi desenvolvido

<p>
🟧 Formulário para preenchimento dos dados do colaborador <br>
🟧 Seleção entre Comuta Reformas e Instituto Comuta <br>
🟧 Visualização da assinatura em tempo real <br>
🟧 Validação dos campos de e-mail e telefone <br>
🟧 Opção de incluir ou remover o telefone <br>
🟧 Botão para copiar a assinatura automaticamente <br>
🟧 Geração de HTML compatível com o Gmail <br>
🟧 Aplicação automática da identidade visual de cada marca <br>
🟧 Inclusão automática de logo, endereço, site e contatos <br>
🟧 Tutorial em vídeo para auxiliar os usuários <br>
</p>

---

## ✉️ Como funciona

O usuário deve preencher:

- Nome
- Cargo
- Departamento
- E-mail
- Telefone

Depois, é necessário escolher entre:

- **Comuta Reformas**
- **Instituto Comuta**

O sistema gera automaticamente uma prévia da assinatura com os dados preenchidos e as informações da marca selecionada.

Ao clicar em **Copiar assinatura**, o conteúdo é copiado como HTML visual. Dessa forma, o usuário não precisa acessar, editar ou copiar nenhum código.

Para Titan/HostGator, use o botão **Copiar HTML Titan** e cole no campo de assinatura HTML customizada. No Opera, principalmente quando o projeto está aberto localmente como `file://`, a cópia automática pode ser bloqueada pelo navegador. Se isso acontecer, o gerador mostra uma caixa para copiar manualmente.

Depois, basta acessar:

```text
Gmail > Configurações > Ver todas as configurações > Assinatura
````

Em seguida, é só colar a assinatura e salvar as alterações.

---

## 🖥️ Versão desktop

O projeto foi criado inicialmente apenas para utilização em computadores.

Neste momento, a ferramenta ainda não foi desenvolvida pensando na experiência em celulares ou outros dispositivos móveis.

A escolha pela versão desktop aconteceu porque a criação e a configuração de assinaturas no Gmail são realizadas principalmente pelo computador dentro da empresa.

A adaptação para dispositivos móveis poderá ser realizada em futuras atualizações do projeto.

---

## 🎨 Identidade visual

O projeto segue a identidade visual do Comuta:

🟧 **Cor principal:** laranja
⚪ **Base:** branco
⬛ **Cores de apoio:** preto e cinza

A interface foi desenvolvida para ser:

* Simples
* Moderna
* Organizada
* Intuitiva
* Fácil de utilizar
* Alinhada à comunicação do Comuta

O sistema também altera automaticamente as cores, logos e informações de acordo com a marca selecionada.

---

## 💡 Motivação do projeto

A empresa precisava criar assinaturas de e-mail para diferentes colaboradores, departamentos e áreas de atuação.

A criação manual de cada assinatura poderia causar problemas como:

* Falta de padronização
* Informações desatualizadas
* Logos incorretas
* Diferenças de cores e tamanhos
* Links quebrados
* Erros de formatação
* Tempo gasto com alterações repetitivas

Por isso, desenvolvi uma ferramenta que centraliza todas as informações e permite gerar uma assinatura pronta em poucos passos.

Com essa solução, o processo ficou mais rápido, organizado e acessível para toda a equipe.

---

## 💬 Desafio técnico

O principal desafio foi desenvolver uma assinatura que mantivesse sua estrutura depois de ser copiada e colada no Gmail.

Serviços de e-mail possuem diversas limitações relacionadas ao uso de CSS externo e de estruturas modernas de desenvolvimento.

Por isso, a assinatura foi construída utilizando:

* Tabelas em HTML
* Estilos inline
* Fontes seguras para e-mail
* Imagens hospedadas em links públicos
* Conteúdo copiado como `text/html`

Essa estrutura aumenta a compatibilidade e ajuda a preservar o formato, as imagens, os textos e os botões dentro do Gmail.

---

## 📁 Estrutura do projeto

```text
📦 gerador-assinaturas-comuta
┣ 📂 assets
┃ ┣ 📂 images
┃ ┣ 📂 icons
┃ ┗ 📂 logos
┣ 📂 css
┃ ┗ 📄 styles.css
┣ 📂 js
┃ ┗ 📄 app.js
┣ 📂 media
┃ ┗ 🎥 video_explicativo.mp4
┣ 📄 index.html
┗ 📄 README.md
```

---

## 🔧 Configurações do sistema

Os principais dados fixos do gerador ficam no arquivo:

```text
js/app.js
```

Nesse arquivo podem ser alterados:

* E-mail do botão de contato
* Número de WhatsApp
* Logos
* Sites
* Endereços
* Domínios de e-mail
* Cores das marcas
* Ícones utilizados
* Informações do Comuta Reformas
* Informações do Instituto Comuta

Dessa forma, futuras alterações podem ser realizadas em um único local, sem a necessidade de modificar toda a estrutura do projeto.

---

## 🌐 Publicação no GitHub Pages

<p align="center">
  <a href="https://manuelalramos.github.io/GERADOR-DE-ASSINATURA-DE-EMAIL-COMUTA/" target="_blank">
    <img src="https://img.shields.io/badge/Acessar%20Gerador-f97316?style=for-the-badge&logo=google-chrome&logoColor=white"/>
  </a>
</p>

<p align="center">
  <b>O gerador pode ser acessado diretamente pelo navegador, sem necessidade de instalação.</b>
</p>

---

## 🚀 Considerações finais

Este projeto foi desenvolvido a partir de uma necessidade real do ambiente de trabalho.

Além de facilitar a criação das assinaturas, a ferramenta contribui para uma comunicação mais profissional e padronizada entre colaboradores, clientes, parceiros e demais públicos do Comuta.

O desenvolvimento também proporcionou aprendizados importantes relacionados a:

💡 Identificação de problemas internos
💻 Desenvolvimento front-end
🎨 Aplicação de identidade visual
✉️ Compatibilidade com serviços de e-mail
📈 Criação de soluções para demandas empresariais
🧩 Organização e manutenção de código
🌐 Publicação de projetos no GitHub Pages

---

## 👩‍💻 Autora

**Manuela Ramos**

<p align="center">
  <a href="mailto:contato.manuelalramos@gmail.com" target="_blank">📧 E-mail</a> •
  <a href="https://linkedin.com/in/manuelalramos" target="_blank">💼 LinkedIn</a>
</p>

---

<!-- FOOTER COM IDENTIDADE VISUAL -->

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6A00,100:FF8C42&height=120&section=footer"/>
</p>
```
