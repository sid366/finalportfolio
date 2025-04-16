import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getApiUrl } from '../utils/api';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

const AdminPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Check authentication on mount
  useEffect(() => {
    console.log('AdminPage mounted - checking auth');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      console.log('Not authenticated, redirecting to login');
      window.location.href = '/#login';
      return;
    }
    console.log('Auth confirmed from localStorage, proceeding to fetch messages');
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      console.log('Fetching messages...');
      setLoading(true);
      
      // Get auth token from localStorage
      const authToken = localStorage.getItem('authToken');
      
      const response = await fetch(getApiUrl('api/messages'), {
        credentials: 'include',
        headers: {
          'Authorization': authToken ? `Bearer ${authToken}` : ''
        }
      });
      
      console.log('Messages API response:', { status: response.status, ok: response.ok });
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      console.log('Messages received:', data.length);
      setMessages(data);
    } catch (err: any) {
      console.error('Error fetching messages:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const authToken = localStorage.getItem('authToken');
      
      const response = await fetch(getApiUrl(`api/messages/${id}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken ? `Bearer ${authToken}` : ''
        },
        credentials: 'include',
        body: JSON.stringify({ read: true })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update message');
      }
      
      // Update local state
      setMessages(prev => 
        prev.map(msg => 
          msg._id === id ? { ...msg, read: true } : msg
        )
      );
      
      if (selectedMessage && selectedMessage._id === id) {
        setSelectedMessage({ ...selectedMessage, read: true });
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const authToken = localStorage.getItem('authToken');
      
      const response = await fetch(getApiUrl(`api/messages/${id}`), {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Authorization': authToken ? `Bearer ${authToken}` : ''
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete message');
      }
      
      // Update local state
      setMessages(prev => prev.filter(msg => msg._id !== id));
      
      if (selectedMessage && selectedMessage._id === id) {
        setSelectedMessage(null);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleRead = async (id: string, isRead: boolean) => {
    try {
      const authToken = localStorage.getItem('authToken');
      
      const response = await fetch(getApiUrl(`api/messages/${id}`), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken ? `Bearer ${authToken}` : ''
        },
        credentials: 'include',
        body: JSON.stringify({ read: isRead })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update message');
      }
      
      // Update local state
      setMessages(prev => 
        prev.map(msg => 
          msg._id === id ? { ...msg, read: isRead } : msg
        )
      );
      
      if (selectedMessage && selectedMessage._id === id) {
        setSelectedMessage({ ...selectedMessage, read: isRead });
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      
      const response = await fetch(getApiUrl('api/auth/logout'), {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Authorization': authToken ? `Bearer ${authToken}` : ''
        }
      });
      
      // Always clear local storage on logout attempt
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      
      window.location.href = '/#home';
    } catch (error) {
      console.error('Logout failed', error);
      // Still clear storage on error
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      window.location.href = '/#home';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <AdminContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Panel
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </PageTitle>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <ContentWrapper>
        <MessagesPanel>
          <PanelTitle>Messages</PanelTitle>
          
          {loading ? (
            <LoadingText>Loading messages...</LoadingText>
          ) : messages.length === 0 ? (
            <EmptyText>No messages found</EmptyText>
          ) : (
            <MessageList>
              {messages.map(message => (
                <MessageItem 
                  key={message._id}
                  isRead={message.read}
                  isSelected={selectedMessage?._id === message._id}
                  onClick={() => setSelectedMessage(message)}
                >
                  <MessageSubject isRead={message.read}>
                    {message.subject}
                  </MessageSubject>
                  <MessagePreview>
                    From: {message.name} • {formatDate(message.createdAt)}
                  </MessagePreview>
                </MessageItem>
              ))}
            </MessageList>
          )}
        </MessagesPanel>
        
        <MessageDetailPanel>
          {selectedMessage ? (
            <>
              <MessageHeader>
                <MessageSubjectLarge>{selectedMessage.subject}</MessageSubjectLarge>
                <MessageActions>
                  {!selectedMessage.read && (
                    <ActionButton onClick={() => markAsRead(selectedMessage._id)}>
                      Mark as Read
                    </ActionButton>
                  )}
                  <ActionButton isDanger onClick={() => deleteMessage(selectedMessage._id)}>
                    Delete
                  </ActionButton>
                </MessageActions>
              </MessageHeader>
              
              <MessageMeta>
                <strong>From:</strong> {selectedMessage.name} ({selectedMessage.email})
              </MessageMeta>
              <MessageMeta>
                <strong>Date:</strong> {formatDate(selectedMessage.createdAt)}
              </MessageMeta>
              <MessageMeta>
                <strong>Status:</strong> {selectedMessage.read ? 'Read' : 'Unread'}
              </MessageMeta>
              
              <MessageBody>
                {selectedMessage.message}
              </MessageBody>
            </>
          ) : (
            <EmptyDetailText>Select a message to view details</EmptyDetailText>
          )}
        </MessageDetailPanel>
      </ContentWrapper>
    </AdminContainer>
  );
};

const AdminContainer = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 80px 20px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const MessagesPanel = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  max-height: 600px;
  overflow-y: auto;
`;

const MessageDetailPanel = styled.div`
  flex: 2;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  min-height: 500px;
`;

const PanelTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface MessageItemProps {
  isRead: boolean;
  isSelected: boolean;
}

const MessageItem = styled.div<MessageItemProps>`
  padding: 15px;
  border-radius: 5px;
  background-color: ${props => props.isSelected ? '#e6e6e6' : props.isRead ? 'white' : '#fff8f8'};
  border-left: 4px solid ${props => props.isRead ? '#ddd' : props.theme.colors.secondary};
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #e6e6e6;
  }
`;

interface MessageTextProps {
  isRead: boolean;
}

const MessageSubject = styled.h3<MessageTextProps>`
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  font-weight: ${props => props.isRead ? 'normal' : 'bold'};
`;

const MessagePreview = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #666;
  padding: 20px 0;
`;

const EmptyText = styled.p`
  text-align: center;
  color: #666;
  padding: 20px 0;
`;

const EmptyDetailText = styled.p`
  text-align: center;
  color: #666;
  padding: 100px 0;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 15px;
  }
`;

const MessageSubjectLarge = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const MessageActions = styled.div`
  display: flex;
  gap: 10px;
`;

interface ActionButtonProps {
  isDanger?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.isDanger ? '#dc3545' : props.theme.colors.secondary};
  color: ${props => props.isDanger ? 'white' : 'black'};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MessageMeta = styled.p`
  margin: 10px 0;
  font-size: 0.95rem;
  color: #444;
`;

const MessageBody = styled.div`
  margin-top: 30px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const LogoutButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  
  &:hover {
    background-color: #c82333;
  }
`;

export default AdminPage; 