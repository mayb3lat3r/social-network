import {rerenderEntireTree} from "../render";


let state = {
    ProfilePage: {
        PostsData: [
            {
                id: 1,
                text: "Сказал любую фразу",
                likes: 10,
                comments: 2,
                date: "29.01.2021"
            },
            {
                id: 2,
                text: "КТО ЗДЕСЬ АААААААААА",
                likes: 5,
                comments: 0,
                date: "10.12.2020"
            },
            {
                id: 3,
                text: "Ну и ладно",
                likes: 9999,
                comments: 9999,
                date: "3.11.2020"
            },
            {
                id: 4,
                text: "Теперь я пишу посты совсем по-другому, блять",
                likes: -10,
                comments: 69,
                date: "1.1.1"
            }
        ],
        NewPostText: 'test'
    },
    MessagesPage: {
        MessagesData: [
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
        ],
        DialogsData: [
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
        ],
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.ProfilePage.NewPostText,
        likes: 0,
        comments: 0,
        date: "05.02.2021"
    }

    state.ProfilePage.PostsData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (text) => {
    state.ProfilePage.NewPostText = text;
    rerenderEntireTree(state);
}


export default state;