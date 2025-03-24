import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import twig from 'highlight.js/lib/languages/twig';
import handlebars from 'highlight.js/lib/languages/handlebars';
import php from 'highlight.js/lib/languages/php';
import 'highlight.js/styles/atom-one-dark.css';

import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('htmlmixed', html);
hljs.registerLanguage('php', php);
hljs.registerLanguage('twig', twig);
hljs.registerLanguage('handlebars', handlebars);

document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});
