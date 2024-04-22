import { useEffect, useState } from 'react';
import { GeneralUtility } from '../../../utils/general';

const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userInfo = GeneralUtility.getUserInfo();
        setUser(userInfo);
    }, []);

    return (
        <div>Wellcome {user.email} - <span className='font-bold capitalize'>{user.role}</span></div>
    );
};

export default Dashboard;