(() => {
  console.log("JobLens activo en LinkedIn");

  const isJobPage = window.location.pathname.includes("/jobs/view/");

  if (!isJobPage) return;

  const offer = {
    title: "",
    company: "",
    location: "",
    description: ""
  };

  function extractJob() {
    offer.title =
      document
        .querySelector(".job-details-jobs-unified-top-card__job-title")
        ?.innerText.trim() || "";

    offer.company =
      document
        .querySelector(".job-details-jobs-unified-top-card__company-name")
        ?.innerText.trim() || "";

    offer.location =
      document
        .querySelector(
          ".job-details-jobs-unified-top-card_primary-description-container",
        )
        ?.innerText.trim() || "";

    offer.description =
      document.querySelector(".jobs-descriptions__content")?.innerText.trim() ||
      "";

    chrome.storage.local.set({
      currentOffer: offer,
    });

    console.log(offer);
  }

  setTimeout(extractJob, 2000);
})();
