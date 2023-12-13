import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, Refresh, MoreVert } from '@mui/icons-material';
import './EmailList.css';

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

                <div className='emailList__settingsRight'></div>

            </div>
        </div>
    );
}

export default EmailList;
