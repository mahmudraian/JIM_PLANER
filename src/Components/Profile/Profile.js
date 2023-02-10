import React from 'react';
import '../Profile/Profile.css';

const Profile = () => {
    return (
        <div>
            <div>
            <div className='profile'>
                <div>
                <img src='https://i.ibb.co/gMKtWbs/63.jpg' alt=''></img>
                </div>
                   <div>
                    <h1>Mahmud Raian</h1>
                     <p>Dhaka,Bangladesh</p>
                    </div>
                    
                    </div>
                    <div className='biodata'>
                        <p className='bio'><b>  75</b>kg Weight</p>
                        <p className='bio'> <b>6.5</b> Height</p>
                        <p className='bio'> <b>25</b>yrs Age</p>
                    </div>

            </div>
        </div>
    );
};

export default Profile;