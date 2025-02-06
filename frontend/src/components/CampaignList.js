import React from 'react';

function CampaignList({ campaigns }) {
    return (
        <div>
            {campaigns.length === 0 ? (
                <p>No campaigns available</p>
            ) : (
                <ul>
                    {campaigns.map(campaign => (
                        <li key={campaign._id}>
                            <strong>{campaign.name}</strong> - {campaign.tokenSymbol}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CampaignList;
