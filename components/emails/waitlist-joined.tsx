import React from 'react';
import { Html, Head, Preview, Body, Container, Section, Text, Link, Hr } from '@react-email/components';

const WaitlistJoinedEmail = () => {
    return (
        <Html>
            <Head />
            <Preview>You've successfully joined the Trace app waitlist!</Preview>
            <Body style={main}>
                <Container style={{ ...container, background: 'linear-gradient(to bottom right, #e9d5ff, #c3dafe)' }}>
                    <Section style={section}>
                        <Text style={{ ...heading, color: '#3730a3' }}>Welcome to Trace!</Text>
                        <Hr style={{ borderColor: '#3730a3' }} />
                        <Text style={{ ...paragraph, color: '#4f46e5' }}>
                            Thank you for joining the waitlist for the Trace app. We're excited to have you on board!
                        </Text>
                        <Text style={{ ...paragraph, color: '#4f46e5' }}>
                            Get ready to revamp your task tracking game with Trace and discover your true productivity patterns. Stay tuned for more updates and be the first to experience the full potential of Trace.
                        </Text>
                        <Text style={{ ...paragraph, color: '#4f46e5' }}>
                            We will notify you as soon as we are ready to beta test this application.
                        </Text>
                        <Text style={{ ...paragraph, color: '#3730a3' }}>
                            — The Trace Team
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const section = {
    padding: '20px',
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333333',
};

const paragraph = {
    fontSize: '16px',
    color: '#666666',
    lineHeight: '1.5',
    margin: '10px 0',
};

const link = {
    color: '#1a73e8',
    textDecoration: 'none',
};

export default WaitlistJoinedEmail;