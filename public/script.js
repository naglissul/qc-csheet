async function loadContentMarkdownFile() {
    const res = await fetch("content.md");
    if (!res.ok) throw new Error("Failed to fetch");

    const text = await res.text();
    document.getElementById("content").innerHTML = marked.parse(text);

    renderMathInElement(document.getElementById("content"), {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
    });
}

document.addEventListener("DOMContentLoaded", loadContentMarkdownFile);
