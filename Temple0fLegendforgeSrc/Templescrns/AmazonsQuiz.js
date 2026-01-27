import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { quizQuestions } from '../Templedta/quizQuestions';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const QUESTIONS_PER_QUIZ = 12;
const primWhite = '#FFFFFF';
const bgImage = require('../assets/images/main_background.png');

const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled.slice(0, count);
};

const AmazonsQuizScreen = () => {
  const { height } = useWindowDimensions();
  const [quizCurrentScreen, setQuizCurrentScreen] = useState('intro');
  const [quizSet, setQuizSet] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);

  const question = quizSet[current] || null;

  const onAnswerPress = index => {
    if (selected !== null) {
      return;
    }

    setSelected(index);

    if (index === question.correctIndex) {
      setCorrect(prevCorrect => prevCorrect + 1);
    }

    setTimeout(() => {
      if (current === quizSet.length - 1) {
        showResultAlert();
      } else {
        setCurrent(prevCurrent => prevCurrent + 1);
        setSelected(null);
      }
    }, 1500);
  };

  const showResultAlert = () => {
    const accuracy = Math.round((correct / quizSet.length) * 100);

    Alert.alert(
      'The Trial Ends',
      `Correct Answers: ${correct} / ${quizSet.length}\nAccuracy: ${accuracy}%`,
      [
        {
          text: 'Ok',
          onPress: () => {
            resetQuiz();
          },
        },
      ],
      { cancelable: false },
    );
  };

  const resetQuiz = () => {
    setQuizCurrentScreen('intro');
    setQuizSet([]);
    setCurrent(0);
    setSelected(null);
    setCorrect(0);
  };

  const onExitPress = () => {
    Alert.alert(
      'Are you sure you want to leave?',
      'Your journey is not yet complete.\nLeaving now will forfeit your progress.',
      [
        {
          text: 'Leave',
          style: 'destructive',
          onPress: resetQuiz,
        },
        { text: 'Stay and Continue', style: 'cancel' },
      ],
    );
  };

  const getAnswerStyle = index => {
    if (selected === null) return styles.answer;

    if (index === question.correctIndex) {
      return [styles.answer, styles.correct];
    }
    if (index === selected) {
      return [styles.answer, styles.wrong];
    }
    return styles.answer;
  };

  if (quizCurrentScreen === 'intro') {
    return (
      <ImageBackground source={bgImage} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.introContainer, { paddingTop: height * 0.08 }]}>
            <Image
              source={require('../assets/images/quiz_title.png')}
              style={{ marginBottom: height * 0.03 }}
            />
            <Image source={require('../assets/images/quiz_logo.png')} />

            <View style={styles.introBox}>
              <Text style={styles.introText}>
                Knowledge is a blade that never dulls. Step forward and face the
                myths that shaped gods and warriors.
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setQuizSet(
                    getRandomQuestions(quizQuestions, QUESTIONS_PER_QUIZ),
                  );
                  setQuizCurrentScreen('quiz');
                }}
                activeOpacity={0.8}
                style={{ width: '100%' }}
              >
                <LinearGradient
                  colors={BUTTON_GRADIENT}
                  style={styles.beginButton}
                >
                  <Text style={styles.beginText}>Begin the Trial</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.quizContainer, { paddingTop: height * 0.08 }]}>
          <View style={styles.header}>
            <Text style={styles.progress}>
              Question {current + 1} of {quizSet.length}
            </Text>

            <TouchableOpacity onPress={onExitPress} style={styles.exitButton}>
              <Image source={require('../assets/icons/iconamoon_close.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>{question?.question}</Text>
          </View>

          {question?.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={getAnswerStyle(index)}
              onPress={() => onAnswerPress(index)}
              activeOpacity={0.85}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.answerLabelContainer}>
                  <Text style={styles.answerTextLabel}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={styles.answerText}>{answer}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 120,
  },
  introBox: {
    backgroundColor: '#251F21',
    borderRadius: 16,
    padding: 16,
    paddingVertical: 24,
    width: '90%',
  },
  introText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  beginButton: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beginText: {
    color: primWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  quizContainer: {
    flex: 1,
    paddingBottom: 120,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progress: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
  },
  exitButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionBox: {
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 16,
    marginVertical: 24,
  },
  question: {
    color: primWhite,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  answer: {
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  correct: {
    backgroundColor: '#218C00',
  },
  wrong: {
    backgroundColor: '#C10004',
  },
  answerLabelContainer: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  answerTextLabel: {
    color: primWhite,
    fontWeight: '500',
    fontSize: 16,
  },
  answerText: {
    color: primWhite,
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
  },
});

export default AmazonsQuizScreen;
