import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contacts = [
    {
      icon: MapPin,
      title: 'Адрес офиса',
      primary: 'г. Санкт-Петербург, пер. Челиева, 17, офис 208',
      secondary: 'Пн-Пт: 9:00-18:00',
      color: 'text-yellow-400'
    },
    {
      icon: Phone,
      title: 'Телефон',
      primary: '+7 (981) 746-73-30',
      secondary: 'Пн-Пт: 9:00-20:00',
      color: 'text-yellow-400'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'avan-team@mail.ru',
      secondary: 'Отдел продаж',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Контакты
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом или посетите наш офис
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="bg-[#3A3A3A] rounded-lg p-6 text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-yellow-400/50 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] rounded-full mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Icon className={`w-8 h-8 ${contact.color} group-hover:text-black transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-300 font-medium mb-1">
                  {contact.primary}
                </p>
                <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{contact.secondary}</span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="bg-[#3A3A3A] rounded-lg overflow-hidden shadow-2xl">
          <div className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            {/* Map Placeholder */}
            <div className="text-center">
              <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Интерактивная карта</h3>
              <p className="text-gray-300 mb-4">г. Санкт-Петербург, пер. Челиева, 17, офис 208</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-2 mx-auto group">
                <span>Открыть в картах</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative elements to simulate map */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-24 bg-yellow-400/30 rounded-lg"></div>
              <div className="absolute top-20 right-16 w-28 h-20 bg-blue-400/30 rounded-lg"></div>
              <div className="absolute bottom-16 left-20 w-36 h-16 bg-green-400/30 rounded-lg"></div>
              <div className="absolute bottom-10 right-12 w-24 h-28 bg-purple-400/30 rounded-lg"></div>
              
              {/* Roads simulation */}
              <div className="absolute top-0 left-1/3 w-1 h-full bg-gray-400/40"></div>
              <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-400/40"></div>
            </div>

            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;