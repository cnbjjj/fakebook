import { query, event } from './utils.js';
import Subscriber from './Subscriber.js';

function postPage(page) {
    const { user: { name }, date, text, files } = page;
    const create = (img = '') => {
        const html = `
        <div class="page">
            <div class="info flex flex-sb">
                <div class="flex grid-center gap-10">
                    <div class="avatar"><img src="./assets/img/favicon.png"></div>
                    <span>${name}</span>
                </div>
                <div class="grid grid-center">${date}</div>
            </div>
            <div class="content">
                <p>${text}</p>
                ${img}
            </div>
        </div>`;
        pages.insertAdjacentHTML('afterbegin', html);
    };
    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = evt => create(`<img src='${evt.target.result}' />`);
        reader.readAsDataURL(files[0]);
    }
    else
        create();
    return page;
}

const user = new Subscriber('FB00001', 'JJ', 'JJ', 'jj@jj.com', [{}, {}], [{}], false);
const avatar = query('.heading > img');
const file = query('input[type=file]');
const fileName = query('.file-name');
const fileBtn = query('.form i');
const post = query('input[type=button]');
const text = query('textarea');
const pages = query('.pages');

event(file, 'change', () => fileName.innerHTML = file.files[0].name);
event(fileBtn, 'click', () => { file.click(); });
event(post, 'click', (evt) => {
    const [message, files] = [text.value, file.files];
    if (message === '' && files.length === 0) return text.focus();
    const content = { user: user, files: files, text: message, date: new Date().toLocaleDateString() };
    user.pages.push(postPage(content));
    text.value = file.value = fileName.innerHTML = '';
});
event(avatar, 'click', (evt) => {
    const info = query('.heading > .info');
    const hide = (evt) => {
        info.classList.remove('visible');
        document.removeEventListener('click', hide);
    };
    info.innerHTML = user.getInfo();
    info.classList.add('visible');
    event(document, 'click', hide);
    evt.stopPropagation();
});