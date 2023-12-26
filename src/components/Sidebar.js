import React from 'react';
import { Button, IconButton } from '@mui/material';
import { AccessTime, CreateOutlined, ExpandMore, Inbox, Send, Note, Star, Person, Duo, Phone, LabelImportantOutlined } from '@mui/icons-material';
import './Sidebar.css';
import SidebarOption from '../utilities/SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className='sidebar'>
            <Button startIcon={<CreateOutlined fontSize="larger" />} className='sidebar__compose' onClick={() => dispatch(openSendMessage())}>Compose</Button>

            <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
            <SidebarOption Icon={Star} title='Starred' number={54} />
            <SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
            <SidebarOption Icon={LabelImportantOutlined} title='Important' number={54} />
            <SidebarOption Icon={Send} title='Sent' number={54} />
            <SidebarOption Icon={Note} title='Drafts' number={54} />
            <SidebarOption Icon={ExpandMore} title='More' number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
