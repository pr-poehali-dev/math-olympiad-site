import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <Icon name="Trophy" size={24} className="text-yellow-300" />
                <span className="font-semibold">Платформа для олимпиадников</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              МатМастер:<br />Величины
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-medium opacity-95 max-w-3xl mx-auto">
              Интерактивная платформа для школьников, учителей и родителей
            </p>
            
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Комплексная подготовка к математическим олимпиадам по теме "Величины". 
              Теория, практика, тесты и персональные рекомендации в одном месте.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all hover:scale-105 cursor-pointer"
                onClick={() => window.location.href = '/games'}
              >
                <Icon name="BookOpen" size={40} className="text-white mb-3 mx-auto" />
                <h3 className="font-bold text-xl mb-2">Для школьников</h3>
                <p className="opacity-90">Интерактивные задания с мгновенной проверкой</p>
              </div>
              
              <div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all hover:scale-105 cursor-pointer"
                onClick={() => window.location.href = '/for-teachers'}
              >
                <Icon name="GraduationCap" size={40} className="text-white mb-3 mx-auto" />
                <h3 className="font-bold text-xl mb-2">Для учителей</h3>
                <p className="opacity-90">Готовые материалы и система оценки</p>
              </div>
              
              <div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all hover:scale-105 cursor-pointer"
                onClick={() => window.location.href = '/for-parents'}
              >
                <Icon name="Users" size={40} className="text-white mb-3 mx-auto" />
                <h3 className="font-bold text-xl mb-2">Для родителей</h3>
                <p className="opacity-90">Контроль прогресса и результаты</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-white/90 text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold"
                onClick={() => window.location.href = '/theory'}
              >
                <Icon name="BookOpen" size={22} className="mr-2" />
                Начать обучение
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white/20 text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-transform font-bold"
                onClick={() => window.location.href = '/games'}
              >
                <Icon name="Gamepad2" size={22} className="mr-2" />
                Играть
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white/20 text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-transform font-bold"
                onClick={() => window.location.href = '/tasks'}
              >
                <Icon name="Target" size={22} className="mr-2" />
                Задания
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} />
                <span>25 заданий</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} />
                <span>5 уровней сложности</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} />
                <span>Подробная теория</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} />
                <span>Мгновенная проверка</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Что вы изучите</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный курс по теме "Величины" с практическими заданиями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Weight', title: 'Масса', desc: 'Преобразование единиц массы, сравнение, задачи на взвешивание', color: 'from-orange-500 to-red-500' },
              { icon: 'Ruler', title: 'Длина и расстояние', desc: 'Метрические единицы, периметр, задачи на движение', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Clock', title: 'Время', desc: 'Часы, минуты, секунды, календарь, временные интервалы', color: 'from-green-500 to-emerald-500' },
              { icon: 'Container', title: 'Объём', desc: 'Литры, миллилитры, кубические метры, задачи на наполнение', color: 'from-purple-500 to-pink-500' },
              { icon: 'Square', title: 'Площадь', desc: 'Квадратные единицы, площадь фигур, земельные участки', color: 'from-yellow-500 to-orange-500' },
              { icon: 'Zap', title: 'Скорость', desc: 'Расчёт скорости, задачи на встречное движение', color: 'from-indigo-500 to-purple-500' }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Как это работает</h2>
            <p className="text-xl text-gray-600">Простой путь от теории к олимпиадным задачам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', icon: 'BookOpen', title: 'Изучай теорию', desc: 'Понятные объяснения с примерами' },
              { step: '2', icon: 'Lightbulb', title: 'Решай задачи', desc: 'От простых к олимпиадным' },
              { step: '3', icon: 'CheckCircle', title: 'Получай оценку', desc: 'Мгновенная проверка ответов' },
              { step: '4', icon: 'TrendingUp', title: 'Отслеживай прогресс', desc: 'Статистика и достижения' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900 shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Преимущества платформы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: 'Sparkles', title: 'Адаптивное обучение', desc: 'Система подбирает задания под ваш уровень и автоматически усложняет материал по мере прогресса' },
              { icon: 'BarChart', title: 'Детальная статистика', desc: 'Отслеживайте прогресс по каждой теме, анализируйте ошибки и работайте над слабыми местами' },
              { icon: 'Award', title: 'Система достижений', desc: 'Получайте награды за успехи, соревнуйтесь с друзьями и мотивируйте себя на новые победы' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Видеоразборы сложных задач, подсказки и помощь преподавателей в любое время' }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:border-blue-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-10 opacity-90">
            Присоединяйтесь к тысячам школьников, которые уже готовятся к олимпиадам с нашей платформой
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold"
              onClick={() => window.location.href = '/theory'}
            >
              <Icon name="Rocket" size={22} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-transform font-bold"
              onClick={() => window.location.href = '/feedback'}
            >
              <Icon name="MessageCircle" size={22} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 mb-2">© 2024 МатМастер: Величины</p>
          <p className="text-sm text-gray-500">Платформа для подготовки к математическим олимпиадам</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;