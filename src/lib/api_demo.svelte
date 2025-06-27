<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastAPI Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, ##d5c4b2 0%, ##d5c4b9 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        .stats {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 30px;
            color: white;
            text-align: center;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }

        .stat-item {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
        }

        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .api-sections {
            display: grid;
            gap: 30px;
        }

        .api-section {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .api-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .section-header {
            background: linear-gradient(135deg, #283142 60%, #fae6cb 100%);
            color: white;
            padding: 25px 30px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s ease;
        }

        .section-header:hover {
            background: linear-gradient(115deg, #283142 60%, #fae6cb 100%);
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .section-count {
            background: rgba(255,255,255,0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }

        .section-content {
            padding: 30px;
            max-height: none;
            overflow: visible;
        }

        .route-item {
            background: #f8f9fa;
            border-radius: 12px;
            margin-bottom: 15px;
            overflow: hidden;
            border: 1px solid #e9ecef;
            transition: all 0.3s ease;
        }

        .route-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .route-header {
            display: flex;
            align-items: center;
            padding: 20px;
            background: white;
            border-bottom: 1px solid #e9ecef;
        }

        .method-badge {
            padding: 8px 16px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
            font-size: 0.85rem;
            min-width: 80px;
            text-align: center;
            margin-right: 20px;
        }

        .route-path {
            font-family: 'Courier New', monospace;
            font-size: 1.1rem;
            font-weight: 500;
            color: #495057;
            flex-grow: 1;
        }

        .route-description {
            padding: 20px;
            color: #6c757d;
            font-size: 0.95rem;
            line-height: 1.5;
            background: #f8f9fa;
        }

        .search-container {
            background: white;
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .search-input {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .hidden {
            display: none !important;
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .route-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .method-badge {
                margin-right: 0;
            }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">

    
        <div class="api-sections">
            <div class="api-section">
                <div class="section-header">
                    <div class="section-title">Backend for AI lead Database Webapp /api</div>
                    <div class="section-count">36 endpoints</div>
                </div>
                <div class="section-content">
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/auth/register</div>
                        </div>
                        <div class="route-description">
                            Register new user with email and password
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/auth/login</div>
                        </div>
                        <div class="route-description">
                            Authenticate user and return access token
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/auth/refresh</div>
                        </div>
                        <div class="route-description">
                            Refresh expired access token using refresh token
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/auth/logout</div>
                        </div>
                        <div class="route-description">
                            Logout user and invalidate tokens
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/users/me</div>
                        </div>
                        <div class="route-description">
                            Get current authenticated user profile
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #f93e3e">DELETE</div>
                            <div class="route-path">/api/users/me</div>
                        </div>
                        <div class="route-description">
                            Delete current user account and all associated data
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns</div>
                        </div>
                        <div class="route-description">
                            Retrieve all campaigns for the authenticated user
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/campaigns/new</div>
                        </div>
                        <div class="route-description">
                            Create a new outreach campaign with specified parameters
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/{campaign_id}</div>
                        </div>
                        <div class="route-description">
                            Get detailed information about a specific campaign
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #f93e3e">DELETE</div>
                            <div class="route-path">/api/campaigns/{campaign_id}</div>
                        </div>
                        <div class="route-description">
                            Delete a campaign and all associated data
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/export</div>
                        </div>
                        <div class="route-description">
                            Export campaign data in various formats
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/updates/stream</div>
                        </div>
                        <div class="route-description">
                            Real-time stream of campaign updates and progress
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/data-pipeline/company</div>
                        </div>
                        <div class="route-description">
                            Process and enrich data for a single company
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/data-pipeline/industry</div>
                        </div>
                        <div class="route-description">
                            Process and analyze data for an entire industry
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/data-pipeline/status/{task_id}</div>
                        </div>
                        <div class="route-description">
                            Check the status of a data processing task
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/data-pipeline/company/{company_id}/status</div>
                        </div>
                        <div class="route-description">
                            Get processing status for a specific company
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/data-pipeline/industry/{industry}/{country}/status</div>
                        </div>
                        <div class="route-description">
                            Get processing status for industry data
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/data-pipeline/stats</div>
                        </div>
                        <div class="route-description">
                            Get comprehensive statistics about data pipeline performance
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/chat/stream</div>
                        </div>
                        <div class="route-description">
                            Stream real-time chat messages and responses
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/chat/sessions/{campaign_id}/stats</div>
                        </div>
                        <div class="route-description">
                            Get analytics and statistics for chat sessions
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/chat/sessions/{campaign_id}/messages</div>
                        </div>
                        <div class="route-description">
                            Retrieve chat message history for a campaign
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/chat/sessions/{campaign_id}/cleanup</div>
                        </div>
                        <div class="route-description">
                            Clean up and archive chat session data
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/payments/subscription-status</div>
                        </div>
                        <div class="route-description">
                            Get current subscription status and plan details
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/payments/create-checkout-session</div>
                        </div>
                        <div class="route-description">
                            Create a new Stripe checkout session for subscription
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/payments/create-portal-session</div>
                        </div>
                        <div class="route-description">
                            Create customer portal session for subscription management
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/payments/webhook</div>
                        </div>
                        <div class="route-description">
                            Handle Stripe webhook events for payment processing
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/admin/set-manual-override</div>
                        </div>
                        <div class="route-description">
                            Set manual subscription override for administrative purposes
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/health</div>
                        </div>
                        <div class="route-description">
                            Health check endpoint to verify API status
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/versions</div>
                        </div>
                        <div class="route-description">
                            Create a new version of an existing campaign
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/revert</div>
                        </div>
                        <div class="route-description">
                            Revert campaign to a previous version
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/revert-from-message</div>
                        </div>
                        <div class="route-description">
                            Revert campaign based on specific message content
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #49cc90">POST</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/remove-entities</div>
                        </div>
                        <div class="route-description">
                            Remove specific entities from campaign version
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/data</div>
                        </div>
                        <div class="route-description">
                            Get campaign data with version information
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/{campaign_id}/versions/compare/{version_id_1}/{version_id_2}</div>
                        </div>
                        <div class="route-description">
                            Compare two different campaign versions
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #f93e3e">DELETE</div>
                            <div class="route-path">/api/campaigns/{campaign_id}</div>
                        </div>
                        <div class="route-description">
                            Delete campaign with versioning support
                        </div>
                    </div>
                    
                    <div class="route-item">
                        <div class="route-header">
                            <div class="method-badge" style="background-color: #61affe">GET</div>
                            <div class="route-path">/api/campaigns/</div>
                        </div>
                        <div class="route-description">
                            Get all campaigns with versioning information
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
        