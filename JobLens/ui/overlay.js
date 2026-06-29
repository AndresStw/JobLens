window.JobLensUI = {

    render(offer) {

        let overlay = document.getElementById("joblens-overlay");

        if (!overlay) {

            overlay = document.createElement("div");

            overlay.id = "joblens-overlay";

            overlay.innerHTML = `

                <div id="jl-header">

                    <span><strong>JobLens</strong></span>

                    <div>

                        <button id="jl-minimize">—</button>

                        <button id="jl-close">✕</button>

                    </div>

                </div>

                <div id="jl-content">

                    <h2 id="jl-title"></h2>

                    <p class="joblens-company" id="jl-company"></p>

                    <p id="jl-location"></p>

                    <hr>

                    <strong>Compatibilidad</strong>

                    <p>Calculando...</p>

                </div>

            `;

            document.body.appendChild(overlay);

            document.getElementById("jl-close").onclick = () => {

                overlay.remove();

            };

            document.getElementById("jl-minimize").onclick = () => {

                const body = document.getElementById("jl-content");

                body.style.display =
                    body.style.display === "none"
                        ? "block"
                        : "none";

            };

        }

        document.getElementById("jl-title").textContent = offer.title;

        document.getElementById("jl-company").textContent = offer.company;

        document.getElementById("jl-location").textContent = offer.location;

    }

};