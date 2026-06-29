(() => {
  console.log("JobLens activo en LinkedIn");

  if (!window.location.pathname.includes("/jobs/view/")) {
    return;
  }
 
  // if (!window.location.pathname.includes("/jobs/search/")) {
  //   return;
  // }  estoy analizando el modo normal para entrar a buscar ofertas sin tener que ir a jobs/view

  const currentOffer = {
    title: "",
    company: "",
    location: "",
    description: "",
    employmentType: "",
    experience: "",
    salary: "",
    technologies: [],
    analyzedAt: new Date().toISOString(),
  };

  function extractTitle() {
    return (
      document
        .querySelector(".job-details-jobs-unified-top-card__job-title")
        ?.innerText.trim() || ""
    );
  }

  function extractCompany() {
    return (
      document
        .querySelector(".job-details-jobs-unified-top-card__company-name")
        ?.innerText.trim() || ""
    );
  }

  function extractLocation() {
    return (
      document
        .querySelector(
          ".job-details-jobs-unified-top-card__primary-description-container",
        )
        ?.innerText.trim() || ""
    );
  }

  function extractDescription() {
    return (
      document.querySelector(".jobs-description__content")?.innerText.trim() ||
      ""
    );
  }

  function extractJob() {
    currentOffer.title = extractTitle();
    currentOffer.company = extractCompany();
    currentOffer.location = extractLocation();
    currentOffer.description = extractDescription();

    chrome.storage.local.set({
      currentOffer: currentOffer,
    });

    console.group("JobLens");
    console.table(currentOffer);
    console.groupEnd();
  }

  setTimeout(extractJob, 2000);
})();
