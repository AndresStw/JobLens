(() => {

    console.log("JobLens iniciado.");

    let lastTitle = "";

    const currentOffer = {
        title: "",
        company: "",
        location: "",
        description: "",
        employmentType: "",
        experience: "",
        salary: "",
        technologies: [],
        analyzedAt: ""
    };

    function extractTitle() {

        return document.querySelector(
            ".job-details-jobs-unified-top-card__job-title"
        )?.innerText.trim() || "";

    }

    function extractCompany() {

        return document.querySelector(
            ".job-details-jobs-unified-top-card__company-name"
        )?.innerText.trim() || "";

    }

    function extractLocation() {

        return document.querySelector(
            ".job-details-jobs-unified-top-card__primary-description-container"
        )?.innerText.trim() || "";

    }

    function extractDescription() {

        return document.querySelector(
            ".jobs-description__content"
        )?.innerText.trim() || "";

    }

    function extractJob() {

        const title = extractTitle();

        if (!title) return;

        if (title === lastTitle) return;

        lastTitle = title;

        currentOffer.title = title;
        currentOffer.company = extractCompany();
        currentOffer.location = extractLocation();
        currentOffer.description = extractDescription();
        currentOffer.analyzedAt = new Date().toISOString();

        chrome.storage.local.set({
            currentOffer
        });

        if (window.JobLensUI) {

            window.JobLensUI.render(currentOffer);

        }

        // console.log(clear); lo quito porque quita logs importantes.
        console.group("JobLens");
        console.table(currentOffer);
        console.groupEnd();
        
    }

    extractJob();

    const observer = new MutationObserver(() => {//correguido 

        extractJob();

    });

    observer.observe(document.body, {

        childList: true,
        subtree: true

    });

})();