import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import ModelViewer from './ModelViewer';

import {
  bp40,
  bp40_ch,
  cornices,
  pk12,
  stenvoy,
  sten_1,
  sten_2,
  sten_3,
  pk14_ch,
  razdelitel,
  razdelitel_ch,
  universal,
  universal_ch,
  potoloch,
  potoloch_ch,
  z,
  z_ch,
  b2,
  pk15,
  pk15_ch,
  pk12_ch,
  am1,
  light_lines,
  furnitures,
} from '../assets/images.ts'

interface Product {
  id: string;
  name: string;
  images: string[];
  model3d: string;
  price: string;
  description: string;
  rating: number;
  inStock: boolean;
  specifications: { [key: string]: string };
  fullDescription: string;
}

interface ProductPageProps {
  productId: string;
  onBack: () => void;
  onOrderClick: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId, onBack, onOrderClick }) => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  // Mock product data - in real app this would come from API
  const getProductData = (id: string): Product => {
    const baseProduct = {
      id,
      images: [
        bp40,
        cornices,
        pk12
      ],
      model3d: undefined, // No default model available
      rating: 5,
      inStock: true,
      specifications: {},
      fullDescription: ''
    };

    const products: { [key: string]: Partial<Product> } = {
      'std-1': {
        name: 'Брус 40х40',
        images: [
          bp40,
          bp40_ch,
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        model3d: "/3d/bp40.glb",
        price: 'от 140 ₽/м',
        description: 'Классический профиль для натяжных потолков с теневым зазором',
        fullDescription: 'Профиль BP-40 - это классическое решение для создания натяжных потолков с эффектом теневого зазора. Изготовлен из высококачественного алюминиевого сплава, обеспечивает надежное крепление полотна и создает элегантный переход между стеной и потолком.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '40 мм',
          'Ширина': '25 мм',
          'Толщина стенки': '1.2 мм',
          'Длина': '2.0 м / 2.5 м / 3.2 м',
          'Цвет': 'Белый матовый',
          'Вес': '0.38 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'std-2': {
        name: 'Профиль Стенвой',
        images: [
          stenvoy,
          sten_1,
          sten_2,
          sten_3,
        ],
        model3d: '/3d/sten.glb',
        price: 'от 30 ₽/м',
        description: 'Усиленный профиль для больших площадей потолков',
        fullDescription: 'Стенвой профиль предназначен для создания надежных креплений в больших помещениях.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '50 мм',
          'Ширина': '30 мм',
          'Толщина стенки': '1.5 мм',
          'Длина': '2.0 м / 2.5 м',
          'Цвет': 'Белый матовый',
          'Вес': '1.2 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'cor-1': {
        name: 'Карниз ПК-14 стандартный',
        images: [
          cornices,
          pk14_ch,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        model3d: '/3d/pk14.glb',
        price: 'от 560 ₽/м',
        description: 'Стандартный карниз для штор и портьер',
        fullDescription: 'Карниз ПК-14 обеспечивает надежное крепление штор различного веса.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '45 мм',
          'Ширина': '108 мм',
          'Толщина стенки': '1.2 мм',
          'Длина': '2.0 м / 2.5 м / 3.2 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '1.3 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'std-3': {
        name: 'Разделитель',
        images: [
          razdelitel,
          razdelitel_ch
        ],
        model3d: '/3d/razdel.glb',
        price: 'от 115 ₽/м',
        description: 'Компактный профиль для небольших помещений',
        fullDescription: 'Разделитель предназначен для создания переходов между различными уровнями потолка.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '30 мм',
          'Ширина': '20 мм',
          'Толщина стенки': '1.2 мм',
          'Длина': '2.5 м / 3.2 м',
          'Цвет': '',
          'Вес': '0.34 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'std-4': {
        name: 'Профиль Универсальный',
        images: [
          universal,
          universal_ch
        ],
        model3d: '/3d/univers.glb',
        price: 'от 77 ₽/м',
        description: 'Премиум профиль с улучшенными характеристиками',
        fullDescription: 'Универсальный профиль подходит для различных типов натяжных потолков.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '45 мм',
          'Ширина': '28 мм',
          'Толщина стенки': '1.4 мм',
          'Длина': '2.0 м / 2.5 м',
          'Цвет': '',
          'Вес': '1.0 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'std-5': {
        name: 'Профиль Потолочный',
        images: [
          potoloch,
          potoloch_ch
        ],
        model3d: '/3d/potoloch.glb',
        price: 'от 55 ₽/м',
        description: 'Универсальный профиль для любых задач',
        fullDescription: 'Потолочный профиль обеспечивает надежное крепление к потолочным конструкциям.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '42 мм',
          'Ширина': '26 мм',
          'Толщина стенки': '1.3 мм',
          'Длина': '2.5 м / 3.0 м',
          'Цвет': 'Белый матовый',
          'Вес': '0.9 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'std-6': {
        name: 'Отбойник Z',
        images: [
          z,
          z_ch
        ],
        model3d: '/3d/potoloch.glb',
        price: 'от 47 ₽/м',
        description: 'Экономичный вариант для бюджетных проектов',
        fullDescription: 'Отбойник Z используется для создания защитных элементов в конструкции потолка.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '25 мм',
          'Ширина': '15 мм',
          'Толщина стенки': '0.8 мм',
          'Длина': '2.5 м / 3.0 м',
          'Цвет': 'Белый матовый',
          'Вес': '0.4 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'b2': {
        name: 'Карниз B2',
        images: [
          b2,
          pk14_ch,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        model3d: '/3d/b2.glb',
        price: 'от 750 ₽/м',
        description: 'Стандартный карниз для штор и портьер',
        fullDescription: 'Карниз B2 обеспечивает надежное крепление штор различного веса.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '63.5 мм',
          'Ширина': '108.5 мм',
          'Толщина стенки': '1.1 мм',
          'Длина': '2.0 м / 2.5м / 3.2 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '1.6 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'cor-2': {
        name: 'Карниз ПК-14 облегченный',
        images: [
          cornices,
          pk14_ch
        ],
        model3d: '/3d/pk14.glb',
        price: 'от 520 ₽/м',
        description: 'Двухрядный карниз для тюля и штор',
        fullDescription: 'Облегченная версия карниза ПК-14 для легких тканей.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '43.5 мм',
          'Ширина': '103 мм',
          'Толщина стенки': '1 мм',
          'Длина': '2.0 м / 2.5 м / 3.2 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '1.18 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'cor-3': {
        name: 'Карниз ПК-15',
        images: [
          pk15,
          pk15_ch,
        ],
        model3d: '/3d/pk15.glb',
        price: 'от 340 ₽/м',
        description: 'Компактный карниз для небольших окон',
        fullDescription: 'Карниз ПК-15 идеально подходит для небольших помещений.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '52 мм',
          'Ширина': '75 мм',
          'Толщина стенки': '1.2 мм',
          'Длина': '2.0 м / 2.5 м / 3.2 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '0.822 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'cor-4': {
        name: 'Карниз ПК-12',
        images: [
          pk12,
          pk12_ch,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        model3d: '/3d/pk12.glb',
        price: 'от 380 ₽/м',
        description: 'Премиум карниз с улучшенным дизайном',
        fullDescription: 'Карниз ПК-12 представляет собой премиум решение для современных интерьеров.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '38 мм',
          'Ширина': '22 мм',
          'Толщина стенки': '1.1 мм',
          'Длина': '2.5 м / 3.0 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '0.7 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'cor-5': {
        name: 'Карниз B-1 однорядный',
        images: [
          am1,
          pk12_ch,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        model3d: '/3d/b1.glb',
        price: 'от 380 ₽/м',
        description: 'Однорядный карниз с пазом для светодиодной ленты',
        fullDescription: 'Карниз B-1 представляет собой премиум решение для современных интерьеров.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '38 мм',
          'Ширина': '22 мм',
          'Толщина стенки': '1.1 мм',
          'Длина': '2.5 м / 3.0 м',
          'Цвет': 'Белый матовый / Чёрный муар',
          'Вес': '0.7 кг/м',
          'Рабочая температура': '-40°C до +80°C'
        }
      },
      'light-1': {
        name: 'Световая линия СЛ-40 LED',
        images: [
          light_lines,
          'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        price: '350 ₽/м',
        description: 'LED световая линия с равномерным освещением',
        fullDescription: 'Световая линия СЛ-40 обеспечивает равномерное LED освещение по всей длине профиля.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Высота профиля': '40 мм',
          'Ширина': '30 мм',
          'Мощность LED': '12 Вт/м',
          'Цветовая температура': '3000K-6000K',
          'Длина': '2.0 м',
          'Цвет': 'Белый матовый',
          'Класс защиты': 'IP20'
        }
      },
      'cont-1': {
        name: 'TL-вставка для карнизов',
        images: [
          furnitures,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        price: '45 ₽/шт',
        description: 'TL-вставка для карнизов',
        fullDescription: 'Закрывает технический зазор профиля и предает эстетический вид.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Угол соединения': '90°',
          'Совместимость': 'Профили 40мм',
          'Цвет': 'Белый матовый',
          'Вес': '25 г',
          'Упаковка': '50 шт'
        }
      },
      'cont-2': {
        name: 'Заглушки торцевые ПК-14',
        images: [
          furnitures,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        price: '45 ₽/шт',
        description: 'TL-вставка для карнизов',
        fullDescription: 'Закрывает технический зазор профиля и предает эстетический вид.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Угол соединения': '90°',
          'Совместимость': 'Профили 40мм',
          'Цвет': 'Белый матовый',
          'Вес': '25 г',
          'Упаковка': '50 шт'
        }
      },
      'cont-3': {
        name: 'Заглушки торцевые B-1',
        images: [
          furnitures,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        price: '45 ₽/шт',
        description: 'TL-вставка для карнизов',
        fullDescription: 'Закрывает технический зазор профиля и предает эстетический вид.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Угол соединения': '90°',
          'Совместимость': 'Профили 40мм',
          'Цвет': 'Белый матовый',
          'Вес': '25 г',
          'Упаковка': '50 шт'
        }
      },
      'cont-4': {
        name: 'Бандажная лента',
        images: [
          furnitures,
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        price: '45 ₽/шт',
        description: 'TL-вставка для карнизов',
        fullDescription: 'Закрывает технический зазор профиля и предает эстетический вид.',
        specifications: {
          'Материал': 'Алюминиевый сплав 6063',
          'Совместимость': 'Профили 40мм',
          'Цвет': 'Белый матовый',
          'Вес': '25 г',
          'Упаковка': '50 шт'
        }
      }
    };

    return { ...baseProduct, ...products[id] } as Product;
  };

  const product = getProductData(productId);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % product.images.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Назад к каталогу</span>
        </button>

        {/* Product Title */}
        <h1 className="text-3xl font-bold text-white mb-8">{product.name}</h1>

        {/* Top Section: Image Slider + 3D Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Slider */}
          <div className="bg-[#3A3A3A] rounded-lg overflow-hidden">
            <div className="relative h-96 grid place-items-center">
              <img
                src={product.images[currentImageSlide]}
                alt={product.name}
                className="h-full w-auto object-contain"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImageSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImageSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageSlide 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 3D Model Viewer */}
          <div>
            {product.model3d ? (
              <ModelViewer 
                modelPath={product.model3d}
                title={product.name}
                description="3D модель товара - используйте мышь для вращения"
              />
            ) : (
              <div className="bg-[#3A3A3A] rounded-lg h-96 md:h-[500px] flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">3D модель недоступна</p>
                  <p className="text-gray-500 text-sm">Для этого товара пока нет 3D модели</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Price, Description, Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price and Purchase */}
          <div className="bg-[#3A3A3A] rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-4">
              {product.price}
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                />
              ))}
              <span className="text-gray-400 ml-2">({product.rating}/5)</span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-400 font-medium">✓ В наличии</span>
              ) : (
                <span className="text-red-400 font-medium">✗ Нет в наличии</span>
              )}
            </div>

            {/* Purchase Button */}
            <button
              disabled={!product.inStock}
              onClick={onOrderClick}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 group"
            >
              <ShoppingCart size={20} />
              <span>Заказать товар</span>
            </button>
          </div>

          {/* Description */}
          <div className="bg-[#3A3A3A] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Описание</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Specifications */}
          <div className="bg-[#3A3A3A] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Характеристики</h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                  <span className="text-gray-400 text-sm">{key}:</span>
                  <span className="text-white font-medium text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;