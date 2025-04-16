// API utility for handling base URL configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

export const getApiUrl = (endpoint: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${API_BASE_URL}/${cleanEndpoint}`;
}; 