
(function() {
  var css = `
    .sense-footer {
      background: #ffffff;
      border-top: 1px solid #eaeaea;
      padding: 64px 0 32px;
      font-family: 'Satoshi', -apple-system, sans-serif;
      color: #062533;
    }
    .sense-footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .sense-footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 48px;
      margin-bottom: 48px;
    }
    @media (max-width: 880px) { .sense-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
    @media (max-width: 540px) { .sense-footer-grid { grid-template-columns: 1fr; } }
    .sense-footer-brand img { height: 36px; width: auto; display: block; }
    .sense-footer-brand p { color: #6a7a85; font-size: 14px; margin: 16px 0 24px; max-width: 320px; line-height: 1.6; }
    .sense-footer-socials { display: flex; gap: 12px; }
    .sense-footer-socials a {
      width: 38px; height: 38px; border-radius: 9999px; background: #f7f7f7;
      display: flex; align-items: center; justify-content: center; color: #062533;
      transition: all 0.15s ease; text-decoration: none;
    }
    .sense-footer-socials a:hover { background: #e06253; color: #fff; }
    .sense-footer-col h4 { font-size: 15px; font-weight: 600; margin: 0 0 16px; color: #062533; }
    .sense-footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
    .sense-footer-col a, .sense-footer-col li { color: #6a7a85; font-size: 14px; text-decoration: none; }
    .sense-footer-col a:hover { color: #e06253; }
    .sense-footer-row-icon { display: flex; align-items: center; gap: 10px; }
    .sense-footer-row-icon svg { width: 16px; height: 16px; color: #e06253; flex-shrink: 0; }
    .sense-footer-legal {
      border-top: 1px solid #eaeaea; padding-top: 24px;
      display: flex; justify-content: space-between; align-items: center;
      gap: 16px; flex-wrap: wrap; font-size: 13px; color: #6a7a85;
    }
    .sense-floating-wa {
      position: fixed; bottom: 24px; right: 24px; z-index: 999;
      display: flex; align-items: center; gap: 8px;
      background: #25d366; color: #fff; padding: 14px 20px;
      border-radius: 9999px; font-size: 14px; font-weight: 600;
      box-shadow: 0 4px 16px rgba(0,0,0,.15); text-decoration: none;
      transition: transform 0.15s, box-shadow 0.15s;
      font-family: 'Satoshi', -apple-system, sans-serif;
    }
    .sense-floating-wa:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,.2); }
    .sense-floating-wa svg { width: 20px; height: 20px; fill: currentColor; }
  `;

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Remove existing footer
  var oldFooter = document.querySelector('footer');
  if (oldFooter) oldFooter.remove();

  var footer = document.createElement('footer');
  footer.className = 'sense-footer';
  footer.innerHTML = `
    <div class="sense-footer-inner">
      <div class="sense-footer-grid">
        <div class="sense-footer-brand">
          <a href="index.html"><img src="images/brand/sense-logo.png" alt="Sense" /></a>
          <p>Um lugar pra cuidar da saúde como se estivesse em casa. Uberaba — MG.</p>
          <div class="sense-footer-socials">
            <a href="https://instagram.com/sense.doc" aria-label="Instagram" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5534999593207&text&type=phone_number&app_absent=0" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>
        <div class="sense-footer-col">
          <h4>Pacientes</h4>
          <ul>
            <li><a href="index.html#especialidades">Especialidades</a></li>
            <li><a href="index.html#exames">Exames</a></li>
            <li><a href="index.html#checkup">Check-up</a></li>
            <li><a href="especialistas">Profissionais</a></li>
          </ul>
        </div>
        <div class="sense-footer-col">
          <h4>Profissionais</h4>
          <ul>
            <li><a href="index.html#dr">Seja Dr(a). Sense</a></li>
            <li><a href="#">Coworking médico</a></li>
            <li><a href="#">Tecnologia</a></li>
            <li><a href="#">Marketing médico</a></li>
          </ul>
        </div>
        <div class="sense-footer-col">
          <h4>Contato</h4>
          <ul>
            <li class="sense-footer-row-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              (34) 9 9959-3207
            </li>
            <li class="sense-footer-row-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (34) 3322-8365
            </li>
            <li class="sense-footer-row-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              clinica.sensesaude@gmail.com
            </li>
            <li class="sense-footer-row-icon" style="align-items: flex-start;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Av. Leopoldino de Oliveira, 2025<br>Estados Unidos · Uberaba — MG
            </li>
          </ul>
        </div>
      </div>
      <div class="sense-footer-legal">
        <span>© 2026 Sense Saúde · CNPJ 41.322.460/0001-13</span>
        <span>Feito com cuidado em Uberaba — MG</span>
      </div>
    </div>
  `;

  document.body.appendChild(footer);

  // Floating WhatsApp button
  if (!document.querySelector('.sense-floating-wa')) {
    var wa = document.createElement('a');
    wa.className = 'sense-floating-wa';
    wa.href = 'https://api.whatsapp.com/send/?phone=5534999593207&text&type=phone_number&app_absent=0';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Agendar pelo WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.485.709.305 1.262.484 1.694.629.713.227 1.36.195 1.871.121.571-.085 1.758-.719 2.006-1.413.255-.69.255-1.275.18-1.41-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.945-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.875 2.909 4.371 2.909 7.026 0 5.444-4.499 9.885-9.945 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg> Agendar pelo WhatsApp';
    document.body.appendChild(wa);
  }
})();
