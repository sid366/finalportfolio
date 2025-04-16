import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchApi } from '../utils/api';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
        // Instead of using the utility, let's make a direct fetch call
        const API_URL = process.env.REACT_APP_API_URL || 'https://finalportfolio-ox2x.onrender.com';
        console.log('Using API URL:', API_URL);
        
        // Log what we're sending
        console.log('Sending form data:', {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        });
        
        const response = await fetch(`${API_URL}/api/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            })
        });
        
        // Log the response
        console.log('Response status:', response.status);
        let responseData = null;
        try {
            responseData = await response.json();
            console.log('Response data:', responseData);
        } catch (parseError) {
            console.error('Error parsing response:', parseError);
        }
        
        if (!response.ok) {
            throw new Error(responseData?.message || `Error ${response.status}: ${response.statusText}`);
        }
        
        // Reset form and show success
        setFormData(initialFormData);
        setSuccess(true);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    } catch (err: any) {
        console.error('Form submission error:', err);
        setSuccess(false);
        setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT
      </PageTitle>
      
      <ContentWrapper>
        <ContactInfo>
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>siddharth0471s@gmail.com</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Phone</InfoLabel>
            <InfoValue>(437)601-4756</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>LinkedIn</InfoLabel>
            <InfoValue>
              <InfoLink 
                href="https://www.linkedin.com/in/siddharth-satish-kumar/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Siddharth Satish Kumar
              </InfoLink>
            </InfoValue>
          </InfoItem>
        </ContactInfo>
        
        <FormContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FormTitle>Send a Message</FormTitle>
          
          {success && (
            <SuccessMessage>
              Your message has been sent successfully! I'll get back to you soon.
            </SuccessMessage>
          )}
          
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit" 
              disabled={submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </FormContainer>
      </ContentWrapper>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 80px 20px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 3.5rem;
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 30px;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoValue = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const InfoLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #007bff;
  }
`;

const FormContainer = styled(motion.div)`
  flex: 2;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.secondary};
  color: #333;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #ff9eb5;
  }
  
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default ContactPage; 