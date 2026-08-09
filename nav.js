/* ============================================================
   ARTHAROHAN, SHARED SITE NAVIGATION
   ============================================================
   This is the ONLY place the navigation menu should be edited.
   Every page loads this file and gets the same nav automatically.

   FIXED 08-Aug-2026 (earlier): dropdown parent links now navigate
   normally on click; dropdowns open on hover (desktop) via CSS.

   ADDED 08-Aug-2026: site-wide conversion tracking. Any click on
   a WhatsApp (wa.me) link or a tel: link now fires a GA4 event
   automatically, on every page that loads this file. This is the
   fix for "we have no idea which page/button actually produces a
   WhatsApp click", one edit here, tracked everywhere, forever.

   HOW TO USE ON A NEW PAGE:
   1. Put this where the nav should appear:
        <div id="site-nav"></div>
   2. Right before loading this script, set which nav item is
      "current" for this page:
        <script>
          var SITE_NAV_CURRENT = "business-loans"; // see list below
        </script>
        <script src="nav.js"></script>

   VALID VALUES FOR SITE_NAV_CURRENT:
     "home", "about", "services", "contact",
     "business-loans", "car-loan", "personal-loan", "home-loan",
     "loan-against-property", "real-estate",
     "two-wheeler", "four-wheeler", "commercial-vehicle",
     "travel-insurance", "insurance-hub", "term-plan"

   TO ADD A NEW PAGE LATER:
   1. Add one <li> inside the correct dropdown below
      (desktop AND mobile section)
   2. Add its name to the "groupOf" lookup below
   3. Done, every page picks up the change automatically.
   ============================================================ */

