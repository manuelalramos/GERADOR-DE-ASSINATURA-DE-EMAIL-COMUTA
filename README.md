# Gerador de assinatura Comuta

Site estatico para gerar assinaturas de e-mail da Comuta Reformas e do Instituto Comuta, pronto para publicar no GitHub Pages.

## Como usar

1. Abra `index.html` no navegador ou publique a pasta no GitHub Pages.
2. Preencha nome, cargo, departamento, e-mail e telefone.
3. Escolha entre Comuta Reformas e Instituto Comuta.
4. Clique em **Copiar assinatura**.
5. No Gmail, va em **Configurações > Ver todas as configurações > Assinatura** e cole a assinatura.
6. Salve as alterações no fim da pagina.

## Onde alterar dados fixos

Edite o arquivo `js/app.js`.

- `CONFIG.contacts.email`: e-mail do botao **Entre em contato**.
- `CONFIG.contacts.whatsapp`: WhatsApp do botao de contato com DDI e DDD, apenas numeros.
- `CONFIG.brands.reformas`: cor, logo, site, dominio de e-mail e endereço da Comuta Reformas.
- `CONFIG.brands.instituto`: cor, logo, site, dominio de e-mail e endereço do Instituto Comuta.
- `CONFIG.icons`: icones usados dentro da assinatura copiada.

## Observações importantes

- A assinatura copiada usa HTML em tabela com estilos inline, porque esse formato costuma ser preservado pelo Gmail.
- O botão copia como conteudo rico (`text/html`). O usuario nao precisa copiar codigo HTML.
- As logos ficam fixas conforme a marca escolhida. O usuario nao altera link de imagem no formulario.
- O endereço e obrigatorio e entra automaticamente de acordo com a marca escolhida.
- O e-mail e obrigatorio e usa validacao nativa do navegador. O telefone e validado quando a opcao de incluir telefone estiver marcada.
- As imagens precisam estar em links publicos para aparecerem depois de coladas no Gmail.
- A fonte do site usa Funnel Display e Funnel Sans. A assinatura em si usa `Trebuchet MS`, Arial e Helvetica, que sao fontes mais seguras para e-mail.
- O video do tutorial fica no arquivo `video_explicativo.mp4`, na raiz do projeto.

## Estrutura

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```
