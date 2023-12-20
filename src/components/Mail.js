import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { ArrowBack, ArchiveOutlined, ReportGmailerrorredOutlined, Delete, MarkEmailUnread, WatchLater, MoreVert, Label, AddTask, KeyboardArrowLeft, KeyboardArrowRight, PrintOutlined, OpenInNew, LabelImportant } from '@mui/icons-material';
import './Mail.css';
import { selectOpenMail } from '../features/mailSlice';

function Mail() {
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowBack />
                    </IconButton>

                    <IconButton>
                        <ArchiveOutlined />
                    </IconButton>

                    <IconButton>
                        <ReportGmailerrorredOutlined />
                    </IconButton>

                    <IconButton>
                        <Delete />
                    </IconButton>

                    <IconButton>
                        <MarkEmailUnread />
                    </IconButton>

                    <IconButton>
                        <WatchLater />
                    </IconButton>

                    <IconButton>
                        <AddTask />
                    </IconButton>

                    <IconButton>
                        <Label />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="mail__toolsRight">
                    <IconButton>
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRight />
                    </IconButton>
                    <IconButton>
                        <PrintOutlined />
                    </IconButton>
                    <IconButton>
                        <OpenInNew />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className='mail__important' />
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>

                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
