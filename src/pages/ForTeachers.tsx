import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ForTeachers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={28} className="text-blue-600" />
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
            <div className="inline-flex items-center gap-3 bg-purple-100 rounded-full px-6 py-3 mb-6">
              <Icon name="BookOpen" size={24} className="text-purple-600" />
              <span className="font-semibold text-purple-900">Для учителей</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Методические материалы по теме "Величины"
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые планы уроков, упражнения и рекомендации для подготовки учеников к математическим олимпиадам
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="FileText" size={28} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">12 планов уроков</CardTitle>
                <CardDescription>Готовые сценарии занятий</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Target" size={28} className="text-green-600" />
                </div>
                <CardTitle className="text-lg">150+ задач</CardTitle>
                <CardDescription>С разбором и решениями</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckCircle" size={28} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">Тесты и КР</CardTitle>
                <CardDescription>Проверочные работы с ответами</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Presentation" size={28} className="text-orange-600" />
                </div>
                <CardTitle className="text-lg">Презентации</CardTitle>
                <CardDescription>Готовые слайды для уроков</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="plans" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="plans">Планы уроков</TabsTrigger>
              <TabsTrigger value="exercises">Упражнения</TabsTrigger>
              <TabsTrigger value="methods">Методики</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
            </TabsList>

            <TabsContent value="plans" className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">📚 Программа курса (12 уроков)</CardTitle>
                  <CardDescription>
                    Рассчитана на 3 месяца: 1 урок в неделю по 45 минут + домашние задания
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 1: Введение в величины. Масса</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> познакомить с понятием величины, изучить единицы массы</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Разминка: угадай массу предмета (5 мин)</li>
                        <li>Теория: тонна, центнер, килограмм, грамм, миллиграмм (15 мин)</li>
                        <li>Практика: взвешивание реальных предметов, сравнение (15 мин)</li>
                        <li>Задачи: преобразование единиц (10 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> весы, набор гирь, карточки с единицами</p>
                      <p><strong>Домашнее задание:</strong> задачи 1-10 на платформе (раздел "Масса", уровень 1-2)</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 2: Преобразование единиц массы</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> научить переводить одни единицы массы в другие</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Повторение: викторина по единицам массы (5 мин)</li>
                        <li>Теория: правила преобразования, таблица (10 мин)</li>
                        <li>Отработка: карточки с примерами (15 мин)</li>
                        <li>Игра: "Математическая эстафета" — команды переводят единицы на скорость (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> карточки, таблица преобразований, секундомер</p>
                      <p><strong>Домашнее задание:</strong> задачи 11-20 на платформе</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 3: Длина и расстояние</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> изучить единицы длины, научить измерять</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Введение: что такое длина, зачем её измерять (5 мин)</li>
                        <li>Теория: км, м, дм, см, мм (10 мин)</li>
                        <li>Практика: измерение предметов линейкой, рулеткой (15 мин)</li>
                        <li>Задачи: сравнение длин, преобразования (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> линейки, рулетка, мерная лента</p>
                      <p><strong>Домашнее задание:</strong> измерить 5 предметов дома, записать в разных единицах</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 4: Периметр</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> научить находить периметр фигур</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Актуализация: повторение единиц длины через игру (5 мин)</li>
                        <li>Новая тема: что такое периметр, формулы (15 мин)</li>
                        <li>Практика: найти периметр класса, доски, учебника (10 мин)</li>
                        <li>Решение задач: прямоугольник, квадрат, треугольник (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> геометрические фигуры, рулетка</p>
                      <p><strong>Домашнее задание:</strong> найти периметр своей комнаты</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 5: Время. Единицы времени</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> систематизировать знания о времени</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Введение: как люди измеряли время раньше (5 мин)</li>
                        <li>Теория: век, год, месяц, неделя, сутки, час, минута, секунда (15 мин)</li>
                        <li>Работа с часами: определение времени, запись (10 мин)</li>
                        <li>Задачи: преобразование единиц времени (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> модель часов, секундомер, календарь</p>
                      <p><strong>Домашнее задание:</strong> составить режим дня с указанием времени</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 6: Задачи на время</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> научить решать задачи с временными интервалами</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Разминка: быстрые вопросы на перевод единиц (5 мин)</li>
                        <li>Типы задач: нахождение продолжительности, начала, конца события (15 мин)</li>
                        <li>Работа в парах: решение задач с обсуждением (15 мин)</li>
                        <li>Проверка: разбор сложных случаев (10 мин)</li>
                      </ul>
                      <p><strong>Домашнее задание:</strong> задачи 21-30 на платформе</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 7: Объём. Единицы объёма</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> познакомить с понятием объёма, изучить единицы</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Введение: объём vs площадь — в чём разница (5 мин)</li>
                        <li>Теория: м³, л, мл, см³ (15 мин)</li>
                        <li>Эксперимент: измерение объёма жидкости мерными стаканами (10 мин)</li>
                        <li>Задачи: преобразование, сравнение (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> мерные стаканы, ёмкости разного объёма, вода</p>
                      <p><strong>Домашнее задание:</strong> найти объём 5 жидкостей дома</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 8: Объём фигур</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> научить находить объём куба и параллелепипеда</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Повторение: единицы объёма (5 мин)</li>
                        <li>Новая тема: формулы объёма V = a³, V = a×b×c (15 мин)</li>
                        <li>Практика: измерение коробок, вычисление объёма (10 мин)</li>
                        <li>Решение задач разной сложности (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> кубики, коробки, линейка</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 9: Площадь. Единицы площади</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> изучить единицы площади, научить вычислять площадь</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Введение: что такое площадь, где применяется (5 мин)</li>
                        <li>Теория: км², га, а (сотка), м², дм², см² (15 мин)</li>
                        <li>Формулы: площадь прямоугольника S = a×b, квадрата S = a² (10 мин)</li>
                        <li>Задачи: вычисление площади фигур (15 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> квадратная бумага (клетка), фигуры для измерения</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 10: Скорость, время, расстояние</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> изучить взаимосвязь скорости, времени и расстояния</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Введение: что такое скорость (5 мин)</li>
                        <li>Теория: формулы S = v×t, v = S÷t, t = S÷v (15 мин)</li>
                        <li>Примеры: разбор простых задач (10 мин)</li>
                        <li>Самостоятельная работа: задачи на движение (15 мин)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 11: Сложные задачи на величины</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> научить решать многоходовые задачи</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Разминка: быстрые задачи на все величины (5 мин)</li>
                        <li>Разбор олимпиадной задачи на доске (15 мин)</li>
                        <li>Работа в группах: решение задач уровня 4-5 (20 мин)</li>
                        <li>Презентация решений группами (5 мин)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Урок 12: Итоговая проверочная работа</h3>
                    <div className="text-gray-700 space-y-2">
                      <p><strong>Цель:</strong> проверить усвоение материала</p>
                      <p><strong>Структура:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Инструктаж: правила написания работы (5 мин)</li>
                        <li>Тест: 20 задач разного уровня (30 мин)</li>
                        <li>Самопроверка и разбор ошибок (10 мин)</li>
                      </ul>
                      <p><strong>Материалы:</strong> тестовые задания на платформе или распечатанные</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exercises" className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">🎯 Упражнения для отработки навыков</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-yellow-600" />
                      Быстрые упражнения (5-7 минут)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 bg-yellow-50">
                        <h4 className="font-semibold mb-2">⚡ "Математическая молния"</h4>
                        <p className="text-sm text-gray-700">
                          Учитель называет величину (например, "5 кг 300 г"), ученики быстро переводят в другую единицу (в граммы). 
                          Отвечает тот, кто первым поднял руку. За правильный ответ — балл.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-blue-50">
                        <h4 className="font-semibold mb-2">🎲 "Угадай величину"</h4>
                        <p className="text-sm text-gray-700">
                          Показываете предмет (яблоко, книгу, ручку). Ученики оценивают массу, длину или объём. 
                          Затем измеряете реально. Побеждает тот, кто ближе всех к истине.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-green-50">
                        <h4 className="font-semibold mb-2">⏱️ "Минута истины"</h4>
                        <p className="text-sm text-gray-700">
                          Дайте задание решить максимум простых задач на преобразование за 1 минуту. 
                          Проверяем скорость и точность вычислений.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-purple-50">
                        <h4 className="font-semibold mb-2">🔄 "Цепочка преобразований"</h4>
                        <p className="text-sm text-gray-700">
                          1 т → ? кг → ? г → ? мг. Ученики по цепочке переводят величину, следующий продолжает. 
                          Ошибся — начинаем сначала.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-blue-600" />
                      Групповые упражнения (15-20 минут)
                    </h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-blue-50">
                        <h4 className="font-semibold mb-2">🏆 "Математическая эстафета"</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Разделите класс на 3-4 команды. На доске записаны задачи (по одной для каждой команды). 
                          Ученики по очереди выбегают к доске и решают по одному действию.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Пример задачи: "3 кг 450 г + 2 кг 780 г = ?" (1-й ученик переводит в граммы, 2-й складывает, 3-й переводит обратно)
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-green-50">
                        <h4 className="font-semibold mb-2">🎯 "Детективы величин"</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Раздайте группам карточки с "загадками": "Моя площадь 24 м². Я прямоугольник. Одна сторона 6 м. Кто я?"
                          Группы должны найти все возможные варианты и нарисовать фигуру.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-orange-50">
                        <h4 className="font-semibold mb-2">🛒 "Магазин величин"</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Ролевая игра: одни ученики — покупатели, другие — продавцы. Покупатели просят: "Мне 2 кг 500 г яблок и 1 л 300 мл сока".
                          Продавцы взвешивают (условные единицы), считают стоимость, дают сдачу.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Gamepad2" size={20} className="text-purple-600" />
                      Игровые упражнения
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 bg-purple-50">
                        <h4 className="font-semibold mb-2">🎮 "Величинный бинго"</h4>
                        <p className="text-sm text-gray-700">
                          Раздайте карточки с числами (например, 5000 г, 3 км, 120 мин). Называете задачу: "5 кг = ?".
                          Кто находит ответ на своей карточке — зачёркивает. Первый заполнивший ряд кричит "Бинго!"
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-pink-50">
                        <h4 className="font-semibold mb-2">🃏 "Математическое домино"</h4>
                        <p className="text-sm text-gray-700">
                          Карточки с задачей с одной стороны и ответом на другую задачу с другой. 
                          Ученики выстраивают цепочку: ответ одной карточки должен совпадать с задачей следующей.
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-cyan-50">
                        <h4 className="font-semibold mb-2">🎲 "Кубики величин"</h4>
                        <p className="text-sm text-gray-700">
                          Три кубика: 1-й с числами (1-6), 2-й с множителями (×10, ×100, ×1000), 3-й с единицами (г, кг, т).
                          Бросаете кубики, получается задача: "5 × 1000 = ? кг".
                        </p>
                      </div>

                      <div className="border rounded-lg p-4 bg-teal-50">
                        <h4 className="font-semibold mb-2">🏁 "Гонка по величинам"</h4>
                        <p className="text-sm text-gray-700">
                          На доске нарисована трасса с этапами. На каждом этапе — задача. 
                          Ученики решают, и их "машинки" (магниты) двигаются вперёд. Кто первым к финишу — победитель.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methods" className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">💡 Методические рекомендации</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50">
                    <h3 className="font-bold text-lg mb-2">1. Принцип "от конкретного к абстрактному"</h3>
                    <p className="text-gray-700 mb-2">
                      Всегда начинайте с реальных предметов и измерений. Только после практического опыта переходите к задачам "на бумаге".
                    </p>
                    <div className="bg-white rounded p-3 text-sm">
                      <p className="font-semibold mb-1">Пример:</p>
                      <p>❌ Сразу: "Реши задачу: 3 кг 200 г + 1 кг 900 г"</p>
                      <p>✅ Сначала: взвесьте 2 предмета, сложите их массы физически, затем запишите математически</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50">
                    <h3 className="font-bold text-lg mb-2">2. Визуализация величин</h3>
                    <p className="text-gray-700 mb-2">
                      Создайте "якоря памяти" — ассоциации единиц измерения с конкретными предметами.
                    </p>
                    <div className="bg-white rounded p-3 text-sm space-y-1">
                      <p>• 1 грамм ≈ скрепка</p>
                      <p>• 1 кг ≈ пакет сахара</p>
                      <p>• 1 см ≈ ширина мизинца</p>
                      <p>• 1 метр ≈ большой шаг</p>
                      <p>• 1 литр ≈ пакет молока</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50">
                    <h3 className="font-bold text-lg mb-2">3. Таблица преобразований всегда под рукой</h3>
                    <p className="text-gray-700 mb-2">
                      Первые 2-3 недели разрешайте пользоваться таблицей преобразований. Постепенно ученики запомнят коэффициенты.
                    </p>
                    <div className="bg-white rounded p-3 text-sm">
                      <p className="font-semibold mb-1">Повесьте в классе плакат:</p>
                      <p>1 т = 1000 кг | 1 кг = 1000 г | 1 км = 1000 м | 1 м = 100 см | 1 ч = 60 мин | 1 л = 1000 мл</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50">
                    <h3 className="font-bold text-lg mb-2">4. Ошибки — это нормально</h3>
                    <p className="text-gray-700 mb-2">
                      Создайте культуру, где ошибка — это возможность научиться. Разбирайте типичные ошибки всем классом.
                    </p>
                    <div className="bg-white rounded p-3 text-sm">
                      <p className="font-semibold mb-1">Типичные ошибки учеников:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Путают операции: "Чтобы перевести кг в г, надо разделить" (нет, умножить!)</li>
                        <li>Забывают промежуточный шаг: 5 кг 300 г + 2 кг 900 г = 7 кг 1200 г (не перевели 1200 г в кг)</li>
                        <li>Путают см² и см при вычислении площади</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
                    <h3 className="font-bold text-lg mb-2">5. Дифференциация по уровням</h3>
                    <p className="text-gray-700 mb-2">
                      В классе всегда есть ученики с разной скоростью усвоения. Готовьте задания 3 уровней сложности.
                    </p>
                    <div className="bg-white rounded p-3 text-sm">
                      <p className="font-semibold mb-1">Пример по теме "Масса":</p>
                      <p><strong>Уровень 1:</strong> 3 кг = ? г (прямое преобразование)</p>
                      <p><strong>Уровень 2:</strong> 2 кг 400 г + 1 кг 800 г = ? (сложение с переводом)</p>
                      <p><strong>Уровень 3:</strong> Арбуз на 2 кг 300 г легче, чем дыня. Вместе они весят 9 кг. Сколько весит арбуз? (задача на уравнение)</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 py-3 bg-cyan-50">
                    <h3 className="font-bold text-lg mb-2">6. Связь с жизнью</h3>
                    <p className="text-gray-700 mb-2">
                      Показывайте, где величины используются в реальной жизни. Это повышает мотивацию.
                    </p>
                    <div className="bg-white rounded p-3 text-sm space-y-2">
                      <p><strong>Масса:</strong> кулинарные рецепты, покупка продуктов, багаж в самолёте</p>
                      <p><strong>Длина:</strong> ремонт, строительство, пошив одежды, спорт (дистанции)</p>
                      <p><strong>Время:</strong> расписание транспорта, планирование дня, приготовление еды</p>
                      <p><strong>Объём:</strong> топливо в машине, дозировка лекарств, аквариумистика</p>
                      <p><strong>Площадь:</strong> покупка квартиры, земельный участок, напольное покрытие</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 py-3 bg-pink-50">
                    <h3 className="font-bold text-lg mb-2">7. Регулярность важнее длительности</h3>
                    <p className="text-gray-700 mb-2">
                      Лучше 15 минут каждый день, чем 2 часа раз в неделю. Включайте "величинную разминку" в начало каждого урока математики.
                    </p>
                    <div className="bg-white rounded p-3 text-sm">
                      <p><strong>Формат "разминки":</strong> 3-5 быстрых вопросов устно (1-2 минуты)</p>
                      <p>• 5 км = ? м</p>
                      <p>• Что больше: 3000 г или 3 кг 50 г?</p>
                      <p>• Сколько минут в 2 часах?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-yellow-50 border-yellow-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlertTriangle" size={24} className="text-yellow-600" />
                    Частые педагогические ошибки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">❌</span>
                      <div>
                        <strong>Слишком быстрый переход к задачам:</strong> не давайте задачи на преобразования, пока ученики не освоили базовые единицы
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">❌</span>
                      <div>
                        <strong>Отсутствие практики:</strong> теория без измерения реальных предметов быстро забывается
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">❌</span>
                      <div>
                        <strong>Игнорирование ошибок:</strong> если ученик неправильно переводит единицы, сразу выясните, в чём проблема
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">❌</span>
                      <div>
                        <strong>Однообразие:</strong> только решение задач из учебника быстро надоедает, чередуйте с играми и практикой
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">❌</span>
                      <div>
                        <strong>Отсутствие контроля понимания:</strong> после объяснения всегда спрашивайте: "Кто может объяснить своими словами?"
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="FileText" size={24} className="text-blue-600" />
                    </div>
                    <CardTitle>Раздаточные материалы</CardTitle>
                    <CardDescription>Готовые карточки для печати</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Таблицы преобразований (PDF)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Карточки для игры "Бинго" (PDF)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Домино "Величины" (PDF)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Бланки для самостоятельных работ (PDF)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать все материалы
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Presentation" size={24} className="text-purple-600" />
                    </div>
                    <CardTitle>Презентации</CardTitle>
                    <CardDescription>Слайды для интерактивной доски</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Урок 1: Масса (PPTX, 15 слайдов)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Урок 3: Длина (PPTX, 18 слайдов)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Урок 5: Время (PPTX, 20 слайдов)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Все презентации (ZIP, 12 файлов)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать презентации
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="ClipboardList" size={24} className="text-green-600" />
                    </div>
                    <CardTitle>Проверочные работы</CardTitle>
                    <CardDescription>С ответами и критериями оценивания</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Тест 1: Масса и длина (2 варианта)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Тест 2: Время и объём (2 варианта)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Тест 3: Площадь и скорость (2 варианта)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Download" size={16} className="text-gray-400" />
                        <span>Итоговая контрольная (3 варианта)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать тесты
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Video" size={24} className="text-orange-600" />
                    </div>
                    <CardTitle>Видеоуроки</CardTitle>
                    <CardDescription>Для смешанного обучения</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Play" size={16} className="text-gray-400" />
                        <span>Преобразование единиц массы (12 мин)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Play" size={16} className="text-gray-400" />
                        <span>Периметр и площадь (15 мин)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Play" size={16} className="text-gray-400" />
                        <span>Задачи на скорость (18 мин)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Play" size={16} className="text-gray-400" />
                        <span>Объём фигур (10 мин)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Смотреть видео
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="py-8">
                  <div className="text-center">
                    <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Платформа для учителей</h3>
                    <p className="text-lg mb-4 max-w-2xl mx-auto opacity-95">
                      Все материалы интегрированы с нашей платформой. Вы можете назначать задания ученикам, 
                      отслеживать прогресс и получать аналитику по классу.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        onClick={() => window.location.href = '/tasks'}
                      >
                        <Icon name="Target" size={20} className="mr-2" />
                        Посмотреть задания
                      </Button>
                      <Button 
                        size="lg" 
                        className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20"
                      >
                        <Icon name="BarChart" size={20} className="mr-2" />
                        Статистика класса
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="border-2 bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="MessageCircle" size={28} className="text-blue-600" />
                Нужна помощь или консультация?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Мы всегда готовы помочь учителям в подготовке учеников к олимпиадам. 
                Если у вас есть вопросы по методике или нужны дополнительные материалы — свяжитесь с нами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => window.location.href = '/feedback'}>
                  <Icon name="Mail" size={18} className="mr-2" />
                  Написать нам
                </Button>
                <Button variant="outline">
                  <Icon name="Users" size={18} className="mr-2" />
                  Сообщество учителей
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ForTeachers;
