(function() {
    // Dynamically load CSS
    const link = document.createElement('link');
    link.href = 'https://yourserver.com/keyword-tool.css'; // URL of your hosted CSS file
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Insert the HTML structure for the keyword tool
    const toolDiv = document.createElement('div');
    toolDiv.innerHTML = `
        <div id="keyword-tool" style="display:none;">
            <button id="open-tool">Keyword Tool</button>
            <div id="tool-container" style="display:none;">
                <textarea id="keyword-input" placeholder="Paste keywords here..."></textarea>
                <button id="check-keywords">Check for Keywords</button>
                <div id="results"></div>
                <button id="end-task">End Task</button>
            </div>
        </div>
    `;
    document.body.appendChild(toolDiv);

    // JavaScript logic for the tool
    document.addEventListener("DOMContentLoaded", function () {
        const adminRole = true;  // Logic to check if the user is an admin
        const keywordTool = document.getElementById('keyword-tool');
        const openToolBtn = document.getElementById('open-tool');
        const toolContainer = document.getElementById('tool-container');
        const keywordInput = document.getElementById('keyword-input');
        const checkBtn = document.getElementById('check-keywords');
        const resultsDiv = document.getElementById('results');
        const endTaskBtn = document.getElementById('end-task');

        // Show the tool only if the user has admin role
        if (adminRole) {
            keywordTool.style.display = 'block';
        }

        // Open/close tool
        openToolBtn.addEventListener('click', function () {
            toolContainer.style.display = toolContainer.style.display === 'none' ? 'block' : 'none';
        });

        // Check for keywords
        checkBtn.addEventListener('click', function () {
            let keywords = keywordInput.value.trim().replace(/\n/g, ',').split(',').map(k => k.trim()).filter(k => k);
            let pageContent = document.body.innerText.toLowerCase();
            let usedKeywords = [];
            let unusedKeywords = [];

            // Highlight keywords and count occurrences
            keywords.forEach(keyword => {
                let regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                let matches = pageContent.match(regex);
                if (matches) {
                    usedKeywords.push(`${keyword} (${matches.length})`); // Add count of occurrences
                    highlightKeyword(keyword);
                } else {
                    unusedKeywords.push(keyword);
                }
            });

            // Display results
            resultsDiv.innerHTML = `<h4>Results:</h4>
                                    <p><strong>Used keywords:</strong> ${usedKeywords.join(', ') || 'None'}</p>
                                    <p><strong>Unused keywords:</strong> ${unusedKeywords.join(', ') || 'None'}</p>`;

            // Store keywords in localStorage to persist across refresh
            localStorage.setItem('keywords', JSON.stringify(keywords));
        });

        // Load saved keywords on page load
        const savedKeywords = JSON.parse(localStorage.getItem('keywords'));
        if (savedKeywords) {
            keywordInput.value = savedKeywords.join('\n');
        }

        // End task
        endTaskBtn.addEventListener('click', function () {
            localStorage.removeItem('keywords');
            resultsDiv.innerHTML = '';
            keywordInput.value = '';
        });

        // Function to highlight keywords in the page
        function highlightKeyword(keyword) {
            const regex = new RegExp(`(${keyword})`, 'gi');
            document.querySelectorAll('h1, h2, h3, h4, h5, p, span, div:not(#keyword-tool)').forEach(function (element) {
                if (element.innerHTML && !element.closest('#keyword-tool')) {
                    element.innerHTML = element.innerHTML.replace(regex, '<mark>$1</mark>');
                }
            });
        }
    });
})();
