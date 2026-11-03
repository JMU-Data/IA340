(function () {
  "use strict";
  var deck = document.querySelector(".deck");
  var slides = Array.from(document.querySelectorAll("section.slide"));
  var picker = document.querySelector("#slide-picker");
  var counter = document.querySelector("#slide-number");
  var previous = document.querySelector("#prev");
  var next = document.querySelector("#next");
  var progress = document.querySelector("#progress-inner");
  if (!deck || !slides.length || !picker) return;
  var active = 0;
  deck.classList.add("deck-ready");

  // PR previews open the notebook from the same review branch; published
  // course pages keep the main-branch link authored in the HTML.
  if (location.pathname.includes("/pr-preview/")) {
    document.querySelectorAll('a[href*="colab.research.google.com/github/JMU-Data/IA340/blob/main/"]').forEach(function (link) {
      link.href = link.href.replace("/blob/main/", "/blob/feat/week12-gemini-rag-lab/");
    });
  }

  function indexFromHash() {
    var hash = decodeURIComponent(location.hash.slice(1));
    var numeric = hash.match(/^slide-(\d+)$/);
    if (numeric) return Number(numeric[1]) - 1;
    var found = slides.findIndex(function (slide) {
      return slide.dataset.anchor === hash;
    });
    return found < 0 ? 0 : found;
  }

  function show(index, updateHash) {
    if (!Number.isFinite(index)) return;
    active = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach(function (slide, i) {
      var selected = i === active;
      slide.classList.toggle("current", selected);
      slide.setAttribute("aria-hidden", String(!selected));
    });
    slides[active].scrollTop = 0;
    picker.value = String(active);
    counter.textContent = (active + 1) + " / " + slides.length;
    progress.style.width = ((active + 1) / slides.length * 100) + "%";
    previous.disabled = active === 0;
    next.disabled = active === slides.length - 1;
    document.title = slides[active].dataset.title + " · IA340 Week 12";
    if (updateHash !== false) {
      try {
        history.replaceState(null, "", "#" + slides[active].dataset.anchor);
      } catch (error) {
        // Navigation still works in local previews without History API access.
      }
    }
  }

  previous.addEventListener("click", function () { show(active - 1); });
  next.addEventListener("click", function () { show(active + 1); });
  picker.addEventListener("change", function (event) {
    show(Number(event.target.value));
  });
  window.addEventListener("hashchange", function () {
    show(indexFromHash(), false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.target.matches("input, textarea, select, [contenteditable]")) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      show(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      show(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      show(0);
    } else if (event.key === "End") {
      event.preventDefault();
      show(slides.length - 1);
    }
  });

  document.querySelectorAll(".copy-code").forEach(function (button) {
    button.addEventListener("click", async function () {
      var code = button.closest(".code-cell").querySelector("code");
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = "Copied";
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(code);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = "Selected · copy now";
      }
      window.setTimeout(function () { button.textContent = "Copy code"; }, 2000);
    });
  });

  document.querySelectorAll(".load-video").forEach(function (button) {
    button.addEventListener("click", function () {
      var shell = button.closest(".video-shell");
      var frame = document.createElement("iframe");
      frame.src = "https://www.youtube.com/embed/" + shell.dataset.videoId
        + "?list=PLHutrxqbP1Bx3Nd4MZY2p5N4rqnxYWPa6";
      frame.title = "Earlier LBSocial demonstration provided by the instructor";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allowFullscreen = true;
      shell.replaceChildren(frame);
      frame.focus();
    });
  });

  show(indexFromHash(), false);
}());
