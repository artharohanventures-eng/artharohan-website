/* ============================================================
   ARTHAROHAN — SHARED SITE NAVIGATION
   ============================================================
   This is the ONLY place the navigation menu should be edited.
   Every page loads this file and gets the same nav automatically.

   HOW TO USE ON A NEW PAGE:
   1. Put this where the nav should appear:
        <div id="site-nav"></div>
   2. Right before loading this script, set which nav item is
      "current" for this page, and whether this page is the
      homepage (index.html) or a standalone page:
        <script>
          var SITE_NAV_CURRENT = "business-loans"; // see list below
          var SITE_NAV_IS_HOME = false;
        </script>
        <script src="nav.js"></script>

   VALID VALUES FOR SITE_NAV_CURRENT:
     "home", "about", "services", "contact",
     "business-loans", "two-wheeler", "four-wheeler",
     "term-plan", "real-estate" (once that page exists)

   TO ADD A NEW PAGE LATER (e.g. Real Estate):
   1. Add one <li> inside the correct dropdown below
      (desktop AND mobile section)
   2. Add its name to the "groupOf" lookup below
   3. Done — every page picks up the change automatically.
   ============================================================ */

(function () {
  // Inject the CSS needed for dropdowns/mobile menu to work correctly,
  // so no page ever needs to have this copied into its own <style> block.
  if (!document.getElementById("nav-shared-styles")) {
    var css = document.createElement("style");
    css.id = "nav-shared-styles";
    css.textContent =
      ".nav-links li.nav-dropdown{display:flex;}" +
      ".nav-dropdown{position:relative;}" +
      ".nav-dropdown-menu{display:none;position:absolute;top:100%;right:0;background:var(--navy-light);min-width:190px;list-style:none;margin:0;padding:8px 0;border-radius:8px;box-shadow:0 10px 24px rgba(0,0,0,0.35);z-index:500;}" +
      ".nav-dropdown.open .nav-dropdown-menu{display:block;}" +
      ".nav-dropdown-menu li{height:auto;}" +
      ".nav-dropdown-menu li a{height:auto;padding:10px 16px;white-space:nowrap;color:var(--cream);}" +
      ".nav-dropdown-menu li a:hover{background:rgba(255,255,255,0.06);}";
    document.head.appendChild(css);
  }

  var current = window.SITE_NAV_CURRENT || "";
  var isHome = !!window.SITE_NAV_IS_HOME;

  var groupOf = {
    "business-loans": "loans",
     "car-loan": "loans",
    "personal-loan": "loans",
    "home-loan": "loans",
    "loan-against-property": "loans",
    "real-estate": "loans",
    "two-wheeler": "insurance",
    "four-wheeler": "insurance",
     "commercial-vehicle": "insurance",
    "travel-insurance": "insurance",
    "insurance-hub": "insurance",
    "term-plan": "life"
  };
  var activeGroup = groupOf[current] || "";

  function cls(name) {
    return current === name ? ' class="active"' : "";
  }
  function dropCls(group) {
    return activeGroup === group ? ' class="active"' : "";
  }

  var home, about, services, contact;
  if (isHome) {
    home = '<a id="nl-home" onclick="showPage(\'home\')"' + cls("home") + ">Home</a>";
    about = '<a id="nl-about" onclick="showPage(\'about\')"' + cls("about") + ">About</a>";
    services = '<a id="nl-services" onclick="showPage(\'services\')"' + cls("services") + ">Services</a>";
    contact = '<a id="nl-contact" onclick="showPage(\'contact\')" class="nav-cta">Get In Touch</a>';
  } else {
    home = '<a href="https://artharohan.in">Home</a>';
    about = '<a href="https://artharohan.in/#about">About</a>';
    services = '<a href="https://artharohan.in/#services">Services</a>';
    contact = '<a href="https://artharohan.in/#contact" class="nav-cta">Get In Touch</a>';
  }

  var desktopNav =
    '<nav>' +
      '<div class="nav-logo" ' + (isHome ? 'onclick="showPage(\'home\')"' : 'onclick="window.location.href=\'https://artharohan.in\'"') + '>' +
        '<div class="nav-mark">\u0905</div>' +
        '<span class="nav-brand">ARTHAROHAN</span>' +
      '</div>' +
      '<ul class="nav-links" id="navLinks">' +
        '<li>' + home + '</li>' +
        '<li>' + about + '</li>' +
        '<li>' + services + '</li>' +
        '<li class="nav-dropdown" id="loansDropdown">' +
     
          '<a onclick="toggleNavDropdown(\'loansDropdown\')"' + dropCls("loans") + '>Loans \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="business-loans.html"' + cls("business-loans") + '>Business Loans</a></li>' +
     '<li><a href="car-loan.html"' + cls("car-loan") + '>Car Loan</a></li>' +
            '<li><a href="personal-loan.html"' + cls("personal-loan") + '>Personal Loan</a></li>' +
            '<li><a href="home-loan.html"' + cls("home-loan") + '>Home Loan</a></li>' +
            '<li><a href="loan-against-property.html"' + cls("loan-against-property") + '>Loan Against Property</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="insDropdown">' +
          '<a onclick="toggleNavDropdown(\'insDropdown\')"' + dropCls("insurance") + '>General Insurance \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="insurance.html"' + cls("insurance-hub") + '>All Insurance ↗</a></li>' +
            '<li><a href="two-wheeler-third-party-insurance.html"' + cls("two-wheeler") + '>2W Insurance</a></li>' +
            '<li><a href="four-wheeler-third-party-insurance.html"' + cls("four-wheeler") + '>4W Insurance</a></li>' +
     '<li><a href="commercial-vehicle-insurance.html"' + cls("commercial-vehicle") + '>Commercial Vehicle</a></li>' +
          '</ul>' +
        '</li>' +
        '<li class="nav-dropdown" id="lifeDropdown">' +
          '<a onclick="toggleNavDropdown(\'lifeDropdown\')"' + dropCls("life") + '>Life Insurance \u25be</a>' +
          '<ul class="nav-dropdown-menu">' +
            '<li><a href="term-life-insurance.html"' + cls("term-plan") + '>Term Plan</a></li>' +
          '</ul>' +
        '</li>' +
        '<li>' + contact + '</li>' +
      '</ul>' +
      '<button class="hamburger" id="hbg" onclick="toggleMobileNav()" aria-label="Toggle menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>';

  var mHome, mAbout, mServices, mContact;
  if (isHome) {
    mHome = '<a onclick="showPage(\'home\');closeMobileNav()">Home</a>';
    mAbout = '<a onclick="showPage(\'about\');closeMobileNav()">About</a>';
    mServices = '<a onclick="showPage(\'services\');closeMobileNav()">Services</a>';
    mContact = '<a onclick="showPage(\'contact\');closeMobileNav()" class="nav-cta">Get In Touch</a>';
  } else {
    mHome = '<a href="https://artharohan.in">Home</a>';
    mAbout = '<a href="https://artharohan.in/#about">About</a>';
    mServices = '<a href="https://artharohan.in/#services">Services</a>';
    mContact = '<a href="https://artharohan.in/#contact" class="nav-cta">Get In Touch</a>';
  }
  var goldStyle = 'style="color:var(--gold);font-weight:600;"';

  var mobileNav =
    '<div class="mobile-nav" id="mobileNav">' +
      mHome + mAbout + mServices +
      '<a href="business-loans.html" onclick="closeMobileNav()" ' + goldStyle + '>Business Loans</a>' +
     '<a href="car-loan.html" onclick="closeMobileNav()" ' + goldStyle + '>Car Loan</a>' +
      '<a href="personal-loan.html" onclick="closeMobileNav()" ' + goldStyle + '>Personal Loan</a>' +
      '<a href="home-loan.html" onclick="closeMobileNav()" ' + goldStyle + '>Home Loan</a>' +
      '<a href="loan-against-property.html" onclick="closeMobileNav()" ' + goldStyle + '>Loan Against Property</a>' +
      '<a href="insurance.html" onclick="closeMobileNav()" ' + goldStyle + '>All Insurance</a>' +
      '<a href="two-wheeler-third-party-insurance.html" onclick="closeMobileNav()" ' + goldStyle + '>2W Insurance</a>' +
      '<a href="four-wheeler-third-party-insurance.html" onclick="closeMobileNav()" ' + goldStyle + '>4W Insurance</a>' +
     '<a href="commercial-vehicle-insurance.html" onclick="closeMobileNav()" ' + goldStyle + '>Commercial Vehicle</a>' +
      '<a href="term-life-insurance.html" onclick="closeMobileNav()" ' + goldStyle + '>Term Plan</a>' +
      mContact +
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
})();
