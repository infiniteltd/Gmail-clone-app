import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, Refresh, MoreVert, ChevronLeft, ChevronRight, KeyboardHide, Inbox, LocalOffer, People, LocalOfferOutlined, PeopleOutlined } from '@mui/icons-material';
import './EmailList.css';
import Section from '../utilities/Section.js';
import EmailRow from '../utilities/EmailRow.js';

function EmailList() {
    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className='emailList__settingsLeft'>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Refresh />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                </div>
            </div>

            <div className='emailList__sections'>
                <Section Icon={Inbox} title='Primary' color='#2662d1' selected />
                <Section Icon={LocalOfferOutlined} title='Promotions' color='#C72328' />
                <Section Icon={PeopleOutlined} title='Social' color='
#1e922a' />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test'
                    time='10.05pm' />

                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a test'
                    time='10.05pm' />
            </div>
        </div>
    );
}

export default EmailList;
