import axios, { AxiosResponse } from 'axios';
import CryptoJS from 'crypto-js';
import { getEnv, getRequiredEnv } from './env';

// Type definitions
interface AuthConfig {
  time: number;
  token: string;
}

interface SubscribePayload {
  lists: string | undefined;
  email: string;
  full_name: string;
  tags: string;
}

interface SubscribeResponse {
  success: boolean;
  message?: string;
  data?: any;
}

const getConfig = (): AuthConfig => {
  const time = Math.floor(new Date().getTime() / 1000);
  const username = getEnv('NEXT_PUBLIC_KE_USERNAME') || '';
  const token = getEnv('NEXT_PUBLIC_KE_TOKEN') || '';
  
  if (!username || !token) {
    throw new Error('Missing required authentication credentials');
  }
  
  const generated_token = CryptoJS.HmacSHA256(
    `${username}::${token}::${time}`,
    token,
  );
  
  return { 
    time, 
    token: generated_token.toString(CryptoJS.enc.Hex) 
  };
};

// Create axios instance with interceptors
const apiClient = axios.create({
  baseURL: `${getEnv('NEXT_PUBLIC_CORS_WORKER')}/?${getEnv('NEXT_PUBLIC_KE_API')}`,
});

// Request interceptor to add fresh headers
apiClient.interceptors.request.use(
  (config) => {
    const authConfig = getConfig();
    config.headers = {
      ...config.headers,
      'Auth-Id': getEnv('NEXT_PUBLIC_KE_USERNAME') || '',
      'Auth-Token': authConfig.token,
      'Timestamp': authConfig.time.toString(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for common error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.request);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export async function subscribeForm(payload: SubscribePayload): Promise<AxiosResponse<SubscribeResponse>> {
  try {
    return await apiClient.post<SubscribeResponse>('/subscriber', payload);
  } catch (error) {
    // Re-throw with more context
    throw new Error(`Failed to subscribe: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Export types for use in components
export type { SubscribePayload, SubscribeResponse };