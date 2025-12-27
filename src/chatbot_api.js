const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'; // Use environment variable or default

export async function sendMessageToChatbot(query, context = null) {
  if (!query || typeof query !== 'string' || query.trim() === '') {
    throw new Error('Query is required and must be a non-empty string');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.detail || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data || !data.response) {
      throw new Error('Invalid response format from server');
    }

    return data.response;
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    // Re-throw with a more user-friendly message if it's a network error
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the AI assistant. Please check your connection and try again.');
    }
    throw error;
  }
}
