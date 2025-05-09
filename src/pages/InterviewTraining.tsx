import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, ArrowRight, Brain } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is your greatest strength?",
    options: [
      "I'm a perfectionist and sometimes work too hard",
      "I have excellent problem-solving skills and can adapt quickly to new situations",
      "I'm the best at everything I do",
      "I don't have any notable strengths"
    ],
    correctAnswer: 1,
    explanation: "Focus on relevant, specific strengths and provide concrete examples. Avoid clichés and overly modest or arrogant responses.",
    category: "Personal"
  },
  {
    id: 2,
    question: "Where do you see yourself in 5 years?",
    options: [
      "I haven't thought about it",
      "In your position",
      "I hope to have grown within the company, taken on more responsibilities, and developed new skills",
      "Retired on a beach"
    ],
    correctAnswer: 2,
    explanation: "Show ambition and commitment while being realistic. Align your goals with potential growth within the company.",
    category: "Career Goals"
  },
  {
    id: 3,
    question: "Why should we hire you?",
    options: [
      "Because I really need this job",
      "I'm better than all other candidates",
      "My skills and experience align well with the role, and I'm passionate about contributing to your company's success",
      "I don't know"
    ],
    correctAnswer: 2,
    explanation: "Highlight your relevant skills and enthusiasm while showing how you can add value to the company.",
    category: "Value Proposition"
  },
  {
    id: 4,
    question: "How do you handle conflict in the workplace?",
    options: [
      "I avoid all conflicts",
      "I immediately escalate to management",
      "I address conflicts directly through open communication and seek win-win solutions",
      "I argue until I win"
    ],
    correctAnswer: 2,
    explanation: "Show maturity in conflict resolution through communication, professionalism, and a solution-oriented approach.",
    category: "Behavioral"
  },
  {
    id: 5,
    question: "What's your biggest weakness?",
    options: [
      "I have no weaknesses",
      "I'm terrible at everything",
      "I'm working on improving my public speaking skills by taking courses and practicing regularly",
      "I'm too perfect"
    ],
    correctAnswer: 2,
    explanation: "Be honest about an actual weakness, but focus on the steps you're taking to improve.",
    category: "Personal"
  }
];

const InterviewTraining = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Interview Training</h1>
            <p className="text-gray-300">Practice common interview questions and learn the best ways to answer them.</p>
          </div>

          {!quizCompleted ? (
            <Card className="bg-light border-extraLight">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </Badge>
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    Score: {score}/{questions.length}
                  </Badge>
                </div>
                <Progress value={progress} className="mb-4" />
                <CardTitle className="text-xl text-white">{currentQuestion.question}</CardTitle>
                <CardDescription className="text-gray-400">
                  Category: {currentQuestion.category}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    {currentQuestion.options.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="outline"
                          className={`w-full text-left justify-start p-4 h-auto ${
                            selectedAnswer === index
                              ? index === currentQuestion.correctAnswer
                                ? "border-green-500 bg-green-500/10 text-green-400"
                                : "border-red-500 bg-red-500/10 text-red-400"
                              : "border-gray-600 text-gray-300 hover:bg-extraLight"
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={selectedAnswer !== null}
                        >
                          <div className="flex items-center gap-3">
                            {selectedAnswer === index && (
                              index === currentQuestion.correctAnswer ? (
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                              )
                            )}
                            {option}
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-extraLight rounded-lg border border-extraLight"
                    >
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Explanation</h3>
                          <p className="text-gray-300">{currentQuestion.explanation}</p>
                        </div>
                      </div>
                      
                      <Button
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
                        onClick={handleNextQuestion}
                      >
                        {currentQuestionIndex < questions.length - 1 ? (
                          <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
                        ) : (
                          "Complete Quiz"
                        )}
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-light border-extraLight text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Quiz Completed!</CardTitle>
                <CardDescription className="text-gray-300">
                  You scored {score} out of {questions.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    {score >= questions.length * 0.7 ? (
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    ) : score >= questions.length * 0.4 ? (
                      <AlertCircle className="h-12 w-12 text-yellow-500" />
                    ) : (
                      <XCircle className="h-12 w-12 text-red-500" />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {score >= questions.length * 0.7
                      ? "Excellent! You're well-prepared for interviews!"
                      : score >= questions.length * 0.4
                      ? "Good effort! Keep practicing to improve further."
                      : "Keep practicing! Review the explanations and try again."}
                  </p>
                </div>
                
                <Button
                  onClick={resetQuiz}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default InterviewTraining;