(function () {
  if (!document.getElementById("nav-shared-styles")) {
    var css = document.createElement("style");
    css.id = "nav-shared-styles";
    css.textContent =
      ".nav-links li.nav-dropdown{display:flex;}" +
      ".nav-dropdown{position:relative;}" +
      ".nav-dropdown-menu{display:none;position:absolute;top:100%;right:0;background:var(--navy-light);min-width:190px;list-style:none;margin:0;padding:8px 0;border-radius:8px;box-shadow:0 10px 24px rgba(0,0,0,0.35);z-index:500;}" +
      ".nav-dropdown.open .nav-dropdown-menu{display:block;}" +
      ".nav-dropdown:hover .nav-dropdown-menu{display:block;}" +
      ".nav-dropdown-menu li{height:auto;}" +
      ".nav-dropdown-menu li a{height:auto;padding:10px 16px;white-space:nowrap;color:var(--cream);}" +
      ".nav-dropdown-menu li a:hover{background:rgba(255,255,255,0.06);}";
    document.head.appendChild(css);
  }

  var current = window.SITE_NAV_CURRENT || "";

  var groupOf = {
    "business-loans": "loans",
    "car-loan": "loans",
    "personal-loan": "loans",
    "home-loan": "loans",
    "loan-against-property": "loans",
    "real-estate": "real-estate",
    "real-estate-uttam-nagar": "real-estate",
    "real-estate-tilak-nagar": "real-estate",
    "real-estate-janakpuri": "real-estate",
    "real-estate-vikaspuri": "real-estate",
    "real-estate-ashok-nagar": "real-estate",
    "two-wheeler": "insurance",
    "four-wheeler": "insurance",
    "commercial-vehicle": "insurance",
    "travel-insurance": "insurance",
    "insurance-hub": "insurance",
    "term-plan": "life",
    "tools-hub": "tools",
    "sip-calculator": "tools",
    "home-loan-emi-calculator": "tools",
    "personal-loan-emi-calculator": "tools",
    "compound-interest-calculator": "tools",
    "business-loan-emi-calculator": "tools"
  };
  var activeGroup = groupOf[current] || "";

  function cls(name) {
    return current === name ? ' class="active"': "";
  }
  function dropCls(group) {
    return activeGroup === group ? ' class="active"': "";
  }

  var home = '<a href="https://artharohan.in/"' + cls("home") + '>Home</a>';
  var about = '<a href="https://artharohan.in/about"' + cls("about") + '>About</a>';
  var services = '<a href="https://artharohan.in/services"' + cls("services") + '>Services</a>';
  var contact = '<a href="https://artharohan.in/contact" class="nav-cta">Get In Touch</a>';

  var desktopNav =
    '<nav>' +
      '<div class="nav-logo" onclick="window.location.href=\'https://artharohan.in/\'">' +
        '<div class="nav-mark">\u0905</div>' +
        '<span class="nav-brand">ARTHAROHAN</span>' +
      '</div>' +
      '<ul class="nav-links" id="navLinks">' +
        '<li>' + home + '</li>' +
        '<li>' + about + '</li>' +
        '<li>' + services + '</li>' +
        '<li class="nav-dropdown" id="loansDropdown">' +
          '<a href="/services"' + dropCls("loans") + '>Loans \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="/business-loans"' + cls("business-loans") + '>Business Loans</a></li>' +
            '<li><a href="/car-loan"' + cls("car-loan") + '>Car Loan</a></li>' +
            '<li><a href="/personal-loan"' + cls("personal-loan") + '>Personal Loan</a></li>' +
            '<li><a href="/home-loan"' + cls("home-loan") + '>Home Loan</a></li>' +
            '<li><a href="/loan-against-property"' + cls("loan-against-property") + '>Loan Against Property</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="insDropdown">' +
          '<a href="/insurance"' + dropCls("insurance") + '>General Insurance \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="/insurance"' + cls("insurance-hub") + '>All Insurance ↗</a></li>' +
            '<li><a href="/two-wheeler-third-party-insurance"' + cls("two-wheeler") + '>2W Insurance</a></li>' +
            '<li><a href="/four-wheeler-third-party-insurance"' + cls("four-wheeler") + '>4W Insurance</a></li>' +
            '<li><a href="/commercial-vehicle-insurance"' + cls("commercial-vehicle") + '>Commercial Vehicle</a></li>' +
            '<li><a href="/travel-insurance"' + cls("travel-insurance") + '>Travel Insurance</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="lifeDropdown">' +
          '<a href="/term-life-insurance"' + dropCls("life") + '>Life Insurance \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="/term-life-insurance"' + cls("term-plan") + '>Term Plan</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="reDropdown">' +
          '<a href="/real-estate"' + dropCls("real-estate") + '>Real Estate \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="/real-estate"' + cls("real-estate") + '>Overview</a></li>' +
            '<li><a href="/real-estate-uttam-nagar"' + cls("real-estate-uttam-nagar") + '>Uttam Nagar</a></li>' +
            '<li><a href="/real-estate-tilak-nagar"' + cls("real-estate-tilak-nagar") + '>Tilak Nagar</a></li>' +
            '<li><a href="/real-estate-janakpuri"' + cls("real-estate-janakpuri") + '>Janakpuri</a></li>' +
            '<li><a href="/real-estate-vikaspuri"' + cls("real-estate-vikaspuri") + '>Vikaspuri</a></li>' +
            '<li><a href="/real-estate-ashok-nagar"' + cls("real-estate-ashok-nagar") + '>Ashok Nagar</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="toolsDropdown">' +
          '<a href="/tools"' + dropCls("tools") + '>Tools \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="/tools"' + cls("tools-hub") + '>All Tools ↗</a></li>' +
            '<li><a href="/sip-calculator"' + cls("sip-calculator") + '>SIP Calculator</a></li>' +
            '<li><a href="/home-loan-emi-calculator"' + cls("home-loan-emi-calculator") + '>Home Loan EMI</a></li>' +
            '<li><a href="/personal-loan-emi-calculator"' + cls("personal-loan-emi-calculator") + '>Personal Loan EMI</a></li>' +
            '<li><a href="/compound-interest-calculator"' + cls("compound-interest-calculator") + '>Compound Interest</a></li>' +
            '<li><a href="/business-loan-emi-calculator"' + cls("business-loan-emi-calculator") + '>Business Loan EMI</a></li>' +
          '</ul>' +
        '</li>' +
        '<li>' + contact + '</li>' +
      '</ul>' +
      '<button class="hamburger" id="hbg" onclick="toggleMobileNav()" aria-label="Toggle menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>';

  var mobileNav =
    '<div class="mobile-nav" id="mobileNav">' +
      '<a href="https://artharohan.in/" onclick="closeMobileNav()">Home</a>' +
      '<a href="https://artharohan.in/about" onclick="closeMobileNav()">About</a>' +
      '<a href="https://artharohan.in/services" onclick="closeMobileNav()">Services</a>' +
      '<a href="/business-loans" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Business Loans</a>' +
      '<a href="/car-loan" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Car Loan</a>' +
      '<a href="/personal-loan" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Personal Loan</a>' +
      '<a href="/home-loan" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Home Loan</a>' +
      '<a href="/loan-against-property" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Loan Against Property</a>' +
      '<a href="/insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">All Insurance</a>' +
      '<a href="/two-wheeler-third-party-insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">2W Insurance</a>' +
      '<a href="/four-wheeler-third-party-insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">4W Insurance</a>' +
      '<a href="/commercial-vehicle-insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Commercial Vehicle</a>' +
      '<a href="/travel-insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Travel Insurance</a>' +
      '<a href="/term-life-insurance" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Term Plan</a>' +
      '<a href="/real-estate" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Real Estate</a>' +
      '<a href="/real-estate-uttam-nagar" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Uttam Nagar</a>' +
      '<a href="/real-estate-tilak-nagar" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Tilak Nagar</a>' +
      '<a href="/real-estate-janakpuri" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Janakpuri</a>' +
      '<a href="/real-estate-vikaspuri" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Vikaspuri</a>' +
      '<a href="/real-estate-ashok-nagar" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Ashok Nagar</a>' +
      '<a href="/tools" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">All Tools</a>' +
      '<a href="/sip-calculator" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">SIP Calculator</a>' +
      '<a href="/home-loan-emi-calculator" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Home Loan EMI</a>' +
      '<a href="/personal-loan-emi-calculator" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Personal Loan EMI</a>' +
      '<a href="/compound-interest-calculator" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Compound Interest</a>' +
      '<a href="/business-loan-emi-calculator" onclick="closeMobileNav()" style="color:var(--gold);font-weight:600;">Business Loan EMI</a>' +
      '<a href="https://artharohan.in/contact" onclick="closeMobileNav()" class="nav-cta">Get In Touch</a>' +
    '</div>';

  var mount = document.getElementById("site-nav");
  if (mount) {
    mount.outerHTML = desktopNav + mobileNav;
  } else {
    console.error("nav.js: #site-nav placeholder not found on this page.");
  }

  window.toggleNavDropdown = function (id) {
    document.querySelectorAll(".nav-dropdown.open").forEach(function (el) {
      if (el.id !== id) el.classList.remove("open");
    });
    var el = document.getElementById(id);
    if (el) el.classList.toggle("open");
  };

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-dropdown")) {
      document.querySelectorAll(".nav-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  });

  window.toggleMobileNav = function () {
    var mn = document.getElementById("mobileNav");
    var hbg = document.getElementById("hbg");
    if (!mn || !hbg) return;
    var isOpen = mn.classList.contains("open");
    mn.classList.toggle("open", !isOpen);
    hbg.classList.toggle("open", !isOpen);
  };

  window.closeMobileNav = function () {
    var mn = document.getElementById("mobileNav");
    var hbg = document.getElementById("hbg");
    if (mn) mn.classList.remove("open");
    if (hbg) hbg.classList.remove("open");
  };

  /* ============================================================
     SITE-WIDE CONVERSION TRACKING
     Fires on every WhatsApp (wa.me) click and every tel: click,
     anywhere on the site, automatically, no per-page setup.
     Shows up in GA4 as events "whatsapp_click" and "phone_click".
     ============================================================ */
  document.addEventListener("click", function (e) {
    if (typeof gtag !== "function") return;

    var waLink = e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (waLink) {
      gtag("event", "whatsapp_click", {
        link_url: waLink.href,
        page_path: window.location.pathname,
        page_title: document.title
      });
    }

    var telLink = e.target.closest('a[href^="tel:"]');
    if (telLink) {
      gtag("event", "phone_click", {
        link_url: telLink.href,
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  });
})();
