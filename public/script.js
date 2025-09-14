async function loadContentMarkdownFile() {
    const res = await fetch("content.md");
    if (!res.ok) throw new Error("Failed to fetch");
    const text = await res.text();

    const html = marked.parse(text);
    const contentEl = document.getElementById("content");
    contentEl.innerHTML = html;

    renderMathInElement(contentEl, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
    });
}

document.addEventListener("DOMContentLoaded", loadContentMarkdownFile);
