import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

type Difficulty = 'Базовый' | 'Школьный' | 'Муниципальный' | 'Региональный' | 'Олимпиадный';

interface Task {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  answer: string;
  hint?: string;
  explanation?: string;
  userAnswer?: string;
  completed?: boolean;
  category: string;
}

const Tasks = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

  const tasks: Task[] = [
    {
      id: 1,
      category: 'mass',
      title: 'Сравнение масс животных',
      description: 'Слон весит 5000 кг, жираф — 1200 кг, а бегемот — 3200 кг. На сколько килограммов слон тяжелее бегемота? На сколько жираф легче слона?',
      difficulty: 'Базовый',
      answer: '1800;3800',
      hint: 'Вычти массу бегемота из массы слона. Потом вычти массу жирафа из массы слона.',
      explanation: 'Слон тяжелее бегемота на: 5000 - 3200 = 1800 кг. Жираф легче слона на: 5000 - 1200 = 3800 кг.'
    },
    {
      id: 2,
      category: 'mass',
      title: 'Сложение единиц массы',
      description: 'В магазин привезли 3 т 450 кг картофеля и 1 т 780 кг моркови. Сколько всего килограммов овощей привезли?',
      difficulty: 'Базовый',
      answer: '5230',
      hint: 'Сначала переведи всё в килограммы: 3 т = 3000 кг, 1 т = 1000 кг. Потом сложи.',
      explanation: '3 т 450 кг = 3450 кг, 1 т 780 кг = 1780 кг. Всего: 3450 + 1780 = 5230 кг'
    },
    {
      id: 3,
      category: 'mass',
      title: 'Задача на взвешивание',
      description: 'У продавца есть гири: 1 кг, 2 кг, 5 кг. Какую максимальную массу он может взвесить, используя все три гири одновременно?',
      difficulty: 'Школьный',
      answer: '8',
      hint: 'Чтобы получить максимальную массу, нужно сложить все гири.',
      explanation: '1 + 2 + 5 = 8 кг'
    },
    {
      id: 4,
      category: 'mass',
      title: 'Задача повышенной сложности',
      description: 'Три арбуза и две дыни весят 16 кг. Два арбуза и три дыни весят 14 кг. Сколько весит один арбуз и одна дыня вместе?',
      difficulty: 'Муниципальный',
      answer: '6',
      hint: 'Сложи оба уравнения: получится 5 арбузов + 5 дынь. Потом раздели на 5.',
      explanation: '3А + 2Д = 16, 2А + 3Д = 14. Сложим: 5А + 5Д = 30, значит А + Д = 6 кг'
    },
    {
      id: 5,
      category: 'length',
      title: 'Преобразование длины',
      description: 'Дорога от дома до школы составляет 2 км 350 м, а от школы до библиотеки — 1 км 780 м. Сколько метров от дома до библиотеки через школу?',
      difficulty: 'Базовый',
      answer: '4130',
      hint: 'Переведи километры в метры и сложи: 2 км = 2000 м, 1 км = 1000 м',
      explanation: '2 км 350 м = 2350 м, 1 км 780 м = 1780 м. Всего: 2350 + 1780 = 4130 м'
    },
    {
      id: 6,
      category: 'length',
      title: 'Периметр прямоугольника',
      description: 'Длина прямоугольного участка 25 м, а ширина в 5 раз меньше длины. Найди периметр участка.',
      difficulty: 'Школьный',
      answer: '60',
      hint: 'Сначала найди ширину: 25 ÷ 5. Потом используй формулу P = 2(a + b)',
      explanation: 'Ширина = 25 ÷ 5 = 5 м. Периметр = 2 × (25 + 5) = 2 × 30 = 60 м'
    },
    {
      id: 7,
      category: 'length',
      title: 'Задача на движение',
      description: 'Два пешехода вышли одновременно навстречу друг другу из двух пунктов, расстояние между которыми 18 км. Скорость первого 4 км/ч, второго — 5 км/ч. Через сколько часов они встретятся?',
      difficulty: 'Муниципальный',
      answer: '2',
      hint: 'Скорость сближения = сумма скоростей. Время = расстояние ÷ скорость сближения.',
      explanation: 'Скорость сближения: 4 + 5 = 9 км/ч. Время встречи: 18 ÷ 9 = 2 часа'
    },
    {
      id: 8,
      category: 'length',
      title: 'Периметр и площадь',
      description: 'Периметр квадрата равен 36 см. Найди его площадь.',
      difficulty: 'Региональный',
      answer: '81',
      hint: 'Периметр квадрата P = 4a, найди сторону a. Потом площадь S = a²',
      explanation: 'Сторона квадрата: 36 ÷ 4 = 9 см. Площадь: 9² = 81 см²'
    },
    {
      id: 9,
      category: 'time',
      title: 'Преобразование времени',
      description: 'Сколько секунд в 3 часах 15 минутах?',
      difficulty: 'Базовый',
      answer: '11700',
      hint: '1 час = 60 минут, 1 минута = 60 секунд. Сначала переведи часы в минуты.',
      explanation: '3 часа = 180 минут. Всего: 180 + 15 = 195 минут. 195 × 60 = 11700 секунд'
    },
    {
      id: 10,
      category: 'time',
      title: 'Календарные вычисления',
      description: 'Сколько полных недель в феврале невисокосного года?',
      difficulty: 'Базовый',
      answer: '4',
      hint: 'В феврале невисокосного года 28 дней. Одна неделя = 7 дней.',
      explanation: '28 ÷ 7 = 4 полные недели'
    },
    {
      id: 11,
      category: 'time',
      title: 'Задача на время работы',
      description: 'Первый рабочий может выполнить заказ за 6 часов, второй — за 4 часа. За какое время они выполнят заказ вместе?',
      difficulty: 'Муниципальный',
      answer: '2.4',
      hint: 'Производительность первого 1/6, второго 1/4. Сложи производительности.',
      explanation: 'Производительность вместе: 1/6 + 1/4 = 2/12 + 3/12 = 5/12. Время: 1 ÷ (5/12) = 12/5 = 2,4 часа'
    },
    {
      id: 12,
      category: 'time',
      title: 'Определение времени',
      description: 'Часы показывают 15:45. Какой угол между часовой и минутной стрелками? (ответ в градусах)',
      difficulty: 'Региональный',
      answer: '157.5',
      hint: 'Минутная стрелка на 9 (270°), часовая между 3 и 4. Часовая стрелка за час проходит 30°.',
      explanation: 'Минутная на 45 мин = 270°. Часовая: 15 часов = 3 часа от 12 = 90° + (45/60 × 30°) = 112,5°. Угол: 270° - 112,5° = 157,5°'
    },
    {
      id: 13,
      category: 'volume',
      title: 'Сложение объёмов',
      description: 'В бочку налили 45 л воды, затем ещё 8500 мл. Сколько всего литров воды в бочке?',
      difficulty: 'Базовый',
      answer: '53.5',
      hint: 'Переведи миллилитры в литры: 1000 мл = 1 л',
      explanation: '8500 мл = 8,5 л. Всего: 45 + 8,5 = 53,5 л'
    },
    {
      id: 14,
      category: 'volume',
      title: 'Объём параллелепипеда',
      description: 'Длина аквариума 50 см, ширина 30 см, высота 40 см. Сколько литров воды поместится в аквариум?',
      difficulty: 'Школьный',
      answer: '60',
      hint: 'Объём = длина × ширина × высота. 1 литр = 1 дм³ = 1000 см³',
      explanation: 'V = 50 × 30 × 40 = 60000 см³ = 60 дм³ = 60 литров'
    },
    {
      id: 15,
      category: 'volume',
      title: 'Задача на наполнение',
      description: 'Бассейн объёмом 72 м³ наполняется двумя трубами. Первая труба наполняет бассейн за 6 часов, вторая — за 9 часов. За сколько часов наполнится бассейн, если открыть обе трубы? (ответ округли до десятых)',
      difficulty: 'Муниципальный',
      answer: '3.6',
      hint: 'Производительность первой трубы 72/6, второй 72/9. Сложи и найди время.',
      explanation: 'Первая труба: 72÷6=12 м³/ч, вторая: 72÷9=8 м³/ч. Вместе: 12+8=20 м³/ч. Время: 72÷20=3,6 ч'
    },
    {
      id: 16,
      category: 'volume',
      title: 'Объём куба',
      description: 'Ребро куба равно 0,5 м. Найди объём куба в литрах.',
      difficulty: 'Региональный',
      answer: '125',
      hint: 'V = a³. Переведи в дм: 0,5 м = 5 дм. 1 дм³ = 1 литр',
      explanation: '0,5 м = 5 дм. V = 5³ = 125 дм³ = 125 литров'
    },
    {
      id: 17,
      category: 'area',
      title: 'Площадь прямоугольника',
      description: 'Найди площадь прямоугольного участка земли длиной 25 м и шириной 16 м.',
      difficulty: 'Базовый',
      answer: '400',
      hint: 'S = длина × ширина',
      explanation: 'S = 25 × 16 = 400 м²'
    },
    {
      id: 18,
      category: 'area',
      title: 'Площадь квадрата',
      description: 'Периметр квадрата 48 см. Найди его площадь.',
      difficulty: 'Школьный',
      answer: '144',
      hint: 'Найди сторону: P = 4a, значит a = P÷4. Потом S = a²',
      explanation: 'Сторона: 48 ÷ 4 = 12 см. Площадь: 12² = 144 см²'
    },
    {
      id: 19,
      category: 'area',
      title: 'Сравнение площадей',
      description: 'Участок прямоугольной формы имеет длину 30 м и ширину 20 м. Сколько соток занимает участок?',
      difficulty: 'Муниципальный',
      answer: '6',
      hint: 'Найди площадь в м². 1 сотка = 100 м²',
      explanation: 'S = 30 × 20 = 600 м². В сотках: 600 ÷ 100 = 6 соток'
    },
    {
      id: 20,
      category: 'area',
      title: 'Изменение площади',
      description: 'Длину прямоугольника увеличили в 2 раза, а ширину уменьшили в 2 раза. Как изменилась площадь?',
      difficulty: 'Региональный',
      answer: 'не изменилась',
      hint: 'S₁ = a × b, S₂ = (2a) × (b/2). Сравни.',
      explanation: 'Было: S₁ = a × b. Стало: S₂ = 2a × (b/2) = a × b. Площадь не изменилась.'
    },
    {
      id: 21,
      category: 'speed',
      title: 'Расчёт скорости',
      description: 'Автомобиль проехал 240 км за 3 часа. Найди его скорость.',
      difficulty: 'Базовый',
      answer: '80',
      hint: 'Скорость = расстояние ÷ время',
      explanation: 'v = 240 ÷ 3 = 80 км/ч'
    },
    {
      id: 22,
      category: 'speed',
      title: 'Расчёт времени',
      description: 'Поезд движется со скоростью 75 км/ч. За какое время он преодолеет расстояние 300 км?',
      difficulty: 'Школьный',
      answer: '4',
      hint: 'Время = расстояние ÷ скорость',
      explanation: 't = 300 ÷ 75 = 4 часа'
    },
    {
      id: 23,
      category: 'speed',
      title: 'Встречное движение',
      description: 'Два велосипедиста выехали одновременно навстречу друг другу из двух городов, расстояние между которыми 54 км. Скорость первого 12 км/ч, второго 15 км/ч. Через сколько часов они встретятся?',
      difficulty: 'Муниципальный',
      answer: '2',
      hint: 'Скорость сближения = 12 + 15. Время = расстояние ÷ скорость сближения',
      explanation: 'v_сближения = 12 + 15 = 27 км/ч. t = 54 ÷ 27 = 2 часа'
    },
    {
      id: 24,
      category: 'speed',
      title: 'Движение вдогонку',
      description: 'Из города А в город Б выехал велосипедист со скоростью 15 км/ч. Через 2 часа вслед за ним выехал мотоциклист со скоростью 45 км/ч. Через сколько часов после своего выезда мотоциклист догонит велосипедиста?',
      difficulty: 'Региональный',
      answer: '1',
      hint: 'За 2 часа велосипедист уехал на 15×2=30 км. Скорость сближения: 45-15=30 км/ч',
      explanation: 'Велосипедист уехал на: 15 × 2 = 30 км. Скорость сближения: 45 - 15 = 30 км/ч. Время: 30 ÷ 30 = 1 час'
    },
    {
      id: 25,
      category: 'speed',
      title: 'Средняя скорость',
      description: 'Первую половину пути автомобиль ехал со скоростью 60 км/ч, вторую половину — со скоростью 40 км/ч. Найди среднюю скорость на всём пути.',
      difficulty: 'Олимпиадный',
      answer: '48',
      hint: 'Средняя скорость НЕ равна (60+40)/2! Пусть весь путь S. Найди время на каждую половину.',
      explanation: 'Пусть S — весь путь. t₁ = (S/2)/60 = S/120, t₂ = (S/2)/40 = S/80. v_ср = S/(t₁+t₂) = S/(S/120 + S/80) = 1/(1/120 + 1/80) = 1/(5/240) = 48 км/ч'
    }
  ];

  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const categories = [
    { id: 'all', name: 'Все задания', icon: 'List', color: 'from-gray-500 to-gray-600' },
    { id: 'mass', name: 'Масса', icon: 'Weight', color: 'from-orange-500 to-red-500' },
    { id: 'length', name: 'Длина', icon: 'Ruler', color: 'from-blue-500 to-cyan-500' },
    { id: 'time', name: 'Время', icon: 'Clock', color: 'from-green-500 to-emerald-500' },
    { id: 'volume', name: 'Объём', icon: 'Container', color: 'from-purple-500 to-pink-500' },
    { id: 'area', name: 'Площадь', icon: 'Square', color: 'from-yellow-500 to-orange-500' },
    { id: 'speed', name: 'Скорость', icon: 'Zap', color: 'from-indigo-500 to-purple-500' }
  ];

  const difficulties: Array<Difficulty | 'all'> = ['all', 'Базовый', 'Школьный', 'Муниципальный', 'Региональный', 'Олимпиадный'];

  const filteredTasks = taskList.filter(task => {
    const categoryMatch = selectedCategory === 'all' || task.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || task.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const completedCount = taskList.filter(t => t.completed).length;
  const progressPercent = (completedCount / taskList.length) * 100;

  const handleAnswerChange = (taskId: number, answer: string) => {
    setTaskList(prev => prev.map(task =>
      task.id === taskId ? { ...task, userAnswer: answer } : task
    ));
  };

  const checkAnswer = (taskId: number) => {
    const task = taskList.find(t => t.id === taskId);
    if (!task) return;

    const userAnswerNormalized = task.userAnswer?.trim().toLowerCase() || '';
    const correctAnswers = task.answer.toLowerCase().split(';');
    const isCorrect = correctAnswers.some(ans => userAnswerNormalized === ans.trim());

    if (isCorrect) {
      setTaskList(prev => prev.map(t =>
        t.id === taskId ? { ...t, completed: true } : t
      ));
      toast({
        title: '🎉 Правильно!',
        description: task.explanation || 'Отличная работа!',
      });
    } else {
      toast({
        title: '❌ Неверно',
        description: 'Попробуй ещё раз. Используй подсказку, если нужно.',
        variant: 'destructive'
      });
    }
  };

  const toggleHint = (taskId: number) => {
    setShowHints(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'Базовый': return 'bg-green-100 text-green-700 border-green-300';
      case 'Школьный': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Муниципальный': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Региональный': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Олимпиадный': return 'bg-red-100 text-red-700 border-red-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" size={20} className="mr-2" />
                Главная
              </Button>
              <h1 className="text-3xl font-bold">Задания</h1>
            </div>

            <div className="flex items-center gap-4">
              <Card className="bg-white/20 backdrop-blur-sm border-white/30">
                <CardContent className="py-3 px-5">
                  <div className="flex items-center gap-3 text-white">
                    <Icon name="Trophy" size={24} />
                    <div>
                      <div className="text-sm opacity-90">Прогресс</div>
                      <div className="font-bold text-lg">{completedCount}/{taskList.length}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => window.location.href = '/theory'}
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Теория
              </Button>
            </div>
          </div>

          <Progress value={progressPercent} className="mt-4 h-2 bg-white/30" />
        </div>
      </header>

      <div className="container mx-auto max-w-7xl py-8 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Выбери категорию</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className={`h-auto py-4 flex flex-col items-center gap-2 ${selectedCategory === cat.id
                    ? `bg-gradient-to-br ${cat.color} text-white border-0 shadow-lg scale-105`
                    : 'hover:scale-105'
                  } transition-all`}
              >
                <Icon name={cat.icon as any} size={24} />
                <span className="text-xs font-semibold">{cat.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Уровень сложности</h2>
          <div className="flex flex-wrap gap-3">
            {difficulties.map((diff) => (
              <Button
                key={diff}
                variant={selectedDifficulty === diff ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty(diff)}
                className={`rounded-full px-6 transition-all ${selectedDifficulty === diff
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'hover:scale-105'
                  }`}
              >
                {diff === 'all' ? 'Все' : diff}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-gray-600">
          Найдено заданий: <span className="font-bold text-gray-900">{filteredTasks.length}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTasks.map((task, index) => (
            <Card
              key={task.id}
              className={`border-2 hover:shadow-xl transition-all duration-300 animate-scale-in ${task.completed
                  ? 'bg-green-50/50 border-green-300'
                  : 'hover:border-blue-300'
                }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-500">#{task.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(task.difficulty)}`}>
                        {task.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                  </div>
                  {task.completed && (
                    <Icon name="CheckCircle2" size={32} className="text-green-600 flex-shrink-0" />
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-700">
                  {task.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {task.hint && (
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleHint(task.id)}
                      className="text-sm"
                    >
                      <Icon name="Lightbulb" size={16} className="mr-2" />
                      {showHints[task.id] ? 'Скрыть подсказку' : 'Показать подсказку'}
                    </Button>
                    {showHints[task.id] && (
                      <Card className="mt-2 bg-yellow-50 border-yellow-300">
                        <CardContent className="p-3 text-sm">
                          <div className="flex items-start gap-2">
                            <Icon name="Lightbulb" size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{task.hint}</span>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor={`answer-${task.id}`} className="text-sm font-semibold">
                    Твой ответ:
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id={`answer-${task.id}`}
                      type="text"
                      placeholder="Введи ответ"
                      value={task.userAnswer || ''}
                      onChange={(e) => handleAnswerChange(task.id, e.target.value)}
                      disabled={task.completed}
                      className="flex-1"
                    />
                    <Button
                      onClick={() => checkAnswer(task.id)}
                      disabled={!task.userAnswer || task.completed}
                      className={task.completed ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
                    >
                      {task.completed ? (
                        <>
                          <Icon name="Check" size={18} className="mr-1" />
                          Верно
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={18} className="mr-1" />
                          Проверить
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card className="p-12 text-center">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">Задания не найдены</p>
            <p className="text-gray-500 mt-2">Попробуйте изменить фильтры</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Tasks;
