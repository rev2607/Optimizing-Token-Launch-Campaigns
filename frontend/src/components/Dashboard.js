import React, { useEffect, useState } from 'react';
import CampaignList from './CampaignList';

function Dashboard() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/campaigns')
            .then(response => response.json())
            .then(data => setCampaigns(data));
    }, []);

    return (
        <div>
            <h2>Live Token Campaigns</h2>
            <CampaignList campaigns={campaigns} />
        </div>
    );
}

export default Dashboard;
