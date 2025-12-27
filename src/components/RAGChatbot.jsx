import React, { useState, useRef, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const RAGChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant for the Physical AI textbook. Ask me anything about the content!", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple RAG logic - in a real implementation, this would connect to a vector database
  const getResponse = (userQuery) => {
    // Convert query to lowercase for easier matching
    const query = userQuery.toLowerCase();

    // Define some basic responses based on keywords
    if (query.includes('physical ai') || query.includes('what is physical ai')) {
      return {
        text: "Physical AI represents a paradigm shift in artificial intelligence, where machines are designed to interact with the physical world in ways that were previously thought to require human-like understanding and dexterity. It's about creating systems that can perceive, understand, and interact with their environment in meaningful ways. This foundation is essential for the development of humanoid robots that can truly assist and collaborate with humans. (Based on Chapter: What Is Physical AI?)"
      };
    } else if (query.includes('sens') || query.includes('sensor') || query.includes('perceiv')) {
      return {
        text: "Robots use multiple types of sensors to gather information about their environment: Vision Sensors (Cameras, Depth Sensors, Thermal Cameras), Tactile Sensors (Force/Torque Sensors, Tactile Skin, Pressure Sensors), and Proprioceptive Sensors (IMUs, Encoders, Gyroscopes). Modern robots combine data from multiple sensors in a process called sensor fusion to create a comprehensive understanding of their environment. (Based on Chapter: Sensing the Physical World)"
      };
    } else if (query.includes('actuat') || query.includes('motion') || query.includes('mov')) {
      return {
        text: "Actuators are the 'muscles' of a robot that convert control signals into physical movement. Types include Electric Motors (Servo, Stepper, DC), Hydraulic Actuators, Pneumatic Actuators, and Emerging Technologies (Shape Memory Alloys, Electroactive Polymers). Actuation is the bridge between digital control signals and physical motion. (Based on Chapter: Actuation & Motion)"
      };
    } else if (query.includes('control') && query.includes('learn')) {
      return {
        text: "The choice between control and learning is not binary but rather a spectrum of approaches. Traditional control systems offer predictability and safety but require accurate models. Learning systems provide adaptability but may lack safety guarantees. Modern Physical AI systems increasingly use hybrid methods that combine the best of both worlds: the safety and efficiency of control systems with the adaptability of learning systems. (Based on Chapter: Control vs Learning)"
      };
    } else if (query.includes('robot learn') || query.includes('learn')) {
      return {
        text: "Robot learning enables machines to acquire new capabilities through experience rather than explicit programming. Types include Reinforcement Learning (trial and error with rewards), Imitation Learning (observing expert demonstrations), and Self-Supervised Learning. While challenging due to safety, efficiency, and generalization requirements, learning approaches are essential for creating robots that can adapt to the complexity of the real world. (Based on Chapter: Robot Learning)"
      };
    } else if (query.includes('humanoid') || query.includes('architect')) {
      return {
        text: "Humanoid robots are designed to mimic human form and function, offering unique advantages for interaction in human environments. Their architecture involves complex integration of mechanical, electrical, and software systems. Key components include Actuation Systems (Series Elastic Actuators, Variable Stiffness Actuators), Sensory Systems (Vision, Tactile, Inertial), and Control Systems (Central Pattern Generators, Balance Controllers). (Based on Chapter: Humanoid Architectures)"
      };
    } else if (query.includes('ethic') || query.includes('future')) {
      return {
        text: "As Physical AI advances, we face ethical considerations around safety, privacy, social impact, and human dignity. Design principles for ethical AI include Transparency, Human-Centered Design, and Value Alignment. The future of Physical AI holds tremendous potential to enhance human capabilities, but realizing this potential requires careful attention to ethical considerations and proactive development of appropriate frameworks. (Based on Chapter: Future & Ethics of Physical AI)"
      };
    } else if (query.includes('conclus') || query.includes('summary') || query.includes('overview')) {
      return {
        text: "Physical AI represents a fundamental shift from digital-only AI systems to machines that can perceive, interact with, and learn from the physical world. Key components include sensing capabilities, actuation systems, and a balance between control and learning approaches. As these systems become more sophisticated, addressing ethical concerns becomes increasingly important. (Based on Chapter: Conclusion)"
      };
    } else if (query.includes('help') || query.includes('hello') || query.includes('hi')) {
      return {
        text: "I'm here to help you understand the Physical AI textbook content! You can ask me about specific topics like sensing, actuation, control vs learning, robot learning, humanoid architectures, ethics, or anything else from the book. I'll provide answers based on the textbook content and cite the relevant chapters."
      };
    } else {
      return {
        text: "This is not covered in the book yet. I can only answer questions based on the content in the Physical AI textbook. Feel free to ask about topics like Physical AI concepts, sensing, actuation, control vs learning, robot learning, humanoid architectures, or ethics."
      };
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get bot response
    const botResponse = getResponse(inputText);
    const responseMessage = {
      id: messages.length + 2,
      text: botResponse.text,
      sender: 'bot'
    };

    setMessages(prev => [...prev, responseMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <BrowserOnly>
      {() => (
        <div className="rag-chatbot">
          <style jsx>{`
            .rag-chatbot {
              margin: 20px 0;
              border: 1px solid #ddd;
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              height: 500px;
              max-width: 800px;
              margin: 20px auto;
            }
            .chat-header {
              background-color: #4285f4;
              color: white;
              padding: 12px 16px;
              font-weight: bold;
            }
            .chat-messages {
              flex: 1;
              padding: 16px;
              overflow-y: auto;
              display: flex;
              flex-direction: column;
              background-color: #f9f9f9;
            }
            .message {
              margin-bottom: 12px;
              padding: 8px 12px;
              border-radius: 18px;
              max-width: 80%;
              word-wrap: break-word;
            }
            .user-message {
              align-self: flex-end;
              background-color: #4285f4;
              color: white;
              border-bottom-right-radius: 4px;
            }
            .bot-message {
              align-self: flex-start;
              background-color: #e8eaed;
              color: #202124;
              border-bottom-left-radius: 4px;
            }
            .chat-input-area {
              display: flex;
              padding: 12px;
              background-color: white;
              border-top: 1px solid #ddd;
            }
            .chat-input {
              flex: 1;
              padding: 10px 12px;
              border: 1px solid #ddd;
              border-radius: 18px;
              resize: none;
              outline: none;
              font-family: inherit;
              font-size: 14px;
              max-height: 100px;
              overflow-y: auto;
            }
            .chat-input:focus {
              border-color: #4285f4;
            }
            .send-button {
              margin-left: 8px;
              padding: 10px 16px;
              background-color: #4285f4;
              color: white;
              border: none;
              border-radius: 18px;
              cursor: pointer;
              font-weight: bold;
            }
            .send-button:hover {
              background-color: #3367d6;
            }
            .send-button:disabled {
              background-color: #cccccc;
              cursor: not-allowed;
            }
            .loading {
              align-self: flex-start;
              padding: 8px 12px;
              background-color: #e8eaed;
              color: #202124;
              border-radius: 18px;
              font-style: italic;
            }
          `}</style>
          
          <div className="chat-header">
            Physical AI Textbook Assistant
          </div>
          
          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message loading">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input-area">
            <textarea
              className="chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question about the textbook content..."
              rows="1"
            />
            <button 
              className="send-button" 
              onClick={handleSend}
              disabled={isLoading || inputText.trim() === ''}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default RAGChatbot;