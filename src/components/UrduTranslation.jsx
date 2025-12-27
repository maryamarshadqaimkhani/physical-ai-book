import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const UrduTranslation = ({ children }) => {
  const [isUrdu, setIsUrdu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Simple English to Urdu translation mapping for common terms
  // In a real implementation, this would connect to a translation API
  const translateToUrdu = (text) => {
    // This is a simplified example - in a real app, this would use a proper translation API
    const translationMap = {
      'Physical AI': 'فزکل ای آئی',
      'Humanoid Robotics': 'ہیومنوائڈ روبوٹکس',
      'Introduction': 'تعارف',
      'Sensing': 'احساس',
      'Actuation': 'عمل',
      'Control': 'کنٹرول',
      'Learning': 'سیکھنا',
      'Architecture': 'تعمیر',
      'Ethics': 'اخلاقیات',
      'Future': 'مستقبل',
      'Conclusion': 'خاتمہ',
      'Chapter': 'باب',
      'Quiz': 'کوئز',
      'Summary': 'خلاصہ',
      'Reflection': 'تجسم',
      'Personalization': ' ذاتی نوعیت',
      'Translation': 'ترجمہ',
      'Welcome to the AI-Native Interactive Textbook': 'AI نیٹو انٹرایکٹو ٹیکسٹ بک میں خوش آمدید',
      'This book provides an intuitive understanding': 'یہ کتاب ایک سمجھدار تفہیم فراہم کرتی ہے',
      'What Is Physical AI?': 'فزکل ای آئی کیا ہے؟',
      'Sensing the Physical World': 'فزکل دنیا کا احساس',
      'Actuation & Motion': 'عمل اور حرکت',
      'Control vs Learning': 'کنٹرول بمقابلہ سیکھنا',
      'Robot Learning': 'روبوٹ سیکھنا',
      'Humanoid Architectures': 'ہیومنوائڈ تعمیرات',
      'Future & Ethics': 'مستقبل اور اخلاقیات',
      'An AI-Native Interactive Textbook': 'ایک ای آئی نیٹو انٹرایکٹو ٹیکسٹ بک',
      'Physical AI represents a paradigm shift': 'فزکل ای آئی ایک نمونہ شفٹ کی نمائندگی کرتا ہے',
      'Robots need to perceive their environment': 'روبوٹس کو اپنے ماحول کا ادراک کرنے کی ضرورت ہے',
      'Actuation is the process': 'عمل ایک عمل ہے',
      'One of the fundamental challenges': 'بنیادی چیلنجز میں سے ایک',
      'Robot learning is the process': 'روبوٹ سیکھنا عمل ہے',
      'Humanoid robots are designed': 'ہیومنوائڈ روبوٹس کو تیار کیا گیا ہے',
      'As Physical AI and humanoid robotics advance': 'جیسے جیسے فزکل ای آئی اور ہیومنوائڈ روبوٹکس ترقی کر رہے ہیں',
      'As we conclude this exploration': 'جیسے ہم اس کی تلاش کو نتیجہ اخیر دیتے ہیں',
      'The ability to perceive': 'ادراک کرنے کی صلاحیت',
      'Modern Physical AI systems': 'جدید فزکل ای آئی سسٹم',
      'Creating robots that mimic': 'ایسے روبوٹس تیار کرنا جو نقل کریں',
      'Future possibilities': 'مستقبل کی ممکنہ صورتیں',
      'Ethical considerations': 'اخلاقیات کے مسائل',
      'Key takeaways': 'اہم نکات',
      'The path forward': 'آگے بڑھنے کا راستہ',
    };

    let translatedText = text;
    Object.entries(translationMap).forEach(([english, urdu]) => {
      translatedText = translatedText.replace(new RegExp(english, 'g'), urdu);
    });

    return translatedText;
  };

  const handleTranslation = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsUrdu(!isUrdu);
    setIsLoading(false);
  };

  return (
    <BrowserOnly>
      {() => (
        <div className="urdu-translation">
          <style jsx>{`
            .urdu-translation {
              margin: 20px 0;
            }
            .translation-btn {
              padding: 10px 20px;
              background-color: #4caf50;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
            }
            .translation-btn:hover {
              background-color: #45a049;
            }
            .translation-btn:disabled {
              background-color: #cccccc;
              cursor: not-allowed;
            }
            .loading {
              margin-left: 10px;
              font-size: 12px;
            }
            .urdu-content {
              direction: rtl;
              text-align: right;
              font-size: 18px;
              line-height: 1.6;
              margin-top: 15px;
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #f9f9f9;
            }
            .english-content {
              margin-top: 15px;
            }
          `}</style>
          
          <button 
            className="translation-btn" 
            onClick={handleTranslation}
            disabled={isLoading}
          >
            {isUrdu ? 'انگریزی میں دیکھیں' : 'اردو میں ترجمہ کریں'} {/* Switch between Urdu and English */}
          </button>
          
          {isLoading && <span className="loading">Loading...</span>}
          
          {isUrdu ? (
            <div className="urdu-content">
              {translateToUrdu(children)}
            </div>
          ) : (
            <div className="english-content">
              {children}
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default UrduTranslation;