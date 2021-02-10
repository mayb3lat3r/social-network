import React from 'react';
import Message from "./Message/Message"
import s from "./currentDialog.module.css"


const CurrentDialog = (props) => {

    let textMessage = React.createRef();

    let sendMessage = () => {
        let text = textMessage.current.value;
        alert(text);
    }

    let Messages = props.MessagesData.map(elem => <Message id={elem.id} name={elem.name} msg={elem.message}/>);

    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <div className={s.user}>
                    <img className={s.avatar} src="/img/user-avatar.png" alt=""/>
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.status}>{props.status}</div>
            </div>

            <div className={s.content}>

                {Messages}

            </div>

            <div className={s.message}>
                <a href="#"><img src="/img/attachment.svg" alt="attachment" className={s.item}/></a>
                <textarea name="" id="" cols="30" rows="10" ref={textMessage}></textarea>
                <a href="#"><img onClick={sendMessage} src="/img/submit.svg" alt="" className={s.item}/></a>
            </div>
        </div>
    );
}

export default CurrentDialog;
