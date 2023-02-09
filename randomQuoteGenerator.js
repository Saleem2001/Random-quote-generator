import { LightningElement } from 'lwc';

export default class RandomQuoteGenerator extends LightningElement {
    content;
    author;

    connectedCallback() {
        this.getQuote();
    }

    getQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                this.content = data.content;
                this.author = data.author;
            })
            .catch(error => {
                console.error(error);
            });
    }

   
}
