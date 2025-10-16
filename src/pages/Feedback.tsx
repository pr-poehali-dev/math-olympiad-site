import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    rating: 0,
    message: '',
    suggestions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '✅ Спасибо за ваш отзыв!',
      description: 'Мы обязательно учтём ваши пожелания и предложения.',
    });
    setFormData({
      name: '',
      email: '',
      role: '',
      rating: 0,
      message: '',
      suggestions: ''
    });
  };

  const roles = [
    { id: 'student', name: 'Школьник', icon: 'User' },
    { id: 'teacher', name: 'Учитель', icon: 'GraduationCap' },
    { id: 'parent', name: 'Родитель', icon: 'Users' }
  ];

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
              <h1 className="text-3xl font-bold">Обратная связь</h1>
            </div>
            <Button
              className="bg-white text-blue-600 hover:bg-white/90"
              onClick={() => window.location.href = '/tasks'}
            >
              <Icon name="Target" size={18} className="mr-2" />
              К заданиям
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageSquare" size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ваше мнение важно для нас</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Помогите нам стать лучше! Поделитесь своими впечатлениями, предложениями или сообщите о проблемах.
          </p>
        </div>

        <Card className="border-2 shadow-2xl animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
            <CardDescription className="text-base">
              Все поля обязательны для заполнения
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-semibold">Вы являетесь:</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roles.map((role) => (
                    <Card
                      key={role.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${formData.role === role.id
                          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white border-blue-600'
                          : 'hover:border-blue-300'
                        }`}
                      onClick={() => setFormData({ ...formData, role: role.id })}
                    >
                      <CardContent className="p-6 flex flex-col items-center gap-3">
                        <Icon name={role.icon as any} size={32} />
                        <span className="font-semibold">{role.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base font-semibold">
                  Оцените платформу
                </Label>
                <div className="flex gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition-transform hover:scale-110"
                    >
                      <Icon
                        name={formData.rating >= star ? 'Star' : 'Star'}
                        size={40}
                        className={formData.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    </button>
                  ))}
                </div>
                {formData.rating > 0 && (
                  <p className="text-center text-sm text-gray-600">
                    {formData.rating === 5 && 'Отлично! Спасибо!'}
                    {formData.rating === 4 && 'Хорошо!'}
                    {formData.rating === 3 && 'Неплохо'}
                    {formData.rating === 2 && 'Есть что улучшить'}
                    {formData.rating === 1 && 'Что-то пошло не так'}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  Ваш отзыв или вопрос
                </Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите, что вам понравилось или что можно улучшить..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="resize-none text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions" className="text-base font-semibold">
                  Предложения и пожелания
                </Label>
                <Textarea
                  id="suggestions"
                  placeholder="Какие функции или темы вы бы хотели увидеть на платформе?"
                  value={formData.suggestions}
                  onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                  rows={4}
                  className="resize-none text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 shadow-xl"
              >
                <Icon name="Send" size={22} className="mr-2" />
                Отправить отзыв
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} className="text-blue-600" />
              </div>
              <CardTitle className="text-xl">Email</CardTitle>
              <CardDescription className="text-base">
                support@matmaster.ru
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Phone" size={28} className="text-green-600" />
              </div>
              <CardTitle className="text-xl">Телефон</CardTitle>
              <CardDescription className="text-base">
                +7 (999) 123-45-67
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                <Icon name="MessageCircle" size={28} className="text-purple-600" />
              </div>
              <CardTitle className="text-xl">Онлайн-чат</CardTitle>
              <CardDescription className="text-base">
                Ответим в течение 5 минут
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Icon name="HeartHandshake" size={32} className="text-red-500" />
              Часто задаваемые вопросы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-blue-600" />
                Как получить доступ к дополнительным заданиям?
              </h3>
              <p className="text-gray-700 pl-7">
                Все задания доступны бесплатно. Регулярно добавляются новые задачи разных уровней сложности.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-blue-600" />
                Можно ли скачать задания для печати?
              </h3>
              <p className="text-gray-700 pl-7">
                Да, функция скачивания заданий в PDF-формате находится в разработке и скоро будет доступна.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-blue-600" />
                Есть ли мобильное приложение?
              </h3>
              <p className="text-gray-700 pl-7">
                Сайт адаптирован для мобильных устройств. Нативное приложение планируется к выпуску в 2025 году.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-blue-600" />
                Как учителю получить доступ к статистике учеников?
              </h3>
              <p className="text-gray-700 pl-7">
                Для учителей разрабатывается специальная панель управления с аналитикой по каждому ученику. Свяжитесь с нами для участия в бета-тестировании.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 mb-2">© 2024 МатМастер: Величины</p>
          <p className="text-sm text-gray-500">Платформа для подготовки к математическим олимпиадам</p>
        </div>
      </footer>
    </div>
  );
};

export default Feedback;
