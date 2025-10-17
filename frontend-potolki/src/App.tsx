import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
import CatalogSection from './components/CatalogSection';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ModelViewer from './components/ModelViewer';
import {b2} from "./assets/images.ts";

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'product'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const categoryTitles = {
    standard: 'Стандартные профили',
    cornices: 'Карнизы',
   // light: 'Световые линии',
    contour: 'Комплектующие'
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory('');
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentView('product');
  };

  const handleBackFromProduct = () => {
    setCurrentView('category');
    setSelectedProduct('');
  };

  const handleNavigateToHome = (section: string) => {
    setCurrentView('home');
    setSelectedCategory('');
    setSelectedProduct('');
    
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleOrderClick = () => {
    handleNavigateToHome('contact-form');
  };

  if (currentView === 'product') {
    return (
      <div className="min-h-screen bg-[#1A1A1A]">
        <Header onNavigate={handleNavigateToHome} />
        <ProductPage
          productId={selectedProduct}
          onBack={handleBackFromProduct}
          onOrderClick={handleOrderClick}
        />
        <Footer />
      </div>
    );
  }

  if (currentView === 'category') {
    return (
      <div className="min-h-screen bg-[#1A1A1A]">
        <Header onNavigate={handleNavigateToHome} />
        <CategoryPage
          categoryId={selectedCategory}
          categoryTitle={categoryTitles[selectedCategory as keyof typeof categoryTitles]}
          onBack={handleBackToHome}
          onCategoryChange={handleCategoryChange}
          onProductClick={handleProductClick}
          onOrderClick={handleOrderClick}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />
      <HeroSection />
      <section id="model-viewer" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              НОВИНКА - Карниз B2
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Изучите наш профиль в деталях. Используйте мышь для вращения и масштабирования модели
            </p>
          </div>'react-router-dom'

          {/* 3D Viewer Container */}
          <div className="max-w-6xl mx-auto">
            {/* Top Section: Image + 3D Model */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Left Side - Product Image (1/3 width) */}
              <div className="lg:col-span-1">
                <div className="bg-[#3A3A3A] rounded-lg overflow-hidden border border-gray-700">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src= {b2}
                      alt="Алюминиевый профиль BP-40"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          Карниз B2
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Стандартный алюминиевый профиль
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - 3D Model (2/3 width) */}
              <div className="lg:col-span-2">
                <ModelViewer 
                  modelPath='/3d/b2.glb'
                  title="Карниз B2"
                  description="Используйте левую кнопку мыши для вращения • Колесико мыши для масштабирования • Автовращение возобновляется через 4 секунды"
                />
              </div>
            </div>

            {/* Bottom Section: Full Width Description */}
            <div className="bg-[#3A3A3A] rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">
                Технические характеристики
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Материал:</span>
                    <span className="text-white font-medium">Алюминиевый сплав 6063</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Высота профиля:</span>
                    <span className="text-white font-medium">63.5 мм</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Ширина:</span>
                    <span className="text-white font-medium">108.5 мм</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Толщина стенки:</span>
                    <span className="text-white font-medium">1.1 мм</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Длина:</span>
                    <span className="text-white font-medium">2.0 м / 2.5 м / 3.2 м</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Цвет:</span>
                    <span className="text-white font-medium">Белый матовый, чёрный муар</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Вес:</span>
                    <span className="text-white font-medium">1.8 кг/м</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-gray-400">Рабочая температура:</span>
                    <span className="text-white font-medium">-40°C до +80°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Стандарт:</span>
                    <span className="text-white font-medium">ГОСТ 22233-2001</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-400 text-sm font-medium mb-2">
                  ✓ Соответствует ГОСТ стандартам
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Профиль изготовлен из высококачественного алюминиевого сплава.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CatalogSection onCategoryClick={handleCategoryClick} />
      {/* <AboutSection /> */}
      <ContactForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;