import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let MessagesData = [
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        message: "Hello world"
    },
    {
        id: 1,
        name: "Anton Mamedov",
        message: "У коровы нет других забот"
    },
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        message: "Это точно."
    }
]

let DialogsData = [
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        lastMessage: "кто гей"
    },
    {
        id: 1,
        name: "Anton Mamedov",
        lastMessage: "ты гей"
    },
    {
        id: 2,
        name: "Sanya Ivanov",
        lastMessage: "член"
    },
    {
        id: 3,
        name: "Maxim Zvenigorodsky",
        lastMessage: "кто гей"
    },
    {
        id: 4,
        name: "Ioan Boneflatcher",
        lastMessage: "их хабэ айне катце"
    },
    {
        id: 5,
        name: "Mikhail Goo",
        lastMessage: "слизь?"
    },
    {
        id: 6,
        name: "Pavel Durovv",
        lastMessage: "Da kto ti takoy>?"
    },
]

let PostsData = [
    {
        text: "Сказал любую фразу",
        likes: 10,
        comments: 2,
        date: "29.01.2021"
    },
    {
        text: "КТО ЗДЕСЬ АААААААААА",
        likes: 5,
        comments: 0,
        date: "10.12.2020"
    },
    {
        text: "Ну и ладно",
        likes: 9999,
        comments: 9999,
        date: "3.11.2020"
    },
    {
        text: "Теперь я пишу посты совсем по-другому, блять",
        likes: -10,
        comments: 69,
        date: "1.1.1"
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App MessagesData={MessagesData} DialogsData={DialogsData} PostsData={PostsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
