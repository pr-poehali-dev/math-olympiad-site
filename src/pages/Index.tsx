import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Task {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  answer: string;
  userAnswer?: string;
  completed?: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Сравнение масс',
    description: 'Слон весит 5000 кг, а бегемот - 3200 кг. На сколько килограммов слон тяжелее бегемота?',
    difficulty: 'Easy',
    answer: '1800'
  },
  {
    id: 2,
    title: 'Преобразование единиц длины',
    description: 'Расстояние от дома до школы 2 км 350 м. Сколько это метров?',
    difficulty: 'Easy',
    answer: '2350'
  },
  {
    id: 3,
    title: 'Объём и вместимость',
    description: 'В аквариум влили 15 литров воды, затем ещё 8500 мл. Сколько всего воды в аквариуме? Ответ дай в литрах.',
    difficulty: 'Medium',
    answer: '23.5'
  },
  {
    id: 4,
    title: 'Время и скорость',
    description: 'Поезд движется со скоростью 75 км/ч. За какое время он преодолеет 300 км? Ответ дай в часах.',
    difficulty: 'Medium',
    answer: '4'
  },
  {
    id: 5,
    title: 'Площадь прямоугольника',
    description: 'Длина участка 25 м, ширина 16 м. Найди площадь участка в квадратных метрах.',
    difficulty: 'Medium',
    answer: '400'
  },
  {
    id: 6,
    title: 'Сложная задача на величины',
    description: 'Бассейн вмещает 72 кубометра воды. Через одну трубу он наполняется за 6 часов, через другую - за 9 часов. За какое время наполнится бассейн, если открыть обе трубы? Ответ округли до десятых.',
    difficulty: 'Hard',
    answer: '3.6'
  },
  {
    id: 7,
    title: 'Преобразование времени',
    description: 'Сколько секунд в 2 часах 35 минутах 20 секундах?',
    difficulty: 'Hard',
    answer: '9320'
  },
  {
    id: 8,
    title: 'Плотность и масса',
    description: 'Плотность железа 7800 кг/м³. Найди массу железного куба с ребром 0,5 м. Ответ дай в килограммах.',
    difficulty: 'Hard',
    answer: '975'
  }
];

const Index = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const { toast } = useToast();

  const filteredTasks = selectedDifficulty === 'All' 
    ? taskList 
    : taskList.filter(task => task.difficulty === selectedDifficulty);

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

    const isCorrect = task.userAnswer?.trim() === task.answer;
    
    if (isCorrect) {
      setTaskList(prev => prev.map(t => 
        t.id === taskId ? { ...t, completed: true } : t
      ));
      toast({
        title: '🎉 Правильно!',
        description: 'Отличная работа! Продолжай в том же духе.',
      });
    } else {
      toast({
        title: '😔 Неверно',
        description: 'Попробуй ещё раз! Внимательно проверь расчёты.',
        variant: 'destructive'
      });
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '✅ Спасибо за обратную связь!',
      description: 'Мы обязательно рассмотрим ваше сообщение.',
    });
    setFeedbackName('');
    setFeedbackEmail('');
    setFeedbackMessage('');
  };

  const difficulties: Array<Difficulty | 'All'> = ['All', 'Easy', 'Medium', 'Hard'];
  const difficultyLabels = {
    'All': 'Все',
    'Easy': 'Лёгкий',
    'Medium': 'Средний',
    'Hard': 'Сложный'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-secondary/10">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 animate-fade-in">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              МАТВХ & МАТЕКА
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium opacity-95">
              Подготовка к олимпиадам по математике
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Интерактивная платформа для изучения величин: массы, длины, времени, объёма, площади. 
              Решай задачи, проверяй ответы и готовься к олимпиадам вместе с нами!
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <Icon name="Calculator" size={28} className="text-white" />
                <span className="font-semibold text-lg">8 заданий</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <Icon name="Ruler" size={28} className="text-white" />
                <span className="font-semibold text-lg">Все величины</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <Icon name="Trophy" size={28} className="text-white" />
                <span className="font-semibold text-lg">3 уровня</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="mt-10 bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('tasks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать обучение
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="tasks" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 animate-slide-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-foreground">Задания</h2>
                <p className="text-muted-foreground text-lg">Выбери уровень сложности и приступай к решению</p>
              </div>
              
              <Card className="w-full md:w-auto bg-card/80 backdrop-blur-sm border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Target" size={24} className="text-primary" />
                    <span className="font-semibold text-lg">Прогресс</span>
                  </div>
                  <Progress value={progressPercent} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {completedCount} из {taskList.length} заданий выполнено
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {difficulties.map((diff) => (
                <Button
                  key={diff}
                  variant={selectedDifficulty === diff ? 'default' : 'outline'}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`rounded-full px-6 transition-all ${
                    selectedDifficulty === diff 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  {difficultyLabels[diff]}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTasks.map((task, index) => (
              <Card 
                key={task.id} 
                className={`hover:shadow-xl transition-all duration-300 animate-scale-in border-2 ${
                  task.completed 
                    ? 'bg-secondary/10 border-secondary' 
                    : 'hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{task.title}</CardTitle>
                    {task.completed && (
                      <Icon name="CheckCircle" size={24} className="text-secondary" />
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      task.difficulty === 'Easy' 
                        ? 'bg-secondary/20 text-secondary' 
                        : task.difficulty === 'Medium'
                        ? 'bg-accent/40 text-accent-foreground'
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {difficultyLabels[task.difficulty]}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6 leading-relaxed">{task.description}</p>
                  
                  <div className="space-y-3">
                    <Label htmlFor={`answer-${task.id}`} className="text-sm font-medium">
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
                        className={task.completed ? 'bg-secondary' : ''}
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
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-3xl">
          <Card className="shadow-2xl border-2 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
                <Icon name="MessageSquare" size={32} className="text-primary" />
                Обратная связь
              </CardTitle>
              <CardDescription className="text-lg">
                Есть вопросы или предложения? Напишите нам!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите, что вы думаете о платформе..."
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 МАТВХ & МАТЕКА. Платформа для подготовки к олимпиадам по математике
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
