import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, Refresh, MoreVert, ChevronLeft, ChevronRight, KeyboardHide, Inbox, LocalOfferOutlined, PeopleOutlined } from '@mui/icons-material';
import './EmailList.css';
import Section from '../utilities/Section.js';
import EmailRow from '../utilities/EmailRow.js';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../components/firebase.js';

function EmailList() {
    const [emails, setEmails] = useState([]);

    const colRef = collection(db, 'emails');

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(query(colRef, orderBy('timestamp', 'desc')));

            setEmails(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })));
        };

        fetchData();
    }, [colRef]);

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
                {emails && emails.map(({ id, data: { to, subject, message, timestamp } }) => {
                    return (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EmailList;
