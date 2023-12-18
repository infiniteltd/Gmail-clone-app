import React from 'react';
import './SendMail.css';
import { Minimize, OpenInFull, TextFormat, AttachFile, EmojiEmotionsOutlined, InsertLink, AddToDriveOutlined, InsertPhotoOutlined, LockClockOutlined, ModeOutlined, MoreVertOutlined, DeleteOutlined, Close, ArrowDropDownOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { collection, getDocs, addDoc, orderBy, query } from 'firebase/firestore';
import { db, serverTimestamp } from '../components/firebase';

function SendMail() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const colRef = collection(db, 'emails');

    const onSubmit = (data) => {
        addDoc(colRef, {
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: serverTimestamp
        });
    };

    const iconStyle = { color: '#646464', fontSize: '20' };

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <div>
                    <IconButton>
                        <Minimize style={{ color: 'black', }} />
                    </IconButton>
                    <IconButton>
                        <OpenInFull className='sendMail__openFull' style={{ color: 'black', fontSize: '18' }} />
                    </IconButton>
                    <IconButton onClick={() => dispatch(closeSendMessage())}>
                        <Close className='sendMail__close' />
                    </IconButton>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='email'
                    placeholder='To'
                    {...register("to", { required: true })}
                    aria-invalid={errors && errors.to ? "true" : "false"}
                />
                {errors && errors.to && <p className='sendMail__error' role='alert'>To is required.</p>
                }

                <input
                    type='text'
                    placeholder='Subject'
                    {...register('subject', { required: true })}
                    aria-invalid={errors && errors.subject ? "true" : "false"}
                />
                {errors && errors.subject &&
                    <p className='sendMail__error' role='alert'>Subject is required.</p>
                }

                <input
                    type='text'
                    className='sendMail__message'
                    {...register('message', { required: true })}
                    aria-invalid={errors && errors.message ? "true" : "false"}
                />
                {errors && errors.message &&
                    <p className='sendMail__error' role='alert'>Message is required.</p>}

                <div className="sendMail__options">
                    <div className="sendMail__sendContainer">
                        <Button className='sendMail__send' type='submit'>Send</Button>
                        <IconButton>
                            <ArrowDropDownOutlined className='sendMail__arrowDown' />
                        </IconButton>

                    </div>
                    <div className="sendMail__actions">
                        <IconButton>
                            <TextFormat className='sendMail__textFormat' style={{ color: 'grey' }} />
                        </IconButton>
                        <IconButton>
                            <AttachFile style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <EmojiEmotionsOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <InsertLink style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <AddToDriveOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <InsertPhotoOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <LockClockOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <ModeOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlined style={iconStyle} />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlined className='sendMail__mailDelete' />
                        </IconButton>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SendMail;