import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AutoQuiz = ({ chapterTitle }) => {
  // Sample quizzes for each chapter
  const quizzes = {
    'Introduction to Physical AI & Humanoid Robotics': {
      multipleChoice: [
        {
          question: 'What is the primary focus of Physical AI?',
          options: [
            'Digital data processing',
            'Interaction with the physical world',
            'Text analysis',
            'Image recognition'
          ],
          answer: 1
        },
        {
          question: 'How long is the entire textbook designed to be read?',
          options: [
            'Under 30 minutes',
            'Under 45 minutes',
            'Under 60 minutes',
            'Under 90 minutes'
          ],
          answer: 1
        },
        {
          question: 'What approach does this textbook take to content delivery?',
          options: [
            'Complex equations and code',
            'Intuitive explanations with real-world examples',
            'Purely theoretical concepts',
            'Historical perspectives only'
          ],
          answer: 1
        }
      ],
      reflection: 'How do you think Physical AI will change the way humans interact with machines in the next decade?'
    },
    'What Is Physical AI?': {
      multipleChoice: [
        {
          question: 'Which of these is NOT a key characteristic of Physical AI?',
          options: [
            'Embodiment',
            'Real-time processing',
            'Virtual environment operation',
            'Uncertainty management'
          ],
          answer: 2
        },
        {
          question: 'What is essential for the development of humanoid robots?',
          options: [
            'Advanced gaming capabilities',
            'Understanding of physics and AI',
            'High-speed internet',
            'Complex programming languages'
          ],
          answer: 1
        },
        {
          question: 'Physical AI systems must understand:',
          options: [
            'Only digital information',
            'The physics of objects and social contexts',
            'Only human emotions',
            'Only mechanical systems'
          ],
          answer: 1
        }
      ],
      reflection: 'How might advances in Physical AI change the capabilities of household robots in the next five years?'
    },
    'Sensing the Physical World': {
      multipleChoice: [
        {
          question: 'What is sensor fusion?',
          options: [
            'Using a single sensor for all tasks',
            'Combining data from multiple sensors',
            'Creating new sensor types',
            'Removing sensors from robots'
          ],
          answer: 1
        },
        {
          question: 'Which of these is NOT a category of robot sensors?',
          options: [
            'Vision sensors',
            'Tactile sensors',
            'Proprioceptive sensors',
            'Emotional sensors'
          ],
          answer: 3
        },
        {
          question: 'What is a challenge in physical sensing?',
          options: [
            'Too much accuracy',
            'Noise and uncertainty in readings',
            'Sensors being too reliable',
            'Sensors being too fast'
          ],
          answer: 1
        }
      ],
      reflection: 'How might advances in sensor technology change the capabilities of household robots in the next five years?'
    },
    'Actuation & Motion': {
      multipleChoice: [
        {
          question: 'What are actuators in robotics?',
          options: [
            'Sensors that detect movement',
            'The "muscles" that create movement',
            'Control systems for robots',
            'Power sources for robots'
          ],
          answer: 1
        },
        {
          question: 'Which is NOT a type of actuator?',
          options: [
            'Electric motors',
            'Hydraulic actuators',
            'Pneumatic actuators',
            'Optical actuators'
          ],
          answer: 3
        },
        {
          question: 'What is impedance control?',
          options: [
            'Controlling robot position only',
            'Controlling how the robot responds to external forces',
            'Controlling robot speed only',
            'Controlling robot sensors'
          ],
          answer: 1
        }
      ],
      reflection: 'How might biomimetic actuator designs change the way robots interact with humans in the future?'
    },
    'Control vs Learning': {
      multipleChoice: [
        {
          question: 'What is an advantage of traditional control systems?',
          options: [
            'High adaptability',
            'Predictability and safety',
            'No need for models',
            'Low computational requirements'
          ],
          answer: 1
        },
        {
          question: 'What is a limitation of learning systems?',
          options: [
            'Too much predictability',
            'Difficulty with safety guarantees',
            'Excessive computational efficiency',
            'Over-reliance on models'
          ],
          answer: 1
        },
        {
          question: 'What do hybrid approaches aim to combine?',
          options: [
            'Two different learning methods',
            'Two different control methods',
            'Strengths of control and learning',
            'Multiple sensors'
          ],
          answer: 2
        }
      ],
      reflection: 'How might the balance between control and learning evolve as robots become more integrated into human environments?'
    },
    'Robot Learning': {
      multipleChoice: [
        {
          question: 'What is reinforcement learning?',
          options: [
            'Learning by observing experts',
            'Learning through trial and error with rewards',
            'Learning from labeled examples',
            'Learning without any feedback'
          ],
          answer: 1
        },
        {
          question: 'What is the "reality gap"?',
          options: [
            'Difference between simulation and reality',
            'Difference between robots and humans',
            'Difference between learning and control',
            'Difference between sensors'
          ],
          answer: 0
        },
        {
          question: 'What is a challenge in robot learning?',
          options: [
            'Too much safety during learning',
            'Sample efficiency',
            'Too much generalization',
            'Overly efficient algorithms'
          ],
          answer: 1
        }
      ],
      reflection: 'How might foundation models change the landscape of robot learning in the coming years?'
    },
    'Humanoid Architectures': {
      multipleChoice: [
        {
          question: 'What does DOF stand for in robotics?',
          options: [
            'Degree of Freedom',
            'Dynamic Operating Function',
            'Digital Output Format',
            'Design Optimization Framework'
          ],
          answer: 0
        },
        {
          question: 'Which is NOT a component of humanoid robot mechanical structure?',
          options: [
            'Torso',
            'Head',
            'Wheels',
            'Feet'
          ],
          answer: 2
        },
        {
          question: 'What is a design challenge for humanoid robots?',
          options: [
            'Too much stability',
            'Balance and stability',
            'Excessive speed',
            'Overly simple design'
          ],
          answer: 1
        }
      ],
      reflection: 'What ethical considerations should be taken into account as humanoid robots become more human-like in appearance and behavior?'
    },
    'Future & Ethics of Physical AI': {
      multipleChoice: [
        {
          question: 'What is an ethical consideration in Physical AI?',
          options: [
            'Too much efficiency',
            'Safety and reliability',
            'Excessive accuracy',
            'Overly simple design'
          ],
          answer: 1
        },
        {
          question: 'What is the uncanny valley?',
          options: [
            'A valley where robots are tested',
            'A phenomenon where humanoid robots elicit eeriness',
            'A valley with many sensors',
            'A type of robot actuator'
          ],
          answer: 1
        },
        {
          question: 'What is a design principle for ethical AI?',
          options: [
            'Maximizing computational complexity',
            'Transparency and human-centered design',
            'Minimizing sensor use',
            'Reducing actuator count'
          ],
          answer: 1
        }
      ],
      reflection: 'How can society ensure that the benefits of Physical AI are distributed equitably while minimizing potential negative impacts?'
    },
    'Conclusion': {
      multipleChoice: [
        {
          question: 'What does Physical AI represent?',
          options: [
            'A shift to AI systems that interact with the physical world',
            'A focus on digital systems only',
            'A return to mechanical systems',
            'A type of computer programming'
          ],
          answer: 0
        },
        {
          question: 'What are active research areas in Physical AI?',
          options: [
            'Only software development',
            'More dexterous manipulation and better human-robot collaboration',
            'Only hardware improvements',
            'Only theoretical research'
          ],
          answer: 1
        },
        {
          question: 'What is a key challenge in humanoid robot design?',
          options: [
            'Making them too efficient',
            'Balance, safety, and human-robot interaction',
            'Making them too safe',
            'Excessive computational power'
          ],
          answer: 1
        }
      ],
      reflection: 'How do you envision Physical AI and humanoid robots fitting into your daily life in the next 10-20 years?'
    }
  };

  const quizData = quizzes[chapterTitle] || quizzes['Introduction to Physical AI & Humanoid Robotics'];
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.multipleChoice.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetake = () => {
    setSelectedAnswers(Array(quizData.multipleChoice.length).fill(null));
    setShowResults(false);
  };

  return (
    <BrowserOnly>
      {() => (
        <div className="auto-quiz">
          <style jsx>{`
            .auto-quiz {
              margin: 20px 0;
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #fff8f0;
            }
            .quiz-title {
              font-weight: bold;
              margin-bottom: 15px;
              color: #f57c00;
            }
            .question {
              margin: 15px 0;
            }
            .question-text {
              font-weight: 500;
              margin-bottom: 8px;
            }
            .options {
              list-style: none;
              padding: 0;
            }
            .option {
              margin: 5px 0;
              padding: 5px;
            }
            .option-input {
              margin-right: 8px;
            }
            .submit-btn {
              margin-top: 15px;
              padding: 8px 15px;
              background-color: #f57c00;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .submit-btn:hover {
              background-color: #e65100;
            }
            .results {
              margin-top: 15px;
              padding: 10px;
              border-radius: 4px;
            }
            .correct {
              background-color: #e8f5e9;
              color: #2e7d32;
            }
            .incorrect {
              background-color: #ffebee;
              color: #c62828;
            }
            .retake-btn {
              margin-top: 10px;
              padding: 6px 12px;
              background-color: #1a237e;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .retake-btn:hover {
              background-color: #303f9f;
            }
            .reflection {
              margin-top: 20px;
              padding: 10px;
              border-left: 3px solid #1a237e;
              background-color: #f5f5f5;
            }
            .reflection-title {
              font-weight: bold;
              margin-bottom: 8px;
            }
          `}</style>
          <div className="quiz-title">Chapter Quiz</div>
          
          {quizData.multipleChoice.map((q, qIndex) => (
            <div key={qIndex} className="question">
              <div className="question-text">{q.question}</div>
              <ul className="options">
                {q.options.map((option, oIndex) => (
                  <li key={oIndex} className="option">
                    <input
                      type="radio"
                      id={`q${qIndex}-o${oIndex}`}
                      name={`question-${qIndex}`}
                      className="option-input"
                      checked={selectedAnswers[qIndex] === oIndex}
                      onChange={() => handleAnswerSelect(qIndex, oIndex)}
                      disabled={showResults}
                    />
                    <label htmlFor={`q${qIndex}-o${oIndex}`}>{option}</label>
                  </li>
                ))}
              </ul>
              {showResults && (
                <div className={`results ${selectedAnswers[qIndex] === q.answer ? 'correct' : 'incorrect'}`}>
                  {selectedAnswers[qIndex] === q.answer ? '✓ Correct!' : `✗ Incorrect. The correct answer is: ${q.options[q.answer]}`}
                </div>
              )}
            </div>
          ))}
          
          <button className="submit-btn" onClick={handleSubmit} disabled={showResults}>
            Submit Answers
          </button>
          
          {showResults && (
            <button className="retake-btn" onClick={handleRetake}>
              Retake Quiz
            </button>
          )}
          
          <div className="reflection">
            <div className="reflection-title">Reflection Question:</div>
            <div>{quizData.reflection}</div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default AutoQuiz;