import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { quizQuestions } from '../data/quizQuestions';
import QuizAnswerButton from '../components/QuizAnswerButton';
import QuizIntro from '../components/QuizIntro';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const QUESTIONS_PER_QUIZ = 12;
const primWhite = '#FFFFFF';
const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const randomizeQuestions = (questions, count) => {
  const shuffledQuestions = [...questions];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[randomIndex]] = [
      shuffledQuestions[randomIndex],
      shuffledQuestions[i],
    ];
  }

  return shuffledQuestions.slice(0, count);
};

const AmazonsQuiz = () => {
  const { height, sidePad, scrollBottom, pick } = useAdaptiveSizes();

  // sizes
  const paddingTop = pick(height * 0.05, height * 0.06, height * 0.08);
  const quizPad = sidePad;
  const quizPadB = scrollBottom;
  const progressSize = pick(20, 22, 24);
  const exitBtnSize = pick(48, 52, 56);
  const exitBtnRadius = pick(14, 15, 16);
  const questionBoxPad = pick(12, 14, 16);
  const questionBoxRadius = pick(14, 15, 16);
  const questionBoxMarginV = pick(18, 21, 24);
  const questionSize = pick(16, 17, 18);
  const answerPad = pick(12, 14, 16);
  const answerRadius = pick(14, 15, 16);
  const answerMarginB = pick(10, 11, 12);
  const answerLabelSize = pick(34, 36, 39);
  const answerLabelRadius = pick(17, 18, 20);
  const answerTextSize = pick(14, 15, 16);

  // states
  const [quizCurrentScreen, setQuizCurrentScreen] = useState('intro');
  const [quizSet, setQuizSet] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);

  const question = quizSet[current] || null;

  const answerPressHandler = index => {
    if (selected !== null) {
      return;
    }

    setSelected(index);

    if (index === question.correctIndex) {
      setCorrect(prevCorrect => prevCorrect + 1);
    }

    setTimeout(() => {
      if (current === quizSet.length - 1) {
        resultModalHandler();
      } else {
        setCurrent(prevCurrent => prevCurrent + 1);
        setSelected(null);
      }
    }, 1500);
  };

  const resultModalHandler = () => {
    const accuracy = Math.round((correct / quizSet.length) * 100);

    Alert.alert(
      'The Trial Ends',
      `Correct Answers: ${correct} / ${quizSet.length}\nAccuracy: ${accuracy}%`,
      [
        {
          text: 'Ok',
          onPress: () => {
            resetQuzHendler();
          },
        },
      ],
      { cancelable: false },
    );
  };

  const resetQuzHendler = () => {
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
          onPress: resetQuzHendler,
        },
        { text: 'Stay and Continue', style: 'cancel' },
      ],
    );
  };

  const getAnswerVariant = index => {
    if (selected === null) return 'default';
    if (index === question.correctIndex) return 'correct';
    if (index === selected) return 'wrong';
    return 'default';
  };

  if (quizCurrentScreen === 'intro') {
    return (
      <QuizIntro
        onBeginPress={() => {
          setQuizSet(randomizeQuestions(quizQuestions, QUESTIONS_PER_QUIZ));
          setQuizCurrentScreen('quiz');
        }}
      />
    );
  }

  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: quizPadB }}
      >
        <View style={[styles.quizContainer, { paddingTop, padding: quizPad }]}>
          <View style={styles.header}>
            <Text style={[styles.progress, { fontSize: progressSize }]}>
              Question {current + 1} of {quizSet.length}
            </Text>

            <TouchableOpacity
              onPress={onExitPress}
              style={[
                styles.exitButton,
                {
                  width: exitBtnSize,
                  height: exitBtnSize,
                  borderRadius: exitBtnRadius,
                },
              ]}
            >
              <Image source={require('../assets/icons/iconamoon_close.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.questionBox,
              {
                padding: questionBoxPad,
                borderRadius: questionBoxRadius,
                marginVertical: questionBoxMarginV,
              },
            ]}
          >
            <Text style={[styles.question, { fontSize: questionSize }]}>
              {question?.question}
            </Text>
          </View>

          {question?.answers.map((answer, index) => (
            <QuizAnswerButton
              key={index}
              letter={String.fromCharCode(65 + index)}
              answer={answer}
              variant={getAnswerVariant(index)}
              onPress={() => answerPressHandler(index)}
              padding={answerPad}
              borderRadius={answerRadius}
              marginBottom={answerMarginB}
              labelSize={answerLabelSize}
              labelRadius={answerLabelRadius}
              fontSize={answerTextSize}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progress: {
    color: '#FFB907',
    fontWeight: '700',
  },
  exitButton: {
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionBox: {
    backgroundColor: '#2B2B2B',
  },
  question: {
    color: primWhite,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default AmazonsQuiz;
