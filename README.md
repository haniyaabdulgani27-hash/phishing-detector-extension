🛡️ Phishing Detector Browser Extension

A browser extension that analyzes the URL of the currently open webpage and identifies common characteristics associated with potentially suspicious or phishing URLs.

The project uses a rule-based heuristic approach to calculate a risk score and explain which indicators were detected.

🚀 Features

- Checks the current webpage URL
- Detects IP addresses used instead of domain names
- Checks for unusually long URLs
- Detects suspicious keywords
- Checks whether the website uses HTTPS
- Detects "@" symbols in URLs
- Checks for unusually deep subdomains
- Detects multiple encoded characters
- Calculates a risk score
- Displays reasons behind the score
- Provides Low Risk, Suspicious, and High Risk classifications

⚙️ How It Works

The extension follows this basic process:

Current Webpage
      ↓
Extract URL
      ↓
Analyze URL
      ↓
Check Suspicious Indicators
      ↓
Calculate Risk Score
      ↓
Determine Risk Level
      ↓
Display Result & Reasons

🔍 Detection Rules

Indicator| Score
IP address used as hostname| +25
Unusually long URL| +10
Suspicious keyword detected| +10
Website is not using HTTPS| +10
"@" symbol in URL| +20
Unusually many subdomains| +10
Many encoded characters| +10

Risk Levels

Score| Classification
0–30| 🟢 Low Risk
31–60| 🟡 Suspicious
61+| 🔴 High Risk

🧪 Testing

The extension was tested using different URL patterns, including:

- Normal HTTPS URLs
- URLs containing suspicious keywords
- HTTP URLs
- IP-address-based URLs
- URLs containing "@"
- URLs with multiple subdomains
- Long URLs
- URLs containing encoded characters

Testing was performed using safe test URLs and patterns rather than intentionally visiting real phishing websites.

💻 Installation

1. Download or clone this repository.
2. Open Google Chrome.
3. Go to:

chrome://extensions

4. Enable Developer mode.
5. Select Load unpacked.
6. Select the project folder.
7. The Phishing Detector extension will appear in Chrome.
8. Open a webpage and click the extension to analyze its URL.

⚠️ Limitations

This project uses rule-based heuristic detection. A suspicious indicator does not necessarily mean that a website is malicious.

For example, legitimate websites may:

- Use long URLs
- Contain words such as "login" or "account"
- Have many URL parameters
- Use encoded characters

Therefore, the risk score should be treated as an indicator of suspicion, not a definitive phishing verdict.

The extension does not currently guarantee detection of all phishing websites.

🔮 Future Improvements

Possible future improvements include:

- Integration with threat-intelligence APIs
- Domain reputation checking
- Machine-learning-based classification
- Better legitimate-domain recognition
- More advanced URL analysis
- Improved false-positive handling
- Automatic background scanning
- More detailed security reports
- Improved UI and visualization

🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extension APIs
- GitHub

🎯 Project Goal

The goal of this project is to understand how browser extensions can analyze URLs and how basic security heuristics can be combined to identify potentially suspicious webpages.

This project was built as a cybersecurity learning and portfolio project.
