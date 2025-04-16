// API utility for handling base URL configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

// Default fetch options for all API calls
export const defaultFetchOptions: RequestInit = {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://portfolio-frontend-bp3c.onrender.com'
    },
    mode: 'cors'
};

export const getApiUrl = (endpoint: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${API_BASE_URL}/${cleanEndpoint}`;
};

// Helper function to make API calls
export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
    const url = getApiUrl(endpoint);
    const fetchOptions = {
        ...defaultFetchOptions,
        ...options,
        headers: {
            ...defaultFetchOptions.headers,
            ...options.headers
        }
    };
    
    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
}; 