const CONFIG = {
  contacts: {
    email: "manuela@institutocomuta.org.br",
  },
  brands: {
    reformas: {
      name: "Comuta Reformas",
      accent: "#FF6103",
      logo: "https://static.wixstatic.com/media/9459e7_ad527706cbaa4ec988289924be9a001a~mv2.png",
      website: "comuta.com.br",
      websiteHref: "https://comuta.com.br",
      emailDomain: "comuta.com.br",
      address: "R. Zike Tuma, 744 - Casa 4 - Jardim Ubirajara, São Paulo - SP, 04458-000"
    },
    instituto: {
      name: "Instituto Comuta",
      accent: "#0C99FC",
      logo: "https://static.wixstatic.com/shapes/e39337_d7879691dee34e5bb7150a23c949804b.svg",
      website: "institutocomuta.org.br",
      websiteHref: "https://institutocomuta.org.br",
      emailDomain: "institutocomuta.org.br",
      address: "R. Zike Tuma, 744 - Casa 4, Sala 1 - Jardim Ubirajara, São Paulo - SP, 04458-000"
    }
  },
  icons: {
    phone: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-dark-2x.png",
    email: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-dark-2x.png",
    website: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-dark-2x.png",
    address: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-dark-2x.png"
  }
};

const form = document.querySelector("#signatureForm");
const preview = document.querySelector("#signaturePreview");
const copyButton = document.querySelector("#copySignature");
const copyTitanButton = document.querySelector("#copyTitanSignature");
const copyStatus = document.querySelector("#copyStatus");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const websiteInput = document.querySelector("#website");
const phoneField = document.querySelector("#phoneField");
const includePhoneInput = document.querySelector("#includePhone");
const fixedAddressNote = document.querySelector("#fixedAddressNote");

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function getSelectedBrandKey() {
  return new FormData(form).get("brand") || "reformas";
}

function cleanPhoneHref(phone) {
  return String(phone || "").replace(/[^\d+]/g, "");
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  const digits = cleanPhoneHref(phone);
  const hasInvalidChars = /[^\d\s()+.-]/.test(phone);

  if (!includePhoneInput.checked) {
    phoneInput.setCustomValidity("");
    return true;
  }

  if (!phone) {
    phoneInput.setCustomValidity("Digite o telefone ou desmarque a opção de incluir telefone.");
    return false;
  }

  if (hasInvalidChars || digits.length < 10 || digits.length > 13) {
    phoneInput.setCustomValidity("Digite um telefone válido com DDD. Ex.: (11) 99999-9999.");
    return false;
  }

  phoneInput.setCustomValidity("");
  return true;
}

function normalizeWebsiteHref(value, brand) {
  const website = String(value || brand.website).trim();

  if (!website) {
    return "";
  }

  if (/^https?:\/\//i.test(website)) {
    return website;
  }

  return `https://${website.replace(/^\/\//, "")}`;
}

function contactRow({ icon, alt, href, text, accent }) {
  if (!text) {
    return "";
  }

  const safeHref = href ? escapeAttribute(href) : "#";
  const safeText = escapeHtml(text);

  return `
    <tr style="vertical-align: middle; height: 22px;">
      <td width="22" style="vertical-align: middle;">
        <table cellpadding="0" cellspacing="0" border="0" style="font-family: Funnel Display, Trebuchet MS, Arial, Helvetica, sans-serif; letter-spacing: 0; width: 22px;">
          <tbody>
            <tr>
              <td style="vertical-align: bottom;">
                <span style="display: inline-block; background-color: ${accent};">
                  <img alt="${escapeAttribute(alt)}" width="14" src="${escapeAttribute(icon)}" style="display: block; width: 14px; height: 14px; border: 0; background-image: linear-gradient(${accent}, ${accent});">
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td style="padding: 0px; color: #1f1f1f;">
        <a href="${safeHref}" style="text-decoration: none; color: #1f1f1f; font-size: 12px; line-height: 16px; letter-spacing: 0;">
          <span>${safeText}</span>
        </a>
      </td>
    </tr>`;
}

