import React from 'react';
import './SendMail.css';
import { Minimize, OpenInFull, Close, TextFormat, AttachFile, EmojiEmotionsOutlined, InsertLink, AddToDriveOutlined, InsertPhotoOutlined, LockClockOutlined, ModeOutlined, MoreVertOutlined, DeleteOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);

    };
    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <div>
                    <IconButton>
                        <Minimize />
                    </IconButton>
                    <IconButton>
                        <OpenInFull />
                    </IconButton>

                    <Close className='sendMail__close' />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input name='to' type='text' placeholder='To:' ref={register({ required: true })} />
                <input name='subject' type='text' placeholder='Subject:' ref={register({ required: true })} />
                <input name='message' type='text' placeholder='Message...' className='sendMail__message' ref={register({ required: true })} />

                <div className="sendMail__options">
                    <Button className='sendMail__send'>Send</Button>
                    <IconButton>
                        <TextFormat />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <EmojiEmotionsOutlined />
                    </IconButton>
                    <IconButton>
                        <InsertLink />
                    </IconButton>
                    <IconButton>
                        <AddToDriveOutlined />
                    </IconButton>
                    <IconButton>
                        <InsertPhotoOutlined />
                    </IconButton>
                    <IconButton>
                        <LockClockOutlined />
                    </IconButton>
                    <IconButton>
                        <ModeOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlined />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlined />
                    </IconButton>
                </div>
            </form>


        </div>
    );
}

export default SendMail;
