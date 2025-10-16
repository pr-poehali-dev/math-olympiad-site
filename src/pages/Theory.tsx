import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Theory = () => {
  const [activeSection, setActiveSection] = useState('mass');

  const theoryData = {
    mass: {
      title: 'Масса',
      icon: 'Weight',
      color: 'from-orange-500 to-red-500',
      content: {
        basics: {
          title: 'Основные единицы массы',
          items: [
            { unit: '1 тонна (т)', equals: '1000 кг', example: 'Масса легкового автомобиля' },
            { unit: '1 центнер (ц)', equals: '100 кг', example: 'Мешок картофеля' },
            { unit: '1 килограмм (кг)', equals: '1000 г', example: 'Пакет сахара' },
            { unit: '1 грамм (г)', equals: '1000 мг', example: 'Скрепка' },
            { unit: '1 миллиграмм (мг)', equals: '0.001 г', example: 'Крупинка соли' }
          ]
        },
        conversions: {
          title: 'Преобразование единиц',
          rules: [
            'Чтобы перевести тонны в кг → умножь на 1000',
            'Чтобы перевести кг в граммы → умножь на 1000',
            'Чтобы перевести граммы в кг → раздели на 1000',
            'Чтобы перевести кг в тонны → раздели на 1000'
          ],
          examples: [
            { problem: '3 т 450 кг = ? кг', solution: '3 × 1000 + 450 = 3450 кг' },
            { problem: '5600 г = ? кг ? г', solution: '5600 ÷ 1000 = 5 кг 600 г' },
            { problem: '2 т 50 кг + 1 т 980 кг', solution: '2050 кг + 1980 кг = 4030 кг = 4 т 30 кг' }
          ]
        },
        tips: [
          '💡 Всегда приводи к одной единице измерения перед вычислениями',
          '💡 Проверяй ответ: он должен быть логичным (слон не может весить 50 г)',
          '💡 При сравнении масс удобно всё переводить в граммы или килограммы'
        ]
      }
    },
    length: {
      title: 'Длина и расстояние',
      icon: 'Ruler',
      color: 'from-blue-500 to-cyan-500',
      content: {
        basics: {
          title: 'Основные единицы длины',
          items: [
            { unit: '1 километр (км)', equals: '1000 м', example: 'Расстояние между районами города' },
            { unit: '1 метр (м)', equals: '10 дм = 100 см', example: 'Высота стола' },
            { unit: '1 дециметр (дм)', equals: '10 см', example: 'Длина карандаша' },
            { unit: '1 сантиметр (см)', equals: '10 мм', example: 'Ширина пальца' },
            { unit: '1 миллиметр (мм)', equals: '0.1 см', example: 'Толщина монеты' }
          ]
        },
        conversions: {
          title: 'Преобразование единиц',
          rules: [
            'Чтобы перевести км в метры → умножь на 1000',
            'Чтобы перевести метры в см → умножь на 100',
            'Чтобы перевести см в мм → умножь на 10',
            'Для обратного перевода → дели на соответствующее число'
          ],
          examples: [
            { problem: '2 км 350 м = ? м', solution: '2 × 1000 + 350 = 2350 м' },
            { problem: '4 м 25 см = ? см', solution: '4 × 100 + 25 = 425 см' },
            { problem: '15 дм 8 см = ? см', solution: '15 × 10 + 8 = 158 см' }
          ]
        },
        perimeter: {
          title: 'Периметр',
          formulas: [
            'Периметр прямоугольника: P = 2 × (a + b), где a и b — стороны',
            'Периметр квадрата: P = 4 × a, где a — сторона',
            'Периметр треугольника: P = a + b + c, где a, b, c — стороны'
          ],
          examples: [
            { problem: 'Найди периметр прямоугольника со сторонами 12 см и 8 см', solution: 'P = 2 × (12 + 8) = 2 × 20 = 40 см' }
          ]
        },
        tips: [
          '💡 Периметр — это сумма длин всех сторон фигуры',
          '💡 Запомни: 1 км = 1000 м, 1 м = 100 см, 1 см = 10 мм',
          '💡 При решении задач на движение длина пути = скорость × время'
        ]
      }
    },
    time: {
      title: 'Время',
      icon: 'Clock',
      color: 'from-green-500 to-emerald-500',
      content: {
        basics: {
          title: 'Основные единицы времени',
          items: [
            { unit: '1 век', equals: '100 лет', example: 'XX век — с 1901 по 2000 год' },
            { unit: '1 год', equals: '12 месяцев = 365 дней', example: 'Время полного оборота Земли вокруг Солнца' },
            { unit: '1 месяц', equals: '28-31 день', example: 'Январь, февраль, март...' },
            { unit: '1 неделя', equals: '7 дней', example: 'Понедельник — воскресенье' },
            { unit: '1 сутки', equals: '24 часа', example: 'День и ночь' },
            { unit: '1 час (ч)', equals: '60 минут', example: 'Урок в школе' },
            { unit: '1 минута (мин)', equals: '60 секунд', example: 'Время для чистки зубов' },
            { unit: '1 секунда (с)', equals: 'базовая единица', example: 'Один удар сердца' }
          ]
        },
        conversions: {
          title: 'Преобразование единиц',
          rules: [
            'Чтобы перевести часы в минуты → умножь на 60',
            'Чтобы перевести минуты в секунды → умножь на 60',
            'Чтобы перевести сутки в часы → умножь на 24',
            'Для обратного перевода → дели на соответствующее число'
          ],
          examples: [
            { problem: '2 ч 35 мин = ? мин', solution: '2 × 60 + 35 = 155 мин' },
            { problem: '3 ч 20 мин 15 с = ? с', solution: '(3 × 60 + 20) × 60 + 15 = 12015 с' },
            { problem: '250 мин = ? ч ? мин', solution: '250 ÷ 60 = 4 ч 10 мин' }
          ]
        },
        calendar: {
          title: 'Календарь',
          info: [
            'В году 365 дней (в високосном — 366)',
            'Месяцы по 31 день: январь, март, май, июль, август, октябрь, декабрь',
            'Месяцы по 30 дней: апрель, июнь, сентябрь, ноябрь',
            'Февраль: 28 дней (в високосном году — 29)'
          ]
        },
        tips: [
          '💡 В сутках 24 часа, в часе 60 минут, в минуте 60 секунд',
          '💡 Помни правило: "В високосном феврале 29 дней"',
          '💡 При вычитании времени: 1 час = 60 минут, занимай при необходимости'
        ]
      }
    },
    volume: {
      title: 'Объём',
      icon: 'Container',
      color: 'from-purple-500 to-pink-500',
      content: {
        basics: {
          title: 'Основные единицы объёма',
          items: [
            { unit: '1 кубический метр (м³)', equals: '1000 л', example: 'Небольшая комната' },
            { unit: '1 литр (л)', equals: '1000 мл = 1 дм³', example: 'Пакет молока' },
            { unit: '1 миллилитр (мл)', equals: '1 см³', example: 'Капля воды' }
          ]
        },
        conversions: {
          title: 'Преобразование единиц',
          rules: [
            'Чтобы перевести литры в мл → умножь на 1000',
            'Чтобы перевести м³ в литры → умножь на 1000',
            'Чтобы перевести мл в литры → раздели на 1000'
          ],
          examples: [
            { problem: '5 л 250 мл = ? мл', solution: '5 × 1000 + 250 = 5250 мл' },
            { problem: '3500 мл = ? л ? мл', solution: '3500 ÷ 1000 = 3 л 500 мл' },
            { problem: '2 м³ = ? л', solution: '2 × 1000 = 2000 л' }
          ]
        },
        formulas: {
          title: 'Объём фигур',
          items: [
            'Объём куба: V = a³, где a — сторона куба',
            'Объём прямоугольного параллелепипеда: V = a × b × c',
            'Объём цилиндра: V = πr²h (для олимпиад высокого уровня)'
          ],
          examples: [
            { problem: 'Найди объём куба со стороной 5 см', solution: 'V = 5³ = 125 см³' }
          ]
        },
        tips: [
          '💡 1 литр = 1 дм³ = 1000 см³',
          '💡 Объём жидкости измеряется в литрах и миллилитрах',
          '💡 При решении задач на наполнение помни: объём = расход × время'
        ]
      }
    },
    area: {
      title: 'Площадь',
      icon: 'Square',
      color: 'from-yellow-500 to-orange-500',
      content: {
        basics: {
          title: 'Основные единицы площади',
          items: [
            { unit: '1 квадратный километр (км²)', equals: '1 000 000 м²', example: 'Площадь района города' },
            { unit: '1 гектар (га)', equals: '10 000 м²', example: 'Футбольное поле' },
            { unit: '1 ар (a) или сотка', equals: '100 м²', example: 'Дачный участок' },
            { unit: '1 квадратный метр (м²)', equals: '100 дм²', example: 'Небольшой ковёр' },
            { unit: '1 квадратный сантиметр (см²)', equals: '100 мм²', example: 'Почтовая марка' }
          ]
        },
        conversions: {
          title: 'Преобразование единиц',
          rules: [
            'Чтобы перевести км² в м² → умножь на 1 000 000',
            'Чтобы перевести га в м² → умножь на 10 000',
            'Чтобы перевести м² в см² → умножь на 10 000',
            'Внимание: при возведении в квадрат коэффициент тоже возводится в квадрат!'
          ],
          examples: [
            { problem: '3 км² = ? м²', solution: '3 × 1 000 000 = 3 000 000 м²' },
            { problem: '5 га = ? м²', solution: '5 × 10 000 = 50 000 м²' },
            { problem: '2 м² 50 см² = ? см²', solution: '2 × 10 000 + 50 = 20 050 см²' }
          ]
        },
        formulas: {
          title: 'Формулы площади',
          items: [
            'Площадь прямоугольника: S = a × b, где a и b — стороны',
            'Площадь квадрата: S = a², где a — сторона',
            'Площадь треугольника: S = (a × h) ÷ 2, где a — основание, h — высота',
            'Площадь круга: S = πr² (для продвинутого уровня)'
          ],
          examples: [
            { problem: 'Найди площадь прямоугольника 12 м × 8 м', solution: 'S = 12 × 8 = 96 м²' },
            { problem: 'Найди площадь квадрата со стороной 9 см', solution: 'S = 9² = 81 см²' }
          ]
        },
        tips: [
          '💡 Площадь — это количество квадратных единиц внутри фигуры',
          '💡 При умножении длин получается площадь: м × м = м²',
          '💡 1 га = 100 м × 100 м = 10 000 м²'
        ]
      }
    },
    speed: {
      title: 'Скорость',
      icon: 'Zap',
      color: 'from-indigo-500 to-purple-500',
      content: {
        basics: {
          title: 'Основные понятия',
          items: [
            { unit: 'Скорость (v)', equals: 'расстояние за единицу времени', example: 'км/ч, м/с, м/мин' },
            { unit: 'Расстояние (s)', equals: 'пройденный путь', example: 'км, м, см' },
            { unit: 'Время (t)', equals: 'продолжительность движения', example: 'ч, мин, с' }
          ]
        },
        formulas: {
          title: 'Формулы',
          items: [
            'Скорость: v = s ÷ t',
            'Расстояние: s = v × t',
            'Время: t = s ÷ v',
            'Скорость сближения: v₁ + v₂ (при встречном движении)',
            'Скорость удаления: v₁ + v₂ (при движении в разные стороны)',
            'Скорость догона: v₁ - v₂ (при движении в одну сторону)'
          ]
        },
        conversions: {
          title: 'Преобразование единиц скорости',
          rules: [
            'Чтобы перевести км/ч в м/с → раздели на 3,6',
            'Чтобы перевести м/с в км/ч → умножь на 3,6',
            'Чтобы перевести км/ч в м/мин → умножь на 1000 и раздели на 60'
          ],
          examples: [
            { problem: '72 км/ч = ? м/с', solution: '72 ÷ 3,6 = 20 м/с' },
            { problem: 'Поезд едет 80 км/ч. За 3 часа какой путь?', solution: 's = 80 × 3 = 240 км' },
            { problem: 'Машина проехала 150 км за 2 часа. Найди скорость', solution: 'v = 150 ÷ 2 = 75 км/ч' }
          ]
        },
        tips: [
          '💡 Запомни треугольник: S вверху, V и T внизу',
          '💡 При встречном движении объекты сближаются быстрее',
          '💡 Всегда проверяй единицы измерения — они должны соответствовать!'
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" size={20} className="mr-2" />
                Главная
              </Button>
              <h1 className="text-3xl font-bold">Теория: Величины</h1>
            </div>
            <Button 
              className="bg-white text-blue-600 hover:bg-white/90"
              onClick={() => window.location.href = '/tasks'}
            >
              К заданиям
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Выбери раздел для изучения</h2>
          <p className="text-xl text-gray-600">Подробная теория с примерами и формулами</p>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent mb-8">
            {Object.entries(theoryData).map(([key, data]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`h-auto py-4 px-3 flex flex-col items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:${data.color} data-[state=active]:text-white rounded-xl border-2 transition-all hover:scale-105`}
              >
                <Icon name={data.icon as any} size={28} />
                <span className="font-semibold text-sm">{data.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(theoryData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <Card className="border-2 shadow-xl">
                <CardHeader className={`bg-gradient-to-r ${data.color} text-white rounded-t-lg`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon name={data.icon as any} size={36} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">{data.title}</CardTitle>
                      <CardDescription className="text-white/90 text-lg">
                        Основные понятия, формулы и примеры
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {data.content.basics && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Info" size={24} className="text-blue-600" />
                        {data.content.basics.title}
                      </h3>
                      <div className="grid gap-3">
                        {data.content.basics.items.map((item: any, idx: number) => (
                          <Card key={idx} className="border-l-4 border-blue-500 bg-blue-50/50">
                            <CardContent className="p-4">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div className="flex-1">
                                  <span className="font-bold text-lg">{item.unit}</span>
                                  <span className="text-gray-600 mx-3">=</span>
                                  <span className="text-blue-600 font-semibold">{item.equals}</span>
                                </div>
                                <div className="text-sm text-gray-600 italic">
                                  Пример: {item.example}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {data.content.conversions && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="ArrowLeftRight" size={24} className="text-purple-600" />
                        {data.content.conversions.title}
                      </h3>
                      <Card className="bg-purple-50/50 border-purple-200 mb-4">
                        <CardContent className="p-6">
                          <h4 className="font-bold mb-3 text-lg">Правила:</h4>
                          <ul className="space-y-2">
                            {data.content.conversions.rules.map((rule: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="CheckCircle" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      <h4 className="font-bold mb-3 text-lg">Примеры:</h4>
                      <div className="space-y-3">
                        {data.content.conversions.examples.map((ex: any, idx: number) => (
                          <Card key={idx} className="bg-green-50/50 border-green-200">
                            <CardContent className="p-4">
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                  <Icon name="Calculator" size={18} className="text-green-600" />
                                  <span className="font-semibold">{ex.problem}</span>
                                </div>
                                <div className="pl-7 text-green-700 font-medium">
                                  Решение: {ex.solution}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {data.content.perimeter && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Hexagon" size={24} className="text-orange-600" />
                        {data.content.perimeter.title}
                      </h3>
                      <Card className="bg-orange-50/50 border-orange-200 mb-4">
                        <CardContent className="p-6">
                          <h4 className="font-bold mb-3 text-lg">Формулы:</h4>
                          <ul className="space-y-2">
                            {data.content.perimeter.formulas.map((formula: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="Circle" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                                <span className="font-mono bg-white px-3 py-1 rounded">{formula}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      {data.content.perimeter.examples.map((ex: any, idx: number) => (
                        <Card key={idx} className="bg-green-50/50 border-green-200">
                          <CardContent className="p-4">
                            <div className="flex flex-col gap-2">
                              <div className="font-semibold">{ex.problem}</div>
                              <div className="text-green-700 font-medium">Решение: {ex.solution}</div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {data.content.formulas && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="BookOpen" size={24} className="text-indigo-600" />
                        {data.content.formulas.title}
                      </h3>
                      <Card className="bg-indigo-50/50 border-indigo-200 mb-4">
                        <CardContent className="p-6">
                          <ul className="space-y-2">
                            {data.content.formulas.items.map((formula: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="Sparkles" size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span className="font-mono bg-white px-3 py-1 rounded">{formula}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      {data.content.formulas.examples && data.content.formulas.examples.map((ex: any, idx: number) => (
                        <Card key={idx} className="bg-green-50/50 border-green-200">
                          <CardContent className="p-4">
                            <div className="flex flex-col gap-2">
                              <div className="font-semibold">{ex.problem}</div>
                              <div className="text-green-700 font-medium">Решение: {ex.solution}</div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {data.content.calendar && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Calendar" size={24} className="text-pink-600" />
                        {data.content.calendar.title}
                      </h3>
                      <Card className="bg-pink-50/50 border-pink-200">
                        <CardContent className="p-6">
                          <ul className="space-y-2">
                            {data.content.calendar.info.map((info: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="CheckCircle" size={20} className="text-pink-600 flex-shrink-0 mt-0.5" />
                                <span>{info}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {data.content.tips && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Lightbulb" size={24} className="text-yellow-600" />
                        Полезные советы
                      </h3>
                      <Card className="bg-yellow-50/50 border-yellow-300">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {data.content.tips.map((tip: string, idx: number) => (
                              <li key={idx} className="text-lg">
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  <div className="flex justify-center pt-6">
                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${data.color} text-white hover:scale-105 transition-transform px-10 py-6 text-lg`}
                      onClick={() => window.location.href = '/tasks'}
                    >
                      Перейти к заданиям по теме
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Theory;
