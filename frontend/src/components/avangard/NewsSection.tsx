import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Eye, X, Play, Zap, Star, Sparkles, TrendingUp } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  views: number;
}

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Новая линия экструзии увеличила производительность на 40%',
      excerpt: 'Запуск современного оборудования позволил значительно расширить производственные мощности',
      content: `Компания "Авангард" завершила установку новой высокотехнологичной линии экструзии алюминиевых профилей. Новое оборудование немецкого производства позволило увеличить производительность на 40% и значительно улучшить качество готовой продукции.

Основные преимущества новой линии:
• Точность геометрии профилей повышена до ±0,05 мм
• Скорость экструзии увеличена до 15 м/мин
• Автоматизированный контроль качества на всех этапах
• Энергоэффективность на 25% выше предыдущего оборудования

Инвестиции в модернизацию производства составили 45 млн рублей. Это позволит нам не только увеличить объемы выпуска, но и расширить ассортимент продукции, включив новые типы профилей для специализированных применений.

Генеральный директор отметил: "Данная модернизация - важный шаг в развитии компании. Мы продолжаем инвестировать в передовые технологии, чтобы предоставлять нашим клиентам продукцию высочайшего качества."`,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 января 2025',
      readTime: '3 мин',
      category: 'Производство',
      views: 1247
    },
    {
      id: 2,
      title: 'Экологическая программа: переработано 500 тонн алюминиевого лома',
      excerpt: 'Достигнут важный рубеж в программе экологической ответственности компании',
      content: `Компания "Авангард" достигла значимого результата в рамках программы экологической ответственности - за 2024 год переработано более 500 тонн алюминиевого лома.

Ключевые достижения программы:
• 500+ тонн переработанного алюминиевого лома
• Снижение углеродного следа на 35%
• Экономия 4,5 МВт электроэнергии
• Сокращение отходов производства на 60%

Программа переработки включает:
- Прием лома от частных лиц и предприятий
- Сортировку и подготовку сырья
- Переплавку с использованием энергоэффективных технологий
- Производство высококачественных профилей

Благодаря внедрению замкнутого цикла производства, мы не только снижаем воздействие на окружающую среду, но и предлагаем клиентам более выгодные цены на готовую продукцию.

Эколог компании подчеркнул: "Каждая тонна переработанного алюминия экономит 14 МВт-ч электроэнергии по сравнению с производством из первичного сырья."`,
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '10 января 2025',
      readTime: '4 мин',
      category: 'Экология',
      views: 892
    },
    {
      id: 3,
      title: 'Партнерство с ведущими строительными компаниями Северо-Запада',
      excerpt: 'Заключены долгосрочные контракты на поставку профилей для крупных проектов',
      content: `"Авангард" расширяет географию поставок и заключает стратегические партнерские соглашения с ведущими строительными компаниями Северо-Западного региона.

Новые партнеры:
• ГК "СтройИнвест" - поставки для жилых комплексов
• "БалтСтрой" - профили для коммерческих объектов  
• "Северная Корона" - специализированные решения
• "ПитерДом" - профили для элитного жилья

Объем контрактов на 2025 год составляет более 180 млн рублей. Это позволит обеспечить стабильную загрузку производства и планомерное развитие компании.

Особенности сотрудничества:
- Индивидуальные технические решения
- Гибкие условия поставки
- Техническое сопровождение проектов
- Гарантийное обслуживание

В рамках партнерства планируется совместная разработка новых типов профилей для специфических задач современного строительства, включая энергоэффективные и "умные" здания.

Коммерческий директор отметил: "Долгосрочные партнерства - основа устойчивого развития. Мы готовы адаптировать наше производство под потребности каждого клиента."`,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '5 января 2025',
      readTime: '5 мин',
      category: 'Партнерство',
      views: 1456
    },
    {
      id: 4,
      title: 'Инновационная технология анодирования: новые возможности',
      excerpt: 'Внедрение передовых методов поверхностной обработки открывает новые горизонты',
      content: `Компания "Авангард" успешно внедрила инновационную технологию анодирования алюминиевых профилей, которая открывает новые возможности для декоративной и защитной обработки.

Преимущества новой технологии:
• Толщина анодного слоя до 25 мкм
• Более 50 цветовых решений
• Повышенная коррозионная стойкость
• Улучшенные декоративные свойства

Технические характеристики:
- Твердость покрытия: до 400 HV
- Стойкость к истиранию: класс AC4
- Цветостойкость: не менее 7 баллов
- Адгезия: 0 баллов по ISO 2409

Новая линия анодирования позволяет обрабатывать профили длиной до 6 метров с высокой равномерностью покрытия по всей поверхности.

Особое внимание уделено экологическим аспектам процесса:
- Замкнутый цикл водооборота
- Утилизация всех химических реагентов
- Минимальные выбросы в атмосферу

Технический директор подчеркнул: "Новая технология позволяет нам предложить клиентам профили с уникальными эстетическими и эксплуатационными характеристиками."`,
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '28 декабря 2024',
      readTime: '4 мин',
      category: 'Технологии',
      views: 743
    }
  ];

  const openNewsDetail = (news: NewsItem) => {
    setSelectedNews(news);
    document.body.style.overflow = 'hidden';
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Производство': 'from-sky-600 to-blue-700',
      'Экология': 'from-emerald-600 to-teal-700',
      'Партнерство': 'from-indigo-600 to-purple-700',
      'Технологии': 'from-amber-600 to-orange-700'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const scrollLeft = () => {
    const container = document.getElementById('news-scroll-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('news-scroll-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="новости" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-600/5 to-blue-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/5 to-purple-700/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-600/10 to-blue-700/10 backdrop-blur-sm border border-sky-600/20 rounded-full px-6 py-2 text-sm font-medium text-sky-500 mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Актуальные события</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Новости компании
              </span>
            </h2>
            
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Следите за развитием нашей компании, новыми технологиями и достижениями
            </p>
          </div>

          {/* News Cards Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center hover:from-sky-600/20 hover:to-blue-700/20 hover:border-sky-600/50 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-sky-500 transition-colors" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center hover:from-sky-600/20 hover:to-blue-700/20 hover:border-sky-600/50 transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 hover:text-sky-500 transition-colors" />
            </button>

            {/* Scrollable Container */}
            <div
              id="news-scroll-container"
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {newsItems.map((news) => (
                <div
                  key={news.id}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onClick={() => openNewsDetail(news)}
                >
                  {/* News Card */}
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-sky-600/30 h-full">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r ${getCategoryColor(news.category)} rounded-full text-sm font-semibold text-white shadow-lg`}>
                        {news.category}
                      </div>

                      {/* Trending Icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-sky-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-base text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{news.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{news.views}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-sky-300 transition-colors duration-300">
                        {news.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>

                      {/* Read More Button */}
                      <button className="group/btn inline-flex items-center space-x-2 text-sky-500 hover:text-sky-400 font-medium text-base transition-all duration-300">
                        <span>Читать далее</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(newsItems.length / 2) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-600 rounded-full transition-all duration-300 hover:bg-sky-500"
                />
              ))}
            </div>
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12">
            <button className="group relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/20">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Все новости</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeNewsDetail}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeNewsDetail}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <X className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedNews.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedNews.category)} rounded-full text-sm font-semibold text-white`}>
                  {selectedNews.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-6 text-base text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedNews.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{selectedNews.views} просмотров</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {selectedNews.title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                  {selectedNews.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default NewsSection;