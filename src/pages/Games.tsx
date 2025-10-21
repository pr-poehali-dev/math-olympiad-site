import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Games = () => {
  const { toast } = useToast();
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [speedRoundScore, setSpeedRoundScore] = useState(0);
  const [speedRoundTime, setSpeedRoundTime] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');

  const quizQuestions = [
    {
      question: 'Сколько граммов в 3 килограммах?',
      options: ['300 г', '3000 г', '30000 г', '300000 г'],
      correct: 1
    },
    {
      question: 'Что тяжелее: 2000 г или 2 кг 50 г?',
      options: ['2000 г', '2 кг 50 г', 'Одинаково', 'Нельзя сравнить'],
      correct: 1
    },
    {
      question: 'Сколько метров в 5 километрах?',
      options: ['50 м', '500 м', '5000 м', '50000 м'],
      correct: 2
    },
    {
      question: 'Сколько минут в 2 часах 15 минутах?',
      options: ['125 мин', '135 мин', '215 мин', '145 мин'],
      correct: 1
    },
    {
      question: 'Периметр квадрата со стороной 7 см равен:',
      options: ['14 см', '21 см', '28 см', '49 см'],
      correct: 2
    },
    {
      question: 'Сколько миллилитров в 3 литрах 250 мл?',
      options: ['325 мл', '3025 мл', '3250 мл', '32500 мл'],
      correct: 2
    },
    {
      question: 'Площадь прямоугольника 5 см × 8 см равна:',
      options: ['13 см²', '26 см²', '40 см²', '80 см²'],
      correct: 2
    },
    {
      question: 'За 3 часа автомобиль проехал 180 км. Его скорость:',
      options: ['60 км/ч', '540 км/ч', '183 км/ч', '177 км/ч'],
      correct: 0
    }
  ];

  const speedRoundQuestions = [
    { question: '5 кг = ? г', answer: '5000' },
    { question: '2 км = ? м', answer: '2000' },
    { question: '3 л = ? мл', answer: '3000' },
    { question: '120 мин = ? ч', answer: '2' },
    { question: '4000 г = ? кг', answer: '4' },
    { question: '500 см = ? м', answer: '5' },
    { question: '1 ч = ? мин', answer: '60' },
    { question: '8000 мл = ? л', answer: '8' },
    { question: '3 м = ? см', answer: '300' },
    { question: '1 т = ? кг', answer: '1000' }
  ];

  const [currentSpeedQuestion, setCurrentSpeedQuestion] = useState(0);

  const handleQuizAnswer = (selectedIndex: number) => {
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
      toast({
        title: '✅ Правильно!',
        description: 'Отличная работа! Продолжай в том же духе.',
      });
    } else {
      toast({
        title: '❌ Неверно',
        description: `Правильный ответ: ${quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].correct]}`,
        variant: 'destructive'
      });
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const percentage = Math.round((quizScore + (selectedIndex === quizQuestions[currentQuestion].correct ? 1 : 0)) / quizQuestions.length * 100);
      toast({
        title: '🎉 Викторина завершена!',
        description: `Твой результат: ${quizScore + (selectedIndex === quizQuestions[currentQuestion].correct ? 1 : 0)} из ${quizQuestions.length} (${percentage}%)`,
      });
      setTimeout(() => {
        setActiveGame(null);
        setCurrentQuestion(0);
        setQuizScore(0);
        setGameStarted(false);
      }, 3000);
    }
  };

  const handleSpeedRoundAnswer = () => {
    const correctAnswer = speedRoundQuestions[currentSpeedQuestion].answer;
    if (userAnswer.trim() === correctAnswer) {
      setSpeedRoundScore(speedRoundScore + 1);
      toast({
        title: '✅ Верно!',
        description: '+1 балл',
      });
    } else {
      toast({
        title: '❌ Неверно',
        description: `Правильный ответ: ${correctAnswer}`,
        variant: 'destructive'
      });
    }

    setUserAnswer('');
    if (currentSpeedQuestion < speedRoundQuestions.length - 1) {
      setCurrentSpeedQuestion(currentSpeedQuestion + 1);
    } else {
      toast({
        title: '⏱️ Время вышло!',
        description: `Твой результат: ${speedRoundScore} баллов`,
      });
      setTimeout(() => {
        setActiveGame(null);
        setCurrentSpeedQuestion(0);
        setSpeedRoundScore(0);
        setGameStarted(false);
      }, 3000);
    }
  };

  const startSpeedRound = () => {
    setGameStarted(true);
    const timer = setInterval(() => {
      setSpeedRoundTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          toast({
            title: '⏱️ Время вышло!',
            description: `Твой результат: ${speedRoundScore} баллов из ${speedRoundQuestions.length}`,
          });
          setTimeout(() => {
            setActiveGame(null);
            setSpeedRoundTime(60);
            setCurrentSpeedQuestion(0);
            setSpeedRoundScore(0);
            setGameStarted(false);
          }, 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (activeGame === 'quiz') {
    if (!gameStarted) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full border-2 shadow-2xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={40} className="text-purple-600" />
              </div>
              <CardTitle className="text-3xl mb-2">Математическая викторина</CardTitle>
              <CardDescription className="text-base">
                Проверь свои знания по величинам! {quizQuestions.length} вопросов разной сложности.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                  <div>
                    <p className="font-semibold">Без ограничения времени</p>
                    <p className="text-sm text-gray-600">Отвечай спокойно и обдуманно</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="Award" size={24} className="text-green-600" />
                  <div>
                    <p className="font-semibold">Мгновенная проверка</p>
                    <p className="text-sm text-gray-600">Узнаешь правильный ответ сразу</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Icon name="Target" size={24} className="text-purple-600" />
                  <div>
                    <p className="font-semibold">Цель: 80% и выше</p>
                    <p className="text-sm text-gray-600">Это отличный результат!</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={() => setGameStarted(true)}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать викторину
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveGame(null)}
                >
                  Назад
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full border-2 shadow-2xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Brain" size={24} className="text-purple-600" />
                <span className="font-bold">Вопрос {currentQuestion + 1} из {quizQuestions.length}</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <Icon name="Trophy" size={20} className="text-green-600" />
                <span className="font-bold text-green-700">Баллы: {quizScore}</span>
              </div>
            </div>
            <Progress value={(currentQuestion / quizQuestions.length) * 100} className="mb-4" />
            <CardTitle className="text-2xl">{quizQuestions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  className="w-full text-left justify-start h-auto py-4 px-6 text-base"
                  variant="outline"
                  onClick={() => handleQuizAnswer(index)}
                >
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-3 font-bold flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeGame === 'speed') {
    if (!gameStarted) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full border-2 shadow-2xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={40} className="text-orange-600" />
              </div>
              <CardTitle className="text-3xl mb-2">Скоростной раунд</CardTitle>
              <CardDescription className="text-base">
                Реши максимум задач на преобразование единиц за 60 секунд!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Icon name="Timer" size={24} className="text-red-600" />
                  <div>
                    <p className="font-semibold">60 секунд</p>
                    <p className="text-sm text-gray-600">Торопись, но не ошибайся!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Icon name="Lightbulb" size={24} className="text-orange-600" />
                  <div>
                    <p className="font-semibold">Быстрый ввод</p>
                    <p className="text-sm text-gray-600">Пиши только число, без единиц измерения</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Icon name="Flame" size={24} className="text-yellow-600" />
                  <div>
                    <p className="font-semibold">Рекорд: 8 из 10</p>
                    <p className="text-sm text-gray-600">Сможешь побить?</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-orange-600 hover:bg-orange-700" 
                  size="lg"
                  onClick={startSpeedRound}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать раунд
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveGame(null)}
                >
                  Назад
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full border-2 shadow-2xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                <Icon name="Timer" size={24} className="text-red-600" />
                <span className="font-bold text-red-700 text-xl">{speedRoundTime}s</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <Icon name="Flame" size={20} className="text-green-600" />
                <span className="font-bold text-green-700">{speedRoundScore} / {speedRoundQuestions.length}</span>
              </div>
            </div>
            <Progress value={(speedRoundScore / speedRoundQuestions.length) * 100} className="mb-6" />
            <CardTitle className="text-3xl text-center mb-2">
              {speedRoundQuestions[currentSpeedQuestion].question}
            </CardTitle>
            <CardDescription className="text-center text-base">
              Введи только число (без единиц измерения)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSpeedRoundAnswer();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full text-center text-3xl font-bold border-2 border-gray-300 rounded-lg py-6 px-4 focus:outline-none focus:border-orange-500"
                placeholder="?"
                autoFocus
              />
              <Button type="submit" className="w-full" size="lg">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Ответить
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" size={28} className="text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              МатМастер
            </span>
          </div>
          <Button onClick={() => window.location.href = '/'} variant="outline">
            <Icon name="Home" size={18} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <Icon name="Sparkles" size={24} className="text-purple-600" />
              <span className="font-semibold text-purple-900">Игровая зона</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Учись играя!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Интерактивные игры для закрепления знаний по величинам. Весело, полезно и эффективно!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              className="border-2 hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-2"
              onClick={() => setActiveGame('quiz')}
            >
              <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Brain" size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Математическая викторина</CardTitle>
                <CardDescription className="text-base">
                  Проверь свои знания! 8 вопросов разной сложности по всем темам величин.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>Без ограничения времени</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Target" size={16} />
                    <span>Уровень: базовый и средний</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Award" size={16} />
                    <span>Мгновенная проверка</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Play" size={18} className="mr-2" />
                  Начать викторину
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="border-2 hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-2"
              onClick={() => setActiveGame('speed')}
            >
              <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Скоростной раунд</CardTitle>
                <CardDescription className="text-base">
                  Реши максимум задач на преобразование единиц за 60 секунд! Проверь свою скорость реакции.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Timer" size={16} />
                    <span>60 секунд на всё</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Flame" size={16} />
                    <span>10 вопросов</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Lightbulb" size={16} />
                    <span>Тренировка скорости</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                  <Icon name="Play" size={18} className="mr-2" />
                  Начать раунд
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 opacity-60">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Puzzle" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Логические задачи</CardTitle>
                <CardDescription className="text-base">
                  Нестандартные задачи на величины, требующие креативного подхода. Скоро!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Lock" size={16} />
                    <span>В разработке</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" disabled>
                  <Icon name="Lock" size={18} className="mr-2" />
                  Скоро открытие
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 opacity-60">
              <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-2xl">Мультиплеер</CardTitle>
                <CardDescription className="text-base">
                  Соревнуйся с друзьями в реальном времени! Кто быстрее решит задачи?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Lock" size={16} />
                    <span>В разработке</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" disabled>
                  <Icon name="Lock" size={18} className="mr-2" />
                  Скоро открытие
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 opacity-60">
              <div className="h-3 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Map" size={32} className="text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">Квест "Остров величин"</CardTitle>
                <CardDescription className="text-base">
                  Пройди приключение, решая задачи на каждом уровне. История с сюжетом!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Lock" size={16} />
                    <span>В разработке</span>
                  </div>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700" size="lg" disabled>
                  <Icon name="Lock" size={18} className="mr-2" />
                  Скоро открытие
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 opacity-60">
              <div className="h-3 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={32} className="text-pink-600" />
                </div>
                <CardTitle className="text-2xl">Турнир чемпионов</CardTitle>
                <CardDescription className="text-base">
                  Еженедельные соревнования с призами и рейтингом лучших игроков.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Lock" size={16} />
                    <span>В разработке</span>
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" size="lg" disabled>
                  <Icon name="Lock" size={18} className="mr-2" />
                  Скоро открытие
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="py-12 text-center">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-3">Почему игры эффективны?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
                <div>
                  <Icon name="Brain" size={32} className="mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Лучше запоминается</h3>
                  <p className="opacity-90">Игровая форма помогает закрепить материал в памяти надолго</p>
                </div>
                <div>
                  <Icon name="Heart" size={32} className="mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Интереснее учиться</h3>
                  <p className="opacity-90">Соревновательный элемент повышает мотивацию к обучению</p>
                </div>
                <div>
                  <Icon name="Zap" size={32} className="mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Быстрее думаешь</h3>
                  <p className="opacity-90">Тренируешь скорость вычислений и реакцию</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Games;
