import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArchiveOutlined, ReportGmailerrorredOutlined, Delete, MarkEmailUnread, WatchLater, MoreVert, Label, AddTask, KeyboardArrowLeft, KeyboardArrowRight, PrintOutlined, OpenInNew, LabelImportant } from '@mui/icons-material';
import './Mail.css';
import { useNavigate } from 'react-router-dom';

function Mail() {
    const navigate = useNavigate();

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
                    <h2>Subject</h2>
                    <LabelImportant className='mail__important' />
                    <p>Title</p>
                    <p className='mail__time'>10.05pm</p>
                </div>

                <div className="mail__message">
                    <p>This is a message</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;