function buildSignature(data) {
  const brand = CONFIG.brands[data.brandKey];
  const accent = brand.accent;
  const logo = brand.logo;
  const websiteHref = normalizeWebsiteHref(data.website, brand);
  const email = data.email.trim();
  const phone = data.includePhone ? data.phone.trim() : "";
  const address = brand.address;
  const departmentText = data.department.trim()
    ? `${escapeHtml(data.department.trim())}&nbsp;|&nbsp;${escapeHtml(brand.name)}`
    : escapeHtml(brand.name);

  const rows = [
    contactRow({
      icon: CONFIG.icons.phone,
      alt: "telefone",
      href: phone ? `tel:${cleanPhoneHref(phone)}` : "",
      text: phone,
      accent
    }),
    contactRow({
      icon: CONFIG.icons.email,
      alt: "e-mail",
      href: email ? `mailto:${email}` : "",
      text: email,
      accent
    }),
    contactRow({
      icon: CONFIG.icons.website,
      alt: "site",
      href: websiteHref,
      text: data.website.trim(),
      accent
    }),
    contactRow({
      icon: CONFIG.icons.address,
      alt: "endereço",
      href: "",
      text: address,
      accent
    })
  ].join("");

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family: Funnel Display, Trebuchet MS, Arial, Helvetica, sans-serif; letter-spacing: 0; color: #1f1f1f; vertical-align: -webkit-baseline-middle;">
      <tbody>
        <tr>
          <td style="padding: 0 14px 0 0; vertical-align: middle;">
            <img src="${escapeAttribute(logo)}" alt="${escapeAttribute(brand.name)}" width="96" style="display: block; width: 96px; max-width: 96px; height: auto; border: 0;">
          </td>
          <td style="border-left: 2px solid ${accent}; padding-left: 14px; vertical-align: middle;">
            <span style="display: block; margin: 0; color: #6b6b6b; font-size: 11px; line-height: 15px; letter-spacing: 0;">${escapeHtml(data.greeting)}</span>
            <span style="display: block; margin: 0; color: #1f1f1f; font-size: 16px; font-weight: 700; line-height: 20px; letter-spacing: 0;">${escapeHtml(data.fullName)}</span>
            <span style="display: block; margin: 0; color: #1f1f1f; font-size: 12px; line-height: 16px; letter-spacing: 0;">${escapeHtml(data.role)}</span>
            <span style="display: block; margin: 0; color: #1f1f1f; font-size: 12px; font-weight: 600; line-height: 16px; letter-spacing: 0;">${departmentText}</span>
            <table cellpadding="0" cellspacing="0" border="0" style="font-family: Funnel Display, Trebuchet MS, Arial, Helvetica, sans-serif; letter-spacing: 0;">
              <tbody>
                <tr><td height="8" style="height: 8px; line-height: 8px;"></td></tr>
              </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="font-family: Funnel Display, Trebuchet MS, Arial, Helvetica, sans-serif; letter-spacing: 0; line-height: 1;">
              <tbody>${rows}</tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>`.trim();
}

function getFormData() {
  const brandKey = getSelectedBrandKey();
  const brand = CONFIG.brands[brandKey];

  return {
    brandKey,
    fullName: document.querySelector("#fullName").value.trim() || "Nome Sobrenome",
    role: document.querySelector("#role").value.trim() || "Cargo",
    department: document.querySelector("#department").value.trim(),
    email: emailInput.value.trim() || `seunome@${brand.emailDomain}`,
    includePhone: includePhoneInput.checked,
    phone: phoneInput.value.trim(),
    address: brand.address,
    website: websiteInput.value.trim() || brand.website,
    greeting: document.querySelector("#greeting").value.trim() || "Atenciosamente,"
  };
}

function getPlainText(data) {
  const brand = CONFIG.brands[data.brandKey];
  const lines = [
    data.greeting,
    data.fullName,
    data.role,
    data.department ? `${data.department} | ${brand.name}` : brand.name
  ];

  if (data.includePhone && data.phone) {
    lines.push(data.phone);
  }

  if (data.email) {
    lines.push(data.email);
  }

  if (data.website) {
    lines.push(data.website);
  }

  if (data.address) {
    lines.push(data.address);
  }

  return lines.filter(Boolean).join("\n");
}

function addEmailSpacing(html) {
  return `
    <div style="font-family: Trebuchet MS, Arial, Helvetica, sans-serif; line-height: 1.4;"><br></div>
    <div style="font-family: Trebuchet MS, Arial, Helvetica, sans-serif; line-height: 1.4;"><br></div>
    ${html}
  `.trim();
}

function renderSignature() {
  const data = getFormData();
  preview.innerHTML = buildSignature(data);
  phoneField.classList.toggle("is-hidden", !includePhoneInput.checked);
  copyStatus.textContent = "";
  validatePhone();
}

function renderSamples() {
  const sampleData = {
    fullName: "Nome Sobrenome",
    role: "Cargo",
    department: "Departamento",
    email: "seuemail@email.com",
    includePhone: true,
    phone: "(11) 99999-9999",
    greeting: "Atenciosamente,"
  };

  document.querySelector("#sampleReformas").innerHTML = buildSignature({
    ...sampleData,
    brandKey: "reformas",
    website: CONFIG.brands.reformas.website,
    address: CONFIG.brands.reformas.address
  });

  document.querySelector("#sampleInstituto").innerHTML = buildSignature({
    ...sampleData,
    brandKey: "instituto",
    website: CONFIG.brands.instituto.website,
    address: CONFIG.brands.instituto.address
  });
}

function applyBrandDefaults(brandKey) {
  const brand = CONFIG.brands[brandKey];

  websiteInput.value = brand.website;
  emailInput.placeholder = `seunome@${brand.emailDomain}`;
  fixedAddressNote.textContent = `Endereço incluso automaticamente: ${brand.address}`;
}

async function copySignature() {
  validatePhone();

  if (!form.reportValidity()) {
    copyStatus.textContent = "Revise os campos destacados antes de copiar.";
    return;
  }

  const data = getFormData();
  const html = addEmailSpacing(buildSignature(data));
  const plainText = `\n\n${getPlainText(data)}`;

  try {
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plainText], { type: "text/plain" })
        })
      ]);
    } else {
      copyWithSelection(html);
    }

    copyStatus.textContent = "Assinatura copiada. Agora é só colar no Gmail.";
  } catch (error) {
    copyWithSelection(html);
    copyStatus.textContent = "Assinatura copiada pelo modo compatível.";
  }
}

async function copyTitanSignature() {
  validatePhone();

  if (!form.reportValidity()) {
    copyStatus.textContent = "Revise os campos destacados antes de copiar.";
    return;
  }

  const data = getFormData();
  const html = addEmailSpacing(buildSignature(data));

  try {
    await copyPlainText(html);
    copyStatus.textContent = "HTML copiado para Titan/HostGator. Cole no campo de assinatura HTML customizada.";
  } catch (error) {
    copyStatus.textContent = "Não foi possível copiar automaticamente. Selecione o HTML gerado e copie manualmente.";
  }
}

function copyWithSelection(html) {
  const temporary = document.createElement("div");
  temporary.setAttribute("contenteditable", "true");
  temporary.style.position = "fixed";
  temporary.style.left = "-9999px";
  temporary.style.top = "0";
  temporary.innerHTML = html;
  document.body.appendChild(temporary);

  const range = document.createRange();
  range.selectNodeContents(temporary);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  temporary.remove();
}

async function copyPlainText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      // Fallback abaixo para navegadores que bloqueiam clipboard em file://.
    }
  }

  const temporary = document.createElement("textarea");
  temporary.value = text;
  temporary.style.position = "fixed";
  temporary.style.left = "-9999px";
  temporary.style.top = "0";
  document.body.appendChild(temporary);
  temporary.focus();
  temporary.select();
  document.execCommand("copy");
  temporary.remove();
}

function setupContacts() {
  const emailLink = document.querySelector("#contactEmail");
  const whatsappLink = document.querySelector("#contactWhatsapp");

  if (emailLink) {
    emailLink.href = `mailto:${CONFIG.contacts.email}`;
  }

  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${CONFIG.contacts.whatsapp}`;
  }
}

form.addEventListener("input", () => {
  renderSignature();
});

form.addEventListener("change", (event) => {
  if (event.target.name === "brand") {
    applyBrandDefaults(event.target.value);
  }

  renderSignature();
});

copyButton.addEventListener("click", copySignature);
copyTitanButton.addEventListener("click", copyTitanSignature);

document.querySelectorAll("[data-load-brand]").forEach((button) => {
  button.addEventListener("click", () => {
    const brandKey = button.dataset.loadBrand;
    const input = document.querySelector(`input[name="brand"][value="${brandKey}"]`);
    input.checked = true;
    applyBrandDefaults(brandKey);
    renderSignature();
    document.querySelector("#generator-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

applyBrandDefaults(getSelectedBrandKey());
renderSamples();
renderSignature();
setupContacts();
