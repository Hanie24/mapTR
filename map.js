(() => {
    const MAP = document.querySelector("#map");
    MAP.addEventListener("load", () => {
        const MAP_CONTENT = MAP.contentDocument;
        const STATES = MAP_CONTENT.querySelectorAll(".state");
        STATES.forEach((state) => {
            state.addEventListener("click", () => {
                const STATE_INFO = document.querySelector(`.${state.id}-data`);
                const DATA_LIST = document.querySelectorAll(".data");
                DATA_LIST.forEach((item) => {
                    item.classList.add("hidden");
                });
                STATE_INFO.classList.remove("hidden");
            }, false);
        });
    }, false);
})();
