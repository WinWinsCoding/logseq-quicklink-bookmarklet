# Bookmarklet code for Logseq's quickCapture feature
## Description
This repository contains code meant to be used in a ["bookmarklet"](https://en.wikipedia.org/wiki/Bookmarklet) for sending web-page
information (including selected text, if there is any) to <img src="https://logseq.com/logo-with-border.5bf84f43.png" alt="Logseq logo" width="15" height="15"> [Logseq](https://logseq.com/) via its [quickCapture protocol URL](https://docs.logseq.com/#/page/logseq%20protocol?anchor=ls-block-63e696aa-b6aa-4078-ba58-fc7e66dda3e9).
## Creating the Bookmarklet 🔖
### **Either**
**(easiest, if your browser supports it)**
1. Open the html file in this repository in your browser
2. Drag the link "Share to Logseq" to your bookmark bar
### **Or**
1. Use your browser to create a new bookmark (check your browser's documentation for more information)
2. In the *name* or *title* area, type what you want to appear in the bookmark bar
3. In the *URL* area, type `javascript:`, then paste in after that the code in the minified file
4. Save the new bookmark
## Usage ⚒
**With Logseq installed on your system, and your curser blinking in a note area**
1. In the browser in which you created the bookmarklet, navigate to a desired page
2. If you want a section of the page that you are viewing to be included in the notes, select the section
3. Click on the bookmarklet
4. If your browser prompts you to, allow the site to "Open Logseq"
5. **Sometime** it is necessary to click again, in Logseq, the section in which you wish the newly-created note to appear - I have yet to find a reason why this is sometimes necessary, while  other time not
## Notes and References 📝
This is a rework of the Logseq officially-linked JavaScript code found at https://jsfiddle.net/andelf/kvm5Le6z/7/, as I found that code to be not easily readable. Thanks to the original author of that code.
### Other References:
- [What are Bookmarklets? How to Use JavaScript to Make a Bookmarklet in Chromium and Firefox](https://www.freecodecamp.org/news/what-are-bookmarklets/)
- [[DONE] Better Quick Capture](https://discuss.logseq.com/t/done-better-quick-capture/3687)
- The **Minify JS** tool available at **Code Beautify** (codebeautify.org)
