# Website Keyword Scanner Tool

## Overview

The Keyword Tool allows you to check the usage of keywords on your web pages. It highlights keywords, shows which ones are used, and which ones are not, providing a simple interface for keyword analysis.

![Keyword Tool Screenshot](https://joeseo.co.ke/site/images/page_images/keyword-tool-1729497734.jpg)

## Demo

[Click here to view a demo of the Keyword Tool](https://joeseo.co.ke/website-keyword-scanner-tool)

## Embed the Tool

To embed the Keyword Tool on your website, include the following script in your HTML:

Ensure to load only when admin is logged in. You don't want the public to see this.

The following example is for Symfony, but you can use whichever method you prefer to check if the admin is logged in:

```html
{% if is_granted('ROLE_ADMIN') %}
    <script src="https://joe-seo-co-ke.github.io/keyword-tool/keyword-tool.js"></script>
{% endif %}
<!-- Please link back to [https://joeseo.co.ke/keyword-tool](https://joeseo.co.ke/website-keyword-scanner-tool) -->
```
Contact me from my website for free guest posting.

### Requirements

- **Attribution**: Please ensure you provide attribution when using this tool. This can be done by adding the comment in the embed script above.
  
- **"Powered by" Link**: The tool will automatically display a "Powered by" link in the interface. You can customize the link to point to your website.

## Usage Instructions

1. Add the following script to your page:
   ```html
   <script src="https://joe-seo-co-ke.github.io/keyword-tool/keyword-tool.js"></script>
   ```

2. Link back to https://joeseo.co.ke/website-keyword-scanner-tool from an article about this tool.

## Features

- Input your keywords, each in a new line, and check their occurrences on the page (paste directly if copied from a sheet document).
- Highlights used keywords.
- Displays results for used and unused keywords.
- Saves keywords to local storage to persist across page refreshes.

## License

This tool is open source and can be modified or distributed as per your needs, but please maintain the attribution requirements.
