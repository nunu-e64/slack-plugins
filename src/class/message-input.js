export default class MessageInput {
    constructor(selector) {
        this.selector = selector;
    }

    get $input() {
        return $(this.selector).find('.ql-editor');
    }

    focus() {
        const input = this.$input.get(0);
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStartAfter(input.lastChild);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        input.focus();
    }

    normalize(text) {
        return text.replace(/(<\/blockquote>)/g, '$1\n').replace(/<br>/g, '\n');
    }

    convertNewline(text) {
        return '<p>' + text.replace(/\n/g, '</p><p>') + '</p>';
    }

    quoteText(text) {
        return (">" + text.replace(/\n/g, "\n>").replace(/<.+?>/g, "")).replace(/>http/g, '> http');
    }

    isEmpty() {
        return this.$input.is('.ql-blank');
    }

    clear() {
        this.$input.empty();
    }

    appendText(text) {
        this.$input.append(this.convertNewline(this.normalize(text)));
    }

    appendQuotedText(text) {
        this.$input.append(this.convertNewline(this.quoteText(this.normalize(text))));
    }
}
