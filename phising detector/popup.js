document.getElementById("checkButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

        const currentUrl = tabs[0].url;

        const url = new URL(currentUrl);
        const hostname = url.hostname;

        // Show website
        document.getElementById("website").textContent =
            "Website: " + hostname;

        // Rule 1: IP address
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
        const usesIPAddress = ipPattern.test(hostname);

        // Rule 2: Long URL
        const isLongUrl = currentUrl.length > 100;

        // Rule 3: Suspicious keywords
        const suspiciousWords = [
            "login",
            "verify",
            "update",
            "secure",
            "account",
            "password",
            "bank"
        ];

        const hasSuspiciousWord = suspiciousWords.some(word =>
            currentUrl.toLowerCase().includes(word)
        );

        // Rule 4: HTTPS
        const isNotHTTPS = url.protocol !== "https:";

        // Rule 5: @ symbol
        const hasAtSymbol = currentUrl.includes("@");

        // Rule 6: Many subdomains
        const domainParts = hostname.split(".");
        const hasManySubdomains = domainParts.length > 4;

        // Rule 7: Encoded characters
        const encodedParts =
            currentUrl.match(/%[0-9A-Fa-f]{2}/g) || [];

        const hasManyEncodedParts = encodedParts.length >= 5;

        // Risk score
        let riskScore = 0;
        let reasons = [];

        if (usesIPAddress) {
            riskScore += 25;
            reasons.push("IP address used instead of a domain");
        }

        if (isLongUrl) {
            riskScore += 10;
            reasons.push("URL is unusually long");
        }

        if (hasSuspiciousWord) {
            riskScore += 10;
            reasons.push("Suspicious keyword detected");
        }

        if (isNotHTTPS) {
            riskScore += 10;
            reasons.push("Website is not using HTTPS");
        }

        if (hasAtSymbol) {
            riskScore += 20;
            reasons.push("@ symbol found in URL");
        }

        if (hasManySubdomains) {
            riskScore += 10;
            reasons.push("Unusually many subdomains");
        }

        if (hasManyEncodedParts) {
            riskScore += 10;
            reasons.push("Many encoded characters found in URL");
        }

        // Risk level
        let riskLevel;
        let riskClass;

        if (riskScore <= 30) {
            riskLevel = "🟢 LOW RISK";
            riskClass = "low";
        } else if (riskScore <= 60) {
            riskLevel = "🟡 SUSPICIOUS";
            riskClass = "suspicious";
        } else {
            riskLevel = "🔴 HIGH RISK";
            riskClass = "high";
        }

        // Reasons
        let reasonText;

        if (reasons.length === 0) {
            reasonText = "✓ No suspicious indicators detected.";
        } else {
            reasonText = reasons.map(reason => "⚠ " + reason).join("\n");
        }

        // Apply risk style
        const resultElement = document.getElementById("result");

        resultElement.className = riskClass;

        resultElement.textContent =
            riskLevel +
            "\n\nRisk Score: " + riskScore + "/100" +
            "\n\nReasons:\n" + reasonText;
    });
});