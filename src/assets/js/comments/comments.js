export default class Comments {
     async getComments() {
        const response = await this.loadComments();

        this.renderComments(response);
    }

    loadComments() {
        return fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => response.json());
    }

    renderComments(list = []) {
        const container = document.getElementById('js-comments__list')
        let markup = '';

        list.forEach(item => {
            markup += `<div class="comments__item">
                     <p class="comments__name">${item.name}</p>
                     <p class="comments__email">${item.email}</p>
                     <p class="comments__body">${item.body}</p>
                     </div>`;
        });

        if(markup) {
            container.innerHTML = markup;
        }
    }

    init() {
         return this.getComments();
    }
}