import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ForParents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={28} className="text-blue-600" />
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
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6">
              <Icon name="Heart" size={24} className="text-blue-600" />
              <span className="font-semibold text-blue-900">Для родителей</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Помогите ребёнку подготовиться к олимпиаде
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Практические рекомендации и советы, как поддержать школьника в изучении темы "Величины"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <CardTitle>15-30 минут в день</CardTitle>
                <CardDescription>
                  Оптимальное время для эффективных занятий без переутомления
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Target" size={24} className="text-green-600" />
                </div>
                <CardTitle>Системный подход</CardTitle>
                <CardDescription>
                  Регулярные занятия 3-4 раза в неделю дают лучший результат, чем редкие марафоны
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="ThumbsUp" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Поддержка</CardTitle>
                <CardDescription>
                  Хвалите за старания, а не только за правильные ответы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-16 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">📋 Пошаговый план подготовки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Неделя 1-2: Основы</h3>
                  <p className="text-gray-600 mb-3">
                    Начните с изучения базовых единиц измерения. Пусть ребёнок изучит разделы "Масса", "Длина" и "Время" в теории.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Познакомьтесь с единицами измерения в быту (взвесьте продукты, измерьте мебель)</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Решайте простые задачи на платформе (уровень 1-2)</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Используйте кухонные весы, линейку, секундомер для практики</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Неделя 3-4: Преобразования</h3>
                  <p className="text-gray-600 mb-3">
                    Научите ребёнка переводить одни единицы в другие. Это ключевой навык для олимпиад.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Проходите упражнения на преобразование в разделе "Теория"</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Играйте в викторины на платформе (раздел "Игры")</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Создавайте карточки с примерами: "5 кг 300 г = ? г"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Неделя 5-6: Задачи повышенной сложности</h3>
                  <p className="text-gray-600 mb-3">
                    Переходите к комплексным задачам, где нужно применять несколько действий.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Решайте задачи уровня 3-4 на платформе</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Обсуждайте разные способы решения одной задачи</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Придумывайте свои задачи на основе реальных ситуаций</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Неделя 7-8: Олимпиадные задачи</h3>
                  <p className="text-gray-600 mb-3">
                    Пришло время для задач олимпиадного уровня с нестандартными подходами.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Решайте задачи уровня 5 (самые сложные)</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Проходите тренировочные тесты в ограниченное время</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Разбирайте ошибки и находите альтернативные решения</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-16 border-2 border-yellow-300 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Lightbulb" size={28} className="text-yellow-600" />
                Практические советы для домашних занятий
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="ShoppingCart" size={20} />
                    В магазине
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Сравнивайте массу продуктов на весах</li>
                    <li>• Считайте общую массу покупок</li>
                    <li>• Переводите цены за 1 кг в цены за 100 г</li>
                    <li>• Оценивайте объём упаковок (мл, л)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Utensils" size={20} />
                    На кухне
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Измеряйте ингредиенты для рецептов</li>
                    <li>• Засекайте время приготовления</li>
                    <li>• Сравнивайте объёмы разной посуды</li>
                    <li>• Взвешивайте продукты до и после готовки</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Car" size={20} />
                    В дороге
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Измеряйте расстояния на карте</li>
                    <li>• Считайте время в пути</li>
                    <li>• Определяйте скорость движения</li>
                    <li>• Оценивайте расход топлива на 100 км</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Home" size={20} />
                    Дома
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Измеряйте площадь комнат</li>
                    <li>• Вычисляйте периметр мебели</li>
                    <li>• Сравнивайте объёмы коробок</li>
                    <li>• Планируйте распорядок дня с учётом времени</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-16 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">❓ Частые вопросы родителей</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Ребёнок постоянно ошибается в преобразованиях. Что делать?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-2">
                    <p>
                      Это нормально на начальном этапе! Попробуйте такой подход:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Создайте таблицу преобразований и повесьте на видное место</li>
                      <li>Используйте мнемонические правила: "Умножаем — идём к маленьким, делим — к большим"</li>
                      <li>Практикуйтесь на реальных предметах: взвешивайте, измеряйте линейкой</li>
                      <li>Начинайте с простых переводов (кг ↔ г), постепенно усложняйте</li>
                      <li>Проходите викторины на платформе — игровая форма помогает запомнить</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Сколько времени нужно на подготовку к олимпиаде?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Оптимальный срок подготовки — 2-3 месяца при занятиях 3-4 раза в неделю по 20-30 минут.
                    </p>
                    <p className="mb-2">
                      <strong>Минимальный срок:</strong> 4-6 недель интенсивных занятий (5-6 раз в неделю по 30-40 минут) — если ребёнок уже хорошо знает базовые операции с числами.
                    </p>
                    <p>
                      <strong>Комфортный срок:</strong> 3-4 месяца с постепенным нарастанием сложности — подходит для большинства школьников.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Ребёнок теряет мотивацию. Как поддержать интерес?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-2">
                    <p>Попробуйте эти методы:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Игровой подход:</strong> используйте раздел "Игры" на платформе, устраивайте соревнования</li>
                      <li><strong>Визуализация прогресса:</strong> ведите таблицу достижений, отмечайте пройденные уровни</li>
                      <li><strong>Связь с реальностью:</strong> показывайте, как величины используются в жизни (спорт, путешествия, готовка)</li>
                      <li><strong>Небольшие награды:</strong> за прохождение уровней (не обязательно материальные)</li>
                      <li><strong>Разнообразие:</strong> чередуйте теорию, задачи, игры и практические задания</li>
                      <li><strong>Социальный аспект:</strong> занимайтесь вместе с друзьями, обсуждайте задачи</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Какие темы самые сложные для детей?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-2">
                    <p>По статистике, наибольшие трудности вызывают:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li><strong>Площадь и объём:</strong> путают единицы (м² vs м³), забывают возводить в квадрат/куб при преобразовании</li>
                      <li><strong>Составные задачи:</strong> где нужно применить несколько действий последовательно</li>
                      <li><strong>Время:</strong> вычисления через "границу" часа (например, 2 ч 15 мин − 45 мин)</li>
                      <li><strong>Скорость:</strong> особенно задачи на встречное движение и движение вдогонку</li>
                    </ol>
                    <p className="mt-2">
                      <strong>Совет:</strong> уделите этим темам больше времени, используйте визуализацию (рисунки, схемы, модели).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Нужно ли учить все формулы наизусть?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-2">
                    <p>
                      <strong>Базовые формулы — да, нужно знать наизусть:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Периметр и площадь прямоугольника, квадрата</li>
                      <li>Объём куба и параллелепипеда</li>
                      <li>Формулы скорости: S = v × t, v = S ÷ t, t = S ÷ v</li>
                      <li>Основные преобразования единиц (1 км = 1000 м, 1 кг = 1000 г и т.д.)</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Но важнее понимание:</strong> лучше понимать, откуда берётся формула, чем зубрить её. Например, площадь прямоугольника — это количество квадратных сантиметров, которые в него помещаются.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Как проверить готовность к олимпиаде?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-2">
                    <p>Ребёнок готов, если он может:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>✅ Быстро переводить единицы измерения (не более 30 секунд на задание)</li>
                      <li>✅ Решать задачи уровня 4 на платформе с точностью 70-80%</li>
                      <li>✅ Объяснить своё решение и найти альтернативный способ</li>
                      <li>✅ Справляться с тестом из 10 задач за 30-40 минут</li>
                      <li>✅ Не теряться при виде нестандартной формулировки</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Тестовый прогон:</strong> дайте ребёнку пройти полноценную тренировочную олимпиаду на платформе (раздел "Задания" → Тренировочный тест). Результат 60% и выше — хороший показатель готовности.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="py-8">
              <div className="text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Главное правило</h3>
                <p className="text-lg mb-4 max-w-2xl mx-auto opacity-95">
                  Ваша поддержка и вера в ребёнка важнее любых методик. Хвалите за старания, 
                  а не только за результат. Ошибки — это нормальная часть обучения!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => window.location.href = '/theory'}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать занятия вместе
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
